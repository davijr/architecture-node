import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyDet, InvptyDetId } from './InvptyDet';

export interface DomsInvptyStatusAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsInvptyStatusPk = "domain";
export type DomsInvptyStatusId = DomsInvptyStatus[DomsInvptyStatusPk];
export type DomsInvptyStatusCreationAttributes = DomsInvptyStatusAttributes;

export class DomsInvptyStatus extends Model<DomsInvptyStatusAttributes, DomsInvptyStatusCreationAttributes> implements DomsInvptyStatusAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsInvptyStatus hasMany InvptyDet via invptyStatus
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsInvptyStatus {
    return DomsInvptyStatus.init({
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
    tableName: 'doms_invpty_status',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_invpty_status_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_invpty_status",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
