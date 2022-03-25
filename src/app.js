import '@config/environment'
import logger from '@config/logger'

import database from '@config/database'
import User from '@models/User'
// import TabelaTeste from '@model/TabelaTeste'

import express from 'express'
import mountRoutes from './routes'

(async () => {
  try {
    const resultado = await database.sync()
    logger.info('chegou aqui')
    logger.info(await User.findAll())
  } catch (error) {
    logger.error(error)
  }
})()

const app = express()
mountRoutes(app)

export default app
