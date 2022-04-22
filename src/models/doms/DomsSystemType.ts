import { globalInitAttributes } from '@config/database'
import { DataTypes, Model } from 'sequelize'

class DomsSystemType extends Model {
    declare domain: string
    declare domainDesc: string
    public static idField = 'domain'
}

DomsSystemType.init({
  domain: {
    type: DataTypes.STRING(2),
    primaryKey: true,
    allowNull: false
  },
  domainDesc: {
    type: DataTypes.STRING(500)
  }
}, {
  ...globalInitAttributes,
  tableName: 'doms_system_type'
})

export default DomsSystemType
