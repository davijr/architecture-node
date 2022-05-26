import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Company, CompanyId } from './Company';

export interface CompanyLinkAttributes {
  companyCodeParent: string;
  companyCodeChild: string;
  linkWeight: number;
}

export type CompanyLinkPk = "companyCodeParent" | "companyCodeChild";
export type CompanyLinkId = CompanyLink[CompanyLinkPk];
export type CompanyLinkOptionalAttributes = "linkWeight";
export type CompanyLinkCreationAttributes = Optional<CompanyLinkAttributes, CompanyLinkOptionalAttributes>;

export class CompanyLink extends Model<CompanyLinkAttributes, CompanyLinkCreationAttributes> implements CompanyLinkAttributes {
  companyCodeParent!: string;
  companyCodeChild!: string;
  linkWeight!: number;

  // CompanyLink belongsTo Company via companyCodeChild
  companyCodeChildCompany!: Company;
  getCompanyCodeChildCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompanyCodeChildCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompanyCodeChildCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;
  // CompanyLink belongsTo Company via companyCodeParent
  companyCodeParentCompany!: Company;
  getCompanyCodeParentCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompanyCodeParentCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompanyCodeParentCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CompanyLink {
    return CompanyLink.init({
    companyCodeParent: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company',
        key: 'company_code'
      },
      field: 'company_code_parent'
    },
    companyCodeChild: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company',
        key: 'company_code'
      },
      field: 'company_code_child'
    },
    linkWeight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 1,
      field: 'link_weight'
    }
  }, {
    sequelize,
    tableName: 'company_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-COMPANY_LINK",
        unique: true,
        fields: [
          { name: "company_code_parent" },
          { name: "company_code_child" },
        ]
      },
    ]
  });
  }
}
