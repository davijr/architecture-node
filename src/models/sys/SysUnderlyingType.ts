import { Model, DataTypes } from 'sequelize'
import { globalInitAttributes } from '@config/database'

// SYS_UNDERLYING_TYPE
class SysUnderlyingType extends Model {
  declare underlyingType: string
  declare underlyingTypeDescription: string
  public static idField = 'underlyingType'
}

SysUnderlyingType.init({
  underlyingType: { // UNDERLYING_TYPE
    type: DataTypes.STRING(3),
    primaryKey: true,
    allowNull: false
  },
  underlyingTypeDescription: { // UNDERLYING_TYPE_DESCRIPTION
    type: DataTypes.STRING(100)
  }
}, {
  ...globalInitAttributes,
  modelName: 'sys_underlying_type'
})

export default SysUnderlyingType
