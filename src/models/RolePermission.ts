import { DataTypes, Model } from 'sequelize'
import { globalInitAttributes } from '@config/database'
import Permission from './Permission'
import Role from './Role'

class RolePermission extends Model {
  declare role: Role
  declare permission: Permission
}

RolePermission.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  }
}, {
  ...globalInitAttributes,
  paranoid: false,
  tableName: 'frontend_role_permission'
})

export default RolePermission
