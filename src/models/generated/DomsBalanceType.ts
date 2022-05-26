import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmCapitalAccountParam, AlcmCapitalAccountParamId } from './AlcmCapitalAccountParam';

export interface DomsBalanceTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsBalanceTypePk = "domain";
export type DomsBalanceTypeId = DomsBalanceType[DomsBalanceTypePk];
export type DomsBalanceTypeCreationAttributes = DomsBalanceTypeAttributes;

export class DomsBalanceType extends Model<DomsBalanceTypeAttributes, DomsBalanceTypeCreationAttributes> implements DomsBalanceTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsBalanceType hasMany AlcmCapitalAccountParam via balanceType
  alcmCapitalAccountParams!: AlcmCapitalAccountParam[];
  getAlcmCapitalAccountParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalAccountParam>;
  setAlcmCapitalAccountParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  addAlcmCapitalAccountParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  addAlcmCapitalAccountParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  createAlcmCapitalAccountParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalAccountParam>;
  removeAlcmCapitalAccountParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  removeAlcmCapitalAccountParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  hasAlcmCapitalAccountParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  hasAlcmCapitalAccountParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  countAlcmCapitalAccountParams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsBalanceType {
    return DomsBalanceType.init({
    domain: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    domainDesc: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'domain_desc'
    }
  }, {
    sequelize,
    tableName: 'doms_balance_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_balance_type_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_domsbalancetype",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
