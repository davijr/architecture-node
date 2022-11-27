import { DataTypes, Model } from 'sequelize'
import { globalInitAttributes } from '@config/database'
import Permission from './Permission'
import User from './User'

class UserPermission extends Model {
  declare user: User
  declare permission: Permission
}

UserPermission.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  }
}, {
  ...globalInitAttributes,
  paranoid: false,
  tableName: 'frontend_user_permission'
})

export default UserPermission
