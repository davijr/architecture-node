import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsAccrualBasis, DomsAccrualBasisId } from './DomsAccrualBasis';
import type { DomsAmortizingType, DomsAmortizingTypeId } from './DomsAmortizingType';
import type { DomsBankingTrading, DomsBankingTradingId } from './DomsBankingTrading';
import type { DomsCalcDayConvention, DomsCalcDayConventionId } from './DomsCalcDayConvention';
import type { DomsCalcFrequency, DomsCalcFrequencyId } from './DomsCalcFrequency';
import type { DomsDiscountMethod, DomsDiscountMethodId } from './DomsDiscountMethod';
import type { DomsFixingRule, DomsFixingRuleId } from './DomsFixingRule';
import type { DomsGlClass, DomsGlClassId } from './DomsGlClass';
import type { DomsPenaltyCalcMethod, DomsPenaltyCalcMethodId } from './DomsPenaltyCalcMethod';
import type { DomsPerformingStatus, DomsPerformingStatusId } from './DomsPerformingStatus';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { DomsTaxStatus, DomsTaxStatusId } from './DomsTaxStatus';
import type { DomsTransferred, DomsTransferredId } from './DomsTransferred';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { Product, ProductId } from './Product';
import type { SysCountry, SysCountryId } from './SysCountry';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortLoanMovAttributes {
  referenceDate: string;
  movDescription: string;
  tradeDate: string;
  sourceSystem: string;
  productCode: string;
  contractReference: string;
  firstContractReference?: string;
  partOfStructure: boolean;
  structureReference?: string;
  companyCode: string;
  costCentre: string;
  internalDeal: boolean;
  invptyCode: number;
  cashFlow: boolean;
  participationFlag: string;
  glClass: string;
  bankingTrading: string;
  excludeFromNetting: boolean;
  startDate: string;
  maturityDate: string;
  rateType: string;
  rateValue?: number;
  curveName: string;
  originalCreditSpread?: number;
  actualCreditSpread?: number;
  floatIndexPercentage?: number;
  tenorFrequency: string;
  tenorFrequencyUnit?: number;
  discountCurveName: string;
  spreadCurveName: string;
  spreadDiscountMethod: string;
  marketSpread?: number;
  multSpread?: number;
  accrualBasis: string;
  interestFrequency: string;
  interestFrequencyUnit?: number;
  compoundFrequency: string;
  compoundFrequencyUnit?: number;
  amortizingType: string;
  amortizingFrequency: string;
  amortizingFrequencyUnit?: number;
  initialYield?: number;
  yield?: number;
  modDuration?: number;
  notionalCcy: string;
  notional?: number;
  accrual?: number;
  provisions?: number;
  outstanding?: number;
  marketValue?: number;
  unpaidPrincipal?: number;
  unpaidInterest?: number;
  interestAndCharges?: number;
  amortizingAmount?: number;
  amortizingLastAmount?: number;
  penaltyCalcMethod: string;
  penaltyMaxDate?: string;
  penaltyRate?: number;
  cap?: number;
  capSpread?: number;
  capMaturityDate?: string;
  floor?: number;
  floorSpread?: number;
  floorMaturityDate?: string;
  callDate?: string;
  putDate?: string;
  fee?: number;
  fixingRule: string;
  fixingDayConvention: string;
  fixingCalendar?: string;
  fixingNbDays?: number;
  fixingFrequency: string;
  fixingFrequencyUnit?: number;
  fixingNextDate?: string;
  fixingCurrentValue?: number;
  minMaturityDate?: string;
  maxMaturityDate?: string;
  originationDate?: string;
  acquisitionDate?: string;
  releasingDate?: string;
  lastPaymentDate?: string;
  balloonDate?: string;
  repaymentRight: boolean;
  prepayBeginDate?: string;
  prepaymentFrequency: string;
  prepaymentFrequencyUnit?: number;
  effectiveYield?: number;
  amortizedCost?: number;
  paymentDayValue?: number;
  noticePeriod?: number;
  performingStatus: string;
  pastDueDays?: number;
  pastDueInstallments?: number;
  rollOver: boolean;
  residualValue?: number;
  residualValuePercentage?: number;
  residualValueCcy: string;
  feeAccrued?: number;
  transferrable: boolean;
  transferred: string;
  originationCountry: string;
  interestIncomeTaxStatus: string;
  troubDbtRestructured: boolean;
  defaultDate?: string;
  recoveriesSinceDefault?: number;
  fundingProvider?: string;
  fundingRateType: string;
  fundingCurve: string;
  fundingCost?: number;
  fundingCcy: string;
}

export type PortLoanMovPk = "referenceDate" | "movDescription" | "tradeDate" | "sourceSystem" | "productCode" | "contractReference";
export type PortLoanMovId = PortLoanMov[PortLoanMovPk];
export type PortLoanMovOptionalAttributes = "firstContractReference" | "structureReference" | "participationFlag" | "rateValue" | "originalCreditSpread" | "actualCreditSpread" | "floatIndexPercentage" | "tenorFrequency" | "tenorFrequencyUnit" | "marketSpread" | "multSpread" | "interestFrequency" | "interestFrequencyUnit" | "compoundFrequency" | "compoundFrequencyUnit" | "amortizingFrequencyUnit" | "initialYield" | "yield" | "modDuration" | "notional" | "accrual" | "provisions" | "outstanding" | "marketValue" | "unpaidPrincipal" | "unpaidInterest" | "interestAndCharges" | "amortizingAmount" | "amortizingLastAmount" | "penaltyMaxDate" | "penaltyRate" | "cap" | "capSpread" | "capMaturityDate" | "floor" | "floorSpread" | "floorMaturityDate" | "callDate" | "putDate" | "fee" | "fixingRule" | "fixingDayConvention" | "fixingCalendar" | "fixingNbDays" | "fixingFrequencyUnit" | "fixingNextDate" | "fixingCurrentValue" | "minMaturityDate" | "maxMaturityDate" | "originationDate" | "acquisitionDate" | "releasingDate" | "lastPaymentDate" | "balloonDate" | "prepayBeginDate" | "prepaymentFrequency" | "prepaymentFrequencyUnit" | "effectiveYield" | "amortizedCost" | "paymentDayValue" | "noticePeriod" | "performingStatus" | "pastDueDays" | "pastDueInstallments" | "residualValue" | "residualValuePercentage" | "feeAccrued" | "defaultDate" | "recoveriesSinceDefault" | "fundingProvider" | "fundingCost";
export type PortLoanMovCreationAttributes = Optional<PortLoanMovAttributes, PortLoanMovOptionalAttributes>;

export class PortLoanMov extends Model<PortLoanMovAttributes, PortLoanMovCreationAttributes> implements PortLoanMovAttributes {
  referenceDate!: string;
  movDescription!: string;
  tradeDate!: string;
  sourceSystem!: string;
  productCode!: string;
  contractReference!: string;
  firstContractReference?: string;
  partOfStructure!: boolean;
  structureReference?: string;
  companyCode!: string;
  costCentre!: string;
  internalDeal!: boolean;
  invptyCode!: number;
  cashFlow!: boolean;
  participationFlag!: string;
  glClass!: string;
  bankingTrading!: string;
  excludeFromNetting!: boolean;
  startDate!: string;
  maturityDate!: string;
  rateType!: string;
  rateValue?: number;
  curveName!: string;
  originalCreditSpread?: number;
  actualCreditSpread?: number;
  floatIndexPercentage?: number;
  tenorFrequency!: string;
  tenorFrequencyUnit?: number;
  discountCurveName!: string;
  spreadCurveName!: string;
  spreadDiscountMethod!: string;
  marketSpread?: number;
  multSpread?: number;
  accrualBasis!: string;
  interestFrequency!: string;
  interestFrequencyUnit?: number;
  compoundFrequency!: string;
  compoundFrequencyUnit?: number;
  amortizingType!: string;
  amortizingFrequency!: string;
  amortizingFrequencyUnit?: number;
  initialYield?: number;
  yield?: number;
  modDuration?: number;
  notionalCcy!: string;
  notional?: number;
  accrual?: number;
  provisions?: number;
  outstanding?: number;
  marketValue?: number;
  unpaidPrincipal?: number;
  unpaidInterest?: number;
  interestAndCharges?: number;
  amortizingAmount?: number;
  amortizingLastAmount?: number;
  penaltyCalcMethod!: string;
  penaltyMaxDate?: string;
  penaltyRate?: number;
  cap?: number;
  capSpread?: number;
  capMaturityDate?: string;
  floor?: number;
  floorSpread?: number;
  floorMaturityDate?: string;
  callDate?: string;
  putDate?: string;
  fee?: number;
  fixingRule!: string;
  fixingDayConvention!: string;
  fixingCalendar?: string;
  fixingNbDays?: number;
  fixingFrequency!: string;
  fixingFrequencyUnit?: number;
  fixingNextDate?: string;
  fixingCurrentValue?: number;
  minMaturityDate?: string;
  maxMaturityDate?: string;
  originationDate?: string;
  acquisitionDate?: string;
  releasingDate?: string;
  lastPaymentDate?: string;
  balloonDate?: string;
  repaymentRight!: boolean;
  prepayBeginDate?: string;
  prepaymentFrequency!: string;
  prepaymentFrequencyUnit?: number;
  effectiveYield?: number;
  amortizedCost?: number;
  paymentDayValue?: number;
  noticePeriod?: number;
  performingStatus!: string;
  pastDueDays?: number;
  pastDueInstallments?: number;
  rollOver!: boolean;
  residualValue?: number;
  residualValuePercentage?: number;
  residualValueCcy!: string;
  feeAccrued?: number;
  transferrable!: boolean;
  transferred!: string;
  originationCountry!: string;
  interestIncomeTaxStatus!: string;
  troubDbtRestructured!: boolean;
  defaultDate?: string;
  recoveriesSinceDefault?: number;
  fundingProvider?: string;
  fundingRateType!: string;
  fundingCurve!: string;
  fundingCost?: number;
  fundingCcy!: string;

  // PortLoanMov belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortLoanMov belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortLoanMov belongsTo DomsAccrualBasis via accrualBasis
  accrualBasisDomsAccrualBasis!: DomsAccrualBasis;
  getAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PortLoanMov belongsTo DomsAmortizingType via amortizingType
  amortizingTypeDomsAmortizingType!: DomsAmortizingType;
  getAmortizingTypeDomsAmortizingType!: Sequelize.BelongsToGetAssociationMixin<DomsAmortizingType>;
  setAmortizingTypeDomsAmortizingType!: Sequelize.BelongsToSetAssociationMixin<DomsAmortizingType, DomsAmortizingTypeId>;
  createAmortizingTypeDomsAmortizingType!: Sequelize.BelongsToCreateAssociationMixin<DomsAmortizingType>;
  // PortLoanMov belongsTo DomsBankingTrading via bankingTrading
  bankingTradingDomsBankingTrading!: DomsBankingTrading;
  getBankingTradingDomsBankingTrading!: Sequelize.BelongsToGetAssociationMixin<DomsBankingTrading>;
  setBankingTradingDomsBankingTrading!: Sequelize.BelongsToSetAssociationMixin<DomsBankingTrading, DomsBankingTradingId>;
  createBankingTradingDomsBankingTrading!: Sequelize.BelongsToCreateAssociationMixin<DomsBankingTrading>;
  // PortLoanMov belongsTo DomsCalcDayConvention via fixingDayConvention
  fixingDayConventionDomsCalcDayConvention!: DomsCalcDayConvention;
  getFixingDayConventionDomsCalcDayConvention!: Sequelize.BelongsToGetAssociationMixin<DomsCalcDayConvention>;
  setFixingDayConventionDomsCalcDayConvention!: Sequelize.BelongsToSetAssociationMixin<DomsCalcDayConvention, DomsCalcDayConventionId>;
  createFixingDayConventionDomsCalcDayConvention!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcDayConvention>;
  // PortLoanMov belongsTo DomsCalcFrequency via prepaymentFrequency
  prepaymentFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getPrepaymentFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setPrepaymentFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createPrepaymentFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortLoanMov belongsTo DomsCalcFrequency via tenorFrequency
  tenorFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortLoanMov belongsTo DomsCalcFrequency via compoundFrequency
  compoundFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getCompoundFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setCompoundFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createCompoundFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortLoanMov belongsTo DomsCalcFrequency via interestFrequency
  interestFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getInterestFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setInterestFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createInterestFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortLoanMov belongsTo DomsCalcFrequency via fixingFrequency
  fixingFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getFixingFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setFixingFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createFixingFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortLoanMov belongsTo DomsCalcFrequency via amortizingFrequency
  amortizingFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getAmortizingFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setAmortizingFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createAmortizingFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortLoanMov belongsTo DomsDiscountMethod via spreadDiscountMethod
  spreadDiscountMethodDomsDiscountMethod!: DomsDiscountMethod;
  getSpreadDiscountMethodDomsDiscountMethod!: Sequelize.BelongsToGetAssociationMixin<DomsDiscountMethod>;
  setSpreadDiscountMethodDomsDiscountMethod!: Sequelize.BelongsToSetAssociationMixin<DomsDiscountMethod, DomsDiscountMethodId>;
  createSpreadDiscountMethodDomsDiscountMethod!: Sequelize.BelongsToCreateAssociationMixin<DomsDiscountMethod>;
  // PortLoanMov belongsTo DomsFixingRule via fixingRule
  fixingRuleDomsFixingRule!: DomsFixingRule;
  getFixingRuleDomsFixingRule!: Sequelize.BelongsToGetAssociationMixin<DomsFixingRule>;
  setFixingRuleDomsFixingRule!: Sequelize.BelongsToSetAssociationMixin<DomsFixingRule, DomsFixingRuleId>;
  createFixingRuleDomsFixingRule!: Sequelize.BelongsToCreateAssociationMixin<DomsFixingRule>;
  // PortLoanMov belongsTo DomsGlClass via glClass
  glClassDomsGlClass!: DomsGlClass;
  getGlClassDomsGlClass!: Sequelize.BelongsToGetAssociationMixin<DomsGlClass>;
  setGlClassDomsGlClass!: Sequelize.BelongsToSetAssociationMixin<DomsGlClass, DomsGlClassId>;
  createGlClassDomsGlClass!: Sequelize.BelongsToCreateAssociationMixin<DomsGlClass>;
  // PortLoanMov belongsTo DomsPenaltyCalcMethod via penaltyCalcMethod
  penaltyCalcMethodDomsPenaltyCalcMethod!: DomsPenaltyCalcMethod;
  getPenaltyCalcMethodDomsPenaltyCalcMethod!: Sequelize.BelongsToGetAssociationMixin<DomsPenaltyCalcMethod>;
  setPenaltyCalcMethodDomsPenaltyCalcMethod!: Sequelize.BelongsToSetAssociationMixin<DomsPenaltyCalcMethod, DomsPenaltyCalcMethodId>;
  createPenaltyCalcMethodDomsPenaltyCalcMethod!: Sequelize.BelongsToCreateAssociationMixin<DomsPenaltyCalcMethod>;
  // PortLoanMov belongsTo DomsPerformingStatus via performingStatus
  performingStatusDomsPerformingStatus!: DomsPerformingStatus;
  getPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToGetAssociationMixin<DomsPerformingStatus>;
  setPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToSetAssociationMixin<DomsPerformingStatus, DomsPerformingStatusId>;
  createPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToCreateAssociationMixin<DomsPerformingStatus>;
  // PortLoanMov belongsTo DomsRateType via fundingRateType
  fundingRateTypeDomsRateType!: DomsRateType;
  getFundingRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setFundingRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createFundingRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortLoanMov belongsTo DomsRateType via rateType
  rateTypeDomsRateType!: DomsRateType;
  getRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortLoanMov belongsTo DomsTaxStatus via interestIncomeTaxStatus
  interestIncomeTaxStatusDomsTaxStatus!: DomsTaxStatus;
  getInterestIncomeTaxStatusDomsTaxStatus!: Sequelize.BelongsToGetAssociationMixin<DomsTaxStatus>;
  setInterestIncomeTaxStatusDomsTaxStatus!: Sequelize.BelongsToSetAssociationMixin<DomsTaxStatus, DomsTaxStatusId>;
  createInterestIncomeTaxStatusDomsTaxStatus!: Sequelize.BelongsToCreateAssociationMixin<DomsTaxStatus>;
  // PortLoanMov belongsTo DomsTransferred via transferred
  transferredDomsTransferred!: DomsTransferred;
  getTransferredDomsTransferred!: Sequelize.BelongsToGetAssociationMixin<DomsTransferred>;
  setTransferredDomsTransferred!: Sequelize.BelongsToSetAssociationMixin<DomsTransferred, DomsTransferredId>;
  createTransferredDomsTransferred!: Sequelize.BelongsToCreateAssociationMixin<DomsTransferred>;
  // PortLoanMov belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortLoanMov belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortLoanMov belongsTo SysCountry via originationCountry
  originationCountrySysCountry!: SysCountry;
  getOriginationCountrySysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setOriginationCountrySysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createOriginationCountrySysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;
  // PortLoanMov belongsTo SysCurrency via residualValueCcy
  residualValueCcySysCurrency!: SysCurrency;
  getResidualValueCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setResidualValueCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createResidualValueCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortLoanMov belongsTo SysCurrency via fundingCcy
  fundingCcySysCurrency!: SysCurrency;
  getFundingCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setFundingCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createFundingCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortLoanMov belongsTo SysCurrency via notionalCcy
  notionalCcySysCurrency!: SysCurrency;
  getNotionalCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setNotionalCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createNotionalCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortLoanMov belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PortLoanMov belongsTo SysUnderlying via curveName
  curveNameSysUnderlying!: SysUnderlying;
  getCurveNameSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setCurveNameSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createCurveNameSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortLoanMov belongsTo SysUnderlying via fundingCurve
  fundingCurveSysUnderlying!: SysUnderlying;
  getFundingCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFundingCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFundingCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortLoanMov belongsTo SysUnderlying via discountCurveName
  discountCurveNameSysUnderlying!: SysUnderlying;
  getDiscountCurveNameSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setDiscountCurveNameSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createDiscountCurveNameSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortLoanMov belongsTo SysUnderlying via spreadCurveName
  spreadCurveNameSysUnderlying!: SysUnderlying;
  getSpreadCurveNameSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setSpreadCurveNameSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createSpreadCurveNameSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortLoanMov {
    return PortLoanMov.init({
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
    cashFlow: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'cash_flow'
    },
    participationFlag: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "FOR",
      field: 'participation_flag'
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
    excludeFromNetting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'exclude_from_netting'
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
    rateType: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'doms_rate_type',
        key: 'domain'
      },
      field: 'rate_type'
    },
    rateValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'rate_value'
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
    originalCreditSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'original_credit_spread'
    },
    actualCreditSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'actual_credit_spread'
    },
    floatIndexPercentage: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'float_index_percentage'
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
    spreadCurveName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'spread_curve_name'
    },
    spreadDiscountMethod: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_discount_method',
        key: 'domain'
      },
      field: 'spread_discount_method'
    },
    marketSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'market_spread'
    },
    multSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'mult_spread'
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
    interestFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NON",
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'interest_frequency'
    },
    interestFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'interest_frequency_unit'
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
    amortizingFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'amortizing_frequency'
    },
    amortizingFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'amortizing_frequency_unit'
    },
    initialYield: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'initial_yield'
    },
    yield: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    modDuration: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'mod_duration'
    },
    notionalCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'notional_ccy'
    },
    notional: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    accrual: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    provisions: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    outstanding: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    marketValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'market_value'
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
    interestAndCharges: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'interest_and_charges'
    },
    amortizingAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'amortizing_amount'
    },
    amortizingLastAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'amortizing_last_amount'
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
    capSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'cap_spread'
    },
    capMaturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'cap_maturity_date'
    },
    floor: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    floorSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'floor_spread'
    },
    floorMaturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'floor_maturity_date'
    },
    callDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'call_date'
    },
    putDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'put_date'
    },
    fee: {
      type: DataTypes.DECIMAL,
      allowNull: true
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
    fixingDayConvention: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "NODA",
      references: {
        model: 'doms_calc_day_convention',
        key: 'domain'
      },
      field: 'fixing_day_convention'
    },
    fixingCalendar: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'fixing_calendar'
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
    fixingCurrentValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fixing_current_value'
    },
    minMaturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'min_maturity_date'
    },
    maxMaturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'max_maturity_date'
    },
    originationDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'origination_date'
    },
    acquisitionDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'acquisition_date'
    },
    releasingDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'releasing_date'
    },
    lastPaymentDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'last_payment_date'
    },
    balloonDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'balloon_date'
    },
    repaymentRight: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'repayment_right'
    },
    prepayBeginDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'prepay_begin_date'
    },
    prepaymentFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NON",
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'prepayment_frequency'
    },
    prepaymentFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'prepayment_frequency_unit'
    },
    effectiveYield: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'effective_yield'
    },
    amortizedCost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'amortized_cost'
    },
    paymentDayValue: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'payment_day_value'
    },
    noticePeriod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'notice_period'
    },
    performingStatus: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "SAFE",
      references: {
        model: 'doms_performing_status',
        key: 'domain'
      },
      field: 'performing_status'
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
    rollOver: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'roll_over'
    },
    residualValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'residual_value'
    },
    residualValuePercentage: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'residual_value_percentage'
    },
    residualValueCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'residual_value_ccy'
    },
    feeAccrued: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fee_accrued'
    },
    transferrable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    transferred: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_transferred',
        key: 'domain'
      }
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
    interestIncomeTaxStatus: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'doms_tax_status',
        key: 'domain'
      },
      field: 'interest_income_tax_status'
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
    },
    fundingProvider: {
      type: DataTypes.STRING(5),
      allowNull: true,
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
      allowNull: true,
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
    tableName: 'port_loan_mov',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_LOAN_MOV",
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
    ]
  });
  }
}
