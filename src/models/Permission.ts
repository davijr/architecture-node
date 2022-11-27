import * as Sequelize from 'sequelize'
import { Model } from 'sequelize'
import { globalInitAttributes } from '@config/database'

class Permission extends Model {
  declare id: number
  declare name: string
  declare description: string
}

Permission.init({
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
  description: {
    type: Sequelize.STRING
  }
}, {
  ...globalInitAttributes,
  tableName: 'frontend_permission'
})

export default Permission
