import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmCapitalProductParam, AlcmCapitalProductParamId } from './AlcmCapitalProductParam';
import type { AlcmCpadEadBase, AlcmCpadEadBaseId } from './AlcmCpadEadBase';
import type { CrmGuarPos, CrmGuarPosId } from './CrmGuarPos';
import type { PnlOperincCsf, PnlOperincCsfId } from './PnlOperincCsf';
import type { PortDsecCsf, PortDsecCsfId } from './PortDsecCsf';
import type { PortDsecMov, PortDsecMovId } from './PortDsecMov';
import type { PortDsecPos, PortDsecPosId } from './PortDsecPos';
import type { PortFctyMov, PortFctyMovId } from './PortFctyMov';
import type { PortFctyPos, PortFctyPosId } from './PortFctyPos';
import type { PortFincCsf, PortFincCsfId } from './PortFincCsf';
import type { PortFincMov, PortFincMovId } from './PortFincMov';
import type { PortFincPos, PortFincPosId } from './PortFincPos';
import type { PortFoexCsf, PortFoexCsfId } from './PortFoexCsf';
import type { PortFoexMov, PortFoexMovId } from './PortFoexMov';
import type { PortFoexPos, PortFoexPosId } from './PortFoexPos';
import type { PortFutuCsf, PortFutuCsfId } from './PortFutuCsf';
import type { PortFutuMov, PortFutuMovId } from './PortFutuMov';
import type { PortFutuPos, PortFutuPosId } from './PortFutuPos';
import type { PortGuarMov, PortGuarMovId } from './PortGuarMov';
import type { PortGuarPos, PortGuarPosId } from './PortGuarPos';
import type { PortLoanCsf, PortLoanCsfId } from './PortLoanCsf';
import type { PortLoanMov, PortLoanMovId } from './PortLoanMov';
import type { PortLoanPos, PortLoanPosId } from './PortLoanPos';
import type { PortNdfsCsf, PortNdfsCsfId } from './PortNdfsCsf';
import type { PortNdfsMov, PortNdfsMovId } from './PortNdfsMov';
import type { PortNdfsPos, PortNdfsPosId } from './PortNdfsPos';
import type { PortNostroCsf, PortNostroCsfId } from './PortNostroCsf';
import type { PortNostroPos, PortNostroPosId } from './PortNostroPos';
import type { PortOtherCsf, PortOtherCsfId } from './PortOtherCsf';
import type { PortOtherPos, PortOtherPosId } from './PortOtherPos';
import type { PortRecvCsf, PortRecvCsfId } from './PortRecvCsf';
import type { PortRecvMov, PortRecvMovId } from './PortRecvMov';
import type { PortRecvPos, PortRecvPosId } from './PortRecvPos';
import type { PortRepoCsf, PortRepoCsfId } from './PortRepoCsf';
import type { PortRepoMov, PortRepoMovId } from './PortRepoMov';
import type { PortRepoPos, PortRepoPosId } from './PortRepoPos';
import type { PortSwapCsf, PortSwapCsfId } from './PortSwapCsf';
import type { PortSwapMov, PortSwapMovId } from './PortSwapMov';
import type { PortSwapPos, PortSwapPosId } from './PortSwapPos';
import type { PortVostroCsf, PortVostroCsfId } from './PortVostroCsf';
import type { PortVostroPos, PortVostroPosId } from './PortVostroPos';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysCurveUnderlyingLink, SysCurveUnderlyingLinkId } from './SysCurveUnderlyingLink';
import type { SysUnderlyingType, SysUnderlyingTypeId } from './SysUnderlyingType';

export interface SysUnderlyingAttributes {
  underlyingCode: string;
  underlyingDescription?: string;
  underlyingCcy: string;
  underlyingType: string;
  underlyingTickerBbg?: string;
  underlyingTickerRfntvt?: string;
  underlyingInitialDate: string;
  underlyingEndDate?: string;
}

export type SysUnderlyingPk = "underlyingCode";
export type SysUnderlyingId = SysUnderlying[SysUnderlyingPk];
export type SysUnderlyingOptionalAttributes = "underlyingDescription" | "underlyingTickerBbg" | "underlyingTickerRfntvt" | "underlyingEndDate";
export type SysUnderlyingCreationAttributes = Optional<SysUnderlyingAttributes, SysUnderlyingOptionalAttributes>;

export class SysUnderlying extends Model<SysUnderlyingAttributes, SysUnderlyingCreationAttributes> implements SysUnderlyingAttributes {
  underlyingCode!: string;
  underlyingDescription?: string;
  underlyingCcy!: string;
  underlyingType!: string;
  underlyingTickerBbg?: string;
  underlyingTickerRfntvt?: string;
  underlyingInitialDate!: string;
  underlyingEndDate?: string;

  // SysUnderlying belongsTo SysCurrency via underlyingCcy
  underlyingCcySysCurrency!: SysCurrency;
  getUnderlyingCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setUnderlyingCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createUnderlyingCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // SysUnderlying hasMany AlcmCapitalProductParam via underlyingPayCode
  alcmCapitalProductParams!: AlcmCapitalProductParam[];
  getAlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setAlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addAlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addAlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createAlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeAlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeAlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasAlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasAlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countAlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany AlcmCapitalProductParam via underlyingRecCode
  underlyingRecCodeAlcmCapitalProductParams!: AlcmCapitalProductParam[];
  getUnderlyingRecCodeAlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setUnderlyingRecCodeAlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addUnderlyingRecCodeAlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addUnderlyingRecCodeAlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createUnderlyingRecCodeAlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeUnderlyingRecCodeAlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeUnderlyingRecCodeAlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasUnderlyingRecCodeAlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasUnderlyingRecCodeAlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countUnderlyingRecCodeAlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany AlcmCpadEadBase via underlyingPayLeg
  alcmCpadEadBases!: AlcmCpadEadBase[];
  getAlcmCpadEadBases!: Sequelize.HasManyGetAssociationsMixin<AlcmCpadEadBase>;
  setAlcmCpadEadBases!: Sequelize.HasManySetAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addAlcmCpadEadBasis!: Sequelize.HasManyAddAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addAlcmCpadEadBases!: Sequelize.HasManyAddAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  createAlcmCpadEadBasis!: Sequelize.HasManyCreateAssociationMixin<AlcmCpadEadBase>;
  removeAlcmCpadEadBasis!: Sequelize.HasManyRemoveAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  removeAlcmCpadEadBases!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasAlcmCpadEadBasis!: Sequelize.HasManyHasAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasAlcmCpadEadBases!: Sequelize.HasManyHasAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  countAlcmCpadEadBases!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany AlcmCpadEadBase via underlyingRecLeg
  underlyingRecLegAlcmCpadEadBases!: AlcmCpadEadBase[];
  getUnderlyingRecLegAlcmCpadEadBases!: Sequelize.HasManyGetAssociationsMixin<AlcmCpadEadBase>;
  setUnderlyingRecLegAlcmCpadEadBases!: Sequelize.HasManySetAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addUnderlyingRecLegAlcmCpadEadBasis!: Sequelize.HasManyAddAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addUnderlyingRecLegAlcmCpadEadBases!: Sequelize.HasManyAddAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  createUnderlyingRecLegAlcmCpadEadBasis!: Sequelize.HasManyCreateAssociationMixin<AlcmCpadEadBase>;
  removeUnderlyingRecLegAlcmCpadEadBasis!: Sequelize.HasManyRemoveAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  removeUnderlyingRecLegAlcmCpadEadBases!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasUnderlyingRecLegAlcmCpadEadBasis!: Sequelize.HasManyHasAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasUnderlyingRecLegAlcmCpadEadBases!: Sequelize.HasManyHasAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  countUnderlyingRecLegAlcmCpadEadBases!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany CrmGuarPos via notionalUpdateIndex
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
  // SysUnderlying hasMany PnlOperincCsf via curveName
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
  // SysUnderlying hasMany PortDsecCsf via curveName
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
  // SysUnderlying hasMany PortDsecMov via floatIndexBaseCurve
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
  // SysUnderlying hasMany PortDsecMov via spreadCurveName
  spreadCurveNamePortDsecMovs!: PortDsecMov[];
  getSpreadCurveNamePortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setSpreadCurveNamePortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addSpreadCurveNamePortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addSpreadCurveNamePortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createSpreadCurveNamePortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removeSpreadCurveNamePortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removeSpreadCurveNamePortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasSpreadCurveNamePortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasSpreadCurveNamePortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countSpreadCurveNamePortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortDsecMov via curveName
  curveNamePortDsecMovs!: PortDsecMov[];
  getCurveNamePortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setCurveNamePortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addCurveNamePortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addCurveNamePortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createCurveNamePortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removeCurveNamePortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removeCurveNamePortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasCurveNamePortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasCurveNamePortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countCurveNamePortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortDsecMov via fundingCurve
  fundingCurvePortDsecMovs!: PortDsecMov[];
  getFundingCurvePortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setFundingCurvePortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addFundingCurvePortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addFundingCurvePortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createFundingCurvePortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removeFundingCurvePortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removeFundingCurvePortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasFundingCurvePortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasFundingCurvePortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countFundingCurvePortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortDsecMov via underlyingCode
  underlyingCodePortDsecMovs!: PortDsecMov[];
  getUnderlyingCodePortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setUnderlyingCodePortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addUnderlyingCodePortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addUnderlyingCodePortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createUnderlyingCodePortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removeUnderlyingCodePortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removeUnderlyingCodePortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasUnderlyingCodePortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasUnderlyingCodePortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countUnderlyingCodePortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortDsecMov via discountCurveName
  discountCurveNamePortDsecMovs!: PortDsecMov[];
  getDiscountCurveNamePortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setDiscountCurveNamePortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addDiscountCurveNamePortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addDiscountCurveNamePortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createDiscountCurveNamePortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removeDiscountCurveNamePortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removeDiscountCurveNamePortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasDiscountCurveNamePortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasDiscountCurveNamePortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countDiscountCurveNamePortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortDsecMov via fixedRateBaseCurve
  fixedRateBaseCurvePortDsecMovs!: PortDsecMov[];
  getFixedRateBaseCurvePortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setFixedRateBaseCurvePortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addFixedRateBaseCurvePortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addFixedRateBaseCurvePortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createFixedRateBaseCurvePortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removeFixedRateBaseCurvePortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removeFixedRateBaseCurvePortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasFixedRateBaseCurvePortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasFixedRateBaseCurvePortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countFixedRateBaseCurvePortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortDsecPos via floatIndexBaseCurve
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
  // SysUnderlying hasMany PortDsecPos via spreadCurveName
  spreadCurveNamePortDsecPos!: PortDsecPos[];
  getSpreadCurveNamePortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setSpreadCurveNamePortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addSpreadCurveNamePortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addSpreadCurveNamePortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createSpreadCurveNamePortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removeSpreadCurveNamePortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removeSpreadCurveNamePortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasSpreadCurveNamePortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasSpreadCurveNamePortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countSpreadCurveNamePortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortDsecPos via curveName
  curveNamePortDsecPos!: PortDsecPos[];
  getCurveNamePortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setCurveNamePortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addCurveNamePortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addCurveNamePortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createCurveNamePortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removeCurveNamePortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removeCurveNamePortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasCurveNamePortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasCurveNamePortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countCurveNamePortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortDsecPos via fundingCurve
  fundingCurvePortDsecPos!: PortDsecPos[];
  getFundingCurvePortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setFundingCurvePortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addFundingCurvePortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addFundingCurvePortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createFundingCurvePortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removeFundingCurvePortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removeFundingCurvePortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasFundingCurvePortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasFundingCurvePortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countFundingCurvePortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortDsecPos via underlyingCode
  underlyingCodePortDsecPos!: PortDsecPos[];
  getUnderlyingCodePortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setUnderlyingCodePortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addUnderlyingCodePortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addUnderlyingCodePortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createUnderlyingCodePortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removeUnderlyingCodePortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removeUnderlyingCodePortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasUnderlyingCodePortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasUnderlyingCodePortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countUnderlyingCodePortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortDsecPos via discountCurveName
  discountCurveNamePortDsecPos!: PortDsecPos[];
  getDiscountCurveNamePortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setDiscountCurveNamePortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addDiscountCurveNamePortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addDiscountCurveNamePortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createDiscountCurveNamePortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removeDiscountCurveNamePortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removeDiscountCurveNamePortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasDiscountCurveNamePortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasDiscountCurveNamePortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countDiscountCurveNamePortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortDsecPos via fixedRateBaseCurve
  fixedRateBaseCurvePortDsecPos!: PortDsecPos[];
  getFixedRateBaseCurvePortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setFixedRateBaseCurvePortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addFixedRateBaseCurvePortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addFixedRateBaseCurvePortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createFixedRateBaseCurvePortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removeFixedRateBaseCurvePortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removeFixedRateBaseCurvePortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasFixedRateBaseCurvePortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasFixedRateBaseCurvePortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countFixedRateBaseCurvePortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFctyMov via curveName
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
  // SysUnderlying hasMany PortFctyMov via discountCurveName
  discountCurveNamePortFctyMovs!: PortFctyMov[];
  getDiscountCurveNamePortFctyMovs!: Sequelize.HasManyGetAssociationsMixin<PortFctyMov>;
  setDiscountCurveNamePortFctyMovs!: Sequelize.HasManySetAssociationsMixin<PortFctyMov, PortFctyMovId>;
  addDiscountCurveNamePortFctyMov!: Sequelize.HasManyAddAssociationMixin<PortFctyMov, PortFctyMovId>;
  addDiscountCurveNamePortFctyMovs!: Sequelize.HasManyAddAssociationsMixin<PortFctyMov, PortFctyMovId>;
  createDiscountCurveNamePortFctyMov!: Sequelize.HasManyCreateAssociationMixin<PortFctyMov>;
  removeDiscountCurveNamePortFctyMov!: Sequelize.HasManyRemoveAssociationMixin<PortFctyMov, PortFctyMovId>;
  removeDiscountCurveNamePortFctyMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyMov, PortFctyMovId>;
  hasDiscountCurveNamePortFctyMov!: Sequelize.HasManyHasAssociationMixin<PortFctyMov, PortFctyMovId>;
  hasDiscountCurveNamePortFctyMovs!: Sequelize.HasManyHasAssociationsMixin<PortFctyMov, PortFctyMovId>;
  countDiscountCurveNamePortFctyMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFctyPos via curveName
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
  // SysUnderlying hasMany PortFctyPos via discountCurveName
  discountCurveNamePortFctyPos!: PortFctyPos[];
  getDiscountCurveNamePortFctyPos!: Sequelize.HasManyGetAssociationsMixin<PortFctyPos>;
  setDiscountCurveNamePortFctyPos!: Sequelize.HasManySetAssociationsMixin<PortFctyPos, PortFctyPosId>;
  addDiscountCurveNamePortFctyPo!: Sequelize.HasManyAddAssociationMixin<PortFctyPos, PortFctyPosId>;
  addDiscountCurveNamePortFctyPos!: Sequelize.HasManyAddAssociationsMixin<PortFctyPos, PortFctyPosId>;
  createDiscountCurveNamePortFctyPo!: Sequelize.HasManyCreateAssociationMixin<PortFctyPos>;
  removeDiscountCurveNamePortFctyPo!: Sequelize.HasManyRemoveAssociationMixin<PortFctyPos, PortFctyPosId>;
  removeDiscountCurveNamePortFctyPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyPos, PortFctyPosId>;
  hasDiscountCurveNamePortFctyPo!: Sequelize.HasManyHasAssociationMixin<PortFctyPos, PortFctyPosId>;
  hasDiscountCurveNamePortFctyPos!: Sequelize.HasManyHasAssociationsMixin<PortFctyPos, PortFctyPosId>;
  countDiscountCurveNamePortFctyPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFincCsf via curveName
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
  // SysUnderlying hasMany PortFincMov via fwdStartCorrectionUnderlying
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
  // SysUnderlying hasMany PortFincMov via fundingCurve
  fundingCurvePortFincMovs!: PortFincMov[];
  getFundingCurvePortFincMovs!: Sequelize.HasManyGetAssociationsMixin<PortFincMov>;
  setFundingCurvePortFincMovs!: Sequelize.HasManySetAssociationsMixin<PortFincMov, PortFincMovId>;
  addFundingCurvePortFincMov!: Sequelize.HasManyAddAssociationMixin<PortFincMov, PortFincMovId>;
  addFundingCurvePortFincMovs!: Sequelize.HasManyAddAssociationsMixin<PortFincMov, PortFincMovId>;
  createFundingCurvePortFincMov!: Sequelize.HasManyCreateAssociationMixin<PortFincMov>;
  removeFundingCurvePortFincMov!: Sequelize.HasManyRemoveAssociationMixin<PortFincMov, PortFincMovId>;
  removeFundingCurvePortFincMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincMov, PortFincMovId>;
  hasFundingCurvePortFincMov!: Sequelize.HasManyHasAssociationMixin<PortFincMov, PortFincMovId>;
  hasFundingCurvePortFincMovs!: Sequelize.HasManyHasAssociationsMixin<PortFincMov, PortFincMovId>;
  countFundingCurvePortFincMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFincMov via discountCurveName
  discountCurveNamePortFincMovs!: PortFincMov[];
  getDiscountCurveNamePortFincMovs!: Sequelize.HasManyGetAssociationsMixin<PortFincMov>;
  setDiscountCurveNamePortFincMovs!: Sequelize.HasManySetAssociationsMixin<PortFincMov, PortFincMovId>;
  addDiscountCurveNamePortFincMov!: Sequelize.HasManyAddAssociationMixin<PortFincMov, PortFincMovId>;
  addDiscountCurveNamePortFincMovs!: Sequelize.HasManyAddAssociationsMixin<PortFincMov, PortFincMovId>;
  createDiscountCurveNamePortFincMov!: Sequelize.HasManyCreateAssociationMixin<PortFincMov>;
  removeDiscountCurveNamePortFincMov!: Sequelize.HasManyRemoveAssociationMixin<PortFincMov, PortFincMovId>;
  removeDiscountCurveNamePortFincMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincMov, PortFincMovId>;
  hasDiscountCurveNamePortFincMov!: Sequelize.HasManyHasAssociationMixin<PortFincMov, PortFincMovId>;
  hasDiscountCurveNamePortFincMovs!: Sequelize.HasManyHasAssociationsMixin<PortFincMov, PortFincMovId>;
  countDiscountCurveNamePortFincMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFincMov via underlyingSecurity
  underlyingSecurityPortFincMovs!: PortFincMov[];
  getUnderlyingSecurityPortFincMovs!: Sequelize.HasManyGetAssociationsMixin<PortFincMov>;
  setUnderlyingSecurityPortFincMovs!: Sequelize.HasManySetAssociationsMixin<PortFincMov, PortFincMovId>;
  addUnderlyingSecurityPortFincMov!: Sequelize.HasManyAddAssociationMixin<PortFincMov, PortFincMovId>;
  addUnderlyingSecurityPortFincMovs!: Sequelize.HasManyAddAssociationsMixin<PortFincMov, PortFincMovId>;
  createUnderlyingSecurityPortFincMov!: Sequelize.HasManyCreateAssociationMixin<PortFincMov>;
  removeUnderlyingSecurityPortFincMov!: Sequelize.HasManyRemoveAssociationMixin<PortFincMov, PortFincMovId>;
  removeUnderlyingSecurityPortFincMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincMov, PortFincMovId>;
  hasUnderlyingSecurityPortFincMov!: Sequelize.HasManyHasAssociationMixin<PortFincMov, PortFincMovId>;
  hasUnderlyingSecurityPortFincMovs!: Sequelize.HasManyHasAssociationsMixin<PortFincMov, PortFincMovId>;
  countUnderlyingSecurityPortFincMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFincMov via curveName
  curveNamePortFincMovs!: PortFincMov[];
  getCurveNamePortFincMovs!: Sequelize.HasManyGetAssociationsMixin<PortFincMov>;
  setCurveNamePortFincMovs!: Sequelize.HasManySetAssociationsMixin<PortFincMov, PortFincMovId>;
  addCurveNamePortFincMov!: Sequelize.HasManyAddAssociationMixin<PortFincMov, PortFincMovId>;
  addCurveNamePortFincMovs!: Sequelize.HasManyAddAssociationsMixin<PortFincMov, PortFincMovId>;
  createCurveNamePortFincMov!: Sequelize.HasManyCreateAssociationMixin<PortFincMov>;
  removeCurveNamePortFincMov!: Sequelize.HasManyRemoveAssociationMixin<PortFincMov, PortFincMovId>;
  removeCurveNamePortFincMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincMov, PortFincMovId>;
  hasCurveNamePortFincMov!: Sequelize.HasManyHasAssociationMixin<PortFincMov, PortFincMovId>;
  hasCurveNamePortFincMovs!: Sequelize.HasManyHasAssociationsMixin<PortFincMov, PortFincMovId>;
  countCurveNamePortFincMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFincPos via fwdStartCorrectionUnderlying
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
  // SysUnderlying hasMany PortFincPos via fundingCurve
  fundingCurvePortFincPos!: PortFincPos[];
  getFundingCurvePortFincPos!: Sequelize.HasManyGetAssociationsMixin<PortFincPos>;
  setFundingCurvePortFincPos!: Sequelize.HasManySetAssociationsMixin<PortFincPos, PortFincPosId>;
  addFundingCurvePortFincPo!: Sequelize.HasManyAddAssociationMixin<PortFincPos, PortFincPosId>;
  addFundingCurvePortFincPos!: Sequelize.HasManyAddAssociationsMixin<PortFincPos, PortFincPosId>;
  createFundingCurvePortFincPo!: Sequelize.HasManyCreateAssociationMixin<PortFincPos>;
  removeFundingCurvePortFincPo!: Sequelize.HasManyRemoveAssociationMixin<PortFincPos, PortFincPosId>;
  removeFundingCurvePortFincPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFincPos, PortFincPosId>;
  hasFundingCurvePortFincPo!: Sequelize.HasManyHasAssociationMixin<PortFincPos, PortFincPosId>;
  hasFundingCurvePortFincPos!: Sequelize.HasManyHasAssociationsMixin<PortFincPos, PortFincPosId>;
  countFundingCurvePortFincPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFincPos via discountCurveName
  discountCurveNamePortFincPos!: PortFincPos[];
  getDiscountCurveNamePortFincPos!: Sequelize.HasManyGetAssociationsMixin<PortFincPos>;
  setDiscountCurveNamePortFincPos!: Sequelize.HasManySetAssociationsMixin<PortFincPos, PortFincPosId>;
  addDiscountCurveNamePortFincPo!: Sequelize.HasManyAddAssociationMixin<PortFincPos, PortFincPosId>;
  addDiscountCurveNamePortFincPos!: Sequelize.HasManyAddAssociationsMixin<PortFincPos, PortFincPosId>;
  createDiscountCurveNamePortFincPo!: Sequelize.HasManyCreateAssociationMixin<PortFincPos>;
  removeDiscountCurveNamePortFincPo!: Sequelize.HasManyRemoveAssociationMixin<PortFincPos, PortFincPosId>;
  removeDiscountCurveNamePortFincPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFincPos, PortFincPosId>;
  hasDiscountCurveNamePortFincPo!: Sequelize.HasManyHasAssociationMixin<PortFincPos, PortFincPosId>;
  hasDiscountCurveNamePortFincPos!: Sequelize.HasManyHasAssociationsMixin<PortFincPos, PortFincPosId>;
  countDiscountCurveNamePortFincPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFincPos via underlyingSecurity
  underlyingSecurityPortFincPos!: PortFincPos[];
  getUnderlyingSecurityPortFincPos!: Sequelize.HasManyGetAssociationsMixin<PortFincPos>;
  setUnderlyingSecurityPortFincPos!: Sequelize.HasManySetAssociationsMixin<PortFincPos, PortFincPosId>;
  addUnderlyingSecurityPortFincPo!: Sequelize.HasManyAddAssociationMixin<PortFincPos, PortFincPosId>;
  addUnderlyingSecurityPortFincPos!: Sequelize.HasManyAddAssociationsMixin<PortFincPos, PortFincPosId>;
  createUnderlyingSecurityPortFincPo!: Sequelize.HasManyCreateAssociationMixin<PortFincPos>;
  removeUnderlyingSecurityPortFincPo!: Sequelize.HasManyRemoveAssociationMixin<PortFincPos, PortFincPosId>;
  removeUnderlyingSecurityPortFincPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFincPos, PortFincPosId>;
  hasUnderlyingSecurityPortFincPo!: Sequelize.HasManyHasAssociationMixin<PortFincPos, PortFincPosId>;
  hasUnderlyingSecurityPortFincPos!: Sequelize.HasManyHasAssociationsMixin<PortFincPos, PortFincPosId>;
  countUnderlyingSecurityPortFincPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFincPos via curveName
  curveNamePortFincPos!: PortFincPos[];
  getCurveNamePortFincPos!: Sequelize.HasManyGetAssociationsMixin<PortFincPos>;
  setCurveNamePortFincPos!: Sequelize.HasManySetAssociationsMixin<PortFincPos, PortFincPosId>;
  addCurveNamePortFincPo!: Sequelize.HasManyAddAssociationMixin<PortFincPos, PortFincPosId>;
  addCurveNamePortFincPos!: Sequelize.HasManyAddAssociationsMixin<PortFincPos, PortFincPosId>;
  createCurveNamePortFincPo!: Sequelize.HasManyCreateAssociationMixin<PortFincPos>;
  removeCurveNamePortFincPo!: Sequelize.HasManyRemoveAssociationMixin<PortFincPos, PortFincPosId>;
  removeCurveNamePortFincPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFincPos, PortFincPosId>;
  hasCurveNamePortFincPo!: Sequelize.HasManyHasAssociationMixin<PortFincPos, PortFincPosId>;
  hasCurveNamePortFincPos!: Sequelize.HasManyHasAssociationsMixin<PortFincPos, PortFincPosId>;
  countCurveNamePortFincPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFoexCsf via curveName
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
  // SysUnderlying hasMany PortFoexMov via fwdStartCorrectionUnderlying
  portFoexMovs!: PortFoexMov[];
  getPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removePortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removePortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFoexMov via fundingCurve
  fundingCurvePortFoexMovs!: PortFoexMov[];
  getFundingCurvePortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setFundingCurvePortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addFundingCurvePortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addFundingCurvePortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createFundingCurvePortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removeFundingCurvePortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removeFundingCurvePortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasFundingCurvePortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasFundingCurvePortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countFundingCurvePortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFoexMov via underlyingPayLeg
  underlyingPayLegPortFoexMovs!: PortFoexMov[];
  getUnderlyingPayLegPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setUnderlyingPayLegPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addUnderlyingPayLegPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addUnderlyingPayLegPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createUnderlyingPayLegPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removeUnderlyingPayLegPortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removeUnderlyingPayLegPortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasUnderlyingPayLegPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasUnderlyingPayLegPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countUnderlyingPayLegPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFoexMov via underlyingRecLeg
  underlyingRecLegPortFoexMovs!: PortFoexMov[];
  getUnderlyingRecLegPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setUnderlyingRecLegPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addUnderlyingRecLegPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addUnderlyingRecLegPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createUnderlyingRecLegPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removeUnderlyingRecLegPortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removeUnderlyingRecLegPortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasUnderlyingRecLegPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasUnderlyingRecLegPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countUnderlyingRecLegPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFoexPos via fwdStartCorrectionUnderlying
  portFoexPos!: PortFoexPos[];
  getPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removePortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removePortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFoexPos via fundingCurve
  fundingCurvePortFoexPos!: PortFoexPos[];
  getFundingCurvePortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setFundingCurvePortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addFundingCurvePortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addFundingCurvePortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createFundingCurvePortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removeFundingCurvePortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removeFundingCurvePortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasFundingCurvePortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasFundingCurvePortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countFundingCurvePortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFoexPos via underlyingPayLeg
  underlyingPayLegPortFoexPos!: PortFoexPos[];
  getUnderlyingPayLegPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setUnderlyingPayLegPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addUnderlyingPayLegPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addUnderlyingPayLegPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createUnderlyingPayLegPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removeUnderlyingPayLegPortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removeUnderlyingPayLegPortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasUnderlyingPayLegPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasUnderlyingPayLegPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countUnderlyingPayLegPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFoexPos via underlyingRecLeg
  underlyingRecLegPortFoexPos!: PortFoexPos[];
  getUnderlyingRecLegPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setUnderlyingRecLegPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addUnderlyingRecLegPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addUnderlyingRecLegPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createUnderlyingRecLegPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removeUnderlyingRecLegPortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removeUnderlyingRecLegPortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasUnderlyingRecLegPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasUnderlyingRecLegPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countUnderlyingRecLegPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFutuCsf via curveName
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
  // SysUnderlying hasMany PortFutuMov via underlyingSecurity
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
  // SysUnderlying hasMany PortFutuMov via underlyingRecLeg
  underlyingRecLegPortFutuMovs!: PortFutuMov[];
  getUnderlyingRecLegPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setUnderlyingRecLegPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addUnderlyingRecLegPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addUnderlyingRecLegPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createUnderlyingRecLegPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeUnderlyingRecLegPortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeUnderlyingRecLegPortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasUnderlyingRecLegPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasUnderlyingRecLegPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countUnderlyingRecLegPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFutuMov via fundingCurve
  fundingCurvePortFutuMovs!: PortFutuMov[];
  getFundingCurvePortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setFundingCurvePortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addFundingCurvePortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addFundingCurvePortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createFundingCurvePortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeFundingCurvePortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeFundingCurvePortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasFundingCurvePortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasFundingCurvePortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countFundingCurvePortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFutuMov via underlyingPayLeg
  underlyingPayLegPortFutuMovs!: PortFutuMov[];
  getUnderlyingPayLegPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setUnderlyingPayLegPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addUnderlyingPayLegPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addUnderlyingPayLegPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createUnderlyingPayLegPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeUnderlyingPayLegPortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeUnderlyingPayLegPortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasUnderlyingPayLegPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasUnderlyingPayLegPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countUnderlyingPayLegPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFutuPos via underlyingSecurity
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
  // SysUnderlying hasMany PortFutuPos via underlyingRecLeg
  underlyingRecLegPortFutuPos!: PortFutuPos[];
  getUnderlyingRecLegPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setUnderlyingRecLegPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addUnderlyingRecLegPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addUnderlyingRecLegPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createUnderlyingRecLegPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeUnderlyingRecLegPortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeUnderlyingRecLegPortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasUnderlyingRecLegPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasUnderlyingRecLegPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countUnderlyingRecLegPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFutuPos via fundingCurve
  fundingCurvePortFutuPos!: PortFutuPos[];
  getFundingCurvePortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setFundingCurvePortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addFundingCurvePortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addFundingCurvePortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createFundingCurvePortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeFundingCurvePortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeFundingCurvePortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasFundingCurvePortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasFundingCurvePortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countFundingCurvePortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortFutuPos via underlyingPayLeg
  underlyingPayLegPortFutuPos!: PortFutuPos[];
  getUnderlyingPayLegPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setUnderlyingPayLegPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addUnderlyingPayLegPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addUnderlyingPayLegPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createUnderlyingPayLegPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeUnderlyingPayLegPortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeUnderlyingPayLegPortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasUnderlyingPayLegPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasUnderlyingPayLegPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countUnderlyingPayLegPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortGuarMov via notionalUpdateIndex
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
  // SysUnderlying hasMany PortGuarPos via notionalUpdateIndex
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
  // SysUnderlying hasMany PortLoanCsf via curveName
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
  // SysUnderlying hasMany PortLoanMov via curveName
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
  // SysUnderlying hasMany PortLoanMov via fundingCurve
  fundingCurvePortLoanMovs!: PortLoanMov[];
  getFundingCurvePortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setFundingCurvePortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addFundingCurvePortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addFundingCurvePortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createFundingCurvePortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removeFundingCurvePortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removeFundingCurvePortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasFundingCurvePortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasFundingCurvePortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countFundingCurvePortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortLoanMov via discountCurveName
  discountCurveNamePortLoanMovs!: PortLoanMov[];
  getDiscountCurveNamePortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setDiscountCurveNamePortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addDiscountCurveNamePortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addDiscountCurveNamePortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createDiscountCurveNamePortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removeDiscountCurveNamePortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removeDiscountCurveNamePortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasDiscountCurveNamePortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasDiscountCurveNamePortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countDiscountCurveNamePortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortLoanMov via spreadCurveName
  spreadCurveNamePortLoanMovs!: PortLoanMov[];
  getSpreadCurveNamePortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setSpreadCurveNamePortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addSpreadCurveNamePortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addSpreadCurveNamePortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createSpreadCurveNamePortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removeSpreadCurveNamePortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removeSpreadCurveNamePortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasSpreadCurveNamePortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasSpreadCurveNamePortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countSpreadCurveNamePortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortLoanPos via curveName
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
  // SysUnderlying hasMany PortLoanPos via fundingCurve
  fundingCurvePortLoanPos!: PortLoanPos[];
  getFundingCurvePortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setFundingCurvePortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addFundingCurvePortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addFundingCurvePortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createFundingCurvePortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removeFundingCurvePortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removeFundingCurvePortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasFundingCurvePortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasFundingCurvePortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countFundingCurvePortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortLoanPos via discountCurveName
  discountCurveNamePortLoanPos!: PortLoanPos[];
  getDiscountCurveNamePortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setDiscountCurveNamePortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addDiscountCurveNamePortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addDiscountCurveNamePortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createDiscountCurveNamePortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removeDiscountCurveNamePortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removeDiscountCurveNamePortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasDiscountCurveNamePortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasDiscountCurveNamePortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countDiscountCurveNamePortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortLoanPos via spreadCurveName
  spreadCurveNamePortLoanPos!: PortLoanPos[];
  getSpreadCurveNamePortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setSpreadCurveNamePortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addSpreadCurveNamePortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addSpreadCurveNamePortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createSpreadCurveNamePortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removeSpreadCurveNamePortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removeSpreadCurveNamePortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasSpreadCurveNamePortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasSpreadCurveNamePortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countSpreadCurveNamePortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortNdfsCsf via curveName
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
  // SysUnderlying hasMany PortNdfsMov via underlyingPayLeg
  portNdfsMovs!: PortNdfsMov[];
  getPortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setPortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addPortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addPortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createPortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removePortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removePortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasPortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasPortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countPortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortNdfsMov via underlyingRecLeg
  underlyingRecLegPortNdfsMovs!: PortNdfsMov[];
  getUnderlyingRecLegPortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setUnderlyingRecLegPortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addUnderlyingRecLegPortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addUnderlyingRecLegPortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createUnderlyingRecLegPortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removeUnderlyingRecLegPortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removeUnderlyingRecLegPortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasUnderlyingRecLegPortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasUnderlyingRecLegPortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countUnderlyingRecLegPortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortNdfsPos via underlyingPayLeg
  portNdfsPos!: PortNdfsPos[];
  getPortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setPortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addPortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addPortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createPortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removePortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removePortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasPortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasPortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countPortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortNdfsPos via underlyingRecLeg
  underlyingRecLegPortNdfsPos!: PortNdfsPos[];
  getUnderlyingRecLegPortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setUnderlyingRecLegPortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addUnderlyingRecLegPortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addUnderlyingRecLegPortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createUnderlyingRecLegPortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removeUnderlyingRecLegPortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removeUnderlyingRecLegPortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasUnderlyingRecLegPortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasUnderlyingRecLegPortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countUnderlyingRecLegPortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortNostroCsf via curveName
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
  // SysUnderlying hasMany PortNostroPos via fundingCurve
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
  // SysUnderlying hasMany PortOtherCsf via curveName
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
  // SysUnderlying hasMany PortOtherPos via underlyingCode
  portOtherPos!: PortOtherPos[];
  getPortOtherPos!: Sequelize.HasManyGetAssociationsMixin<PortOtherPos>;
  setPortOtherPos!: Sequelize.HasManySetAssociationsMixin<PortOtherPos, PortOtherPosId>;
  addPortOtherPo!: Sequelize.HasManyAddAssociationMixin<PortOtherPos, PortOtherPosId>;
  addPortOtherPos!: Sequelize.HasManyAddAssociationsMixin<PortOtherPos, PortOtherPosId>;
  createPortOtherPo!: Sequelize.HasManyCreateAssociationMixin<PortOtherPos>;
  removePortOtherPo!: Sequelize.HasManyRemoveAssociationMixin<PortOtherPos, PortOtherPosId>;
  removePortOtherPos!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherPos, PortOtherPosId>;
  hasPortOtherPo!: Sequelize.HasManyHasAssociationMixin<PortOtherPos, PortOtherPosId>;
  hasPortOtherPos!: Sequelize.HasManyHasAssociationsMixin<PortOtherPos, PortOtherPosId>;
  countPortOtherPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortOtherPos via fundingCurve
  fundingCurvePortOtherPos!: PortOtherPos[];
  getFundingCurvePortOtherPos!: Sequelize.HasManyGetAssociationsMixin<PortOtherPos>;
  setFundingCurvePortOtherPos!: Sequelize.HasManySetAssociationsMixin<PortOtherPos, PortOtherPosId>;
  addFundingCurvePortOtherPo!: Sequelize.HasManyAddAssociationMixin<PortOtherPos, PortOtherPosId>;
  addFundingCurvePortOtherPos!: Sequelize.HasManyAddAssociationsMixin<PortOtherPos, PortOtherPosId>;
  createFundingCurvePortOtherPo!: Sequelize.HasManyCreateAssociationMixin<PortOtherPos>;
  removeFundingCurvePortOtherPo!: Sequelize.HasManyRemoveAssociationMixin<PortOtherPos, PortOtherPosId>;
  removeFundingCurvePortOtherPos!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherPos, PortOtherPosId>;
  hasFundingCurvePortOtherPo!: Sequelize.HasManyHasAssociationMixin<PortOtherPos, PortOtherPosId>;
  hasFundingCurvePortOtherPos!: Sequelize.HasManyHasAssociationsMixin<PortOtherPos, PortOtherPosId>;
  countFundingCurvePortOtherPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortRecvCsf via curveName
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
  // SysUnderlying hasMany PortRecvMov via fundingCurve
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
  // SysUnderlying hasMany PortRecvMov via discountRateCurve
  discountRateCurvePortRecvMovs!: PortRecvMov[];
  getDiscountRateCurvePortRecvMovs!: Sequelize.HasManyGetAssociationsMixin<PortRecvMov>;
  setDiscountRateCurvePortRecvMovs!: Sequelize.HasManySetAssociationsMixin<PortRecvMov, PortRecvMovId>;
  addDiscountRateCurvePortRecvMov!: Sequelize.HasManyAddAssociationMixin<PortRecvMov, PortRecvMovId>;
  addDiscountRateCurvePortRecvMovs!: Sequelize.HasManyAddAssociationsMixin<PortRecvMov, PortRecvMovId>;
  createDiscountRateCurvePortRecvMov!: Sequelize.HasManyCreateAssociationMixin<PortRecvMov>;
  removeDiscountRateCurvePortRecvMov!: Sequelize.HasManyRemoveAssociationMixin<PortRecvMov, PortRecvMovId>;
  removeDiscountRateCurvePortRecvMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvMov, PortRecvMovId>;
  hasDiscountRateCurvePortRecvMov!: Sequelize.HasManyHasAssociationMixin<PortRecvMov, PortRecvMovId>;
  hasDiscountRateCurvePortRecvMovs!: Sequelize.HasManyHasAssociationsMixin<PortRecvMov, PortRecvMovId>;
  countDiscountRateCurvePortRecvMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortRecvPos via fundingCurve
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
  // SysUnderlying hasMany PortRecvPos via discountRateCurve
  discountRateCurvePortRecvPos!: PortRecvPos[];
  getDiscountRateCurvePortRecvPos!: Sequelize.HasManyGetAssociationsMixin<PortRecvPos>;
  setDiscountRateCurvePortRecvPos!: Sequelize.HasManySetAssociationsMixin<PortRecvPos, PortRecvPosId>;
  addDiscountRateCurvePortRecvPo!: Sequelize.HasManyAddAssociationMixin<PortRecvPos, PortRecvPosId>;
  addDiscountRateCurvePortRecvPos!: Sequelize.HasManyAddAssociationsMixin<PortRecvPos, PortRecvPosId>;
  createDiscountRateCurvePortRecvPo!: Sequelize.HasManyCreateAssociationMixin<PortRecvPos>;
  removeDiscountRateCurvePortRecvPo!: Sequelize.HasManyRemoveAssociationMixin<PortRecvPos, PortRecvPosId>;
  removeDiscountRateCurvePortRecvPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvPos, PortRecvPosId>;
  hasDiscountRateCurvePortRecvPo!: Sequelize.HasManyHasAssociationMixin<PortRecvPos, PortRecvPosId>;
  hasDiscountRateCurvePortRecvPos!: Sequelize.HasManyHasAssociationsMixin<PortRecvPos, PortRecvPosId>;
  countDiscountRateCurvePortRecvPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortRepoCsf via curveName
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
  // SysUnderlying hasMany PortRepoMov via fwdStartCorrectionUnderlying
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
  // SysUnderlying hasMany PortRepoMov via curveNameCashLeg
  curveNameCashLegPortRepoMovs!: PortRepoMov[];
  getCurveNameCashLegPortRepoMovs!: Sequelize.HasManyGetAssociationsMixin<PortRepoMov>;
  setCurveNameCashLegPortRepoMovs!: Sequelize.HasManySetAssociationsMixin<PortRepoMov, PortRepoMovId>;
  addCurveNameCashLegPortRepoMov!: Sequelize.HasManyAddAssociationMixin<PortRepoMov, PortRepoMovId>;
  addCurveNameCashLegPortRepoMovs!: Sequelize.HasManyAddAssociationsMixin<PortRepoMov, PortRepoMovId>;
  createCurveNameCashLegPortRepoMov!: Sequelize.HasManyCreateAssociationMixin<PortRepoMov>;
  removeCurveNameCashLegPortRepoMov!: Sequelize.HasManyRemoveAssociationMixin<PortRepoMov, PortRepoMovId>;
  removeCurveNameCashLegPortRepoMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoMov, PortRepoMovId>;
  hasCurveNameCashLegPortRepoMov!: Sequelize.HasManyHasAssociationMixin<PortRepoMov, PortRepoMovId>;
  hasCurveNameCashLegPortRepoMovs!: Sequelize.HasManyHasAssociationsMixin<PortRepoMov, PortRepoMovId>;
  countCurveNameCashLegPortRepoMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortRepoMov via fundingCurve
  fundingCurvePortRepoMovs!: PortRepoMov[];
  getFundingCurvePortRepoMovs!: Sequelize.HasManyGetAssociationsMixin<PortRepoMov>;
  setFundingCurvePortRepoMovs!: Sequelize.HasManySetAssociationsMixin<PortRepoMov, PortRepoMovId>;
  addFundingCurvePortRepoMov!: Sequelize.HasManyAddAssociationMixin<PortRepoMov, PortRepoMovId>;
  addFundingCurvePortRepoMovs!: Sequelize.HasManyAddAssociationsMixin<PortRepoMov, PortRepoMovId>;
  createFundingCurvePortRepoMov!: Sequelize.HasManyCreateAssociationMixin<PortRepoMov>;
  removeFundingCurvePortRepoMov!: Sequelize.HasManyRemoveAssociationMixin<PortRepoMov, PortRepoMovId>;
  removeFundingCurvePortRepoMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoMov, PortRepoMovId>;
  hasFundingCurvePortRepoMov!: Sequelize.HasManyHasAssociationMixin<PortRepoMov, PortRepoMovId>;
  hasFundingCurvePortRepoMovs!: Sequelize.HasManyHasAssociationsMixin<PortRepoMov, PortRepoMovId>;
  countFundingCurvePortRepoMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortRepoPos via fwdStartCorrectionUnderlying
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
  // SysUnderlying hasMany PortRepoPos via curveNameCashLeg
  curveNameCashLegPortRepoPos!: PortRepoPos[];
  getCurveNameCashLegPortRepoPos!: Sequelize.HasManyGetAssociationsMixin<PortRepoPos>;
  setCurveNameCashLegPortRepoPos!: Sequelize.HasManySetAssociationsMixin<PortRepoPos, PortRepoPosId>;
  addCurveNameCashLegPortRepoPo!: Sequelize.HasManyAddAssociationMixin<PortRepoPos, PortRepoPosId>;
  addCurveNameCashLegPortRepoPos!: Sequelize.HasManyAddAssociationsMixin<PortRepoPos, PortRepoPosId>;
  createCurveNameCashLegPortRepoPo!: Sequelize.HasManyCreateAssociationMixin<PortRepoPos>;
  removeCurveNameCashLegPortRepoPo!: Sequelize.HasManyRemoveAssociationMixin<PortRepoPos, PortRepoPosId>;
  removeCurveNameCashLegPortRepoPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoPos, PortRepoPosId>;
  hasCurveNameCashLegPortRepoPo!: Sequelize.HasManyHasAssociationMixin<PortRepoPos, PortRepoPosId>;
  hasCurveNameCashLegPortRepoPos!: Sequelize.HasManyHasAssociationsMixin<PortRepoPos, PortRepoPosId>;
  countCurveNameCashLegPortRepoPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortRepoPos via fundingCurve
  fundingCurvePortRepoPos!: PortRepoPos[];
  getFundingCurvePortRepoPos!: Sequelize.HasManyGetAssociationsMixin<PortRepoPos>;
  setFundingCurvePortRepoPos!: Sequelize.HasManySetAssociationsMixin<PortRepoPos, PortRepoPosId>;
  addFundingCurvePortRepoPo!: Sequelize.HasManyAddAssociationMixin<PortRepoPos, PortRepoPosId>;
  addFundingCurvePortRepoPos!: Sequelize.HasManyAddAssociationsMixin<PortRepoPos, PortRepoPosId>;
  createFundingCurvePortRepoPo!: Sequelize.HasManyCreateAssociationMixin<PortRepoPos>;
  removeFundingCurvePortRepoPo!: Sequelize.HasManyRemoveAssociationMixin<PortRepoPos, PortRepoPosId>;
  removeFundingCurvePortRepoPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoPos, PortRepoPosId>;
  hasFundingCurvePortRepoPo!: Sequelize.HasManyHasAssociationMixin<PortRepoPos, PortRepoPosId>;
  hasFundingCurvePortRepoPos!: Sequelize.HasManyHasAssociationsMixin<PortRepoPos, PortRepoPosId>;
  countFundingCurvePortRepoPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortSwapCsf via curveName
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
  // SysUnderlying hasMany PortSwapMov via underlyingPayLeg
  portSwapMovs!: PortSwapMov[];
  getPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removePortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removePortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortSwapMov via fwdStartCorrectionUnderlying
  fwdStartCorrectionUnderlyingPortSwapMovs!: PortSwapMov[];
  getFwdStartCorrectionUnderlyingPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setFwdStartCorrectionUnderlyingPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addFwdStartCorrectionUnderlyingPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addFwdStartCorrectionUnderlyingPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createFwdStartCorrectionUnderlyingPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removeFwdStartCorrectionUnderlyingPortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removeFwdStartCorrectionUnderlyingPortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasFwdStartCorrectionUnderlyingPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasFwdStartCorrectionUnderlyingPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countFwdStartCorrectionUnderlyingPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortSwapMov via fundingCurve
  fundingCurvePortSwapMovs!: PortSwapMov[];
  getFundingCurvePortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setFundingCurvePortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addFundingCurvePortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addFundingCurvePortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createFundingCurvePortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removeFundingCurvePortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removeFundingCurvePortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasFundingCurvePortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasFundingCurvePortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countFundingCurvePortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortSwapMov via underlyingRecLeg
  underlyingRecLegPortSwapMovs!: PortSwapMov[];
  getUnderlyingRecLegPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setUnderlyingRecLegPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addUnderlyingRecLegPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addUnderlyingRecLegPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createUnderlyingRecLegPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removeUnderlyingRecLegPortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removeUnderlyingRecLegPortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasUnderlyingRecLegPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasUnderlyingRecLegPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countUnderlyingRecLegPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortSwapPos via underlyingPayLeg
  portSwapPos!: PortSwapPos[];
  getPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removePortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removePortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortSwapPos via fwdStartCorrectionUnderlying
  fwdStartCorrectionUnderlyingPortSwapPos!: PortSwapPos[];
  getFwdStartCorrectionUnderlyingPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setFwdStartCorrectionUnderlyingPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addFwdStartCorrectionUnderlyingPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addFwdStartCorrectionUnderlyingPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createFwdStartCorrectionUnderlyingPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removeFwdStartCorrectionUnderlyingPortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removeFwdStartCorrectionUnderlyingPortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasFwdStartCorrectionUnderlyingPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasFwdStartCorrectionUnderlyingPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countFwdStartCorrectionUnderlyingPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortSwapPos via fundingCurve
  fundingCurvePortSwapPos!: PortSwapPos[];
  getFundingCurvePortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setFundingCurvePortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addFundingCurvePortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addFundingCurvePortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createFundingCurvePortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removeFundingCurvePortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removeFundingCurvePortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasFundingCurvePortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasFundingCurvePortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countFundingCurvePortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortSwapPos via underlyingRecLeg
  underlyingRecLegPortSwapPos!: PortSwapPos[];
  getUnderlyingRecLegPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setUnderlyingRecLegPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addUnderlyingRecLegPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addUnderlyingRecLegPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createUnderlyingRecLegPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removeUnderlyingRecLegPortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removeUnderlyingRecLegPortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasUnderlyingRecLegPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasUnderlyingRecLegPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countUnderlyingRecLegPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying hasMany PortVostroCsf via curveName
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
  // SysUnderlying hasMany PortVostroPos via fundingCurve
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
  // SysUnderlying hasMany SysCurveUnderlyingLink via underlyingCode
  sysCurveUnderlyingLinks!: SysCurveUnderlyingLink[];
  getSysCurveUnderlyingLinks!: Sequelize.HasManyGetAssociationsMixin<SysCurveUnderlyingLink>;
  setSysCurveUnderlyingLinks!: Sequelize.HasManySetAssociationsMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  addSysCurveUnderlyingLink!: Sequelize.HasManyAddAssociationMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  addSysCurveUnderlyingLinks!: Sequelize.HasManyAddAssociationsMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  createSysCurveUnderlyingLink!: Sequelize.HasManyCreateAssociationMixin<SysCurveUnderlyingLink>;
  removeSysCurveUnderlyingLink!: Sequelize.HasManyRemoveAssociationMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  removeSysCurveUnderlyingLinks!: Sequelize.HasManyRemoveAssociationsMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  hasSysCurveUnderlyingLink!: Sequelize.HasManyHasAssociationMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  hasSysCurveUnderlyingLinks!: Sequelize.HasManyHasAssociationsMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  countSysCurveUnderlyingLinks!: Sequelize.HasManyCountAssociationsMixin;
  // SysUnderlying belongsTo SysUnderlyingType via underlyingType
  underlyingTypeSysUnderlyingType!: SysUnderlyingType;
  getUnderlyingTypeSysUnderlyingType!: Sequelize.BelongsToGetAssociationMixin<SysUnderlyingType>;
  setUnderlyingTypeSysUnderlyingType!: Sequelize.BelongsToSetAssociationMixin<SysUnderlyingType, SysUnderlyingTypeId>;
  createUnderlyingTypeSysUnderlyingType!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlyingType>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SysUnderlying {
    return SysUnderlying.init({
    underlyingCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'underlying_code'
    },
    underlyingDescription: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'underlying_description'
    },
    underlyingCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'underlying_ccy'
    },
    underlyingType: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      references: {
        model: 'sys_underlying_type',
        key: 'underlying_type'
      },
      field: 'underlying_type'
    },
    underlyingTickerBbg: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'underlying_ticker_bbg'
    },
    underlyingTickerRfntvt: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'underlying_ticker_rfntvt'
    },
    underlyingInitialDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'underlying_initial_date'
    },
    underlyingEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'underlying_end_date'
    }
  }, {
    sequelize,
    tableName: 'sys_underlying',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-SYS_UNDERLYING",
        unique: true,
        fields: [
          { name: "underlying_code" },
        ]
      },
    ]
  });
  }
}
