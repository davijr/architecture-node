import logger from '@config/logger'
import { ReconciliationService } from '@services/ReconciliationService'
import express from 'express'
import { can } from 'src/middleware/authorization.middleware'
import httpMiddleware from 'src/middleware/http.middleware'

const reconciliationRoutes = express.Router()
reconciliationRoutes.use(httpMiddleware)

const reconciliationService = new ReconciliationService()
const modelName = 'ReconDimensionGroup'

reconciliationRoutes.get('/', can(['Recon', 'Reconciliation']), async (req: any, res: any) => {
  logger.info('GET /' + req.params?.model)
  try {
    const items = await reconciliationService.find({ model: modelName, searchOptions: req.query })
    if (!items) {
      return res.status(400).json({ message: 'No content.' })
    }
    return res.status(200).json(items)
  } catch (message) {
    return res.status(400).json({ message })
  }
})

reconciliationRoutes.get('/:param', can(['Recon', 'Reconciliation']), async (req: any, res: any) => {
  const params = req.params
  logger.info('GET /reconciliation')
  res.status(200).json(await reconciliationService.find({ model: modelName, data: params }))
})

reconciliationRoutes.post('/:search', can(['Recon', 'Reconciliation']), async (req: any, res: any) => {
  const searchOptions = req.params.searchOptions
  logger.info(' /:search')
  logger.info(`POST /${modelName}/${searchOptions}`)
  try {
    res.status(200).json(await reconciliationService.find({ model: modelName, data: searchOptions }))
  } catch (error) {
    return res.status(400).json(error)
  }
})

reconciliationRoutes.post('/', can(['Recon', 'Reconciliation']), async (req: any, res: any) => {
  logger.info('POST /reconciliation')
  try {
    const result = await reconciliationService.save(req.body)
    res.status(200).json(result)
  } catch (error) {
    logger.error(error)
    return res.status(400).json(error)
  }
})

reconciliationRoutes.put('/', can(['Recon', 'Reconciliation']), async (req, res) => {
  logger.info(`PUT /${modelName}`)
  try {
    res.status(200).json(await reconciliationService.save(req.body))
  } catch (error) {
    return res.status(400).json(error)
  }
})

reconciliationRoutes.delete('/:param', can(['Recon', 'Reconciliation']), async (req, res) => {
  const param = req.params.param
  logger.info(`DELETE /${modelName}/${param}`)
  try {
    res.status(200).json(await reconciliationService.delete({ model: modelName, data: param }))
  } catch (error) {
    return res.status(400).json(error)
  }
})

export default reconciliationRoutes
