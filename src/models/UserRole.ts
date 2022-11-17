import { DataTypes, Model } from 'sequelize'
import { globalInitAttributes } from '@config/database'
import Role from './Role'
import User from './User'

class UserRole extends Model {
  declare user: User
  declare role: Role
}

UserRole.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  }
}, {
  ...globalInitAttributes,
  paranoid: false,
  tableName: 'frontend_user_role'
})

export default UserRole
