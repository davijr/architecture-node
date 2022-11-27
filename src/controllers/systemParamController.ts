import logger from '@config/logger'
import { SystemParamService } from '@services/SystemParamService'
import express from 'express'
import { is } from 'src/middleware/authorization.middleware'
import httpMiddleware from 'src/middleware/http.middleware'

const routes = express.Router()
routes.use(httpMiddleware)
const service = new SystemParamService()

routes.get('/', is(['admin']), async (req: any, res: any) => {
  logger.info('GET /')
  res.status(200).json(await service.get({}))
})

routes.get('/:name', is(['admin']), async (req: any, res: any) => {
  logger.info('GET /:param')
  const param = req.params.name
  res.status(200).json(await service.get({ name: param }))
})

routes.post('/', is(['admin']), async (req: any, res: any) => {
  logger.info('POST /')
  res.status(200).json(await service.create(req.body))
})

routes.put('/', is(['admin']), async (req, res) => {
  logger.info('PUT /')
  res.status(200).json(await service.update(req.body))
})

routes.delete('/:name', is(['admin']), async (req, res) => {
  const param = req.params.name
  logger.info('DELETE /:param')
  res.status(200).json(await service.delete(param))
})

export default routes
