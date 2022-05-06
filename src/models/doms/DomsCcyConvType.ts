import { globalInitAttributes } from '@config/database'
import { DataTypes, Model } from 'sequelize'

class DomsCcyConvType extends Model {
    declare domain: string
    declare domainDesc: string
    public static idField = 'domain'
}

DomsCcyConvType.init({
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
  tableName: 'doms_ccy_conv_type'
})

export default DomsCcyConvType
