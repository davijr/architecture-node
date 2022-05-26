import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Company, CompanyId } from './Company';
import type { CrmAgreementLink, CrmAgreementLinkId } from './CrmAgreementLink';
import type { CrmContractLink, CrmContractLinkId } from './CrmContractLink';
import type { CrmInvptyLink, CrmInvptyLinkId } from './CrmInvptyLink';
import type { CrmProductLink, CrmProductLinkId } from './CrmProductLink';
import type { Product, ProductId } from './Product';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';

export interface CrmInstrumentListAttributes {
  crmSourceTable: string;
  crmSourceSystem: string;
  crmCompanyCode: string;
  crmProductCode: string;
  crmContractReference: string;
}

export type CrmInstrumentListPk = "crmSourceTable" | "crmSourceSystem" | "crmCompanyCode" | "crmProductCode" | "crmContractReference";
export type CrmInstrumentListId = CrmInstrumentList[CrmInstrumentListPk];
export type CrmInstrumentListCreationAttributes = CrmInstrumentListAttributes;

export class CrmInstrumentList extends Model<CrmInstrumentListAttributes, CrmInstrumentListCreationAttributes> implements CrmInstrumentListAttributes {
  crmSourceTable!: string;
  crmSourceSystem!: string;
  crmCompanyCode!: string;
  crmProductCode!: string;
  crmContractReference!: string;

  // CrmInstrumentList belongsTo Company via crmCompanyCode
  crmCompanyCodeCompany!: Company;
  getCrmCompanyCodeCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCrmCompanyCodeCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCrmCompanyCodeCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;
  // CrmInstrumentList hasMany CrmAgreementLink via crmCompanyCode
  crmAgreementLinks!: CrmAgreementLink[];
  getCrmAgreementLinks!: Sequelize.HasManyGetAssociationsMixin<CrmAgreementLink>;
  setCrmAgreementLinks!: Sequelize.HasManySetAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmAgreementLink!: Sequelize.HasManyAddAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmAgreementLinks!: Sequelize.HasManyAddAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  createCrmAgreementLink!: Sequelize.HasManyCreateAssociationMixin<CrmAgreementLink>;
  removeCrmAgreementLink!: Sequelize.HasManyRemoveAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  removeCrmAgreementLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmAgreementLink!: Sequelize.HasManyHasAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmAgreementLinks!: Sequelize.HasManyHasAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  countCrmAgreementLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmAgreementLink via crmContractReference
  crmContractReferenceCrmAgreementLinks!: CrmAgreementLink[];
  getCrmContractReferenceCrmAgreementLinks!: Sequelize.HasManyGetAssociationsMixin<CrmAgreementLink>;
  setCrmContractReferenceCrmAgreementLinks!: Sequelize.HasManySetAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmContractReferenceCrmAgreementLink!: Sequelize.HasManyAddAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmContractReferenceCrmAgreementLinks!: Sequelize.HasManyAddAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  createCrmContractReferenceCrmAgreementLink!: Sequelize.HasManyCreateAssociationMixin<CrmAgreementLink>;
  removeCrmContractReferenceCrmAgreementLink!: Sequelize.HasManyRemoveAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  removeCrmContractReferenceCrmAgreementLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmContractReferenceCrmAgreementLink!: Sequelize.HasManyHasAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmContractReferenceCrmAgreementLinks!: Sequelize.HasManyHasAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  countCrmContractReferenceCrmAgreementLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmAgreementLink via crmProductCode
  crmProductCodeCrmAgreementLinks!: CrmAgreementLink[];
  getCrmProductCodeCrmAgreementLinks!: Sequelize.HasManyGetAssociationsMixin<CrmAgreementLink>;
  setCrmProductCodeCrmAgreementLinks!: Sequelize.HasManySetAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmProductCodeCrmAgreementLink!: Sequelize.HasManyAddAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmProductCodeCrmAgreementLinks!: Sequelize.HasManyAddAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  createCrmProductCodeCrmAgreementLink!: Sequelize.HasManyCreateAssociationMixin<CrmAgreementLink>;
  removeCrmProductCodeCrmAgreementLink!: Sequelize.HasManyRemoveAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  removeCrmProductCodeCrmAgreementLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmProductCodeCrmAgreementLink!: Sequelize.HasManyHasAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmProductCodeCrmAgreementLinks!: Sequelize.HasManyHasAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  countCrmProductCodeCrmAgreementLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmAgreementLink via crmSourceSystem
  crmSourceSystemCrmAgreementLinks!: CrmAgreementLink[];
  getCrmSourceSystemCrmAgreementLinks!: Sequelize.HasManyGetAssociationsMixin<CrmAgreementLink>;
  setCrmSourceSystemCrmAgreementLinks!: Sequelize.HasManySetAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmSourceSystemCrmAgreementLink!: Sequelize.HasManyAddAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmSourceSystemCrmAgreementLinks!: Sequelize.HasManyAddAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  createCrmSourceSystemCrmAgreementLink!: Sequelize.HasManyCreateAssociationMixin<CrmAgreementLink>;
  removeCrmSourceSystemCrmAgreementLink!: Sequelize.HasManyRemoveAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  removeCrmSourceSystemCrmAgreementLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmSourceSystemCrmAgreementLink!: Sequelize.HasManyHasAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmSourceSystemCrmAgreementLinks!: Sequelize.HasManyHasAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  countCrmSourceSystemCrmAgreementLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmAgreementLink via crmSourceTable
  crmSourceTableCrmAgreementLinks!: CrmAgreementLink[];
  getCrmSourceTableCrmAgreementLinks!: Sequelize.HasManyGetAssociationsMixin<CrmAgreementLink>;
  setCrmSourceTableCrmAgreementLinks!: Sequelize.HasManySetAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmSourceTableCrmAgreementLink!: Sequelize.HasManyAddAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmSourceTableCrmAgreementLinks!: Sequelize.HasManyAddAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  createCrmSourceTableCrmAgreementLink!: Sequelize.HasManyCreateAssociationMixin<CrmAgreementLink>;
  removeCrmSourceTableCrmAgreementLink!: Sequelize.HasManyRemoveAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  removeCrmSourceTableCrmAgreementLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmSourceTableCrmAgreementLink!: Sequelize.HasManyHasAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmSourceTableCrmAgreementLinks!: Sequelize.HasManyHasAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  countCrmSourceTableCrmAgreementLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmContractLink via crmCompanyCode
  crmContractLinks!: CrmContractLink[];
  getCrmContractLinks!: Sequelize.HasManyGetAssociationsMixin<CrmContractLink>;
  setCrmContractLinks!: Sequelize.HasManySetAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  addCrmContractLink!: Sequelize.HasManyAddAssociationMixin<CrmContractLink, CrmContractLinkId>;
  addCrmContractLinks!: Sequelize.HasManyAddAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  createCrmContractLink!: Sequelize.HasManyCreateAssociationMixin<CrmContractLink>;
  removeCrmContractLink!: Sequelize.HasManyRemoveAssociationMixin<CrmContractLink, CrmContractLinkId>;
  removeCrmContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmContractLink!: Sequelize.HasManyHasAssociationMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmContractLinks!: Sequelize.HasManyHasAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  countCrmContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmContractLink via crmContractReference
  crmContractReferenceCrmContractLinks!: CrmContractLink[];
  getCrmContractReferenceCrmContractLinks!: Sequelize.HasManyGetAssociationsMixin<CrmContractLink>;
  setCrmContractReferenceCrmContractLinks!: Sequelize.HasManySetAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  addCrmContractReferenceCrmContractLink!: Sequelize.HasManyAddAssociationMixin<CrmContractLink, CrmContractLinkId>;
  addCrmContractReferenceCrmContractLinks!: Sequelize.HasManyAddAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  createCrmContractReferenceCrmContractLink!: Sequelize.HasManyCreateAssociationMixin<CrmContractLink>;
  removeCrmContractReferenceCrmContractLink!: Sequelize.HasManyRemoveAssociationMixin<CrmContractLink, CrmContractLinkId>;
  removeCrmContractReferenceCrmContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmContractReferenceCrmContractLink!: Sequelize.HasManyHasAssociationMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmContractReferenceCrmContractLinks!: Sequelize.HasManyHasAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  countCrmContractReferenceCrmContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmContractLink via crmProductCode
  crmProductCodeCrmContractLinks!: CrmContractLink[];
  getCrmProductCodeCrmContractLinks!: Sequelize.HasManyGetAssociationsMixin<CrmContractLink>;
  setCrmProductCodeCrmContractLinks!: Sequelize.HasManySetAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  addCrmProductCodeCrmContractLink!: Sequelize.HasManyAddAssociationMixin<CrmContractLink, CrmContractLinkId>;
  addCrmProductCodeCrmContractLinks!: Sequelize.HasManyAddAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  createCrmProductCodeCrmContractLink!: Sequelize.HasManyCreateAssociationMixin<CrmContractLink>;
  removeCrmProductCodeCrmContractLink!: Sequelize.HasManyRemoveAssociationMixin<CrmContractLink, CrmContractLinkId>;
  removeCrmProductCodeCrmContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmProductCodeCrmContractLink!: Sequelize.HasManyHasAssociationMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmProductCodeCrmContractLinks!: Sequelize.HasManyHasAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  countCrmProductCodeCrmContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmContractLink via crmSourceSystem
  crmSourceSystemCrmContractLinks!: CrmContractLink[];
  getCrmSourceSystemCrmContractLinks!: Sequelize.HasManyGetAssociationsMixin<CrmContractLink>;
  setCrmSourceSystemCrmContractLinks!: Sequelize.HasManySetAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  addCrmSourceSystemCrmContractLink!: Sequelize.HasManyAddAssociationMixin<CrmContractLink, CrmContractLinkId>;
  addCrmSourceSystemCrmContractLinks!: Sequelize.HasManyAddAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  createCrmSourceSystemCrmContractLink!: Sequelize.HasManyCreateAssociationMixin<CrmContractLink>;
  removeCrmSourceSystemCrmContractLink!: Sequelize.HasManyRemoveAssociationMixin<CrmContractLink, CrmContractLinkId>;
  removeCrmSourceSystemCrmContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmSourceSystemCrmContractLink!: Sequelize.HasManyHasAssociationMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmSourceSystemCrmContractLinks!: Sequelize.HasManyHasAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  countCrmSourceSystemCrmContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmContractLink via crmSourceTable
  crmSourceTableCrmContractLinks!: CrmContractLink[];
  getCrmSourceTableCrmContractLinks!: Sequelize.HasManyGetAssociationsMixin<CrmContractLink>;
  setCrmSourceTableCrmContractLinks!: Sequelize.HasManySetAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  addCrmSourceTableCrmContractLink!: Sequelize.HasManyAddAssociationMixin<CrmContractLink, CrmContractLinkId>;
  addCrmSourceTableCrmContractLinks!: Sequelize.HasManyAddAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  createCrmSourceTableCrmContractLink!: Sequelize.HasManyCreateAssociationMixin<CrmContractLink>;
  removeCrmSourceTableCrmContractLink!: Sequelize.HasManyRemoveAssociationMixin<CrmContractLink, CrmContractLinkId>;
  removeCrmSourceTableCrmContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmSourceTableCrmContractLink!: Sequelize.HasManyHasAssociationMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmSourceTableCrmContractLinks!: Sequelize.HasManyHasAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  countCrmSourceTableCrmContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmInvptyLink via crmCompanyCode
  crmInvptyLinks!: CrmInvptyLink[];
  getCrmInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<CrmInvptyLink>;
  setCrmInvptyLinks!: Sequelize.HasManySetAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmInvptyLink!: Sequelize.HasManyAddAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmInvptyLinks!: Sequelize.HasManyAddAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  createCrmInvptyLink!: Sequelize.HasManyCreateAssociationMixin<CrmInvptyLink>;
  removeCrmInvptyLink!: Sequelize.HasManyRemoveAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  removeCrmInvptyLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmInvptyLink!: Sequelize.HasManyHasAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmInvptyLinks!: Sequelize.HasManyHasAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  countCrmInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmInvptyLink via crmContractReference
  crmContractReferenceCrmInvptyLinks!: CrmInvptyLink[];
  getCrmContractReferenceCrmInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<CrmInvptyLink>;
  setCrmContractReferenceCrmInvptyLinks!: Sequelize.HasManySetAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmContractReferenceCrmInvptyLink!: Sequelize.HasManyAddAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmContractReferenceCrmInvptyLinks!: Sequelize.HasManyAddAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  createCrmContractReferenceCrmInvptyLink!: Sequelize.HasManyCreateAssociationMixin<CrmInvptyLink>;
  removeCrmContractReferenceCrmInvptyLink!: Sequelize.HasManyRemoveAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  removeCrmContractReferenceCrmInvptyLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmContractReferenceCrmInvptyLink!: Sequelize.HasManyHasAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmContractReferenceCrmInvptyLinks!: Sequelize.HasManyHasAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  countCrmContractReferenceCrmInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmInvptyLink via crmProductCode
  crmProductCodeCrmInvptyLinks!: CrmInvptyLink[];
  getCrmProductCodeCrmInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<CrmInvptyLink>;
  setCrmProductCodeCrmInvptyLinks!: Sequelize.HasManySetAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmProductCodeCrmInvptyLink!: Sequelize.HasManyAddAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmProductCodeCrmInvptyLinks!: Sequelize.HasManyAddAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  createCrmProductCodeCrmInvptyLink!: Sequelize.HasManyCreateAssociationMixin<CrmInvptyLink>;
  removeCrmProductCodeCrmInvptyLink!: Sequelize.HasManyRemoveAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  removeCrmProductCodeCrmInvptyLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmProductCodeCrmInvptyLink!: Sequelize.HasManyHasAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmProductCodeCrmInvptyLinks!: Sequelize.HasManyHasAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  countCrmProductCodeCrmInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmInvptyLink via crmSourceSystem
  crmSourceSystemCrmInvptyLinks!: CrmInvptyLink[];
  getCrmSourceSystemCrmInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<CrmInvptyLink>;
  setCrmSourceSystemCrmInvptyLinks!: Sequelize.HasManySetAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmSourceSystemCrmInvptyLink!: Sequelize.HasManyAddAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmSourceSystemCrmInvptyLinks!: Sequelize.HasManyAddAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  createCrmSourceSystemCrmInvptyLink!: Sequelize.HasManyCreateAssociationMixin<CrmInvptyLink>;
  removeCrmSourceSystemCrmInvptyLink!: Sequelize.HasManyRemoveAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  removeCrmSourceSystemCrmInvptyLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmSourceSystemCrmInvptyLink!: Sequelize.HasManyHasAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmSourceSystemCrmInvptyLinks!: Sequelize.HasManyHasAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  countCrmSourceSystemCrmInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmInvptyLink via crmSourceTable
  crmSourceTableCrmInvptyLinks!: CrmInvptyLink[];
  getCrmSourceTableCrmInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<CrmInvptyLink>;
  setCrmSourceTableCrmInvptyLinks!: Sequelize.HasManySetAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmSourceTableCrmInvptyLink!: Sequelize.HasManyAddAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmSourceTableCrmInvptyLinks!: Sequelize.HasManyAddAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  createCrmSourceTableCrmInvptyLink!: Sequelize.HasManyCreateAssociationMixin<CrmInvptyLink>;
  removeCrmSourceTableCrmInvptyLink!: Sequelize.HasManyRemoveAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  removeCrmSourceTableCrmInvptyLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmSourceTableCrmInvptyLink!: Sequelize.HasManyHasAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmSourceTableCrmInvptyLinks!: Sequelize.HasManyHasAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  countCrmSourceTableCrmInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmProductLink via crmCompanyCode
  crmProductLinks!: CrmProductLink[];
  getCrmProductLinks!: Sequelize.HasManyGetAssociationsMixin<CrmProductLink>;
  setCrmProductLinks!: Sequelize.HasManySetAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  addCrmProductLink!: Sequelize.HasManyAddAssociationMixin<CrmProductLink, CrmProductLinkId>;
  addCrmProductLinks!: Sequelize.HasManyAddAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  createCrmProductLink!: Sequelize.HasManyCreateAssociationMixin<CrmProductLink>;
  removeCrmProductLink!: Sequelize.HasManyRemoveAssociationMixin<CrmProductLink, CrmProductLinkId>;
  removeCrmProductLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmProductLink!: Sequelize.HasManyHasAssociationMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmProductLinks!: Sequelize.HasManyHasAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  countCrmProductLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmProductLink via crmContractReference
  crmContractReferenceCrmProductLinks!: CrmProductLink[];
  getCrmContractReferenceCrmProductLinks!: Sequelize.HasManyGetAssociationsMixin<CrmProductLink>;
  setCrmContractReferenceCrmProductLinks!: Sequelize.HasManySetAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  addCrmContractReferenceCrmProductLink!: Sequelize.HasManyAddAssociationMixin<CrmProductLink, CrmProductLinkId>;
  addCrmContractReferenceCrmProductLinks!: Sequelize.HasManyAddAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  createCrmContractReferenceCrmProductLink!: Sequelize.HasManyCreateAssociationMixin<CrmProductLink>;
  removeCrmContractReferenceCrmProductLink!: Sequelize.HasManyRemoveAssociationMixin<CrmProductLink, CrmProductLinkId>;
  removeCrmContractReferenceCrmProductLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmContractReferenceCrmProductLink!: Sequelize.HasManyHasAssociationMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmContractReferenceCrmProductLinks!: Sequelize.HasManyHasAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  countCrmContractReferenceCrmProductLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmProductLink via crmProductCode
  crmProductCodeCrmProductLinks!: CrmProductLink[];
  getCrmProductCodeCrmProductLinks!: Sequelize.HasManyGetAssociationsMixin<CrmProductLink>;
  setCrmProductCodeCrmProductLinks!: Sequelize.HasManySetAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  addCrmProductCodeCrmProductLink!: Sequelize.HasManyAddAssociationMixin<CrmProductLink, CrmProductLinkId>;
  addCrmProductCodeCrmProductLinks!: Sequelize.HasManyAddAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  createCrmProductCodeCrmProductLink!: Sequelize.HasManyCreateAssociationMixin<CrmProductLink>;
  removeCrmProductCodeCrmProductLink!: Sequelize.HasManyRemoveAssociationMixin<CrmProductLink, CrmProductLinkId>;
  removeCrmProductCodeCrmProductLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmProductCodeCrmProductLink!: Sequelize.HasManyHasAssociationMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmProductCodeCrmProductLinks!: Sequelize.HasManyHasAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  countCrmProductCodeCrmProductLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmProductLink via crmSourceSystem
  crmSourceSystemCrmProductLinks!: CrmProductLink[];
  getCrmSourceSystemCrmProductLinks!: Sequelize.HasManyGetAssociationsMixin<CrmProductLink>;
  setCrmSourceSystemCrmProductLinks!: Sequelize.HasManySetAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  addCrmSourceSystemCrmProductLink!: Sequelize.HasManyAddAssociationMixin<CrmProductLink, CrmProductLinkId>;
  addCrmSourceSystemCrmProductLinks!: Sequelize.HasManyAddAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  createCrmSourceSystemCrmProductLink!: Sequelize.HasManyCreateAssociationMixin<CrmProductLink>;
  removeCrmSourceSystemCrmProductLink!: Sequelize.HasManyRemoveAssociationMixin<CrmProductLink, CrmProductLinkId>;
  removeCrmSourceSystemCrmProductLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmSourceSystemCrmProductLink!: Sequelize.HasManyHasAssociationMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmSourceSystemCrmProductLinks!: Sequelize.HasManyHasAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  countCrmSourceSystemCrmProductLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList hasMany CrmProductLink via crmSourceTable
  crmSourceTableCrmProductLinks!: CrmProductLink[];
  getCrmSourceTableCrmProductLinks!: Sequelize.HasManyGetAssociationsMixin<CrmProductLink>;
  setCrmSourceTableCrmProductLinks!: Sequelize.HasManySetAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  addCrmSourceTableCrmProductLink!: Sequelize.HasManyAddAssociationMixin<CrmProductLink, CrmProductLinkId>;
  addCrmSourceTableCrmProductLinks!: Sequelize.HasManyAddAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  createCrmSourceTableCrmProductLink!: Sequelize.HasManyCreateAssociationMixin<CrmProductLink>;
  removeCrmSourceTableCrmProductLink!: Sequelize.HasManyRemoveAssociationMixin<CrmProductLink, CrmProductLinkId>;
  removeCrmSourceTableCrmProductLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmSourceTableCrmProductLink!: Sequelize.HasManyHasAssociationMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmSourceTableCrmProductLinks!: Sequelize.HasManyHasAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  countCrmSourceTableCrmProductLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmInstrumentList belongsTo Product via crmProductCode
  crmProductCodeProduct!: Product;
  getCrmProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setCrmProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createCrmProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // CrmInstrumentList belongsTo SysExternalSystem via crmSourceSystem
  crmSourceSystemSysExternalSystem!: SysExternalSystem;
  getCrmSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setCrmSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createCrmSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CrmInstrumentList {
    return CrmInstrumentList.init({
    crmSourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'crm_source_table'
    },
    crmSourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_external_system',
        key: 'source_system'
      },
      field: 'crm_source_system'
    },
    crmCompanyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company',
        key: 'company_code'
      },
      field: 'crm_company_code'
    },
    crmProductCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'product_code'
      },
      field: 'crm_product_code'
    },
    crmContractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'crm_contract_reference'
    }
  }, {
    sequelize,
    tableName: 'crm_instrument_list',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-CRM_INSTRUMENT_LIST",
        unique: true,
        fields: [
          { name: "crm_source_table" },
          { name: "crm_source_system" },
          { name: "crm_company_code" },
          { name: "crm_product_code" },
          { name: "crm_contract_reference" },
        ]
      },
    ]
  });
  }
}
