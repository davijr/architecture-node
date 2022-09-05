import logger from '@config/logger'
import { UserService } from '@services/UserService'
import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { AppUtils } from '@utils/AppUtils'
import ResponseModel from '@models/utils/ResponseModel'
import httpMiddleware from 'src/middleware/http.middleware'

const authRoutes = express.Router()
const userService = new UserService()

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
    let user: any = await userService.get(username)
    if (user.length > 0) {
      return res.status(400).send(new ResponseModel('user', 'User already exists.', null))
    }

    user = await userService.create({ data: req.body })

    user.password = undefined

    return res.send(new ResponseModel('user', 'Registrated successfully.', { user, token: generateToken({ id: user.id }) }))
  } catch (error) {
    logger.error(error)
    return res.status(400).send(new ResponseModel('user', 'Registration failed.', null))
  }
})

authRoutes.post('/authenticate', async (req: any, res: any) => {
  const { username, password } = req.body

  try {
    const user: any = await userService.getUserAuth(username)

    if (!user) {
      return res.status(400).send(new ResponseModel('user', 'User doesn\'t found.', null))
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).send(new ResponseModel('user', 'Invalid password.', null))
    }

    user.password = undefined

    return res.send(new ResponseModel('user', 'Authenticated successfully.', { user, token: generateToken({ id: user.id }) }))
  } catch (error) {
    logger.error(error)
    return res.status(400).send(new ResponseModel('user', 'Authentication failed.', null))
  }
})

function generateToken (params = {}) {
  return jwt.sign(params, AppUtils.getJwtSecret(), {
    expiresIn: AppUtils.getJwtTokenExpiration()
  })
}

export default authRoutes
