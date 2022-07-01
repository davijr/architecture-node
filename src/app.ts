import '@config/environment'
import { database } from '@config/database'
import logger from '@config/logger'
import { initModels } from '@models/generated/initModels'
import { AppUtils } from '@utils/AppUtils'
import bodyParser from 'body-parser'
import express from 'express'
import mountRoutes from './routes'
import User from '@models/User'

(async () => {
  try {
    initModels(database)
    if (AppUtils.isDBSync()) {
      await database.sync()
    } else {
      await User.sync()
    }
  } catch (error) {
    logger.error(error)
  }
})()

const app = express()
app.use(bodyParser.json())
mountRoutes(app)

export default app
