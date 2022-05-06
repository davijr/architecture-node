
import { globalInitAttributes } from '@config/database'
import DomsCcyConvType from '@models/doms/DomsCcyConvType'
import { DataTypes, Model } from 'sequelize'

class SysCurrency extends Model {
    declare currencyCode: string
    declare currencyName: string
    declare currencyConvType: DomsCcyConvType
    declare currencyNumericBacenCode: number
    declare recordInitialDate: Date
    declare recordEndDate: Date
    public static idField = 'currencyCode'
}

SysCurrency.init({
  currencyCode: {
    type: DataTypes.STRING(3),
    primaryKey: true,
    allowNull: false
  },
  currencyName: {
    type: DataTypes.STRING(100)
  },
  currencyConvType: {
    type: DataTypes.STRING(2),
    references: {
      model: DomsCcyConvType,
      key: 'domain'
    }
  },
  currencyNumericBacenCode: {
    type: DataTypes.INTEGER
  },
  recordInitialDate: {
    type: DataTypes.DATEONLY
  },
  recordEndDate: {
    type: DataTypes.DATEONLY
  }
}, {
  ...globalInitAttributes,
  tableName: 'sys_currency'
})

export default SysCurrency
