import { globalInitAttributes } from '@config/database'
import { DataTypes, Model } from 'sequelize'

class DomsAccrualBasis extends Model {
    declare domain: string
    declare domainDesc: string
    public static idField = 'domain'
}

DomsAccrualBasis.init({
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
  tableName: 'doms_accrual_basis'
})

export default DomsAccrualBasis
