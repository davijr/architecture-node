import logger from '@config/logger'
import express from 'express'
import { UserAccessControlService } from '@services/UserAccessControlService'
import httpMiddleware from 'src/middleware/http.middleware'
import { is } from 'src/middleware/authorization.middleware'

const routes = express.Router()
routes.use(httpMiddleware)
const service = new UserAccessControlService()

routes.post('/', is(['admin']), async (req: any, res: any) => {
  logger.info('POST /')
  try {
    const result = await service.save(req.body)
    return res.json(result)
  } catch (e) {
    if (e instanceof Error) {
      logger.error(e.message)
      return res.status(400).json(e.message)
    }
  }
})

export default routes
