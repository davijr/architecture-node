import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyLob, CompanyLobId } from './CompanyLob';

export interface CompanyLobTypeAttributes {
  lobType: string;
  lobTypeDesc?: string;
}

export type CompanyLobTypePk = "lobType";
export type CompanyLobTypeId = CompanyLobType[CompanyLobTypePk];
export type CompanyLobTypeOptionalAttributes = "lobTypeDesc";
export type CompanyLobTypeCreationAttributes = Optional<CompanyLobTypeAttributes, CompanyLobTypeOptionalAttributes>;

export class CompanyLobType extends Model<CompanyLobTypeAttributes, CompanyLobTypeCreationAttributes> implements CompanyLobTypeAttributes {
  lobType!: string;
  lobTypeDesc?: string;

  // CompanyLobType hasMany CompanyLob via lobType
  companyLobs!: CompanyLob[];
  getCompanyLobs!: Sequelize.HasManyGetAssociationsMixin<CompanyLob>;
  setCompanyLobs!: Sequelize.HasManySetAssociationsMixin<CompanyLob, CompanyLobId>;
  addCompanyLob!: Sequelize.HasManyAddAssociationMixin<CompanyLob, CompanyLobId>;
  addCompanyLobs!: Sequelize.HasManyAddAssociationsMixin<CompanyLob, CompanyLobId>;
  createCompanyLob!: Sequelize.HasManyCreateAssociationMixin<CompanyLob>;
  removeCompanyLob!: Sequelize.HasManyRemoveAssociationMixin<CompanyLob, CompanyLobId>;
  removeCompanyLobs!: Sequelize.HasManyRemoveAssociationsMixin<CompanyLob, CompanyLobId>;
  hasCompanyLob!: Sequelize.HasManyHasAssociationMixin<CompanyLob, CompanyLobId>;
  hasCompanyLobs!: Sequelize.HasManyHasAssociationsMixin<CompanyLob, CompanyLobId>;
  countCompanyLobs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof CompanyLobType {
    return CompanyLobType.init({
    lobType: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      field: 'lob_type'
    },
    lobTypeDesc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'lob_type_desc'
    }
  }, {
    sequelize,
    tableName: 'company_lob_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-COMPANY_LOB_TYPE",
        unique: true,
        fields: [
          { name: "lob_type" },
        ]
      },
    ]
  });
  }
}
