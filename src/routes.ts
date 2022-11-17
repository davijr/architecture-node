import userController from 'src/controllers/userController'
import authController from 'src/controllers/authController'
import roleController from 'src/controllers/roleController'
import permissionController from 'src/controllers/permissionController'
import userAccessControlController from 'src/controllers/userAccessControlController'
import editionController from 'src/controllers/editionController'
import reconciliationController from 'src/controllers/reconciliationController'

const BASE_URL = '/api'

export default (app: any) => {
  app.use(`${BASE_URL}/user`, userController)
  app.use(`${BASE_URL}/auth`, authController)
  app.use(`${BASE_URL}/role`, roleController)
  app.use(`${BASE_URL}/permission`, permissionController)
  app.use(`${BASE_URL}/uac`, userAccessControlController)
  app.use(`${BASE_URL}/edition`, editionController)
  app.use(`${BASE_URL}/reconciliation`, reconciliationController)
}
