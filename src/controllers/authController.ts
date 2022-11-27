import logger from '@config/logger'
import { UserService } from '@services/UserService'
import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { AppUtils } from '@utils/AppUtils'
import ResponseModel from '@models/utils/ResponseModel'
import httpMiddleware from 'src/middleware/http.middleware'
import { can } from 'src/middleware/authorization.middleware'
import { database } from '@config/database'

const authRoutes = express.Router()
const userService = new UserService()

authRoutes.get('/user', httpMiddleware, can(['list_user']), async (req: any, res: any) => {
  try {
    const users: any = await userService.get({})
    users.forEach((user: any) => {
      user.password = undefined
    })
    return res.send(new ResponseModel('user', 'Search finished successfully.', users))
  } catch (error) {
    logger.error(error)
    return res.status(400).send(new ResponseModel('user', 'Search failed.', null))
  }
})

authRoutes.get('/user/:id', httpMiddleware, async (req: any, res: any) => {
  try {
    const id = req.params.id
    const users: any = await userService.get({ id })
    users.forEach((user: any) => {
      user.password = undefined
    })
    return res.send(new ResponseModel('user', 'Search finished successfully.', users))
  } catch (error) {
    logger.error(error)
    return res.status(400).send(new ResponseModel('user', 'Search failed.', null))
  }
})

authRoutes.post('/user', httpMiddleware, async (req: any, res: any) => {
  const { username } = req.body

  try {
    const user: any = await userService.getUserAuth(username)

    if (!user) {
      return res.status(400).send(new ResponseModel('user', 'User doesn\'t found.', null))
    }

    user.password = undefined

    return res.send(new ResponseModel('user', 'Search finished successfully.', user))
  } catch (error) {
    logger.error(error)
    return res.status(400).send(new ResponseModel('user', 'Search failed.', null))
  }
})

authRoutes.post('/register', async (req: any, res: any) => {
  const { username } = req.body

  try {
    let user: any = await userService.get({ username })
    if (user) {
      return res.status(400).send(new ResponseModel('user', 'User already exists.', null))
    }

    user = await userService.create({ data: req.body })

    user.password = undefined

    return res.send(new ResponseModel('user', 'User registration was completed successfully.', { user, token: generateToken({ id: user.id }) }))
  } catch (error) {
    logger.error(error)
    return res.status(400).send(new ResponseModel('user', 'User registration failed.', null))
  }
})

authRoutes.post('/authenticate', async (req: any, res: any) => {
  const { username, password } = req.body
  const authAttemptsToBlock = await AppUtils.getAuthAttemptsToBlock()
  const transaction = await database.transaction()
  const userModel = database.model('User')
  const user: any = await userModel.findOne({
    where: { username },
    transaction
  })

  try {
    if (!user) {
      await transaction.rollback()
      return res.status(400).send(new ResponseModel('user', 'The user doesn\'t exist.', null))
    }

    if (user.deactivatedAt) {
      await transaction.rollback()
      return res.status(400).send(new ResponseModel('user', 'User is deactivated.', null))
    }

    if (user.loginAttempts >= authAttemptsToBlock) {
      await user.update({
        loginAttempts: (user.loginAttempts || 0) + 1,
        lastLoginAttempt: new Date()
      }, transaction)
      await transaction.commit()
      return res.status(400).send(new ResponseModel('user', 'Authentication failed. Deactivated user because you made 3 or more failed attempts.', null))
    }

    if (!await bcrypt.compare(password, user.password)) {
      const loginAttempts = (user.loginAttempts || 0) + 1
      if (loginAttempts === authAttemptsToBlock) {
        user.set({ deactivatedAt: new Date() })
      }
      await user.update({
        loginAttempts,
        lastLoginAttempt: new Date()
      }, transaction)
      await user.save({ transaction })
      await transaction.commit()
      return res.status(400).send(new ResponseModel('user', `Invalid password. You have ${authAttemptsToBlock - user.loginAttempts} available attempts.`, null))
    }

    // set login attempts empty
    await user.update({
      loginAttempts: 0,
      lastLoginAttempt: undefined,
      lastLogin: user.currentLogin || new Date(),
      currentLogin: new Date()
    }, transaction)

    user.password = undefined
    await transaction.commit()
    return res.send(new ResponseModel('user', 'Authenticated successfully.', { user, token: generateToken({ id: user.id }) }))
  } catch (error) {
    logger.error(error)
    await transaction.rollback()
    return res.status(400).send(new ResponseModel('user', 'Authentication failed.', null))
  }
})

function generateToken (params = {}) {
  return jwt.sign(params, AppUtils.getJwtSecret(), {
    expiresIn: AppUtils.getJwtTokenExpiration()
  })
}

export default authRoutes
