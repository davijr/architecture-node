import * as Sequelize from 'sequelize'
import { Model } from 'sequelize'
import { globalInitAttributes } from '@config/database'

class SystemParam extends Model {
  declare id: number
  declare name: string
  declare value: string
}

SystemParam.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  value: {
    type: Sequelize.STRING,
    allowNull: false
  },
  metadata: {
    type: Sequelize.STRING
  }
}, {
  ...globalInitAttributes,
  tableName: 'frontend_system_param'
})

export default SystemParam
