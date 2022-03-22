import * as environment from './config/environment.js'
import logger from './config/logger.js'


import database from './config/database.js'
import User from './model/User.js'
import TabelaTeste from './model/TabelaTeste.js'

(async () => {
    try {
        const resultado = await database.sync();
        logger.info(resultado);
    } catch (error) {
        logger.info(error);
    }
})();

import express from 'express'
import mountRoutes from './routes/routes.js'

const app = express()
mountRoutes(app)

export default app