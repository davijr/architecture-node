import { Sequelize } from 'sequelize'
import logger from '@config/logger'
import path from 'path'
import fs from 'fs'
import { AppUtils } from '@utils/AppUtils'

// TODO leitura de certificados deve ser via Cloud Storage

const connectionOptions: any = {
  dialect: 'postgres',
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
}

if (AppUtils.isDevEnvironment() && AppUtils.isDBShowSQL()) {
  connectionOptions.logging = (msg: any) => logger.info(msg)
} else {
  const rootCas = require('ssl-root-cas').create()
  rootCas.addFile(path.join(__dirname, 'postgresql_dev.pem'))
  // other params
  connectionOptions.logging = false
  connectionOptions.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
      ca: fs.readFileSync(path.join(__dirname, 'root_dev.crt')).toString(),
      key: fs.readFileSync(path.join(__dirname, 'postgresql_dev.key')).toString(),
      cert: fs.readFileSync(path.join(__dirname, 'postgresql_dev.crt')).toString()
    }
  }
}
const database = new Sequelize(connectionOptions)

const globalInitAttributes = {
  sequelize: database,
  schema: process.env.PGSCHEMA || 'public',
  freezeTableName: true,
  underscored: true,
  timestamps: false
}

export {
  database,
  globalInitAttributes
}
