import authController from 'src/controllers/authController'
import editionController from 'src/controllers/editionController'
import reconciliationController from 'src/controllers/reconciliationController'

const BASE_URL = '/api'

export default (app: any) => {
  app.use(`${BASE_URL}/auth`, authController)
  app.use(`${BASE_URL}/edition`, editionController)
  app.use(`${BASE_URL}/reconciliation`, reconciliationController)
}
