import { database } from '@config/database'
import logger from '@config/logger'
import ResponseModel from '@models/utils/ResponseModel'
import { UserService } from '@services/UserService'
import express from 'express'
import { is } from 'src/middleware/authorization.middleware'
import httpMiddleware from 'src/middleware/http.middleware'

const userRoutes = express.Router()
userRoutes.use(httpMiddleware)
const userService = new UserService()

userRoutes.get('/', httpMiddleware, is(['admin']), async (req: any, res: any) => {
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

userRoutes.get('/:username', httpMiddleware, is(['admin']), async (req: any, res: any) => {
  try {
    const id = req.params.id
    const users: any = await userService.get(id)
    users.forEach((user: any) => {
      user.password = undefined
    })
    return res.send(new ResponseModel('user', 'Search finished successfully.', users))
  } catch (error) {
    logger.error(error)
    return res.status(400).send(new ResponseModel('user', 'Search failed.', null))
  }
})

userRoutes.post('/search', httpMiddleware, is(['admin']), async (req: any, res: any) => {
  const modelName = req.params.model
  const searchOptions = req.params.searchOptions
  const model = database.model(modelName)
  logger.info('POST /search')
  res.status(200).json(await userService.get({ model, data: searchOptions }))
})

userRoutes.post('/', httpMiddleware, is(['admin']), async (req: any, res: any) => {
  const modelName = req.params.model
  const model = database.model(modelName)
  logger.info('POST /')
  res.status(200).json(await userService.create({ model, data: req.body }))
})

userRoutes.put('/', httpMiddleware, is(['admin']), async (req: any, res) => {
  const modelName = req.params.model
  const model = database.model(modelName)
  logger.info('PUT /')
  res.status(200).json(await userService.update({ model, data: req.body }))
})

userRoutes.delete('/:username', httpMiddleware, is(['admin']), async (req: any, res) => {
  const param = req.params.username
  logger.info('DELETE /:username')
  res.status(200).json(await userService.delete({ data: param }))
})

export default userRoutes
