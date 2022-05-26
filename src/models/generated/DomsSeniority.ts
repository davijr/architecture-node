import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortRecvMov, PortRecvMovId } from './PortRecvMov';
import type { PortRecvPos, PortRecvPosId } from './PortRecvPos';

export interface DomsSeniorityAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsSeniorityPk = "domain";
export type DomsSeniorityId = DomsSeniority[DomsSeniorityPk];
export type DomsSeniorityCreationAttributes = DomsSeniorityAttributes;

export class DomsSeniority extends Model<DomsSeniorityAttributes, DomsSeniorityCreationAttributes> implements DomsSeniorityAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsSeniority hasMany PortRecvMov via seniority
  portRecvMovs!: PortRecvMov[];
  getPortRecvMovs!: Sequelize.HasManyGetAssociationsMixin<PortRecvMov>;
  setPortRecvMovs!: Sequelize.HasManySetAssociationsMixin<PortRecvMov, PortRecvMovId>;
  addPortRecvMov!: Sequelize.HasManyAddAssociationMixin<PortRecvMov, PortRecvMovId>;
  addPortRecvMovs!: Sequelize.HasManyAddAssociationsMixin<PortRecvMov, PortRecvMovId>;
  createPortRecvMov!: Sequelize.HasManyCreateAssociationMixin<PortRecvMov>;
  removePortRecvMov!: Sequelize.HasManyRemoveAssociationMixin<PortRecvMov, PortRecvMovId>;
  removePortRecvMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvMov, PortRecvMovId>;
  hasPortRecvMov!: Sequelize.HasManyHasAssociationMixin<PortRecvMov, PortRecvMovId>;
  hasPortRecvMovs!: Sequelize.HasManyHasAssociationsMixin<PortRecvMov, PortRecvMovId>;
  countPortRecvMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsSeniority hasMany PortRecvPos via seniority
  portRecvPos!: PortRecvPos[];
  getPortRecvPos!: Sequelize.HasManyGetAssociationsMixin<PortRecvPos>;
  setPortRecvPos!: Sequelize.HasManySetAssociationsMixin<PortRecvPos, PortRecvPosId>;
  addPortRecvPo!: Sequelize.HasManyAddAssociationMixin<PortRecvPos, PortRecvPosId>;
  addPortRecvPos!: Sequelize.HasManyAddAssociationsMixin<PortRecvPos, PortRecvPosId>;
  createPortRecvPo!: Sequelize.HasManyCreateAssociationMixin<PortRecvPos>;
  removePortRecvPo!: Sequelize.HasManyRemoveAssociationMixin<PortRecvPos, PortRecvPosId>;
  removePortRecvPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvPos, PortRecvPosId>;
  hasPortRecvPo!: Sequelize.HasManyHasAssociationMixin<PortRecvPos, PortRecvPosId>;
  hasPortRecvPos!: Sequelize.HasManyHasAssociationsMixin<PortRecvPos, PortRecvPosId>;
  countPortRecvPos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsSeniority {
    return DomsSeniority.init({
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
    tableName: 'doms_seniority',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_seniority_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_seniority",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
