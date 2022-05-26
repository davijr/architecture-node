import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { BuyinContractLink, BuyinContractLinkId } from './BuyinContractLink';
import type { Company, CompanyId } from './Company';
import type { CrmContractLink, CrmContractLinkId } from './CrmContractLink';
import type { PnlFeeincDet, PnlFeeincDetId } from './PnlFeeincDet';
import type { PnlGmplexClc, PnlGmplexClcId } from './PnlGmplexClc';
import type { PnlInterestincClc, PnlInterestincClcId } from './PnlInterestincClc';
import type { PortFctyLnk, PortFctyLnkId } from './PortFctyLnk';
import type { PortHedgeLnk, PortHedgeLnkId } from './PortHedgeLnk';
import type { PortThirdPartyLnk, PortThirdPartyLnkId } from './PortThirdPartyLnk';
import type { Product, ProductId } from './Product';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';

export interface PortContractListAttributes {
  sourceTable: string;
  sourceSystem: string;
  companyCode: string;
  productCode: string;
  contractReference: string;
}

export type PortContractListPk = "sourceTable" | "sourceSystem" | "companyCode" | "productCode" | "contractReference";
export type PortContractListId = PortContractList[PortContractListPk];
export type PortContractListCreationAttributes = PortContractListAttributes;

export class PortContractList extends Model<PortContractListAttributes, PortContractListCreationAttributes> implements PortContractListAttributes {
  sourceTable!: string;
  sourceSystem!: string;
  companyCode!: string;
  productCode!: string;
  contractReference!: string;

  // PortContractList belongsTo Company via companyCode
  companyCodeCompany!: Company;
  getCompanyCodeCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompanyCodeCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompanyCodeCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;
  // PortContractList hasMany BuyinContractLink via buyinContractReference
  buyinContractLinks!: BuyinContractLink[];
  getBuyinContractLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinContractLink>;
  setBuyinContractLinks!: Sequelize.HasManySetAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  addBuyinContractLink!: Sequelize.HasManyAddAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  addBuyinContractLinks!: Sequelize.HasManyAddAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  createBuyinContractLink!: Sequelize.HasManyCreateAssociationMixin<BuyinContractLink>;
  removeBuyinContractLink!: Sequelize.HasManyRemoveAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  removeBuyinContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  hasBuyinContractLink!: Sequelize.HasManyHasAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  hasBuyinContractLinks!: Sequelize.HasManyHasAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  countBuyinContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany BuyinContractLink via buyinProductCode
  buyinProductCodeBuyinContractLinks!: BuyinContractLink[];
  getBuyinProductCodeBuyinContractLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinContractLink>;
  setBuyinProductCodeBuyinContractLinks!: Sequelize.HasManySetAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  addBuyinProductCodeBuyinContractLink!: Sequelize.HasManyAddAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  addBuyinProductCodeBuyinContractLinks!: Sequelize.HasManyAddAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  createBuyinProductCodeBuyinContractLink!: Sequelize.HasManyCreateAssociationMixin<BuyinContractLink>;
  removeBuyinProductCodeBuyinContractLink!: Sequelize.HasManyRemoveAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  removeBuyinProductCodeBuyinContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  hasBuyinProductCodeBuyinContractLink!: Sequelize.HasManyHasAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  hasBuyinProductCodeBuyinContractLinks!: Sequelize.HasManyHasAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  countBuyinProductCodeBuyinContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany BuyinContractLink via buyinSourceSystem
  buyinSourceSystemBuyinContractLinks!: BuyinContractLink[];
  getBuyinSourceSystemBuyinContractLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinContractLink>;
  setBuyinSourceSystemBuyinContractLinks!: Sequelize.HasManySetAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  addBuyinSourceSystemBuyinContractLink!: Sequelize.HasManyAddAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  addBuyinSourceSystemBuyinContractLinks!: Sequelize.HasManyAddAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  createBuyinSourceSystemBuyinContractLink!: Sequelize.HasManyCreateAssociationMixin<BuyinContractLink>;
  removeBuyinSourceSystemBuyinContractLink!: Sequelize.HasManyRemoveAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  removeBuyinSourceSystemBuyinContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  hasBuyinSourceSystemBuyinContractLink!: Sequelize.HasManyHasAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  hasBuyinSourceSystemBuyinContractLinks!: Sequelize.HasManyHasAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  countBuyinSourceSystemBuyinContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany BuyinContractLink via buyinSourceTable
  buyinSourceTableBuyinContractLinks!: BuyinContractLink[];
  getBuyinSourceTableBuyinContractLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinContractLink>;
  setBuyinSourceTableBuyinContractLinks!: Sequelize.HasManySetAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  addBuyinSourceTableBuyinContractLink!: Sequelize.HasManyAddAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  addBuyinSourceTableBuyinContractLinks!: Sequelize.HasManyAddAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  createBuyinSourceTableBuyinContractLink!: Sequelize.HasManyCreateAssociationMixin<BuyinContractLink>;
  removeBuyinSourceTableBuyinContractLink!: Sequelize.HasManyRemoveAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  removeBuyinSourceTableBuyinContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  hasBuyinSourceTableBuyinContractLink!: Sequelize.HasManyHasAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  hasBuyinSourceTableBuyinContractLinks!: Sequelize.HasManyHasAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  countBuyinSourceTableBuyinContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany BuyinContractLink via companyCode
  companyCodeBuyinContractLinks!: BuyinContractLink[];
  getCompanyCodeBuyinContractLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinContractLink>;
  setCompanyCodeBuyinContractLinks!: Sequelize.HasManySetAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  addCompanyCodeBuyinContractLink!: Sequelize.HasManyAddAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  addCompanyCodeBuyinContractLinks!: Sequelize.HasManyAddAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  createCompanyCodeBuyinContractLink!: Sequelize.HasManyCreateAssociationMixin<BuyinContractLink>;
  removeCompanyCodeBuyinContractLink!: Sequelize.HasManyRemoveAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  removeCompanyCodeBuyinContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  hasCompanyCodeBuyinContractLink!: Sequelize.HasManyHasAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  hasCompanyCodeBuyinContractLinks!: Sequelize.HasManyHasAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  countCompanyCodeBuyinContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany BuyinContractLink via selloutContractReference
  selloutContractReferenceBuyinContractLinks!: BuyinContractLink[];
  getSelloutContractReferenceBuyinContractLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinContractLink>;
  setSelloutContractReferenceBuyinContractLinks!: Sequelize.HasManySetAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  addSelloutContractReferenceBuyinContractLink!: Sequelize.HasManyAddAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  addSelloutContractReferenceBuyinContractLinks!: Sequelize.HasManyAddAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  createSelloutContractReferenceBuyinContractLink!: Sequelize.HasManyCreateAssociationMixin<BuyinContractLink>;
  removeSelloutContractReferenceBuyinContractLink!: Sequelize.HasManyRemoveAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  removeSelloutContractReferenceBuyinContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  hasSelloutContractReferenceBuyinContractLink!: Sequelize.HasManyHasAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  hasSelloutContractReferenceBuyinContractLinks!: Sequelize.HasManyHasAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  countSelloutContractReferenceBuyinContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany BuyinContractLink via selloutProductCode
  selloutProductCodeBuyinContractLinks!: BuyinContractLink[];
  getSelloutProductCodeBuyinContractLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinContractLink>;
  setSelloutProductCodeBuyinContractLinks!: Sequelize.HasManySetAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  addSelloutProductCodeBuyinContractLink!: Sequelize.HasManyAddAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  addSelloutProductCodeBuyinContractLinks!: Sequelize.HasManyAddAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  createSelloutProductCodeBuyinContractLink!: Sequelize.HasManyCreateAssociationMixin<BuyinContractLink>;
  removeSelloutProductCodeBuyinContractLink!: Sequelize.HasManyRemoveAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  removeSelloutProductCodeBuyinContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  hasSelloutProductCodeBuyinContractLink!: Sequelize.HasManyHasAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  hasSelloutProductCodeBuyinContractLinks!: Sequelize.HasManyHasAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  countSelloutProductCodeBuyinContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany BuyinContractLink via selloutSourceSystem
  selloutSourceSystemBuyinContractLinks!: BuyinContractLink[];
  getSelloutSourceSystemBuyinContractLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinContractLink>;
  setSelloutSourceSystemBuyinContractLinks!: Sequelize.HasManySetAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  addSelloutSourceSystemBuyinContractLink!: Sequelize.HasManyAddAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  addSelloutSourceSystemBuyinContractLinks!: Sequelize.HasManyAddAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  createSelloutSourceSystemBuyinContractLink!: Sequelize.HasManyCreateAssociationMixin<BuyinContractLink>;
  removeSelloutSourceSystemBuyinContractLink!: Sequelize.HasManyRemoveAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  removeSelloutSourceSystemBuyinContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  hasSelloutSourceSystemBuyinContractLink!: Sequelize.HasManyHasAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  hasSelloutSourceSystemBuyinContractLinks!: Sequelize.HasManyHasAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  countSelloutSourceSystemBuyinContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany BuyinContractLink via selloutSourceTable
  selloutSourceTableBuyinContractLinks!: BuyinContractLink[];
  getSelloutSourceTableBuyinContractLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinContractLink>;
  setSelloutSourceTableBuyinContractLinks!: Sequelize.HasManySetAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  addSelloutSourceTableBuyinContractLink!: Sequelize.HasManyAddAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  addSelloutSourceTableBuyinContractLinks!: Sequelize.HasManyAddAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  createSelloutSourceTableBuyinContractLink!: Sequelize.HasManyCreateAssociationMixin<BuyinContractLink>;
  removeSelloutSourceTableBuyinContractLink!: Sequelize.HasManyRemoveAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  removeSelloutSourceTableBuyinContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  hasSelloutSourceTableBuyinContractLink!: Sequelize.HasManyHasAssociationMixin<BuyinContractLink, BuyinContractLinkId>;
  hasSelloutSourceTableBuyinContractLinks!: Sequelize.HasManyHasAssociationsMixin<BuyinContractLink, BuyinContractLinkId>;
  countSelloutSourceTableBuyinContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany CrmContractLink via obligContractReference
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
  // PortContractList hasMany CrmContractLink via obligCtrctCompanyCode
  obligCtrctCompanyCodeCrmContractLinks!: CrmContractLink[];
  getObligCtrctCompanyCodeCrmContractLinks!: Sequelize.HasManyGetAssociationsMixin<CrmContractLink>;
  setObligCtrctCompanyCodeCrmContractLinks!: Sequelize.HasManySetAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  addObligCtrctCompanyCodeCrmContractLink!: Sequelize.HasManyAddAssociationMixin<CrmContractLink, CrmContractLinkId>;
  addObligCtrctCompanyCodeCrmContractLinks!: Sequelize.HasManyAddAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  createObligCtrctCompanyCodeCrmContractLink!: Sequelize.HasManyCreateAssociationMixin<CrmContractLink>;
  removeObligCtrctCompanyCodeCrmContractLink!: Sequelize.HasManyRemoveAssociationMixin<CrmContractLink, CrmContractLinkId>;
  removeObligCtrctCompanyCodeCrmContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  hasObligCtrctCompanyCodeCrmContractLink!: Sequelize.HasManyHasAssociationMixin<CrmContractLink, CrmContractLinkId>;
  hasObligCtrctCompanyCodeCrmContractLinks!: Sequelize.HasManyHasAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  countObligCtrctCompanyCodeCrmContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany CrmContractLink via obligCtrctProductCode
  obligCtrctProductCodeCrmContractLinks!: CrmContractLink[];
  getObligCtrctProductCodeCrmContractLinks!: Sequelize.HasManyGetAssociationsMixin<CrmContractLink>;
  setObligCtrctProductCodeCrmContractLinks!: Sequelize.HasManySetAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  addObligCtrctProductCodeCrmContractLink!: Sequelize.HasManyAddAssociationMixin<CrmContractLink, CrmContractLinkId>;
  addObligCtrctProductCodeCrmContractLinks!: Sequelize.HasManyAddAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  createObligCtrctProductCodeCrmContractLink!: Sequelize.HasManyCreateAssociationMixin<CrmContractLink>;
  removeObligCtrctProductCodeCrmContractLink!: Sequelize.HasManyRemoveAssociationMixin<CrmContractLink, CrmContractLinkId>;
  removeObligCtrctProductCodeCrmContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  hasObligCtrctProductCodeCrmContractLink!: Sequelize.HasManyHasAssociationMixin<CrmContractLink, CrmContractLinkId>;
  hasObligCtrctProductCodeCrmContractLinks!: Sequelize.HasManyHasAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  countObligCtrctProductCodeCrmContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany CrmContractLink via obligCtrctSourceSystem
  obligCtrctSourceSystemCrmContractLinks!: CrmContractLink[];
  getObligCtrctSourceSystemCrmContractLinks!: Sequelize.HasManyGetAssociationsMixin<CrmContractLink>;
  setObligCtrctSourceSystemCrmContractLinks!: Sequelize.HasManySetAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  addObligCtrctSourceSystemCrmContractLink!: Sequelize.HasManyAddAssociationMixin<CrmContractLink, CrmContractLinkId>;
  addObligCtrctSourceSystemCrmContractLinks!: Sequelize.HasManyAddAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  createObligCtrctSourceSystemCrmContractLink!: Sequelize.HasManyCreateAssociationMixin<CrmContractLink>;
  removeObligCtrctSourceSystemCrmContractLink!: Sequelize.HasManyRemoveAssociationMixin<CrmContractLink, CrmContractLinkId>;
  removeObligCtrctSourceSystemCrmContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  hasObligCtrctSourceSystemCrmContractLink!: Sequelize.HasManyHasAssociationMixin<CrmContractLink, CrmContractLinkId>;
  hasObligCtrctSourceSystemCrmContractLinks!: Sequelize.HasManyHasAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  countObligCtrctSourceSystemCrmContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany CrmContractLink via obligCtrctSourceTable
  obligCtrctSourceTableCrmContractLinks!: CrmContractLink[];
  getObligCtrctSourceTableCrmContractLinks!: Sequelize.HasManyGetAssociationsMixin<CrmContractLink>;
  setObligCtrctSourceTableCrmContractLinks!: Sequelize.HasManySetAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  addObligCtrctSourceTableCrmContractLink!: Sequelize.HasManyAddAssociationMixin<CrmContractLink, CrmContractLinkId>;
  addObligCtrctSourceTableCrmContractLinks!: Sequelize.HasManyAddAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  createObligCtrctSourceTableCrmContractLink!: Sequelize.HasManyCreateAssociationMixin<CrmContractLink>;
  removeObligCtrctSourceTableCrmContractLink!: Sequelize.HasManyRemoveAssociationMixin<CrmContractLink, CrmContractLinkId>;
  removeObligCtrctSourceTableCrmContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  hasObligCtrctSourceTableCrmContractLink!: Sequelize.HasManyHasAssociationMixin<CrmContractLink, CrmContractLinkId>;
  hasObligCtrctSourceTableCrmContractLinks!: Sequelize.HasManyHasAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  countObligCtrctSourceTableCrmContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlFeeincDet via companyCode
  pnlFeeincDets!: PnlFeeincDet[];
  getPnlFeeincDets!: Sequelize.HasManyGetAssociationsMixin<PnlFeeincDet>;
  setPnlFeeincDets!: Sequelize.HasManySetAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  addPnlFeeincDet!: Sequelize.HasManyAddAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  addPnlFeeincDets!: Sequelize.HasManyAddAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  createPnlFeeincDet!: Sequelize.HasManyCreateAssociationMixin<PnlFeeincDet>;
  removePnlFeeincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  removePnlFeeincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasPnlFeeincDet!: Sequelize.HasManyHasAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasPnlFeeincDets!: Sequelize.HasManyHasAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  countPnlFeeincDets!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlFeeincDet via contractReference
  contractReferencePnlFeeincDets!: PnlFeeincDet[];
  getContractReferencePnlFeeincDets!: Sequelize.HasManyGetAssociationsMixin<PnlFeeincDet>;
  setContractReferencePnlFeeincDets!: Sequelize.HasManySetAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  addContractReferencePnlFeeincDet!: Sequelize.HasManyAddAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  addContractReferencePnlFeeincDets!: Sequelize.HasManyAddAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  createContractReferencePnlFeeincDet!: Sequelize.HasManyCreateAssociationMixin<PnlFeeincDet>;
  removeContractReferencePnlFeeincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  removeContractReferencePnlFeeincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasContractReferencePnlFeeincDet!: Sequelize.HasManyHasAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasContractReferencePnlFeeincDets!: Sequelize.HasManyHasAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  countContractReferencePnlFeeincDets!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlFeeincDet via productCode
  productCodePnlFeeincDets!: PnlFeeincDet[];
  getProductCodePnlFeeincDets!: Sequelize.HasManyGetAssociationsMixin<PnlFeeincDet>;
  setProductCodePnlFeeincDets!: Sequelize.HasManySetAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  addProductCodePnlFeeincDet!: Sequelize.HasManyAddAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  addProductCodePnlFeeincDets!: Sequelize.HasManyAddAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  createProductCodePnlFeeincDet!: Sequelize.HasManyCreateAssociationMixin<PnlFeeincDet>;
  removeProductCodePnlFeeincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  removeProductCodePnlFeeincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasProductCodePnlFeeincDet!: Sequelize.HasManyHasAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasProductCodePnlFeeincDets!: Sequelize.HasManyHasAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  countProductCodePnlFeeincDets!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlFeeincDet via sourceSystem
  sourceSystemPnlFeeincDets!: PnlFeeincDet[];
  getSourceSystemPnlFeeincDets!: Sequelize.HasManyGetAssociationsMixin<PnlFeeincDet>;
  setSourceSystemPnlFeeincDets!: Sequelize.HasManySetAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  addSourceSystemPnlFeeincDet!: Sequelize.HasManyAddAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  addSourceSystemPnlFeeincDets!: Sequelize.HasManyAddAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  createSourceSystemPnlFeeincDet!: Sequelize.HasManyCreateAssociationMixin<PnlFeeincDet>;
  removeSourceSystemPnlFeeincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  removeSourceSystemPnlFeeincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasSourceSystemPnlFeeincDet!: Sequelize.HasManyHasAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasSourceSystemPnlFeeincDets!: Sequelize.HasManyHasAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  countSourceSystemPnlFeeincDets!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlFeeincDet via sourceTable
  sourceTablePnlFeeincDets!: PnlFeeincDet[];
  getSourceTablePnlFeeincDets!: Sequelize.HasManyGetAssociationsMixin<PnlFeeincDet>;
  setSourceTablePnlFeeincDets!: Sequelize.HasManySetAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  addSourceTablePnlFeeincDet!: Sequelize.HasManyAddAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  addSourceTablePnlFeeincDets!: Sequelize.HasManyAddAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  createSourceTablePnlFeeincDet!: Sequelize.HasManyCreateAssociationMixin<PnlFeeincDet>;
  removeSourceTablePnlFeeincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  removeSourceTablePnlFeeincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasSourceTablePnlFeeincDet!: Sequelize.HasManyHasAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasSourceTablePnlFeeincDets!: Sequelize.HasManyHasAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  countSourceTablePnlFeeincDets!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlGmplexClc via companyCode
  pnlGmplexClcs!: PnlGmplexClc[];
  getPnlGmplexClcs!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexClc>;
  setPnlGmplexClcs!: Sequelize.HasManySetAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  addPnlGmplexClc!: Sequelize.HasManyAddAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  addPnlGmplexClcs!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  createPnlGmplexClc!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexClc>;
  removePnlGmplexClc!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  removePnlGmplexClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasPnlGmplexClc!: Sequelize.HasManyHasAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasPnlGmplexClcs!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  countPnlGmplexClcs!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlGmplexClc via contractReference
  contractReferencePnlGmplexClcs!: PnlGmplexClc[];
  getContractReferencePnlGmplexClcs!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexClc>;
  setContractReferencePnlGmplexClcs!: Sequelize.HasManySetAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  addContractReferencePnlGmplexClc!: Sequelize.HasManyAddAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  addContractReferencePnlGmplexClcs!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  createContractReferencePnlGmplexClc!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexClc>;
  removeContractReferencePnlGmplexClc!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  removeContractReferencePnlGmplexClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasContractReferencePnlGmplexClc!: Sequelize.HasManyHasAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasContractReferencePnlGmplexClcs!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  countContractReferencePnlGmplexClcs!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlGmplexClc via productCode
  productCodePnlGmplexClcs!: PnlGmplexClc[];
  getProductCodePnlGmplexClcs!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexClc>;
  setProductCodePnlGmplexClcs!: Sequelize.HasManySetAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  addProductCodePnlGmplexClc!: Sequelize.HasManyAddAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  addProductCodePnlGmplexClcs!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  createProductCodePnlGmplexClc!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexClc>;
  removeProductCodePnlGmplexClc!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  removeProductCodePnlGmplexClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasProductCodePnlGmplexClc!: Sequelize.HasManyHasAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasProductCodePnlGmplexClcs!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  countProductCodePnlGmplexClcs!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlGmplexClc via sourceSystem
  sourceSystemPnlGmplexClcs!: PnlGmplexClc[];
  getSourceSystemPnlGmplexClcs!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexClc>;
  setSourceSystemPnlGmplexClcs!: Sequelize.HasManySetAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  addSourceSystemPnlGmplexClc!: Sequelize.HasManyAddAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  addSourceSystemPnlGmplexClcs!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  createSourceSystemPnlGmplexClc!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexClc>;
  removeSourceSystemPnlGmplexClc!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  removeSourceSystemPnlGmplexClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasSourceSystemPnlGmplexClc!: Sequelize.HasManyHasAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasSourceSystemPnlGmplexClcs!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  countSourceSystemPnlGmplexClcs!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlGmplexClc via sourceTable
  sourceTablePnlGmplexClcs!: PnlGmplexClc[];
  getSourceTablePnlGmplexClcs!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexClc>;
  setSourceTablePnlGmplexClcs!: Sequelize.HasManySetAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  addSourceTablePnlGmplexClc!: Sequelize.HasManyAddAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  addSourceTablePnlGmplexClcs!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  createSourceTablePnlGmplexClc!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexClc>;
  removeSourceTablePnlGmplexClc!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  removeSourceTablePnlGmplexClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasSourceTablePnlGmplexClc!: Sequelize.HasManyHasAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasSourceTablePnlGmplexClcs!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  countSourceTablePnlGmplexClcs!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlInterestincClc via companyCode
  pnlInterestincClcs!: PnlInterestincClc[];
  getPnlInterestincClcs!: Sequelize.HasManyGetAssociationsMixin<PnlInterestincClc>;
  setPnlInterestincClcs!: Sequelize.HasManySetAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  addPnlInterestincClc!: Sequelize.HasManyAddAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  addPnlInterestincClcs!: Sequelize.HasManyAddAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  createPnlInterestincClc!: Sequelize.HasManyCreateAssociationMixin<PnlInterestincClc>;
  removePnlInterestincClc!: Sequelize.HasManyRemoveAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  removePnlInterestincClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasPnlInterestincClc!: Sequelize.HasManyHasAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasPnlInterestincClcs!: Sequelize.HasManyHasAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  countPnlInterestincClcs!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlInterestincClc via contractReference
  contractReferencePnlInterestincClcs!: PnlInterestincClc[];
  getContractReferencePnlInterestincClcs!: Sequelize.HasManyGetAssociationsMixin<PnlInterestincClc>;
  setContractReferencePnlInterestincClcs!: Sequelize.HasManySetAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  addContractReferencePnlInterestincClc!: Sequelize.HasManyAddAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  addContractReferencePnlInterestincClcs!: Sequelize.HasManyAddAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  createContractReferencePnlInterestincClc!: Sequelize.HasManyCreateAssociationMixin<PnlInterestincClc>;
  removeContractReferencePnlInterestincClc!: Sequelize.HasManyRemoveAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  removeContractReferencePnlInterestincClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasContractReferencePnlInterestincClc!: Sequelize.HasManyHasAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasContractReferencePnlInterestincClcs!: Sequelize.HasManyHasAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  countContractReferencePnlInterestincClcs!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlInterestincClc via productCode
  productCodePnlInterestincClcs!: PnlInterestincClc[];
  getProductCodePnlInterestincClcs!: Sequelize.HasManyGetAssociationsMixin<PnlInterestincClc>;
  setProductCodePnlInterestincClcs!: Sequelize.HasManySetAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  addProductCodePnlInterestincClc!: Sequelize.HasManyAddAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  addProductCodePnlInterestincClcs!: Sequelize.HasManyAddAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  createProductCodePnlInterestincClc!: Sequelize.HasManyCreateAssociationMixin<PnlInterestincClc>;
  removeProductCodePnlInterestincClc!: Sequelize.HasManyRemoveAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  removeProductCodePnlInterestincClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasProductCodePnlInterestincClc!: Sequelize.HasManyHasAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasProductCodePnlInterestincClcs!: Sequelize.HasManyHasAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  countProductCodePnlInterestincClcs!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlInterestincClc via sourceSystem
  sourceSystemPnlInterestincClcs!: PnlInterestincClc[];
  getSourceSystemPnlInterestincClcs!: Sequelize.HasManyGetAssociationsMixin<PnlInterestincClc>;
  setSourceSystemPnlInterestincClcs!: Sequelize.HasManySetAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  addSourceSystemPnlInterestincClc!: Sequelize.HasManyAddAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  addSourceSystemPnlInterestincClcs!: Sequelize.HasManyAddAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  createSourceSystemPnlInterestincClc!: Sequelize.HasManyCreateAssociationMixin<PnlInterestincClc>;
  removeSourceSystemPnlInterestincClc!: Sequelize.HasManyRemoveAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  removeSourceSystemPnlInterestincClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasSourceSystemPnlInterestincClc!: Sequelize.HasManyHasAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasSourceSystemPnlInterestincClcs!: Sequelize.HasManyHasAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  countSourceSystemPnlInterestincClcs!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PnlInterestincClc via sourceTable
  sourceTablePnlInterestincClcs!: PnlInterestincClc[];
  getSourceTablePnlInterestincClcs!: Sequelize.HasManyGetAssociationsMixin<PnlInterestincClc>;
  setSourceTablePnlInterestincClcs!: Sequelize.HasManySetAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  addSourceTablePnlInterestincClc!: Sequelize.HasManyAddAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  addSourceTablePnlInterestincClcs!: Sequelize.HasManyAddAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  createSourceTablePnlInterestincClc!: Sequelize.HasManyCreateAssociationMixin<PnlInterestincClc>;
  removeSourceTablePnlInterestincClc!: Sequelize.HasManyRemoveAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  removeSourceTablePnlInterestincClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasSourceTablePnlInterestincClc!: Sequelize.HasManyHasAssociationMixin<PnlInterestincClc, PnlInterestincClcId>;
  hasSourceTablePnlInterestincClcs!: Sequelize.HasManyHasAssociationsMixin<PnlInterestincClc, PnlInterestincClcId>;
  countSourceTablePnlInterestincClcs!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortFctyLnk via companyCode
  portFctyLnks!: PortFctyLnk[];
  getPortFctyLnks!: Sequelize.HasManyGetAssociationsMixin<PortFctyLnk>;
  setPortFctyLnks!: Sequelize.HasManySetAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  addPortFctyLnk!: Sequelize.HasManyAddAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  addPortFctyLnks!: Sequelize.HasManyAddAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  createPortFctyLnk!: Sequelize.HasManyCreateAssociationMixin<PortFctyLnk>;
  removePortFctyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  removePortFctyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  hasPortFctyLnk!: Sequelize.HasManyHasAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  hasPortFctyLnks!: Sequelize.HasManyHasAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  countPortFctyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortFctyLnk via contractReference
  contractReferencePortFctyLnks!: PortFctyLnk[];
  getContractReferencePortFctyLnks!: Sequelize.HasManyGetAssociationsMixin<PortFctyLnk>;
  setContractReferencePortFctyLnks!: Sequelize.HasManySetAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  addContractReferencePortFctyLnk!: Sequelize.HasManyAddAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  addContractReferencePortFctyLnks!: Sequelize.HasManyAddAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  createContractReferencePortFctyLnk!: Sequelize.HasManyCreateAssociationMixin<PortFctyLnk>;
  removeContractReferencePortFctyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  removeContractReferencePortFctyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  hasContractReferencePortFctyLnk!: Sequelize.HasManyHasAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  hasContractReferencePortFctyLnks!: Sequelize.HasManyHasAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  countContractReferencePortFctyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortFctyLnk via productCode
  productCodePortFctyLnks!: PortFctyLnk[];
  getProductCodePortFctyLnks!: Sequelize.HasManyGetAssociationsMixin<PortFctyLnk>;
  setProductCodePortFctyLnks!: Sequelize.HasManySetAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  addProductCodePortFctyLnk!: Sequelize.HasManyAddAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  addProductCodePortFctyLnks!: Sequelize.HasManyAddAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  createProductCodePortFctyLnk!: Sequelize.HasManyCreateAssociationMixin<PortFctyLnk>;
  removeProductCodePortFctyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  removeProductCodePortFctyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  hasProductCodePortFctyLnk!: Sequelize.HasManyHasAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  hasProductCodePortFctyLnks!: Sequelize.HasManyHasAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  countProductCodePortFctyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortFctyLnk via sourceSystem
  sourceSystemPortFctyLnks!: PortFctyLnk[];
  getSourceSystemPortFctyLnks!: Sequelize.HasManyGetAssociationsMixin<PortFctyLnk>;
  setSourceSystemPortFctyLnks!: Sequelize.HasManySetAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  addSourceSystemPortFctyLnk!: Sequelize.HasManyAddAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  addSourceSystemPortFctyLnks!: Sequelize.HasManyAddAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  createSourceSystemPortFctyLnk!: Sequelize.HasManyCreateAssociationMixin<PortFctyLnk>;
  removeSourceSystemPortFctyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  removeSourceSystemPortFctyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  hasSourceSystemPortFctyLnk!: Sequelize.HasManyHasAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  hasSourceSystemPortFctyLnks!: Sequelize.HasManyHasAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  countSourceSystemPortFctyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortFctyLnk via sourceTable
  sourceTablePortFctyLnks!: PortFctyLnk[];
  getSourceTablePortFctyLnks!: Sequelize.HasManyGetAssociationsMixin<PortFctyLnk>;
  setSourceTablePortFctyLnks!: Sequelize.HasManySetAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  addSourceTablePortFctyLnk!: Sequelize.HasManyAddAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  addSourceTablePortFctyLnks!: Sequelize.HasManyAddAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  createSourceTablePortFctyLnk!: Sequelize.HasManyCreateAssociationMixin<PortFctyLnk>;
  removeSourceTablePortFctyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  removeSourceTablePortFctyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  hasSourceTablePortFctyLnk!: Sequelize.HasManyHasAssociationMixin<PortFctyLnk, PortFctyLnkId>;
  hasSourceTablePortFctyLnks!: Sequelize.HasManyHasAssociationsMixin<PortFctyLnk, PortFctyLnkId>;
  countSourceTablePortFctyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortHedgeLnk via hedgeInsCompanyCode
  portHedgeLnks!: PortHedgeLnk[];
  getPortHedgeLnks!: Sequelize.HasManyGetAssociationsMixin<PortHedgeLnk>;
  setPortHedgeLnks!: Sequelize.HasManySetAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  addPortHedgeLnk!: Sequelize.HasManyAddAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  addPortHedgeLnks!: Sequelize.HasManyAddAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  createPortHedgeLnk!: Sequelize.HasManyCreateAssociationMixin<PortHedgeLnk>;
  removePortHedgeLnk!: Sequelize.HasManyRemoveAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  removePortHedgeLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasPortHedgeLnk!: Sequelize.HasManyHasAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasPortHedgeLnks!: Sequelize.HasManyHasAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  countPortHedgeLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortHedgeLnk via hedgeInsContractReference
  hedgeInsContractReferencePortHedgeLnks!: PortHedgeLnk[];
  getHedgeInsContractReferencePortHedgeLnks!: Sequelize.HasManyGetAssociationsMixin<PortHedgeLnk>;
  setHedgeInsContractReferencePortHedgeLnks!: Sequelize.HasManySetAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeInsContractReferencePortHedgeLnk!: Sequelize.HasManyAddAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeInsContractReferencePortHedgeLnks!: Sequelize.HasManyAddAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  createHedgeInsContractReferencePortHedgeLnk!: Sequelize.HasManyCreateAssociationMixin<PortHedgeLnk>;
  removeHedgeInsContractReferencePortHedgeLnk!: Sequelize.HasManyRemoveAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  removeHedgeInsContractReferencePortHedgeLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeInsContractReferencePortHedgeLnk!: Sequelize.HasManyHasAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeInsContractReferencePortHedgeLnks!: Sequelize.HasManyHasAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  countHedgeInsContractReferencePortHedgeLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortHedgeLnk via hedgeInsProductCode
  hedgeInsProductCodePortHedgeLnks!: PortHedgeLnk[];
  getHedgeInsProductCodePortHedgeLnks!: Sequelize.HasManyGetAssociationsMixin<PortHedgeLnk>;
  setHedgeInsProductCodePortHedgeLnks!: Sequelize.HasManySetAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeInsProductCodePortHedgeLnk!: Sequelize.HasManyAddAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeInsProductCodePortHedgeLnks!: Sequelize.HasManyAddAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  createHedgeInsProductCodePortHedgeLnk!: Sequelize.HasManyCreateAssociationMixin<PortHedgeLnk>;
  removeHedgeInsProductCodePortHedgeLnk!: Sequelize.HasManyRemoveAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  removeHedgeInsProductCodePortHedgeLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeInsProductCodePortHedgeLnk!: Sequelize.HasManyHasAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeInsProductCodePortHedgeLnks!: Sequelize.HasManyHasAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  countHedgeInsProductCodePortHedgeLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortHedgeLnk via hedgeInsSourceSystem
  hedgeInsSourceSystemPortHedgeLnks!: PortHedgeLnk[];
  getHedgeInsSourceSystemPortHedgeLnks!: Sequelize.HasManyGetAssociationsMixin<PortHedgeLnk>;
  setHedgeInsSourceSystemPortHedgeLnks!: Sequelize.HasManySetAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeInsSourceSystemPortHedgeLnk!: Sequelize.HasManyAddAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeInsSourceSystemPortHedgeLnks!: Sequelize.HasManyAddAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  createHedgeInsSourceSystemPortHedgeLnk!: Sequelize.HasManyCreateAssociationMixin<PortHedgeLnk>;
  removeHedgeInsSourceSystemPortHedgeLnk!: Sequelize.HasManyRemoveAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  removeHedgeInsSourceSystemPortHedgeLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeInsSourceSystemPortHedgeLnk!: Sequelize.HasManyHasAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeInsSourceSystemPortHedgeLnks!: Sequelize.HasManyHasAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  countHedgeInsSourceSystemPortHedgeLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortHedgeLnk via hedgeInsSourceTable
  hedgeInsSourceTablePortHedgeLnks!: PortHedgeLnk[];
  getHedgeInsSourceTablePortHedgeLnks!: Sequelize.HasManyGetAssociationsMixin<PortHedgeLnk>;
  setHedgeInsSourceTablePortHedgeLnks!: Sequelize.HasManySetAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeInsSourceTablePortHedgeLnk!: Sequelize.HasManyAddAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeInsSourceTablePortHedgeLnks!: Sequelize.HasManyAddAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  createHedgeInsSourceTablePortHedgeLnk!: Sequelize.HasManyCreateAssociationMixin<PortHedgeLnk>;
  removeHedgeInsSourceTablePortHedgeLnk!: Sequelize.HasManyRemoveAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  removeHedgeInsSourceTablePortHedgeLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeInsSourceTablePortHedgeLnk!: Sequelize.HasManyHasAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeInsSourceTablePortHedgeLnks!: Sequelize.HasManyHasAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  countHedgeInsSourceTablePortHedgeLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortHedgeLnk via hedgeObjCompanyCode
  hedgeObjCompanyCodePortHedgeLnks!: PortHedgeLnk[];
  getHedgeObjCompanyCodePortHedgeLnks!: Sequelize.HasManyGetAssociationsMixin<PortHedgeLnk>;
  setHedgeObjCompanyCodePortHedgeLnks!: Sequelize.HasManySetAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeObjCompanyCodePortHedgeLnk!: Sequelize.HasManyAddAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeObjCompanyCodePortHedgeLnks!: Sequelize.HasManyAddAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  createHedgeObjCompanyCodePortHedgeLnk!: Sequelize.HasManyCreateAssociationMixin<PortHedgeLnk>;
  removeHedgeObjCompanyCodePortHedgeLnk!: Sequelize.HasManyRemoveAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  removeHedgeObjCompanyCodePortHedgeLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeObjCompanyCodePortHedgeLnk!: Sequelize.HasManyHasAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeObjCompanyCodePortHedgeLnks!: Sequelize.HasManyHasAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  countHedgeObjCompanyCodePortHedgeLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortHedgeLnk via hedgeObjContractReference
  hedgeObjContractReferencePortHedgeLnks!: PortHedgeLnk[];
  getHedgeObjContractReferencePortHedgeLnks!: Sequelize.HasManyGetAssociationsMixin<PortHedgeLnk>;
  setHedgeObjContractReferencePortHedgeLnks!: Sequelize.HasManySetAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeObjContractReferencePortHedgeLnk!: Sequelize.HasManyAddAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeObjContractReferencePortHedgeLnks!: Sequelize.HasManyAddAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  createHedgeObjContractReferencePortHedgeLnk!: Sequelize.HasManyCreateAssociationMixin<PortHedgeLnk>;
  removeHedgeObjContractReferencePortHedgeLnk!: Sequelize.HasManyRemoveAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  removeHedgeObjContractReferencePortHedgeLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeObjContractReferencePortHedgeLnk!: Sequelize.HasManyHasAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeObjContractReferencePortHedgeLnks!: Sequelize.HasManyHasAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  countHedgeObjContractReferencePortHedgeLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortHedgeLnk via hedgeObjProductCode
  hedgeObjProductCodePortHedgeLnks!: PortHedgeLnk[];
  getHedgeObjProductCodePortHedgeLnks!: Sequelize.HasManyGetAssociationsMixin<PortHedgeLnk>;
  setHedgeObjProductCodePortHedgeLnks!: Sequelize.HasManySetAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeObjProductCodePortHedgeLnk!: Sequelize.HasManyAddAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeObjProductCodePortHedgeLnks!: Sequelize.HasManyAddAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  createHedgeObjProductCodePortHedgeLnk!: Sequelize.HasManyCreateAssociationMixin<PortHedgeLnk>;
  removeHedgeObjProductCodePortHedgeLnk!: Sequelize.HasManyRemoveAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  removeHedgeObjProductCodePortHedgeLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeObjProductCodePortHedgeLnk!: Sequelize.HasManyHasAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeObjProductCodePortHedgeLnks!: Sequelize.HasManyHasAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  countHedgeObjProductCodePortHedgeLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortHedgeLnk via hedgeObjSourceSystem
  hedgeObjSourceSystemPortHedgeLnks!: PortHedgeLnk[];
  getHedgeObjSourceSystemPortHedgeLnks!: Sequelize.HasManyGetAssociationsMixin<PortHedgeLnk>;
  setHedgeObjSourceSystemPortHedgeLnks!: Sequelize.HasManySetAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeObjSourceSystemPortHedgeLnk!: Sequelize.HasManyAddAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeObjSourceSystemPortHedgeLnks!: Sequelize.HasManyAddAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  createHedgeObjSourceSystemPortHedgeLnk!: Sequelize.HasManyCreateAssociationMixin<PortHedgeLnk>;
  removeHedgeObjSourceSystemPortHedgeLnk!: Sequelize.HasManyRemoveAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  removeHedgeObjSourceSystemPortHedgeLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeObjSourceSystemPortHedgeLnk!: Sequelize.HasManyHasAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeObjSourceSystemPortHedgeLnks!: Sequelize.HasManyHasAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  countHedgeObjSourceSystemPortHedgeLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortHedgeLnk via hedgeObjSourceTable
  hedgeObjSourceTablePortHedgeLnks!: PortHedgeLnk[];
  getHedgeObjSourceTablePortHedgeLnks!: Sequelize.HasManyGetAssociationsMixin<PortHedgeLnk>;
  setHedgeObjSourceTablePortHedgeLnks!: Sequelize.HasManySetAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeObjSourceTablePortHedgeLnk!: Sequelize.HasManyAddAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  addHedgeObjSourceTablePortHedgeLnks!: Sequelize.HasManyAddAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  createHedgeObjSourceTablePortHedgeLnk!: Sequelize.HasManyCreateAssociationMixin<PortHedgeLnk>;
  removeHedgeObjSourceTablePortHedgeLnk!: Sequelize.HasManyRemoveAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  removeHedgeObjSourceTablePortHedgeLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeObjSourceTablePortHedgeLnk!: Sequelize.HasManyHasAssociationMixin<PortHedgeLnk, PortHedgeLnkId>;
  hasHedgeObjSourceTablePortHedgeLnks!: Sequelize.HasManyHasAssociationsMixin<PortHedgeLnk, PortHedgeLnkId>;
  countHedgeObjSourceTablePortHedgeLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortThirdPartyLnk via companyCode
  portThirdPartyLnks!: PortThirdPartyLnk[];
  getPortThirdPartyLnks!: Sequelize.HasManyGetAssociationsMixin<PortThirdPartyLnk>;
  setPortThirdPartyLnks!: Sequelize.HasManySetAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addPortThirdPartyLnk!: Sequelize.HasManyAddAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addPortThirdPartyLnks!: Sequelize.HasManyAddAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  createPortThirdPartyLnk!: Sequelize.HasManyCreateAssociationMixin<PortThirdPartyLnk>;
  removePortThirdPartyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  removePortThirdPartyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasPortThirdPartyLnk!: Sequelize.HasManyHasAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasPortThirdPartyLnks!: Sequelize.HasManyHasAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  countPortThirdPartyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortThirdPartyLnk via contractReference
  contractReferencePortThirdPartyLnks!: PortThirdPartyLnk[];
  getContractReferencePortThirdPartyLnks!: Sequelize.HasManyGetAssociationsMixin<PortThirdPartyLnk>;
  setContractReferencePortThirdPartyLnks!: Sequelize.HasManySetAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addContractReferencePortThirdPartyLnk!: Sequelize.HasManyAddAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addContractReferencePortThirdPartyLnks!: Sequelize.HasManyAddAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  createContractReferencePortThirdPartyLnk!: Sequelize.HasManyCreateAssociationMixin<PortThirdPartyLnk>;
  removeContractReferencePortThirdPartyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  removeContractReferencePortThirdPartyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasContractReferencePortThirdPartyLnk!: Sequelize.HasManyHasAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasContractReferencePortThirdPartyLnks!: Sequelize.HasManyHasAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  countContractReferencePortThirdPartyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortThirdPartyLnk via productCode
  productCodePortThirdPartyLnks!: PortThirdPartyLnk[];
  getProductCodePortThirdPartyLnks!: Sequelize.HasManyGetAssociationsMixin<PortThirdPartyLnk>;
  setProductCodePortThirdPartyLnks!: Sequelize.HasManySetAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addProductCodePortThirdPartyLnk!: Sequelize.HasManyAddAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addProductCodePortThirdPartyLnks!: Sequelize.HasManyAddAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  createProductCodePortThirdPartyLnk!: Sequelize.HasManyCreateAssociationMixin<PortThirdPartyLnk>;
  removeProductCodePortThirdPartyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  removeProductCodePortThirdPartyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasProductCodePortThirdPartyLnk!: Sequelize.HasManyHasAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasProductCodePortThirdPartyLnks!: Sequelize.HasManyHasAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  countProductCodePortThirdPartyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortThirdPartyLnk via sourceSystem
  sourceSystemPortThirdPartyLnks!: PortThirdPartyLnk[];
  getSourceSystemPortThirdPartyLnks!: Sequelize.HasManyGetAssociationsMixin<PortThirdPartyLnk>;
  setSourceSystemPortThirdPartyLnks!: Sequelize.HasManySetAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addSourceSystemPortThirdPartyLnk!: Sequelize.HasManyAddAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addSourceSystemPortThirdPartyLnks!: Sequelize.HasManyAddAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  createSourceSystemPortThirdPartyLnk!: Sequelize.HasManyCreateAssociationMixin<PortThirdPartyLnk>;
  removeSourceSystemPortThirdPartyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  removeSourceSystemPortThirdPartyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasSourceSystemPortThirdPartyLnk!: Sequelize.HasManyHasAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasSourceSystemPortThirdPartyLnks!: Sequelize.HasManyHasAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  countSourceSystemPortThirdPartyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList hasMany PortThirdPartyLnk via sourceTable
  sourceTablePortThirdPartyLnks!: PortThirdPartyLnk[];
  getSourceTablePortThirdPartyLnks!: Sequelize.HasManyGetAssociationsMixin<PortThirdPartyLnk>;
  setSourceTablePortThirdPartyLnks!: Sequelize.HasManySetAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addSourceTablePortThirdPartyLnk!: Sequelize.HasManyAddAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addSourceTablePortThirdPartyLnks!: Sequelize.HasManyAddAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  createSourceTablePortThirdPartyLnk!: Sequelize.HasManyCreateAssociationMixin<PortThirdPartyLnk>;
  removeSourceTablePortThirdPartyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  removeSourceTablePortThirdPartyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasSourceTablePortThirdPartyLnk!: Sequelize.HasManyHasAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasSourceTablePortThirdPartyLnks!: Sequelize.HasManyHasAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  countSourceTablePortThirdPartyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // PortContractList belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortContractList belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortContractList {
    return PortContractList.init({
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
        model: 'company',
        key: 'company_code'
      },
      field: 'company_code'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'product_code'
      },
      field: 'product_code'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'contract_reference'
    }
  }, {
    sequelize,
    tableName: 'port_contract_list',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_CONTRACT_LIST",
        unique: true,
        fields: [
          { name: "source_table" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "product_code" },
          { name: "contract_reference" },
        ]
      },
    ]
  });
  }
}
