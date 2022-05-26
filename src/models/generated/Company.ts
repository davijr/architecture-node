import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { CompanyLink, CompanyLinkId } from './CompanyLink';
import type { CrmInstrumentList, CrmInstrumentListId } from './CrmInstrumentList';
import type { PortContractList, PortContractListId } from './PortContractList';

export interface CompanyAttributes {
  companyCode: string;
  companyName: string;
}

export type CompanyPk = "companyCode";
export type CompanyId = Company[CompanyPk];
export type CompanyCreationAttributes = CompanyAttributes;

export class Company extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
  companyCode!: string;
  companyName!: string;

  // Company belongsToMany Company via companyCodeChild and companyCodeParent
  companyCodeParentCompanies!: Company[];
  getCompanyCodeParentCompanies!: Sequelize.BelongsToManyGetAssociationsMixin<Company>;
  setCompanyCodeParentCompanies!: Sequelize.BelongsToManySetAssociationsMixin<Company, CompanyId>;
  addCompanyCodeParentCompany!: Sequelize.BelongsToManyAddAssociationMixin<Company, CompanyId>;
  addCompanyCodeParentCompanies!: Sequelize.BelongsToManyAddAssociationsMixin<Company, CompanyId>;
  createCompanyCodeParentCompany!: Sequelize.BelongsToManyCreateAssociationMixin<Company>;
  removeCompanyCodeParentCompany!: Sequelize.BelongsToManyRemoveAssociationMixin<Company, CompanyId>;
  removeCompanyCodeParentCompanies!: Sequelize.BelongsToManyRemoveAssociationsMixin<Company, CompanyId>;
  hasCompanyCodeParentCompany!: Sequelize.BelongsToManyHasAssociationMixin<Company, CompanyId>;
  hasCompanyCodeParentCompanies!: Sequelize.BelongsToManyHasAssociationsMixin<Company, CompanyId>;
  countCompanyCodeParentCompanies!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Company belongsToMany Company via companyCodeParent and companyCodeChild
  companyCodeChildCompanies!: Company[];
  getCompanyCodeChildCompanies!: Sequelize.BelongsToManyGetAssociationsMixin<Company>;
  setCompanyCodeChildCompanies!: Sequelize.BelongsToManySetAssociationsMixin<Company, CompanyId>;
  addCompanyCodeChildCompany!: Sequelize.BelongsToManyAddAssociationMixin<Company, CompanyId>;
  addCompanyCodeChildCompanies!: Sequelize.BelongsToManyAddAssociationsMixin<Company, CompanyId>;
  createCompanyCodeChildCompany!: Sequelize.BelongsToManyCreateAssociationMixin<Company>;
  removeCompanyCodeChildCompany!: Sequelize.BelongsToManyRemoveAssociationMixin<Company, CompanyId>;
  removeCompanyCodeChildCompanies!: Sequelize.BelongsToManyRemoveAssociationsMixin<Company, CompanyId>;
  hasCompanyCodeChildCompany!: Sequelize.BelongsToManyHasAssociationMixin<Company, CompanyId>;
  hasCompanyCodeChildCompanies!: Sequelize.BelongsToManyHasAssociationsMixin<Company, CompanyId>;
  countCompanyCodeChildCompanies!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Company hasMany CompanyCostCentre via companyCode
  companyCostCentres!: CompanyCostCentre[];
  getCompanyCostCentres!: Sequelize.HasManyGetAssociationsMixin<CompanyCostCentre>;
  setCompanyCostCentres!: Sequelize.HasManySetAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  addCompanyCostCentre!: Sequelize.HasManyAddAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  addCompanyCostCentres!: Sequelize.HasManyAddAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCostCentre!: Sequelize.HasManyCreateAssociationMixin<CompanyCostCentre>;
  removeCompanyCostCentre!: Sequelize.HasManyRemoveAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  removeCompanyCostCentres!: Sequelize.HasManyRemoveAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  hasCompanyCostCentre!: Sequelize.HasManyHasAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  hasCompanyCostCentres!: Sequelize.HasManyHasAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  countCompanyCostCentres!: Sequelize.HasManyCountAssociationsMixin;
  // Company hasMany CompanyLink via companyCodeChild
  companyLinks!: CompanyLink[];
  getCompanyLinks!: Sequelize.HasManyGetAssociationsMixin<CompanyLink>;
  setCompanyLinks!: Sequelize.HasManySetAssociationsMixin<CompanyLink, CompanyLinkId>;
  addCompanyLink!: Sequelize.HasManyAddAssociationMixin<CompanyLink, CompanyLinkId>;
  addCompanyLinks!: Sequelize.HasManyAddAssociationsMixin<CompanyLink, CompanyLinkId>;
  createCompanyLink!: Sequelize.HasManyCreateAssociationMixin<CompanyLink>;
  removeCompanyLink!: Sequelize.HasManyRemoveAssociationMixin<CompanyLink, CompanyLinkId>;
  removeCompanyLinks!: Sequelize.HasManyRemoveAssociationsMixin<CompanyLink, CompanyLinkId>;
  hasCompanyLink!: Sequelize.HasManyHasAssociationMixin<CompanyLink, CompanyLinkId>;
  hasCompanyLinks!: Sequelize.HasManyHasAssociationsMixin<CompanyLink, CompanyLinkId>;
  countCompanyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // Company hasMany CompanyLink via companyCodeParent
  companyCodeParentCompanyLinks!: CompanyLink[];
  getCompanyCodeParentCompanyLinks!: Sequelize.HasManyGetAssociationsMixin<CompanyLink>;
  setCompanyCodeParentCompanyLinks!: Sequelize.HasManySetAssociationsMixin<CompanyLink, CompanyLinkId>;
  addCompanyCodeParentCompanyLink!: Sequelize.HasManyAddAssociationMixin<CompanyLink, CompanyLinkId>;
  addCompanyCodeParentCompanyLinks!: Sequelize.HasManyAddAssociationsMixin<CompanyLink, CompanyLinkId>;
  createCompanyCodeParentCompanyLink!: Sequelize.HasManyCreateAssociationMixin<CompanyLink>;
  removeCompanyCodeParentCompanyLink!: Sequelize.HasManyRemoveAssociationMixin<CompanyLink, CompanyLinkId>;
  removeCompanyCodeParentCompanyLinks!: Sequelize.HasManyRemoveAssociationsMixin<CompanyLink, CompanyLinkId>;
  hasCompanyCodeParentCompanyLink!: Sequelize.HasManyHasAssociationMixin<CompanyLink, CompanyLinkId>;
  hasCompanyCodeParentCompanyLinks!: Sequelize.HasManyHasAssociationsMixin<CompanyLink, CompanyLinkId>;
  countCompanyCodeParentCompanyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // Company hasMany CrmInstrumentList via crmCompanyCode
  crmInstrumentLists!: CrmInstrumentList[];
  getCrmInstrumentLists!: Sequelize.HasManyGetAssociationsMixin<CrmInstrumentList>;
  setCrmInstrumentLists!: Sequelize.HasManySetAssociationsMixin<CrmInstrumentList, CrmInstrumentListId>;
  addCrmInstrumentList!: Sequelize.HasManyAddAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  addCrmInstrumentLists!: Sequelize.HasManyAddAssociationsMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmInstrumentList!: Sequelize.HasManyCreateAssociationMixin<CrmInstrumentList>;
  removeCrmInstrumentList!: Sequelize.HasManyRemoveAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  removeCrmInstrumentLists!: Sequelize.HasManyRemoveAssociationsMixin<CrmInstrumentList, CrmInstrumentListId>;
  hasCrmInstrumentList!: Sequelize.HasManyHasAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  hasCrmInstrumentLists!: Sequelize.HasManyHasAssociationsMixin<CrmInstrumentList, CrmInstrumentListId>;
  countCrmInstrumentLists!: Sequelize.HasManyCountAssociationsMixin;
  // Company hasMany PortContractList via companyCode
  portContractLists!: PortContractList[];
  getPortContractLists!: Sequelize.HasManyGetAssociationsMixin<PortContractList>;
  setPortContractLists!: Sequelize.HasManySetAssociationsMixin<PortContractList, PortContractListId>;
  addPortContractList!: Sequelize.HasManyAddAssociationMixin<PortContractList, PortContractListId>;
  addPortContractLists!: Sequelize.HasManyAddAssociationsMixin<PortContractList, PortContractListId>;
  createPortContractList!: Sequelize.HasManyCreateAssociationMixin<PortContractList>;
  removePortContractList!: Sequelize.HasManyRemoveAssociationMixin<PortContractList, PortContractListId>;
  removePortContractLists!: Sequelize.HasManyRemoveAssociationsMixin<PortContractList, PortContractListId>;
  hasPortContractList!: Sequelize.HasManyHasAssociationMixin<PortContractList, PortContractListId>;
  hasPortContractLists!: Sequelize.HasManyHasAssociationsMixin<PortContractList, PortContractListId>;
  countPortContractLists!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Company {
    return Company.init({
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      field: 'company_code'
    },
    companyName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'company_name'
    }
  }, {
    sequelize,
    tableName: 'company',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-COMPANY",
        unique: true,
        fields: [
          { name: "company_code" },
        ]
      },
    ]
  });
  }
}
