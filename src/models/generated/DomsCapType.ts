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

export interface DomsCapTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsCapTypePk = "domain";
export type DomsCapTypeId = DomsCapType[DomsCapTypePk];
export type DomsCapTypeCreationAttributes = DomsCapTypeAttributes;

export class DomsCapType extends Model<DomsCapTypeAttributes, DomsCapTypeCreationAttributes> implements DomsCapTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsCapType hasMany PnlOperincCsf via capType
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
  // DomsCapType hasMany PnlOperincCsf via floorType
  floorTypePnlOperincCsfs!: PnlOperincCsf[];
  getFloorTypePnlOperincCsfs!: Sequelize.HasManyGetAssociationsMixin<PnlOperincCsf>;
  setFloorTypePnlOperincCsfs!: Sequelize.HasManySetAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  addFloorTypePnlOperincCsf!: Sequelize.HasManyAddAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  addFloorTypePnlOperincCsfs!: Sequelize.HasManyAddAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  createFloorTypePnlOperincCsf!: Sequelize.HasManyCreateAssociationMixin<PnlOperincCsf>;
  removeFloorTypePnlOperincCsf!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  removeFloorTypePnlOperincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasFloorTypePnlOperincCsf!: Sequelize.HasManyHasAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasFloorTypePnlOperincCsfs!: Sequelize.HasManyHasAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  countFloorTypePnlOperincCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortDsecCsf via floorType
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
  // DomsCapType hasMany PortDsecCsf via capType
  capTypePortDsecCsfs!: PortDsecCsf[];
  getCapTypePortDsecCsfs!: Sequelize.HasManyGetAssociationsMixin<PortDsecCsf>;
  setCapTypePortDsecCsfs!: Sequelize.HasManySetAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  addCapTypePortDsecCsf!: Sequelize.HasManyAddAssociationMixin<PortDsecCsf, PortDsecCsfId>;
  addCapTypePortDsecCsfs!: Sequelize.HasManyAddAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  createCapTypePortDsecCsf!: Sequelize.HasManyCreateAssociationMixin<PortDsecCsf>;
  removeCapTypePortDsecCsf!: Sequelize.HasManyRemoveAssociationMixin<PortDsecCsf, PortDsecCsfId>;
  removeCapTypePortDsecCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  hasCapTypePortDsecCsf!: Sequelize.HasManyHasAssociationMixin<PortDsecCsf, PortDsecCsfId>;
  hasCapTypePortDsecCsfs!: Sequelize.HasManyHasAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  countCapTypePortDsecCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortFincCsf via floorType
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
  // DomsCapType hasMany PortFincCsf via capType
  capTypePortFincCsfs!: PortFincCsf[];
  getCapTypePortFincCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFincCsf>;
  setCapTypePortFincCsfs!: Sequelize.HasManySetAssociationsMixin<PortFincCsf, PortFincCsfId>;
  addCapTypePortFincCsf!: Sequelize.HasManyAddAssociationMixin<PortFincCsf, PortFincCsfId>;
  addCapTypePortFincCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFincCsf, PortFincCsfId>;
  createCapTypePortFincCsf!: Sequelize.HasManyCreateAssociationMixin<PortFincCsf>;
  removeCapTypePortFincCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFincCsf, PortFincCsfId>;
  removeCapTypePortFincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincCsf, PortFincCsfId>;
  hasCapTypePortFincCsf!: Sequelize.HasManyHasAssociationMixin<PortFincCsf, PortFincCsfId>;
  hasCapTypePortFincCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFincCsf, PortFincCsfId>;
  countCapTypePortFincCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortFoexCsf via floorType
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
  // DomsCapType hasMany PortFoexCsf via capType
  capTypePortFoexCsfs!: PortFoexCsf[];
  getCapTypePortFoexCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFoexCsf>;
  setCapTypePortFoexCsfs!: Sequelize.HasManySetAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  addCapTypePortFoexCsf!: Sequelize.HasManyAddAssociationMixin<PortFoexCsf, PortFoexCsfId>;
  addCapTypePortFoexCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  createCapTypePortFoexCsf!: Sequelize.HasManyCreateAssociationMixin<PortFoexCsf>;
  removeCapTypePortFoexCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFoexCsf, PortFoexCsfId>;
  removeCapTypePortFoexCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  hasCapTypePortFoexCsf!: Sequelize.HasManyHasAssociationMixin<PortFoexCsf, PortFoexCsfId>;
  hasCapTypePortFoexCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  countCapTypePortFoexCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortFutuCsf via capType
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
  // DomsCapType hasMany PortFutuCsf via floorType
  floorTypePortFutuCsfs!: PortFutuCsf[];
  getFloorTypePortFutuCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFutuCsf>;
  setFloorTypePortFutuCsfs!: Sequelize.HasManySetAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  addFloorTypePortFutuCsf!: Sequelize.HasManyAddAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  addFloorTypePortFutuCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  createFloorTypePortFutuCsf!: Sequelize.HasManyCreateAssociationMixin<PortFutuCsf>;
  removeFloorTypePortFutuCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  removeFloorTypePortFutuCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  hasFloorTypePortFutuCsf!: Sequelize.HasManyHasAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  hasFloorTypePortFutuCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  countFloorTypePortFutuCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortLoanCsf via capType
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
  // DomsCapType hasMany PortLoanCsf via floorType
  floorTypePortLoanCsfs!: PortLoanCsf[];
  getFloorTypePortLoanCsfs!: Sequelize.HasManyGetAssociationsMixin<PortLoanCsf>;
  setFloorTypePortLoanCsfs!: Sequelize.HasManySetAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  addFloorTypePortLoanCsf!: Sequelize.HasManyAddAssociationMixin<PortLoanCsf, PortLoanCsfId>;
  addFloorTypePortLoanCsfs!: Sequelize.HasManyAddAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  createFloorTypePortLoanCsf!: Sequelize.HasManyCreateAssociationMixin<PortLoanCsf>;
  removeFloorTypePortLoanCsf!: Sequelize.HasManyRemoveAssociationMixin<PortLoanCsf, PortLoanCsfId>;
  removeFloorTypePortLoanCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  hasFloorTypePortLoanCsf!: Sequelize.HasManyHasAssociationMixin<PortLoanCsf, PortLoanCsfId>;
  hasFloorTypePortLoanCsfs!: Sequelize.HasManyHasAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  countFloorTypePortLoanCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortNdfsCsf via floorType
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
  // DomsCapType hasMany PortNdfsCsf via capType
  capTypePortNdfsCsfs!: PortNdfsCsf[];
  getCapTypePortNdfsCsfs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsCsf>;
  setCapTypePortNdfsCsfs!: Sequelize.HasManySetAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  addCapTypePortNdfsCsf!: Sequelize.HasManyAddAssociationMixin<PortNdfsCsf, PortNdfsCsfId>;
  addCapTypePortNdfsCsfs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  createCapTypePortNdfsCsf!: Sequelize.HasManyCreateAssociationMixin<PortNdfsCsf>;
  removeCapTypePortNdfsCsf!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsCsf, PortNdfsCsfId>;
  removeCapTypePortNdfsCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  hasCapTypePortNdfsCsf!: Sequelize.HasManyHasAssociationMixin<PortNdfsCsf, PortNdfsCsfId>;
  hasCapTypePortNdfsCsfs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  countCapTypePortNdfsCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortNostroCsf via floorType
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
  // DomsCapType hasMany PortNostroCsf via capType
  capTypePortNostroCsfs!: PortNostroCsf[];
  getCapTypePortNostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortNostroCsf>;
  setCapTypePortNostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  addCapTypePortNostroCsf!: Sequelize.HasManyAddAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  addCapTypePortNostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  createCapTypePortNostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortNostroCsf>;
  removeCapTypePortNostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  removeCapTypePortNostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  hasCapTypePortNostroCsf!: Sequelize.HasManyHasAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  hasCapTypePortNostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  countCapTypePortNostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortOtherCsf via floorType
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
  // DomsCapType hasMany PortOtherCsf via capType
  capTypePortOtherCsfs!: PortOtherCsf[];
  getCapTypePortOtherCsfs!: Sequelize.HasManyGetAssociationsMixin<PortOtherCsf>;
  setCapTypePortOtherCsfs!: Sequelize.HasManySetAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  addCapTypePortOtherCsf!: Sequelize.HasManyAddAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  addCapTypePortOtherCsfs!: Sequelize.HasManyAddAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  createCapTypePortOtherCsf!: Sequelize.HasManyCreateAssociationMixin<PortOtherCsf>;
  removeCapTypePortOtherCsf!: Sequelize.HasManyRemoveAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  removeCapTypePortOtherCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  hasCapTypePortOtherCsf!: Sequelize.HasManyHasAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  hasCapTypePortOtherCsfs!: Sequelize.HasManyHasAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  countCapTypePortOtherCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortRecvCsf via capType
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
  // DomsCapType hasMany PortRecvCsf via floorType
  floorTypePortRecvCsfs!: PortRecvCsf[];
  getFloorTypePortRecvCsfs!: Sequelize.HasManyGetAssociationsMixin<PortRecvCsf>;
  setFloorTypePortRecvCsfs!: Sequelize.HasManySetAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  addFloorTypePortRecvCsf!: Sequelize.HasManyAddAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  addFloorTypePortRecvCsfs!: Sequelize.HasManyAddAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  createFloorTypePortRecvCsf!: Sequelize.HasManyCreateAssociationMixin<PortRecvCsf>;
  removeFloorTypePortRecvCsf!: Sequelize.HasManyRemoveAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  removeFloorTypePortRecvCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  hasFloorTypePortRecvCsf!: Sequelize.HasManyHasAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  hasFloorTypePortRecvCsfs!: Sequelize.HasManyHasAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  countFloorTypePortRecvCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortRepoCsf via floorType
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
  // DomsCapType hasMany PortRepoCsf via capType
  capTypePortRepoCsfs!: PortRepoCsf[];
  getCapTypePortRepoCsfs!: Sequelize.HasManyGetAssociationsMixin<PortRepoCsf>;
  setCapTypePortRepoCsfs!: Sequelize.HasManySetAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  addCapTypePortRepoCsf!: Sequelize.HasManyAddAssociationMixin<PortRepoCsf, PortRepoCsfId>;
  addCapTypePortRepoCsfs!: Sequelize.HasManyAddAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  createCapTypePortRepoCsf!: Sequelize.HasManyCreateAssociationMixin<PortRepoCsf>;
  removeCapTypePortRepoCsf!: Sequelize.HasManyRemoveAssociationMixin<PortRepoCsf, PortRepoCsfId>;
  removeCapTypePortRepoCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  hasCapTypePortRepoCsf!: Sequelize.HasManyHasAssociationMixin<PortRepoCsf, PortRepoCsfId>;
  hasCapTypePortRepoCsfs!: Sequelize.HasManyHasAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  countCapTypePortRepoCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortSwapCsf via capType
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
  // DomsCapType hasMany PortSwapCsf via floorType
  floorTypePortSwapCsfs!: PortSwapCsf[];
  getFloorTypePortSwapCsfs!: Sequelize.HasManyGetAssociationsMixin<PortSwapCsf>;
  setFloorTypePortSwapCsfs!: Sequelize.HasManySetAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  addFloorTypePortSwapCsf!: Sequelize.HasManyAddAssociationMixin<PortSwapCsf, PortSwapCsfId>;
  addFloorTypePortSwapCsfs!: Sequelize.HasManyAddAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  createFloorTypePortSwapCsf!: Sequelize.HasManyCreateAssociationMixin<PortSwapCsf>;
  removeFloorTypePortSwapCsf!: Sequelize.HasManyRemoveAssociationMixin<PortSwapCsf, PortSwapCsfId>;
  removeFloorTypePortSwapCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  hasFloorTypePortSwapCsf!: Sequelize.HasManyHasAssociationMixin<PortSwapCsf, PortSwapCsfId>;
  hasFloorTypePortSwapCsfs!: Sequelize.HasManyHasAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  countFloorTypePortSwapCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCapType hasMany PortVostroCsf via capType
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
  // DomsCapType hasMany PortVostroCsf via floorType
  floorTypePortVostroCsfs!: PortVostroCsf[];
  getFloorTypePortVostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortVostroCsf>;
  setFloorTypePortVostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  addFloorTypePortVostroCsf!: Sequelize.HasManyAddAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  addFloorTypePortVostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  createFloorTypePortVostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortVostroCsf>;
  removeFloorTypePortVostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  removeFloorTypePortVostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  hasFloorTypePortVostroCsf!: Sequelize.HasManyHasAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  hasFloorTypePortVostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  countFloorTypePortVostroCsfs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsCapType {
    return DomsCapType.init({
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
    tableName: 'doms_cap_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_cap_type_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_cap_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
