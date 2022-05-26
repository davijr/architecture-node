import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyBook, CompanyBookId } from './CompanyBook';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';

export interface PnlOperincDetAttributes {
  referenceDate: string;
  sourceSystem: string;
  companyCode: string;
  operincCode: string;
  contractReference: string;
  calcSourceSystem: string;
  costCentre: string;
  bookCode: string;
  invptyCode: number;
  currencyCode: string;
  contractType?: string;
  subReference?: string;
  futureValue?: number;
  interestIncome?: number;
  interestExpense?: number;
  feeIncome?: number;
  feeExpense?: number;
  commissionIncome?: number;
  commissionExpense?: number;
  otherIncome?: number;
  otherExpense?: number;
  dividendIncome?: number;
  dividendExpense?: number;
  provisionsExpense?: number;
  reversalProvision?: number;
  depreciationImpairment?: number;
  reversalImpairment?: number;
  unrealizedGainLoss?: number;
  gainLossDerecog?: number;
  fairValueChange?: number;
}

export type PnlOperincDetPk = "referenceDate" | "sourceSystem" | "companyCode" | "operincCode" | "contractReference" | "calcSourceSystem";
export type PnlOperincDetId = PnlOperincDet[PnlOperincDetPk];
export type PnlOperincDetOptionalAttributes = "contractType" | "subReference" | "futureValue" | "interestIncome" | "interestExpense" | "feeIncome" | "feeExpense" | "commissionIncome" | "commissionExpense" | "otherIncome" | "otherExpense" | "dividendIncome" | "dividendExpense" | "provisionsExpense" | "reversalProvision" | "depreciationImpairment" | "reversalImpairment" | "unrealizedGainLoss" | "gainLossDerecog" | "fairValueChange";
export type PnlOperincDetCreationAttributes = Optional<PnlOperincDetAttributes, PnlOperincDetOptionalAttributes>;

export class PnlOperincDet extends Model<PnlOperincDetAttributes, PnlOperincDetCreationAttributes> implements PnlOperincDetAttributes {
  referenceDate!: string;
  sourceSystem!: string;
  companyCode!: string;
  operincCode!: string;
  contractReference!: string;
  calcSourceSystem!: string;
  costCentre!: string;
  bookCode!: string;
  invptyCode!: number;
  currencyCode!: string;
  contractType?: string;
  subReference?: string;
  futureValue?: number;
  interestIncome?: number;
  interestExpense?: number;
  feeIncome?: number;
  feeExpense?: number;
  commissionIncome?: number;
  commissionExpense?: number;
  otherIncome?: number;
  otherExpense?: number;
  dividendIncome?: number;
  dividendExpense?: number;
  provisionsExpense?: number;
  reversalProvision?: number;
  depreciationImpairment?: number;
  reversalImpairment?: number;
  unrealizedGainLoss?: number;
  gainLossDerecog?: number;
  fairValueChange?: number;

  // PnlOperincDet belongsTo CompanyBook via bookCode
  bookCodeCompanyBook!: CompanyBook;
  getBookCodeCompanyBook!: Sequelize.BelongsToGetAssociationMixin<CompanyBook>;
  setBookCodeCompanyBook!: Sequelize.BelongsToSetAssociationMixin<CompanyBook, CompanyBookId>;
  createBookCodeCompanyBook!: Sequelize.BelongsToCreateAssociationMixin<CompanyBook>;
  // PnlOperincDet belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PnlOperincDet belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PnlOperincDet belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PnlOperincDet belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PnlOperincDet belongsTo SysExternalSystem via calcSourceSystem
  calcSourceSystemSysExternalSystem!: SysExternalSystem;
  getCalcSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setCalcSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createCalcSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PnlOperincDet belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PnlOperincDet {
    return PnlOperincDet.init({
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
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'company_code'
    },
    operincCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      field: 'operinc_code'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'contract_reference'
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
    invptyCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_code'
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
    contractType: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'contract_type'
    },
    subReference: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'sub_reference'
    },
    futureValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'future_value'
    },
    interestIncome: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'interest_income'
    },
    interestExpense: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'interest_expense'
    },
    feeIncome: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fee_income'
    },
    feeExpense: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fee_expense'
    },
    commissionIncome: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'commission_income'
    },
    commissionExpense: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'commission_expense'
    },
    otherIncome: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'other_income'
    },
    otherExpense: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'other_expense'
    },
    dividendIncome: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'dividend_income'
    },
    dividendExpense: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'dividend_expense'
    },
    provisionsExpense: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'provisions_expense'
    },
    reversalProvision: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'reversal_provision'
    },
    depreciationImpairment: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'depreciation_impairment'
    },
    reversalImpairment: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'reversal_impairment'
    },
    unrealizedGainLoss: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'unrealized_gain_loss'
    },
    gainLossDerecog: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'gain_loss_derecog'
    },
    fairValueChange: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fair_value_change'
    }
  }, {
    sequelize,
    tableName: 'pnl_operinc_det',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PNL_OPERINC_DET",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "operinc_code" },
          { name: "contract_reference" },
          { name: "calc_source_system" },
        ]
      },
      {
        name: "pnl_operinc_det_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
