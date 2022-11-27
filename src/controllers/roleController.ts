import logger from '@config/logger'
import { RolePermissionService } from '@services/RolePermissionService'
import { RoleService } from '@services/RoleService'
import express from 'express'
import { is } from 'src/middleware/authorization.middleware'
import httpMiddleware from 'src/middleware/http.middleware'

const routes = express.Router()
routes.use(httpMiddleware)
const service = new RoleService()

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

routes.post('/permissions/:id', is(['admin']), async (req: any, res: any) => {
  const rolePermissionService = new RolePermissionService()
  const rolePermissionRequest = {
    roleId: req.params.id,
    permissions: req.body
  }
  logger.info('POST /permissions/:id')
  try {
    const result = await rolePermissionService.save(rolePermissionRequest)
    return res.json(result)
  } catch (e) {
    if (e instanceof Error) {
      logger.error(e.message)
      return res.status(400).json(e.message)
    }
  }
})

export default routes
