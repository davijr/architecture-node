import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TaxBankAccountInfoAttributes {
  entityCode: number;
  bankHolder: string;
  bankBranchCode: string;
  bankAccountNumber: string;
  bankBranchName?: number;
}

export type TaxBankAccountInfoPk = "entityCode" | "bankHolder" | "bankBranchCode" | "bankAccountNumber";
export type TaxBankAccountInfoId = TaxBankAccountInfo[TaxBankAccountInfoPk];
export type TaxBankAccountInfoOptionalAttributes = "bankBranchName";
export type TaxBankAccountInfoCreationAttributes = Optional<TaxBankAccountInfoAttributes, TaxBankAccountInfoOptionalAttributes>;

export class TaxBankAccountInfo extends Model<TaxBankAccountInfoAttributes, TaxBankAccountInfoCreationAttributes> implements TaxBankAccountInfoAttributes {
  entityCode!: number;
  bankHolder!: string;
  bankBranchCode!: string;
  bankAccountNumber!: string;
  bankBranchName?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof TaxBankAccountInfo {
    return TaxBankAccountInfo.init({
    entityCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'entity_code'
    },
    bankHolder: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      field: 'bank_holder'
    },
    bankBranchCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      field: 'bank_branch_code'
    },
    bankAccountNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      field: 'bank_account_number'
    },
    bankBranchName: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'bank_branch_name'
    }
  }, {
    sequelize,
    tableName: 'tax_bank_account_info',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-TAX_BANK_ACCOUNT_INFO",
        unique: true,
        fields: [
          { name: "entity_code" },
          { name: "bank_holder" },
          { name: "bank_branch_code" },
          { name: "bank_account_number" },
        ]
      },
    ]
  });
  }
}
