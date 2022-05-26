import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyBook, CompanyBookId } from './CompanyBook';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsAccrualBasis, DomsAccrualBasisId } from './DomsAccrualBasis';
import type { DomsBankingTrading, DomsBankingTradingId } from './DomsBankingTrading';
import type { DomsCcpExposureType, DomsCcpExposureTypeId } from './DomsCcpExposureType';
import type { DomsClientProprietary, DomsClientProprietaryId } from './DomsClientProprietary';
import type { DomsFixingRule, DomsFixingRuleId } from './DomsFixingRule';
import type { DomsGlClass, DomsGlClassId } from './DomsGlClass';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortRepoMovAttributes {
  referenceDate: string;
  movDescription: string;
  tradeDate: string;
  sourceSystem: string;
  productCode: string;
  contractReference: string;
  invptyCode: number;
  companyCode: string;
  costCentre: string;
  bookCode: string;
  internalDeal: boolean;
  glClass: string;
  bankingTrading: string;
  excludeFromNetting: boolean;
  fwdStart: boolean;
  fwdStartCorrection: boolean;
  fwdStartCorrectionFixDate?: string;
  fwdStartCorrectionUnderlying: string;
  fwdStartCorrectionUnderlyingPerc?: number;
  startDate: string;
  openMaturity: boolean;
  maturityDate: string;
  crossBorder: boolean;
  clientProprietary: string;
  rateTypeCashLeg: string;
  rateValueCashLeg?: number;
  floatIndexPercentageCashLeg?: number;
  curveNameCashLeg: string;
  initialYieldCashLeg?: number;
  fixingNextDate?: string;
  fixingCurrentValue?: number;
  fixingRuleCashLeg: string;
  rateMarketConventionId?: number;
  accrualBasisCashLeg: string;
  cashLegCcy: string;
  notionalCashLeg?: number;
  interestRateCashLeg?: number;
  notionalPlusAccrualsCashLeg?: number;
  fairValueCashLeg?: number;
  amortizedCostCashLeg?: number;
  notionalSecurityLeg?: number;
  fairValueSecurityLeg?: number;
  fee?: number;
  feeAccrued?: number;
  pastDueDays?: number;
  ccpExposureType: string;
  ccpCmCode?: number;
  fundingProvider?: string;
  fundingRateType?: string;
  fundingCurve: string;
  fundingCost?: number;
  fundingCcy?: string;
}

export type PortRepoMovPk = "referenceDate" | "movDescription" | "tradeDate" | "sourceSystem" | "productCode" | "contractReference";
export type PortRepoMovId = PortRepoMov[PortRepoMovPk];
export type PortRepoMovOptionalAttributes = "fwdStartCorrectionFixDate" | "fwdStartCorrectionUnderlyingPerc" | "clientProprietary" | "rateValueCashLeg" | "floatIndexPercentageCashLeg" | "initialYieldCashLeg" | "fixingNextDate" | "fixingCurrentValue" | "fixingRuleCashLeg" | "rateMarketConventionId" | "notionalCashLeg" | "interestRateCashLeg" | "notionalPlusAccrualsCashLeg" | "fairValueCashLeg" | "amortizedCostCashLeg" | "notionalSecurityLeg" | "fairValueSecurityLeg" | "fee" | "feeAccrued" | "pastDueDays" | "ccpCmCode" | "fundingProvider" | "fundingRateType" | "fundingCost" | "fundingCcy";
export type PortRepoMovCreationAttributes = Optional<PortRepoMovAttributes, PortRepoMovOptionalAttributes>;

export class PortRepoMov extends Model<PortRepoMovAttributes, PortRepoMovCreationAttributes> implements PortRepoMovAttributes {
  referenceDate!: string;
  movDescription!: string;
  tradeDate!: string;
  sourceSystem!: string;
  productCode!: string;
  contractReference!: string;
  invptyCode!: number;
  companyCode!: string;
  costCentre!: string;
  bookCode!: string;
  internalDeal!: boolean;
  glClass!: string;
  bankingTrading!: string;
  excludeFromNetting!: boolean;
  fwdStart!: boolean;
  fwdStartCorrection!: boolean;
  fwdStartCorrectionFixDate?: string;
  fwdStartCorrectionUnderlying!: string;
  fwdStartCorrectionUnderlyingPerc?: number;
  startDate!: string;
  openMaturity!: boolean;
  maturityDate!: string;
  crossBorder!: boolean;
  clientProprietary!: string;
  rateTypeCashLeg!: string;
  rateValueCashLeg?: number;
  floatIndexPercentageCashLeg?: number;
  curveNameCashLeg!: string;
  initialYieldCashLeg?: number;
  fixingNextDate?: string;
  fixingCurrentValue?: number;
  fixingRuleCashLeg!: string;
  rateMarketConventionId?: number;
  accrualBasisCashLeg!: string;
  cashLegCcy!: string;
  notionalCashLeg?: number;
  interestRateCashLeg?: number;
  notionalPlusAccrualsCashLeg?: number;
  fairValueCashLeg?: number;
  amortizedCostCashLeg?: number;
  notionalSecurityLeg?: number;
  fairValueSecurityLeg?: number;
  fee?: number;
  feeAccrued?: number;
  pastDueDays?: number;
  ccpExposureType!: string;
  ccpCmCode?: number;
  fundingProvider?: string;
  fundingRateType?: string;
  fundingCurve!: string;
  fundingCost?: number;
  fundingCcy?: string;

  // PortRepoMov belongsTo CompanyBook via bookCode
  bookCodeCompanyBook!: CompanyBook;
  getBookCodeCompanyBook!: Sequelize.BelongsToGetAssociationMixin<CompanyBook>;
  setBookCodeCompanyBook!: Sequelize.BelongsToSetAssociationMixin<CompanyBook, CompanyBookId>;
  createBookCodeCompanyBook!: Sequelize.BelongsToCreateAssociationMixin<CompanyBook>;
  // PortRepoMov belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortRepoMov belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortRepoMov belongsTo DomsAccrualBasis via accrualBasisCashLeg
  accrualBasisCashLegDomsAccrualBasis!: DomsAccrualBasis;
  getAccrualBasisCashLegDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setAccrualBasisCashLegDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createAccrualBasisCashLegDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PortRepoMov belongsTo DomsBankingTrading via bankingTrading
  bankingTradingDomsBankingTrading!: DomsBankingTrading;
  getBankingTradingDomsBankingTrading!: Sequelize.BelongsToGetAssociationMixin<DomsBankingTrading>;
  setBankingTradingDomsBankingTrading!: Sequelize.BelongsToSetAssociationMixin<DomsBankingTrading, DomsBankingTradingId>;
  createBankingTradingDomsBankingTrading!: Sequelize.BelongsToCreateAssociationMixin<DomsBankingTrading>;
  // PortRepoMov belongsTo DomsCcpExposureType via ccpExposureType
  ccpExposureTypeDomsCcpExposureType!: DomsCcpExposureType;
  getCcpExposureTypeDomsCcpExposureType!: Sequelize.BelongsToGetAssociationMixin<DomsCcpExposureType>;
  setCcpExposureTypeDomsCcpExposureType!: Sequelize.BelongsToSetAssociationMixin<DomsCcpExposureType, DomsCcpExposureTypeId>;
  createCcpExposureTypeDomsCcpExposureType!: Sequelize.BelongsToCreateAssociationMixin<DomsCcpExposureType>;
  // PortRepoMov belongsTo DomsClientProprietary via clientProprietary
  clientProprietaryDomsClientProprietary!: DomsClientProprietary;
  getClientProprietaryDomsClientProprietary!: Sequelize.BelongsToGetAssociationMixin<DomsClientProprietary>;
  setClientProprietaryDomsClientProprietary!: Sequelize.BelongsToSetAssociationMixin<DomsClientProprietary, DomsClientProprietaryId>;
  createClientProprietaryDomsClientProprietary!: Sequelize.BelongsToCreateAssociationMixin<DomsClientProprietary>;
  // PortRepoMov belongsTo DomsFixingRule via fixingRuleCashLeg
  fixingRuleCashLegDomsFixingRule!: DomsFixingRule;
  getFixingRuleCashLegDomsFixingRule!: Sequelize.BelongsToGetAssociationMixin<DomsFixingRule>;
  setFixingRuleCashLegDomsFixingRule!: Sequelize.BelongsToSetAssociationMixin<DomsFixingRule, DomsFixingRuleId>;
  createFixingRuleCashLegDomsFixingRule!: Sequelize.BelongsToCreateAssociationMixin<DomsFixingRule>;
  // PortRepoMov belongsTo DomsGlClass via glClass
  glClassDomsGlClass!: DomsGlClass;
  getGlClassDomsGlClass!: Sequelize.BelongsToGetAssociationMixin<DomsGlClass>;
  setGlClassDomsGlClass!: Sequelize.BelongsToSetAssociationMixin<DomsGlClass, DomsGlClassId>;
  createGlClassDomsGlClass!: Sequelize.BelongsToCreateAssociationMixin<DomsGlClass>;
  // PortRepoMov belongsTo DomsRateType via rateTypeCashLeg
  rateTypeCashLegDomsRateType!: DomsRateType;
  getRateTypeCashLegDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setRateTypeCashLegDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createRateTypeCashLegDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortRepoMov belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortRepoMov belongsTo SysCurrency via cashLegCcy
  cashLegCcySysCurrency!: SysCurrency;
  getCashLegCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCashLegCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCashLegCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortRepoMov belongsTo SysUnderlying via fwdStartCorrectionUnderlying
  fwdStartCorrectionUnderlyingSysUnderlying!: SysUnderlying;
  getFwdStartCorrectionUnderlyingSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFwdStartCorrectionUnderlyingSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFwdStartCorrectionUnderlyingSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortRepoMov belongsTo SysUnderlying via curveNameCashLeg
  curveNameCashLegSysUnderlying!: SysUnderlying;
  getCurveNameCashLegSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setCurveNameCashLegSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createCurveNameCashLegSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortRepoMov belongsTo SysUnderlying via fundingCurve
  fundingCurveSysUnderlying!: SysUnderlying;
  getFundingCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFundingCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFundingCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortRepoMov {
    return PortRepoMov.init({
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
      field: 'source_system'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      field: 'product_code'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'contract_reference'
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
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'start_date'
    },
    openMaturity: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'open_maturity'
    },
    maturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'maturity_date'
    },
    crossBorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'cross_border'
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
    rateTypeCashLeg: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'doms_rate_type',
        key: 'domain'
      },
      field: 'rate_type_cash_leg'
    },
    rateValueCashLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'rate_value_cash_leg'
    },
    floatIndexPercentageCashLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'float_index_percentage_cash_leg'
    },
    curveNameCashLeg: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'curve_name_cash_leg'
    },
    initialYieldCashLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'initial_yield_cash_leg'
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
    fixingRuleCashLeg: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "CFR",
      references: {
        model: 'doms_fixing_rule',
        key: 'domain'
      },
      field: 'fixing_rule_cash_leg'
    },
    rateMarketConventionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'rate_market_convention_id'
    },
    accrualBasisCashLeg: {
      type: DataTypes.STRING(7),
      allowNull: false,
      references: {
        model: 'doms_accrual_basis',
        key: 'domain'
      },
      field: 'accrual_basis_cash_leg'
    },
    cashLegCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'cash_leg_ccy'
    },
    notionalCashLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'notional_cash_leg'
    },
    interestRateCashLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'interest_rate_cash_leg'
    },
    notionalPlusAccrualsCashLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'notional_plus_accruals_cash_leg'
    },
    fairValueCashLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fair_value_cash_leg'
    },
    amortizedCostCashLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'amortized_cost_cash_leg'
    },
    notionalSecurityLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'notional_security_leg'
    },
    fairValueSecurityLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fair_value_security_leg'
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
    pastDueDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'past_due_days'
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
    ccpCmCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'ccp_cm_code'
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
    tableName: 'port_repo_mov',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_REPO_MOV",
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
        name: "port_repo_mov_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
