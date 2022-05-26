import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsAccrualBasis, DomsAccrualBasisId } from './DomsAccrualBasis';
import type { DomsCalcFrequency, DomsCalcFrequencyId } from './DomsCalcFrequency';
import type { DomsFairValueOption, DomsFairValueOptionId } from './DomsFairValueOption';
import type { DomsForbearanceMeasures, DomsForbearanceMeasuresId } from './DomsForbearanceMeasures';
import type { DomsParticipationFlag, DomsParticipationFlagId } from './DomsParticipationFlag';
import type { DomsPerformingStatus, DomsPerformingStatusId } from './DomsPerformingStatus';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { DomsSubType, DomsSubTypeId } from './DomsSubType';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { Product, ProductId } from './Product';
import type { SysCountry, SysCountryId } from './SysCountry';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortGuarPosAttributes {
  referenceDate: string;
  sourceSystem: string;
  productCode: string;
  contractReference: string;
  firstContractReference?: string;
  companyCode: string;
  costCentre: string;
  obligorCode: number;
  beneficiaryCode: number;
  finalBeneficiary: number;
  participationFlag: string;
  cashFlow: boolean;
  subType: string;
  tradeDate?: string;
  startDate?: string;
  maturityDate?: string;
  notional?: number;
  notionalOutstanding?: number;
  notionalUpdateRateType: string;
  notionalUpdateFixedRate?: number;
  notionalUpdateIndex: string;
  notionalUpdateIndexPercent?: number;
  notionalUpdateTenorFrequency: string;
  notionalUpdateTenorFrequencyUnit?: number;
  notionalUpdateAccrualBasis: string;
  notionalUpdateFrequency: string;
  notionalUpdateFrequencyUnit?: number;
  notionalUpdateNextDate?: string;
  notionalUpdateLastDate?: string;
  effectiveYield?: number;
  originalCost?: number;
  fairValue?: number;
  fairValueAccumChanges?: number;
  fairValueOption: string;
  currencyCode: string;
  outstanding?: number;
  amortizedCost?: number;
  recourse: boolean;
  rollOver: boolean;
  acquisitionDate?: string;
  purchasedInDefault: boolean;
  transferrable: boolean;
  originationCountry: string;
  unrealizedGainLoss?: number;
  repaymentRight: boolean;
  forbearanceMeasures: string;
  forbearanceDate?: string;
  performingStatus: string;
  performingStatusChangeDate?: string;
  pastDueDays?: number;
  pastDueInstallments?: number;
  pastDuePrincipal?: number;
  pastDueInterest?: number;
  pastDueFee?: number;
  troubDbtRestructured: boolean;
  defaultInvptyContagion: boolean;
  defaultDate?: string;
  recoveriesSinceDefault?: number;
}

export type PortGuarPosPk = "referenceDate" | "sourceSystem" | "productCode" | "contractReference";
export type PortGuarPosId = PortGuarPos[PortGuarPosPk];
export type PortGuarPosOptionalAttributes = "firstContractReference" | "participationFlag" | "tradeDate" | "startDate" | "maturityDate" | "notional" | "notionalOutstanding" | "notionalUpdateFixedRate" | "notionalUpdateIndexPercent" | "notionalUpdateTenorFrequencyUnit" | "notionalUpdateFrequencyUnit" | "notionalUpdateNextDate" | "notionalUpdateLastDate" | "effectiveYield" | "originalCost" | "fairValue" | "fairValueAccumChanges" | "outstanding" | "amortizedCost" | "acquisitionDate" | "unrealizedGainLoss" | "forbearanceDate" | "performingStatus" | "performingStatusChangeDate" | "pastDueDays" | "pastDueInstallments" | "pastDuePrincipal" | "pastDueInterest" | "pastDueFee" | "defaultDate" | "recoveriesSinceDefault";
export type PortGuarPosCreationAttributes = Optional<PortGuarPosAttributes, PortGuarPosOptionalAttributes>;

export class PortGuarPos extends Model<PortGuarPosAttributes, PortGuarPosCreationAttributes> implements PortGuarPosAttributes {
  referenceDate!: string;
  sourceSystem!: string;
  productCode!: string;
  contractReference!: string;
  firstContractReference?: string;
  companyCode!: string;
  costCentre!: string;
  obligorCode!: number;
  beneficiaryCode!: number;
  finalBeneficiary!: number;
  participationFlag!: string;
  cashFlow!: boolean;
  subType!: string;
  tradeDate?: string;
  startDate?: string;
  maturityDate?: string;
  notional?: number;
  notionalOutstanding?: number;
  notionalUpdateRateType!: string;
  notionalUpdateFixedRate?: number;
  notionalUpdateIndex!: string;
  notionalUpdateIndexPercent?: number;
  notionalUpdateTenorFrequency!: string;
  notionalUpdateTenorFrequencyUnit?: number;
  notionalUpdateAccrualBasis!: string;
  notionalUpdateFrequency!: string;
  notionalUpdateFrequencyUnit?: number;
  notionalUpdateNextDate?: string;
  notionalUpdateLastDate?: string;
  effectiveYield?: number;
  originalCost?: number;
  fairValue?: number;
  fairValueAccumChanges?: number;
  fairValueOption!: string;
  currencyCode!: string;
  outstanding?: number;
  amortizedCost?: number;
  recourse!: boolean;
  rollOver!: boolean;
  acquisitionDate?: string;
  purchasedInDefault!: boolean;
  transferrable!: boolean;
  originationCountry!: string;
  unrealizedGainLoss?: number;
  repaymentRight!: boolean;
  forbearanceMeasures!: string;
  forbearanceDate?: string;
  performingStatus!: string;
  performingStatusChangeDate?: string;
  pastDueDays?: number;
  pastDueInstallments?: number;
  pastDuePrincipal?: number;
  pastDueInterest?: number;
  pastDueFee?: number;
  troubDbtRestructured!: boolean;
  defaultInvptyContagion!: boolean;
  defaultDate?: string;
  recoveriesSinceDefault?: number;

  // PortGuarPos belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortGuarPos belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortGuarPos belongsTo DomsAccrualBasis via notionalUpdateAccrualBasis
  notionalUpdateAccrualBasisDomsAccrualBasis!: DomsAccrualBasis;
  getNotionalUpdateAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setNotionalUpdateAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createNotionalUpdateAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PortGuarPos belongsTo DomsCalcFrequency via notionalUpdateFrequency
  notionalUpdateFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getNotionalUpdateFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setNotionalUpdateFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createNotionalUpdateFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortGuarPos belongsTo DomsCalcFrequency via notionalUpdateTenorFrequency
  notionalUpdateTenorFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getNotionalUpdateTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setNotionalUpdateTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createNotionalUpdateTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortGuarPos belongsTo DomsFairValueOption via fairValueOption
  fairValueOptionDomsFairValueOption!: DomsFairValueOption;
  getFairValueOptionDomsFairValueOption!: Sequelize.BelongsToGetAssociationMixin<DomsFairValueOption>;
  setFairValueOptionDomsFairValueOption!: Sequelize.BelongsToSetAssociationMixin<DomsFairValueOption, DomsFairValueOptionId>;
  createFairValueOptionDomsFairValueOption!: Sequelize.BelongsToCreateAssociationMixin<DomsFairValueOption>;
  // PortGuarPos belongsTo DomsForbearanceMeasures via forbearanceMeasures
  forbearanceMeasuresDomsForbearanceMeasure!: DomsForbearanceMeasures;
  getForbearanceMeasuresDomsForbearanceMeasure!: Sequelize.BelongsToGetAssociationMixin<DomsForbearanceMeasures>;
  setForbearanceMeasuresDomsForbearanceMeasure!: Sequelize.BelongsToSetAssociationMixin<DomsForbearanceMeasures, DomsForbearanceMeasuresId>;
  createForbearanceMeasuresDomsForbearanceMeasure!: Sequelize.BelongsToCreateAssociationMixin<DomsForbearanceMeasures>;
  // PortGuarPos belongsTo DomsParticipationFlag via participationFlag
  participationFlagDomsParticipationFlag!: DomsParticipationFlag;
  getParticipationFlagDomsParticipationFlag!: Sequelize.BelongsToGetAssociationMixin<DomsParticipationFlag>;
  setParticipationFlagDomsParticipationFlag!: Sequelize.BelongsToSetAssociationMixin<DomsParticipationFlag, DomsParticipationFlagId>;
  createParticipationFlagDomsParticipationFlag!: Sequelize.BelongsToCreateAssociationMixin<DomsParticipationFlag>;
  // PortGuarPos belongsTo DomsPerformingStatus via performingStatus
  performingStatusDomsPerformingStatus!: DomsPerformingStatus;
  getPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToGetAssociationMixin<DomsPerformingStatus>;
  setPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToSetAssociationMixin<DomsPerformingStatus, DomsPerformingStatusId>;
  createPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToCreateAssociationMixin<DomsPerformingStatus>;
  // PortGuarPos belongsTo DomsRateType via notionalUpdateRateType
  notionalUpdateRateTypeDomsRateType!: DomsRateType;
  getNotionalUpdateRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setNotionalUpdateRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createNotionalUpdateRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortGuarPos belongsTo DomsSubType via subType
  subTypeDomsSubType!: DomsSubType;
  getSubTypeDomsSubType!: Sequelize.BelongsToGetAssociationMixin<DomsSubType>;
  setSubTypeDomsSubType!: Sequelize.BelongsToSetAssociationMixin<DomsSubType, DomsSubTypeId>;
  createSubTypeDomsSubType!: Sequelize.BelongsToCreateAssociationMixin<DomsSubType>;
  // PortGuarPos belongsTo InvptyDet via beneficiaryCode
  beneficiaryCodeInvptyDet!: InvptyDet;
  getBeneficiaryCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setBeneficiaryCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createBeneficiaryCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortGuarPos belongsTo InvptyDet via finalBeneficiary
  finalBeneficiaryInvptyDet!: InvptyDet;
  getFinalBeneficiaryInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setFinalBeneficiaryInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createFinalBeneficiaryInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortGuarPos belongsTo InvptyDet via obligorCode
  obligorCodeInvptyDet!: InvptyDet;
  getObligorCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setObligorCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createObligorCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortGuarPos belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortGuarPos belongsTo SysCountry via originationCountry
  originationCountrySysCountry!: SysCountry;
  getOriginationCountrySysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setOriginationCountrySysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createOriginationCountrySysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;
  // PortGuarPos belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortGuarPos belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PortGuarPos belongsTo SysUnderlying via notionalUpdateIndex
  notionalUpdateIndexSysUnderlying!: SysUnderlying;
  getNotionalUpdateIndexSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setNotionalUpdateIndexSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createNotionalUpdateIndexSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortGuarPos {
    return PortGuarPos.init({
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
    firstContractReference: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'first_contract_reference'
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
    obligorCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'obligor_code'
    },
    beneficiaryCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'beneficiary_code'
    },
    finalBeneficiary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'final_beneficiary'
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
    cashFlow: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'cash_flow'
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
    tradeDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'trade_date'
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'start_date'
    },
    maturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'maturity_date'
    },
    notional: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    notionalOutstanding: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'notional_outstanding'
    },
    notionalUpdateRateType: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'doms_rate_type',
        key: 'domain'
      },
      field: 'notional_update_rate_type'
    },
    notionalUpdateFixedRate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'notional_update_fixed_rate'
    },
    notionalUpdateIndex: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'notional_update_index'
    },
    notionalUpdateIndexPercent: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'notional_update_index_percent'
    },
    notionalUpdateTenorFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'notional_update_tenor_frequency'
    },
    notionalUpdateTenorFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'notional_update_tenor_frequency_unit'
    },
    notionalUpdateAccrualBasis: {
      type: DataTypes.STRING(7),
      allowNull: false,
      references: {
        model: 'doms_accrual_basis',
        key: 'domain'
      },
      field: 'notional_update_accrual_basis'
    },
    notionalUpdateFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'notional_update_frequency'
    },
    notionalUpdateFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'notional_update_frequency_unit'
    },
    notionalUpdateNextDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'notional_update_next_date'
    },
    notionalUpdateLastDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'notional_update_last_date'
    },
    effectiveYield: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'effective_yield'
    },
    originalCost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'original_cost'
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
    fairValueOption: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: 'doms_fair_value_option',
        key: 'domain'
      },
      field: 'fair_value_option'
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
    outstanding: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    amortizedCost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'amortized_cost'
    },
    recourse: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    rollOver: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'roll_over'
    },
    acquisitionDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'acquisition_date'
    },
    purchasedInDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'purchased_in_default'
    },
    transferrable: {
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
    unrealizedGainLoss: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'unrealized_gain_loss'
    },
    repaymentRight: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'repayment_right'
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
    performingStatusChangeDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'performing_status_change_date'
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
    pastDuePrincipal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'past_due_principal'
    },
    pastDueInterest: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'past_due_interest'
    },
    pastDueFee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'past_due_fee'
    },
    troubDbtRestructured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'troub_dbt_restructured'
    },
    defaultInvptyContagion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'default_invpty_contagion'
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
    tableName: 'port_guar_pos',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_GUAR_POS",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_system" },
          { name: "product_code" },
          { name: "contract_reference" },
        ]
      },
      {
        name: "port_guar_pos_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
