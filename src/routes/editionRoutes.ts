import logger from '@config/logger'
import { EditionService } from '@services/EditionService'
import express from 'express'

const editionRoutes = express.Router()
const editionService = new EditionService()

editionRoutes.get('/model/:model', async (req: any, res: any) => {
  const modelName = req.params.model
  logger.info('GET /' + req.params?.model)
  try {
    const items = await editionService.find({ model: modelName, searchOptions: req.query })
    if (!items) {
      return res.status(400).json({ message: 'No content.' })
    }
    return res.status(200).json(items)
  } catch (message) {
    return res.status(400).json({ message })
  }
})

editionRoutes.get('/model/:model/:param', async (req: any, res: any) => {
  const modelName = req.params.model
  logger.info('GET /model/:model/:param')
  const underlyingType = req.params
  res.status(200).json(await editionService.find({ model: modelName, data: underlyingType }))
})

editionRoutes.get('/model-attributes/:model', async (req: any, res: any) => {
  logger.info('GET /model-attributes/:model')
  const modelName = req.params.model
  res.status(200).json(await editionService.getAttributes(modelName))
})

editionRoutes.get('/menu-options', async (req: any, res: any) => {
  logger.info('GET /menu-options')
  res.status(200).json(await editionService.getMenuOptions())
})

editionRoutes.post('/model/:model/search', async (req: any, res: any) => {
  const modelName = req.params.model
  const searchOptions = req.params.searchOptions
  logger.info('POST /model/:model/search')
  try {
    res.status(200).json(await editionService.find({ model: modelName, data: searchOptions }))
  } catch (message) {
    return res.status(400).json({ message })
  }
})

editionRoutes.post('/model/:model', async (req: any, res: any) => {
  const modelName = req.params.model
  logger.info('POST /model/:model')
  try {
    res.status(200).json(await editionService.create({ model: modelName, data: req.body }))
  } catch (message) {
    return res.status(400).json({ message })
  }
})

editionRoutes.put('/model/:model', async (req, res) => {
  const modelName = req.params.model
  logger.info('PUT /model/:model')
  try {
    res.status(200).json(await editionService.update({ model: modelName, data: req.body }))
  } catch (message) {
    return res.status(400).json({ message })
  }
})

editionRoutes.delete('/model/:model/:param', async (req, res) => {
  const modelName = req.params.model
  const param = req.params.param
  logger.info('DELETE /model/:model/:param')
  try {
    res.status(200).json(await editionService.delete({ model: modelName, data: param }))
  } catch (message) {
    return res.status(400).json({ message })
  }
})

export default editionRoutes
