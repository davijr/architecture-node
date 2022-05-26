import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsAccrualBasis, DomsAccrualBasisId } from './DomsAccrualBasis';
import type { DomsCapType, DomsCapTypeId } from './DomsCapType';
import type { DomsCashFlowApproach, DomsCashFlowApproachId } from './DomsCashFlowApproach';
import type { DomsCashFlowQuality, DomsCashFlowQualityId } from './DomsCashFlowQuality';
import type { DomsCashFlowType, DomsCashFlowTypeId } from './DomsCashFlowType';
import type { DomsDefermentContext, DomsDefermentContextId } from './DomsDefermentContext';
import type { DomsDefermentMethod, DomsDefermentMethodId } from './DomsDefermentMethod';
import type { DomsIncomeType, DomsIncomeTypeId } from './DomsIncomeType';
import type { DomsPayReceive, DomsPayReceiveId } from './DomsPayReceive';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { PortNostroPos, PortNostroPosId } from './PortNostroPos';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortNostroCsfAttributes {
  referenceDate: string;
  sourceTable: string;
  sourceSystem: string;
  companyCode: string;
  productCode: string;
  contractReference: string;
  cashFlowReference: string;
  cashFlowType: string;
  legType: string;
  cashFlowDate: string;
  cashFlowQuality: string;
  currencyCode: string;
  discountFactor?: number;
  rateValue?: number;
  marketSpread?: number;
  initialYield?: number;
  accrualBasis: string;
  beginDate?: string;
  endDate?: string;
  accrualNbDays?: number;
  businessNbDays?: number;
  outstanding?: number;
  cashFlowNotional?: number;
  notionalCurrency: string;
  notionalFxRate?: number;
  cashFlowFutureValue?: number;
  cashFlowMarketValue?: number;
  cashFlowApproach: string;
  premiumDiscount?: number;
  cap?: number;
  floor?: number;
  capType: string;
  floorType: string;
  fundingFlowCost?: number;
  fundingFlowAmountFtp?: number;
  fixingNextDate?: string;
  fixingSettlementDate?: string;
  defermentMethod: string;
  defermentContext: string;
  defermentRate?: number;
  notionalPercentage?: number;
  outstandingPercentage?: number;
  maxAmount?: number;
  commissionName?: string;
  rateType: string;
  tenor?: string;
  curveName: string;
  incomeType: string;
}

export type PortNostroCsfPk = "referenceDate" | "sourceTable" | "sourceSystem" | "companyCode" | "productCode" | "contractReference" | "cashFlowReference" | "cashFlowType" | "legType";
export type PortNostroCsfId = PortNostroCsf[PortNostroCsfPk];
export type PortNostroCsfOptionalAttributes = "cashFlowType" | "cashFlowQuality" | "discountFactor" | "rateValue" | "marketSpread" | "initialYield" | "beginDate" | "endDate" | "accrualNbDays" | "businessNbDays" | "outstanding" | "cashFlowNotional" | "notionalFxRate" | "cashFlowFutureValue" | "cashFlowMarketValue" | "cashFlowApproach" | "premiumDiscount" | "cap" | "floor" | "fundingFlowCost" | "fundingFlowAmountFtp" | "fixingNextDate" | "fixingSettlementDate" | "defermentMethod" | "defermentContext" | "defermentRate" | "notionalPercentage" | "outstandingPercentage" | "maxAmount" | "commissionName" | "tenor";
export type PortNostroCsfCreationAttributes = Optional<PortNostroCsfAttributes, PortNostroCsfOptionalAttributes>;

export class PortNostroCsf extends Model<PortNostroCsfAttributes, PortNostroCsfCreationAttributes> implements PortNostroCsfAttributes {
  referenceDate!: string;
  sourceTable!: string;
  sourceSystem!: string;
  companyCode!: string;
  productCode!: string;
  contractReference!: string;
  cashFlowReference!: string;
  cashFlowType!: string;
  legType!: string;
  cashFlowDate!: string;
  cashFlowQuality!: string;
  currencyCode!: string;
  discountFactor?: number;
  rateValue?: number;
  marketSpread?: number;
  initialYield?: number;
  accrualBasis!: string;
  beginDate?: string;
  endDate?: string;
  accrualNbDays?: number;
  businessNbDays?: number;
  outstanding?: number;
  cashFlowNotional?: number;
  notionalCurrency!: string;
  notionalFxRate?: number;
  cashFlowFutureValue?: number;
  cashFlowMarketValue?: number;
  cashFlowApproach!: string;
  premiumDiscount?: number;
  cap?: number;
  floor?: number;
  capType!: string;
  floorType!: string;
  fundingFlowCost?: number;
  fundingFlowAmountFtp?: number;
  fixingNextDate?: string;
  fixingSettlementDate?: string;
  defermentMethod!: string;
  defermentContext!: string;
  defermentRate?: number;
  notionalPercentage?: number;
  outstandingPercentage?: number;
  maxAmount?: number;
  commissionName?: string;
  rateType!: string;
  tenor?: string;
  curveName!: string;
  incomeType!: string;

  // PortNostroCsf belongsTo DomsAccrualBasis via accrualBasis
  accrualBasisDomsAccrualBasis!: DomsAccrualBasis;
  getAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PortNostroCsf belongsTo DomsCapType via floorType
  floorTypeDomsCapType!: DomsCapType;
  getFloorTypeDomsCapType!: Sequelize.BelongsToGetAssociationMixin<DomsCapType>;
  setFloorTypeDomsCapType!: Sequelize.BelongsToSetAssociationMixin<DomsCapType, DomsCapTypeId>;
  createFloorTypeDomsCapType!: Sequelize.BelongsToCreateAssociationMixin<DomsCapType>;
  // PortNostroCsf belongsTo DomsCapType via capType
  capTypeDomsCapType!: DomsCapType;
  getCapTypeDomsCapType!: Sequelize.BelongsToGetAssociationMixin<DomsCapType>;
  setCapTypeDomsCapType!: Sequelize.BelongsToSetAssociationMixin<DomsCapType, DomsCapTypeId>;
  createCapTypeDomsCapType!: Sequelize.BelongsToCreateAssociationMixin<DomsCapType>;
  // PortNostroCsf belongsTo DomsCashFlowApproach via cashFlowApproach
  cashFlowApproachDomsCashFlowApproach!: DomsCashFlowApproach;
  getCashFlowApproachDomsCashFlowApproach!: Sequelize.BelongsToGetAssociationMixin<DomsCashFlowApproach>;
  setCashFlowApproachDomsCashFlowApproach!: Sequelize.BelongsToSetAssociationMixin<DomsCashFlowApproach, DomsCashFlowApproachId>;
  createCashFlowApproachDomsCashFlowApproach!: Sequelize.BelongsToCreateAssociationMixin<DomsCashFlowApproach>;
  // PortNostroCsf belongsTo DomsCashFlowQuality via cashFlowQuality
  cashFlowQualityDomsCashFlowQuality!: DomsCashFlowQuality;
  getCashFlowQualityDomsCashFlowQuality!: Sequelize.BelongsToGetAssociationMixin<DomsCashFlowQuality>;
  setCashFlowQualityDomsCashFlowQuality!: Sequelize.BelongsToSetAssociationMixin<DomsCashFlowQuality, DomsCashFlowQualityId>;
  createCashFlowQualityDomsCashFlowQuality!: Sequelize.BelongsToCreateAssociationMixin<DomsCashFlowQuality>;
  // PortNostroCsf belongsTo DomsCashFlowType via cashFlowType
  cashFlowTypeDomsCashFlowType!: DomsCashFlowType;
  getCashFlowTypeDomsCashFlowType!: Sequelize.BelongsToGetAssociationMixin<DomsCashFlowType>;
  setCashFlowTypeDomsCashFlowType!: Sequelize.BelongsToSetAssociationMixin<DomsCashFlowType, DomsCashFlowTypeId>;
  createCashFlowTypeDomsCashFlowType!: Sequelize.BelongsToCreateAssociationMixin<DomsCashFlowType>;
  // PortNostroCsf belongsTo DomsDefermentContext via defermentContext
  defermentContextDomsDefermentContext!: DomsDefermentContext;
  getDefermentContextDomsDefermentContext!: Sequelize.BelongsToGetAssociationMixin<DomsDefermentContext>;
  setDefermentContextDomsDefermentContext!: Sequelize.BelongsToSetAssociationMixin<DomsDefermentContext, DomsDefermentContextId>;
  createDefermentContextDomsDefermentContext!: Sequelize.BelongsToCreateAssociationMixin<DomsDefermentContext>;
  // PortNostroCsf belongsTo DomsDefermentMethod via defermentMethod
  defermentMethodDomsDefermentMethod!: DomsDefermentMethod;
  getDefermentMethodDomsDefermentMethod!: Sequelize.BelongsToGetAssociationMixin<DomsDefermentMethod>;
  setDefermentMethodDomsDefermentMethod!: Sequelize.BelongsToSetAssociationMixin<DomsDefermentMethod, DomsDefermentMethodId>;
  createDefermentMethodDomsDefermentMethod!: Sequelize.BelongsToCreateAssociationMixin<DomsDefermentMethod>;
  // PortNostroCsf belongsTo DomsIncomeType via incomeType
  incomeTypeDomsIncomeType!: DomsIncomeType;
  getIncomeTypeDomsIncomeType!: Sequelize.BelongsToGetAssociationMixin<DomsIncomeType>;
  setIncomeTypeDomsIncomeType!: Sequelize.BelongsToSetAssociationMixin<DomsIncomeType, DomsIncomeTypeId>;
  createIncomeTypeDomsIncomeType!: Sequelize.BelongsToCreateAssociationMixin<DomsIncomeType>;
  // PortNostroCsf belongsTo DomsPayReceive via legType
  legTypeDomsPayReceive!: DomsPayReceive;
  getLegTypeDomsPayReceive!: Sequelize.BelongsToGetAssociationMixin<DomsPayReceive>;
  setLegTypeDomsPayReceive!: Sequelize.BelongsToSetAssociationMixin<DomsPayReceive, DomsPayReceiveId>;
  createLegTypeDomsPayReceive!: Sequelize.BelongsToCreateAssociationMixin<DomsPayReceive>;
  // PortNostroCsf belongsTo DomsRateType via rateType
  rateTypeDomsRateType!: DomsRateType;
  getRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortNostroCsf belongsTo PortNostroPos via companyCode
  companyCodePortNostroPo!: PortNostroPos;
  getCompanyCodePortNostroPo!: Sequelize.BelongsToGetAssociationMixin<PortNostroPos>;
  setCompanyCodePortNostroPo!: Sequelize.BelongsToSetAssociationMixin<PortNostroPos, PortNostroPosId>;
  createCompanyCodePortNostroPo!: Sequelize.BelongsToCreateAssociationMixin<PortNostroPos>;
  // PortNostroCsf belongsTo PortNostroPos via contractReference
  contractReferencePortNostroPo!: PortNostroPos;
  getContractReferencePortNostroPo!: Sequelize.BelongsToGetAssociationMixin<PortNostroPos>;
  setContractReferencePortNostroPo!: Sequelize.BelongsToSetAssociationMixin<PortNostroPos, PortNostroPosId>;
  createContractReferencePortNostroPo!: Sequelize.BelongsToCreateAssociationMixin<PortNostroPos>;
  // PortNostroCsf belongsTo PortNostroPos via productCode
  productCodePortNostroPo!: PortNostroPos;
  getProductCodePortNostroPo!: Sequelize.BelongsToGetAssociationMixin<PortNostroPos>;
  setProductCodePortNostroPo!: Sequelize.BelongsToSetAssociationMixin<PortNostroPos, PortNostroPosId>;
  createProductCodePortNostroPo!: Sequelize.BelongsToCreateAssociationMixin<PortNostroPos>;
  // PortNostroCsf belongsTo PortNostroPos via referenceDate
  referenceDatePortNostroPo!: PortNostroPos;
  getReferenceDatePortNostroPo!: Sequelize.BelongsToGetAssociationMixin<PortNostroPos>;
  setReferenceDatePortNostroPo!: Sequelize.BelongsToSetAssociationMixin<PortNostroPos, PortNostroPosId>;
  createReferenceDatePortNostroPo!: Sequelize.BelongsToCreateAssociationMixin<PortNostroPos>;
  // PortNostroCsf belongsTo PortNostroPos via sourceSystem
  sourceSystemPortNostroPo!: PortNostroPos;
  getSourceSystemPortNostroPo!: Sequelize.BelongsToGetAssociationMixin<PortNostroPos>;
  setSourceSystemPortNostroPo!: Sequelize.BelongsToSetAssociationMixin<PortNostroPos, PortNostroPosId>;
  createSourceSystemPortNostroPo!: Sequelize.BelongsToCreateAssociationMixin<PortNostroPos>;
  // PortNostroCsf belongsTo SysCurrency via notionalCurrency
  notionalCurrencySysCurrency!: SysCurrency;
  getNotionalCurrencySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setNotionalCurrencySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createNotionalCurrencySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortNostroCsf belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortNostroCsf belongsTo SysUnderlying via curveName
  curveNameSysUnderlying!: SysUnderlying;
  getCurveNameSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setCurveNameSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createCurveNameSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortNostroCsf {
    return PortNostroCsf.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_nostro_pos',
        key: 'source_system'
      },
      field: 'reference_date'
    },
    sourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'source_table'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_nostro_pos',
        key: 'source_system'
      },
      field: 'source_system'
    },
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_nostro_pos',
        key: 'source_system'
      },
      field: 'company_code'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_nostro_pos',
        key: 'source_system'
      },
      field: 'product_code'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_nostro_pos',
        key: 'source_system'
      },
      field: 'contract_reference'
    },
    cashFlowReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'cash_flow_reference'
    },
    cashFlowType: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "CF",
      primaryKey: true,
      references: {
        model: 'doms_cash_flow_type',
        key: 'domain'
      },
      field: 'cash_flow_type'
    },
    legType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'doms_pay_receive',
        key: 'domain'
      },
      field: 'leg_type'
    },
    cashFlowDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'cash_flow_date'
    },
    cashFlowQuality: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "FIX",
      references: {
        model: 'doms_cash_flow_quality',
        key: 'domain'
      },
      field: 'cash_flow_quality'
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
    discountFactor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'discount_factor'
    },
    rateValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'rate_value'
    },
    marketSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'market_spread'
    },
    initialYield: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'initial_yield'
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
    beginDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'begin_date'
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'end_date'
    },
    accrualNbDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'accrual_nb_days'
    },
    businessNbDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'business_nb_days'
    },
    outstanding: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cashFlowNotional: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'cash_flow_notional'
    },
    notionalCurrency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'notional_currency'
    },
    notionalFxRate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'notional_fx_rate'
    },
    cashFlowFutureValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'cash_flow_future_value'
    },
    cashFlowMarketValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'cash_flow_market_value'
    },
    cashFlowApproach: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "VL",
      references: {
        model: 'doms_cash_flow_approach',
        key: 'domain'
      },
      field: 'cash_flow_approach'
    },
    premiumDiscount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'premium_discount'
    },
    cap: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    floor: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    capType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'doms_cap_type',
        key: 'domain'
      },
      field: 'cap_type'
    },
    floorType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'doms_cap_type',
        key: 'domain'
      },
      field: 'floor_type'
    },
    fundingFlowCost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'funding_flow_cost'
    },
    fundingFlowAmountFtp: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'funding_flow_amount_ftp'
    },
    fixingNextDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_next_date'
    },
    fixingSettlementDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_settlement_date'
    },
    defermentMethod: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NON",
      references: {
        model: 'doms_deferment_method',
        key: 'domain'
      },
      field: 'deferment_method'
    },
    defermentContext: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "STD",
      references: {
        model: 'doms_deferment_context',
        key: 'domain'
      },
      field: 'deferment_context'
    },
    defermentRate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'deferment_rate'
    },
    notionalPercentage: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'notional_percentage'
    },
    outstandingPercentage: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'outstanding_percentage'
    },
    maxAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'max_amount'
    },
    commissionName: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'commission_name'
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
    tenor: {
      type: DataTypes.STRING(5),
      allowNull: true
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
    incomeType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_income_type',
        key: 'domain'
      },
      field: 'income_type'
    }
  }, {
    sequelize,
    tableName: 'port_nostro_csf',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_NOSTRO_CSF",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_table" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "product_code" },
          { name: "contract_reference" },
          { name: "cash_flow_reference" },
          { name: "cash_flow_type" },
          { name: "leg_type" },
        ]
      },
      {
        name: "port_nostro_csf_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
