import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmCpadEadBase, AlcmCpadEadBaseId } from './AlcmCpadEadBase';
import type { Company, CompanyId } from './Company';
import type { CompanyBook, CompanyBookId } from './CompanyBook';
import type { CompanyCostCentreLnk, CompanyCostCentreLnkId } from './CompanyCostCentreLnk';
import type { CompanyLob, CompanyLobId } from './CompanyLob';
import type { CrmGuarPos, CrmGuarPosId } from './CrmGuarPos';
import type { DomsConsolidationType, DomsConsolidationTypeId } from './DomsConsolidationType';
import type { GenldgBsJournal, GenldgBsJournalId } from './GenldgBsJournal';
import type { GenldgGlbsPos, GenldgGlbsPosId } from './GenldgGlbsPos';
import type { PnlGmplexDet, PnlGmplexDetId } from './PnlGmplexDet';
import type { PnlOperincDet, PnlOperincDetId } from './PnlOperincDet';
import type { PortDsecMov, PortDsecMovId } from './PortDsecMov';
import type { PortDsecPos, PortDsecPosId } from './PortDsecPos';
import type { PortFctyMov, PortFctyMovId } from './PortFctyMov';
import type { PortFctyPos, PortFctyPosId } from './PortFctyPos';
import type { PortFincMov, PortFincMovId } from './PortFincMov';
import type { PortFincPos, PortFincPosId } from './PortFincPos';
import type { PortFoexMov, PortFoexMovId } from './PortFoexMov';
import type { PortFoexPos, PortFoexPosId } from './PortFoexPos';
import type { PortFutuMov, PortFutuMovId } from './PortFutuMov';
import type { PortFutuPos, PortFutuPosId } from './PortFutuPos';
import type { PortGuarMov, PortGuarMovId } from './PortGuarMov';
import type { PortGuarPos, PortGuarPosId } from './PortGuarPos';
import type { PortLoanMov, PortLoanMovId } from './PortLoanMov';
import type { PortLoanPos, PortLoanPosId } from './PortLoanPos';
import type { PortNdfsMov, PortNdfsMovId } from './PortNdfsMov';
import type { PortNdfsPos, PortNdfsPosId } from './PortNdfsPos';
import type { PortNostroPos, PortNostroPosId } from './PortNostroPos';
import type { PortOtherPos, PortOtherPosId } from './PortOtherPos';
import type { PortRecvLnk, PortRecvLnkId } from './PortRecvLnk';
import type { PortRecvMov, PortRecvMovId } from './PortRecvMov';
import type { PortRepoMov, PortRepoMovId } from './PortRepoMov';
import type { PortRepoPos, PortRepoPosId } from './PortRepoPos';
import type { PortSwapMov, PortSwapMovId } from './PortSwapMov';
import type { PortSwapPos, PortSwapPosId } from './PortSwapPos';
import type { PortVostroPos, PortVostroPosId } from './PortVostroPos';

export interface CompanyCostCentreAttributes {
  costCentre: string;
  companyCode: string;
  costCentreName?: string;
  lobCode: string;
  costCentreType: string;
  costCentreActive: boolean;
  costCentreLnkId: number;
}

export type CompanyCostCentrePk = "costCentre" | "companyCode";
export type CompanyCostCentreId = CompanyCostCentre[CompanyCostCentrePk];
export type CompanyCostCentreOptionalAttributes = "costCentreName" | "costCentreType";
export type CompanyCostCentreCreationAttributes = Optional<CompanyCostCentreAttributes, CompanyCostCentreOptionalAttributes>;

export class CompanyCostCentre extends Model<CompanyCostCentreAttributes, CompanyCostCentreCreationAttributes> implements CompanyCostCentreAttributes {
  costCentre!: string;
  companyCode!: string;
  costCentreName?: string;
  lobCode!: string;
  costCentreType!: string;
  costCentreActive!: boolean;
  costCentreLnkId!: number;

  // CompanyCostCentre belongsTo Company via companyCode
  companyCodeCompany!: Company;
  getCompanyCodeCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompanyCodeCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompanyCodeCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;
  // CompanyCostCentre hasMany AlcmCpadEadBase via companyCode
  alcmCpadEadBases!: AlcmCpadEadBase[];
  getAlcmCpadEadBases!: Sequelize.HasManyGetAssociationsMixin<AlcmCpadEadBase>;
  setAlcmCpadEadBases!: Sequelize.HasManySetAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addAlcmCpadEadBasis!: Sequelize.HasManyAddAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addAlcmCpadEadBases!: Sequelize.HasManyAddAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  createAlcmCpadEadBasis!: Sequelize.HasManyCreateAssociationMixin<AlcmCpadEadBase>;
  removeAlcmCpadEadBasis!: Sequelize.HasManyRemoveAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  removeAlcmCpadEadBases!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasAlcmCpadEadBasis!: Sequelize.HasManyHasAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasAlcmCpadEadBases!: Sequelize.HasManyHasAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  countAlcmCpadEadBases!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany AlcmCpadEadBase via costCentre
  costCentreAlcmCpadEadBases!: AlcmCpadEadBase[];
  getCostCentreAlcmCpadEadBases!: Sequelize.HasManyGetAssociationsMixin<AlcmCpadEadBase>;
  setCostCentreAlcmCpadEadBases!: Sequelize.HasManySetAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addCostCentreAlcmCpadEadBasis!: Sequelize.HasManyAddAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addCostCentreAlcmCpadEadBases!: Sequelize.HasManyAddAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  createCostCentreAlcmCpadEadBasis!: Sequelize.HasManyCreateAssociationMixin<AlcmCpadEadBase>;
  removeCostCentreAlcmCpadEadBasis!: Sequelize.HasManyRemoveAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  removeCostCentreAlcmCpadEadBases!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasCostCentreAlcmCpadEadBasis!: Sequelize.HasManyHasAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasCostCentreAlcmCpadEadBases!: Sequelize.HasManyHasAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  countCostCentreAlcmCpadEadBases!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany CompanyBook via costCentreLnkId
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
  // CompanyCostCentre belongsToMany CompanyCostCentre via costCentreChild and costCentreParent
  costCentreParentCompanyCostCentres!: CompanyCostCentre[];
  getCostCentreParentCompanyCostCentres!: Sequelize.BelongsToManyGetAssociationsMixin<CompanyCostCentre>;
  setCostCentreParentCompanyCostCentres!: Sequelize.BelongsToManySetAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  addCostCentreParentCompanyCostCentre!: Sequelize.BelongsToManyAddAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  addCostCentreParentCompanyCostCentres!: Sequelize.BelongsToManyAddAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreParentCompanyCostCentre!: Sequelize.BelongsToManyCreateAssociationMixin<CompanyCostCentre>;
  removeCostCentreParentCompanyCostCentre!: Sequelize.BelongsToManyRemoveAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  removeCostCentreParentCompanyCostCentres!: Sequelize.BelongsToManyRemoveAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  hasCostCentreParentCompanyCostCentre!: Sequelize.BelongsToManyHasAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  hasCostCentreParentCompanyCostCentres!: Sequelize.BelongsToManyHasAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  countCostCentreParentCompanyCostCentres!: Sequelize.BelongsToManyCountAssociationsMixin;
  // CompanyCostCentre belongsToMany CompanyCostCentre via costCentreParent and costCentreChild
  costCentreChildCompanyCostCentres!: CompanyCostCentre[];
  getCostCentreChildCompanyCostCentres!: Sequelize.BelongsToManyGetAssociationsMixin<CompanyCostCentre>;
  setCostCentreChildCompanyCostCentres!: Sequelize.BelongsToManySetAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  addCostCentreChildCompanyCostCentre!: Sequelize.BelongsToManyAddAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  addCostCentreChildCompanyCostCentres!: Sequelize.BelongsToManyAddAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreChildCompanyCostCentre!: Sequelize.BelongsToManyCreateAssociationMixin<CompanyCostCentre>;
  removeCostCentreChildCompanyCostCentre!: Sequelize.BelongsToManyRemoveAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  removeCostCentreChildCompanyCostCentres!: Sequelize.BelongsToManyRemoveAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  hasCostCentreChildCompanyCostCentre!: Sequelize.BelongsToManyHasAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  hasCostCentreChildCompanyCostCentres!: Sequelize.BelongsToManyHasAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  countCostCentreChildCompanyCostCentres!: Sequelize.BelongsToManyCountAssociationsMixin;
  // CompanyCostCentre hasMany CompanyCostCentreLnk via costCentreChild
  companyCostCentreLnks!: CompanyCostCentreLnk[];
  getCompanyCostCentreLnks!: Sequelize.HasManyGetAssociationsMixin<CompanyCostCentreLnk>;
  setCompanyCostCentreLnks!: Sequelize.HasManySetAssociationsMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  addCompanyCostCentreLnk!: Sequelize.HasManyAddAssociationMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  addCompanyCostCentreLnks!: Sequelize.HasManyAddAssociationsMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  createCompanyCostCentreLnk!: Sequelize.HasManyCreateAssociationMixin<CompanyCostCentreLnk>;
  removeCompanyCostCentreLnk!: Sequelize.HasManyRemoveAssociationMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  removeCompanyCostCentreLnks!: Sequelize.HasManyRemoveAssociationsMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  hasCompanyCostCentreLnk!: Sequelize.HasManyHasAssociationMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  hasCompanyCostCentreLnks!: Sequelize.HasManyHasAssociationsMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  countCompanyCostCentreLnks!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany CompanyCostCentreLnk via costCentreParent
  costCentreParentCompanyCostCentreLnks!: CompanyCostCentreLnk[];
  getCostCentreParentCompanyCostCentreLnks!: Sequelize.HasManyGetAssociationsMixin<CompanyCostCentreLnk>;
  setCostCentreParentCompanyCostCentreLnks!: Sequelize.HasManySetAssociationsMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  addCostCentreParentCompanyCostCentreLnk!: Sequelize.HasManyAddAssociationMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  addCostCentreParentCompanyCostCentreLnks!: Sequelize.HasManyAddAssociationsMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  createCostCentreParentCompanyCostCentreLnk!: Sequelize.HasManyCreateAssociationMixin<CompanyCostCentreLnk>;
  removeCostCentreParentCompanyCostCentreLnk!: Sequelize.HasManyRemoveAssociationMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  removeCostCentreParentCompanyCostCentreLnks!: Sequelize.HasManyRemoveAssociationsMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  hasCostCentreParentCompanyCostCentreLnk!: Sequelize.HasManyHasAssociationMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  hasCostCentreParentCompanyCostCentreLnks!: Sequelize.HasManyHasAssociationsMixin<CompanyCostCentreLnk, CompanyCostCentreLnkId>;
  countCostCentreParentCompanyCostCentreLnks!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany CrmGuarPos via companyCode
  crmGuarPos!: CrmGuarPos[];
  getCrmGuarPos!: Sequelize.HasManyGetAssociationsMixin<CrmGuarPos>;
  setCrmGuarPos!: Sequelize.HasManySetAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  addCrmGuarPo!: Sequelize.HasManyAddAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  addCrmGuarPos!: Sequelize.HasManyAddAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  createCrmGuarPo!: Sequelize.HasManyCreateAssociationMixin<CrmGuarPos>;
  removeCrmGuarPo!: Sequelize.HasManyRemoveAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  removeCrmGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  hasCrmGuarPo!: Sequelize.HasManyHasAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  hasCrmGuarPos!: Sequelize.HasManyHasAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  countCrmGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany CrmGuarPos via costCentre
  costCentreCrmGuarPos!: CrmGuarPos[];
  getCostCentreCrmGuarPos!: Sequelize.HasManyGetAssociationsMixin<CrmGuarPos>;
  setCostCentreCrmGuarPos!: Sequelize.HasManySetAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  addCostCentreCrmGuarPo!: Sequelize.HasManyAddAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  addCostCentreCrmGuarPos!: Sequelize.HasManyAddAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  createCostCentreCrmGuarPo!: Sequelize.HasManyCreateAssociationMixin<CrmGuarPos>;
  removeCostCentreCrmGuarPo!: Sequelize.HasManyRemoveAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  removeCostCentreCrmGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  hasCostCentreCrmGuarPo!: Sequelize.HasManyHasAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  hasCostCentreCrmGuarPos!: Sequelize.HasManyHasAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  countCostCentreCrmGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany GenldgBsJournal via companyCode
  genldgBsJournals!: GenldgBsJournal[];
  getGenldgBsJournals!: Sequelize.HasManyGetAssociationsMixin<GenldgBsJournal>;
  setGenldgBsJournals!: Sequelize.HasManySetAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  addGenldgBsJournal!: Sequelize.HasManyAddAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  addGenldgBsJournals!: Sequelize.HasManyAddAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  createGenldgBsJournal!: Sequelize.HasManyCreateAssociationMixin<GenldgBsJournal>;
  removeGenldgBsJournal!: Sequelize.HasManyRemoveAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  removeGenldgBsJournals!: Sequelize.HasManyRemoveAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  hasGenldgBsJournal!: Sequelize.HasManyHasAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  hasGenldgBsJournals!: Sequelize.HasManyHasAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  countGenldgBsJournals!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany GenldgBsJournal via costCentre
  costCentreGenldgBsJournals!: GenldgBsJournal[];
  getCostCentreGenldgBsJournals!: Sequelize.HasManyGetAssociationsMixin<GenldgBsJournal>;
  setCostCentreGenldgBsJournals!: Sequelize.HasManySetAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  addCostCentreGenldgBsJournal!: Sequelize.HasManyAddAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  addCostCentreGenldgBsJournals!: Sequelize.HasManyAddAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  createCostCentreGenldgBsJournal!: Sequelize.HasManyCreateAssociationMixin<GenldgBsJournal>;
  removeCostCentreGenldgBsJournal!: Sequelize.HasManyRemoveAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  removeCostCentreGenldgBsJournals!: Sequelize.HasManyRemoveAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  hasCostCentreGenldgBsJournal!: Sequelize.HasManyHasAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  hasCostCentreGenldgBsJournals!: Sequelize.HasManyHasAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  countCostCentreGenldgBsJournals!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany GenldgGlbsPos via companyCode
  genldgGlbsPos!: GenldgGlbsPos[];
  getGenldgGlbsPos!: Sequelize.HasManyGetAssociationsMixin<GenldgGlbsPos>;
  setGenldgGlbsPos!: Sequelize.HasManySetAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addGenldgGlbsPo!: Sequelize.HasManyAddAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addGenldgGlbsPos!: Sequelize.HasManyAddAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  createGenldgGlbsPo!: Sequelize.HasManyCreateAssociationMixin<GenldgGlbsPos>;
  removeGenldgGlbsPo!: Sequelize.HasManyRemoveAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  removeGenldgGlbsPos!: Sequelize.HasManyRemoveAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasGenldgGlbsPo!: Sequelize.HasManyHasAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasGenldgGlbsPos!: Sequelize.HasManyHasAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  countGenldgGlbsPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany GenldgGlbsPos via costCentre
  costCentreGenldgGlbsPos!: GenldgGlbsPos[];
  getCostCentreGenldgGlbsPos!: Sequelize.HasManyGetAssociationsMixin<GenldgGlbsPos>;
  setCostCentreGenldgGlbsPos!: Sequelize.HasManySetAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addCostCentreGenldgGlbsPo!: Sequelize.HasManyAddAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addCostCentreGenldgGlbsPos!: Sequelize.HasManyAddAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  createCostCentreGenldgGlbsPo!: Sequelize.HasManyCreateAssociationMixin<GenldgGlbsPos>;
  removeCostCentreGenldgGlbsPo!: Sequelize.HasManyRemoveAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  removeCostCentreGenldgGlbsPos!: Sequelize.HasManyRemoveAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasCostCentreGenldgGlbsPo!: Sequelize.HasManyHasAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasCostCentreGenldgGlbsPos!: Sequelize.HasManyHasAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  countCostCentreGenldgGlbsPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PnlGmplexDet via companyCode
  pnlGmplexDets!: PnlGmplexDet[];
  getPnlGmplexDets!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexDet>;
  setPnlGmplexDets!: Sequelize.HasManySetAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  addPnlGmplexDet!: Sequelize.HasManyAddAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  addPnlGmplexDets!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  createPnlGmplexDet!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexDet>;
  removePnlGmplexDet!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  removePnlGmplexDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasPnlGmplexDet!: Sequelize.HasManyHasAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasPnlGmplexDets!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  countPnlGmplexDets!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PnlGmplexDet via costCentre
  costCentrePnlGmplexDets!: PnlGmplexDet[];
  getCostCentrePnlGmplexDets!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexDet>;
  setCostCentrePnlGmplexDets!: Sequelize.HasManySetAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  addCostCentrePnlGmplexDet!: Sequelize.HasManyAddAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  addCostCentrePnlGmplexDets!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  createCostCentrePnlGmplexDet!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexDet>;
  removeCostCentrePnlGmplexDet!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  removeCostCentrePnlGmplexDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasCostCentrePnlGmplexDet!: Sequelize.HasManyHasAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasCostCentrePnlGmplexDets!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  countCostCentrePnlGmplexDets!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PnlOperincDet via companyCode
  pnlOperincDets!: PnlOperincDet[];
  getPnlOperincDets!: Sequelize.HasManyGetAssociationsMixin<PnlOperincDet>;
  setPnlOperincDets!: Sequelize.HasManySetAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  addPnlOperincDet!: Sequelize.HasManyAddAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  addPnlOperincDets!: Sequelize.HasManyAddAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  createPnlOperincDet!: Sequelize.HasManyCreateAssociationMixin<PnlOperincDet>;
  removePnlOperincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  removePnlOperincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  hasPnlOperincDet!: Sequelize.HasManyHasAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  hasPnlOperincDets!: Sequelize.HasManyHasAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  countPnlOperincDets!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PnlOperincDet via costCentre
  costCentrePnlOperincDets!: PnlOperincDet[];
  getCostCentrePnlOperincDets!: Sequelize.HasManyGetAssociationsMixin<PnlOperincDet>;
  setCostCentrePnlOperincDets!: Sequelize.HasManySetAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  addCostCentrePnlOperincDet!: Sequelize.HasManyAddAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  addCostCentrePnlOperincDets!: Sequelize.HasManyAddAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  createCostCentrePnlOperincDet!: Sequelize.HasManyCreateAssociationMixin<PnlOperincDet>;
  removeCostCentrePnlOperincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  removeCostCentrePnlOperincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  hasCostCentrePnlOperincDet!: Sequelize.HasManyHasAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  hasCostCentrePnlOperincDets!: Sequelize.HasManyHasAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  countCostCentrePnlOperincDets!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortDsecMov via companyCode
  portDsecMovs!: PortDsecMov[];
  getPortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setPortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addPortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addPortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createPortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removePortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removePortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasPortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasPortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countPortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortDsecMov via costCentre
  costCentrePortDsecMovs!: PortDsecMov[];
  getCostCentrePortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setCostCentrePortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addCostCentrePortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addCostCentrePortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createCostCentrePortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removeCostCentrePortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removeCostCentrePortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasCostCentrePortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasCostCentrePortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countCostCentrePortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortDsecPos via companyCode
  portDsecPos!: PortDsecPos[];
  getPortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setPortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addPortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addPortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createPortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removePortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removePortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasPortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasPortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countPortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortDsecPos via costCentre
  costCentrePortDsecPos!: PortDsecPos[];
  getCostCentrePortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setCostCentrePortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addCostCentrePortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addCostCentrePortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createCostCentrePortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removeCostCentrePortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removeCostCentrePortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasCostCentrePortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasCostCentrePortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countCostCentrePortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFctyMov via companyCode
  portFctyMovs!: PortFctyMov[];
  getPortFctyMovs!: Sequelize.HasManyGetAssociationsMixin<PortFctyMov>;
  setPortFctyMovs!: Sequelize.HasManySetAssociationsMixin<PortFctyMov, PortFctyMovId>;
  addPortFctyMov!: Sequelize.HasManyAddAssociationMixin<PortFctyMov, PortFctyMovId>;
  addPortFctyMovs!: Sequelize.HasManyAddAssociationsMixin<PortFctyMov, PortFctyMovId>;
  createPortFctyMov!: Sequelize.HasManyCreateAssociationMixin<PortFctyMov>;
  removePortFctyMov!: Sequelize.HasManyRemoveAssociationMixin<PortFctyMov, PortFctyMovId>;
  removePortFctyMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyMov, PortFctyMovId>;
  hasPortFctyMov!: Sequelize.HasManyHasAssociationMixin<PortFctyMov, PortFctyMovId>;
  hasPortFctyMovs!: Sequelize.HasManyHasAssociationsMixin<PortFctyMov, PortFctyMovId>;
  countPortFctyMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFctyMov via costCentre
  costCentrePortFctyMovs!: PortFctyMov[];
  getCostCentrePortFctyMovs!: Sequelize.HasManyGetAssociationsMixin<PortFctyMov>;
  setCostCentrePortFctyMovs!: Sequelize.HasManySetAssociationsMixin<PortFctyMov, PortFctyMovId>;
  addCostCentrePortFctyMov!: Sequelize.HasManyAddAssociationMixin<PortFctyMov, PortFctyMovId>;
  addCostCentrePortFctyMovs!: Sequelize.HasManyAddAssociationsMixin<PortFctyMov, PortFctyMovId>;
  createCostCentrePortFctyMov!: Sequelize.HasManyCreateAssociationMixin<PortFctyMov>;
  removeCostCentrePortFctyMov!: Sequelize.HasManyRemoveAssociationMixin<PortFctyMov, PortFctyMovId>;
  removeCostCentrePortFctyMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyMov, PortFctyMovId>;
  hasCostCentrePortFctyMov!: Sequelize.HasManyHasAssociationMixin<PortFctyMov, PortFctyMovId>;
  hasCostCentrePortFctyMovs!: Sequelize.HasManyHasAssociationsMixin<PortFctyMov, PortFctyMovId>;
  countCostCentrePortFctyMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFctyPos via companyCode
  portFctyPos!: PortFctyPos[];
  getPortFctyPos!: Sequelize.HasManyGetAssociationsMixin<PortFctyPos>;
  setPortFctyPos!: Sequelize.HasManySetAssociationsMixin<PortFctyPos, PortFctyPosId>;
  addPortFctyPo!: Sequelize.HasManyAddAssociationMixin<PortFctyPos, PortFctyPosId>;
  addPortFctyPos!: Sequelize.HasManyAddAssociationsMixin<PortFctyPos, PortFctyPosId>;
  createPortFctyPo!: Sequelize.HasManyCreateAssociationMixin<PortFctyPos>;
  removePortFctyPo!: Sequelize.HasManyRemoveAssociationMixin<PortFctyPos, PortFctyPosId>;
  removePortFctyPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyPos, PortFctyPosId>;
  hasPortFctyPo!: Sequelize.HasManyHasAssociationMixin<PortFctyPos, PortFctyPosId>;
  hasPortFctyPos!: Sequelize.HasManyHasAssociationsMixin<PortFctyPos, PortFctyPosId>;
  countPortFctyPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFctyPos via costCentre
  costCentrePortFctyPos!: PortFctyPos[];
  getCostCentrePortFctyPos!: Sequelize.HasManyGetAssociationsMixin<PortFctyPos>;
  setCostCentrePortFctyPos!: Sequelize.HasManySetAssociationsMixin<PortFctyPos, PortFctyPosId>;
  addCostCentrePortFctyPo!: Sequelize.HasManyAddAssociationMixin<PortFctyPos, PortFctyPosId>;
  addCostCentrePortFctyPos!: Sequelize.HasManyAddAssociationsMixin<PortFctyPos, PortFctyPosId>;
  createCostCentrePortFctyPo!: Sequelize.HasManyCreateAssociationMixin<PortFctyPos>;
  removeCostCentrePortFctyPo!: Sequelize.HasManyRemoveAssociationMixin<PortFctyPos, PortFctyPosId>;
  removeCostCentrePortFctyPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyPos, PortFctyPosId>;
  hasCostCentrePortFctyPo!: Sequelize.HasManyHasAssociationMixin<PortFctyPos, PortFctyPosId>;
  hasCostCentrePortFctyPos!: Sequelize.HasManyHasAssociationsMixin<PortFctyPos, PortFctyPosId>;
  countCostCentrePortFctyPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFincMov via companyCode
  portFincMovs!: PortFincMov[];
  getPortFincMovs!: Sequelize.HasManyGetAssociationsMixin<PortFincMov>;
  setPortFincMovs!: Sequelize.HasManySetAssociationsMixin<PortFincMov, PortFincMovId>;
  addPortFincMov!: Sequelize.HasManyAddAssociationMixin<PortFincMov, PortFincMovId>;
  addPortFincMovs!: Sequelize.HasManyAddAssociationsMixin<PortFincMov, PortFincMovId>;
  createPortFincMov!: Sequelize.HasManyCreateAssociationMixin<PortFincMov>;
  removePortFincMov!: Sequelize.HasManyRemoveAssociationMixin<PortFincMov, PortFincMovId>;
  removePortFincMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincMov, PortFincMovId>;
  hasPortFincMov!: Sequelize.HasManyHasAssociationMixin<PortFincMov, PortFincMovId>;
  hasPortFincMovs!: Sequelize.HasManyHasAssociationsMixin<PortFincMov, PortFincMovId>;
  countPortFincMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFincMov via costCentre
  costCentrePortFincMovs!: PortFincMov[];
  getCostCentrePortFincMovs!: Sequelize.HasManyGetAssociationsMixin<PortFincMov>;
  setCostCentrePortFincMovs!: Sequelize.HasManySetAssociationsMixin<PortFincMov, PortFincMovId>;
  addCostCentrePortFincMov!: Sequelize.HasManyAddAssociationMixin<PortFincMov, PortFincMovId>;
  addCostCentrePortFincMovs!: Sequelize.HasManyAddAssociationsMixin<PortFincMov, PortFincMovId>;
  createCostCentrePortFincMov!: Sequelize.HasManyCreateAssociationMixin<PortFincMov>;
  removeCostCentrePortFincMov!: Sequelize.HasManyRemoveAssociationMixin<PortFincMov, PortFincMovId>;
  removeCostCentrePortFincMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincMov, PortFincMovId>;
  hasCostCentrePortFincMov!: Sequelize.HasManyHasAssociationMixin<PortFincMov, PortFincMovId>;
  hasCostCentrePortFincMovs!: Sequelize.HasManyHasAssociationsMixin<PortFincMov, PortFincMovId>;
  countCostCentrePortFincMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFincPos via companyCode
  portFincPos!: PortFincPos[];
  getPortFincPos!: Sequelize.HasManyGetAssociationsMixin<PortFincPos>;
  setPortFincPos!: Sequelize.HasManySetAssociationsMixin<PortFincPos, PortFincPosId>;
  addPortFincPo!: Sequelize.HasManyAddAssociationMixin<PortFincPos, PortFincPosId>;
  addPortFincPos!: Sequelize.HasManyAddAssociationsMixin<PortFincPos, PortFincPosId>;
  createPortFincPo!: Sequelize.HasManyCreateAssociationMixin<PortFincPos>;
  removePortFincPo!: Sequelize.HasManyRemoveAssociationMixin<PortFincPos, PortFincPosId>;
  removePortFincPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFincPos, PortFincPosId>;
  hasPortFincPo!: Sequelize.HasManyHasAssociationMixin<PortFincPos, PortFincPosId>;
  hasPortFincPos!: Sequelize.HasManyHasAssociationsMixin<PortFincPos, PortFincPosId>;
  countPortFincPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFincPos via costCentre
  costCentrePortFincPos!: PortFincPos[];
  getCostCentrePortFincPos!: Sequelize.HasManyGetAssociationsMixin<PortFincPos>;
  setCostCentrePortFincPos!: Sequelize.HasManySetAssociationsMixin<PortFincPos, PortFincPosId>;
  addCostCentrePortFincPo!: Sequelize.HasManyAddAssociationMixin<PortFincPos, PortFincPosId>;
  addCostCentrePortFincPos!: Sequelize.HasManyAddAssociationsMixin<PortFincPos, PortFincPosId>;
  createCostCentrePortFincPo!: Sequelize.HasManyCreateAssociationMixin<PortFincPos>;
  removeCostCentrePortFincPo!: Sequelize.HasManyRemoveAssociationMixin<PortFincPos, PortFincPosId>;
  removeCostCentrePortFincPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFincPos, PortFincPosId>;
  hasCostCentrePortFincPo!: Sequelize.HasManyHasAssociationMixin<PortFincPos, PortFincPosId>;
  hasCostCentrePortFincPos!: Sequelize.HasManyHasAssociationsMixin<PortFincPos, PortFincPosId>;
  countCostCentrePortFincPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFoexMov via companyCode
  portFoexMovs!: PortFoexMov[];
  getPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removePortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removePortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFoexMov via fundingProvider
  fundingProviderPortFoexMovs!: PortFoexMov[];
  getFundingProviderPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setFundingProviderPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addFundingProviderPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addFundingProviderPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createFundingProviderPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removeFundingProviderPortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removeFundingProviderPortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasFundingProviderPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasFundingProviderPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countFundingProviderPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFoexMov via costCentre
  costCentrePortFoexMovs!: PortFoexMov[];
  getCostCentrePortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setCostCentrePortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addCostCentrePortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addCostCentrePortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createCostCentrePortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removeCostCentrePortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removeCostCentrePortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasCostCentrePortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasCostCentrePortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countCostCentrePortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFoexPos via companyCode
  portFoexPos!: PortFoexPos[];
  getPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removePortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removePortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFoexPos via fundingProvider
  fundingProviderPortFoexPos!: PortFoexPos[];
  getFundingProviderPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setFundingProviderPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addFundingProviderPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addFundingProviderPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createFundingProviderPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removeFundingProviderPortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removeFundingProviderPortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasFundingProviderPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasFundingProviderPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countFundingProviderPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFoexPos via costCentre
  costCentrePortFoexPos!: PortFoexPos[];
  getCostCentrePortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setCostCentrePortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addCostCentrePortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addCostCentrePortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createCostCentrePortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removeCostCentrePortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removeCostCentrePortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasCostCentrePortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasCostCentrePortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countCostCentrePortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFutuMov via companyCode
  portFutuMovs!: PortFutuMov[];
  getPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removePortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removePortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFutuMov via costCentre
  costCentrePortFutuMovs!: PortFutuMov[];
  getCostCentrePortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setCostCentrePortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addCostCentrePortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addCostCentrePortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createCostCentrePortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeCostCentrePortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeCostCentrePortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasCostCentrePortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasCostCentrePortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countCostCentrePortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFutuMov via fundingProvider
  fundingProviderPortFutuMovs!: PortFutuMov[];
  getFundingProviderPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setFundingProviderPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addFundingProviderPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addFundingProviderPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createFundingProviderPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeFundingProviderPortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeFundingProviderPortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasFundingProviderPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasFundingProviderPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countFundingProviderPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFutuPos via companyCode
  portFutuPos!: PortFutuPos[];
  getPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removePortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removePortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFutuPos via costCentre
  costCentrePortFutuPos!: PortFutuPos[];
  getCostCentrePortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setCostCentrePortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addCostCentrePortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addCostCentrePortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createCostCentrePortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeCostCentrePortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeCostCentrePortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasCostCentrePortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasCostCentrePortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countCostCentrePortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortFutuPos via fundingProvider
  fundingProviderPortFutuPos!: PortFutuPos[];
  getFundingProviderPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setFundingProviderPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addFundingProviderPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addFundingProviderPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createFundingProviderPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeFundingProviderPortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeFundingProviderPortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasFundingProviderPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasFundingProviderPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countFundingProviderPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortGuarMov via companyCode
  portGuarMovs!: PortGuarMov[];
  getPortGuarMovs!: Sequelize.HasManyGetAssociationsMixin<PortGuarMov>;
  setPortGuarMovs!: Sequelize.HasManySetAssociationsMixin<PortGuarMov, PortGuarMovId>;
  addPortGuarMov!: Sequelize.HasManyAddAssociationMixin<PortGuarMov, PortGuarMovId>;
  addPortGuarMovs!: Sequelize.HasManyAddAssociationsMixin<PortGuarMov, PortGuarMovId>;
  createPortGuarMov!: Sequelize.HasManyCreateAssociationMixin<PortGuarMov>;
  removePortGuarMov!: Sequelize.HasManyRemoveAssociationMixin<PortGuarMov, PortGuarMovId>;
  removePortGuarMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarMov, PortGuarMovId>;
  hasPortGuarMov!: Sequelize.HasManyHasAssociationMixin<PortGuarMov, PortGuarMovId>;
  hasPortGuarMovs!: Sequelize.HasManyHasAssociationsMixin<PortGuarMov, PortGuarMovId>;
  countPortGuarMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortGuarMov via costCentre
  costCentrePortGuarMovs!: PortGuarMov[];
  getCostCentrePortGuarMovs!: Sequelize.HasManyGetAssociationsMixin<PortGuarMov>;
  setCostCentrePortGuarMovs!: Sequelize.HasManySetAssociationsMixin<PortGuarMov, PortGuarMovId>;
  addCostCentrePortGuarMov!: Sequelize.HasManyAddAssociationMixin<PortGuarMov, PortGuarMovId>;
  addCostCentrePortGuarMovs!: Sequelize.HasManyAddAssociationsMixin<PortGuarMov, PortGuarMovId>;
  createCostCentrePortGuarMov!: Sequelize.HasManyCreateAssociationMixin<PortGuarMov>;
  removeCostCentrePortGuarMov!: Sequelize.HasManyRemoveAssociationMixin<PortGuarMov, PortGuarMovId>;
  removeCostCentrePortGuarMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarMov, PortGuarMovId>;
  hasCostCentrePortGuarMov!: Sequelize.HasManyHasAssociationMixin<PortGuarMov, PortGuarMovId>;
  hasCostCentrePortGuarMovs!: Sequelize.HasManyHasAssociationsMixin<PortGuarMov, PortGuarMovId>;
  countCostCentrePortGuarMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortGuarPos via companyCode
  portGuarPos!: PortGuarPos[];
  getPortGuarPos!: Sequelize.HasManyGetAssociationsMixin<PortGuarPos>;
  setPortGuarPos!: Sequelize.HasManySetAssociationsMixin<PortGuarPos, PortGuarPosId>;
  addPortGuarPo!: Sequelize.HasManyAddAssociationMixin<PortGuarPos, PortGuarPosId>;
  addPortGuarPos!: Sequelize.HasManyAddAssociationsMixin<PortGuarPos, PortGuarPosId>;
  createPortGuarPo!: Sequelize.HasManyCreateAssociationMixin<PortGuarPos>;
  removePortGuarPo!: Sequelize.HasManyRemoveAssociationMixin<PortGuarPos, PortGuarPosId>;
  removePortGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarPos, PortGuarPosId>;
  hasPortGuarPo!: Sequelize.HasManyHasAssociationMixin<PortGuarPos, PortGuarPosId>;
  hasPortGuarPos!: Sequelize.HasManyHasAssociationsMixin<PortGuarPos, PortGuarPosId>;
  countPortGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortGuarPos via costCentre
  costCentrePortGuarPos!: PortGuarPos[];
  getCostCentrePortGuarPos!: Sequelize.HasManyGetAssociationsMixin<PortGuarPos>;
  setCostCentrePortGuarPos!: Sequelize.HasManySetAssociationsMixin<PortGuarPos, PortGuarPosId>;
  addCostCentrePortGuarPo!: Sequelize.HasManyAddAssociationMixin<PortGuarPos, PortGuarPosId>;
  addCostCentrePortGuarPos!: Sequelize.HasManyAddAssociationsMixin<PortGuarPos, PortGuarPosId>;
  createCostCentrePortGuarPo!: Sequelize.HasManyCreateAssociationMixin<PortGuarPos>;
  removeCostCentrePortGuarPo!: Sequelize.HasManyRemoveAssociationMixin<PortGuarPos, PortGuarPosId>;
  removeCostCentrePortGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarPos, PortGuarPosId>;
  hasCostCentrePortGuarPo!: Sequelize.HasManyHasAssociationMixin<PortGuarPos, PortGuarPosId>;
  hasCostCentrePortGuarPos!: Sequelize.HasManyHasAssociationsMixin<PortGuarPos, PortGuarPosId>;
  countCostCentrePortGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortLoanMov via companyCode
  portLoanMovs!: PortLoanMov[];
  getPortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setPortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addPortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addPortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createPortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removePortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removePortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasPortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasPortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countPortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortLoanMov via costCentre
  costCentrePortLoanMovs!: PortLoanMov[];
  getCostCentrePortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setCostCentrePortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addCostCentrePortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addCostCentrePortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createCostCentrePortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removeCostCentrePortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removeCostCentrePortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasCostCentrePortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasCostCentrePortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countCostCentrePortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortLoanPos via companyCode
  portLoanPos!: PortLoanPos[];
  getPortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setPortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addPortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addPortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createPortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removePortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removePortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasPortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasPortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countPortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortLoanPos via costCentre
  costCentrePortLoanPos!: PortLoanPos[];
  getCostCentrePortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setCostCentrePortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addCostCentrePortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addCostCentrePortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createCostCentrePortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removeCostCentrePortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removeCostCentrePortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasCostCentrePortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasCostCentrePortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countCostCentrePortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortNdfsMov via companyCode
  portNdfsMovs!: PortNdfsMov[];
  getPortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setPortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addPortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addPortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createPortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removePortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removePortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasPortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasPortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countPortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortNdfsMov via fundingProvider
  fundingProviderPortNdfsMovs!: PortNdfsMov[];
  getFundingProviderPortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setFundingProviderPortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addFundingProviderPortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addFundingProviderPortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createFundingProviderPortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removeFundingProviderPortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removeFundingProviderPortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasFundingProviderPortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasFundingProviderPortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countFundingProviderPortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortNdfsMov via costCentre
  costCentrePortNdfsMovs!: PortNdfsMov[];
  getCostCentrePortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setCostCentrePortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addCostCentrePortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addCostCentrePortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createCostCentrePortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removeCostCentrePortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removeCostCentrePortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasCostCentrePortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasCostCentrePortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countCostCentrePortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortNdfsPos via companyCode
  portNdfsPos!: PortNdfsPos[];
  getPortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setPortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addPortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addPortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createPortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removePortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removePortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasPortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasPortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countPortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortNdfsPos via fundingProvider
  fundingProviderPortNdfsPos!: PortNdfsPos[];
  getFundingProviderPortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setFundingProviderPortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addFundingProviderPortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addFundingProviderPortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createFundingProviderPortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removeFundingProviderPortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removeFundingProviderPortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasFundingProviderPortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasFundingProviderPortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countFundingProviderPortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortNdfsPos via costCentre
  costCentrePortNdfsPos!: PortNdfsPos[];
  getCostCentrePortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setCostCentrePortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addCostCentrePortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addCostCentrePortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createCostCentrePortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removeCostCentrePortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removeCostCentrePortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasCostCentrePortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasCostCentrePortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countCostCentrePortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortNostroPos via companyCode
  portNostroPos!: PortNostroPos[];
  getPortNostroPos!: Sequelize.HasManyGetAssociationsMixin<PortNostroPos>;
  setPortNostroPos!: Sequelize.HasManySetAssociationsMixin<PortNostroPos, PortNostroPosId>;
  addPortNostroPo!: Sequelize.HasManyAddAssociationMixin<PortNostroPos, PortNostroPosId>;
  addPortNostroPos!: Sequelize.HasManyAddAssociationsMixin<PortNostroPos, PortNostroPosId>;
  createPortNostroPo!: Sequelize.HasManyCreateAssociationMixin<PortNostroPos>;
  removePortNostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortNostroPos, PortNostroPosId>;
  removePortNostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroPos, PortNostroPosId>;
  hasPortNostroPo!: Sequelize.HasManyHasAssociationMixin<PortNostroPos, PortNostroPosId>;
  hasPortNostroPos!: Sequelize.HasManyHasAssociationsMixin<PortNostroPos, PortNostroPosId>;
  countPortNostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortNostroPos via costCentre
  costCentrePortNostroPos!: PortNostroPos[];
  getCostCentrePortNostroPos!: Sequelize.HasManyGetAssociationsMixin<PortNostroPos>;
  setCostCentrePortNostroPos!: Sequelize.HasManySetAssociationsMixin<PortNostroPos, PortNostroPosId>;
  addCostCentrePortNostroPo!: Sequelize.HasManyAddAssociationMixin<PortNostroPos, PortNostroPosId>;
  addCostCentrePortNostroPos!: Sequelize.HasManyAddAssociationsMixin<PortNostroPos, PortNostroPosId>;
  createCostCentrePortNostroPo!: Sequelize.HasManyCreateAssociationMixin<PortNostroPos>;
  removeCostCentrePortNostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortNostroPos, PortNostroPosId>;
  removeCostCentrePortNostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroPos, PortNostroPosId>;
  hasCostCentrePortNostroPo!: Sequelize.HasManyHasAssociationMixin<PortNostroPos, PortNostroPosId>;
  hasCostCentrePortNostroPos!: Sequelize.HasManyHasAssociationsMixin<PortNostroPos, PortNostroPosId>;
  countCostCentrePortNostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortOtherPos via companyCode
  portOtherPos!: PortOtherPos[];
  getPortOtherPos!: Sequelize.HasManyGetAssociationsMixin<PortOtherPos>;
  setPortOtherPos!: Sequelize.HasManySetAssociationsMixin<PortOtherPos, PortOtherPosId>;
  addPortOtherPo!: Sequelize.HasManyAddAssociationMixin<PortOtherPos, PortOtherPosId>;
  addPortOtherPos!: Sequelize.HasManyAddAssociationsMixin<PortOtherPos, PortOtherPosId>;
  createPortOtherPo!: Sequelize.HasManyCreateAssociationMixin<PortOtherPos>;
  removePortOtherPo!: Sequelize.HasManyRemoveAssociationMixin<PortOtherPos, PortOtherPosId>;
  removePortOtherPos!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherPos, PortOtherPosId>;
  hasPortOtherPo!: Sequelize.HasManyHasAssociationMixin<PortOtherPos, PortOtherPosId>;
  hasPortOtherPos!: Sequelize.HasManyHasAssociationsMixin<PortOtherPos, PortOtherPosId>;
  countPortOtherPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortOtherPos via fundingProvider
  fundingProviderPortOtherPos!: PortOtherPos[];
  getFundingProviderPortOtherPos!: Sequelize.HasManyGetAssociationsMixin<PortOtherPos>;
  setFundingProviderPortOtherPos!: Sequelize.HasManySetAssociationsMixin<PortOtherPos, PortOtherPosId>;
  addFundingProviderPortOtherPo!: Sequelize.HasManyAddAssociationMixin<PortOtherPos, PortOtherPosId>;
  addFundingProviderPortOtherPos!: Sequelize.HasManyAddAssociationsMixin<PortOtherPos, PortOtherPosId>;
  createFundingProviderPortOtherPo!: Sequelize.HasManyCreateAssociationMixin<PortOtherPos>;
  removeFundingProviderPortOtherPo!: Sequelize.HasManyRemoveAssociationMixin<PortOtherPos, PortOtherPosId>;
  removeFundingProviderPortOtherPos!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherPos, PortOtherPosId>;
  hasFundingProviderPortOtherPo!: Sequelize.HasManyHasAssociationMixin<PortOtherPos, PortOtherPosId>;
  hasFundingProviderPortOtherPos!: Sequelize.HasManyHasAssociationsMixin<PortOtherPos, PortOtherPosId>;
  countFundingProviderPortOtherPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortOtherPos via costCentre
  costCentrePortOtherPos!: PortOtherPos[];
  getCostCentrePortOtherPos!: Sequelize.HasManyGetAssociationsMixin<PortOtherPos>;
  setCostCentrePortOtherPos!: Sequelize.HasManySetAssociationsMixin<PortOtherPos, PortOtherPosId>;
  addCostCentrePortOtherPo!: Sequelize.HasManyAddAssociationMixin<PortOtherPos, PortOtherPosId>;
  addCostCentrePortOtherPos!: Sequelize.HasManyAddAssociationsMixin<PortOtherPos, PortOtherPosId>;
  createCostCentrePortOtherPo!: Sequelize.HasManyCreateAssociationMixin<PortOtherPos>;
  removeCostCentrePortOtherPo!: Sequelize.HasManyRemoveAssociationMixin<PortOtherPos, PortOtherPosId>;
  removeCostCentrePortOtherPos!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherPos, PortOtherPosId>;
  hasCostCentrePortOtherPo!: Sequelize.HasManyHasAssociationMixin<PortOtherPos, PortOtherPosId>;
  hasCostCentrePortOtherPos!: Sequelize.HasManyHasAssociationsMixin<PortOtherPos, PortOtherPosId>;
  countCostCentrePortOtherPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortRecvLnk via companyCode
  portRecvLnks!: PortRecvLnk[];
  getPortRecvLnks!: Sequelize.HasManyGetAssociationsMixin<PortRecvLnk>;
  setPortRecvLnks!: Sequelize.HasManySetAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  addPortRecvLnk!: Sequelize.HasManyAddAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  addPortRecvLnks!: Sequelize.HasManyAddAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  createPortRecvLnk!: Sequelize.HasManyCreateAssociationMixin<PortRecvLnk>;
  removePortRecvLnk!: Sequelize.HasManyRemoveAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  removePortRecvLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  hasPortRecvLnk!: Sequelize.HasManyHasAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  hasPortRecvLnks!: Sequelize.HasManyHasAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  countPortRecvLnks!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortRecvLnk via costCentre
  costCentrePortRecvLnks!: PortRecvLnk[];
  getCostCentrePortRecvLnks!: Sequelize.HasManyGetAssociationsMixin<PortRecvLnk>;
  setCostCentrePortRecvLnks!: Sequelize.HasManySetAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  addCostCentrePortRecvLnk!: Sequelize.HasManyAddAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  addCostCentrePortRecvLnks!: Sequelize.HasManyAddAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  createCostCentrePortRecvLnk!: Sequelize.HasManyCreateAssociationMixin<PortRecvLnk>;
  removeCostCentrePortRecvLnk!: Sequelize.HasManyRemoveAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  removeCostCentrePortRecvLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  hasCostCentrePortRecvLnk!: Sequelize.HasManyHasAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  hasCostCentrePortRecvLnks!: Sequelize.HasManyHasAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  countCostCentrePortRecvLnks!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortRecvMov via companyCode
  portRecvMovs!: PortRecvMov[];
  getPortRecvMovs!: Sequelize.HasManyGetAssociationsMixin<PortRecvMov>;
  setPortRecvMovs!: Sequelize.HasManySetAssociationsMixin<PortRecvMov, PortRecvMovId>;
  addPortRecvMov!: Sequelize.HasManyAddAssociationMixin<PortRecvMov, PortRecvMovId>;
  addPortRecvMovs!: Sequelize.HasManyAddAssociationsMixin<PortRecvMov, PortRecvMovId>;
  createPortRecvMov!: Sequelize.HasManyCreateAssociationMixin<PortRecvMov>;
  removePortRecvMov!: Sequelize.HasManyRemoveAssociationMixin<PortRecvMov, PortRecvMovId>;
  removePortRecvMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvMov, PortRecvMovId>;
  hasPortRecvMov!: Sequelize.HasManyHasAssociationMixin<PortRecvMov, PortRecvMovId>;
  hasPortRecvMovs!: Sequelize.HasManyHasAssociationsMixin<PortRecvMov, PortRecvMovId>;
  countPortRecvMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortRecvMov via costCentre
  costCentrePortRecvMovs!: PortRecvMov[];
  getCostCentrePortRecvMovs!: Sequelize.HasManyGetAssociationsMixin<PortRecvMov>;
  setCostCentrePortRecvMovs!: Sequelize.HasManySetAssociationsMixin<PortRecvMov, PortRecvMovId>;
  addCostCentrePortRecvMov!: Sequelize.HasManyAddAssociationMixin<PortRecvMov, PortRecvMovId>;
  addCostCentrePortRecvMovs!: Sequelize.HasManyAddAssociationsMixin<PortRecvMov, PortRecvMovId>;
  createCostCentrePortRecvMov!: Sequelize.HasManyCreateAssociationMixin<PortRecvMov>;
  removeCostCentrePortRecvMov!: Sequelize.HasManyRemoveAssociationMixin<PortRecvMov, PortRecvMovId>;
  removeCostCentrePortRecvMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvMov, PortRecvMovId>;
  hasCostCentrePortRecvMov!: Sequelize.HasManyHasAssociationMixin<PortRecvMov, PortRecvMovId>;
  hasCostCentrePortRecvMovs!: Sequelize.HasManyHasAssociationsMixin<PortRecvMov, PortRecvMovId>;
  countCostCentrePortRecvMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortRepoMov via companyCode
  portRepoMovs!: PortRepoMov[];
  getPortRepoMovs!: Sequelize.HasManyGetAssociationsMixin<PortRepoMov>;
  setPortRepoMovs!: Sequelize.HasManySetAssociationsMixin<PortRepoMov, PortRepoMovId>;
  addPortRepoMov!: Sequelize.HasManyAddAssociationMixin<PortRepoMov, PortRepoMovId>;
  addPortRepoMovs!: Sequelize.HasManyAddAssociationsMixin<PortRepoMov, PortRepoMovId>;
  createPortRepoMov!: Sequelize.HasManyCreateAssociationMixin<PortRepoMov>;
  removePortRepoMov!: Sequelize.HasManyRemoveAssociationMixin<PortRepoMov, PortRepoMovId>;
  removePortRepoMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoMov, PortRepoMovId>;
  hasPortRepoMov!: Sequelize.HasManyHasAssociationMixin<PortRepoMov, PortRepoMovId>;
  hasPortRepoMovs!: Sequelize.HasManyHasAssociationsMixin<PortRepoMov, PortRepoMovId>;
  countPortRepoMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortRepoMov via costCentre
  costCentrePortRepoMovs!: PortRepoMov[];
  getCostCentrePortRepoMovs!: Sequelize.HasManyGetAssociationsMixin<PortRepoMov>;
  setCostCentrePortRepoMovs!: Sequelize.HasManySetAssociationsMixin<PortRepoMov, PortRepoMovId>;
  addCostCentrePortRepoMov!: Sequelize.HasManyAddAssociationMixin<PortRepoMov, PortRepoMovId>;
  addCostCentrePortRepoMovs!: Sequelize.HasManyAddAssociationsMixin<PortRepoMov, PortRepoMovId>;
  createCostCentrePortRepoMov!: Sequelize.HasManyCreateAssociationMixin<PortRepoMov>;
  removeCostCentrePortRepoMov!: Sequelize.HasManyRemoveAssociationMixin<PortRepoMov, PortRepoMovId>;
  removeCostCentrePortRepoMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoMov, PortRepoMovId>;
  hasCostCentrePortRepoMov!: Sequelize.HasManyHasAssociationMixin<PortRepoMov, PortRepoMovId>;
  hasCostCentrePortRepoMovs!: Sequelize.HasManyHasAssociationsMixin<PortRepoMov, PortRepoMovId>;
  countCostCentrePortRepoMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortRepoPos via companyCode
  portRepoPos!: PortRepoPos[];
  getPortRepoPos!: Sequelize.HasManyGetAssociationsMixin<PortRepoPos>;
  setPortRepoPos!: Sequelize.HasManySetAssociationsMixin<PortRepoPos, PortRepoPosId>;
  addPortRepoPo!: Sequelize.HasManyAddAssociationMixin<PortRepoPos, PortRepoPosId>;
  addPortRepoPos!: Sequelize.HasManyAddAssociationsMixin<PortRepoPos, PortRepoPosId>;
  createPortRepoPo!: Sequelize.HasManyCreateAssociationMixin<PortRepoPos>;
  removePortRepoPo!: Sequelize.HasManyRemoveAssociationMixin<PortRepoPos, PortRepoPosId>;
  removePortRepoPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoPos, PortRepoPosId>;
  hasPortRepoPo!: Sequelize.HasManyHasAssociationMixin<PortRepoPos, PortRepoPosId>;
  hasPortRepoPos!: Sequelize.HasManyHasAssociationsMixin<PortRepoPos, PortRepoPosId>;
  countPortRepoPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortRepoPos via costCentre
  costCentrePortRepoPos!: PortRepoPos[];
  getCostCentrePortRepoPos!: Sequelize.HasManyGetAssociationsMixin<PortRepoPos>;
  setCostCentrePortRepoPos!: Sequelize.HasManySetAssociationsMixin<PortRepoPos, PortRepoPosId>;
  addCostCentrePortRepoPo!: Sequelize.HasManyAddAssociationMixin<PortRepoPos, PortRepoPosId>;
  addCostCentrePortRepoPos!: Sequelize.HasManyAddAssociationsMixin<PortRepoPos, PortRepoPosId>;
  createCostCentrePortRepoPo!: Sequelize.HasManyCreateAssociationMixin<PortRepoPos>;
  removeCostCentrePortRepoPo!: Sequelize.HasManyRemoveAssociationMixin<PortRepoPos, PortRepoPosId>;
  removeCostCentrePortRepoPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoPos, PortRepoPosId>;
  hasCostCentrePortRepoPo!: Sequelize.HasManyHasAssociationMixin<PortRepoPos, PortRepoPosId>;
  hasCostCentrePortRepoPos!: Sequelize.HasManyHasAssociationsMixin<PortRepoPos, PortRepoPosId>;
  countCostCentrePortRepoPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortSwapMov via companyCode
  portSwapMovs!: PortSwapMov[];
  getPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removePortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removePortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortSwapMov via fundingProvider
  fundingProviderPortSwapMovs!: PortSwapMov[];
  getFundingProviderPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setFundingProviderPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addFundingProviderPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addFundingProviderPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createFundingProviderPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removeFundingProviderPortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removeFundingProviderPortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasFundingProviderPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasFundingProviderPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countFundingProviderPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortSwapMov via costCentre
  costCentrePortSwapMovs!: PortSwapMov[];
  getCostCentrePortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setCostCentrePortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addCostCentrePortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addCostCentrePortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createCostCentrePortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removeCostCentrePortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removeCostCentrePortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasCostCentrePortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasCostCentrePortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countCostCentrePortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortSwapPos via companyCode
  portSwapPos!: PortSwapPos[];
  getPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removePortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removePortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortSwapPos via fundingProvider
  fundingProviderPortSwapPos!: PortSwapPos[];
  getFundingProviderPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setFundingProviderPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addFundingProviderPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addFundingProviderPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createFundingProviderPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removeFundingProviderPortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removeFundingProviderPortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasFundingProviderPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasFundingProviderPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countFundingProviderPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortSwapPos via costCentre
  costCentrePortSwapPos!: PortSwapPos[];
  getCostCentrePortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setCostCentrePortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addCostCentrePortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addCostCentrePortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createCostCentrePortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removeCostCentrePortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removeCostCentrePortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasCostCentrePortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasCostCentrePortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countCostCentrePortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortVostroPos via companyCode
  portVostroPos!: PortVostroPos[];
  getPortVostroPos!: Sequelize.HasManyGetAssociationsMixin<PortVostroPos>;
  setPortVostroPos!: Sequelize.HasManySetAssociationsMixin<PortVostroPos, PortVostroPosId>;
  addPortVostroPo!: Sequelize.HasManyAddAssociationMixin<PortVostroPos, PortVostroPosId>;
  addPortVostroPos!: Sequelize.HasManyAddAssociationsMixin<PortVostroPos, PortVostroPosId>;
  createPortVostroPo!: Sequelize.HasManyCreateAssociationMixin<PortVostroPos>;
  removePortVostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortVostroPos, PortVostroPosId>;
  removePortVostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroPos, PortVostroPosId>;
  hasPortVostroPo!: Sequelize.HasManyHasAssociationMixin<PortVostroPos, PortVostroPosId>;
  hasPortVostroPos!: Sequelize.HasManyHasAssociationsMixin<PortVostroPos, PortVostroPosId>;
  countPortVostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortVostroPos via costCentre
  costCentrePortVostroPos!: PortVostroPos[];
  getCostCentrePortVostroPos!: Sequelize.HasManyGetAssociationsMixin<PortVostroPos>;
  setCostCentrePortVostroPos!: Sequelize.HasManySetAssociationsMixin<PortVostroPos, PortVostroPosId>;
  addCostCentrePortVostroPo!: Sequelize.HasManyAddAssociationMixin<PortVostroPos, PortVostroPosId>;
  addCostCentrePortVostroPos!: Sequelize.HasManyAddAssociationsMixin<PortVostroPos, PortVostroPosId>;
  createCostCentrePortVostroPo!: Sequelize.HasManyCreateAssociationMixin<PortVostroPos>;
  removeCostCentrePortVostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortVostroPos, PortVostroPosId>;
  removeCostCentrePortVostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroPos, PortVostroPosId>;
  hasCostCentrePortVostroPo!: Sequelize.HasManyHasAssociationMixin<PortVostroPos, PortVostroPosId>;
  hasCostCentrePortVostroPos!: Sequelize.HasManyHasAssociationsMixin<PortVostroPos, PortVostroPosId>;
  countCostCentrePortVostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre hasMany PortVostroPos via fundingProvider
  fundingProviderPortVostroPos!: PortVostroPos[];
  getFundingProviderPortVostroPos!: Sequelize.HasManyGetAssociationsMixin<PortVostroPos>;
  setFundingProviderPortVostroPos!: Sequelize.HasManySetAssociationsMixin<PortVostroPos, PortVostroPosId>;
  addFundingProviderPortVostroPo!: Sequelize.HasManyAddAssociationMixin<PortVostroPos, PortVostroPosId>;
  addFundingProviderPortVostroPos!: Sequelize.HasManyAddAssociationsMixin<PortVostroPos, PortVostroPosId>;
  createFundingProviderPortVostroPo!: Sequelize.HasManyCreateAssociationMixin<PortVostroPos>;
  removeFundingProviderPortVostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortVostroPos, PortVostroPosId>;
  removeFundingProviderPortVostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroPos, PortVostroPosId>;
  hasFundingProviderPortVostroPo!: Sequelize.HasManyHasAssociationMixin<PortVostroPos, PortVostroPosId>;
  hasFundingProviderPortVostroPos!: Sequelize.HasManyHasAssociationsMixin<PortVostroPos, PortVostroPosId>;
  countFundingProviderPortVostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyCostCentre belongsTo CompanyLob via lobCode
  lobCodeCompanyLob!: CompanyLob;
  getLobCodeCompanyLob!: Sequelize.BelongsToGetAssociationMixin<CompanyLob>;
  setLobCodeCompanyLob!: Sequelize.BelongsToSetAssociationMixin<CompanyLob, CompanyLobId>;
  createLobCodeCompanyLob!: Sequelize.BelongsToCreateAssociationMixin<CompanyLob>;
  // CompanyCostCentre belongsTo DomsConsolidationType via costCentreType
  costCentreTypeDomsConsolidationType!: DomsConsolidationType;
  getCostCentreTypeDomsConsolidationType!: Sequelize.BelongsToGetAssociationMixin<DomsConsolidationType>;
  setCostCentreTypeDomsConsolidationType!: Sequelize.BelongsToSetAssociationMixin<DomsConsolidationType, DomsConsolidationTypeId>;
  createCostCentreTypeDomsConsolidationType!: Sequelize.BelongsToCreateAssociationMixin<DomsConsolidationType>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CompanyCostCentre {
    return CompanyCostCentre.init({
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      field: 'cost_centre'
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
    costCentreName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'cost_centre_name'
    },
    lobCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'company_lob',
        key: 'lob_code'
      },
      field: 'lob_code'
    },
    costCentreType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "A",
      references: {
        model: 'doms_consolidation_type',
        key: 'domain'
      },
      field: 'cost_centre_type'
    },
    costCentreActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'cost_centre_active'
    },
    costCentreLnkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cost_centre_lnk_id'
    }
  }, {
    sequelize,
    tableName: 'company_cost_centre',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-COMPANY_COST_CENTRE",
        unique: true,
        fields: [
          { name: "cost_centre" },
          { name: "company_code" },
        ]
      },
      {
        name: "company_cost_centre_cost_centre_lnk_id",
        unique: true,
        fields: [
          { name: "cost_centre_lnk_id" },
        ]
      },
    ]
  });
  }
}
