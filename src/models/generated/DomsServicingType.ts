import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortDsecMov, PortDsecMovId } from './PortDsecMov';
import type { PortDsecPos, PortDsecPosId } from './PortDsecPos';
import type { PortNostroPos, PortNostroPosId } from './PortNostroPos';
import type { PortVostroPos, PortVostroPosId } from './PortVostroPos';

export interface DomsServicingTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsServicingTypePk = "domain";
export type DomsServicingTypeId = DomsServicingType[DomsServicingTypePk];
export type DomsServicingTypeCreationAttributes = DomsServicingTypeAttributes;

export class DomsServicingType extends Model<DomsServicingTypeAttributes, DomsServicingTypeCreationAttributes> implements DomsServicingTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsServicingType hasMany PortDsecMov via servicingType
  portDsecMovs!: PortDsecMov[];
  getPortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setPortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addPortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addPortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createPortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removePortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removePortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasPortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasPortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countPortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsServicingType hasMany PortDsecPos via servicingType
  portDsecPos!: PortDsecPos[];
  getPortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setPortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addPortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addPortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createPortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removePortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removePortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasPortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasPortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countPortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsServicingType hasMany PortNostroPos via servicingType
  portNostroPos!: PortNostroPos[];
  getPortNostroPos!: Sequelize.HasManyGetAssociationsMixin<PortNostroPos>;
  setPortNostroPos!: Sequelize.HasManySetAssociationsMixin<PortNostroPos, PortNostroPosId>;
  addPortNostroPo!: Sequelize.HasManyAddAssociationMixin<PortNostroPos, PortNostroPosId>;
  addPortNostroPos!: Sequelize.HasManyAddAssociationsMixin<PortNostroPos, PortNostroPosId>;
  createPortNostroPo!: Sequelize.HasManyCreateAssociationMixin<PortNostroPos>;
  removePortNostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortNostroPos, PortNostroPosId>;
  removePortNostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroPos, PortNostroPosId>;
  hasPortNostroPo!: Sequelize.HasManyHasAssociationMixin<PortNostroPos, PortNostroPosId>;
  hasPortNostroPos!: Sequelize.HasManyHasAssociationsMixin<PortNostroPos, PortNostroPosId>;
  countPortNostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsServicingType hasMany PortVostroPos via servicingType
  portVostroPos!: PortVostroPos[];
  getPortVostroPos!: Sequelize.HasManyGetAssociationsMixin<PortVostroPos>;
  setPortVostroPos!: Sequelize.HasManySetAssociationsMixin<PortVostroPos, PortVostroPosId>;
  addPortVostroPo!: Sequelize.HasManyAddAssociationMixin<PortVostroPos, PortVostroPosId>;
  addPortVostroPos!: Sequelize.HasManyAddAssociationsMixin<PortVostroPos, PortVostroPosId>;
  createPortVostroPo!: Sequelize.HasManyCreateAssociationMixin<PortVostroPos>;
  removePortVostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortVostroPos, PortVostroPosId>;
  removePortVostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroPos, PortVostroPosId>;
  hasPortVostroPo!: Sequelize.HasManyHasAssociationMixin<PortVostroPos, PortVostroPosId>;
  hasPortVostroPos!: Sequelize.HasManyHasAssociationsMixin<PortVostroPos, PortVostroPosId>;
  countPortVostroPos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsServicingType {
    return DomsServicingType.init({
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
    tableName: 'doms_servicing_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_servicing_type_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_servicing_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
