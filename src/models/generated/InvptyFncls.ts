import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';

export interface InvptyFnclsAttributes {
  invptyCode: number;
  finStatementDate: string;
  finStatementType: string;
  reviewDate?: string;
  finFunctionalCcy: string;
  finReportCcy: string;
  finEbitda?: number;
  finAdjustedEbitda?: number;
  finInterestExpense?: number;
  finNetProft?: number;
  finNetSales?: number;
  finTotalAssets?: number;
  finCash?: number;
  finMarketableSecurities?: number;
  finTotalCurrentAssets?: number;
  finTangibleAssets?: number;
  finIntangibleAssets?: number;
  finNetFixedAssets?: number;
  finAccountsReceivable?: number;
  finTotalInventory?: number;
  finTotalLiabilities?: number;
  finTotalCurrentLiabilities?: number;
  finAccountsPayable?: number;
  finShortTermDebt?: number;
  finCurrentLongTermDebt?: number;
  finLongTermDebt?: number;
  finRetainedEarnings?: number;
  finMinoritaryInterest?: number;
  finCapitalExpenditures?: number;
  finOperatingIncome?: number;
  finDepreciationAmortization?: number;
  finNumberOfEmployees?: number;
  finAnnualSalary?: number;
}

export type InvptyFnclsPk = "invptyCode" | "finStatementDate" | "finStatementType";
export type InvptyFnclsId = InvptyFncls[InvptyFnclsPk];
export type InvptyFnclsOptionalAttributes = "reviewDate" | "finEbitda" | "finAdjustedEbitda" | "finInterestExpense" | "finNetProft" | "finNetSales" | "finTotalAssets" | "finCash" | "finMarketableSecurities" | "finTotalCurrentAssets" | "finTangibleAssets" | "finIntangibleAssets" | "finNetFixedAssets" | "finAccountsReceivable" | "finTotalInventory" | "finTotalLiabilities" | "finTotalCurrentLiabilities" | "finAccountsPayable" | "finShortTermDebt" | "finCurrentLongTermDebt" | "finLongTermDebt" | "finRetainedEarnings" | "finMinoritaryInterest" | "finCapitalExpenditures" | "finOperatingIncome" | "finDepreciationAmortization" | "finNumberOfEmployees" | "finAnnualSalary";
export type InvptyFnclsCreationAttributes = Optional<InvptyFnclsAttributes, InvptyFnclsOptionalAttributes>;

export class InvptyFncls extends Model<InvptyFnclsAttributes, InvptyFnclsCreationAttributes> implements InvptyFnclsAttributes {
  invptyCode!: number;
  finStatementDate!: string;
  finStatementType!: string;
  reviewDate?: string;
  finFunctionalCcy!: string;
  finReportCcy!: string;
  finEbitda?: number;
  finAdjustedEbitda?: number;
  finInterestExpense?: number;
  finNetProft?: number;
  finNetSales?: number;
  finTotalAssets?: number;
  finCash?: number;
  finMarketableSecurities?: number;
  finTotalCurrentAssets?: number;
  finTangibleAssets?: number;
  finIntangibleAssets?: number;
  finNetFixedAssets?: number;
  finAccountsReceivable?: number;
  finTotalInventory?: number;
  finTotalLiabilities?: number;
  finTotalCurrentLiabilities?: number;
  finAccountsPayable?: number;
  finShortTermDebt?: number;
  finCurrentLongTermDebt?: number;
  finLongTermDebt?: number;
  finRetainedEarnings?: number;
  finMinoritaryInterest?: number;
  finCapitalExpenditures?: number;
  finOperatingIncome?: number;
  finDepreciationAmortization?: number;
  finNumberOfEmployees?: number;
  finAnnualSalary?: number;

  // InvptyFncls belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // InvptyFncls belongsTo SysCurrency via finReportCcy
  finReportCcySysCurrency!: SysCurrency;
  getFinReportCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setFinReportCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createFinReportCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // InvptyFncls belongsTo SysCurrency via finFunctionalCcy
  finFunctionalCcySysCurrency!: SysCurrency;
  getFinFunctionalCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setFinFunctionalCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createFinFunctionalCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyFncls {
    return InvptyFncls.init({
    invptyCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_code'
    },
    finStatementDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'fin_statement_date'
    },
    finStatementType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      field: 'fin_statement_type'
    },
    reviewDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'review_date'
    },
    finFunctionalCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'fin_functional_ccy'
    },
    finReportCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'fin_report_ccy'
    },
    finEbitda: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_ebitda'
    },
    finAdjustedEbitda: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_adjusted_ebitda'
    },
    finInterestExpense: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_interest_expense'
    },
    finNetProft: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_net_proft'
    },
    finNetSales: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_net_sales'
    },
    finTotalAssets: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_total_assets'
    },
    finCash: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_cash'
    },
    finMarketableSecurities: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_marketable_securities'
    },
    finTotalCurrentAssets: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_total_current_assets'
    },
    finTangibleAssets: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_tangible_assets'
    },
    finIntangibleAssets: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_intangible_assets'
    },
    finNetFixedAssets: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_net_fixed_assets'
    },
    finAccountsReceivable: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_accounts_receivable'
    },
    finTotalInventory: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_total_inventory'
    },
    finTotalLiabilities: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_total_liabilities'
    },
    finTotalCurrentLiabilities: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_total_current_liabilities'
    },
    finAccountsPayable: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_accounts_payable'
    },
    finShortTermDebt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_short_term_debt'
    },
    finCurrentLongTermDebt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_current_long_term_debt'
    },
    finLongTermDebt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_long_term_debt'
    },
    finRetainedEarnings: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_retained_earnings'
    },
    finMinoritaryInterest: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_minoritary_interest'
    },
    finCapitalExpenditures: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_capital_expenditures'
    },
    finOperatingIncome: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_operating_income'
    },
    finDepreciationAmortization: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_depreciation_amortization'
    },
    finNumberOfEmployees: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fin_number_of_employees'
    },
    finAnnualSalary: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fin_annual_salary'
    }
  }, {
    sequelize,
    tableName: 'invpty_fncls',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_FNCLS",
        unique: true,
        fields: [
          { name: "invpty_code" },
          { name: "fin_statement_date" },
          { name: "fin_statement_type" },
        ]
      },
    ]
  });
  }
}
