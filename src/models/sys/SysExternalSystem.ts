
import { globalInitAttributes } from '@config/database'
import DomsSystemType from '@models/doms/DomsSystemType'
import { DataTypes, Model } from 'sequelize'

class SysExternalSystem extends Model {
    declare sourceSystem: string
    declare sourceSystemName: string
    declare systemType: DomsSystemType
    public static idField = 'sourceSystem'
}

SysExternalSystem.init({
  sourceSystem: {
    type: DataTypes.STRING(30),
    primaryKey: true,
    allowNull: false
  },
  sourceSystemName: {
    type: DataTypes.STRING(50)
  },
  systemType: {
    type: DataTypes.STRING(2),
    references: {
      model: DomsSystemType,
      key: 'domain'
    }
  }
}, {
  ...globalInitAttributes,
  tableName: 'sys_external_system'
})

export default SysExternalSystem
