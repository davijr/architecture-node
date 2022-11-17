import * as Sequelize from 'sequelize'
import { Model } from 'sequelize'
import { globalInitAttributes } from '@config/database'

class Audit extends Model {
  declare id: number
  declare username: string
  declare entity: string
  declare action: 'CREATE' | 'UPDATE' | 'DELETE'
}

Audit.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  entity: {
    type: Sequelize.STRING,
    allowNull: false
  },
  action: {
    type: Sequelize.STRING,
    allowNull: false,
    values: ['CREATE', 'UPDATE', 'DELETE']
  },
  previousValues: {
    type: Sequelize.JSONB
  },
  currentValues: {
    type: Sequelize.JSONB
  }
}, {
  ...globalInitAttributes,
  tableName: 'frontend_audit'
})

export default Audit
