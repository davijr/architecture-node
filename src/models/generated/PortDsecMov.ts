import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyBook, CompanyBookId } from './CompanyBook';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsAccrualBasis, DomsAccrualBasisId } from './DomsAccrualBasis';
import type { DomsAmortizingType, DomsAmortizingTypeId } from './DomsAmortizingType';
import type { DomsBrokenPeriodType, DomsBrokenPeriodTypeId } from './DomsBrokenPeriodType';
import type { DomsCalcDayConvention, DomsCalcDayConventionId } from './DomsCalcDayConvention';
import type { DomsCalcFrequency, DomsCalcFrequencyId } from './DomsCalcFrequency';
import type { DomsClientProprietary, DomsClientProprietaryId } from './DomsClientProprietary';
import type { DomsDistributionChannel, DomsDistributionChannelId } from './DomsDistributionChannel';
import type { DomsFairValueOption, DomsFairValueOptionId } from './DomsFairValueOption';
import type { DomsGlClass, DomsGlClassId } from './DomsGlClass';
import type { DomsPenaltyCalcMethod, DomsPenaltyCalcMethodId } from './DomsPenaltyCalcMethod';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { DomsServicingType, DomsServicingTypeId } from './DomsServicingType';
import type { DomsTaxStatus, DomsTaxStatusId } from './DomsTaxStatus';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { Product, ProductId } from './Product';
import type { SysCountry, SysCountryId } from './SysCountry';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortDsecMovAttributes {
  referenceDate: string;
  movDescription: string;
  tradeDate: string;
  sourceSystem: string;
  productCode: string;
  contractReference: string;
  companyCode: string;
  costCentre: string;
  bookCode: string;
  internalDeal: boolean;
  invptyCode: number;
  startDate: string;
  maturityDate: string;
  currencyCode: string;
  underlyingCode: string;
  rateType: string;
  fixedRateValue?: number;
  fixedRateAccrualBasis?: string;
  fixedRateBaseCurve: string;
  floatIndexPercentage?: number;
  floatIndexBaseCurve: string;
  floatIndexAccrualBasis: string;
  yield?: number;
  compoundFrequency: string;
  compoundFrequencyUnit?: number;
  amortizingType: string;
  firstAmortizingDate?: string;
  brokenPeriodType: string;
  nextCouponDate?: string;
  marketValue?: number;
  modDuration?: number;
  notional?: number;
  accrual?: number;
  outstanding?: number;
  unpaidPrincipal?: number;
  unpaidInterest?: number;
  marketSpread?: number;
  penaltyCalcMethod: string;
  penaltyMaxDate?: string;
  penaltyRate?: number;
  cap?: number;
  floor?: number;
  fixingNbDays?: number;
  fixingFrequency: string;
  fixingFrequencyUnit?: number;
  fixingNextDate?: string;
  prepayBeginDate?: string;
  glClass: string;
  calcDayConvention: string;
  payDayConvention: string;
  multSpread?: number;
  amortizedCostNoIfrs?: number;
  rollOver: boolean;
  securedDeposit: boolean;
  protectedBalance?: number;
  clientProprietary: string;
  centralBank: string;
  regulatorySpread?: number;
  originationCountry: string;
  legalWithdraw: boolean;
  tenorFrequency: string;
  tenorFrequencyUnit?: number;
  curveName: string;
  discountCurveName: string;
  spreadCurveName: string;
  underTsyControl: boolean;
  servicingType: string;
  fairValueOption: string;
  fairValue?: number;
  fairValueAccumChanges?: number;
  termsLastModifiedDate?: string;
  distributionChannel: string;
  grossCarryingValue?: number;
  interestIncomeTaxStatus: string;
  fundingProvider?: string;
  fundingRateType?: string;
  fundingCurve: string;
  fundingCost?: number;
  fundingCcy?: string;
}

export type PortDsecMovPk = "referenceDate" | "movDescription" | "tradeDate" | "sourceSystem" | "productCode" | "contractReference";
export type PortDsecMovId = PortDsecMov[PortDsecMovPk];
export type PortDsecMovOptionalAttributes = "fixedRateValue" | "fixedRateAccrualBasis" | "floatIndexPercentage" | "yield" | "compoundFrequency" | "compoundFrequencyUnit" | "firstAmortizingDate" | "nextCouponDate" | "marketValue" | "modDuration" | "notional" | "accrual" | "outstanding" | "unpaidPrincipal" | "unpaidInterest" | "marketSpread" | "penaltyMaxDate" | "penaltyRate" | "cap" | "floor" | "fixingNbDays" | "fixingFrequencyUnit" | "fixingNextDate" | "prepayBeginDate" | "calcDayConvention" | "payDayConvention" | "multSpread" | "amortizedCostNoIfrs" | "protectedBalance" | "clientProprietary" | "regulatorySpread" | "tenorFrequency" | "tenorFrequencyUnit" | "fairValue" | "fairValueAccumChanges" | "termsLastModifiedDate" | "distributionChannel" | "grossCarryingValue" | "fundingProvider" | "fundingRateType" | "fundingCost" | "fundingCcy";
export type PortDsecMovCreationAttributes = Optional<PortDsecMovAttributes, PortDsecMovOptionalAttributes>;

export class PortDsecMov extends Model<PortDsecMovAttributes, PortDsecMovCreationAttributes> implements PortDsecMovAttributes {
  referenceDate!: string;
  movDescription!: string;
  tradeDate!: string;
  sourceSystem!: string;
  productCode!: string;
  contractReference!: string;
  companyCode!: string;
  costCentre!: string;
  bookCode!: string;
  internalDeal!: boolean;
  invptyCode!: number;
  startDate!: string;
  maturityDate!: string;
  currencyCode!: string;
  underlyingCode!: string;
  rateType!: string;
  fixedRateValue?: number;
  fixedRateAccrualBasis?: string;
  fixedRateBaseCurve!: string;
  floatIndexPercentage?: number;
  floatIndexBaseCurve!: string;
  floatIndexAccrualBasis!: string;
  yield?: number;
  compoundFrequency!: string;
  compoundFrequencyUnit?: number;
  amortizingType!: string;
  firstAmortizingDate?: string;
  brokenPeriodType!: string;
  nextCouponDate?: string;
  marketValue?: number;
  modDuration?: number;
  notional?: number;
  accrual?: number;
  outstanding?: number;
  unpaidPrincipal?: number;
  unpaidInterest?: number;
  marketSpread?: number;
  penaltyCalcMethod!: string;
  penaltyMaxDate?: string;
  penaltyRate?: number;
  cap?: number;
  floor?: number;
  fixingNbDays?: number;
  fixingFrequency!: string;
  fixingFrequencyUnit?: number;
  fixingNextDate?: string;
  prepayBeginDate?: string;
  glClass!: string;
  calcDayConvention!: string;
  payDayConvention!: string;
  multSpread?: number;
  amortizedCostNoIfrs?: number;
  rollOver!: boolean;
  securedDeposit!: boolean;
  protectedBalance?: number;
  clientProprietary!: string;
  centralBank!: string;
  regulatorySpread?: number;
  originationCountry!: string;
  legalWithdraw!: boolean;
  tenorFrequency!: string;
  tenorFrequencyUnit?: number;
  curveName!: string;
  discountCurveName!: string;
  spreadCurveName!: string;
  underTsyControl!: boolean;
  servicingType!: string;
  fairValueOption!: string;
  fairValue?: number;
  fairValueAccumChanges?: number;
  termsLastModifiedDate?: string;
  distributionChannel!: string;
  grossCarryingValue?: number;
  interestIncomeTaxStatus!: string;
  fundingProvider?: string;
  fundingRateType?: string;
  fundingCurve!: string;
  fundingCost?: number;
  fundingCcy?: string;

  // PortDsecMov belongsTo CompanyBook via bookCode
  bookCodeCompanyBook!: CompanyBook;
  getBookCodeCompanyBook!: Sequelize.BelongsToGetAssociationMixin<CompanyBook>;
  setBookCodeCompanyBook!: Sequelize.BelongsToSetAssociationMixin<CompanyBook, CompanyBookId>;
  createBookCodeCompanyBook!: Sequelize.BelongsToCreateAssociationMixin<CompanyBook>;
  // PortDsecMov belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortDsecMov belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortDsecMov belongsTo DomsAccrualBasis via floatIndexAccrualBasis
  floatIndexAccrualBasisDomsAccrualBasis!: DomsAccrualBasis;
  getFloatIndexAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setFloatIndexAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createFloatIndexAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PortDsecMov belongsTo DomsAmortizingType via amortizingType
  amortizingTypeDomsAmortizingType!: DomsAmortizingType;
  getAmortizingTypeDomsAmortizingType!: Sequelize.BelongsToGetAssociationMixin<DomsAmortizingType>;
  setAmortizingTypeDomsAmortizingType!: Sequelize.BelongsToSetAssociationMixin<DomsAmortizingType, DomsAmortizingTypeId>;
  createAmortizingTypeDomsAmortizingType!: Sequelize.BelongsToCreateAssociationMixin<DomsAmortizingType>;
  // PortDsecMov belongsTo DomsBrokenPeriodType via brokenPeriodType
  brokenPeriodTypeDomsBrokenPeriodType!: DomsBrokenPeriodType;
  getBrokenPeriodTypeDomsBrokenPeriodType!: Sequelize.BelongsToGetAssociationMixin<DomsBrokenPeriodType>;
  setBrokenPeriodTypeDomsBrokenPeriodType!: Sequelize.BelongsToSetAssociationMixin<DomsBrokenPeriodType, DomsBrokenPeriodTypeId>;
  createBrokenPeriodTypeDomsBrokenPeriodType!: Sequelize.BelongsToCreateAssociationMixin<DomsBrokenPeriodType>;
  // PortDsecMov belongsTo DomsCalcDayConvention via calcDayConvention
  calcDayConventionDomsCalcDayConvention!: DomsCalcDayConvention;
  getCalcDayConventionDomsCalcDayConvention!: Sequelize.BelongsToGetAssociationMixin<DomsCalcDayConvention>;
  setCalcDayConventionDomsCalcDayConvention!: Sequelize.BelongsToSetAssociationMixin<DomsCalcDayConvention, DomsCalcDayConventionId>;
  createCalcDayConventionDomsCalcDayConvention!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcDayConvention>;
  // PortDsecMov belongsTo DomsCalcDayConvention via payDayConvention
  payDayConventionDomsCalcDayConvention!: DomsCalcDayConvention;
  getPayDayConventionDomsCalcDayConvention!: Sequelize.BelongsToGetAssociationMixin<DomsCalcDayConvention>;
  setPayDayConventionDomsCalcDayConvention!: Sequelize.BelongsToSetAssociationMixin<DomsCalcDayConvention, DomsCalcDayConventionId>;
  createPayDayConventionDomsCalcDayConvention!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcDayConvention>;
  // PortDsecMov belongsTo DomsCalcFrequency via compoundFrequency
  compoundFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getCompoundFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setCompoundFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createCompoundFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortDsecMov belongsTo DomsCalcFrequency via tenorFrequency
  tenorFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortDsecMov belongsTo DomsCalcFrequency via fixingFrequency
  fixingFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getFixingFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setFixingFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createFixingFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortDsecMov belongsTo DomsClientProprietary via clientProprietary
  clientProprietaryDomsClientProprietary!: DomsClientProprietary;
  getClientProprietaryDomsClientProprietary!: Sequelize.BelongsToGetAssociationMixin<DomsClientProprietary>;
  setClientProprietaryDomsClientProprietary!: Sequelize.BelongsToSetAssociationMixin<DomsClientProprietary, DomsClientProprietaryId>;
  createClientProprietaryDomsClientProprietary!: Sequelize.BelongsToCreateAssociationMixin<DomsClientProprietary>;
  // PortDsecMov belongsTo DomsDistributionChannel via distributionChannel
  distributionChannelDomsDistributionChannel!: DomsDistributionChannel;
  getDistributionChannelDomsDistributionChannel!: Sequelize.BelongsToGetAssociationMixin<DomsDistributionChannel>;
  setDistributionChannelDomsDistributionChannel!: Sequelize.BelongsToSetAssociationMixin<DomsDistributionChannel, DomsDistributionChannelId>;
  createDistributionChannelDomsDistributionChannel!: Sequelize.BelongsToCreateAssociationMixin<DomsDistributionChannel>;
  // PortDsecMov belongsTo DomsFairValueOption via fairValueOption
  fairValueOptionDomsFairValueOption!: DomsFairValueOption;
  getFairValueOptionDomsFairValueOption!: Sequelize.BelongsToGetAssociationMixin<DomsFairValueOption>;
  setFairValueOptionDomsFairValueOption!: Sequelize.BelongsToSetAssociationMixin<DomsFairValueOption, DomsFairValueOptionId>;
  createFairValueOptionDomsFairValueOption!: Sequelize.BelongsToCreateAssociationMixin<DomsFairValueOption>;
  // PortDsecMov belongsTo DomsGlClass via glClass
  glClassDomsGlClass!: DomsGlClass;
  getGlClassDomsGlClass!: Sequelize.BelongsToGetAssociationMixin<DomsGlClass>;
  setGlClassDomsGlClass!: Sequelize.BelongsToSetAssociationMixin<DomsGlClass, DomsGlClassId>;
  createGlClassDomsGlClass!: Sequelize.BelongsToCreateAssociationMixin<DomsGlClass>;
  // PortDsecMov belongsTo DomsPenaltyCalcMethod via penaltyCalcMethod
  penaltyCalcMethodDomsPenaltyCalcMethod!: DomsPenaltyCalcMethod;
  getPenaltyCalcMethodDomsPenaltyCalcMethod!: Sequelize.BelongsToGetAssociationMixin<DomsPenaltyCalcMethod>;
  setPenaltyCalcMethodDomsPenaltyCalcMethod!: Sequelize.BelongsToSetAssociationMixin<DomsPenaltyCalcMethod, DomsPenaltyCalcMethodId>;
  createPenaltyCalcMethodDomsPenaltyCalcMethod!: Sequelize.BelongsToCreateAssociationMixin<DomsPenaltyCalcMethod>;
  // PortDsecMov belongsTo DomsRateType via rateType
  rateTypeDomsRateType!: DomsRateType;
  getRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortDsecMov belongsTo DomsServicingType via servicingType
  servicingTypeDomsServicingType!: DomsServicingType;
  getServicingTypeDomsServicingType!: Sequelize.BelongsToGetAssociationMixin<DomsServicingType>;
  setServicingTypeDomsServicingType!: Sequelize.BelongsToSetAssociationMixin<DomsServicingType, DomsServicingTypeId>;
  createServicingTypeDomsServicingType!: Sequelize.BelongsToCreateAssociationMixin<DomsServicingType>;
  // PortDsecMov belongsTo DomsTaxStatus via interestIncomeTaxStatus
  interestIncomeTaxStatusDomsTaxStatus!: DomsTaxStatus;
  getInterestIncomeTaxStatusDomsTaxStatus!: Sequelize.BelongsToGetAssociationMixin<DomsTaxStatus>;
  setInterestIncomeTaxStatusDomsTaxStatus!: Sequelize.BelongsToSetAssociationMixin<DomsTaxStatus, DomsTaxStatusId>;
  createInterestIncomeTaxStatusDomsTaxStatus!: Sequelize.BelongsToCreateAssociationMixin<DomsTaxStatus>;
  // PortDsecMov belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortDsecMov belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortDsecMov belongsTo SysCountry via centralBank
  centralBankSysCountry!: SysCountry;
  getCentralBankSysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setCentralBankSysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createCentralBankSysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;
  // PortDsecMov belongsTo SysCountry via originationCountry
  originationCountrySysCountry!: SysCountry;
  getOriginationCountrySysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setOriginationCountrySysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createOriginationCountrySysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;
  // PortDsecMov belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortDsecMov belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PortDsecMov belongsTo SysUnderlying via floatIndexBaseCurve
  floatIndexBaseCurveSysUnderlying!: SysUnderlying;
  getFloatIndexBaseCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFloatIndexBaseCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFloatIndexBaseCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortDsecMov belongsTo SysUnderlying via spreadCurveName
  spreadCurveNameSysUnderlying!: SysUnderlying;
  getSpreadCurveNameSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setSpreadCurveNameSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createSpreadCurveNameSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortDsecMov belongsTo SysUnderlying via curveName
  curveNameSysUnderlying!: SysUnderlying;
  getCurveNameSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setCurveNameSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createCurveNameSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortDsecMov belongsTo SysUnderlying via fundingCurve
  fundingCurveSysUnderlying!: SysUnderlying;
  getFundingCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFundingCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFundingCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortDsecMov belongsTo SysUnderlying via underlyingCode
  underlyingCodeSysUnderlying!: SysUnderlying;
  getUnderlyingCodeSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingCodeSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingCodeSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortDsecMov belongsTo SysUnderlying via discountCurveName
  discountCurveNameSysUnderlying!: SysUnderlying;
  getDiscountCurveNameSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setDiscountCurveNameSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createDiscountCurveNameSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortDsecMov belongsTo SysUnderlying via fixedRateBaseCurve
  fixedRateBaseCurveSysUnderlying!: SysUnderlying;
  getFixedRateBaseCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFixedRateBaseCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFixedRateBaseCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortDsecMov {
    return PortDsecMov.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    movDescription: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'mov_description'
    },
    tradeDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'trade_date'
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
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'start_date'
    },
    maturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'maturity_date'
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
    underlyingCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'underlying_code'
    },
    rateType: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'doms_rate_type',
        key: 'domain'
      },
      field: 'rate_type'
    },
    fixedRateValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fixed_rate_value'
    },
    fixedRateAccrualBasis: {
      type: DataTypes.STRING(7),
      allowNull: true,
      field: 'fixed_rate_accrual_basis'
    },
    fixedRateBaseCurve: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'fixed_rate_base_curve'
    },
    floatIndexPercentage: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'float_index_percentage'
    },
    floatIndexBaseCurve: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'float_index_base_curve'
    },
    floatIndexAccrualBasis: {
      type: DataTypes.STRING(7),
      allowNull: false,
      references: {
        model: 'doms_accrual_basis',
        key: 'domain'
      },
      field: 'float_index_accrual_basis'
    },
    yield: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    compoundFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NON",
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'compound_frequency'
    },
    compoundFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'compound_frequency_unit'
    },
    amortizingType: {
      type: DataTypes.STRING(7),
      allowNull: false,
      references: {
        model: 'doms_amortizing_type',
        key: 'domain'
      },
      field: 'amortizing_type'
    },
    firstAmortizingDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'first_amortizing_date'
    },
    brokenPeriodType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_broken_period_type',
        key: 'domain'
      },
      field: 'broken_period_type'
    },
    nextCouponDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'next_coupon_date'
    },
    marketValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'market_value'
    },
    modDuration: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'mod_duration'
    },
    notional: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    accrual: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    outstanding: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    unpaidPrincipal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'unpaid_principal'
    },
    unpaidInterest: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'unpaid_interest'
    },
    marketSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'market_spread'
    },
    penaltyCalcMethod: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_penalty_calc_method',
        key: 'domain'
      },
      field: 'penalty_calc_method'
    },
    penaltyMaxDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'penalty_max_date'
    },
    penaltyRate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'penalty_rate'
    },
    cap: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    floor: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fixingNbDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fixing_nb_days'
    },
    fixingFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'fixing_frequency'
    },
    fixingFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fixing_frequency_unit'
    },
    fixingNextDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_next_date'
    },
    prepayBeginDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'prepay_begin_date'
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
    calcDayConvention: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "NODA",
      references: {
        model: 'doms_calc_day_convention',
        key: 'domain'
      },
      field: 'calc_day_convention'
    },
    payDayConvention: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "NODA",
      references: {
        model: 'doms_calc_day_convention',
        key: 'domain'
      },
      field: 'pay_day_convention'
    },
    multSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'mult_spread'
    },
    amortizedCostNoIfrs: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'amortized_cost_no_ifrs'
    },
    rollOver: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'roll_over'
    },
    securedDeposit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'secured_deposit'
    },
    protectedBalance: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'protected_balance'
    },
    clientProprietary: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "OWA",
      references: {
        model: 'doms_client_proprietary',
        key: 'domain'
      },
      field: 'client_proprietary'
    },
    centralBank: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'sys_country',
        key: 'country_code_iso2'
      },
      field: 'central_bank'
    },
    regulatorySpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'regulatory_spread'
    },
    originationCountry: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'sys_country',
        key: 'country_code_iso2'
      },
      field: 'origination_country'
    },
    legalWithdraw: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'legal_withdraw'
    },
    tenorFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NON",
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'tenor_frequency'
    },
    tenorFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tenor_frequency_unit'
    },
    curveName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'curve_name'
    },
    discountCurveName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'discount_curve_name'
    },
    spreadCurveName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'spread_curve_name'
    },
    underTsyControl: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'under_tsy_control'
    },
    servicingType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_servicing_type',
        key: 'domain'
      },
      field: 'servicing_type'
    },
    fairValueOption: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: 'doms_fair_value_option',
        key: 'domain'
      },
      field: 'fair_value_option'
    },
    fairValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fair_value'
    },
    fairValueAccumChanges: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fair_value_accum_changes'
    },
    termsLastModifiedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'terms_last_modified_date'
    },
    distributionChannel: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "OWN",
      references: {
        model: 'doms_distribution_channel',
        key: 'domain'
      },
      field: 'distribution_channel'
    },
    grossCarryingValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'gross_carrying_value'
    },
    interestIncomeTaxStatus: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'doms_tax_status',
        key: 'domain'
      },
      field: 'interest_income_tax_status'
    },
    fundingProvider: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'funding_provider'
    },
    fundingRateType: {
      type: DataTypes.STRING(5),
      allowNull: true,
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
      allowNull: true,
      field: 'funding_cost'
    },
    fundingCcy: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'funding_ccy'
    }
  }, {
    sequelize,
    tableName: 'port_dsec_mov',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_DSEC_MOV",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "mov_description" },
          { name: "trade_date" },
          { name: "source_system" },
          { name: "product_code" },
          { name: "contract_reference" },
        ]
      },
      {
        name: "port_dsec_mov_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
