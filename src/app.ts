import '@config/environment'
import { database } from '@config/database'
import logger from '@config/logger'
import { initModels } from '@models/generated/initModels'
import { AppUtils } from '@utils/AppUtils'
import bodyParser from 'body-parser'
import express from 'express'
import httpHeader from './middleware/http.middleware'
import mountRoutes from './routes'

(async () => {
  try {
    initModels(database)
    if (AppUtils.isDBSync()) {
      await database.sync()
    }
  } catch (error) {
    logger.error(error)
  }
})()

const app = express()
app.use(bodyParser.json())
app.use(httpHeader)
mountRoutes(app)

export default app
