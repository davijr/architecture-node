import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortHedgeLnk, PortHedgeLnkId } from './PortHedgeLnk';

export interface DomsHedgeAccountingTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsHedgeAccountingTypePk = "domain";
export type DomsHedgeAccountingTypeId = DomsHedgeAccountingType[DomsHedgeAccountingTypePk];
export type DomsHedgeAccountingTypeCreationAttributes = DomsHedgeAccountingTypeAttributes;

export class DomsHedgeAccountingType extends Model<DomsHedgeAccountingTypeAttributes, DomsHedgeAccountingTypeCreationAttributes> implements DomsHedgeAccountingTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsHedgeAccountingType hasMany PortHedgeLnk via hedgeAccountingType
  portHedgeLnks!: PortHedgeLnk[];
  getPortHedgeLnks!: Sequelize.HasManyGetAssociationsMixin<PortHedgeLnk>;
  setPortHedgeLnks!: Sequelize.HasManySetAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  addPortHedgeLnk!: Sequelize.HasManyAddAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  addPortHedgeLnks!: Sequelize.HasManyAddAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  createPortHedgeLnk!: Sequelize.HasManyCreateAssociationMixin<PortHedgeLnk>;
  removePortHedgeLnk!: Sequelize.HasManyRemoveAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  removePortHedgeLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasPortHedgeLnk!: Sequelize.HasManyHasAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasPortHedgeLnks!: Sequelize.HasManyHasAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  countPortHedgeLnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsHedgeAccountingType {
    return DomsHedgeAccountingType.init({
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
    tableName: 'doms_hedge_accounting_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "pk_doms_hedge_accounting_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
