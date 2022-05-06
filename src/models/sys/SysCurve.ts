
import { globalInitAttributes } from '@config/database'
import DomsAccrualBasis from '@models/doms/DomsAccrualBasis'
import { DataTypes, Model } from 'sequelize'
import SysCurrency from './SysCurrency'

class SysCurve extends Model {
    declare curveName: string
    declare curveDescription: string
    declare accrualBasis: DomsAccrualBasis
    declare currencyCode: SysCurrency;
    public static idField = 'curveName'
}

SysCurve.init({
  curveName: {
    type: DataTypes.STRING(3),
    primaryKey: true,
    allowNull: false
  },
  curveDescription: {
    type: DataTypes.STRING(100)
  },
  accrualBasis: {
    type: DataTypes.STRING(2),
    references: {
      model: DomsAccrualBasis,
      key: 'domain'
    }
  },
  currencyCode: {
    type: DataTypes.STRING(3),
    references: {
      model: SysCurrency,
      key: 'currencyCode'
    }
  }
}, {
  ...globalInitAttributes,
  tableName: 'sys_curve'
})

export default SysCurve
