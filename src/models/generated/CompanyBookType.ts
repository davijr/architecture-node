import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyBook, CompanyBookId } from './CompanyBook';

export interface CompanyBookTypeAttributes {
  bookType: string;
  bookTypeDesc?: string;
  bookTypeLnkId: number;
}

export type CompanyBookTypePk = "bookType";
export type CompanyBookTypeId = CompanyBookType[CompanyBookTypePk];
export type CompanyBookTypeOptionalAttributes = "bookTypeDesc";
export type CompanyBookTypeCreationAttributes = Optional<CompanyBookTypeAttributes, CompanyBookTypeOptionalAttributes>;

export class CompanyBookType extends Model<CompanyBookTypeAttributes, CompanyBookTypeCreationAttributes> implements CompanyBookTypeAttributes {
  bookType!: string;
  bookTypeDesc?: string;
  bookTypeLnkId!: number;

  // CompanyBookType hasMany CompanyBook via bookTypeLnkId
  companyBooks!: CompanyBook[];
  getCompanyBooks!: Sequelize.HasManyGetAssociationsMixin<CompanyBook>;
  setCompanyBooks!: Sequelize.HasManySetAssociationsMixin<CompanyBook, CompanyBookId>;
  addCompanyBook!: Sequelize.HasManyAddAssociationMixin<CompanyBook, CompanyBookId>;
  addCompanyBooks!: Sequelize.HasManyAddAssociationsMixin<CompanyBook, CompanyBookId>;
  createCompanyBook!: Sequelize.HasManyCreateAssociationMixin<CompanyBook>;
  removeCompanyBook!: Sequelize.HasManyRemoveAssociationMixin<CompanyBook, CompanyBookId>;
  removeCompanyBooks!: Sequelize.HasManyRemoveAssociationsMixin<CompanyBook, CompanyBookId>;
  hasCompanyBook!: Sequelize.HasManyHasAssociationMixin<CompanyBook, CompanyBookId>;
  hasCompanyBooks!: Sequelize.HasManyHasAssociationsMixin<CompanyBook, CompanyBookId>;
  countCompanyBooks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof CompanyBookType {
    return CompanyBookType.init({
    bookType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      field: 'book_type'
    },
    bookTypeDesc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'book_type_desc'
    },
    bookTypeLnkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'book_type_lnk_id'
    }
  }, {
    sequelize,
    tableName: 'company_book_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-COMPANY_BOOK_TYPE",
        unique: true,
        fields: [
          { name: "book_type" },
        ]
      },
      {
        name: "company_book_type_book_type_lnk_id",
        unique: true,
        fields: [
          { name: "book_type_lnk_id" },
        ]
      },
    ]
  });
  }
}
