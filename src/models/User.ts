import * as Sequelize from 'sequelize'
import { Model } from 'sequelize'
import { globalInitAttributes } from '@config/database'
import bcrypt from 'bcryptjs'

class User extends Model {
  declare id: number
  declare username: string
  declare password: string
  declare email: string
  declare firstName: string
  declare lastName: string
}

User.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
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
  }/*,
  loginAttempts: {
    type: Sequelize.INTEGER
  },
  loginAttemptDate: {
    type: Sequelize.DATE
  } */
}, {
  ...globalInitAttributes,
  tableName: 'frontend_user'
})

User.beforeSave(async (user, options) => {
  user.password = await bcrypt.hash(user.password, 10)
})

export default User
