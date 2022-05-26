import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmCpadEadBase, AlcmCpadEadBaseId } from './AlcmCpadEadBase';
import type { AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId } from './AlcmLiqNsfrProductParam';
import type { CrmGuarPos, CrmGuarPosId } from './CrmGuarPos';
import type { DomsCcyConvType, DomsCcyConvTypeId } from './DomsCcyConvType';
import type { GenldgBsJournal, GenldgBsJournalId } from './GenldgBsJournal';
import type { GenldgGlbsPos, GenldgGlbsPosId } from './GenldgGlbsPos';
import type { InvptyFncls, InvptyFnclsId } from './InvptyFncls';
import type { PnlFeeincDet, PnlFeeincDetId } from './PnlFeeincDet';
import type { PnlGmplexDet, PnlGmplexDetId } from './PnlGmplexDet';
import type { PnlInterestincClc, PnlInterestincClcId } from './PnlInterestincClc';
import type { PnlOperincCsf, PnlOperincCsfId } from './PnlOperincCsf';
import type { PnlOperincDet, PnlOperincDetId } from './PnlOperincDet';
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
import type { PortRecvLnk, PortRecvLnkId } from './PortRecvLnk';
import type { PortRecvMov, PortRecvMovId } from './PortRecvMov';
import type { PortRecvPos, PortRecvPosId } from './PortRecvPos';
import type { PortRepoCsf, PortRepoCsfId } from './PortRepoCsf';
import type { PortRepoDet, PortRepoDetId } from './PortRepoDet';
import type { PortRepoMov, PortRepoMovId } from './PortRepoMov';
import type { PortRepoPos, PortRepoPosId } from './PortRepoPos';
import type { PortSwapCsf, PortSwapCsfId } from './PortSwapCsf';
import type { PortSwapMov, PortSwapMovId } from './PortSwapMov';
import type { PortSwapPos, PortSwapPosId } from './PortSwapPos';
import type { PortVostroCsf, PortVostroCsfId } from './PortVostroCsf';
import type { PortVostroPos, PortVostroPosId } from './PortVostroPos';
import type { SysCountry, SysCountryId } from './SysCountry';
import type { SysCountryCcyLnk, SysCountryCcyLnkId } from './SysCountryCcyLnk';
import type { SysCurve, SysCurveId } from './SysCurve';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface SysCurrencyAttributes {
  currencyCode: string;
  currencyName: string;
  currencyConvType: string;
  currencyNumericBacenCode?: number;
  recordInitialDate?: string;
  recordEndDate?: string;
}

export type SysCurrencyPk = "currencyCode";
export type SysCurrencyId = SysCurrency[SysCurrencyPk];
export type SysCurrencyOptionalAttributes = "currencyNumericBacenCode" | "recordInitialDate" | "recordEndDate";
export type SysCurrencyCreationAttributes = Optional<SysCurrencyAttributes, SysCurrencyOptionalAttributes>;

export class SysCurrency extends Model<SysCurrencyAttributes, SysCurrencyCreationAttributes> implements SysCurrencyAttributes {
  currencyCode!: string;
  currencyName!: string;
  currencyConvType!: string;
  currencyNumericBacenCode?: number;
  recordInitialDate?: string;
  recordEndDate?: string;

  // SysCurrency belongsTo DomsCcyConvType via currencyConvType
  currencyConvTypeDomsCcyConvType!: DomsCcyConvType;
  getCurrencyConvTypeDomsCcyConvType!: Sequelize.BelongsToGetAssociationMixin<DomsCcyConvType>;
  setCurrencyConvTypeDomsCcyConvType!: Sequelize.BelongsToSetAssociationMixin<DomsCcyConvType, DomsCcyConvTypeId>;
  createCurrencyConvTypeDomsCcyConvType!: Sequelize.BelongsToCreateAssociationMixin<DomsCcyConvType>;
  // SysCurrency hasMany AlcmCpadEadBase via notionalCcy
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
  // SysCurrency hasMany AlcmCpadEadBase via underlyingCcyPayLeg
  underlyingCcyPayLegAlcmCpadEadBases!: AlcmCpadEadBase[];
  getUnderlyingCcyPayLegAlcmCpadEadBases!: Sequelize.HasManyGetAssociationsMixin<AlcmCpadEadBase>;
  setUnderlyingCcyPayLegAlcmCpadEadBases!: Sequelize.HasManySetAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addUnderlyingCcyPayLegAlcmCpadEadBasis!: Sequelize.HasManyAddAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addUnderlyingCcyPayLegAlcmCpadEadBases!: Sequelize.HasManyAddAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  createUnderlyingCcyPayLegAlcmCpadEadBasis!: Sequelize.HasManyCreateAssociationMixin<AlcmCpadEadBase>;
  removeUnderlyingCcyPayLegAlcmCpadEadBasis!: Sequelize.HasManyRemoveAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  removeUnderlyingCcyPayLegAlcmCpadEadBases!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasUnderlyingCcyPayLegAlcmCpadEadBasis!: Sequelize.HasManyHasAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasUnderlyingCcyPayLegAlcmCpadEadBases!: Sequelize.HasManyHasAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  countUnderlyingCcyPayLegAlcmCpadEadBases!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany AlcmCpadEadBase via underlyingCcyRecLeg
  underlyingCcyRecLegAlcmCpadEadBases!: AlcmCpadEadBase[];
  getUnderlyingCcyRecLegAlcmCpadEadBases!: Sequelize.HasManyGetAssociationsMixin<AlcmCpadEadBase>;
  setUnderlyingCcyRecLegAlcmCpadEadBases!: Sequelize.HasManySetAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addUnderlyingCcyRecLegAlcmCpadEadBasis!: Sequelize.HasManyAddAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addUnderlyingCcyRecLegAlcmCpadEadBases!: Sequelize.HasManyAddAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  createUnderlyingCcyRecLegAlcmCpadEadBasis!: Sequelize.HasManyCreateAssociationMixin<AlcmCpadEadBase>;
  removeUnderlyingCcyRecLegAlcmCpadEadBasis!: Sequelize.HasManyRemoveAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  removeUnderlyingCcyRecLegAlcmCpadEadBases!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasUnderlyingCcyRecLegAlcmCpadEadBasis!: Sequelize.HasManyHasAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasUnderlyingCcyRecLegAlcmCpadEadBases!: Sequelize.HasManyHasAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  countUnderlyingCcyRecLegAlcmCpadEadBases!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany AlcmLiqNsfrProductParam via currencyCode
  alcmLiqNsfrProductParams!: AlcmLiqNsfrProductParam[];
  getAlcmLiqNsfrProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmLiqNsfrProductParam>;
  setAlcmLiqNsfrProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  addAlcmLiqNsfrProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  addAlcmLiqNsfrProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  createAlcmLiqNsfrProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmLiqNsfrProductParam>;
  removeAlcmLiqNsfrProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  removeAlcmLiqNsfrProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  hasAlcmLiqNsfrProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  hasAlcmLiqNsfrProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  countAlcmLiqNsfrProductParams!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany CrmGuarPos via currencyCode
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
  // SysCurrency hasMany GenldgBsJournal via glReportCcy
  genldgBsJournals!: GenldgBsJournal[];
  getGenldgBsJournals!: Sequelize.HasManyGetAssociationsMixin<GenldgBsJournal>;
  setGenldgBsJournals!: Sequelize.HasManySetAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  addGenldgBsJournal!: Sequelize.HasManyAddAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  addGenldgBsJournals!: Sequelize.HasManyAddAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  createGenldgBsJournal!: Sequelize.HasManyCreateAssociationMixin<GenldgBsJournal>;
  removeGenldgBsJournal!: Sequelize.HasManyRemoveAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  removeGenldgBsJournals!: Sequelize.HasManyRemoveAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  hasGenldgBsJournal!: Sequelize.HasManyHasAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  hasGenldgBsJournals!: Sequelize.HasManyHasAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  countGenldgBsJournals!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany GenldgGlbsPos via glFunctionalCcy
  genldgGlbsPos!: GenldgGlbsPos[];
  getGenldgGlbsPos!: Sequelize.HasManyGetAssociationsMixin<GenldgGlbsPos>;
  setGenldgGlbsPos!: Sequelize.HasManySetAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addGenldgGlbsPo!: Sequelize.HasManyAddAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addGenldgGlbsPos!: Sequelize.HasManyAddAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  createGenldgGlbsPo!: Sequelize.HasManyCreateAssociationMixin<GenldgGlbsPos>;
  removeGenldgGlbsPo!: Sequelize.HasManyRemoveAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  removeGenldgGlbsPos!: Sequelize.HasManyRemoveAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasGenldgGlbsPo!: Sequelize.HasManyHasAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasGenldgGlbsPos!: Sequelize.HasManyHasAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  countGenldgGlbsPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany GenldgGlbsPos via glReportCcy
  glReportCcyGenldgGlbsPos!: GenldgGlbsPos[];
  getGlReportCcyGenldgGlbsPos!: Sequelize.HasManyGetAssociationsMixin<GenldgGlbsPos>;
  setGlReportCcyGenldgGlbsPos!: Sequelize.HasManySetAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addGlReportCcyGenldgGlbsPo!: Sequelize.HasManyAddAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addGlReportCcyGenldgGlbsPos!: Sequelize.HasManyAddAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  createGlReportCcyGenldgGlbsPo!: Sequelize.HasManyCreateAssociationMixin<GenldgGlbsPos>;
  removeGlReportCcyGenldgGlbsPo!: Sequelize.HasManyRemoveAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  removeGlReportCcyGenldgGlbsPos!: Sequelize.HasManyRemoveAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasGlReportCcyGenldgGlbsPo!: Sequelize.HasManyHasAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasGlReportCcyGenldgGlbsPos!: Sequelize.HasManyHasAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  countGlReportCcyGenldgGlbsPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany InvptyFncls via finReportCcy
  invptyFncls!: InvptyFncls[];
  getInvptyFncls!: Sequelize.HasManyGetAssociationsMixin<InvptyFncls>;
  setInvptyFncls!: Sequelize.HasManySetAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  addInvptyFncl!: Sequelize.HasManyAddAssociationMixin<InvptyFncls, InvptyFnclsId>;
  addInvptyFncls!: Sequelize.HasManyAddAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  createInvptyFncl!: Sequelize.HasManyCreateAssociationMixin<InvptyFncls>;
  removeInvptyFncl!: Sequelize.HasManyRemoveAssociationMixin<InvptyFncls, InvptyFnclsId>;
  removeInvptyFncls!: Sequelize.HasManyRemoveAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  hasInvptyFncl!: Sequelize.HasManyHasAssociationMixin<InvptyFncls, InvptyFnclsId>;
  hasInvptyFncls!: Sequelize.HasManyHasAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  countInvptyFncls!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany InvptyFncls via finFunctionalCcy
  finFunctionalCcyInvptyFncls!: InvptyFncls[];
  getFinFunctionalCcyInvptyFncls!: Sequelize.HasManyGetAssociationsMixin<InvptyFncls>;
  setFinFunctionalCcyInvptyFncls!: Sequelize.HasManySetAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  addFinFunctionalCcyInvptyFncl!: Sequelize.HasManyAddAssociationMixin<InvptyFncls, InvptyFnclsId>;
  addFinFunctionalCcyInvptyFncls!: Sequelize.HasManyAddAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  createFinFunctionalCcyInvptyFncl!: Sequelize.HasManyCreateAssociationMixin<InvptyFncls>;
  removeFinFunctionalCcyInvptyFncl!: Sequelize.HasManyRemoveAssociationMixin<InvptyFncls, InvptyFnclsId>;
  removeFinFunctionalCcyInvptyFncls!: Sequelize.HasManyRemoveAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  hasFinFunctionalCcyInvptyFncl!: Sequelize.HasManyHasAssociationMixin<InvptyFncls, InvptyFnclsId>;
  hasFinFunctionalCcyInvptyFncls!: Sequelize.HasManyHasAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  countFinFunctionalCcyInvptyFncls!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PnlFeeincDet via currencyCode
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
  // SysCurrency hasMany PnlGmplexDet via currencyPayLeg
  pnlGmplexDets!: PnlGmplexDet[];
  getPnlGmplexDets!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexDet>;
  setPnlGmplexDets!: Sequelize.HasManySetAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  addPnlGmplexDet!: Sequelize.HasManyAddAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  addPnlGmplexDets!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  createPnlGmplexDet!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexDet>;
  removePnlGmplexDet!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  removePnlGmplexDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasPnlGmplexDet!: Sequelize.HasManyHasAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasPnlGmplexDets!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  countPnlGmplexDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PnlGmplexDet via currencyRecLeg
  currencyRecLegPnlGmplexDets!: PnlGmplexDet[];
  getCurrencyRecLegPnlGmplexDets!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexDet>;
  setCurrencyRecLegPnlGmplexDets!: Sequelize.HasManySetAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  addCurrencyRecLegPnlGmplexDet!: Sequelize.HasManyAddAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  addCurrencyRecLegPnlGmplexDets!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  createCurrencyRecLegPnlGmplexDet!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexDet>;
  removeCurrencyRecLegPnlGmplexDet!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  removeCurrencyRecLegPnlGmplexDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasCurrencyRecLegPnlGmplexDet!: Sequelize.HasManyHasAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasCurrencyRecLegPnlGmplexDets!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  countCurrencyRecLegPnlGmplexDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PnlInterestincClc via currencyCode
  pnlInterestincClcs!: PnlInterestincClc[];
  getPnlInterestincClcs!: Sequelize.HasManyGetAssociationsMixin<PnlInterestincClc>;
  setPnlInterestincClcs!: Sequelize.HasManySetAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  addPnlInterestincClc!: Sequelize.HasManyAddAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  addPnlInterestincClcs!: Sequelize.HasManyAddAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  createPnlInterestincClc!: Sequelize.HasManyCreateAssociationMixin<PnlInterestincClc>;
  removePnlInterestincClc!: Sequelize.HasManyRemoveAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  removePnlInterestincClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasPnlInterestincClc!: Sequelize.HasManyHasAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasPnlInterestincClcs!: Sequelize.HasManyHasAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  countPnlInterestincClcs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PnlOperincCsf via currencyCode
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
  // SysCurrency hasMany PnlOperincCsf via notionalCurrency
  notionalCurrencyPnlOperincCsfs!: PnlOperincCsf[];
  getNotionalCurrencyPnlOperincCsfs!: Sequelize.HasManyGetAssociationsMixin<PnlOperincCsf>;
  setNotionalCurrencyPnlOperincCsfs!: Sequelize.HasManySetAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  addNotionalCurrencyPnlOperincCsf!: Sequelize.HasManyAddAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  addNotionalCurrencyPnlOperincCsfs!: Sequelize.HasManyAddAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  createNotionalCurrencyPnlOperincCsf!: Sequelize.HasManyCreateAssociationMixin<PnlOperincCsf>;
  removeNotionalCurrencyPnlOperincCsf!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  removeNotionalCurrencyPnlOperincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasNotionalCurrencyPnlOperincCsf!: Sequelize.HasManyHasAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasNotionalCurrencyPnlOperincCsfs!: Sequelize.HasManyHasAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  countNotionalCurrencyPnlOperincCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PnlOperincDet via currencyCode
  pnlOperincDets!: PnlOperincDet[];
  getPnlOperincDets!: Sequelize.HasManyGetAssociationsMixin<PnlOperincDet>;
  setPnlOperincDets!: Sequelize.HasManySetAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  addPnlOperincDet!: Sequelize.HasManyAddAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  addPnlOperincDets!: Sequelize.HasManyAddAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  createPnlOperincDet!: Sequelize.HasManyCreateAssociationMixin<PnlOperincDet>;
  removePnlOperincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  removePnlOperincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  hasPnlOperincDet!: Sequelize.HasManyHasAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  hasPnlOperincDets!: Sequelize.HasManyHasAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  countPnlOperincDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortDsecCsf via currencyCode
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
  // SysCurrency hasMany PortDsecCsf via notionalCurrency
  notionalCurrencyPortDsecCsfs!: PortDsecCsf[];
  getNotionalCurrencyPortDsecCsfs!: Sequelize.HasManyGetAssociationsMixin<PortDsecCsf>;
  setNotionalCurrencyPortDsecCsfs!: Sequelize.HasManySetAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  addNotionalCurrencyPortDsecCsf!: Sequelize.HasManyAddAssociationMixin<PortDsecCsf, PortDsecCsfId>;
  addNotionalCurrencyPortDsecCsfs!: Sequelize.HasManyAddAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  createNotionalCurrencyPortDsecCsf!: Sequelize.HasManyCreateAssociationMixin<PortDsecCsf>;
  removeNotionalCurrencyPortDsecCsf!: Sequelize.HasManyRemoveAssociationMixin<PortDsecCsf, PortDsecCsfId>;
  removeNotionalCurrencyPortDsecCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  hasNotionalCurrencyPortDsecCsf!: Sequelize.HasManyHasAssociationMixin<PortDsecCsf, PortDsecCsfId>;
  hasNotionalCurrencyPortDsecCsfs!: Sequelize.HasManyHasAssociationsMixin<PortDsecCsf, PortDsecCsfId>;
  countNotionalCurrencyPortDsecCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortDsecMov via currencyCode
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
  // SysCurrency hasMany PortDsecPos via currencyCode
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
  // SysCurrency hasMany PortFctyMov via currencyCode
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
  // SysCurrency hasMany PortFctyPos via currencyCode
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
  // SysCurrency hasMany PortFincCsf via notionalCurrency
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
  // SysCurrency hasMany PortFincCsf via currencyCode
  currencyCodePortFincCsfs!: PortFincCsf[];
  getCurrencyCodePortFincCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFincCsf>;
  setCurrencyCodePortFincCsfs!: Sequelize.HasManySetAssociationsMixin<PortFincCsf, PortFincCsfId>;
  addCurrencyCodePortFincCsf!: Sequelize.HasManyAddAssociationMixin<PortFincCsf, PortFincCsfId>;
  addCurrencyCodePortFincCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFincCsf, PortFincCsfId>;
  createCurrencyCodePortFincCsf!: Sequelize.HasManyCreateAssociationMixin<PortFincCsf>;
  removeCurrencyCodePortFincCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFincCsf, PortFincCsfId>;
  removeCurrencyCodePortFincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincCsf, PortFincCsfId>;
  hasCurrencyCodePortFincCsf!: Sequelize.HasManyHasAssociationMixin<PortFincCsf, PortFincCsfId>;
  hasCurrencyCodePortFincCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFincCsf, PortFincCsfId>;
  countCurrencyCodePortFincCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFincMov via fundingCcy
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
  // SysCurrency hasMany PortFincMov via underlyingCcy
  underlyingCcyPortFincMovs!: PortFincMov[];
  getUnderlyingCcyPortFincMovs!: Sequelize.HasManyGetAssociationsMixin<PortFincMov>;
  setUnderlyingCcyPortFincMovs!: Sequelize.HasManySetAssociationsMixin<PortFincMov, PortFincMovId>;
  addUnderlyingCcyPortFincMov!: Sequelize.HasManyAddAssociationMixin<PortFincMov, PortFincMovId>;
  addUnderlyingCcyPortFincMovs!: Sequelize.HasManyAddAssociationsMixin<PortFincMov, PortFincMovId>;
  createUnderlyingCcyPortFincMov!: Sequelize.HasManyCreateAssociationMixin<PortFincMov>;
  removeUnderlyingCcyPortFincMov!: Sequelize.HasManyRemoveAssociationMixin<PortFincMov, PortFincMovId>;
  removeUnderlyingCcyPortFincMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincMov, PortFincMovId>;
  hasUnderlyingCcyPortFincMov!: Sequelize.HasManyHasAssociationMixin<PortFincMov, PortFincMovId>;
  hasUnderlyingCcyPortFincMovs!: Sequelize.HasManyHasAssociationsMixin<PortFincMov, PortFincMovId>;
  countUnderlyingCcyPortFincMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFincPos via fundingCcy
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
  // SysCurrency hasMany PortFincPos via underlyingCcy
  underlyingCcyPortFincPos!: PortFincPos[];
  getUnderlyingCcyPortFincPos!: Sequelize.HasManyGetAssociationsMixin<PortFincPos>;
  setUnderlyingCcyPortFincPos!: Sequelize.HasManySetAssociationsMixin<PortFincPos, PortFincPosId>;
  addUnderlyingCcyPortFincPo!: Sequelize.HasManyAddAssociationMixin<PortFincPos, PortFincPosId>;
  addUnderlyingCcyPortFincPos!: Sequelize.HasManyAddAssociationsMixin<PortFincPos, PortFincPosId>;
  createUnderlyingCcyPortFincPo!: Sequelize.HasManyCreateAssociationMixin<PortFincPos>;
  removeUnderlyingCcyPortFincPo!: Sequelize.HasManyRemoveAssociationMixin<PortFincPos, PortFincPosId>;
  removeUnderlyingCcyPortFincPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFincPos, PortFincPosId>;
  hasUnderlyingCcyPortFincPo!: Sequelize.HasManyHasAssociationMixin<PortFincPos, PortFincPosId>;
  hasUnderlyingCcyPortFincPos!: Sequelize.HasManyHasAssociationsMixin<PortFincPos, PortFincPosId>;
  countUnderlyingCcyPortFincPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFoexCsf via currencyCode
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
  // SysCurrency hasMany PortFoexCsf via notionalCurrency
  notionalCurrencyPortFoexCsfs!: PortFoexCsf[];
  getNotionalCurrencyPortFoexCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFoexCsf>;
  setNotionalCurrencyPortFoexCsfs!: Sequelize.HasManySetAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  addNotionalCurrencyPortFoexCsf!: Sequelize.HasManyAddAssociationMixin<PortFoexCsf, PortFoexCsfId>;
  addNotionalCurrencyPortFoexCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  createNotionalCurrencyPortFoexCsf!: Sequelize.HasManyCreateAssociationMixin<PortFoexCsf>;
  removeNotionalCurrencyPortFoexCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFoexCsf, PortFoexCsfId>;
  removeNotionalCurrencyPortFoexCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  hasNotionalCurrencyPortFoexCsf!: Sequelize.HasManyHasAssociationMixin<PortFoexCsf, PortFoexCsfId>;
  hasNotionalCurrencyPortFoexCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFoexCsf, PortFoexCsfId>;
  countNotionalCurrencyPortFoexCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFoexMov via underlyingCcyPayLeg
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
  // SysCurrency hasMany PortFoexMov via underlyingCcyRecLeg
  underlyingCcyRecLegPortFoexMovs!: PortFoexMov[];
  getUnderlyingCcyRecLegPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setUnderlyingCcyRecLegPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addUnderlyingCcyRecLegPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addUnderlyingCcyRecLegPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createUnderlyingCcyRecLegPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removeUnderlyingCcyRecLegPortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removeUnderlyingCcyRecLegPortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasUnderlyingCcyRecLegPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasUnderlyingCcyRecLegPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countUnderlyingCcyRecLegPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFoexMov via currencyRecLeg
  currencyRecLegPortFoexMovs!: PortFoexMov[];
  getCurrencyRecLegPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setCurrencyRecLegPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addCurrencyRecLegPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addCurrencyRecLegPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createCurrencyRecLegPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removeCurrencyRecLegPortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removeCurrencyRecLegPortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasCurrencyRecLegPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasCurrencyRecLegPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countCurrencyRecLegPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFoexMov via currencyMarketValue
  currencyMarketValuePortFoexMovs!: PortFoexMov[];
  getCurrencyMarketValuePortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setCurrencyMarketValuePortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addCurrencyMarketValuePortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addCurrencyMarketValuePortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createCurrencyMarketValuePortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removeCurrencyMarketValuePortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removeCurrencyMarketValuePortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasCurrencyMarketValuePortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasCurrencyMarketValuePortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countCurrencyMarketValuePortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFoexMov via fundingCcy
  fundingCcyPortFoexMovs!: PortFoexMov[];
  getFundingCcyPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setFundingCcyPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addFundingCcyPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addFundingCcyPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createFundingCcyPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removeFundingCcyPortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removeFundingCcyPortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasFundingCcyPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasFundingCcyPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countFundingCcyPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFoexMov via currencyPayLeg
  currencyPayLegPortFoexMovs!: PortFoexMov[];
  getCurrencyPayLegPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setCurrencyPayLegPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addCurrencyPayLegPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addCurrencyPayLegPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createCurrencyPayLegPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removeCurrencyPayLegPortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removeCurrencyPayLegPortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasCurrencyPayLegPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasCurrencyPayLegPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countCurrencyPayLegPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFoexPos via underlyingCcyPayLeg
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
  // SysCurrency hasMany PortFoexPos via underlyingCcyRecLeg
  underlyingCcyRecLegPortFoexPos!: PortFoexPos[];
  getUnderlyingCcyRecLegPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setUnderlyingCcyRecLegPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addUnderlyingCcyRecLegPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addUnderlyingCcyRecLegPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createUnderlyingCcyRecLegPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removeUnderlyingCcyRecLegPortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removeUnderlyingCcyRecLegPortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasUnderlyingCcyRecLegPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasUnderlyingCcyRecLegPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countUnderlyingCcyRecLegPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFoexPos via currencyRecLeg
  currencyRecLegPortFoexPos!: PortFoexPos[];
  getCurrencyRecLegPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setCurrencyRecLegPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addCurrencyRecLegPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addCurrencyRecLegPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createCurrencyRecLegPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removeCurrencyRecLegPortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removeCurrencyRecLegPortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasCurrencyRecLegPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasCurrencyRecLegPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countCurrencyRecLegPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFoexPos via currencyMarketValue
  currencyMarketValuePortFoexPos!: PortFoexPos[];
  getCurrencyMarketValuePortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setCurrencyMarketValuePortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addCurrencyMarketValuePortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addCurrencyMarketValuePortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createCurrencyMarketValuePortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removeCurrencyMarketValuePortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removeCurrencyMarketValuePortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasCurrencyMarketValuePortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasCurrencyMarketValuePortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countCurrencyMarketValuePortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFoexPos via fundingCcy
  fundingCcyPortFoexPos!: PortFoexPos[];
  getFundingCcyPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setFundingCcyPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addFundingCcyPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addFundingCcyPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createFundingCcyPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removeFundingCcyPortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removeFundingCcyPortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasFundingCcyPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasFundingCcyPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countFundingCcyPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFoexPos via currencyPayLeg
  currencyPayLegPortFoexPos!: PortFoexPos[];
  getCurrencyPayLegPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setCurrencyPayLegPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addCurrencyPayLegPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addCurrencyPayLegPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createCurrencyPayLegPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removeCurrencyPayLegPortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removeCurrencyPayLegPortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasCurrencyPayLegPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasCurrencyPayLegPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countCurrencyPayLegPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuCsf via notionalCurrency
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
  // SysCurrency hasMany PortFutuCsf via currencyCode
  currencyCodePortFutuCsfs!: PortFutuCsf[];
  getCurrencyCodePortFutuCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFutuCsf>;
  setCurrencyCodePortFutuCsfs!: Sequelize.HasManySetAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  addCurrencyCodePortFutuCsf!: Sequelize.HasManyAddAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  addCurrencyCodePortFutuCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  createCurrencyCodePortFutuCsf!: Sequelize.HasManyCreateAssociationMixin<PortFutuCsf>;
  removeCurrencyCodePortFutuCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  removeCurrencyCodePortFutuCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  hasCurrencyCodePortFutuCsf!: Sequelize.HasManyHasAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  hasCurrencyCodePortFutuCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  countCurrencyCodePortFutuCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuMov via initialMarginDepositCcy
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
  // SysCurrency hasMany PortFutuMov via fundingCcy
  fundingCcyPortFutuMovs!: PortFutuMov[];
  getFundingCcyPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setFundingCcyPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addFundingCcyPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addFundingCcyPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createFundingCcyPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeFundingCcyPortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeFundingCcyPortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasFundingCcyPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasFundingCcyPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countFundingCcyPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuMov via underlyingCcyRecLeg
  underlyingCcyRecLegPortFutuMovs!: PortFutuMov[];
  getUnderlyingCcyRecLegPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setUnderlyingCcyRecLegPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addUnderlyingCcyRecLegPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addUnderlyingCcyRecLegPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createUnderlyingCcyRecLegPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeUnderlyingCcyRecLegPortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeUnderlyingCcyRecLegPortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasUnderlyingCcyRecLegPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasUnderlyingCcyRecLegPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countUnderlyingCcyRecLegPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuMov via additionalCostCcy
  additionalCostCcyPortFutuMovs!: PortFutuMov[];
  getAdditionalCostCcyPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setAdditionalCostCcyPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addAdditionalCostCcyPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addAdditionalCostCcyPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createAdditionalCostCcyPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeAdditionalCostCcyPortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeAdditionalCostCcyPortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasAdditionalCostCcyPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasAdditionalCostCcyPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countAdditionalCostCcyPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuMov via notionalPositionCcy
  notionalPositionCcyPortFutuMovs!: PortFutuMov[];
  getNotionalPositionCcyPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setNotionalPositionCcyPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addNotionalPositionCcyPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addNotionalPositionCcyPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createNotionalPositionCcyPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeNotionalPositionCcyPortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeNotionalPositionCcyPortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasNotionalPositionCcyPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasNotionalPositionCcyPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countNotionalPositionCcyPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuMov via currencyCode
  currencyCodePortFutuMovs!: PortFutuMov[];
  getCurrencyCodePortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setCurrencyCodePortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addCurrencyCodePortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addCurrencyCodePortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createCurrencyCodePortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeCurrencyCodePortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeCurrencyCodePortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasCurrencyCodePortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasCurrencyCodePortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countCurrencyCodePortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuMov via marketValueCcy
  marketValueCcyPortFutuMovs!: PortFutuMov[];
  getMarketValueCcyPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setMarketValueCcyPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addMarketValueCcyPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addMarketValueCcyPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createMarketValueCcyPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeMarketValueCcyPortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeMarketValueCcyPortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasMarketValueCcyPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasMarketValueCcyPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countMarketValueCcyPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuMov via underlyingCcyPayLeg
  underlyingCcyPayLegPortFutuMovs!: PortFutuMov[];
  getUnderlyingCcyPayLegPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setUnderlyingCcyPayLegPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addUnderlyingCcyPayLegPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addUnderlyingCcyPayLegPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createUnderlyingCcyPayLegPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeUnderlyingCcyPayLegPortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeUnderlyingCcyPayLegPortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasUnderlyingCcyPayLegPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasUnderlyingCcyPayLegPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countUnderlyingCcyPayLegPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuPos via initialMarginDepositCcy
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
  // SysCurrency hasMany PortFutuPos via underlyingCcyRecLeg
  underlyingCcyRecLegPortFutuPos!: PortFutuPos[];
  getUnderlyingCcyRecLegPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setUnderlyingCcyRecLegPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addUnderlyingCcyRecLegPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addUnderlyingCcyRecLegPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createUnderlyingCcyRecLegPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeUnderlyingCcyRecLegPortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeUnderlyingCcyRecLegPortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasUnderlyingCcyRecLegPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasUnderlyingCcyRecLegPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countUnderlyingCcyRecLegPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuPos via fundingCcy
  fundingCcyPortFutuPos!: PortFutuPos[];
  getFundingCcyPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setFundingCcyPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addFundingCcyPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addFundingCcyPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createFundingCcyPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeFundingCcyPortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeFundingCcyPortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasFundingCcyPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasFundingCcyPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countFundingCcyPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuPos via additionalCostCcy
  additionalCostCcyPortFutuPos!: PortFutuPos[];
  getAdditionalCostCcyPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setAdditionalCostCcyPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addAdditionalCostCcyPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addAdditionalCostCcyPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createAdditionalCostCcyPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeAdditionalCostCcyPortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeAdditionalCostCcyPortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasAdditionalCostCcyPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasAdditionalCostCcyPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countAdditionalCostCcyPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuPos via notionalPositionCcy
  notionalPositionCcyPortFutuPos!: PortFutuPos[];
  getNotionalPositionCcyPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setNotionalPositionCcyPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addNotionalPositionCcyPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addNotionalPositionCcyPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createNotionalPositionCcyPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeNotionalPositionCcyPortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeNotionalPositionCcyPortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasNotionalPositionCcyPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasNotionalPositionCcyPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countNotionalPositionCcyPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuPos via currencyCode
  currencyCodePortFutuPos!: PortFutuPos[];
  getCurrencyCodePortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setCurrencyCodePortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addCurrencyCodePortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addCurrencyCodePortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createCurrencyCodePortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeCurrencyCodePortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeCurrencyCodePortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasCurrencyCodePortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasCurrencyCodePortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countCurrencyCodePortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuPos via marketValueCcy
  marketValueCcyPortFutuPos!: PortFutuPos[];
  getMarketValueCcyPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setMarketValueCcyPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addMarketValueCcyPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addMarketValueCcyPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createMarketValueCcyPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeMarketValueCcyPortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeMarketValueCcyPortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasMarketValueCcyPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasMarketValueCcyPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countMarketValueCcyPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortFutuPos via underlyingCcyPayLeg
  underlyingCcyPayLegPortFutuPos!: PortFutuPos[];
  getUnderlyingCcyPayLegPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setUnderlyingCcyPayLegPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addUnderlyingCcyPayLegPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addUnderlyingCcyPayLegPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createUnderlyingCcyPayLegPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeUnderlyingCcyPayLegPortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeUnderlyingCcyPayLegPortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasUnderlyingCcyPayLegPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasUnderlyingCcyPayLegPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countUnderlyingCcyPayLegPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortGuarMov via currencyCode
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
  // SysCurrency hasMany PortGuarPos via currencyCode
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
  // SysCurrency hasMany PortLoanCsf via currencyCode
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
  // SysCurrency hasMany PortLoanCsf via notionalCurrency
  notionalCurrencyPortLoanCsfs!: PortLoanCsf[];
  getNotionalCurrencyPortLoanCsfs!: Sequelize.HasManyGetAssociationsMixin<PortLoanCsf>;
  setNotionalCurrencyPortLoanCsfs!: Sequelize.HasManySetAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  addNotionalCurrencyPortLoanCsf!: Sequelize.HasManyAddAssociationMixin<PortLoanCsf, PortLoanCsfId>;
  addNotionalCurrencyPortLoanCsfs!: Sequelize.HasManyAddAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  createNotionalCurrencyPortLoanCsf!: Sequelize.HasManyCreateAssociationMixin<PortLoanCsf>;
  removeNotionalCurrencyPortLoanCsf!: Sequelize.HasManyRemoveAssociationMixin<PortLoanCsf, PortLoanCsfId>;
  removeNotionalCurrencyPortLoanCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  hasNotionalCurrencyPortLoanCsf!: Sequelize.HasManyHasAssociationMixin<PortLoanCsf, PortLoanCsfId>;
  hasNotionalCurrencyPortLoanCsfs!: Sequelize.HasManyHasAssociationsMixin<PortLoanCsf, PortLoanCsfId>;
  countNotionalCurrencyPortLoanCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortLoanMov via residualValueCcy
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
  // SysCurrency hasMany PortLoanMov via fundingCcy
  fundingCcyPortLoanMovs!: PortLoanMov[];
  getFundingCcyPortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setFundingCcyPortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addFundingCcyPortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addFundingCcyPortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createFundingCcyPortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removeFundingCcyPortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removeFundingCcyPortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasFundingCcyPortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasFundingCcyPortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countFundingCcyPortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortLoanMov via notionalCcy
  notionalCcyPortLoanMovs!: PortLoanMov[];
  getNotionalCcyPortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setNotionalCcyPortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addNotionalCcyPortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addNotionalCcyPortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createNotionalCcyPortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removeNotionalCcyPortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removeNotionalCcyPortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasNotionalCcyPortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasNotionalCcyPortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countNotionalCcyPortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortLoanPos via residualValueCcy
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
  // SysCurrency hasMany PortLoanPos via fundingCcy
  fundingCcyPortLoanPos!: PortLoanPos[];
  getFundingCcyPortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setFundingCcyPortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addFundingCcyPortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addFundingCcyPortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createFundingCcyPortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removeFundingCcyPortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removeFundingCcyPortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasFundingCcyPortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasFundingCcyPortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countFundingCcyPortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortLoanPos via notionalCcy
  notionalCcyPortLoanPos!: PortLoanPos[];
  getNotionalCcyPortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setNotionalCcyPortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addNotionalCcyPortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addNotionalCcyPortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createNotionalCcyPortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removeNotionalCcyPortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removeNotionalCcyPortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasNotionalCcyPortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasNotionalCcyPortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countNotionalCcyPortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNdfsCsf via currencyCode
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
  // SysCurrency hasMany PortNdfsCsf via notionalCurrency
  notionalCurrencyPortNdfsCsfs!: PortNdfsCsf[];
  getNotionalCurrencyPortNdfsCsfs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsCsf>;
  setNotionalCurrencyPortNdfsCsfs!: Sequelize.HasManySetAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  addNotionalCurrencyPortNdfsCsf!: Sequelize.HasManyAddAssociationMixin<PortNdfsCsf, PortNdfsCsfId>;
  addNotionalCurrencyPortNdfsCsfs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  createNotionalCurrencyPortNdfsCsf!: Sequelize.HasManyCreateAssociationMixin<PortNdfsCsf>;
  removeNotionalCurrencyPortNdfsCsf!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsCsf, PortNdfsCsfId>;
  removeNotionalCurrencyPortNdfsCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  hasNotionalCurrencyPortNdfsCsf!: Sequelize.HasManyHasAssociationMixin<PortNdfsCsf, PortNdfsCsfId>;
  hasNotionalCurrencyPortNdfsCsfs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsCsf, PortNdfsCsfId>;
  countNotionalCurrencyPortNdfsCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNdfsMov via underlyingCcyPayLeg
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
  // SysCurrency hasMany PortNdfsMov via underlyingCcyRecLeg
  underlyingCcyRecLegPortNdfsMovs!: PortNdfsMov[];
  getUnderlyingCcyRecLegPortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setUnderlyingCcyRecLegPortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addUnderlyingCcyRecLegPortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addUnderlyingCcyRecLegPortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createUnderlyingCcyRecLegPortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removeUnderlyingCcyRecLegPortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removeUnderlyingCcyRecLegPortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasUnderlyingCcyRecLegPortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasUnderlyingCcyRecLegPortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countUnderlyingCcyRecLegPortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNdfsMov via currencyRecLeg
  currencyRecLegPortNdfsMovs!: PortNdfsMov[];
  getCurrencyRecLegPortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setCurrencyRecLegPortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addCurrencyRecLegPortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addCurrencyRecLegPortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createCurrencyRecLegPortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removeCurrencyRecLegPortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removeCurrencyRecLegPortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasCurrencyRecLegPortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasCurrencyRecLegPortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countCurrencyRecLegPortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNdfsMov via currencyMarketValue
  currencyMarketValuePortNdfsMovs!: PortNdfsMov[];
  getCurrencyMarketValuePortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setCurrencyMarketValuePortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addCurrencyMarketValuePortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addCurrencyMarketValuePortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createCurrencyMarketValuePortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removeCurrencyMarketValuePortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removeCurrencyMarketValuePortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasCurrencyMarketValuePortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasCurrencyMarketValuePortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countCurrencyMarketValuePortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNdfsMov via fundingCcy
  fundingCcyPortNdfsMovs!: PortNdfsMov[];
  getFundingCcyPortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setFundingCcyPortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addFundingCcyPortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addFundingCcyPortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createFundingCcyPortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removeFundingCcyPortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removeFundingCcyPortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasFundingCcyPortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasFundingCcyPortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countFundingCcyPortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNdfsMov via currencyPayLeg
  currencyPayLegPortNdfsMovs!: PortNdfsMov[];
  getCurrencyPayLegPortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setCurrencyPayLegPortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addCurrencyPayLegPortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addCurrencyPayLegPortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createCurrencyPayLegPortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removeCurrencyPayLegPortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removeCurrencyPayLegPortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasCurrencyPayLegPortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasCurrencyPayLegPortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countCurrencyPayLegPortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNdfsPos via underlyingCcyRecLeg
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
  // SysCurrency hasMany PortNdfsPos via currencyRecLeg
  currencyRecLegPortNdfsPos!: PortNdfsPos[];
  getCurrencyRecLegPortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setCurrencyRecLegPortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addCurrencyRecLegPortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addCurrencyRecLegPortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createCurrencyRecLegPortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removeCurrencyRecLegPortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removeCurrencyRecLegPortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasCurrencyRecLegPortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasCurrencyRecLegPortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countCurrencyRecLegPortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNdfsPos via currencyMarketValue
  currencyMarketValuePortNdfsPos!: PortNdfsPos[];
  getCurrencyMarketValuePortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setCurrencyMarketValuePortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addCurrencyMarketValuePortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addCurrencyMarketValuePortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createCurrencyMarketValuePortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removeCurrencyMarketValuePortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removeCurrencyMarketValuePortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasCurrencyMarketValuePortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasCurrencyMarketValuePortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countCurrencyMarketValuePortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNdfsPos via fundingCcy
  fundingCcyPortNdfsPos!: PortNdfsPos[];
  getFundingCcyPortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setFundingCcyPortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addFundingCcyPortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addFundingCcyPortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createFundingCcyPortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removeFundingCcyPortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removeFundingCcyPortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasFundingCcyPortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasFundingCcyPortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countFundingCcyPortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNdfsPos via currencyPayLeg
  currencyPayLegPortNdfsPos!: PortNdfsPos[];
  getCurrencyPayLegPortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setCurrencyPayLegPortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addCurrencyPayLegPortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addCurrencyPayLegPortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createCurrencyPayLegPortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removeCurrencyPayLegPortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removeCurrencyPayLegPortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasCurrencyPayLegPortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasCurrencyPayLegPortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countCurrencyPayLegPortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNdfsPos via underlyingCcyPayLeg
  underlyingCcyPayLegPortNdfsPos!: PortNdfsPos[];
  getUnderlyingCcyPayLegPortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setUnderlyingCcyPayLegPortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addUnderlyingCcyPayLegPortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addUnderlyingCcyPayLegPortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createUnderlyingCcyPayLegPortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removeUnderlyingCcyPayLegPortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removeUnderlyingCcyPayLegPortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasUnderlyingCcyPayLegPortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasUnderlyingCcyPayLegPortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countUnderlyingCcyPayLegPortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNostroCsf via notionalCurrency
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
  // SysCurrency hasMany PortNostroCsf via currencyCode
  currencyCodePortNostroCsfs!: PortNostroCsf[];
  getCurrencyCodePortNostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortNostroCsf>;
  setCurrencyCodePortNostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  addCurrencyCodePortNostroCsf!: Sequelize.HasManyAddAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  addCurrencyCodePortNostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  createCurrencyCodePortNostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortNostroCsf>;
  removeCurrencyCodePortNostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  removeCurrencyCodePortNostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  hasCurrencyCodePortNostroCsf!: Sequelize.HasManyHasAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  hasCurrencyCodePortNostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  countCurrencyCodePortNostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNostroPos via fundingCcy
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
  // SysCurrency hasMany PortNostroPos via glReportCcy
  glReportCcyPortNostroPos!: PortNostroPos[];
  getGlReportCcyPortNostroPos!: Sequelize.HasManyGetAssociationsMixin<PortNostroPos>;
  setGlReportCcyPortNostroPos!: Sequelize.HasManySetAssociationsMixin<PortNostroPos, PortNostroPosId>;
  addGlReportCcyPortNostroPo!: Sequelize.HasManyAddAssociationMixin<PortNostroPos, PortNostroPosId>;
  addGlReportCcyPortNostroPos!: Sequelize.HasManyAddAssociationsMixin<PortNostroPos, PortNostroPosId>;
  createGlReportCcyPortNostroPo!: Sequelize.HasManyCreateAssociationMixin<PortNostroPos>;
  removeGlReportCcyPortNostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortNostroPos, PortNostroPosId>;
  removeGlReportCcyPortNostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroPos, PortNostroPosId>;
  hasGlReportCcyPortNostroPo!: Sequelize.HasManyHasAssociationMixin<PortNostroPos, PortNostroPosId>;
  hasGlReportCcyPortNostroPos!: Sequelize.HasManyHasAssociationsMixin<PortNostroPos, PortNostroPosId>;
  countGlReportCcyPortNostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortNostroPos via currencyCode
  currencyCodePortNostroPos!: PortNostroPos[];
  getCurrencyCodePortNostroPos!: Sequelize.HasManyGetAssociationsMixin<PortNostroPos>;
  setCurrencyCodePortNostroPos!: Sequelize.HasManySetAssociationsMixin<PortNostroPos, PortNostroPosId>;
  addCurrencyCodePortNostroPo!: Sequelize.HasManyAddAssociationMixin<PortNostroPos, PortNostroPosId>;
  addCurrencyCodePortNostroPos!: Sequelize.HasManyAddAssociationsMixin<PortNostroPos, PortNostroPosId>;
  createCurrencyCodePortNostroPo!: Sequelize.HasManyCreateAssociationMixin<PortNostroPos>;
  removeCurrencyCodePortNostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortNostroPos, PortNostroPosId>;
  removeCurrencyCodePortNostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroPos, PortNostroPosId>;
  hasCurrencyCodePortNostroPo!: Sequelize.HasManyHasAssociationMixin<PortNostroPos, PortNostroPosId>;
  hasCurrencyCodePortNostroPos!: Sequelize.HasManyHasAssociationsMixin<PortNostroPos, PortNostroPosId>;
  countCurrencyCodePortNostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortOtherCsf via notionalCurrency
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
  // SysCurrency hasMany PortOtherCsf via currencyCode
  currencyCodePortOtherCsfs!: PortOtherCsf[];
  getCurrencyCodePortOtherCsfs!: Sequelize.HasManyGetAssociationsMixin<PortOtherCsf>;
  setCurrencyCodePortOtherCsfs!: Sequelize.HasManySetAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  addCurrencyCodePortOtherCsf!: Sequelize.HasManyAddAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  addCurrencyCodePortOtherCsfs!: Sequelize.HasManyAddAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  createCurrencyCodePortOtherCsf!: Sequelize.HasManyCreateAssociationMixin<PortOtherCsf>;
  removeCurrencyCodePortOtherCsf!: Sequelize.HasManyRemoveAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  removeCurrencyCodePortOtherCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  hasCurrencyCodePortOtherCsf!: Sequelize.HasManyHasAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  hasCurrencyCodePortOtherCsfs!: Sequelize.HasManyHasAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  countCurrencyCodePortOtherCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortOtherPos via fundingCcy
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
  // SysCurrency hasMany PortOtherPos via currencyCode
  currencyCodePortOtherPos!: PortOtherPos[];
  getCurrencyCodePortOtherPos!: Sequelize.HasManyGetAssociationsMixin<PortOtherPos>;
  setCurrencyCodePortOtherPos!: Sequelize.HasManySetAssociationsMixin<PortOtherPos, PortOtherPosId>;
  addCurrencyCodePortOtherPo!: Sequelize.HasManyAddAssociationMixin<PortOtherPos, PortOtherPosId>;
  addCurrencyCodePortOtherPos!: Sequelize.HasManyAddAssociationsMixin<PortOtherPos, PortOtherPosId>;
  createCurrencyCodePortOtherPo!: Sequelize.HasManyCreateAssociationMixin<PortOtherPos>;
  removeCurrencyCodePortOtherPo!: Sequelize.HasManyRemoveAssociationMixin<PortOtherPos, PortOtherPosId>;
  removeCurrencyCodePortOtherPos!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherPos, PortOtherPosId>;
  hasCurrencyCodePortOtherPo!: Sequelize.HasManyHasAssociationMixin<PortOtherPos, PortOtherPosId>;
  hasCurrencyCodePortOtherPos!: Sequelize.HasManyHasAssociationsMixin<PortOtherPos, PortOtherPosId>;
  countCurrencyCodePortOtherPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortRecvLnk via currencyCode
  portRecvLnks!: PortRecvLnk[];
  getPortRecvLnks!: Sequelize.HasManyGetAssociationsMixin<PortRecvLnk>;
  setPortRecvLnks!: Sequelize.HasManySetAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  addPortRecvLnk!: Sequelize.HasManyAddAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  addPortRecvLnks!: Sequelize.HasManyAddAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  createPortRecvLnk!: Sequelize.HasManyCreateAssociationMixin<PortRecvLnk>;
  removePortRecvLnk!: Sequelize.HasManyRemoveAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  removePortRecvLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  hasPortRecvLnk!: Sequelize.HasManyHasAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  hasPortRecvLnks!: Sequelize.HasManyHasAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  countPortRecvLnks!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortRecvMov via fundingCcy
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
  // SysCurrency hasMany PortRecvMov via currencyCode
  currencyCodePortRecvMovs!: PortRecvMov[];
  getCurrencyCodePortRecvMovs!: Sequelize.HasManyGetAssociationsMixin<PortRecvMov>;
  setCurrencyCodePortRecvMovs!: Sequelize.HasManySetAssociationsMixin<PortRecvMov, PortRecvMovId>;
  addCurrencyCodePortRecvMov!: Sequelize.HasManyAddAssociationMixin<PortRecvMov, PortRecvMovId>;
  addCurrencyCodePortRecvMovs!: Sequelize.HasManyAddAssociationsMixin<PortRecvMov, PortRecvMovId>;
  createCurrencyCodePortRecvMov!: Sequelize.HasManyCreateAssociationMixin<PortRecvMov>;
  removeCurrencyCodePortRecvMov!: Sequelize.HasManyRemoveAssociationMixin<PortRecvMov, PortRecvMovId>;
  removeCurrencyCodePortRecvMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvMov, PortRecvMovId>;
  hasCurrencyCodePortRecvMov!: Sequelize.HasManyHasAssociationMixin<PortRecvMov, PortRecvMovId>;
  hasCurrencyCodePortRecvMovs!: Sequelize.HasManyHasAssociationsMixin<PortRecvMov, PortRecvMovId>;
  countCurrencyCodePortRecvMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortRecvPos via fundingCcy
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
  // SysCurrency hasMany PortRecvPos via currencyCode
  currencyCodePortRecvPos!: PortRecvPos[];
  getCurrencyCodePortRecvPos!: Sequelize.HasManyGetAssociationsMixin<PortRecvPos>;
  setCurrencyCodePortRecvPos!: Sequelize.HasManySetAssociationsMixin<PortRecvPos, PortRecvPosId>;
  addCurrencyCodePortRecvPo!: Sequelize.HasManyAddAssociationMixin<PortRecvPos, PortRecvPosId>;
  addCurrencyCodePortRecvPos!: Sequelize.HasManyAddAssociationsMixin<PortRecvPos, PortRecvPosId>;
  createCurrencyCodePortRecvPo!: Sequelize.HasManyCreateAssociationMixin<PortRecvPos>;
  removeCurrencyCodePortRecvPo!: Sequelize.HasManyRemoveAssociationMixin<PortRecvPos, PortRecvPosId>;
  removeCurrencyCodePortRecvPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvPos, PortRecvPosId>;
  hasCurrencyCodePortRecvPo!: Sequelize.HasManyHasAssociationMixin<PortRecvPos, PortRecvPosId>;
  hasCurrencyCodePortRecvPos!: Sequelize.HasManyHasAssociationsMixin<PortRecvPos, PortRecvPosId>;
  countCurrencyCodePortRecvPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortRepoCsf via notionalCurrency
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
  // SysCurrency hasMany PortRepoCsf via currencyCode
  currencyCodePortRepoCsfs!: PortRepoCsf[];
  getCurrencyCodePortRepoCsfs!: Sequelize.HasManyGetAssociationsMixin<PortRepoCsf>;
  setCurrencyCodePortRepoCsfs!: Sequelize.HasManySetAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  addCurrencyCodePortRepoCsf!: Sequelize.HasManyAddAssociationMixin<PortRepoCsf, PortRepoCsfId>;
  addCurrencyCodePortRepoCsfs!: Sequelize.HasManyAddAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  createCurrencyCodePortRepoCsf!: Sequelize.HasManyCreateAssociationMixin<PortRepoCsf>;
  removeCurrencyCodePortRepoCsf!: Sequelize.HasManyRemoveAssociationMixin<PortRepoCsf, PortRepoCsfId>;
  removeCurrencyCodePortRepoCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  hasCurrencyCodePortRepoCsf!: Sequelize.HasManyHasAssociationMixin<PortRepoCsf, PortRepoCsfId>;
  hasCurrencyCodePortRepoCsfs!: Sequelize.HasManyHasAssociationsMixin<PortRepoCsf, PortRepoCsfId>;
  countCurrencyCodePortRepoCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortRepoDet via securityMarketValueCcy
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
  // SysCurrency hasMany PortRepoDet via currencyCode
  currencyCodePortRepoDets!: PortRepoDet[];
  getCurrencyCodePortRepoDets!: Sequelize.HasManyGetAssociationsMixin<PortRepoDet>;
  setCurrencyCodePortRepoDets!: Sequelize.HasManySetAssociationsMixin<PortRepoDet, PortRepoDetId>;
  addCurrencyCodePortRepoDet!: Sequelize.HasManyAddAssociationMixin<PortRepoDet, PortRepoDetId>;
  addCurrencyCodePortRepoDets!: Sequelize.HasManyAddAssociationsMixin<PortRepoDet, PortRepoDetId>;
  createCurrencyCodePortRepoDet!: Sequelize.HasManyCreateAssociationMixin<PortRepoDet>;
  removeCurrencyCodePortRepoDet!: Sequelize.HasManyRemoveAssociationMixin<PortRepoDet, PortRepoDetId>;
  removeCurrencyCodePortRepoDets!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoDet, PortRepoDetId>;
  hasCurrencyCodePortRepoDet!: Sequelize.HasManyHasAssociationMixin<PortRepoDet, PortRepoDetId>;
  hasCurrencyCodePortRepoDets!: Sequelize.HasManyHasAssociationsMixin<PortRepoDet, PortRepoDetId>;
  countCurrencyCodePortRepoDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortRepoMov via cashLegCcy
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
  // SysCurrency hasMany PortRepoPos via fundingCcy
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
  // SysCurrency hasMany PortRepoPos via cashLegCcy
  cashLegCcyPortRepoPos!: PortRepoPos[];
  getCashLegCcyPortRepoPos!: Sequelize.HasManyGetAssociationsMixin<PortRepoPos>;
  setCashLegCcyPortRepoPos!: Sequelize.HasManySetAssociationsMixin<PortRepoPos, PortRepoPosId>;
  addCashLegCcyPortRepoPo!: Sequelize.HasManyAddAssociationMixin<PortRepoPos, PortRepoPosId>;
  addCashLegCcyPortRepoPos!: Sequelize.HasManyAddAssociationsMixin<PortRepoPos, PortRepoPosId>;
  createCashLegCcyPortRepoPo!: Sequelize.HasManyCreateAssociationMixin<PortRepoPos>;
  removeCashLegCcyPortRepoPo!: Sequelize.HasManyRemoveAssociationMixin<PortRepoPos, PortRepoPosId>;
  removeCashLegCcyPortRepoPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoPos, PortRepoPosId>;
  hasCashLegCcyPortRepoPo!: Sequelize.HasManyHasAssociationMixin<PortRepoPos, PortRepoPosId>;
  hasCashLegCcyPortRepoPos!: Sequelize.HasManyHasAssociationsMixin<PortRepoPos, PortRepoPosId>;
  countCashLegCcyPortRepoPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortSwapCsf via notionalCurrency
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
  // SysCurrency hasMany PortSwapCsf via currencyCode
  currencyCodePortSwapCsfs!: PortSwapCsf[];
  getCurrencyCodePortSwapCsfs!: Sequelize.HasManyGetAssociationsMixin<PortSwapCsf>;
  setCurrencyCodePortSwapCsfs!: Sequelize.HasManySetAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  addCurrencyCodePortSwapCsf!: Sequelize.HasManyAddAssociationMixin<PortSwapCsf, PortSwapCsfId>;
  addCurrencyCodePortSwapCsfs!: Sequelize.HasManyAddAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  createCurrencyCodePortSwapCsf!: Sequelize.HasManyCreateAssociationMixin<PortSwapCsf>;
  removeCurrencyCodePortSwapCsf!: Sequelize.HasManyRemoveAssociationMixin<PortSwapCsf, PortSwapCsfId>;
  removeCurrencyCodePortSwapCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  hasCurrencyCodePortSwapCsf!: Sequelize.HasManyHasAssociationMixin<PortSwapCsf, PortSwapCsfId>;
  hasCurrencyCodePortSwapCsfs!: Sequelize.HasManyHasAssociationsMixin<PortSwapCsf, PortSwapCsfId>;
  countCurrencyCodePortSwapCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortSwapMov via currencyMarketValue
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
  // SysCurrency hasMany PortSwapMov via currencyPayLeg
  currencyPayLegPortSwapMovs!: PortSwapMov[];
  getCurrencyPayLegPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setCurrencyPayLegPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addCurrencyPayLegPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addCurrencyPayLegPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createCurrencyPayLegPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removeCurrencyPayLegPortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removeCurrencyPayLegPortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasCurrencyPayLegPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasCurrencyPayLegPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countCurrencyPayLegPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortSwapMov via currencyRecLeg
  currencyRecLegPortSwapMovs!: PortSwapMov[];
  getCurrencyRecLegPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setCurrencyRecLegPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addCurrencyRecLegPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addCurrencyRecLegPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createCurrencyRecLegPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removeCurrencyRecLegPortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removeCurrencyRecLegPortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasCurrencyRecLegPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasCurrencyRecLegPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countCurrencyRecLegPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortSwapMov via fundingCcy
  fundingCcyPortSwapMovs!: PortSwapMov[];
  getFundingCcyPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setFundingCcyPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addFundingCcyPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addFundingCcyPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createFundingCcyPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removeFundingCcyPortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removeFundingCcyPortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasFundingCcyPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasFundingCcyPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countFundingCcyPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortSwapMov via underlyingCcyPayLeg
  underlyingCcyPayLegPortSwapMovs!: PortSwapMov[];
  getUnderlyingCcyPayLegPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setUnderlyingCcyPayLegPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addUnderlyingCcyPayLegPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addUnderlyingCcyPayLegPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createUnderlyingCcyPayLegPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removeUnderlyingCcyPayLegPortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removeUnderlyingCcyPayLegPortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasUnderlyingCcyPayLegPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasUnderlyingCcyPayLegPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countUnderlyingCcyPayLegPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortSwapMov via underlyingCcyRecLeg
  underlyingCcyRecLegPortSwapMovs!: PortSwapMov[];
  getUnderlyingCcyRecLegPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setUnderlyingCcyRecLegPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addUnderlyingCcyRecLegPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addUnderlyingCcyRecLegPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createUnderlyingCcyRecLegPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removeUnderlyingCcyRecLegPortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removeUnderlyingCcyRecLegPortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasUnderlyingCcyRecLegPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasUnderlyingCcyRecLegPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countUnderlyingCcyRecLegPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortSwapPos via currencyMarketValue
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
  // SysCurrency hasMany PortSwapPos via currencyPayLeg
  currencyPayLegPortSwapPos!: PortSwapPos[];
  getCurrencyPayLegPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setCurrencyPayLegPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addCurrencyPayLegPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addCurrencyPayLegPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createCurrencyPayLegPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removeCurrencyPayLegPortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removeCurrencyPayLegPortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasCurrencyPayLegPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasCurrencyPayLegPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countCurrencyPayLegPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortSwapPos via currencyRecLeg
  currencyRecLegPortSwapPos!: PortSwapPos[];
  getCurrencyRecLegPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setCurrencyRecLegPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addCurrencyRecLegPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addCurrencyRecLegPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createCurrencyRecLegPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removeCurrencyRecLegPortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removeCurrencyRecLegPortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasCurrencyRecLegPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasCurrencyRecLegPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countCurrencyRecLegPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortSwapPos via fundingCcy
  fundingCcyPortSwapPos!: PortSwapPos[];
  getFundingCcyPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setFundingCcyPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addFundingCcyPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addFundingCcyPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createFundingCcyPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removeFundingCcyPortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removeFundingCcyPortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasFundingCcyPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasFundingCcyPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countFundingCcyPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortSwapPos via underlyingCcyPayLeg
  underlyingCcyPayLegPortSwapPos!: PortSwapPos[];
  getUnderlyingCcyPayLegPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setUnderlyingCcyPayLegPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addUnderlyingCcyPayLegPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addUnderlyingCcyPayLegPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createUnderlyingCcyPayLegPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removeUnderlyingCcyPayLegPortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removeUnderlyingCcyPayLegPortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasUnderlyingCcyPayLegPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasUnderlyingCcyPayLegPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countUnderlyingCcyPayLegPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortSwapPos via underlyingCcyRecLeg
  underlyingCcyRecLegPortSwapPos!: PortSwapPos[];
  getUnderlyingCcyRecLegPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setUnderlyingCcyRecLegPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addUnderlyingCcyRecLegPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addUnderlyingCcyRecLegPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createUnderlyingCcyRecLegPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removeUnderlyingCcyRecLegPortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removeUnderlyingCcyRecLegPortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasUnderlyingCcyRecLegPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasUnderlyingCcyRecLegPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countUnderlyingCcyRecLegPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortVostroCsf via currencyCode
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
  // SysCurrency hasMany PortVostroCsf via notionalCurrency
  notionalCurrencyPortVostroCsfs!: PortVostroCsf[];
  getNotionalCurrencyPortVostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortVostroCsf>;
  setNotionalCurrencyPortVostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  addNotionalCurrencyPortVostroCsf!: Sequelize.HasManyAddAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  addNotionalCurrencyPortVostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  createNotionalCurrencyPortVostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortVostroCsf>;
  removeNotionalCurrencyPortVostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  removeNotionalCurrencyPortVostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  hasNotionalCurrencyPortVostroCsf!: Sequelize.HasManyHasAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  hasNotionalCurrencyPortVostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  countNotionalCurrencyPortVostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortVostroPos via currencyCode
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
  // SysCurrency hasMany PortVostroPos via glReportCcy
  glReportCcyPortVostroPos!: PortVostroPos[];
  getGlReportCcyPortVostroPos!: Sequelize.HasManyGetAssociationsMixin<PortVostroPos>;
  setGlReportCcyPortVostroPos!: Sequelize.HasManySetAssociationsMixin<PortVostroPos, PortVostroPosId>;
  addGlReportCcyPortVostroPo!: Sequelize.HasManyAddAssociationMixin<PortVostroPos, PortVostroPosId>;
  addGlReportCcyPortVostroPos!: Sequelize.HasManyAddAssociationsMixin<PortVostroPos, PortVostroPosId>;
  createGlReportCcyPortVostroPo!: Sequelize.HasManyCreateAssociationMixin<PortVostroPos>;
  removeGlReportCcyPortVostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortVostroPos, PortVostroPosId>;
  removeGlReportCcyPortVostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroPos, PortVostroPosId>;
  hasGlReportCcyPortVostroPo!: Sequelize.HasManyHasAssociationMixin<PortVostroPos, PortVostroPosId>;
  hasGlReportCcyPortVostroPos!: Sequelize.HasManyHasAssociationsMixin<PortVostroPos, PortVostroPosId>;
  countGlReportCcyPortVostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany PortVostroPos via fundingCcy
  fundingCcyPortVostroPos!: PortVostroPos[];
  getFundingCcyPortVostroPos!: Sequelize.HasManyGetAssociationsMixin<PortVostroPos>;
  setFundingCcyPortVostroPos!: Sequelize.HasManySetAssociationsMixin<PortVostroPos, PortVostroPosId>;
  addFundingCcyPortVostroPo!: Sequelize.HasManyAddAssociationMixin<PortVostroPos, PortVostroPosId>;
  addFundingCcyPortVostroPos!: Sequelize.HasManyAddAssociationsMixin<PortVostroPos, PortVostroPosId>;
  createFundingCcyPortVostroPo!: Sequelize.HasManyCreateAssociationMixin<PortVostroPos>;
  removeFundingCcyPortVostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortVostroPos, PortVostroPosId>;
  removeFundingCcyPortVostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroPos, PortVostroPosId>;
  hasFundingCcyPortVostroPo!: Sequelize.HasManyHasAssociationMixin<PortVostroPos, PortVostroPosId>;
  hasFundingCcyPortVostroPos!: Sequelize.HasManyHasAssociationsMixin<PortVostroPos, PortVostroPosId>;
  countFundingCcyPortVostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency belongsToMany SysCountry via currencyCode and countryCodeIso2
  countryCodeIso2SysCountries!: SysCountry[];
  getCountryCodeIso2SysCountries!: Sequelize.BelongsToManyGetAssociationsMixin<SysCountry>;
  setCountryCodeIso2SysCountries!: Sequelize.BelongsToManySetAssociationsMixin<SysCountry, SysCountryId>;
  addCountryCodeIso2SysCountry!: Sequelize.BelongsToManyAddAssociationMixin<SysCountry, SysCountryId>;
  addCountryCodeIso2SysCountries!: Sequelize.BelongsToManyAddAssociationsMixin<SysCountry, SysCountryId>;
  createCountryCodeIso2SysCountry!: Sequelize.BelongsToManyCreateAssociationMixin<SysCountry>;
  removeCountryCodeIso2SysCountry!: Sequelize.BelongsToManyRemoveAssociationMixin<SysCountry, SysCountryId>;
  removeCountryCodeIso2SysCountries!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysCountry, SysCountryId>;
  hasCountryCodeIso2SysCountry!: Sequelize.BelongsToManyHasAssociationMixin<SysCountry, SysCountryId>;
  hasCountryCodeIso2SysCountries!: Sequelize.BelongsToManyHasAssociationsMixin<SysCountry, SysCountryId>;
  countCountryCodeIso2SysCountries!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysCurrency hasMany SysCountryCcyLnk via currencyCode
  sysCountryCcyLnks!: SysCountryCcyLnk[];
  getSysCountryCcyLnks!: Sequelize.HasManyGetAssociationsMixin<SysCountryCcyLnk>;
  setSysCountryCcyLnks!: Sequelize.HasManySetAssociationsMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  addSysCountryCcyLnk!: Sequelize.HasManyAddAssociationMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  addSysCountryCcyLnks!: Sequelize.HasManyAddAssociationsMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  createSysCountryCcyLnk!: Sequelize.HasManyCreateAssociationMixin<SysCountryCcyLnk>;
  removeSysCountryCcyLnk!: Sequelize.HasManyRemoveAssociationMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  removeSysCountryCcyLnks!: Sequelize.HasManyRemoveAssociationsMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  hasSysCountryCcyLnk!: Sequelize.HasManyHasAssociationMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  hasSysCountryCcyLnks!: Sequelize.HasManyHasAssociationsMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  countSysCountryCcyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany SysCurve via currencyCode
  sysCurves!: SysCurve[];
  getSysCurves!: Sequelize.HasManyGetAssociationsMixin<SysCurve>;
  setSysCurves!: Sequelize.HasManySetAssociationsMixin<SysCurve, SysCurveId>;
  addSysCurve!: Sequelize.HasManyAddAssociationMixin<SysCurve, SysCurveId>;
  addSysCurves!: Sequelize.HasManyAddAssociationsMixin<SysCurve, SysCurveId>;
  createSysCurve!: Sequelize.HasManyCreateAssociationMixin<SysCurve>;
  removeSysCurve!: Sequelize.HasManyRemoveAssociationMixin<SysCurve, SysCurveId>;
  removeSysCurves!: Sequelize.HasManyRemoveAssociationsMixin<SysCurve, SysCurveId>;
  hasSysCurve!: Sequelize.HasManyHasAssociationMixin<SysCurve, SysCurveId>;
  hasSysCurves!: Sequelize.HasManyHasAssociationsMixin<SysCurve, SysCurveId>;
  countSysCurves!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurrency hasMany SysUnderlying via underlyingCcy
  sysUnderlyings!: SysUnderlying[];
  getSysUnderlyings!: Sequelize.HasManyGetAssociationsMixin<SysUnderlying>;
  setSysUnderlyings!: Sequelize.HasManySetAssociationsMixin<SysUnderlying, SysUnderlyingId>;
  addSysUnderlying!: Sequelize.HasManyAddAssociationMixin<SysUnderlying, SysUnderlyingId>;
  addSysUnderlyings!: Sequelize.HasManyAddAssociationsMixin<SysUnderlying, SysUnderlyingId>;
  createSysUnderlying!: Sequelize.HasManyCreateAssociationMixin<SysUnderlying>;
  removeSysUnderlying!: Sequelize.HasManyRemoveAssociationMixin<SysUnderlying, SysUnderlyingId>;
  removeSysUnderlyings!: Sequelize.HasManyRemoveAssociationsMixin<SysUnderlying, SysUnderlyingId>;
  hasSysUnderlying!: Sequelize.HasManyHasAssociationMixin<SysUnderlying, SysUnderlyingId>;
  hasSysUnderlyings!: Sequelize.HasManyHasAssociationsMixin<SysUnderlying, SysUnderlyingId>;
  countSysUnderlyings!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof SysCurrency {
    return SysCurrency.init({
    currencyCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      field: 'currency_code'
    },
    currencyName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'currency_name'
    },
    currencyConvType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'doms_ccy_conv_type',
        key: 'domain'
      },
      field: 'currency_conv_type'
    },
    currencyNumericBacenCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'currency_numeric_bacen_code'
    },
    recordInitialDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'record_initial_date'
    },
    recordEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'record_end_date'
    }
  }, {
    sequelize,
    tableName: 'sys_currency',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-SYS_CURRENCY",
        unique: true,
        fields: [
          { name: "currency_code" },
        ]
      },
    ]
  });
  }
}
