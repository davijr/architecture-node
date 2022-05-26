import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsAccrualBasis, DomsAccrualBasisId } from './DomsAccrualBasis';
import type { DomsBankingFacilityType, DomsBankingFacilityTypeId } from './DomsBankingFacilityType';
import type { DomsBankingTrading, DomsBankingTradingId } from './DomsBankingTrading';
import type { DomsCalcDayConvention, DomsCalcDayConventionId } from './DomsCalcDayConvention';
import type { DomsCalcFrequency, DomsCalcFrequencyId } from './DomsCalcFrequency';
import type { DomsCommitted, DomsCommittedId } from './DomsCommitted';
import type { DomsFacilityLiqType, DomsFacilityLiqTypeId } from './DomsFacilityLiqType';
import type { DomsFacilityPurpose, DomsFacilityPurposeId } from './DomsFacilityPurpose';
import type { DomsFacilityType, DomsFacilityTypeId } from './DomsFacilityType';
import type { DomsFixingRule, DomsFixingRuleId } from './DomsFixingRule';
import type { DomsForbearanceMeasures, DomsForbearanceMeasuresId } from './DomsForbearanceMeasures';
import type { DomsGlClass, DomsGlClassId } from './DomsGlClass';
import type { DomsParticipationFlag, DomsParticipationFlagId } from './DomsParticipationFlag';
import type { DomsPerformingStatus, DomsPerformingStatusId } from './DomsPerformingStatus';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { DomsSubType, DomsSubTypeId } from './DomsSubType';
import type { DomsTargetType, DomsTargetTypeId } from './DomsTargetType';
import type { DomsTaxStatus, DomsTaxStatusId } from './DomsTaxStatus';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { Product, ProductId } from './Product';
import type { SysCountry, SysCountryId } from './SysCountry';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortFctyMovAttributes {
  referenceDate: string;
  tradeDate: string;
  movDescription?: string;
  sourceSystem: string;
  productCode: string;
  contractReference: string;
  firstContractReference?: string;
  partOfStructure: boolean;
  structureReference?: string;
  companyCode: string;
  costCentre: string;
  invptyCode: number;
  internalDeal: boolean;
  participationFlag: string;
  excludeFromNetting: boolean;
  glClass: string;
  bankingTrading: string;
  startDate: string;
  maturityDate: string;
  targetType: string;
  committed: string;
  currencyCode: string;
  amount?: number;
  usedAmount?: number;
  availaleAmount?: number;
  lastDrawdownDate?: string;
  revolving: boolean;
  untilNotification: boolean;
  noticePeriod?: number;
  notificationDate?: string;
  facilityPurpose: string;
  facilityType: string;
  subType: string;
  rateType: string;
  curveName: string;
  tenorFrequency: string;
  tenorFrequencyUnit?: number;
  discountCurveName: string;
  marketSpread?: number;
  mothFctyGeneralBanking: string;
  recourse: boolean;
  originationCountry: string;
  fee?: number;
  feeAccrued?: number;
  nonAccrualDate?: string;
  accrualBasis: string;
  accrual?: number;
  compoundFrequency: string;
  compoundFrequencyUnit?: number;
  rate?: number;
  effectiveYield?: number;
  payDayConvention: string;
  fixingRule: string;
  fixingNbDays?: number;
  fixingFrequency: string;
  fixingFrequencyUnit?: number;
  fixingCurrentValue?: number;
  fixingFirstDate?: string;
  fixingNextDate?: string;
  resetFrequency: string;
  resetFrequencyUnit?: number;
  longTermDebt?: number;
  shortTermDebt?: number;
  termsLastModifiedDate?: string;
  leverageLoan: boolean;
  rollOver: boolean;
  fairValueAdjustment?: number;
  interestIncomeTaxStatus: string;
  facilityLiqType: string;
  participationWeight?: number;
  peformingStatus: string;
  pastDueDays?: number;
  pastDueInstallments?: number;
  forbearanceMeasures: string;
  forbearanceDate?: string;
  troubDbtRestructured: boolean;
  defaultDate?: string;
  recoveriesSinceDefault?: number;
}

export type PortFctyMovPk = "referenceDate" | "sourceSystem" | "productCode" | "contractReference";
export type PortFctyMovId = PortFctyMov[PortFctyMovPk];
export type PortFctyMovOptionalAttributes = "movDescription" | "firstContractReference" | "structureReference" | "participationFlag" | "amount" | "usedAmount" | "availaleAmount" | "lastDrawdownDate" | "noticePeriod" | "notificationDate" | "tenorFrequency" | "tenorFrequencyUnit" | "marketSpread" | "mothFctyGeneralBanking" | "fee" | "feeAccrued" | "nonAccrualDate" | "accrual" | "compoundFrequency" | "compoundFrequencyUnit" | "rate" | "effectiveYield" | "payDayConvention" | "fixingRule" | "fixingNbDays" | "fixingFrequencyUnit" | "fixingCurrentValue" | "fixingFirstDate" | "fixingNextDate" | "resetFrequencyUnit" | "longTermDebt" | "shortTermDebt" | "termsLastModifiedDate" | "fairValueAdjustment" | "facilityLiqType" | "participationWeight" | "peformingStatus" | "pastDueDays" | "pastDueInstallments" | "forbearanceDate" | "defaultDate" | "recoveriesSinceDefault";
export type PortFctyMovCreationAttributes = Optional<PortFctyMovAttributes, PortFctyMovOptionalAttributes>;

export class PortFctyMov extends Model<PortFctyMovAttributes, PortFctyMovCreationAttributes> implements PortFctyMovAttributes {
  referenceDate!: string;
  tradeDate!: string;
  movDescription?: string;
  sourceSystem!: string;
  productCode!: string;
  contractReference!: string;
  firstContractReference?: string;
  partOfStructure!: boolean;
  structureReference?: string;
  companyCode!: string;
  costCentre!: string;
  invptyCode!: number;
  internalDeal!: boolean;
  participationFlag!: string;
  excludeFromNetting!: boolean;
  glClass!: string;
  bankingTrading!: string;
  startDate!: string;
  maturityDate!: string;
  targetType!: string;
  committed!: string;
  currencyCode!: string;
  amount?: number;
  usedAmount?: number;
  availaleAmount?: number;
  lastDrawdownDate?: string;
  revolving!: boolean;
  untilNotification!: boolean;
  noticePeriod?: number;
  notificationDate?: string;
  facilityPurpose!: string;
  facilityType!: string;
  subType!: string;
  rateType!: string;
  curveName!: string;
  tenorFrequency!: string;
  tenorFrequencyUnit?: number;
  discountCurveName!: string;
  marketSpread?: number;
  mothFctyGeneralBanking!: string;
  recourse!: boolean;
  originationCountry!: string;
  fee?: number;
  feeAccrued?: number;
  nonAccrualDate?: string;
  accrualBasis!: string;
  accrual?: number;
  compoundFrequency!: string;
  compoundFrequencyUnit?: number;
  rate?: number;
  effectiveYield?: number;
  payDayConvention!: string;
  fixingRule!: string;
  fixingNbDays?: number;
  fixingFrequency!: string;
  fixingFrequencyUnit?: number;
  fixingCurrentValue?: number;
  fixingFirstDate?: string;
  fixingNextDate?: string;
  resetFrequency!: string;
  resetFrequencyUnit?: number;
  longTermDebt?: number;
  shortTermDebt?: number;
  termsLastModifiedDate?: string;
  leverageLoan!: boolean;
  rollOver!: boolean;
  fairValueAdjustment?: number;
  interestIncomeTaxStatus!: string;
  facilityLiqType!: string;
  participationWeight?: number;
  peformingStatus!: string;
  pastDueDays?: number;
  pastDueInstallments?: number;
  forbearanceMeasures!: string;
  forbearanceDate?: string;
  troubDbtRestructured!: boolean;
  defaultDate?: string;
  recoveriesSinceDefault?: number;

  // PortFctyMov belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortFctyMov belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortFctyMov belongsTo DomsAccrualBasis via accrualBasis
  accrualBasisDomsAccrualBasis!: DomsAccrualBasis;
  getAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PortFctyMov belongsTo DomsBankingFacilityType via mothFctyGeneralBanking
  mothFctyGeneralBankingDomsBankingFacilityType!: DomsBankingFacilityType;
  getMothFctyGeneralBankingDomsBankingFacilityType!: Sequelize.BelongsToGetAssociationMixin<DomsBankingFacilityType>;
  setMothFctyGeneralBankingDomsBankingFacilityType!: Sequelize.BelongsToSetAssociationMixin<DomsBankingFacilityType, DomsBankingFacilityTypeId>;
  createMothFctyGeneralBankingDomsBankingFacilityType!: Sequelize.BelongsToCreateAssociationMixin<DomsBankingFacilityType>;
  // PortFctyMov belongsTo DomsBankingTrading via bankingTrading
  bankingTradingDomsBankingTrading!: DomsBankingTrading;
  getBankingTradingDomsBankingTrading!: Sequelize.BelongsToGetAssociationMixin<DomsBankingTrading>;
  setBankingTradingDomsBankingTrading!: Sequelize.BelongsToSetAssociationMixin<DomsBankingTrading, DomsBankingTradingId>;
  createBankingTradingDomsBankingTrading!: Sequelize.BelongsToCreateAssociationMixin<DomsBankingTrading>;
  // PortFctyMov belongsTo DomsCalcDayConvention via payDayConvention
  payDayConventionDomsCalcDayConvention!: DomsCalcDayConvention;
  getPayDayConventionDomsCalcDayConvention!: Sequelize.BelongsToGetAssociationMixin<DomsCalcDayConvention>;
  setPayDayConventionDomsCalcDayConvention!: Sequelize.BelongsToSetAssociationMixin<DomsCalcDayConvention, DomsCalcDayConventionId>;
  createPayDayConventionDomsCalcDayConvention!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcDayConvention>;
  // PortFctyMov belongsTo DomsCalcFrequency via compoundFrequency
  compoundFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getCompoundFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setCompoundFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createCompoundFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortFctyMov belongsTo DomsCalcFrequency via fixingFrequency
  fixingFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getFixingFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setFixingFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createFixingFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortFctyMov belongsTo DomsCalcFrequency via resetFrequency
  resetFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getResetFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setResetFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createResetFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortFctyMov belongsTo DomsCalcFrequency via tenorFrequency
  tenorFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortFctyMov belongsTo DomsCommitted via committed
  committedDomsCommitted!: DomsCommitted;
  getCommittedDomsCommitted!: Sequelize.BelongsToGetAssociationMixin<DomsCommitted>;
  setCommittedDomsCommitted!: Sequelize.BelongsToSetAssociationMixin<DomsCommitted, DomsCommittedId>;
  createCommittedDomsCommitted!: Sequelize.BelongsToCreateAssociationMixin<DomsCommitted>;
  // PortFctyMov belongsTo DomsFacilityLiqType via facilityLiqType
  facilityLiqTypeDomsFacilityLiqType!: DomsFacilityLiqType;
  getFacilityLiqTypeDomsFacilityLiqType!: Sequelize.BelongsToGetAssociationMixin<DomsFacilityLiqType>;
  setFacilityLiqTypeDomsFacilityLiqType!: Sequelize.BelongsToSetAssociationMixin<DomsFacilityLiqType, DomsFacilityLiqTypeId>;
  createFacilityLiqTypeDomsFacilityLiqType!: Sequelize.BelongsToCreateAssociationMixin<DomsFacilityLiqType>;
  // PortFctyMov belongsTo DomsFacilityPurpose via facilityPurpose
  facilityPurposeDomsFacilityPurpose!: DomsFacilityPurpose;
  getFacilityPurposeDomsFacilityPurpose!: Sequelize.BelongsToGetAssociationMixin<DomsFacilityPurpose>;
  setFacilityPurposeDomsFacilityPurpose!: Sequelize.BelongsToSetAssociationMixin<DomsFacilityPurpose, DomsFacilityPurposeId>;
  createFacilityPurposeDomsFacilityPurpose!: Sequelize.BelongsToCreateAssociationMixin<DomsFacilityPurpose>;
  // PortFctyMov belongsTo DomsFacilityType via facilityType
  facilityTypeDomsFacilityType!: DomsFacilityType;
  getFacilityTypeDomsFacilityType!: Sequelize.BelongsToGetAssociationMixin<DomsFacilityType>;
  setFacilityTypeDomsFacilityType!: Sequelize.BelongsToSetAssociationMixin<DomsFacilityType, DomsFacilityTypeId>;
  createFacilityTypeDomsFacilityType!: Sequelize.BelongsToCreateAssociationMixin<DomsFacilityType>;
  // PortFctyMov belongsTo DomsFixingRule via fixingRule
  fixingRuleDomsFixingRule!: DomsFixingRule;
  getFixingRuleDomsFixingRule!: Sequelize.BelongsToGetAssociationMixin<DomsFixingRule>;
  setFixingRuleDomsFixingRule!: Sequelize.BelongsToSetAssociationMixin<DomsFixingRule, DomsFixingRuleId>;
  createFixingRuleDomsFixingRule!: Sequelize.BelongsToCreateAssociationMixin<DomsFixingRule>;
  // PortFctyMov belongsTo DomsForbearanceMeasures via forbearanceMeasures
  forbearanceMeasuresDomsForbearanceMeasure!: DomsForbearanceMeasures;
  getForbearanceMeasuresDomsForbearanceMeasure!: Sequelize.BelongsToGetAssociationMixin<DomsForbearanceMeasures>;
  setForbearanceMeasuresDomsForbearanceMeasure!: Sequelize.BelongsToSetAssociationMixin<DomsForbearanceMeasures, DomsForbearanceMeasuresId>;
  createForbearanceMeasuresDomsForbearanceMeasure!: Sequelize.BelongsToCreateAssociationMixin<DomsForbearanceMeasures>;
  // PortFctyMov belongsTo DomsGlClass via glClass
  glClassDomsGlClass!: DomsGlClass;
  getGlClassDomsGlClass!: Sequelize.BelongsToGetAssociationMixin<DomsGlClass>;
  setGlClassDomsGlClass!: Sequelize.BelongsToSetAssociationMixin<DomsGlClass, DomsGlClassId>;
  createGlClassDomsGlClass!: Sequelize.BelongsToCreateAssociationMixin<DomsGlClass>;
  // PortFctyMov belongsTo DomsParticipationFlag via participationFlag
  participationFlagDomsParticipationFlag!: DomsParticipationFlag;
  getParticipationFlagDomsParticipationFlag!: Sequelize.BelongsToGetAssociationMixin<DomsParticipationFlag>;
  setParticipationFlagDomsParticipationFlag!: Sequelize.BelongsToSetAssociationMixin<DomsParticipationFlag, DomsParticipationFlagId>;
  createParticipationFlagDomsParticipationFlag!: Sequelize.BelongsToCreateAssociationMixin<DomsParticipationFlag>;
  // PortFctyMov belongsTo DomsPerformingStatus via peformingStatus
  peformingStatusDomsPerformingStatus!: DomsPerformingStatus;
  getPeformingStatusDomsPerformingStatus!: Sequelize.BelongsToGetAssociationMixin<DomsPerformingStatus>;
  setPeformingStatusDomsPerformingStatus!: Sequelize.BelongsToSetAssociationMixin<DomsPerformingStatus, DomsPerformingStatusId>;
  createPeformingStatusDomsPerformingStatus!: Sequelize.BelongsToCreateAssociationMixin<DomsPerformingStatus>;
  // PortFctyMov belongsTo DomsRateType via rateType
  rateTypeDomsRateType!: DomsRateType;
  getRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortFctyMov belongsTo DomsSubType via subType
  subTypeDomsSubType!: DomsSubType;
  getSubTypeDomsSubType!: Sequelize.BelongsToGetAssociationMixin<DomsSubType>;
  setSubTypeDomsSubType!: Sequelize.BelongsToSetAssociationMixin<DomsSubType, DomsSubTypeId>;
  createSubTypeDomsSubType!: Sequelize.BelongsToCreateAssociationMixin<DomsSubType>;
  // PortFctyMov belongsTo DomsTargetType via targetType
  targetTypeDomsTargetType!: DomsTargetType;
  getTargetTypeDomsTargetType!: Sequelize.BelongsToGetAssociationMixin<DomsTargetType>;
  setTargetTypeDomsTargetType!: Sequelize.BelongsToSetAssociationMixin<DomsTargetType, DomsTargetTypeId>;
  createTargetTypeDomsTargetType!: Sequelize.BelongsToCreateAssociationMixin<DomsTargetType>;
  // PortFctyMov belongsTo DomsTaxStatus via interestIncomeTaxStatus
  interestIncomeTaxStatusDomsTaxStatus!: DomsTaxStatus;
  getInterestIncomeTaxStatusDomsTaxStatus!: Sequelize.BelongsToGetAssociationMixin<DomsTaxStatus>;
  setInterestIncomeTaxStatusDomsTaxStatus!: Sequelize.BelongsToSetAssociationMixin<DomsTaxStatus, DomsTaxStatusId>;
  createInterestIncomeTaxStatusDomsTaxStatus!: Sequelize.BelongsToCreateAssociationMixin<DomsTaxStatus>;
  // PortFctyMov belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortFctyMov belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortFctyMov belongsTo SysCountry via originationCountry
  originationCountrySysCountry!: SysCountry;
  getOriginationCountrySysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setOriginationCountrySysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createOriginationCountrySysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;
  // PortFctyMov belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFctyMov belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PortFctyMov belongsTo SysUnderlying via curveName
  curveNameSysUnderlying!: SysUnderlying;
  getCurveNameSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setCurveNameSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createCurveNameSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortFctyMov belongsTo SysUnderlying via discountCurveName
  discountCurveNameSysUnderlying!: SysUnderlying;
  getDiscountCurveNameSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setDiscountCurveNameSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createDiscountCurveNameSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortFctyMov {
    return PortFctyMov.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    tradeDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'trade_date'
    },
    movDescription: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'mov_description'
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
    firstContractReference: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'first_contract_reference'
    },
    partOfStructure: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'part_of_structure'
    },
    structureReference: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'structure_reference'
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
    invptyCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_code'
    },
    internalDeal: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'internal_deal'
    },
    participationFlag: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "FOR",
      references: {
        model: 'doms_participation_flag',
        key: 'domain'
      },
      field: 'participation_flag'
    },
    excludeFromNetting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'exclude_from_netting'
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
    targetType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_target_type',
        key: 'domain'
      },
      field: 'target_type'
    },
    committed: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_committed',
        key: 'domain'
      }
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
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    usedAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'used_amount'
    },
    availaleAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'availale_amount'
    },
    lastDrawdownDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'last_drawdown_date'
    },
    revolving: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    untilNotification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'until_notification'
    },
    noticePeriod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'notice_period'
    },
    notificationDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'notification_date'
    },
    facilityPurpose: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_facility_purpose',
        key: 'domain'
      },
      field: 'facility_purpose'
    },
    facilityType: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: 'doms_facility_type',
        key: 'domain'
      },
      field: 'facility_type'
    },
    subType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_sub_type',
        key: 'domain'
      },
      field: 'sub_type'
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
    curveName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'curve_name'
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
    discountCurveName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'discount_curve_name'
    },
    marketSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'market_spread'
    },
    mothFctyGeneralBanking: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NGB",
      references: {
        model: 'doms_banking_facility_type',
        key: 'domain'
      },
      field: 'moth_fcty_general_banking'
    },
    recourse: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
    fee: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    feeAccrued: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fee_accrued'
    },
    nonAccrualDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'non_accrual_date'
    },
    accrualBasis: {
      type: DataTypes.STRING(7),
      allowNull: false,
      references: {
        model: 'doms_accrual_basis',
        key: 'domain'
      },
      field: 'accrual_basis'
    },
    accrual: {
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
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    effectiveYield: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'effective_yield'
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
    fixingRule: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "CFR",
      references: {
        model: 'doms_fixing_rule',
        key: 'domain'
      },
      field: 'fixing_rule'
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
    fixingCurrentValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fixing_current_value'
    },
    fixingFirstDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_first_date'
    },
    fixingNextDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_next_date'
    },
    resetFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'reset_frequency'
    },
    resetFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'reset_frequency_unit'
    },
    longTermDebt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'long_term_debt'
    },
    shortTermDebt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'short_term_debt'
    },
    termsLastModifiedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'terms_last_modified_date'
    },
    leverageLoan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'leverage_loan'
    },
    rollOver: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'roll_over'
    },
    fairValueAdjustment: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fair_value_adjustment'
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
    facilityLiqType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "CRD",
      references: {
        model: 'doms_facility_liq_type',
        key: 'domain'
      },
      field: 'facility_liq_type'
    },
    participationWeight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'participation_weight'
    },
    peformingStatus: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "SAFE",
      references: {
        model: 'doms_performing_status',
        key: 'domain'
      },
      field: 'peforming_status'
    },
    pastDueDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'past_due_days'
    },
    pastDueInstallments: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'past_due_installments'
    },
    forbearanceMeasures: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_forbearance_measures',
        key: 'domain'
      },
      field: 'forbearance_measures'
    },
    forbearanceDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'forbearance_date'
    },
    troubDbtRestructured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'troub_dbt_restructured'
    },
    defaultDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'default_date'
    },
    recoveriesSinceDefault: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'recoveries_since_default'
    }
  }, {
    sequelize,
    tableName: 'port_fcty_mov',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_FCTY_MOV",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_system" },
          { name: "product_code" },
          { name: "contract_reference" },
        ]
      },
      {
        name: "port_fcty_mov_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
