import { Sequelize } from 'sequelize'
import logger from '@config/logger'
import path from 'path'
import fs from 'fs'
import { AppUtils } from '@utils/AppUtils'

// TODO Leitura de certificados deve ser via Cloud Storage

const connectionOptions: any = {
  dialect: 'postgres',
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
}

if (AppUtils.isDBShowSQL()) {
  connectionOptions.logging = (msg: any) => logger.info(msg)
}

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

const database = new Sequelize(connectionOptions)

// if local use tunnel-ssh
if (AppUtils.isUseTunnel()) {
  console.log('start tunnel')
  const tunnel = require('tunnel-ssh')
  const config = {
    username: process.env.TUNNEL_CONFIG_USERNAME,
    host: process.env.TUNNEL_CONFIG_HOST,
    port: process.env.TUNNEL_CONFIG_PORT,
    privateKey: fs.readFileSync(process.env.TUNNEL_CONFIG_PRIVATE_KEY as string),
    dstHost: process.env.TUNNEL_CONFIG_DSTHOST,
    dstPort: process.env.TUNNEL_CONFIG_DSTPORT
  }
  const server = tunnel(config, async function (error: any, server: any) {
    if (error) {
      console.error('error', error)
    } else {
      console.log('tunnel ok')
      const { Client } = require('pg')
      const config = {
        database: 'dwhBD',
        host: '127.0.0.1',
        ssl: {
          rejectUnauthorized: false,
          ca: fs.readFileSync('C:\\dev\\other_files\\root_dev.crt').toString(),
          key: fs.readFileSync('C:\\dev\\other_files\\postgresql_dev.key').toString(),
          cert: fs.readFileSync('C:\\dev\\other_files\\postgresql_dev.crt').toString()
        }
      }
      const client = new Client(config)
      client.connect((err: any) => {
        if (err) {
          console.error('error connecting', err.stack)
        } else {
          console.log('connected')
          client
            .query('SELECT * FROM sys_external_system')
            .then((res: any) => console.log(res.rows))
            .catch((e: any) => console.error(e.stack))
        }
      })
    }
  })
  server.on('error', function (err: any) {
    console.error('Something bad happened:', err)
  })
}

const globalInitAttributes = {
  sequelize: database,
  schema: process.env.PGSCHEMA || 'public',
  freezeTableName: true,
  underscored: true,
  timestamps: false,
  paranoid: true
}

export {
  database,
  globalInitAttributes
}
