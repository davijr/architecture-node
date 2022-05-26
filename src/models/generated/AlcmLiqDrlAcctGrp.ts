import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { AlcmLiqDrlAccount } from './AlcmLiqDrlAccount'

export interface AlcmLiqDrlAcctGrpAttributes {
  drlGroupCode: string;
  drlGroupName: string;
  drlDomainInitialDate: string;
  drlDomainEndDate?: string;
}

export type AlcmLiqDrlAcctGrpPk = 'drlGroupCode';
export type AlcmLiqDrlAcctGrpId = AlcmLiqDrlAcctGrp[AlcmLiqDrlAcctGrpPk];
export type AlcmLiqDrlAcctGrpOptionalAttributes = 'drlDomainEndDate';
export type AlcmLiqDrlAcctGrpCreationAttributes = Optional<AlcmLiqDrlAcctGrpAttributes, AlcmLiqDrlAcctGrpOptionalAttributes>;

export class AlcmLiqDrlAcctGrp extends Model<AlcmLiqDrlAcctGrpAttributes, AlcmLiqDrlAcctGrpCreationAttributes> implements AlcmLiqDrlAcctGrpAttributes {
  drlGroupCode!: string;
  drlGroupName!: string;
  drlDomainInitialDate!: string;
  drlDomainEndDate?: string;

  // AlcmLiqDrlAcctGrp hasMany AlcmLiqDrlAccount via drlAccountGroup
  alcmLiqDrlAccounts!: AlcmLiqDrlAccount[];
  getAlcmLiqDrlAccounts!: Sequelize.HasManyGetAssociationsMixin<AlcmLiqDrlAccount>;
  countAlcmLiqDrlAccounts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel (sequelize: Sequelize.Sequelize): typeof AlcmLiqDrlAcctGrp {
    return AlcmLiqDrlAcctGrp.init({
      drlGroupCode: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
        field: 'drl_group_code'
      },
      drlGroupName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'drl_group_name'
      },
      drlDomainInitialDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'drl_domain_initial_date'
      },
      drlDomainEndDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'drl_domain_end_date'
      }
    }, {
      sequelize,
      tableName: 'alcm_liq_drl_acct_grp',
      schema: 'bzdf',
      timestamps: false,
      indexes: [
        {
          name: 'PK-ALCM_LIQ_DRL_ACCT_GRP',
          unique: true,
          fields: [
            { name: 'drl_group_code' }
          ]
        }
      ]
    })
  }
}
