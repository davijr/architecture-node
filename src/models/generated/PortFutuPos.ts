import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyBook, CompanyBookId } from './CompanyBook';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsAccrualBasis, DomsAccrualBasisId } from './DomsAccrualBasis';
import type { DomsBankingTrading, DomsBankingTradingId } from './DomsBankingTrading';
import type { DomsCalcFrequency, DomsCalcFrequencyId } from './DomsCalcFrequency';
import type { DomsCcpExposureType, DomsCcpExposureTypeId } from './DomsCcpExposureType';
import type { DomsDeliveryType, DomsDeliveryTypeId } from './DomsDeliveryType';
import type { DomsGlClass, DomsGlClassId } from './DomsGlClass';
import type { DomsLongShort, DomsLongShortId } from './DomsLongShort';
import type { DomsMarginType, DomsMarginTypeId } from './DomsMarginType';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { DomsSettlementMode, DomsSettlementModeId } from './DomsSettlementMode';
import type { DomsUnderlyingFamily, DomsUnderlyingFamilyId } from './DomsUnderlyingFamily';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { PortFutuCsf, PortFutuCsfId } from './PortFutuCsf';
import type { Product, ProductId } from './Product';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortFutuPosAttributes {
  referenceDate: string;
  sourceSystem: string;
  productCode: string;
  contractReference: string;
  longShort: string;
  companyCode: string;
  costCentre: string;
  bookCode: string;
  internalDeal: boolean;
  invptyCode: number;
  exchangeCode: number;
  glClass: string;
  bankingTrading: string;
  tradeDate: string;
  maturityDate: string;
  fixingSettlementDate?: string;
  futureDeliveryDate?: string;
  payDate?: string;
  recDate?: string;
  maturityCode?: string;
  crossBorder: boolean;
  forThirdParty: boolean;
  underlyingFamily: string;
  underlyingSecurity: string;
  underlyingRecLeg: string;
  underlyingPayLeg: string;
  underlyingCcyRecLeg: string;
  underlyingCcyPayLeg: string;
  contractSize: number;
  securityQuantity: number;
  currencyCode: string;
  isinCode?: string;
  contractMarketValue: number;
  notional: number;
  notionalRate: number;
  accrualBasisNotional: string;
  notionalPeriodicity: string;
  notionalPeriodicityUnit: number;
  notionalPositionCcy: string;
  agreedSettlementValue?: number;
  marketValueCcy: string;
  marketValueRecLeg: number;
  marketValuePayLeg: number;
  marketValue: number;
  tradedFuturesPrice: number;
  quotedFuturesPrice: number;
  valuationSpread: number;
  discountSpread: number;
  futureStlm: string;
  deliveryType: string;
  settlementFailure: boolean;
  additionalCost: number;
  additionalCostCcy: string;
  ccpCmCode: number;
  ccpExposureType: string;
  marginType: string;
  initialMarginDeposit: number;
  initialMarginDepositCcy: string;
  cashMargin: number;
  collateralMargin: number;
  holdingPeriod?: number;
  fundingProvider: string;
  fundingRateType: string;
  fundingCurve: string;
  fundingCost: number;
  fundingCcy: string;
}

export type PortFutuPosPk = "referenceDate" | "sourceSystem" | "productCode" | "contractReference" | "longShort";
export type PortFutuPosId = PortFutuPos[PortFutuPosPk];
export type PortFutuPosOptionalAttributes = "fixingSettlementDate" | "futureDeliveryDate" | "payDate" | "recDate" | "maturityCode" | "isinCode" | "notionalPeriodicity" | "agreedSettlementValue" | "futureStlm" | "deliveryType" | "marginType" | "holdingPeriod";
export type PortFutuPosCreationAttributes = Optional<PortFutuPosAttributes, PortFutuPosOptionalAttributes>;

export class PortFutuPos extends Model<PortFutuPosAttributes, PortFutuPosCreationAttributes> implements PortFutuPosAttributes {
  referenceDate!: string;
  sourceSystem!: string;
  productCode!: string;
  contractReference!: string;
  longShort!: string;
  companyCode!: string;
  costCentre!: string;
  bookCode!: string;
  internalDeal!: boolean;
  invptyCode!: number;
  exchangeCode!: number;
  glClass!: string;
  bankingTrading!: string;
  tradeDate!: string;
  maturityDate!: string;
  fixingSettlementDate?: string;
  futureDeliveryDate?: string;
  payDate?: string;
  recDate?: string;
  maturityCode?: string;
  crossBorder!: boolean;
  forThirdParty!: boolean;
  underlyingFamily!: string;
  underlyingSecurity!: string;
  underlyingRecLeg!: string;
  underlyingPayLeg!: string;
  underlyingCcyRecLeg!: string;
  underlyingCcyPayLeg!: string;
  contractSize!: number;
  securityQuantity!: number;
  currencyCode!: string;
  isinCode?: string;
  contractMarketValue!: number;
  notional!: number;
  notionalRate!: number;
  accrualBasisNotional!: string;
  notionalPeriodicity!: string;
  notionalPeriodicityUnit!: number;
  notionalPositionCcy!: string;
  agreedSettlementValue?: number;
  marketValueCcy!: string;
  marketValueRecLeg!: number;
  marketValuePayLeg!: number;
  marketValue!: number;
  tradedFuturesPrice!: number;
  quotedFuturesPrice!: number;
  valuationSpread!: number;
  discountSpread!: number;
  futureStlm!: string;
  deliveryType!: string;
  settlementFailure!: boolean;
  additionalCost!: number;
  additionalCostCcy!: string;
  ccpCmCode!: number;
  ccpExposureType!: string;
  marginType!: string;
  initialMarginDeposit!: number;
  initialMarginDepositCcy!: string;
  cashMargin!: number;
  collateralMargin!: number;
  holdingPeriod?: number;
  fundingProvider!: string;
  fundingRateType!: string;
  fundingCurve!: string;
  fundingCost!: number;
  fundingCcy!: string;

  // PortFutuPos belongsTo CompanyBook via bookCode
  bookCodeCompanyBook!: CompanyBook;
  getBookCodeCompanyBook!: Sequelize.BelongsToGetAssociationMixin<CompanyBook>;
  setBookCodeCompanyBook!: Sequelize.BelongsToSetAssociationMixin<CompanyBook, CompanyBookId>;
  createBookCodeCompanyBook!: Sequelize.BelongsToCreateAssociationMixin<CompanyBook>;
  // PortFutuPos belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortFutuPos belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortFutuPos belongsTo CompanyCostCentre via fundingProvider
  fundingProviderCompanyCostCentre!: CompanyCostCentre;
  getFundingProviderCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setFundingProviderCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createFundingProviderCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortFutuPos belongsTo DomsAccrualBasis via accrualBasisNotional
  accrualBasisNotionalDomsAccrualBasis!: DomsAccrualBasis;
  getAccrualBasisNotionalDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setAccrualBasisNotionalDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createAccrualBasisNotionalDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PortFutuPos belongsTo DomsBankingTrading via bankingTrading
  bankingTradingDomsBankingTrading!: DomsBankingTrading;
  getBankingTradingDomsBankingTrading!: Sequelize.BelongsToGetAssociationMixin<DomsBankingTrading>;
  setBankingTradingDomsBankingTrading!: Sequelize.BelongsToSetAssociationMixin<DomsBankingTrading, DomsBankingTradingId>;
  createBankingTradingDomsBankingTrading!: Sequelize.BelongsToCreateAssociationMixin<DomsBankingTrading>;
  // PortFutuPos belongsTo DomsCalcFrequency via notionalPeriodicity
  notionalPeriodicityDomsCalcFrequency!: DomsCalcFrequency;
  getNotionalPeriodicityDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setNotionalPeriodicityDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createNotionalPeriodicityDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortFutuPos belongsTo DomsCcpExposureType via ccpExposureType
  ccpExposureTypeDomsCcpExposureType!: DomsCcpExposureType;
  getCcpExposureTypeDomsCcpExposureType!: Sequelize.BelongsToGetAssociationMixin<DomsCcpExposureType>;
  setCcpExposureTypeDomsCcpExposureType!: Sequelize.BelongsToSetAssociationMixin<DomsCcpExposureType, DomsCcpExposureTypeId>;
  createCcpExposureTypeDomsCcpExposureType!: Sequelize.BelongsToCreateAssociationMixin<DomsCcpExposureType>;
  // PortFutuPos belongsTo DomsDeliveryType via deliveryType
  deliveryTypeDomsDeliveryType!: DomsDeliveryType;
  getDeliveryTypeDomsDeliveryType!: Sequelize.BelongsToGetAssociationMixin<DomsDeliveryType>;
  setDeliveryTypeDomsDeliveryType!: Sequelize.BelongsToSetAssociationMixin<DomsDeliveryType, DomsDeliveryTypeId>;
  createDeliveryTypeDomsDeliveryType!: Sequelize.BelongsToCreateAssociationMixin<DomsDeliveryType>;
  // PortFutuPos belongsTo DomsGlClass via glClass
  glClassDomsGlClass!: DomsGlClass;
  getGlClassDomsGlClass!: Sequelize.BelongsToGetAssociationMixin<DomsGlClass>;
  setGlClassDomsGlClass!: Sequelize.BelongsToSetAssociationMixin<DomsGlClass, DomsGlClassId>;
  createGlClassDomsGlClass!: Sequelize.BelongsToCreateAssociationMixin<DomsGlClass>;
  // PortFutuPos belongsTo DomsLongShort via longShort
  longShortDomsLongShort!: DomsLongShort;
  getLongShortDomsLongShort!: Sequelize.BelongsToGetAssociationMixin<DomsLongShort>;
  setLongShortDomsLongShort!: Sequelize.BelongsToSetAssociationMixin<DomsLongShort, DomsLongShortId>;
  createLongShortDomsLongShort!: Sequelize.BelongsToCreateAssociationMixin<DomsLongShort>;
  // PortFutuPos belongsTo DomsMarginType via marginType
  marginTypeDomsMarginType!: DomsMarginType;
  getMarginTypeDomsMarginType!: Sequelize.BelongsToGetAssociationMixin<DomsMarginType>;
  setMarginTypeDomsMarginType!: Sequelize.BelongsToSetAssociationMixin<DomsMarginType, DomsMarginTypeId>;
  createMarginTypeDomsMarginType!: Sequelize.BelongsToCreateAssociationMixin<DomsMarginType>;
  // PortFutuPos belongsTo DomsRateType via fundingRateType
  fundingRateTypeDomsRateType!: DomsRateType;
  getFundingRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setFundingRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createFundingRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortFutuPos belongsTo DomsSettlementMode via futureStlm
  futureStlmDomsSettlementMode!: DomsSettlementMode;
  getFutureStlmDomsSettlementMode!: Sequelize.BelongsToGetAssociationMixin<DomsSettlementMode>;
  setFutureStlmDomsSettlementMode!: Sequelize.BelongsToSetAssociationMixin<DomsSettlementMode, DomsSettlementModeId>;
  createFutureStlmDomsSettlementMode!: Sequelize.BelongsToCreateAssociationMixin<DomsSettlementMode>;
  // PortFutuPos belongsTo DomsUnderlyingFamily via underlyingFamily
  underlyingFamilyDomsUnderlyingFamily!: DomsUnderlyingFamily;
  getUnderlyingFamilyDomsUnderlyingFamily!: Sequelize.BelongsToGetAssociationMixin<DomsUnderlyingFamily>;
  setUnderlyingFamilyDomsUnderlyingFamily!: Sequelize.BelongsToSetAssociationMixin<DomsUnderlyingFamily, DomsUnderlyingFamilyId>;
  createUnderlyingFamilyDomsUnderlyingFamily!: Sequelize.BelongsToCreateAssociationMixin<DomsUnderlyingFamily>;
  // PortFutuPos belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortFutuPos belongsTo InvptyDet via exchangeCode
  exchangeCodeInvptyDet!: InvptyDet;
  getExchangeCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setExchangeCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createExchangeCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortFutuPos belongsTo InvptyDet via ccpCmCode
  ccpCmCodeInvptyDet!: InvptyDet;
  getCcpCmCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setCcpCmCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createCcpCmCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortFutuPos hasMany PortFutuCsf via companyCode
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
  // PortFutuPos hasMany PortFutuCsf via contractReference
  contractReferencePortFutuCsfs!: PortFutuCsf[];
  getContractReferencePortFutuCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFutuCsf>;
  setContractReferencePortFutuCsfs!: Sequelize.HasManySetAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  addContractReferencePortFutuCsf!: Sequelize.HasManyAddAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  addContractReferencePortFutuCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  createContractReferencePortFutuCsf!: Sequelize.HasManyCreateAssociationMixin<PortFutuCsf>;
  removeContractReferencePortFutuCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  removeContractReferencePortFutuCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  hasContractReferencePortFutuCsf!: Sequelize.HasManyHasAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  hasContractReferencePortFutuCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  countContractReferencePortFutuCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortFutuPos hasMany PortFutuCsf via productCode
  productCodePortFutuCsfs!: PortFutuCsf[];
  getProductCodePortFutuCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFutuCsf>;
  setProductCodePortFutuCsfs!: Sequelize.HasManySetAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  addProductCodePortFutuCsf!: Sequelize.HasManyAddAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  addProductCodePortFutuCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  createProductCodePortFutuCsf!: Sequelize.HasManyCreateAssociationMixin<PortFutuCsf>;
  removeProductCodePortFutuCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  removeProductCodePortFutuCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  hasProductCodePortFutuCsf!: Sequelize.HasManyHasAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  hasProductCodePortFutuCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  countProductCodePortFutuCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortFutuPos hasMany PortFutuCsf via referenceDate
  referenceDatePortFutuCsfs!: PortFutuCsf[];
  getReferenceDatePortFutuCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFutuCsf>;
  setReferenceDatePortFutuCsfs!: Sequelize.HasManySetAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  addReferenceDatePortFutuCsf!: Sequelize.HasManyAddAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  addReferenceDatePortFutuCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  createReferenceDatePortFutuCsf!: Sequelize.HasManyCreateAssociationMixin<PortFutuCsf>;
  removeReferenceDatePortFutuCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  removeReferenceDatePortFutuCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  hasReferenceDatePortFutuCsf!: Sequelize.HasManyHasAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  hasReferenceDatePortFutuCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  countReferenceDatePortFutuCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortFutuPos hasMany PortFutuCsf via sourceSystem
  sourceSystemPortFutuCsfs!: PortFutuCsf[];
  getSourceSystemPortFutuCsfs!: Sequelize.HasManyGetAssociationsMixin<PortFutuCsf>;
  setSourceSystemPortFutuCsfs!: Sequelize.HasManySetAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  addSourceSystemPortFutuCsf!: Sequelize.HasManyAddAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  addSourceSystemPortFutuCsfs!: Sequelize.HasManyAddAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  createSourceSystemPortFutuCsf!: Sequelize.HasManyCreateAssociationMixin<PortFutuCsf>;
  removeSourceSystemPortFutuCsf!: Sequelize.HasManyRemoveAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  removeSourceSystemPortFutuCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  hasSourceSystemPortFutuCsf!: Sequelize.HasManyHasAssociationMixin<PortFutuCsf, PortFutuCsfId>;
  hasSourceSystemPortFutuCsfs!: Sequelize.HasManyHasAssociationsMixin<PortFutuCsf, PortFutuCsfId>;
  countSourceSystemPortFutuCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortFutuPos belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortFutuPos belongsTo SysCurrency via initialMarginDepositCcy
  initialMarginDepositCcySysCurrency!: SysCurrency;
  getInitialMarginDepositCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setInitialMarginDepositCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createInitialMarginDepositCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuPos belongsTo SysCurrency via underlyingCcyRecLeg
  underlyingCcyRecLegSysCurrency!: SysCurrency;
  getUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuPos belongsTo SysCurrency via fundingCcy
  fundingCcySysCurrency!: SysCurrency;
  getFundingCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setFundingCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createFundingCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuPos belongsTo SysCurrency via additionalCostCcy
  additionalCostCcySysCurrency!: SysCurrency;
  getAdditionalCostCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setAdditionalCostCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createAdditionalCostCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuPos belongsTo SysCurrency via notionalPositionCcy
  notionalPositionCcySysCurrency!: SysCurrency;
  getNotionalPositionCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setNotionalPositionCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createNotionalPositionCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuPos belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuPos belongsTo SysCurrency via marketValueCcy
  marketValueCcySysCurrency!: SysCurrency;
  getMarketValueCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setMarketValueCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createMarketValueCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuPos belongsTo SysCurrency via underlyingCcyPayLeg
  underlyingCcyPayLegSysCurrency!: SysCurrency;
  getUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuPos belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PortFutuPos belongsTo SysUnderlying via underlyingSecurity
  underlyingSecuritySysUnderlying!: SysUnderlying;
  getUnderlyingSecuritySysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingSecuritySysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingSecuritySysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortFutuPos belongsTo SysUnderlying via underlyingRecLeg
  underlyingRecLegSysUnderlying!: SysUnderlying;
  getUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortFutuPos belongsTo SysUnderlying via fundingCurve
  fundingCurveSysUnderlying!: SysUnderlying;
  getFundingCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFundingCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFundingCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortFutuPos belongsTo SysUnderlying via underlyingPayLeg
  underlyingPayLegSysUnderlying!: SysUnderlying;
  getUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortFutuPos {
    return PortFutuPos.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_external_system',
        key: 'source_system'
      },
      field: 'source_system'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'product_code'
      },
      field: 'product_code'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'contract_reference'
    },
    longShort: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'doms_long_short',
        key: 'domain'
      },
      field: 'long_short'
    },
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'company_code'
    },
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'cost_centre'
    },
    bookCode: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'company_book',
        key: 'book_code'
      },
      field: 'book_code'
    },
    internalDeal: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'internal_deal'
    },
    invptyCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_code'
    },
    exchangeCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'exchange_code'
    },
    glClass: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_gl_class',
        key: 'domain'
      },
      field: 'gl_class'
    },
    bankingTrading: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'doms_banking_trading',
        key: 'domain'
      },
      field: 'banking_trading'
    },
    tradeDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'trade_date'
    },
    maturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'maturity_date'
    },
    fixingSettlementDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_settlement_date'
    },
    futureDeliveryDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'future_delivery_date'
    },
    payDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'pay_date'
    },
    recDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'rec_date'
    },
    maturityCode: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'maturity_code'
    },
    crossBorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'cross_border'
    },
    forThirdParty: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'for_third_party'
    },
    underlyingFamily: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_underlying_family',
        key: 'domain'
      },
      field: 'underlying_family'
    },
    underlyingSecurity: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'underlying_security'
    },
    underlyingRecLeg: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'underlying_rec_leg'
    },
    underlyingPayLeg: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'underlying_pay_leg'
    },
    underlyingCcyRecLeg: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'underlying_ccy_rec_leg'
    },
    underlyingCcyPayLeg: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'underlying_ccy_pay_leg'
    },
    contractSize: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'contract_size'
    },
    securityQuantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'security_quantity'
    },
    currencyCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'currency_code'
    },
    isinCode: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'isin_code'
    },
    contractMarketValue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'contract_market_value'
    },
    notional: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    notionalRate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'notional_rate'
    },
    accrualBasisNotional: {
      type: DataTypes.STRING(7),
      allowNull: false,
      references: {
        model: 'doms_accrual_basis',
        key: 'domain'
      },
      field: 'accrual_basis_notional'
    },
    notionalPeriodicity: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NON",
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'notional_periodicity'
    },
    notionalPeriodicityUnit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'notional_periodicity_unit'
    },
    notionalPositionCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'notional_position_ccy'
    },
    agreedSettlementValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'agreed_settlement_value'
    },
    marketValueCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'market_value_ccy'
    },
    marketValueRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'market_value_rec_leg'
    },
    marketValuePayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'market_value_pay_leg'
    },
    marketValue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'market_value'
    },
    tradedFuturesPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'traded_futures_price'
    },
    quotedFuturesPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'quoted_futures_price'
    },
    valuationSpread: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'valuation_spread'
    },
    discountSpread: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'discount_spread'
    },
    futureStlm: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "CSH",
      references: {
        model: 'doms_settlement_mode',
        key: 'domain'
      },
      field: 'future_stlm'
    },
    deliveryType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "DVP",
      references: {
        model: 'doms_delivery_type',
        key: 'domain'
      },
      field: 'delivery_type'
    },
    settlementFailure: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'settlement_failure'
    },
    additionalCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'additional_cost'
    },
    additionalCostCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'additional_cost_ccy'
    },
    ccpCmCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'ccp_cm_code'
    },
    ccpExposureType: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: 'doms_ccp_exposure_type',
        key: 'domain'
      },
      field: 'ccp_exposure_type'
    },
    marginType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NAN",
      references: {
        model: 'doms_margin_type',
        key: 'domain'
      },
      field: 'margin_type'
    },
    initialMarginDeposit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'initial_margin_deposit'
    },
    initialMarginDepositCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'initial_margin_deposit_ccy'
    },
    cashMargin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'cash_margin'
    },
    collateralMargin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'collateral_margin'
    },
    holdingPeriod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'holding_period'
    },
    fundingProvider: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'funding_provider'
    },
    fundingRateType: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'doms_rate_type',
        key: 'domain'
      },
      field: 'funding_rate_type'
    },
    fundingCurve: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'funding_curve'
    },
    fundingCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'funding_cost'
    },
    fundingCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'funding_ccy'
    }
  }, {
    sequelize,
    tableName: 'port_futu_pos',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-PORT_FUTU_POS",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_system" },
          { name: "product_code" },
          { name: "contract_reference" },
          { name: "company_code" },
        ]
      },
      {
        name: "PK-PORT_FUTU_POS",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_system" },
          { name: "product_code" },
          { name: "contract_reference" },
          { name: "long_short" },
        ]
      },
      {
        name: "port_futu_pos_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
