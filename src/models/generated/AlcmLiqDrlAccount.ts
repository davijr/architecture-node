import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmLiqDrlAcctGrp, AlcmLiqDrlAcctGrpId } from './AlcmLiqDrlAcctGrp';

export interface AlcmLiqDrlAccountAttributes {
  drlAccount?: string;
  drlDomainDescription?: string;
  drlAccountGroup: string;
  drlAccountSubsidiary: boolean;
  drlDerivedFromData: boolean;
  drlDerivedFormula?: string;
  drlDomainInitialDate: string;
  drlDomainEndDate?: string;
}

export type AlcmLiqDrlAccountOptionalAttributes = "drlAccount" | "drlDomainDescription" | "drlDerivedFormula" | "drlDomainEndDate";
export type AlcmLiqDrlAccountCreationAttributes = Optional<AlcmLiqDrlAccountAttributes, AlcmLiqDrlAccountOptionalAttributes>;

export class AlcmLiqDrlAccount extends Model<AlcmLiqDrlAccountAttributes, AlcmLiqDrlAccountCreationAttributes> implements AlcmLiqDrlAccountAttributes {
  drlAccount?: string;
  drlDomainDescription?: string;
  drlAccountGroup!: string;
  drlAccountSubsidiary!: boolean;
  drlDerivedFromData!: boolean;
  drlDerivedFormula?: string;
  drlDomainInitialDate!: string;
  drlDomainEndDate?: string;

  // AlcmLiqDrlAccount belongsTo AlcmLiqDrlAcctGrp via drlAccountGroup
  drlAccountGroupAlcmLiqDrlAcctGrp!: AlcmLiqDrlAcctGrp;
  getDrlAccountGroupAlcmLiqDrlAcctGrp!: Sequelize.BelongsToGetAssociationMixin<AlcmLiqDrlAcctGrp>;
  setDrlAccountGroupAlcmLiqDrlAcctGrp!: Sequelize.BelongsToSetAssociationMixin<AlcmLiqDrlAcctGrp, AlcmLiqDrlAcctGrpId>;
  createDrlAccountGroupAlcmLiqDrlAcctGrp!: Sequelize.BelongsToCreateAssociationMixin<AlcmLiqDrlAcctGrp>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqDrlAccount {
    return AlcmLiqDrlAccount.init({
    drlAccount: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'drl_account'
    },
    drlDomainDescription: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'drl_domain_description'
    },
    drlAccountGroup: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'alcm_liq_drl_acct_grp',
        key: 'drl_group_code'
      },
      field: 'drl_account_group'
    },
    drlAccountSubsidiary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'drl_account_subsidiary'
    },
    drlDerivedFromData: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'drl_derived_from_data'
    },
    drlDerivedFormula: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'drl_derived_formula'
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
    tableName: 'alcm_liq_drl_account',
    schema: 'bzdf',
    timestamps: false
  });
  }
}
