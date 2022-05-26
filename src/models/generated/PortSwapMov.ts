import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyBook, CompanyBookId } from './CompanyBook';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsAccrualBasis, DomsAccrualBasisId } from './DomsAccrualBasis';
import type { DomsBankingTrading, DomsBankingTradingId } from './DomsBankingTrading';
import type { DomsDerivativeMultiplierType, DomsDerivativeMultiplierTypeId } from './DomsDerivativeMultiplierType';
import type { DomsGlClass, DomsGlClassId } from './DomsGlClass';
import type { DomsPerformingStatus, DomsPerformingStatusId } from './DomsPerformingStatus';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { Product, ProductId } from './Product';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortSwapMovAttributes {
  referenceDate: string;
  movDescription: string;
  tradeDate: string;
  sourceSystem: string;
  productCode: string;
  contractReference: string;
  partOfStructure: boolean;
  structureReference?: string;
  invptyCode: number;
  companyCode: string;
  costCentre: string;
  bookCode: string;
  internalDeal: boolean;
  glClass: string;
  bankingTrading: string;
  excludeFromNetting: boolean;
  startDate: string;
  maturityDate: string;
  fwdStart: boolean;
  fwdStartCorrection: boolean;
  fwdStartCorrectionFixDate?: string;
  fwdStartCorrectionFxRate?: number;
  fwdStartCorrectionUnderlying: string;
  fwdStartCorrectionUnderlyingPerc?: number;
  crossBorder: boolean;
  underlyingRecLeg: string;
  underlyingCcyRecLeg: string;
  underlyingPayLeg: string;
  underlyingCcyPayLeg: string;
  currencyRecLeg: string;
  currencyPayLeg: string;
  floatIndexPercentageRecLeg?: number;
  floatIndexPercentagePayLeg?: number;
  yieldRecLeg?: number;
  yieldPayLeg?: number;
  accrualBasisRecLeg?: string;
  accrualBasisPayLeg?: string;
  fxRateRecLeg: number;
  fxRatePayLeg: number;
  multiplierTypeRecLeg?: string;
  multiplierTypePayLeg?: string;
  multiplierValueRecLeg?: number;
  multiplierValuePayLeg?: number;
  fixingStartDateRecLeg?: string;
  fixingStartDatePayLeg?: string;
  fixingNextDateRecLeg?: string;
  fixingNextDatePayLeg?: string;
  fixingSettlementDateRecLeg?: string;
  fixingSettlementDatePayLeg?: string;
  recDate?: string;
  payDate?: string;
  notionalInitialRecLeg: number;
  notionalInitialPayLeg: number;
  notionalRecLeg: number;
  notionalPayLeg: number;
  notionalOutstRecLeg: number;
  notionalOutstPayLeg: number;
  glValueRecLeg: number;
  glValuePayLeg: number;
  futureValueRecLeg: number;
  futureValuePayLeg: number;
  curveValueRecLeg: number;
  curveValuePayLeg: number;
  marketValueRecLeg: number;
  marketValuePayLeg: number;
  replacementCost: number;
  currencyMarketValue: string;
  modDurationRecLeg?: number;
  modDurationPayLeg?: number;
  performingStatus?: string;
  pastDueDays?: number;
  pastDueInstalments?: number;
  tradeTime?: string;
  fundingProvider: string;
  fundingRateType: string;
  fundingCurve: string;
  fundingCost: number;
  fundingCcy: string;
}

export type PortSwapMovPk = "referenceDate" | "movDescription" | "tradeDate" | "sourceSystem" | "productCode" | "contractReference";
export type PortSwapMovId = PortSwapMov[PortSwapMovPk];
export type PortSwapMovOptionalAttributes = "structureReference" | "fwdStartCorrectionFixDate" | "fwdStartCorrectionFxRate" | "fwdStartCorrectionUnderlyingPerc" | "floatIndexPercentageRecLeg" | "floatIndexPercentagePayLeg" | "yieldRecLeg" | "yieldPayLeg" | "accrualBasisRecLeg" | "accrualBasisPayLeg" | "multiplierTypeRecLeg" | "multiplierTypePayLeg" | "multiplierValueRecLeg" | "multiplierValuePayLeg" | "fixingStartDateRecLeg" | "fixingStartDatePayLeg" | "fixingNextDateRecLeg" | "fixingNextDatePayLeg" | "fixingSettlementDateRecLeg" | "fixingSettlementDatePayLeg" | "recDate" | "payDate" | "modDurationRecLeg" | "modDurationPayLeg" | "performingStatus" | "pastDueDays" | "pastDueInstalments" | "tradeTime";
export type PortSwapMovCreationAttributes = Optional<PortSwapMovAttributes, PortSwapMovOptionalAttributes>;

export class PortSwapMov extends Model<PortSwapMovAttributes, PortSwapMovCreationAttributes> implements PortSwapMovAttributes {
  referenceDate!: string;
  movDescription!: string;
  tradeDate!: string;
  sourceSystem!: string;
  productCode!: string;
  contractReference!: string;
  partOfStructure!: boolean;
  structureReference?: string;
  invptyCode!: number;
  companyCode!: string;
  costCentre!: string;
  bookCode!: string;
  internalDeal!: boolean;
  glClass!: string;
  bankingTrading!: string;
  excludeFromNetting!: boolean;
  startDate!: string;
  maturityDate!: string;
  fwdStart!: boolean;
  fwdStartCorrection!: boolean;
  fwdStartCorrectionFixDate?: string;
  fwdStartCorrectionFxRate?: number;
  fwdStartCorrectionUnderlying!: string;
  fwdStartCorrectionUnderlyingPerc?: number;
  crossBorder!: boolean;
  underlyingRecLeg!: string;
  underlyingCcyRecLeg!: string;
  underlyingPayLeg!: string;
  underlyingCcyPayLeg!: string;
  currencyRecLeg!: string;
  currencyPayLeg!: string;
  floatIndexPercentageRecLeg?: number;
  floatIndexPercentagePayLeg?: number;
  yieldRecLeg?: number;
  yieldPayLeg?: number;
  accrualBasisRecLeg?: string;
  accrualBasisPayLeg?: string;
  fxRateRecLeg!: number;
  fxRatePayLeg!: number;
  multiplierTypeRecLeg?: string;
  multiplierTypePayLeg?: string;
  multiplierValueRecLeg?: number;
  multiplierValuePayLeg?: number;
  fixingStartDateRecLeg?: string;
  fixingStartDatePayLeg?: string;
  fixingNextDateRecLeg?: string;
  fixingNextDatePayLeg?: string;
  fixingSettlementDateRecLeg?: string;
  fixingSettlementDatePayLeg?: string;
  recDate?: string;
  payDate?: string;
  notionalInitialRecLeg!: number;
  notionalInitialPayLeg!: number;
  notionalRecLeg!: number;
  notionalPayLeg!: number;
  notionalOutstRecLeg!: number;
  notionalOutstPayLeg!: number;
  glValueRecLeg!: number;
  glValuePayLeg!: number;
  futureValueRecLeg!: number;
  futureValuePayLeg!: number;
  curveValueRecLeg!: number;
  curveValuePayLeg!: number;
  marketValueRecLeg!: number;
  marketValuePayLeg!: number;
  replacementCost!: number;
  currencyMarketValue!: string;
  modDurationRecLeg?: number;
  modDurationPayLeg?: number;
  performingStatus?: string;
  pastDueDays?: number;
  pastDueInstalments?: number;
  tradeTime?: string;
  fundingProvider!: string;
  fundingRateType!: string;
  fundingCurve!: string;
  fundingCost!: number;
  fundingCcy!: string;

  // PortSwapMov belongsTo CompanyBook via bookCode
  bookCodeCompanyBook!: CompanyBook;
  getBookCodeCompanyBook!: Sequelize.BelongsToGetAssociationMixin<CompanyBook>;
  setBookCodeCompanyBook!: Sequelize.BelongsToSetAssociationMixin<CompanyBook, CompanyBookId>;
  createBookCodeCompanyBook!: Sequelize.BelongsToCreateAssociationMixin<CompanyBook>;
  // PortSwapMov belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortSwapMov belongsTo CompanyCostCentre via fundingProvider
  fundingProviderCompanyCostCentre!: CompanyCostCentre;
  getFundingProviderCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setFundingProviderCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createFundingProviderCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortSwapMov belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortSwapMov belongsTo DomsAccrualBasis via accrualBasisRecLeg
  accrualBasisRecLegDomsAccrualBasis!: DomsAccrualBasis;
  getAccrualBasisRecLegDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setAccrualBasisRecLegDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createAccrualBasisRecLegDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PortSwapMov belongsTo DomsAccrualBasis via accrualBasisPayLeg
  accrualBasisPayLegDomsAccrualBasis!: DomsAccrualBasis;
  getAccrualBasisPayLegDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setAccrualBasisPayLegDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createAccrualBasisPayLegDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PortSwapMov belongsTo DomsBankingTrading via bankingTrading
  bankingTradingDomsBankingTrading!: DomsBankingTrading;
  getBankingTradingDomsBankingTrading!: Sequelize.BelongsToGetAssociationMixin<DomsBankingTrading>;
  setBankingTradingDomsBankingTrading!: Sequelize.BelongsToSetAssociationMixin<DomsBankingTrading, DomsBankingTradingId>;
  createBankingTradingDomsBankingTrading!: Sequelize.BelongsToCreateAssociationMixin<DomsBankingTrading>;
  // PortSwapMov belongsTo DomsDerivativeMultiplierType via multiplierTypeRecLeg
  multiplierTypeRecLegDomsDerivativeMultiplierType!: DomsDerivativeMultiplierType;
  getMultiplierTypeRecLegDomsDerivativeMultiplierType!: Sequelize.BelongsToGetAssociationMixin<DomsDerivativeMultiplierType>;
  setMultiplierTypeRecLegDomsDerivativeMultiplierType!: Sequelize.BelongsToSetAssociationMixin<DomsDerivativeMultiplierType, DomsDerivativeMultiplierTypeId>;
  createMultiplierTypeRecLegDomsDerivativeMultiplierType!: Sequelize.BelongsToCreateAssociationMixin<DomsDerivativeMultiplierType>;
  // PortSwapMov belongsTo DomsDerivativeMultiplierType via multiplierTypePayLeg
  multiplierTypePayLegDomsDerivativeMultiplierType!: DomsDerivativeMultiplierType;
  getMultiplierTypePayLegDomsDerivativeMultiplierType!: Sequelize.BelongsToGetAssociationMixin<DomsDerivativeMultiplierType>;
  setMultiplierTypePayLegDomsDerivativeMultiplierType!: Sequelize.BelongsToSetAssociationMixin<DomsDerivativeMultiplierType, DomsDerivativeMultiplierTypeId>;
  createMultiplierTypePayLegDomsDerivativeMultiplierType!: Sequelize.BelongsToCreateAssociationMixin<DomsDerivativeMultiplierType>;
  // PortSwapMov belongsTo DomsGlClass via glClass
  glClassDomsGlClass!: DomsGlClass;
  getGlClassDomsGlClass!: Sequelize.BelongsToGetAssociationMixin<DomsGlClass>;
  setGlClassDomsGlClass!: Sequelize.BelongsToSetAssociationMixin<DomsGlClass, DomsGlClassId>;
  createGlClassDomsGlClass!: Sequelize.BelongsToCreateAssociationMixin<DomsGlClass>;
  // PortSwapMov belongsTo DomsPerformingStatus via performingStatus
  performingStatusDomsPerformingStatus!: DomsPerformingStatus;
  getPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToGetAssociationMixin<DomsPerformingStatus>;
  setPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToSetAssociationMixin<DomsPerformingStatus, DomsPerformingStatusId>;
  createPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToCreateAssociationMixin<DomsPerformingStatus>;
  // PortSwapMov belongsTo DomsRateType via fundingRateType
  fundingRateTypeDomsRateType!: DomsRateType;
  getFundingRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setFundingRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createFundingRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortSwapMov belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortSwapMov belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortSwapMov belongsTo SysCurrency via currencyMarketValue
  currencyMarketValueSysCurrency!: SysCurrency;
  getCurrencyMarketValueSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyMarketValueSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyMarketValueSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortSwapMov belongsTo SysCurrency via currencyPayLeg
  currencyPayLegSysCurrency!: SysCurrency;
  getCurrencyPayLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyPayLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyPayLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortSwapMov belongsTo SysCurrency via currencyRecLeg
  currencyRecLegSysCurrency!: SysCurrency;
  getCurrencyRecLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyRecLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyRecLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortSwapMov belongsTo SysCurrency via fundingCcy
  fundingCcySysCurrency!: SysCurrency;
  getFundingCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setFundingCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createFundingCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortSwapMov belongsTo SysCurrency via underlyingCcyPayLeg
  underlyingCcyPayLegSysCurrency!: SysCurrency;
  getUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortSwapMov belongsTo SysCurrency via underlyingCcyRecLeg
  underlyingCcyRecLegSysCurrency!: SysCurrency;
  getUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortSwapMov belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PortSwapMov belongsTo SysUnderlying via underlyingPayLeg
  underlyingPayLegSysUnderlying!: SysUnderlying;
  getUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortSwapMov belongsTo SysUnderlying via fwdStartCorrectionUnderlying
  fwdStartCorrectionUnderlyingSysUnderlying!: SysUnderlying;
  getFwdStartCorrectionUnderlyingSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFwdStartCorrectionUnderlyingSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFwdStartCorrectionUnderlyingSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortSwapMov belongsTo SysUnderlying via fundingCurve
  fundingCurveSysUnderlying!: SysUnderlying;
  getFundingCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFundingCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFundingCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortSwapMov belongsTo SysUnderlying via underlyingRecLeg
  underlyingRecLegSysUnderlying!: SysUnderlying;
  getUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortSwapMov {
    return PortSwapMov.init({
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
    invptyCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_code'
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
    fwdStart: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'fwd_start'
    },
    fwdStartCorrection: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'fwd_start_correction'
    },
    fwdStartCorrectionFixDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fwd_start_correction_fix_date'
    },
    fwdStartCorrectionFxRate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fwd_start_correction_fx_rate'
    },
    fwdStartCorrectionUnderlying: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'fwd_start_correction_underlying'
    },
    fwdStartCorrectionUnderlyingPerc: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fwd_start_correction_underlying_perc'
    },
    crossBorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'cross_border'
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
    underlyingCcyRecLeg: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'underlying_ccy_rec_leg'
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
    underlyingCcyPayLeg: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'underlying_ccy_pay_leg'
    },
    currencyRecLeg: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'currency_rec_leg'
    },
    currencyPayLeg: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'currency_pay_leg'
    },
    floatIndexPercentageRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'float_index_percentage_rec_leg'
    },
    floatIndexPercentagePayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'float_index_percentage_pay_leg'
    },
    yieldRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'yield_rec_leg'
    },
    yieldPayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'yield_pay_leg'
    },
    accrualBasisRecLeg: {
      type: DataTypes.STRING(7),
      allowNull: true,
      references: {
        model: 'doms_accrual_basis',
        key: 'domain'
      },
      field: 'accrual_basis_rec_leg'
    },
    accrualBasisPayLeg: {
      type: DataTypes.STRING(7),
      allowNull: true,
      references: {
        model: 'doms_accrual_basis',
        key: 'domain'
      },
      field: 'accrual_basis_pay_leg'
    },
    fxRateRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'fx_rate_rec_leg'
    },
    fxRatePayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'fx_rate_pay_leg'
    },
    multiplierTypeRecLeg: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "NON",
      references: {
        model: 'doms_derivative_multiplier_type',
        key: 'domain'
      },
      field: 'multiplier_type_rec_leg'
    },
    multiplierTypePayLeg: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "NON",
      references: {
        model: 'doms_derivative_multiplier_type',
        key: 'domain'
      },
      field: 'multiplier_type_pay_leg'
    },
    multiplierValueRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'multiplier_value_rec_leg'
    },
    multiplierValuePayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'multiplier_value_pay_leg'
    },
    fixingStartDateRecLeg: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_start_date_rec_leg'
    },
    fixingStartDatePayLeg: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_start_date_pay_leg'
    },
    fixingNextDateRecLeg: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_next_date_rec_leg'
    },
    fixingNextDatePayLeg: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_next_date_pay_leg'
    },
    fixingSettlementDateRecLeg: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_settlement_date_rec_leg'
    },
    fixingSettlementDatePayLeg: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_settlement_date_pay_leg'
    },
    recDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'rec_date'
    },
    payDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'pay_date'
    },
    notionalInitialRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'notional_initial_rec_leg'
    },
    notionalInitialPayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'notional_initial_pay_leg'
    },
    notionalRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'notional_rec_leg'
    },
    notionalPayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'notional_pay_leg'
    },
    notionalOutstRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'notional_outst_rec_leg'
    },
    notionalOutstPayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'notional_outst_pay_leg'
    },
    glValueRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'gl_value_rec_leg'
    },
    glValuePayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'gl_value_pay_leg'
    },
    futureValueRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'future_value_rec_leg'
    },
    futureValuePayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'future_value_pay_leg'
    },
    curveValueRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'curve_value_rec_leg'
    },
    curveValuePayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'curve_value_pay_leg'
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
    replacementCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'replacement_cost'
    },
    currencyMarketValue: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'currency_market_value'
    },
    modDurationRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'mod_duration_rec_leg'
    },
    modDurationPayLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'mod_duration_pay_leg'
    },
    performingStatus: {
      type: DataTypes.STRING(6),
      allowNull: true,
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
    pastDueInstalments: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'past_due_instalments'
    },
    tradeTime: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'trade_time'
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
    tableName: 'port_swap_mov',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_SWAP_MOV",
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
        name: "port_swap_mov_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
