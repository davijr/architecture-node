
import { globalInitAttributes } from '@config/database'
import { DataTypes, Model } from 'sequelize'
import SysCurve from './SysCurve'
import SysUnderlying from './SysUnderlying'

class SysCurveUnderlyingLink extends Model {
    declare LinkId: number
    declare underlyingCode: SysUnderlying
    declare curveName: SysCurve
    public static idField = 'LinkId'
}

SysCurveUnderlyingLink.init({
  LinkId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'linkid'
  },
  underlyingCode: {
    type: DataTypes.STRING(50),
    references: {
      model: SysUnderlying,
      key: 'domain'
    }
  },
  curveName: {
    type: DataTypes.STRING(50),
    references: {
      model: SysCurve,
      key: 'domain'
    }
  }
}, {
  ...globalInitAttributes,
  tableName: 'sys_curve_underlying_link'
})

export default SysCurveUnderlyingLink
