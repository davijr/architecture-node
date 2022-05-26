import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyBook, CompanyBookId } from './CompanyBook';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsLongShort, DomsLongShortId } from './DomsLongShort';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';

export interface PnlGmplexDetAttributes {
  referenceDate: string;
  sourceTable: string;
  sourceSystem: string;
  companyCode: string;
  costCentre: string;
  productCode: string;
  contractReference: string;
  cashFlowReference: string;
  riskLeg: string;
  bookCode: string;
  tradeDate?: string;
  maturityDate?: string;
  securityQuantity?: number;
  notionalOutstRecLeg?: number;
  notionalOutstPayLeg?: number;
  rate?: number;
  currencyRecLeg: string;
  currencyPayLeg: string;
}

export type PnlGmplexDetPk = "referenceDate" | "sourceTable" | "sourceSystem" | "companyCode" | "costCentre" | "productCode" | "contractReference" | "cashFlowReference" | "riskLeg";
export type PnlGmplexDetId = PnlGmplexDet[PnlGmplexDetPk];
export type PnlGmplexDetOptionalAttributes = "tradeDate" | "maturityDate" | "securityQuantity" | "notionalOutstRecLeg" | "notionalOutstPayLeg" | "rate";
export type PnlGmplexDetCreationAttributes = Optional<PnlGmplexDetAttributes, PnlGmplexDetOptionalAttributes>;

export class PnlGmplexDet extends Model<PnlGmplexDetAttributes, PnlGmplexDetCreationAttributes> implements PnlGmplexDetAttributes {
  referenceDate!: string;
  sourceTable!: string;
  sourceSystem!: string;
  companyCode!: string;
  costCentre!: string;
  productCode!: string;
  contractReference!: string;
  cashFlowReference!: string;
  riskLeg!: string;
  bookCode!: string;
  tradeDate?: string;
  maturityDate?: string;
  securityQuantity?: number;
  notionalOutstRecLeg?: number;
  notionalOutstPayLeg?: number;
  rate?: number;
  currencyRecLeg!: string;
  currencyPayLeg!: string;

  // PnlGmplexDet belongsTo CompanyBook via bookCode
  bookCodeCompanyBook!: CompanyBook;
  getBookCodeCompanyBook!: Sequelize.BelongsToGetAssociationMixin<CompanyBook>;
  setBookCodeCompanyBook!: Sequelize.BelongsToSetAssociationMixin<CompanyBook, CompanyBookId>;
  createBookCodeCompanyBook!: Sequelize.BelongsToCreateAssociationMixin<CompanyBook>;
  // PnlGmplexDet belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PnlGmplexDet belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PnlGmplexDet belongsTo DomsLongShort via riskLeg
  riskLegDomsLongShort!: DomsLongShort;
  getRiskLegDomsLongShort!: Sequelize.BelongsToGetAssociationMixin<DomsLongShort>;
  setRiskLegDomsLongShort!: Sequelize.BelongsToSetAssociationMixin<DomsLongShort, DomsLongShortId>;
  createRiskLegDomsLongShort!: Sequelize.BelongsToCreateAssociationMixin<DomsLongShort>;
  // PnlGmplexDet belongsTo SysCurrency via currencyPayLeg
  currencyPayLegSysCurrency!: SysCurrency;
  getCurrencyPayLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyPayLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyPayLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PnlGmplexDet belongsTo SysCurrency via currencyRecLeg
  currencyRecLegSysCurrency!: SysCurrency;
  getCurrencyRecLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyRecLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyRecLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PnlGmplexDet belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PnlGmplexDet {
    return PnlGmplexDet.init({
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
      field: 'source_table'
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
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'cost_centre'
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
    cashFlowReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'cash_flow_reference'
    },
    riskLeg: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'doms_long_short',
        key: 'domain'
      },
      field: 'risk_leg'
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
    tradeDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'trade_date'
    },
    maturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'maturity_date'
    },
    securityQuantity: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'security_quantity'
    },
    notionalOutstRecLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'notional_outst_rec_leg'
    },
    notionalOutstPayLeg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'notional_outst_pay_leg'
    },
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'pnl_gmplex_det',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PNL_GMPLEX_DET",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_table" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "cost_centre" },
          { name: "product_code" },
          { name: "contract_reference" },
          { name: "cash_flow_reference" },
          { name: "risk_leg" },
        ]
      },
    ]
  });
  }
}
