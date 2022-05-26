import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';

export interface DomsCcyConvTypeAttributes {
  domain: string;
  domainDesc?: string;
}

export type DomsCcyConvTypePk = "domain";
export type DomsCcyConvTypeId = DomsCcyConvType[DomsCcyConvTypePk];
export type DomsCcyConvTypeOptionalAttributes = "domainDesc";
export type DomsCcyConvTypeCreationAttributes = Optional<DomsCcyConvTypeAttributes, DomsCcyConvTypeOptionalAttributes>;

export class DomsCcyConvType extends Model<DomsCcyConvTypeAttributes, DomsCcyConvTypeCreationAttributes> implements DomsCcyConvTypeAttributes {
  domain!: string;
  domainDesc?: string;

  // DomsCcyConvType hasMany SysCurrency via currencyConvType
  sysCurrencies!: SysCurrency[];
  getSysCurrencies!: Sequelize.HasManyGetAssociationsMixin<SysCurrency>;
  setSysCurrencies!: Sequelize.HasManySetAssociationsMixin<SysCurrency, SysCurrencyId>;
  addSysCurrency!: Sequelize.HasManyAddAssociationMixin<SysCurrency, SysCurrencyId>;
  addSysCurrencies!: Sequelize.HasManyAddAssociationsMixin<SysCurrency, SysCurrencyId>;
  createSysCurrency!: Sequelize.HasManyCreateAssociationMixin<SysCurrency>;
  removeSysCurrency!: Sequelize.HasManyRemoveAssociationMixin<SysCurrency, SysCurrencyId>;
  removeSysCurrencies!: Sequelize.HasManyRemoveAssociationsMixin<SysCurrency, SysCurrencyId>;
  hasSysCurrency!: Sequelize.HasManyHasAssociationMixin<SysCurrency, SysCurrencyId>;
  hasSysCurrencies!: Sequelize.HasManyHasAssociationsMixin<SysCurrency, SysCurrencyId>;
  countSysCurrencies!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsCcyConvType {
    return DomsCcyConvType.init({
    domain: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    domainDesc: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'domain_desc'
    }
  }, {
    sequelize,
    tableName: 'doms_ccy_conv_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-DOMS_CCY_CONV_TYPE",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
