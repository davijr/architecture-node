import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortContractList, PortContractListId } from './PortContractList';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';

export interface PnlInterestincClcAttributes {
  referenceDate: string;
  sourceTable: string;
  sourceSystem: string;
  companyCode: string;
  productCode: string;
  contractReference: string;
  calcSourceSystem: string;
  currencyCode: string;
  interestIncome?: number;
  interestExpense?: number;
  netInterestIncome?: number;
}

export type PnlInterestincClcPk = "referenceDate" | "sourceTable" | "sourceSystem" | "companyCode" | "productCode" | "contractReference" | "calcSourceSystem";
export type PnlInterestincClcId = PnlInterestincClc[PnlInterestincClcPk];
export type PnlInterestincClcOptionalAttributes = "interestIncome" | "interestExpense" | "netInterestIncome";
export type PnlInterestincClcCreationAttributes = Optional<PnlInterestincClcAttributes, PnlInterestincClcOptionalAttributes>;

export class PnlInterestincClc extends Model<PnlInterestincClcAttributes, PnlInterestincClcCreationAttributes> implements PnlInterestincClcAttributes {
  referenceDate!: string;
  sourceTable!: string;
  sourceSystem!: string;
  companyCode!: string;
  productCode!: string;
  contractReference!: string;
  calcSourceSystem!: string;
  currencyCode!: string;
  interestIncome?: number;
  interestExpense?: number;
  netInterestIncome?: number;

  // PnlInterestincClc belongsTo PortContractList via companyCode
  companyCodePortContractList!: PortContractList;
  getCompanyCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setCompanyCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createCompanyCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlInterestincClc belongsTo PortContractList via contractReference
  contractReferencePortContractList!: PortContractList;
  getContractReferencePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setContractReferencePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createContractReferencePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlInterestincClc belongsTo PortContractList via productCode
  productCodePortContractList!: PortContractList;
  getProductCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setProductCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createProductCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlInterestincClc belongsTo PortContractList via sourceSystem
  sourceSystemPortContractList!: PortContractList;
  getSourceSystemPortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSourceSystemPortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSourceSystemPortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlInterestincClc belongsTo PortContractList via sourceTable
  sourceTablePortContractList!: PortContractList;
  getSourceTablePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSourceTablePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSourceTablePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlInterestincClc belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PnlInterestincClc {
    return PnlInterestincClc.init({
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
    calcSourceSystem: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true,
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
    netInterestIncome: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'net_interest_income'
    }
  }, {
    sequelize,
    tableName: 'pnl_interestinc_clc',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PNL_INTERESTINC_CLC",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_table" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "product_code" },
          { name: "contract_reference" },
          { name: "calc_source_system" },
        ]
      },
      {
        name: "pnl_interestinc_clc_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
