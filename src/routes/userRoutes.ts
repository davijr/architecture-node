import logger from '@config/logger'
import { ModelUtils } from '@models/utils/ModelUtils'
import { EditionService } from '@services/EditionService'
import express from 'express'

const userRoutes = express.Router()
const userService = new EditionService()

userRoutes.get('/', async (req: any, res: any) => {
  const modelName = req.params.model
  const model = ModelUtils.getInstance(modelName)
  logger.info('GET /' + req.params?.model)
  res.status(200).json(await userService.find({ model, searchOptions: req.query }))
})

userRoutes.get('/:username', async (req: any, res: any) => {
  const modelName = req.params.model
  const model = ModelUtils.getInstance(modelName)
  logger.info('GET /:param')
  const underlyingType = req.params
  res.status(200).json(await userService.find({ model, data: underlyingType }))
})

userRoutes.post('/search', async (req: any, res: any) => {
  const modelName = req.params.model
  const searchOptions = req.params.searchOptions
  const model = ModelUtils.getInstance(modelName)
  logger.info('POST /search')
  res.status(200).json(await userService.find({ model, data: searchOptions }))
})

userRoutes.post('/', async (req: any, res: any) => {
  const modelName = req.params.model
  const model = ModelUtils.getInstance(modelName)
  logger.info('POST /')
  res.status(200).json(await userService.create({ model, data: req.body }))
})

userRoutes.put('/', async (req, res) => {
  const modelName = req.params.model
  const model = ModelUtils.getInstance(modelName)
  logger.info('PUT /')
  res.status(200).json(await userService.update({ model, data: req.body }))
})

userRoutes.delete('/:username', async (req, res) => {
  const param = req.params.username
  logger.info('DELETE /:username')
  res.status(200).json(await userService.delete({ data: username }))
})

export default userRoutes
