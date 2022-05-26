import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortDsecMov, PortDsecMovId } from './PortDsecMov';
import type { PortDsecPos, PortDsecPosId } from './PortDsecPos';
import type { PortNostroPos, PortNostroPosId } from './PortNostroPos';
import type { PortRepoMov, PortRepoMovId } from './PortRepoMov';
import type { PortRepoPos, PortRepoPosId } from './PortRepoPos';
import type { PortVostroPos, PortVostroPosId } from './PortVostroPos';

export interface DomsClientProprietaryAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsClientProprietaryPk = "domain";
export type DomsClientProprietaryId = DomsClientProprietary[DomsClientProprietaryPk];
export type DomsClientProprietaryCreationAttributes = DomsClientProprietaryAttributes;

export class DomsClientProprietary extends Model<DomsClientProprietaryAttributes, DomsClientProprietaryCreationAttributes> implements DomsClientProprietaryAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsClientProprietary hasMany PortDsecMov via clientProprietary
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
  // DomsClientProprietary hasMany PortDsecPos via clientProprietary
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
  // DomsClientProprietary hasMany PortNostroPos via clientProprietary
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
  // DomsClientProprietary hasMany PortRepoMov via clientProprietary
  portRepoMovs!: PortRepoMov[];
  getPortRepoMovs!: Sequelize.HasManyGetAssociationsMixin<PortRepoMov>;
  setPortRepoMovs!: Sequelize.HasManySetAssociationsMixin<PortRepoMov, PortRepoMovId>;
  addPortRepoMov!: Sequelize.HasManyAddAssociationMixin<PortRepoMov, PortRepoMovId>;
  addPortRepoMovs!: Sequelize.HasManyAddAssociationsMixin<PortRepoMov, PortRepoMovId>;
  createPortRepoMov!: Sequelize.HasManyCreateAssociationMixin<PortRepoMov>;
  removePortRepoMov!: Sequelize.HasManyRemoveAssociationMixin<PortRepoMov, PortRepoMovId>;
  removePortRepoMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoMov, PortRepoMovId>;
  hasPortRepoMov!: Sequelize.HasManyHasAssociationMixin<PortRepoMov, PortRepoMovId>;
  hasPortRepoMovs!: Sequelize.HasManyHasAssociationsMixin<PortRepoMov, PortRepoMovId>;
  countPortRepoMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsClientProprietary hasMany PortRepoPos via clientProprietary
  portRepoPos!: PortRepoPos[];
  getPortRepoPos!: Sequelize.HasManyGetAssociationsMixin<PortRepoPos>;
  setPortRepoPos!: Sequelize.HasManySetAssociationsMixin<PortRepoPos, PortRepoPosId>;
  addPortRepoPo!: Sequelize.HasManyAddAssociationMixin<PortRepoPos, PortRepoPosId>;
  addPortRepoPos!: Sequelize.HasManyAddAssociationsMixin<PortRepoPos, PortRepoPosId>;
  createPortRepoPo!: Sequelize.HasManyCreateAssociationMixin<PortRepoPos>;
  removePortRepoPo!: Sequelize.HasManyRemoveAssociationMixin<PortRepoPos, PortRepoPosId>;
  removePortRepoPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoPos, PortRepoPosId>;
  hasPortRepoPo!: Sequelize.HasManyHasAssociationMixin<PortRepoPos, PortRepoPosId>;
  hasPortRepoPos!: Sequelize.HasManyHasAssociationsMixin<PortRepoPos, PortRepoPosId>;
  countPortRepoPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsClientProprietary hasMany PortVostroPos via clientProprietary
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsClientProprietary {
    return DomsClientProprietary.init({
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
    tableName: 'doms_client_proprietary',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_client_proprietary_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_client_proprietary",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
