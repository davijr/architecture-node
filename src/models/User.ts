import * as Sequelize from 'sequelize'
import { Model } from 'sequelize'
import { globalInitAttributes } from '@config/database'
import bcrypt from 'bcryptjs'
import Role from './Role'
import Permission from './Permission'
import UserRole from './UserRole'
import UserPermission from './UserPemission'

class User extends Model {
  declare id: number
  declare username: string
  declare password: string
  declare email: string
  declare firstName: string
  declare lastName: string
  declare roles: string
  declare permissions: string
  declare loginAttempts: number
  declare lastLoginAttempt: Date
  declare currentLogin: Date
  declare lastLogin: Date
  declare deactivatedAt: Date
}

User.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  },
  loginAttempts: {
    type: Sequelize.INTEGER
  },
  lastLoginAttempt: {
    type: Sequelize.DATE
  },
  currentLogin: {
    type: Sequelize.DATE
  },
  lastLogin: {
    type: Sequelize.DATE
  },
  deactivatedAt: {
    type: Sequelize.DATE
  }
}, {
  ...globalInitAttributes,
  tableName: 'frontend_user'
})

User.beforeCreate(async (user, options) => {
  user.password = await bcrypt.hash(user.password, 10)
})

User.belongsToMany(Role, { through: UserRole, as: 'roles', constraints: true })
Role.belongsToMany(User, { through: UserRole, as: 'users', constraints: true })

User.belongsToMany(Permission, { through: UserPermission, as: 'permissions', constraints: true })
Permission.belongsToMany(User, { through: UserPermission, as: 'users', constraints: true })

export default User
