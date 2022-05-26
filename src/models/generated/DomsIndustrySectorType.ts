import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyDet, InvptyDetId } from './InvptyDet';

export interface DomsIndustrySectorTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsIndustrySectorTypePk = "domain";
export type DomsIndustrySectorTypeId = DomsIndustrySectorType[DomsIndustrySectorTypePk];
export type DomsIndustrySectorTypeCreationAttributes = DomsIndustrySectorTypeAttributes;

export class DomsIndustrySectorType extends Model<DomsIndustrySectorTypeAttributes, DomsIndustrySectorTypeCreationAttributes> implements DomsIndustrySectorTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsIndustrySectorType hasMany InvptyDet via industrySectorType
  invptyDets!: InvptyDet[];
  getInvptyDets!: Sequelize.HasManyGetAssociationsMixin<InvptyDet>;
  setInvptyDets!: Sequelize.HasManySetAssociationsMixin<InvptyDet, InvptyDetId>;
  addInvptyDet!: Sequelize.HasManyAddAssociationMixin<InvptyDet, InvptyDetId>;
  addInvptyDets!: Sequelize.HasManyAddAssociationsMixin<InvptyDet, InvptyDetId>;
  createInvptyDet!: Sequelize.HasManyCreateAssociationMixin<InvptyDet>;
  removeInvptyDet!: Sequelize.HasManyRemoveAssociationMixin<InvptyDet, InvptyDetId>;
  removeInvptyDets!: Sequelize.HasManyRemoveAssociationsMixin<InvptyDet, InvptyDetId>;
  hasInvptyDet!: Sequelize.HasManyHasAssociationMixin<InvptyDet, InvptyDetId>;
  hasInvptyDets!: Sequelize.HasManyHasAssociationsMixin<InvptyDet, InvptyDetId>;
  countInvptyDets!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsIndustrySectorType {
    return DomsIndustrySectorType.init({
    domain: {
      type: DataTypes.STRING(5),
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
    tableName: 'doms_industry_sector_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_industry_sector_type_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_industry_sector_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
