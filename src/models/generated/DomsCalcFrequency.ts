import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmGuarPos, CrmGuarPosId } from './CrmGuarPos';
import type { PnlFeeincDet, PnlFeeincDetId } from './PnlFeeincDet';
import type { PortDsecMov, PortDsecMovId } from './PortDsecMov';
import type { PortDsecPos, PortDsecPosId } from './PortDsecPos';
import type { PortFctyMov, PortFctyMovId } from './PortFctyMov';
import type { PortFctyPos, PortFctyPosId } from './PortFctyPos';
import type { PortFincMov, PortFincMovId } from './PortFincMov';
import type { PortFincPos, PortFincPosId } from './PortFincPos';
import type { PortFutuMov, PortFutuMovId } from './PortFutuMov';
import type { PortFutuPos, PortFutuPosId } from './PortFutuPos';
import type { PortGuarMov, PortGuarMovId } from './PortGuarMov';
import type { PortGuarPos, PortGuarPosId } from './PortGuarPos';
import type { PortLoanMov, PortLoanMovId } from './PortLoanMov';
import type { PortLoanPos, PortLoanPosId } from './PortLoanPos';
import type { PortRepoDet, PortRepoDetId } from './PortRepoDet';

export interface DomsCalcFrequencyAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsCalcFrequencyPk = "domain";
export type DomsCalcFrequencyId = DomsCalcFrequency[DomsCalcFrequencyPk];
export type DomsCalcFrequencyCreationAttributes = DomsCalcFrequencyAttributes;

export class DomsCalcFrequency extends Model<DomsCalcFrequencyAttributes, DomsCalcFrequencyCreationAttributes> implements DomsCalcFrequencyAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsCalcFrequency hasMany CrmGuarPos via notionalUpdateFrequency
  crmGuarPos!: CrmGuarPos[];
  getCrmGuarPos!: Sequelize.HasManyGetAssociationsMixin<CrmGuarPos>;
  setCrmGuarPos!: Sequelize.HasManySetAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  addCrmGuarPo!: Sequelize.HasManyAddAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  addCrmGuarPos!: Sequelize.HasManyAddAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  createCrmGuarPo!: Sequelize.HasManyCreateAssociationMixin<CrmGuarPos>;
  removeCrmGuarPo!: Sequelize.HasManyRemoveAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  removeCrmGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  hasCrmGuarPo!: Sequelize.HasManyHasAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  hasCrmGuarPos!: Sequelize.HasManyHasAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  countCrmGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany CrmGuarPos via notionalUpdateTenorFrequency
  notionalUpdateTenorFrequencyCrmGuarPos!: CrmGuarPos[];
  getNotionalUpdateTenorFrequencyCrmGuarPos!: Sequelize.HasManyGetAssociationsMixin<CrmGuarPos>;
  setNotionalUpdateTenorFrequencyCrmGuarPos!: Sequelize.HasManySetAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  addNotionalUpdateTenorFrequencyCrmGuarPo!: Sequelize.HasManyAddAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  addNotionalUpdateTenorFrequencyCrmGuarPos!: Sequelize.HasManyAddAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  createNotionalUpdateTenorFrequencyCrmGuarPo!: Sequelize.HasManyCreateAssociationMixin<CrmGuarPos>;
  removeNotionalUpdateTenorFrequencyCrmGuarPo!: Sequelize.HasManyRemoveAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  removeNotionalUpdateTenorFrequencyCrmGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  hasNotionalUpdateTenorFrequencyCrmGuarPo!: Sequelize.HasManyHasAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  hasNotionalUpdateTenorFrequencyCrmGuarPos!: Sequelize.HasManyHasAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  countNotionalUpdateTenorFrequencyCrmGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PnlFeeincDet via feeCorrctFrequency
  pnlFeeincDets!: PnlFeeincDet[];
  getPnlFeeincDets!: Sequelize.HasManyGetAssociationsMixin<PnlFeeincDet>;
  setPnlFeeincDets!: Sequelize.HasManySetAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  addPnlFeeincDet!: Sequelize.HasManyAddAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  addPnlFeeincDets!: Sequelize.HasManyAddAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  createPnlFeeincDet!: Sequelize.HasManyCreateAssociationMixin<PnlFeeincDet>;
  removePnlFeeincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  removePnlFeeincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasPnlFeeincDet!: Sequelize.HasManyHasAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasPnlFeeincDets!: Sequelize.HasManyHasAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  countPnlFeeincDets!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PnlFeeincDet via feeCorrctIndexTenorFrequency
  feeCorrctIndexTenorFrequencyPnlFeeincDets!: PnlFeeincDet[];
  getFeeCorrctIndexTenorFrequencyPnlFeeincDets!: Sequelize.HasManyGetAssociationsMixin<PnlFeeincDet>;
  setFeeCorrctIndexTenorFrequencyPnlFeeincDets!: Sequelize.HasManySetAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  addFeeCorrctIndexTenorFrequencyPnlFeeincDet!: Sequelize.HasManyAddAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  addFeeCorrctIndexTenorFrequencyPnlFeeincDets!: Sequelize.HasManyAddAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  createFeeCorrctIndexTenorFrequencyPnlFeeincDet!: Sequelize.HasManyCreateAssociationMixin<PnlFeeincDet>;
  removeFeeCorrctIndexTenorFrequencyPnlFeeincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  removeFeeCorrctIndexTenorFrequencyPnlFeeincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasFeeCorrctIndexTenorFrequencyPnlFeeincDet!: Sequelize.HasManyHasAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasFeeCorrctIndexTenorFrequencyPnlFeeincDets!: Sequelize.HasManyHasAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  countFeeCorrctIndexTenorFrequencyPnlFeeincDets!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PnlFeeincDet via feePaymentFrequency
  feePaymentFrequencyPnlFeeincDets!: PnlFeeincDet[];
  getFeePaymentFrequencyPnlFeeincDets!: Sequelize.HasManyGetAssociationsMixin<PnlFeeincDet>;
  setFeePaymentFrequencyPnlFeeincDets!: Sequelize.HasManySetAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  addFeePaymentFrequencyPnlFeeincDet!: Sequelize.HasManyAddAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  addFeePaymentFrequencyPnlFeeincDets!: Sequelize.HasManyAddAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  createFeePaymentFrequencyPnlFeeincDet!: Sequelize.HasManyCreateAssociationMixin<PnlFeeincDet>;
  removeFeePaymentFrequencyPnlFeeincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  removeFeePaymentFrequencyPnlFeeincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasFeePaymentFrequencyPnlFeeincDet!: Sequelize.HasManyHasAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasFeePaymentFrequencyPnlFeeincDets!: Sequelize.HasManyHasAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  countFeePaymentFrequencyPnlFeeincDets!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortDsecMov via compoundFrequency
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
  // DomsCalcFrequency hasMany PortDsecMov via tenorFrequency
  tenorFrequencyPortDsecMovs!: PortDsecMov[];
  getTenorFrequencyPortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setTenorFrequencyPortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addTenorFrequencyPortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addTenorFrequencyPortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createTenorFrequencyPortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removeTenorFrequencyPortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removeTenorFrequencyPortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasTenorFrequencyPortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasTenorFrequencyPortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countTenorFrequencyPortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortDsecMov via fixingFrequency
  fixingFrequencyPortDsecMovs!: PortDsecMov[];
  getFixingFrequencyPortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setFixingFrequencyPortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addFixingFrequencyPortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addFixingFrequencyPortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createFixingFrequencyPortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removeFixingFrequencyPortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removeFixingFrequencyPortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasFixingFrequencyPortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasFixingFrequencyPortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countFixingFrequencyPortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortDsecPos via compoundFrequency
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
  // DomsCalcFrequency hasMany PortDsecPos via tenorFrequency
  tenorFrequencyPortDsecPos!: PortDsecPos[];
  getTenorFrequencyPortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setTenorFrequencyPortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addTenorFrequencyPortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addTenorFrequencyPortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createTenorFrequencyPortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removeTenorFrequencyPortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removeTenorFrequencyPortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasTenorFrequencyPortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasTenorFrequencyPortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countTenorFrequencyPortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortDsecPos via fixingFrequency
  fixingFrequencyPortDsecPos!: PortDsecPos[];
  getFixingFrequencyPortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setFixingFrequencyPortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addFixingFrequencyPortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addFixingFrequencyPortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createFixingFrequencyPortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removeFixingFrequencyPortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removeFixingFrequencyPortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasFixingFrequencyPortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasFixingFrequencyPortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countFixingFrequencyPortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFctyMov via compoundFrequency
  portFctyMovs!: PortFctyMov[];
  getPortFctyMovs!: Sequelize.HasManyGetAssociationsMixin<PortFctyMov>;
  setPortFctyMovs!: Sequelize.HasManySetAssociationsMixin<PortFctyMov, PortFctyMovId>;
  addPortFctyMov!: Sequelize.HasManyAddAssociationMixin<PortFctyMov, PortFctyMovId>;
  addPortFctyMovs!: Sequelize.HasManyAddAssociationsMixin<PortFctyMov, PortFctyMovId>;
  createPortFctyMov!: Sequelize.HasManyCreateAssociationMixin<PortFctyMov>;
  removePortFctyMov!: Sequelize.HasManyRemoveAssociationMixin<PortFctyMov, PortFctyMovId>;
  removePortFctyMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyMov, PortFctyMovId>;
  hasPortFctyMov!: Sequelize.HasManyHasAssociationMixin<PortFctyMov, PortFctyMovId>;
  hasPortFctyMovs!: Sequelize.HasManyHasAssociationsMixin<PortFctyMov, PortFctyMovId>;
  countPortFctyMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFctyMov via fixingFrequency
  fixingFrequencyPortFctyMovs!: PortFctyMov[];
  getFixingFrequencyPortFctyMovs!: Sequelize.HasManyGetAssociationsMixin<PortFctyMov>;
  setFixingFrequencyPortFctyMovs!: Sequelize.HasManySetAssociationsMixin<PortFctyMov, PortFctyMovId>;
  addFixingFrequencyPortFctyMov!: Sequelize.HasManyAddAssociationMixin<PortFctyMov, PortFctyMovId>;
  addFixingFrequencyPortFctyMovs!: Sequelize.HasManyAddAssociationsMixin<PortFctyMov, PortFctyMovId>;
  createFixingFrequencyPortFctyMov!: Sequelize.HasManyCreateAssociationMixin<PortFctyMov>;
  removeFixingFrequencyPortFctyMov!: Sequelize.HasManyRemoveAssociationMixin<PortFctyMov, PortFctyMovId>;
  removeFixingFrequencyPortFctyMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyMov, PortFctyMovId>;
  hasFixingFrequencyPortFctyMov!: Sequelize.HasManyHasAssociationMixin<PortFctyMov, PortFctyMovId>;
  hasFixingFrequencyPortFctyMovs!: Sequelize.HasManyHasAssociationsMixin<PortFctyMov, PortFctyMovId>;
  countFixingFrequencyPortFctyMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFctyMov via resetFrequency
  resetFrequencyPortFctyMovs!: PortFctyMov[];
  getResetFrequencyPortFctyMovs!: Sequelize.HasManyGetAssociationsMixin<PortFctyMov>;
  setResetFrequencyPortFctyMovs!: Sequelize.HasManySetAssociationsMixin<PortFctyMov, PortFctyMovId>;
  addResetFrequencyPortFctyMov!: Sequelize.HasManyAddAssociationMixin<PortFctyMov, PortFctyMovId>;
  addResetFrequencyPortFctyMovs!: Sequelize.HasManyAddAssociationsMixin<PortFctyMov, PortFctyMovId>;
  createResetFrequencyPortFctyMov!: Sequelize.HasManyCreateAssociationMixin<PortFctyMov>;
  removeResetFrequencyPortFctyMov!: Sequelize.HasManyRemoveAssociationMixin<PortFctyMov, PortFctyMovId>;
  removeResetFrequencyPortFctyMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyMov, PortFctyMovId>;
  hasResetFrequencyPortFctyMov!: Sequelize.HasManyHasAssociationMixin<PortFctyMov, PortFctyMovId>;
  hasResetFrequencyPortFctyMovs!: Sequelize.HasManyHasAssociationsMixin<PortFctyMov, PortFctyMovId>;
  countResetFrequencyPortFctyMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFctyMov via tenorFrequency
  tenorFrequencyPortFctyMovs!: PortFctyMov[];
  getTenorFrequencyPortFctyMovs!: Sequelize.HasManyGetAssociationsMixin<PortFctyMov>;
  setTenorFrequencyPortFctyMovs!: Sequelize.HasManySetAssociationsMixin<PortFctyMov, PortFctyMovId>;
  addTenorFrequencyPortFctyMov!: Sequelize.HasManyAddAssociationMixin<PortFctyMov, PortFctyMovId>;
  addTenorFrequencyPortFctyMovs!: Sequelize.HasManyAddAssociationsMixin<PortFctyMov, PortFctyMovId>;
  createTenorFrequencyPortFctyMov!: Sequelize.HasManyCreateAssociationMixin<PortFctyMov>;
  removeTenorFrequencyPortFctyMov!: Sequelize.HasManyRemoveAssociationMixin<PortFctyMov, PortFctyMovId>;
  removeTenorFrequencyPortFctyMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyMov, PortFctyMovId>;
  hasTenorFrequencyPortFctyMov!: Sequelize.HasManyHasAssociationMixin<PortFctyMov, PortFctyMovId>;
  hasTenorFrequencyPortFctyMovs!: Sequelize.HasManyHasAssociationsMixin<PortFctyMov, PortFctyMovId>;
  countTenorFrequencyPortFctyMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFctyPos via compoundFrequency
  portFctyPos!: PortFctyPos[];
  getPortFctyPos!: Sequelize.HasManyGetAssociationsMixin<PortFctyPos>;
  setPortFctyPos!: Sequelize.HasManySetAssociationsMixin<PortFctyPos, PortFctyPosId>;
  addPortFctyPo!: Sequelize.HasManyAddAssociationMixin<PortFctyPos, PortFctyPosId>;
  addPortFctyPos!: Sequelize.HasManyAddAssociationsMixin<PortFctyPos, PortFctyPosId>;
  createPortFctyPo!: Sequelize.HasManyCreateAssociationMixin<PortFctyPos>;
  removePortFctyPo!: Sequelize.HasManyRemoveAssociationMixin<PortFctyPos, PortFctyPosId>;
  removePortFctyPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyPos, PortFctyPosId>;
  hasPortFctyPo!: Sequelize.HasManyHasAssociationMixin<PortFctyPos, PortFctyPosId>;
  hasPortFctyPos!: Sequelize.HasManyHasAssociationsMixin<PortFctyPos, PortFctyPosId>;
  countPortFctyPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFctyPos via fixingFrequency
  fixingFrequencyPortFctyPos!: PortFctyPos[];
  getFixingFrequencyPortFctyPos!: Sequelize.HasManyGetAssociationsMixin<PortFctyPos>;
  setFixingFrequencyPortFctyPos!: Sequelize.HasManySetAssociationsMixin<PortFctyPos, PortFctyPosId>;
  addFixingFrequencyPortFctyPo!: Sequelize.HasManyAddAssociationMixin<PortFctyPos, PortFctyPosId>;
  addFixingFrequencyPortFctyPos!: Sequelize.HasManyAddAssociationsMixin<PortFctyPos, PortFctyPosId>;
  createFixingFrequencyPortFctyPo!: Sequelize.HasManyCreateAssociationMixin<PortFctyPos>;
  removeFixingFrequencyPortFctyPo!: Sequelize.HasManyRemoveAssociationMixin<PortFctyPos, PortFctyPosId>;
  removeFixingFrequencyPortFctyPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyPos, PortFctyPosId>;
  hasFixingFrequencyPortFctyPo!: Sequelize.HasManyHasAssociationMixin<PortFctyPos, PortFctyPosId>;
  hasFixingFrequencyPortFctyPos!: Sequelize.HasManyHasAssociationsMixin<PortFctyPos, PortFctyPosId>;
  countFixingFrequencyPortFctyPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFctyPos via resetFrequency
  resetFrequencyPortFctyPos!: PortFctyPos[];
  getResetFrequencyPortFctyPos!: Sequelize.HasManyGetAssociationsMixin<PortFctyPos>;
  setResetFrequencyPortFctyPos!: Sequelize.HasManySetAssociationsMixin<PortFctyPos, PortFctyPosId>;
  addResetFrequencyPortFctyPo!: Sequelize.HasManyAddAssociationMixin<PortFctyPos, PortFctyPosId>;
  addResetFrequencyPortFctyPos!: Sequelize.HasManyAddAssociationsMixin<PortFctyPos, PortFctyPosId>;
  createResetFrequencyPortFctyPo!: Sequelize.HasManyCreateAssociationMixin<PortFctyPos>;
  removeResetFrequencyPortFctyPo!: Sequelize.HasManyRemoveAssociationMixin<PortFctyPos, PortFctyPosId>;
  removeResetFrequencyPortFctyPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyPos, PortFctyPosId>;
  hasResetFrequencyPortFctyPo!: Sequelize.HasManyHasAssociationMixin<PortFctyPos, PortFctyPosId>;
  hasResetFrequencyPortFctyPos!: Sequelize.HasManyHasAssociationsMixin<PortFctyPos, PortFctyPosId>;
  countResetFrequencyPortFctyPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFctyPos via tenorFrequency
  tenorFrequencyPortFctyPos!: PortFctyPos[];
  getTenorFrequencyPortFctyPos!: Sequelize.HasManyGetAssociationsMixin<PortFctyPos>;
  setTenorFrequencyPortFctyPos!: Sequelize.HasManySetAssociationsMixin<PortFctyPos, PortFctyPosId>;
  addTenorFrequencyPortFctyPo!: Sequelize.HasManyAddAssociationMixin<PortFctyPos, PortFctyPosId>;
  addTenorFrequencyPortFctyPos!: Sequelize.HasManyAddAssociationsMixin<PortFctyPos, PortFctyPosId>;
  createTenorFrequencyPortFctyPo!: Sequelize.HasManyCreateAssociationMixin<PortFctyPos>;
  removeTenorFrequencyPortFctyPo!: Sequelize.HasManyRemoveAssociationMixin<PortFctyPos, PortFctyPosId>;
  removeTenorFrequencyPortFctyPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyPos, PortFctyPosId>;
  hasTenorFrequencyPortFctyPo!: Sequelize.HasManyHasAssociationMixin<PortFctyPos, PortFctyPosId>;
  hasTenorFrequencyPortFctyPos!: Sequelize.HasManyHasAssociationsMixin<PortFctyPos, PortFctyPosId>;
  countTenorFrequencyPortFctyPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFincMov via tenorFrequency
  portFincMovs!: PortFincMov[];
  getPortFincMovs!: Sequelize.HasManyGetAssociationsMixin<PortFincMov>;
  setPortFincMovs!: Sequelize.HasManySetAssociationsMixin<PortFincMov, PortFincMovId>;
  addPortFincMov!: Sequelize.HasManyAddAssociationMixin<PortFincMov, PortFincMovId>;
  addPortFincMovs!: Sequelize.HasManyAddAssociationsMixin<PortFincMov, PortFincMovId>;
  createPortFincMov!: Sequelize.HasManyCreateAssociationMixin<PortFincMov>;
  removePortFincMov!: Sequelize.HasManyRemoveAssociationMixin<PortFincMov, PortFincMovId>;
  removePortFincMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincMov, PortFincMovId>;
  hasPortFincMov!: Sequelize.HasManyHasAssociationMixin<PortFincMov, PortFincMovId>;
  hasPortFincMovs!: Sequelize.HasManyHasAssociationsMixin<PortFincMov, PortFincMovId>;
  countPortFincMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFincMov via notionalUpdateFrequency
  notionalUpdateFrequencyPortFincMovs!: PortFincMov[];
  getNotionalUpdateFrequencyPortFincMovs!: Sequelize.HasManyGetAssociationsMixin<PortFincMov>;
  setNotionalUpdateFrequencyPortFincMovs!: Sequelize.HasManySetAssociationsMixin<PortFincMov, PortFincMovId>;
  addNotionalUpdateFrequencyPortFincMov!: Sequelize.HasManyAddAssociationMixin<PortFincMov, PortFincMovId>;
  addNotionalUpdateFrequencyPortFincMovs!: Sequelize.HasManyAddAssociationsMixin<PortFincMov, PortFincMovId>;
  createNotionalUpdateFrequencyPortFincMov!: Sequelize.HasManyCreateAssociationMixin<PortFincMov>;
  removeNotionalUpdateFrequencyPortFincMov!: Sequelize.HasManyRemoveAssociationMixin<PortFincMov, PortFincMovId>;
  removeNotionalUpdateFrequencyPortFincMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincMov, PortFincMovId>;
  hasNotionalUpdateFrequencyPortFincMov!: Sequelize.HasManyHasAssociationMixin<PortFincMov, PortFincMovId>;
  hasNotionalUpdateFrequencyPortFincMovs!: Sequelize.HasManyHasAssociationsMixin<PortFincMov, PortFincMovId>;
  countNotionalUpdateFrequencyPortFincMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFincPos via tenorFrequency
  portFincPos!: PortFincPos[];
  getPortFincPos!: Sequelize.HasManyGetAssociationsMixin<PortFincPos>;
  setPortFincPos!: Sequelize.HasManySetAssociationsMixin<PortFincPos, PortFincPosId>;
  addPortFincPo!: Sequelize.HasManyAddAssociationMixin<PortFincPos, PortFincPosId>;
  addPortFincPos!: Sequelize.HasManyAddAssociationsMixin<PortFincPos, PortFincPosId>;
  createPortFincPo!: Sequelize.HasManyCreateAssociationMixin<PortFincPos>;
  removePortFincPo!: Sequelize.HasManyRemoveAssociationMixin<PortFincPos, PortFincPosId>;
  removePortFincPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFincPos, PortFincPosId>;
  hasPortFincPo!: Sequelize.HasManyHasAssociationMixin<PortFincPos, PortFincPosId>;
  hasPortFincPos!: Sequelize.HasManyHasAssociationsMixin<PortFincPos, PortFincPosId>;
  countPortFincPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFincPos via notionalUpdateFrequency
  notionalUpdateFrequencyPortFincPos!: PortFincPos[];
  getNotionalUpdateFrequencyPortFincPos!: Sequelize.HasManyGetAssociationsMixin<PortFincPos>;
  setNotionalUpdateFrequencyPortFincPos!: Sequelize.HasManySetAssociationsMixin<PortFincPos, PortFincPosId>;
  addNotionalUpdateFrequencyPortFincPo!: Sequelize.HasManyAddAssociationMixin<PortFincPos, PortFincPosId>;
  addNotionalUpdateFrequencyPortFincPos!: Sequelize.HasManyAddAssociationsMixin<PortFincPos, PortFincPosId>;
  createNotionalUpdateFrequencyPortFincPo!: Sequelize.HasManyCreateAssociationMixin<PortFincPos>;
  removeNotionalUpdateFrequencyPortFincPo!: Sequelize.HasManyRemoveAssociationMixin<PortFincPos, PortFincPosId>;
  removeNotionalUpdateFrequencyPortFincPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFincPos, PortFincPosId>;
  hasNotionalUpdateFrequencyPortFincPo!: Sequelize.HasManyHasAssociationMixin<PortFincPos, PortFincPosId>;
  hasNotionalUpdateFrequencyPortFincPos!: Sequelize.HasManyHasAssociationsMixin<PortFincPos, PortFincPosId>;
  countNotionalUpdateFrequencyPortFincPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFutuMov via notionalPeriodicity
  portFutuMovs!: PortFutuMov[];
  getPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removePortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removePortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortFutuPos via notionalPeriodicity
  portFutuPos!: PortFutuPos[];
  getPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removePortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removePortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortGuarMov via notionalUpdateFrequency
  portGuarMovs!: PortGuarMov[];
  getPortGuarMovs!: Sequelize.HasManyGetAssociationsMixin<PortGuarMov>;
  setPortGuarMovs!: Sequelize.HasManySetAssociationsMixin<PortGuarMov, PortGuarMovId>;
  addPortGuarMov!: Sequelize.HasManyAddAssociationMixin<PortGuarMov, PortGuarMovId>;
  addPortGuarMovs!: Sequelize.HasManyAddAssociationsMixin<PortGuarMov, PortGuarMovId>;
  createPortGuarMov!: Sequelize.HasManyCreateAssociationMixin<PortGuarMov>;
  removePortGuarMov!: Sequelize.HasManyRemoveAssociationMixin<PortGuarMov, PortGuarMovId>;
  removePortGuarMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarMov, PortGuarMovId>;
  hasPortGuarMov!: Sequelize.HasManyHasAssociationMixin<PortGuarMov, PortGuarMovId>;
  hasPortGuarMovs!: Sequelize.HasManyHasAssociationsMixin<PortGuarMov, PortGuarMovId>;
  countPortGuarMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortGuarMov via notionalUpdateTenorFrequency
  notionalUpdateTenorFrequencyPortGuarMovs!: PortGuarMov[];
  getNotionalUpdateTenorFrequencyPortGuarMovs!: Sequelize.HasManyGetAssociationsMixin<PortGuarMov>;
  setNotionalUpdateTenorFrequencyPortGuarMovs!: Sequelize.HasManySetAssociationsMixin<PortGuarMov, PortGuarMovId>;
  addNotionalUpdateTenorFrequencyPortGuarMov!: Sequelize.HasManyAddAssociationMixin<PortGuarMov, PortGuarMovId>;
  addNotionalUpdateTenorFrequencyPortGuarMovs!: Sequelize.HasManyAddAssociationsMixin<PortGuarMov, PortGuarMovId>;
  createNotionalUpdateTenorFrequencyPortGuarMov!: Sequelize.HasManyCreateAssociationMixin<PortGuarMov>;
  removeNotionalUpdateTenorFrequencyPortGuarMov!: Sequelize.HasManyRemoveAssociationMixin<PortGuarMov, PortGuarMovId>;
  removeNotionalUpdateTenorFrequencyPortGuarMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarMov, PortGuarMovId>;
  hasNotionalUpdateTenorFrequencyPortGuarMov!: Sequelize.HasManyHasAssociationMixin<PortGuarMov, PortGuarMovId>;
  hasNotionalUpdateTenorFrequencyPortGuarMovs!: Sequelize.HasManyHasAssociationsMixin<PortGuarMov, PortGuarMovId>;
  countNotionalUpdateTenorFrequencyPortGuarMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortGuarPos via notionalUpdateFrequency
  portGuarPos!: PortGuarPos[];
  getPortGuarPos!: Sequelize.HasManyGetAssociationsMixin<PortGuarPos>;
  setPortGuarPos!: Sequelize.HasManySetAssociationsMixin<PortGuarPos, PortGuarPosId>;
  addPortGuarPo!: Sequelize.HasManyAddAssociationMixin<PortGuarPos, PortGuarPosId>;
  addPortGuarPos!: Sequelize.HasManyAddAssociationsMixin<PortGuarPos, PortGuarPosId>;
  createPortGuarPo!: Sequelize.HasManyCreateAssociationMixin<PortGuarPos>;
  removePortGuarPo!: Sequelize.HasManyRemoveAssociationMixin<PortGuarPos, PortGuarPosId>;
  removePortGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarPos, PortGuarPosId>;
  hasPortGuarPo!: Sequelize.HasManyHasAssociationMixin<PortGuarPos, PortGuarPosId>;
  hasPortGuarPos!: Sequelize.HasManyHasAssociationsMixin<PortGuarPos, PortGuarPosId>;
  countPortGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortGuarPos via notionalUpdateTenorFrequency
  notionalUpdateTenorFrequencyPortGuarPos!: PortGuarPos[];
  getNotionalUpdateTenorFrequencyPortGuarPos!: Sequelize.HasManyGetAssociationsMixin<PortGuarPos>;
  setNotionalUpdateTenorFrequencyPortGuarPos!: Sequelize.HasManySetAssociationsMixin<PortGuarPos, PortGuarPosId>;
  addNotionalUpdateTenorFrequencyPortGuarPo!: Sequelize.HasManyAddAssociationMixin<PortGuarPos, PortGuarPosId>;
  addNotionalUpdateTenorFrequencyPortGuarPos!: Sequelize.HasManyAddAssociationsMixin<PortGuarPos, PortGuarPosId>;
  createNotionalUpdateTenorFrequencyPortGuarPo!: Sequelize.HasManyCreateAssociationMixin<PortGuarPos>;
  removeNotionalUpdateTenorFrequencyPortGuarPo!: Sequelize.HasManyRemoveAssociationMixin<PortGuarPos, PortGuarPosId>;
  removeNotionalUpdateTenorFrequencyPortGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarPos, PortGuarPosId>;
  hasNotionalUpdateTenorFrequencyPortGuarPo!: Sequelize.HasManyHasAssociationMixin<PortGuarPos, PortGuarPosId>;
  hasNotionalUpdateTenorFrequencyPortGuarPos!: Sequelize.HasManyHasAssociationsMixin<PortGuarPos, PortGuarPosId>;
  countNotionalUpdateTenorFrequencyPortGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanMov via prepaymentFrequency
  portLoanMovs!: PortLoanMov[];
  getPortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setPortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addPortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addPortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createPortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removePortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removePortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasPortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasPortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countPortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanMov via tenorFrequency
  tenorFrequencyPortLoanMovs!: PortLoanMov[];
  getTenorFrequencyPortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setTenorFrequencyPortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addTenorFrequencyPortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addTenorFrequencyPortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createTenorFrequencyPortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removeTenorFrequencyPortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removeTenorFrequencyPortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasTenorFrequencyPortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasTenorFrequencyPortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countTenorFrequencyPortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanMov via compoundFrequency
  compoundFrequencyPortLoanMovs!: PortLoanMov[];
  getCompoundFrequencyPortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setCompoundFrequencyPortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addCompoundFrequencyPortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addCompoundFrequencyPortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createCompoundFrequencyPortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removeCompoundFrequencyPortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removeCompoundFrequencyPortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasCompoundFrequencyPortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasCompoundFrequencyPortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countCompoundFrequencyPortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanMov via interestFrequency
  interestFrequencyPortLoanMovs!: PortLoanMov[];
  getInterestFrequencyPortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setInterestFrequencyPortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addInterestFrequencyPortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addInterestFrequencyPortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createInterestFrequencyPortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removeInterestFrequencyPortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removeInterestFrequencyPortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasInterestFrequencyPortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasInterestFrequencyPortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countInterestFrequencyPortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanMov via fixingFrequency
  fixingFrequencyPortLoanMovs!: PortLoanMov[];
  getFixingFrequencyPortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setFixingFrequencyPortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addFixingFrequencyPortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addFixingFrequencyPortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createFixingFrequencyPortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removeFixingFrequencyPortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removeFixingFrequencyPortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasFixingFrequencyPortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasFixingFrequencyPortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countFixingFrequencyPortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanMov via amortizingFrequency
  amortizingFrequencyPortLoanMovs!: PortLoanMov[];
  getAmortizingFrequencyPortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setAmortizingFrequencyPortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addAmortizingFrequencyPortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addAmortizingFrequencyPortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createAmortizingFrequencyPortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removeAmortizingFrequencyPortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removeAmortizingFrequencyPortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasAmortizingFrequencyPortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasAmortizingFrequencyPortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countAmortizingFrequencyPortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanPos via tenorFrequency
  portLoanPos!: PortLoanPos[];
  getPortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setPortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addPortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addPortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createPortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removePortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removePortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasPortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasPortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countPortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanPos via compoundFrequency
  compoundFrequencyPortLoanPos!: PortLoanPos[];
  getCompoundFrequencyPortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setCompoundFrequencyPortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addCompoundFrequencyPortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addCompoundFrequencyPortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createCompoundFrequencyPortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removeCompoundFrequencyPortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removeCompoundFrequencyPortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasCompoundFrequencyPortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasCompoundFrequencyPortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countCompoundFrequencyPortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanPos via interestFrequency
  interestFrequencyPortLoanPos!: PortLoanPos[];
  getInterestFrequencyPortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setInterestFrequencyPortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addInterestFrequencyPortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addInterestFrequencyPortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createInterestFrequencyPortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removeInterestFrequencyPortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removeInterestFrequencyPortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasInterestFrequencyPortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasInterestFrequencyPortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countInterestFrequencyPortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanPos via fixingFrequency
  fixingFrequencyPortLoanPos!: PortLoanPos[];
  getFixingFrequencyPortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setFixingFrequencyPortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addFixingFrequencyPortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addFixingFrequencyPortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createFixingFrequencyPortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removeFixingFrequencyPortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removeFixingFrequencyPortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasFixingFrequencyPortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasFixingFrequencyPortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countFixingFrequencyPortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanPos via amortizingFrequency
  amortizingFrequencyPortLoanPos!: PortLoanPos[];
  getAmortizingFrequencyPortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setAmortizingFrequencyPortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addAmortizingFrequencyPortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addAmortizingFrequencyPortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createAmortizingFrequencyPortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removeAmortizingFrequencyPortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removeAmortizingFrequencyPortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasAmortizingFrequencyPortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasAmortizingFrequencyPortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countAmortizingFrequencyPortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortLoanPos via prepaymentFrequency
  prepaymentFrequencyPortLoanPos!: PortLoanPos[];
  getPrepaymentFrequencyPortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setPrepaymentFrequencyPortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addPrepaymentFrequencyPortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addPrepaymentFrequencyPortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createPrepaymentFrequencyPortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removePrepaymentFrequencyPortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removePrepaymentFrequencyPortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasPrepaymentFrequencyPortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasPrepaymentFrequencyPortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countPrepaymentFrequencyPortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcFrequency hasMany PortRepoDet via revaluationFrequency
  portRepoDets!: PortRepoDet[];
  getPortRepoDets!: Sequelize.HasManyGetAssociationsMixin<PortRepoDet>;
  setPortRepoDets!: Sequelize.HasManySetAssociationsMixin<PortRepoDet, PortRepoDetId>;
  addPortRepoDet!: Sequelize.HasManyAddAssociationMixin<PortRepoDet, PortRepoDetId>;
  addPortRepoDets!: Sequelize.HasManyAddAssociationsMixin<PortRepoDet, PortRepoDetId>;
  createPortRepoDet!: Sequelize.HasManyCreateAssociationMixin<PortRepoDet>;
  removePortRepoDet!: Sequelize.HasManyRemoveAssociationMixin<PortRepoDet, PortRepoDetId>;
  removePortRepoDets!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoDet, PortRepoDetId>;
  hasPortRepoDet!: Sequelize.HasManyHasAssociationMixin<PortRepoDet, PortRepoDetId>;
  hasPortRepoDets!: Sequelize.HasManyHasAssociationsMixin<PortRepoDet, PortRepoDetId>;
  countPortRepoDets!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsCalcFrequency {
    return DomsCalcFrequency.init({
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
    tableName: 'doms_calc_frequency',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "pk_doms_calc_frequency",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
