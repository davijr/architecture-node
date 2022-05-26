import * as Sequelize from 'sequelize'
import { Model } from 'sequelize'
import { globalInitAttributes } from '../config/database.js'

class User extends Model {
  declare id: string
  declare username: string
  declare password: string
  declare firstName: string
  declare lastName: string
}

User.init({
  id: {
    type: Sequelize.UUID,
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
    allowNull: false,
    unique: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  ...globalInitAttributes
})

export default User
