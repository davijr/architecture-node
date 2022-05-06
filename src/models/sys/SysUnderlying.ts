
import { globalInitAttributes } from '@config/database'
import { DataTypes, Model } from 'sequelize'
import SysCurrency from './SysCurrency'
import SysUnderlyingType from './SysUnderlyingType'

class SysUnderlying extends Model {
    declare underlyingCode: string
    declare underlyingDescription: string
    declare underlyingCcy: SysCurrency
    declare underlyingType: SysUnderlyingType
    declare underlyingTickerBbg: string;
    declare underlyingTickerRfntvt: string;
    declare underlyingInitialDate: Date;
    declare underlyingEndDate: Date;
    public static idField = 'underlyingCode'
}

SysUnderlying.init({
  underlyingCode: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    allowNull: false
  },
  underlyingDescription: {
    type: DataTypes.STRING(255)
  },
  underlyingCcy: {
    type: DataTypes.STRING(3),
    references: {
      model: SysCurrency,
      key: 'currencyCode'
    }
  },
  underlyingType: {
    type: DataTypes.STRING(3),
    references: {
      model: SysUnderlyingType,
      key: 'underlyingType'
    }
  },
  underlyingTickerBbg: {
    type: DataTypes.STRING(200)
  },
  underlyingTickerRfntvt: {
    type: DataTypes.STRING(200)
  },
  underlyingInitialDate: {
    type: DataTypes.DATEONLY
  },
  underlyingEndDate: {
    type: DataTypes.DATEONLY
  }
}, {
  ...globalInitAttributes,
  tableName: 'sys_underlying'
})

export default SysUnderlying
