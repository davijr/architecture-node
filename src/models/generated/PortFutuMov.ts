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
import type { Product, ProductId } from './Product';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortFutuMovAttributes {
  referenceDate: string;
  movDescription: string;
  tradeDate: string;
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

export type PortFutuMovPk = "referenceDate" | "movDescription" | "tradeDate" | "sourceSystem" | "productCode" | "contractReference" | "longShort";
export type PortFutuMovId = PortFutuMov[PortFutuMovPk];
export type PortFutuMovOptionalAttributes = "fixingSettlementDate" | "futureDeliveryDate" | "payDate" | "recDate" | "maturityCode" | "isinCode" | "notionalPeriodicity" | "agreedSettlementValue" | "futureStlm" | "deliveryType" | "marginType" | "holdingPeriod";
export type PortFutuMovCreationAttributes = Optional<PortFutuMovAttributes, PortFutuMovOptionalAttributes>;

export class PortFutuMov extends Model<PortFutuMovAttributes, PortFutuMovCreationAttributes> implements PortFutuMovAttributes {
  referenceDate!: string;
  movDescription!: string;
  tradeDate!: string;
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

  // PortFutuMov belongsTo CompanyBook via bookCode
  bookCodeCompanyBook!: CompanyBook;
  getBookCodeCompanyBook!: Sequelize.BelongsToGetAssociationMixin<CompanyBook>;
  setBookCodeCompanyBook!: Sequelize.BelongsToSetAssociationMixin<CompanyBook, CompanyBookId>;
  createBookCodeCompanyBook!: Sequelize.BelongsToCreateAssociationMixin<CompanyBook>;
  // PortFutuMov belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortFutuMov belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortFutuMov belongsTo CompanyCostCentre via fundingProvider
  fundingProviderCompanyCostCentre!: CompanyCostCentre;
  getFundingProviderCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setFundingProviderCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createFundingProviderCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortFutuMov belongsTo DomsAccrualBasis via accrualBasisNotional
  accrualBasisNotionalDomsAccrualBasis!: DomsAccrualBasis;
  getAccrualBasisNotionalDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setAccrualBasisNotionalDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createAccrualBasisNotionalDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PortFutuMov belongsTo DomsBankingTrading via bankingTrading
  bankingTradingDomsBankingTrading!: DomsBankingTrading;
  getBankingTradingDomsBankingTrading!: Sequelize.BelongsToGetAssociationMixin<DomsBankingTrading>;
  setBankingTradingDomsBankingTrading!: Sequelize.BelongsToSetAssociationMixin<DomsBankingTrading, DomsBankingTradingId>;
  createBankingTradingDomsBankingTrading!: Sequelize.BelongsToCreateAssociationMixin<DomsBankingTrading>;
  // PortFutuMov belongsTo DomsCalcFrequency via notionalPeriodicity
  notionalPeriodicityDomsCalcFrequency!: DomsCalcFrequency;
  getNotionalPeriodicityDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setNotionalPeriodicityDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createNotionalPeriodicityDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortFutuMov belongsTo DomsCcpExposureType via ccpExposureType
  ccpExposureTypeDomsCcpExposureType!: DomsCcpExposureType;
  getCcpExposureTypeDomsCcpExposureType!: Sequelize.BelongsToGetAssociationMixin<DomsCcpExposureType>;
  setCcpExposureTypeDomsCcpExposureType!: Sequelize.BelongsToSetAssociationMixin<DomsCcpExposureType, DomsCcpExposureTypeId>;
  createCcpExposureTypeDomsCcpExposureType!: Sequelize.BelongsToCreateAssociationMixin<DomsCcpExposureType>;
  // PortFutuMov belongsTo DomsDeliveryType via deliveryType
  deliveryTypeDomsDeliveryType!: DomsDeliveryType;
  getDeliveryTypeDomsDeliveryType!: Sequelize.BelongsToGetAssociationMixin<DomsDeliveryType>;
  setDeliveryTypeDomsDeliveryType!: Sequelize.BelongsToSetAssociationMixin<DomsDeliveryType, DomsDeliveryTypeId>;
  createDeliveryTypeDomsDeliveryType!: Sequelize.BelongsToCreateAssociationMixin<DomsDeliveryType>;
  // PortFutuMov belongsTo DomsGlClass via glClass
  glClassDomsGlClass!: DomsGlClass;
  getGlClassDomsGlClass!: Sequelize.BelongsToGetAssociationMixin<DomsGlClass>;
  setGlClassDomsGlClass!: Sequelize.BelongsToSetAssociationMixin<DomsGlClass, DomsGlClassId>;
  createGlClassDomsGlClass!: Sequelize.BelongsToCreateAssociationMixin<DomsGlClass>;
  // PortFutuMov belongsTo DomsLongShort via longShort
  longShortDomsLongShort!: DomsLongShort;
  getLongShortDomsLongShort!: Sequelize.BelongsToGetAssociationMixin<DomsLongShort>;
  setLongShortDomsLongShort!: Sequelize.BelongsToSetAssociationMixin<DomsLongShort, DomsLongShortId>;
  createLongShortDomsLongShort!: Sequelize.BelongsToCreateAssociationMixin<DomsLongShort>;
  // PortFutuMov belongsTo DomsMarginType via marginType
  marginTypeDomsMarginType!: DomsMarginType;
  getMarginTypeDomsMarginType!: Sequelize.BelongsToGetAssociationMixin<DomsMarginType>;
  setMarginTypeDomsMarginType!: Sequelize.BelongsToSetAssociationMixin<DomsMarginType, DomsMarginTypeId>;
  createMarginTypeDomsMarginType!: Sequelize.BelongsToCreateAssociationMixin<DomsMarginType>;
  // PortFutuMov belongsTo DomsRateType via fundingRateType
  fundingRateTypeDomsRateType!: DomsRateType;
  getFundingRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setFundingRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createFundingRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortFutuMov belongsTo DomsSettlementMode via futureStlm
  futureStlmDomsSettlementMode!: DomsSettlementMode;
  getFutureStlmDomsSettlementMode!: Sequelize.BelongsToGetAssociationMixin<DomsSettlementMode>;
  setFutureStlmDomsSettlementMode!: Sequelize.BelongsToSetAssociationMixin<DomsSettlementMode, DomsSettlementModeId>;
  createFutureStlmDomsSettlementMode!: Sequelize.BelongsToCreateAssociationMixin<DomsSettlementMode>;
  // PortFutuMov belongsTo DomsUnderlyingFamily via underlyingFamily
  underlyingFamilyDomsUnderlyingFamily!: DomsUnderlyingFamily;
  getUnderlyingFamilyDomsUnderlyingFamily!: Sequelize.BelongsToGetAssociationMixin<DomsUnderlyingFamily>;
  setUnderlyingFamilyDomsUnderlyingFamily!: Sequelize.BelongsToSetAssociationMixin<DomsUnderlyingFamily, DomsUnderlyingFamilyId>;
  createUnderlyingFamilyDomsUnderlyingFamily!: Sequelize.BelongsToCreateAssociationMixin<DomsUnderlyingFamily>;
  // PortFutuMov belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortFutuMov belongsTo InvptyDet via exchangeCode
  exchangeCodeInvptyDet!: InvptyDet;
  getExchangeCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setExchangeCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createExchangeCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortFutuMov belongsTo InvptyDet via ccpCmCode
  ccpCmCodeInvptyDet!: InvptyDet;
  getCcpCmCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setCcpCmCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createCcpCmCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortFutuMov belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortFutuMov belongsTo SysCurrency via initialMarginDepositCcy
  initialMarginDepositCcySysCurrency!: SysCurrency;
  getInitialMarginDepositCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setInitialMarginDepositCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createInitialMarginDepositCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuMov belongsTo SysCurrency via fundingCcy
  fundingCcySysCurrency!: SysCurrency;
  getFundingCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setFundingCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createFundingCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuMov belongsTo SysCurrency via underlyingCcyRecLeg
  underlyingCcyRecLegSysCurrency!: SysCurrency;
  getUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuMov belongsTo SysCurrency via additionalCostCcy
  additionalCostCcySysCurrency!: SysCurrency;
  getAdditionalCostCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setAdditionalCostCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createAdditionalCostCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuMov belongsTo SysCurrency via notionalPositionCcy
  notionalPositionCcySysCurrency!: SysCurrency;
  getNotionalPositionCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setNotionalPositionCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createNotionalPositionCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuMov belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuMov belongsTo SysCurrency via marketValueCcy
  marketValueCcySysCurrency!: SysCurrency;
  getMarketValueCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setMarketValueCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createMarketValueCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuMov belongsTo SysCurrency via underlyingCcyPayLeg
  underlyingCcyPayLegSysCurrency!: SysCurrency;
  getUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFutuMov belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PortFutuMov belongsTo SysUnderlying via underlyingSecurity
  underlyingSecuritySysUnderlying!: SysUnderlying;
  getUnderlyingSecuritySysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingSecuritySysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingSecuritySysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortFutuMov belongsTo SysUnderlying via underlyingRecLeg
  underlyingRecLegSysUnderlying!: SysUnderlying;
  getUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortFutuMov belongsTo SysUnderlying via fundingCurve
  fundingCurveSysUnderlying!: SysUnderlying;
  getFundingCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFundingCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFundingCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortFutuMov belongsTo SysUnderlying via underlyingPayLeg
  underlyingPayLegSysUnderlying!: SysUnderlying;
  getUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortFutuMov {
    return PortFutuMov.init({
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
    tableName: 'port_futu_mov',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_FUTU_MOV",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "mov_description" },
          { name: "trade_date" },
          { name: "source_system" },
          { name: "product_code" },
          { name: "contract_reference" },
          { name: "long_short" },
        ]
      },
      {
        name: "port_futu_mov_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
