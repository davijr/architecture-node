import { Model, DataTypes } from 'sequelize'
import database from '@config/database'

class User extends Model {}

User.init({
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING
  },
  email: DataTypes.STRING
}, {
  sequelize: database,
  modelName: 'user'
})

export default User
