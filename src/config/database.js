import Sequelize from 'sequelize'
import logger from '@config/logger'

const connectionString = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`
const connectionOptions = {
  dialect: 'postgres'
}
// environment
const env = ''.concat(process.env.NODE_ENV).trim()
if (env === 'dev') {
  connectionOptions.logging = msg => logger.debug(msg)
} else {
  connectionOptions.logging = false
}
const database = new Sequelize(connectionString, connectionOptions)

export default database
