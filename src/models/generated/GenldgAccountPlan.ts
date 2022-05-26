import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { AlcmCapitalAccountParam, AlcmCapitalAccountParamId } from './AlcmCapitalAccountParam'
import type { BuyinSelloutGlLink } from './BuyinSelloutGlLink'
import type { DomsGlNature, DomsGlNatureId } from './DomsGlNature'
import type { GenldgAccountGroup, GenldgAccountGroupId } from './GenldgAccountGroup'
import type { GenldgBsJournal, GenldgBsJournalId } from './GenldgBsJournal'
import type { GenldgGaapCode, GenldgGaapCodeId } from './GenldgGaapCode'
import type { GenldgGaapPlan, GenldgGaapPlanId } from './GenldgGaapPlan'
import type { GenldgGlbsPos, GenldgGlbsPosId } from './GenldgGlbsPos'
import type { GenldgGrcaAverageMap, GenldgGrcaAverageMapId } from './GenldgGrcaAverageMap'
import type { GenldgGrcaPlan, GenldgGrcaPlanId } from './GenldgGrcaPlan'
import type { GenldgGrcaPrimaryMap, GenldgGrcaPrimaryMapId } from './GenldgGrcaPrimaryMap'
import type { GenldgInvptyLink } from './GenldgInvptyLink'
import type { ReconGlPoint, ReconGlPointId } from './ReconGlPoint'

export interface GenldgAccountPlanAttributes {
  glAccountCode: string;
  glAccountName?: string;
  glNature: string;
  glGroupCode: string;
  recordInitialDate: string;
  recordEndDate?: string;
}

export type GenldgAccountPlanPk = 'glAccountCode';
export type GenldgAccountPlanId = GenldgAccountPlan[GenldgAccountPlanPk];
export type GenldgAccountPlanOptionalAttributes = 'glAccountName' | 'recordEndDate';
export type GenldgAccountPlanCreationAttributes = Optional<GenldgAccountPlanAttributes, GenldgAccountPlanOptionalAttributes>;

export class GenldgAccountPlan extends Model<GenldgAccountPlanAttributes, GenldgAccountPlanCreationAttributes> implements GenldgAccountPlanAttributes {
  glAccountCode!: string;
  glAccountName?: string;
  glNature!: string;
  glGroupCode!: string;
  recordInitialDate!: string;
  recordEndDate?: string;

  // GenldgAccountPlan belongsTo DomsGlNature via glNature
  glNatureDomsGlNature!: DomsGlNature;
  getGlNatureDomsGlNature!: Sequelize.BelongsToGetAssociationMixin<DomsGlNature>;
  setGlNatureDomsGlNature!: Sequelize.BelongsToSetAssociationMixin<DomsGlNature, DomsGlNatureId>;
  createGlNatureDomsGlNature!: Sequelize.BelongsToCreateAssociationMixin<DomsGlNature>;
  // GenldgAccountPlan belongsTo GenldgAccountGroup via glGroupCode
  glGroupCodeGenldgAccountGroup!: GenldgAccountGroup;
  getGlGroupCodeGenldgAccountGroup!: Sequelize.BelongsToGetAssociationMixin<GenldgAccountGroup>;
  setGlGroupCodeGenldgAccountGroup!: Sequelize.BelongsToSetAssociationMixin<GenldgAccountGroup, GenldgAccountGroupId>;
  createGlGroupCodeGenldgAccountGroup!: Sequelize.BelongsToCreateAssociationMixin<GenldgAccountGroup>;
  // GenldgAccountPlan hasOne AlcmCapitalAccountParam via glAccountCode
  alcmCapitalAccountParam!: AlcmCapitalAccountParam;
  getAlcmCapitalAccountParam!: Sequelize.HasOneGetAssociationMixin<AlcmCapitalAccountParam>;
  setAlcmCapitalAccountParam!: Sequelize.HasOneSetAssociationMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  createAlcmCapitalAccountParam!: Sequelize.HasOneCreateAssociationMixin<AlcmCapitalAccountParam>;
  // GenldgAccountPlan hasMany BuyinSelloutGlLink via glAccountCode
  buyinSelloutGlLinks!: BuyinSelloutGlLink[];
  getBuyinSelloutGlLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinSelloutGlLink>;
  countBuyinSelloutGlLinks!: Sequelize.HasManyCountAssociationsMixin;
  // GenldgAccountPlan hasMany GenldgBsJournal via glAccountCode
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
  // GenldgAccountPlan belongsToMany GenldgGaapCode via glAccountCode and glGaapCode
  glGaapCodeGenldgGaapCodes!: GenldgGaapCode[];
  getGlGaapCodeGenldgGaapCodes!: Sequelize.BelongsToManyGetAssociationsMixin<GenldgGaapCode>;
  setGlGaapCodeGenldgGaapCodes!: Sequelize.BelongsToManySetAssociationsMixin<GenldgGaapCode, GenldgGaapCodeId>;
  addGlGaapCodeGenldgGaapCode!: Sequelize.BelongsToManyAddAssociationMixin<GenldgGaapCode, GenldgGaapCodeId>;
  addGlGaapCodeGenldgGaapCodes!: Sequelize.BelongsToManyAddAssociationsMixin<GenldgGaapCode, GenldgGaapCodeId>;
  createGlGaapCodeGenldgGaapCode!: Sequelize.BelongsToManyCreateAssociationMixin<GenldgGaapCode>;
  removeGlGaapCodeGenldgGaapCode!: Sequelize.BelongsToManyRemoveAssociationMixin<GenldgGaapCode, GenldgGaapCodeId>;
  removeGlGaapCodeGenldgGaapCodes!: Sequelize.BelongsToManyRemoveAssociationsMixin<GenldgGaapCode, GenldgGaapCodeId>;
  hasGlGaapCodeGenldgGaapCode!: Sequelize.BelongsToManyHasAssociationMixin<GenldgGaapCode, GenldgGaapCodeId>;
  hasGlGaapCodeGenldgGaapCodes!: Sequelize.BelongsToManyHasAssociationsMixin<GenldgGaapCode, GenldgGaapCodeId>;
  countGlGaapCodeGenldgGaapCodes!: Sequelize.BelongsToManyCountAssociationsMixin;
  // GenldgAccountPlan hasMany GenldgGaapPlan via glAccountCode
  genldgGaapPlans!: GenldgGaapPlan[];
  getGenldgGaapPlans!: Sequelize.HasManyGetAssociationsMixin<GenldgGaapPlan>;
  setGenldgGaapPlans!: Sequelize.HasManySetAssociationsMixin<GenldgGaapPlan, GenldgGaapPlanId>;
  addGenldgGaapPlan!: Sequelize.HasManyAddAssociationMixin<GenldgGaapPlan, GenldgGaapPlanId>;
  addGenldgGaapPlans!: Sequelize.HasManyAddAssociationsMixin<GenldgGaapPlan, GenldgGaapPlanId>;
  createGenldgGaapPlan!: Sequelize.HasManyCreateAssociationMixin<GenldgGaapPlan>;
  removeGenldgGaapPlan!: Sequelize.HasManyRemoveAssociationMixin<GenldgGaapPlan, GenldgGaapPlanId>;
  removeGenldgGaapPlans!: Sequelize.HasManyRemoveAssociationsMixin<GenldgGaapPlan, GenldgGaapPlanId>;
  hasGenldgGaapPlan!: Sequelize.HasManyHasAssociationMixin<GenldgGaapPlan, GenldgGaapPlanId>;
  hasGenldgGaapPlans!: Sequelize.HasManyHasAssociationsMixin<GenldgGaapPlan, GenldgGaapPlanId>;
  countGenldgGaapPlans!: Sequelize.HasManyCountAssociationsMixin;
  // GenldgAccountPlan hasMany GenldgGlbsPos via glAccountCode
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
  // GenldgAccountPlan hasMany GenldgGrcaAverageMap via glAccountCode
  genldgGrcaAverageMaps!: GenldgGrcaAverageMap[];
  getGenldgGrcaAverageMaps!: Sequelize.HasManyGetAssociationsMixin<GenldgGrcaAverageMap>;
  setGenldgGrcaAverageMaps!: Sequelize.HasManySetAssociationsMixin<GenldgGrcaAverageMap, GenldgGrcaAverageMapId>;
  addGenldgGrcaAverageMap!: Sequelize.HasManyAddAssociationMixin<GenldgGrcaAverageMap, GenldgGrcaAverageMapId>;
  addGenldgGrcaAverageMaps!: Sequelize.HasManyAddAssociationsMixin<GenldgGrcaAverageMap, GenldgGrcaAverageMapId>;
  createGenldgGrcaAverageMap!: Sequelize.HasManyCreateAssociationMixin<GenldgGrcaAverageMap>;
  removeGenldgGrcaAverageMap!: Sequelize.HasManyRemoveAssociationMixin<GenldgGrcaAverageMap, GenldgGrcaAverageMapId>;
  removeGenldgGrcaAverageMaps!: Sequelize.HasManyRemoveAssociationsMixin<GenldgGrcaAverageMap, GenldgGrcaAverageMapId>;
  hasGenldgGrcaAverageMap!: Sequelize.HasManyHasAssociationMixin<GenldgGrcaAverageMap, GenldgGrcaAverageMapId>;
  hasGenldgGrcaAverageMaps!: Sequelize.HasManyHasAssociationsMixin<GenldgGrcaAverageMap, GenldgGrcaAverageMapId>;
  countGenldgGrcaAverageMaps!: Sequelize.HasManyCountAssociationsMixin;
  // GenldgAccountPlan belongsToMany GenldgGrcaPlan via glAccountCode and grcaCodeAverage
  grcaCodeAverageGenldgGrcaPlans!: GenldgGrcaPlan[];
  getGrcaCodeAverageGenldgGrcaPlans!: Sequelize.BelongsToManyGetAssociationsMixin<GenldgGrcaPlan>;
  setGrcaCodeAverageGenldgGrcaPlans!: Sequelize.BelongsToManySetAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  addGrcaCodeAverageGenldgGrcaPlan!: Sequelize.BelongsToManyAddAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  addGrcaCodeAverageGenldgGrcaPlans!: Sequelize.BelongsToManyAddAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  createGrcaCodeAverageGenldgGrcaPlan!: Sequelize.BelongsToManyCreateAssociationMixin<GenldgGrcaPlan>;
  removeGrcaCodeAverageGenldgGrcaPlan!: Sequelize.BelongsToManyRemoveAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  removeGrcaCodeAverageGenldgGrcaPlans!: Sequelize.BelongsToManyRemoveAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  hasGrcaCodeAverageGenldgGrcaPlan!: Sequelize.BelongsToManyHasAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  hasGrcaCodeAverageGenldgGrcaPlans!: Sequelize.BelongsToManyHasAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  countGrcaCodeAverageGenldgGrcaPlans!: Sequelize.BelongsToManyCountAssociationsMixin;
  // GenldgAccountPlan belongsToMany GenldgGrcaPlan via glAccountCode and grcaCodePrimary
  grcaCodePrimaryGenldgGrcaPlans!: GenldgGrcaPlan[];
  getGrcaCodePrimaryGenldgGrcaPlans!: Sequelize.BelongsToManyGetAssociationsMixin<GenldgGrcaPlan>;
  setGrcaCodePrimaryGenldgGrcaPlans!: Sequelize.BelongsToManySetAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  addGrcaCodePrimaryGenldgGrcaPlan!: Sequelize.BelongsToManyAddAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  addGrcaCodePrimaryGenldgGrcaPlans!: Sequelize.BelongsToManyAddAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  createGrcaCodePrimaryGenldgGrcaPlan!: Sequelize.BelongsToManyCreateAssociationMixin<GenldgGrcaPlan>;
  removeGrcaCodePrimaryGenldgGrcaPlan!: Sequelize.BelongsToManyRemoveAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  removeGrcaCodePrimaryGenldgGrcaPlans!: Sequelize.BelongsToManyRemoveAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  hasGrcaCodePrimaryGenldgGrcaPlan!: Sequelize.BelongsToManyHasAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  hasGrcaCodePrimaryGenldgGrcaPlans!: Sequelize.BelongsToManyHasAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  countGrcaCodePrimaryGenldgGrcaPlans!: Sequelize.BelongsToManyCountAssociationsMixin;
  // GenldgAccountPlan hasMany GenldgGrcaPrimaryMap via glAccountCode
  genldgGrcaPrimaryMaps!: GenldgGrcaPrimaryMap[];
  getGenldgGrcaPrimaryMaps!: Sequelize.HasManyGetAssociationsMixin<GenldgGrcaPrimaryMap>;
  setGenldgGrcaPrimaryMaps!: Sequelize.HasManySetAssociationsMixin<GenldgGrcaPrimaryMap, GenldgGrcaPrimaryMapId>;
  addGenldgGrcaPrimaryMap!: Sequelize.HasManyAddAssociationMixin<GenldgGrcaPrimaryMap, GenldgGrcaPrimaryMapId>;
  addGenldgGrcaPrimaryMaps!: Sequelize.HasManyAddAssociationsMixin<GenldgGrcaPrimaryMap, GenldgGrcaPrimaryMapId>;
  createGenldgGrcaPrimaryMap!: Sequelize.HasManyCreateAssociationMixin<GenldgGrcaPrimaryMap>;
  removeGenldgGrcaPrimaryMap!: Sequelize.HasManyRemoveAssociationMixin<GenldgGrcaPrimaryMap, GenldgGrcaPrimaryMapId>;
  removeGenldgGrcaPrimaryMaps!: Sequelize.HasManyRemoveAssociationsMixin<GenldgGrcaPrimaryMap, GenldgGrcaPrimaryMapId>;
  hasGenldgGrcaPrimaryMap!: Sequelize.HasManyHasAssociationMixin<GenldgGrcaPrimaryMap, GenldgGrcaPrimaryMapId>;
  hasGenldgGrcaPrimaryMaps!: Sequelize.HasManyHasAssociationsMixin<GenldgGrcaPrimaryMap, GenldgGrcaPrimaryMapId>;
  countGenldgGrcaPrimaryMaps!: Sequelize.HasManyCountAssociationsMixin;
  // GenldgAccountPlan hasMany GenldgInvptyLink via glAccountCode
  genldgInvptyLinks!: GenldgInvptyLink[];
  getGenldgInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<GenldgInvptyLink>;
  countGenldgInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // GenldgAccountPlan hasMany ReconGlPoint via glAccountCode
  reconGlPoints!: ReconGlPoint[];
  getReconGlPoints!: Sequelize.HasManyGetAssociationsMixin<ReconGlPoint>;
  setReconGlPoints!: Sequelize.HasManySetAssociationsMixin<ReconGlPoint, ReconGlPointId>;
  addReconGlPoint!: Sequelize.HasManyAddAssociationMixin<ReconGlPoint, ReconGlPointId>;
  addReconGlPoints!: Sequelize.HasManyAddAssociationsMixin<ReconGlPoint, ReconGlPointId>;
  createReconGlPoint!: Sequelize.HasManyCreateAssociationMixin<ReconGlPoint>;
  removeReconGlPoint!: Sequelize.HasManyRemoveAssociationMixin<ReconGlPoint, ReconGlPointId>;
  removeReconGlPoints!: Sequelize.HasManyRemoveAssociationsMixin<ReconGlPoint, ReconGlPointId>;
  hasReconGlPoint!: Sequelize.HasManyHasAssociationMixin<ReconGlPoint, ReconGlPointId>;
  hasReconGlPoints!: Sequelize.HasManyHasAssociationsMixin<ReconGlPoint, ReconGlPointId>;
  countReconGlPoints!: Sequelize.HasManyCountAssociationsMixin;

  static initModel (sequelize: Sequelize.Sequelize): typeof GenldgAccountPlan {
    return GenldgAccountPlan.init({
      glAccountCode: {
        type: DataTypes.CHAR(19),
        allowNull: false,
        primaryKey: true,
        field: 'gl_account_code'
      },
      glAccountName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'gl_account_name'
      },
      glNature: {
        type: DataTypes.STRING(1),
        allowNull: false,
        references: {
          model: 'doms_gl_nature',
          key: 'domain'
        },
        field: 'gl_nature'
      },
      glGroupCode: {
        type: DataTypes.STRING(3),
        allowNull: false,
        references: {
          model: 'genldg_account_group',
          key: 'gl_group_code'
        },
        field: 'gl_group_code'
      },
      recordInitialDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'record_initial_date'
      },
      recordEndDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'record_end_date'
      }
    }, {
      sequelize,
      tableName: 'genldg_account_plan',
      schema: 'bzdf',
      timestamps: false,
      indexes: [
        {
          name: 'PK-GENLDG_ACCOUNT_PLAN',
          unique: true,
          fields: [
            { name: 'gl_account_code' }
          ]
        }
      ]
    })
  }
}
