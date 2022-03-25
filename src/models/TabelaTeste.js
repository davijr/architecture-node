import * as Sequelize from 'sequelize'
import database from '../config/database.js'

const TabelaTeste = database.define('tabela_teste', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  outroCampo: Sequelize.STRING
})

export default TabelaTeste
