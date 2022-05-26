import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PnlOperincCsf, PnlOperincCsfId } from './PnlOperincCsf';
import type { PortDsecCsf, PortDsecCsfId } from './PortDsecCsf';
import type { PortFincCsf, PortFincCsfId } from './PortFincCsf';
import type { PortFoexCsf, PortFoexCsfId } from './PortFoexCsf';
import type { PortFutuCsf, PortFutuCsfId } from './PortFutuCsf';
import type { PortLoanCsf, PortLoanCsfId } from './PortLoanCsf';
import type { PortNdfsCsf, PortNdfsCsfId } from './PortNdfsCsf';
import type { PortNostroCsf, PortNostroCsfId } from './PortNostroCsf';
import type { PortOtherCsf, PortOtherCsfId } from './PortOtherCsf';
import type { PortRecvCsf, PortRecvCsfId } from './PortRecvCsf';
import type { PortRepoCsf, PortRepoCsfId } from './PortRepoCsf';
import type { PortSwapCsf, PortSwapCsfId } from './PortSwapCsf';
import type { PortVostroCsf, PortVostroCsfId } from './PortVostroCsf';

export interface DomsPayReceiveAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsPayReceivePk = "domain";
export type DomsPayReceiveId = DomsPayReceive[DomsPayReceivePk];
export type DomsPayReceiveCreationAttributes = DomsPayReceiveAttributes;

export class DomsPayReceive extends Model<DomsPayReceiveAttributes, DomsPayReceiveCreationAttributes> implements DomsPayReceiveAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsPayReceive hasMany PnlOperincCsf via legType
  pnlOperincCsfs!: PnlOperincCsf[];
  getPnlOperincCsfs!: Sequelize.HasManyGetAssociationsMixin<PnlOperincCsf>;
  setPnlOperincCsfs!: Sequelize.HasManySetAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  addPnlOperincCsf!: Sequelize.HasManyAddAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  addPnlOperincCsfs!: Sequelize.HasManyAddAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  createPnlOperincCsf!: Sequelize.HasManyCreateAssociationMixin<PnlOperincCsf>;
  removePnlOperincCsf!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  removePnlOperincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasPnlOperincCsf!: Sequelize.HasManyHasAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasPnlOperincCsfs!: Sequelize.HasManyHasAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  countPnlOperincCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortDsecCsf via legType
  portDsecCsfs!: PortDsecCsf[];
  getPortDsecCsfs!: Sequelize.HasManyGetAssociationsMixin<PortDsecCsf>;
  setPortDsecCsfs!: Sequelize.HasManySetAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  addPortDsecCsf!: Sequelize.HasManyAddAssociationMixin<PortDsecCsf, PortDsecCsfId>;
  addPortDsecCsfs!: Sequelize.HasManyAddAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  createPortDsecCsf!: Sequelize.HasManyCreateAssociationMixin<PortDsecCsf>;
  removePortDsecCsf!: Sequelize.HasManyRemoveAssociationMixin<PortDsecCsf, PortDsecCsfId>;
  removePortDsecCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  hasPortDsecCsf!: Sequelize.HasManyHasAssociationMixin<PortDsecCsf, PortDsecCsfId>;
  hasPortDsecCsfs!: Sequelize.HasManyHasAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  countPortDsecCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortFincCsf via legType
  portFincCsfs!: PortFincCsf[];
  getPortFincCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFincCsf>;
  setPortFincCsfs!: Sequelize.HasManySetAssociationsMixin<PortFincCsf, PortFincCsfId>;
  addPortFincCsf!: Sequelize.HasManyAddAssociationMixin<PortFincCsf, PortFincCsfId>;
  addPortFincCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFincCsf, PortFincCsfId>;
  createPortFincCsf!: Sequelize.HasManyCreateAssociationMixin<PortFincCsf>;
  removePortFincCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFincCsf, PortFincCsfId>;
  removePortFincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincCsf, PortFincCsfId>;
  hasPortFincCsf!: Sequelize.HasManyHasAssociationMixin<PortFincCsf, PortFincCsfId>;
  hasPortFincCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFincCsf, PortFincCsfId>;
  countPortFincCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortFoexCsf via legType
  portFoexCsfs!: PortFoexCsf[];
  getPortFoexCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFoexCsf>;
  setPortFoexCsfs!: Sequelize.HasManySetAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  addPortFoexCsf!: Sequelize.HasManyAddAssociationMixin<PortFoexCsf, PortFoexCsfId>;
  addPortFoexCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  createPortFoexCsf!: Sequelize.HasManyCreateAssociationMixin<PortFoexCsf>;
  removePortFoexCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFoexCsf, PortFoexCsfId>;
  removePortFoexCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  hasPortFoexCsf!: Sequelize.HasManyHasAssociationMixin<PortFoexCsf, PortFoexCsfId>;
  hasPortFoexCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  countPortFoexCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortFutuCsf via legType
  portFutuCsfs!: PortFutuCsf[];
  getPortFutuCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFutuCsf>;
  setPortFutuCsfs!: Sequelize.HasManySetAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  addPortFutuCsf!: Sequelize.HasManyAddAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  addPortFutuCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  createPortFutuCsf!: Sequelize.HasManyCreateAssociationMixin<PortFutuCsf>;
  removePortFutuCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  removePortFutuCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  hasPortFutuCsf!: Sequelize.HasManyHasAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  hasPortFutuCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  countPortFutuCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortLoanCsf via legType
  portLoanCsfs!: PortLoanCsf[];
  getPortLoanCsfs!: Sequelize.HasManyGetAssociationsMixin<PortLoanCsf>;
  setPortLoanCsfs!: Sequelize.HasManySetAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  addPortLoanCsf!: Sequelize.HasManyAddAssociationMixin<PortLoanCsf, PortLoanCsfId>;
  addPortLoanCsfs!: Sequelize.HasManyAddAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  createPortLoanCsf!: Sequelize.HasManyCreateAssociationMixin<PortLoanCsf>;
  removePortLoanCsf!: Sequelize.HasManyRemoveAssociationMixin<PortLoanCsf, PortLoanCsfId>;
  removePortLoanCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  hasPortLoanCsf!: Sequelize.HasManyHasAssociationMixin<PortLoanCsf, PortLoanCsfId>;
  hasPortLoanCsfs!: Sequelize.HasManyHasAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  countPortLoanCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortNdfsCsf via legType
  portNdfsCsfs!: PortNdfsCsf[];
  getPortNdfsCsfs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsCsf>;
  setPortNdfsCsfs!: Sequelize.HasManySetAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  addPortNdfsCsf!: Sequelize.HasManyAddAssociationMixin<PortNdfsCsf, PortNdfsCsfId>;
  addPortNdfsCsfs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  createPortNdfsCsf!: Sequelize.HasManyCreateAssociationMixin<PortNdfsCsf>;
  removePortNdfsCsf!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsCsf, PortNdfsCsfId>;
  removePortNdfsCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  hasPortNdfsCsf!: Sequelize.HasManyHasAssociationMixin<PortNdfsCsf, PortNdfsCsfId>;
  hasPortNdfsCsfs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  countPortNdfsCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortNostroCsf via legType
  portNostroCsfs!: PortNostroCsf[];
  getPortNostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortNostroCsf>;
  setPortNostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  addPortNostroCsf!: Sequelize.HasManyAddAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  addPortNostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  createPortNostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortNostroCsf>;
  removePortNostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  removePortNostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  hasPortNostroCsf!: Sequelize.HasManyHasAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  hasPortNostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  countPortNostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortOtherCsf via legType
  portOtherCsfs!: PortOtherCsf[];
  getPortOtherCsfs!: Sequelize.HasManyGetAssociationsMixin<PortOtherCsf>;
  setPortOtherCsfs!: Sequelize.HasManySetAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  addPortOtherCsf!: Sequelize.HasManyAddAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  addPortOtherCsfs!: Sequelize.HasManyAddAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  createPortOtherCsf!: Sequelize.HasManyCreateAssociationMixin<PortOtherCsf>;
  removePortOtherCsf!: Sequelize.HasManyRemoveAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  removePortOtherCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  hasPortOtherCsf!: Sequelize.HasManyHasAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  hasPortOtherCsfs!: Sequelize.HasManyHasAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  countPortOtherCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortRecvCsf via legType
  portRecvCsfs!: PortRecvCsf[];
  getPortRecvCsfs!: Sequelize.HasManyGetAssociationsMixin<PortRecvCsf>;
  setPortRecvCsfs!: Sequelize.HasManySetAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  addPortRecvCsf!: Sequelize.HasManyAddAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  addPortRecvCsfs!: Sequelize.HasManyAddAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  createPortRecvCsf!: Sequelize.HasManyCreateAssociationMixin<PortRecvCsf>;
  removePortRecvCsf!: Sequelize.HasManyRemoveAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  removePortRecvCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  hasPortRecvCsf!: Sequelize.HasManyHasAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  hasPortRecvCsfs!: Sequelize.HasManyHasAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  countPortRecvCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortRepoCsf via legType
  portRepoCsfs!: PortRepoCsf[];
  getPortRepoCsfs!: Sequelize.HasManyGetAssociationsMixin<PortRepoCsf>;
  setPortRepoCsfs!: Sequelize.HasManySetAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  addPortRepoCsf!: Sequelize.HasManyAddAssociationMixin<PortRepoCsf, PortRepoCsfId>;
  addPortRepoCsfs!: Sequelize.HasManyAddAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  createPortRepoCsf!: Sequelize.HasManyCreateAssociationMixin<PortRepoCsf>;
  removePortRepoCsf!: Sequelize.HasManyRemoveAssociationMixin<PortRepoCsf, PortRepoCsfId>;
  removePortRepoCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  hasPortRepoCsf!: Sequelize.HasManyHasAssociationMixin<PortRepoCsf, PortRepoCsfId>;
  hasPortRepoCsfs!: Sequelize.HasManyHasAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  countPortRepoCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortSwapCsf via legType
  portSwapCsfs!: PortSwapCsf[];
  getPortSwapCsfs!: Sequelize.HasManyGetAssociationsMixin<PortSwapCsf>;
  setPortSwapCsfs!: Sequelize.HasManySetAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  addPortSwapCsf!: Sequelize.HasManyAddAssociationMixin<PortSwapCsf, PortSwapCsfId>;
  addPortSwapCsfs!: Sequelize.HasManyAddAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  createPortSwapCsf!: Sequelize.HasManyCreateAssociationMixin<PortSwapCsf>;
  removePortSwapCsf!: Sequelize.HasManyRemoveAssociationMixin<PortSwapCsf, PortSwapCsfId>;
  removePortSwapCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  hasPortSwapCsf!: Sequelize.HasManyHasAssociationMixin<PortSwapCsf, PortSwapCsfId>;
  hasPortSwapCsfs!: Sequelize.HasManyHasAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  countPortSwapCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsPayReceive hasMany PortVostroCsf via legType
  portVostroCsfs!: PortVostroCsf[];
  getPortVostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortVostroCsf>;
  setPortVostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  addPortVostroCsf!: Sequelize.HasManyAddAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  addPortVostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  createPortVostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortVostroCsf>;
  removePortVostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  removePortVostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  hasPortVostroCsf!: Sequelize.HasManyHasAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  hasPortVostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  countPortVostroCsfs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsPayReceive {
    return DomsPayReceive.init({
    domain: {
      type: DataTypes.STRING(1),
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
    tableName: 'doms_pay_receive',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_pay_receive_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_pay_receive",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
