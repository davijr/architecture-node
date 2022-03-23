import '@config/environment'
import logger from '@config/logger'

import database from '@config/database'
import User from '@model/User'
import TabelaTeste from '@model/TabelaTeste'

import express from 'express'
import mountRoutes from '@routes/routes'

(async () => {
  try {
    const resultado = await database.sync()
    logger.info('chegou aqui')
    // logger.info(resultado);
  } catch (error) {
    logger.error(error)
  }
})()

const app = express()
mountRoutes(app)

export default app
