import * as Sequelize from 'sequelize'
import { Model } from 'sequelize'
import { globalInitAttributes } from '@config/database'
import Permission from './Permission'
import RolePermission from './RolePermission'

class Role extends Model {
  declare id?: number
  declare name: string
  declare description?: string
}

Role.init({
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
  tableName: 'frontend_role'
})

Role.belongsToMany(Permission, { through: RolePermission, as: 'permissions', constraints: true })
Permission.belongsToMany(Role, { through: RolePermission, as: 'roles', constraints: true })

export default Role
