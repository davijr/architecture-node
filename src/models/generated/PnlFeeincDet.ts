import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsAccrualBasis, DomsAccrualBasisId } from './DomsAccrualBasis';
import type { DomsCalcFrequency, DomsCalcFrequencyId } from './DomsCalcFrequency';
import type { DomsCompoundType, DomsCompoundTypeId } from './DomsCompoundType';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { PortContractList, PortContractListId } from './PortContractList';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';

export interface PnlFeeincDetAttributes {
  referenceDate: string;
  sourceTable: string;
  sourceSystem: string;
  companyCode: string;
  productCode: string;
  contractReference: string;
  feeCode: string;
  calcSourceSystem: string;
  currencyCode: string;
  feeDescription?: string;
  fee?: number;
  feeComExpense?: number;
  feeComIncome?: number;
  feeCoumpoundCalculationType: string;
  feeRate?: number;
  feeAccrued?: number;
  feePaymentNextDate?: string;
  feePaymentLastDate?: string;
  feePaymentFrequency: string;
  feePaymentFrequencyUnit?: number;
  feeCorrctRateType: string;
  feeCorrctFixedRate?: number;
  feeCorrctIndex?: string;
  feeCorrctIndexPercent?: number;
  feeCorrctIndexTenorFrequency: string;
  feeCorrctIndexTenorFrequencyUnit?: number;
  feeCorrctAccrualBasis: string;
  feeCorrctFrequency: string;
  feeCorrctFrequencyUnit?: number;
  feeCorrctNextDate?: string;
  feeCorrctLastDate?: string;
  rateCompoundCalculationType: string;
  pastDueFee?: number;
  unrealizedGainLoss?: number;
}

export type PnlFeeincDetPk = "referenceDate" | "sourceTable" | "sourceSystem" | "companyCode" | "productCode" | "contractReference" | "feeCode" | "calcSourceSystem";
export type PnlFeeincDetId = PnlFeeincDet[PnlFeeincDetPk];
export type PnlFeeincDetOptionalAttributes = "feeDescription" | "fee" | "feeComExpense" | "feeComIncome" | "feeRate" | "feeAccrued" | "feePaymentNextDate" | "feePaymentLastDate" | "feePaymentFrequency" | "feePaymentFrequencyUnit" | "feeCorrctFixedRate" | "feeCorrctIndex" | "feeCorrctIndexPercent" | "feeCorrctIndexTenorFrequency" | "feeCorrctIndexTenorFrequencyUnit" | "feeCorrctFrequency" | "feeCorrctFrequencyUnit" | "feeCorrctNextDate" | "feeCorrctLastDate" | "pastDueFee" | "unrealizedGainLoss";
export type PnlFeeincDetCreationAttributes = Optional<PnlFeeincDetAttributes, PnlFeeincDetOptionalAttributes>;

export class PnlFeeincDet extends Model<PnlFeeincDetAttributes, PnlFeeincDetCreationAttributes> implements PnlFeeincDetAttributes {
  referenceDate!: string;
  sourceTable!: string;
  sourceSystem!: string;
  companyCode!: string;
  productCode!: string;
  contractReference!: string;
  feeCode!: string;
  calcSourceSystem!: string;
  currencyCode!: string;
  feeDescription?: string;
  fee?: number;
  feeComExpense?: number;
  feeComIncome?: number;
  feeCoumpoundCalculationType!: string;
  feeRate?: number;
  feeAccrued?: number;
  feePaymentNextDate?: string;
  feePaymentLastDate?: string;
  feePaymentFrequency!: string;
  feePaymentFrequencyUnit?: number;
  feeCorrctRateType!: string;
  feeCorrctFixedRate?: number;
  feeCorrctIndex?: string;
  feeCorrctIndexPercent?: number;
  feeCorrctIndexTenorFrequency!: string;
  feeCorrctIndexTenorFrequencyUnit?: number;
  feeCorrctAccrualBasis!: string;
  feeCorrctFrequency!: string;
  feeCorrctFrequencyUnit?: number;
  feeCorrctNextDate?: string;
  feeCorrctLastDate?: string;
  rateCompoundCalculationType!: string;
  pastDueFee?: number;
  unrealizedGainLoss?: number;

  // PnlFeeincDet belongsTo DomsAccrualBasis via feeCorrctAccrualBasis
  feeCorrctAccrualBasisDomsAccrualBasis!: DomsAccrualBasis;
  getFeeCorrctAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setFeeCorrctAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createFeeCorrctAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PnlFeeincDet belongsTo DomsCalcFrequency via feeCorrctFrequency
  feeCorrctFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getFeeCorrctFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setFeeCorrctFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createFeeCorrctFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PnlFeeincDet belongsTo DomsCalcFrequency via feeCorrctIndexTenorFrequency
  feeCorrctIndexTenorFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getFeeCorrctIndexTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setFeeCorrctIndexTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createFeeCorrctIndexTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PnlFeeincDet belongsTo DomsCalcFrequency via feePaymentFrequency
  feePaymentFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getFeePaymentFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setFeePaymentFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createFeePaymentFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PnlFeeincDet belongsTo DomsCompoundType via feeCoumpoundCalculationType
  feeCoumpoundCalculationTypeDomsCompoundType!: DomsCompoundType;
  getFeeCoumpoundCalculationTypeDomsCompoundType!: Sequelize.BelongsToGetAssociationMixin<DomsCompoundType>;
  setFeeCoumpoundCalculationTypeDomsCompoundType!: Sequelize.BelongsToSetAssociationMixin<DomsCompoundType, DomsCompoundTypeId>;
  createFeeCoumpoundCalculationTypeDomsCompoundType!: Sequelize.BelongsToCreateAssociationMixin<DomsCompoundType>;
  // PnlFeeincDet belongsTo DomsCompoundType via rateCompoundCalculationType
  rateCompoundCalculationTypeDomsCompoundType!: DomsCompoundType;
  getRateCompoundCalculationTypeDomsCompoundType!: Sequelize.BelongsToGetAssociationMixin<DomsCompoundType>;
  setRateCompoundCalculationTypeDomsCompoundType!: Sequelize.BelongsToSetAssociationMixin<DomsCompoundType, DomsCompoundTypeId>;
  createRateCompoundCalculationTypeDomsCompoundType!: Sequelize.BelongsToCreateAssociationMixin<DomsCompoundType>;
  // PnlFeeincDet belongsTo DomsRateType via feeCorrctRateType
  feeCorrctRateTypeDomsRateType!: DomsRateType;
  getFeeCorrctRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setFeeCorrctRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createFeeCorrctRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PnlFeeincDet belongsTo PortContractList via companyCode
  companyCodePortContractList!: PortContractList;
  getCompanyCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setCompanyCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createCompanyCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlFeeincDet belongsTo PortContractList via contractReference
  contractReferencePortContractList!: PortContractList;
  getContractReferencePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setContractReferencePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createContractReferencePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlFeeincDet belongsTo PortContractList via productCode
  productCodePortContractList!: PortContractList;
  getProductCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setProductCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createProductCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlFeeincDet belongsTo PortContractList via sourceSystem
  sourceSystemPortContractList!: PortContractList;
  getSourceSystemPortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSourceSystemPortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSourceSystemPortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlFeeincDet belongsTo PortContractList via sourceTable
  sourceTablePortContractList!: PortContractList;
  getSourceTablePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSourceTablePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSourceTablePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlFeeincDet belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PnlFeeincDet belongsTo SysExternalSystem via calcSourceSystem
  calcSourceSystemSysExternalSystem!: SysExternalSystem;
  getCalcSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setCalcSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createCalcSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PnlFeeincDet {
    return PnlFeeincDet.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    sourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'source_table'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'source_system'
    },
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'company_code'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'product_code'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'contract_reference'
    },
    feeCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      field: 'fee_code'
    },
    calcSourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_external_system',
        key: 'source_system'
      },
      field: 'calc_source_system'
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
    feeDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'fee_description'
    },
    fee: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    feeComExpense: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fee_com_expense'
    },
    feeComIncome: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fee_com_income'
    },
    feeCoumpoundCalculationType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_compound_type',
        key: 'domain'
      },
      field: 'fee_coumpound_calculation_type'
    },
    feeRate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fee_rate'
    },
    feeAccrued: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fee_accrued'
    },
    feePaymentNextDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fee_payment_next_date'
    },
    feePaymentLastDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fee_payment_last_date'
    },
    feePaymentFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NON",
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'fee_payment_frequency'
    },
    feePaymentFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fee_payment_frequency_unit'
    },
    feeCorrctRateType: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'doms_rate_type',
        key: 'domain'
      },
      field: 'fee_corrct_rate_type'
    },
    feeCorrctFixedRate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fee_corrct_fixed_rate'
    },
    feeCorrctIndex: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'fee_corrct_index'
    },
    feeCorrctIndexPercent: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fee_corrct_index_percent'
    },
    feeCorrctIndexTenorFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NON",
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'fee_corrct_index_tenor_frequency'
    },
    feeCorrctIndexTenorFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fee_corrct_index_tenor_frequency_unit'
    },
    feeCorrctAccrualBasis: {
      type: DataTypes.STRING(7),
      allowNull: false,
      references: {
        model: 'doms_accrual_basis',
        key: 'domain'
      },
      field: 'fee_corrct_accrual_basis'
    },
    feeCorrctFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NON",
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'fee_corrct_frequency'
    },
    feeCorrctFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fee_corrct_frequency_unit'
    },
    feeCorrctNextDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fee_corrct_next_date'
    },
    feeCorrctLastDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fee_corrct_last_date'
    },
    rateCompoundCalculationType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_compound_type',
        key: 'domain'
      },
      field: 'rate_compound_calculation_type'
    },
    pastDueFee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'past_due_fee'
    },
    unrealizedGainLoss: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'unrealized_gain_loss'
    }
  }, {
    sequelize,
    tableName: 'pnl_feeinc_det',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PNL_FEEINC_DET",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_table" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "product_code" },
          { name: "contract_reference" },
          { name: "fee_code" },
          { name: "calc_source_system" },
        ]
      },
      {
        name: "pnl_feeinc_det_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
