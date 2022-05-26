import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GenldgAccountGroup, GenldgAccountGroupId } from './GenldgAccountGroup';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';
import type { GenldgBsJournal, GenldgBsJournalId } from './GenldgBsJournal';
import type { GenldgGaapPlan, GenldgGaapPlanId } from './GenldgGaapPlan';

export interface DomsGlNatureAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsGlNaturePk = "domain";
export type DomsGlNatureId = DomsGlNature[DomsGlNaturePk];
export type DomsGlNatureCreationAttributes = DomsGlNatureAttributes;

export class DomsGlNature extends Model<DomsGlNatureAttributes, DomsGlNatureCreationAttributes> implements DomsGlNatureAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsGlNature hasMany GenldgAccountGroup via glGroupNature
  genldgAccountGroups!: GenldgAccountGroup[];
  getGenldgAccountGroups!: Sequelize.HasManyGetAssociationsMixin<GenldgAccountGroup>;
  setGenldgAccountGroups!: Sequelize.HasManySetAssociationsMixin<GenldgAccountGroup, GenldgAccountGroupId>;
  addGenldgAccountGroup!: Sequelize.HasManyAddAssociationMixin<GenldgAccountGroup, GenldgAccountGroupId>;
  addGenldgAccountGroups!: Sequelize.HasManyAddAssociationsMixin<GenldgAccountGroup, GenldgAccountGroupId>;
  createGenldgAccountGroup!: Sequelize.HasManyCreateAssociationMixin<GenldgAccountGroup>;
  removeGenldgAccountGroup!: Sequelize.HasManyRemoveAssociationMixin<GenldgAccountGroup, GenldgAccountGroupId>;
  removeGenldgAccountGroups!: Sequelize.HasManyRemoveAssociationsMixin<GenldgAccountGroup, GenldgAccountGroupId>;
  hasGenldgAccountGroup!: Sequelize.HasManyHasAssociationMixin<GenldgAccountGroup, GenldgAccountGroupId>;
  hasGenldgAccountGroups!: Sequelize.HasManyHasAssociationsMixin<GenldgAccountGroup, GenldgAccountGroupId>;
  countGenldgAccountGroups!: Sequelize.HasManyCountAssociationsMixin;
  // DomsGlNature hasMany GenldgAccountPlan via glNature
  genldgAccountPlans!: GenldgAccountPlan[];
  getGenldgAccountPlans!: Sequelize.HasManyGetAssociationsMixin<GenldgAccountPlan>;
  setGenldgAccountPlans!: Sequelize.HasManySetAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  addGenldgAccountPlan!: Sequelize.HasManyAddAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  addGenldgAccountPlans!: Sequelize.HasManyAddAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGenldgAccountPlan!: Sequelize.HasManyCreateAssociationMixin<GenldgAccountPlan>;
  removeGenldgAccountPlan!: Sequelize.HasManyRemoveAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  removeGenldgAccountPlans!: Sequelize.HasManyRemoveAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  hasGenldgAccountPlan!: Sequelize.HasManyHasAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  hasGenldgAccountPlans!: Sequelize.HasManyHasAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  countGenldgAccountPlans!: Sequelize.HasManyCountAssociationsMixin;
  // DomsGlNature hasMany GenldgBsJournal via glNature
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
  // DomsGlNature hasMany GenldgGaapPlan via glNature
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsGlNature {
    return DomsGlNature.init({
    domain: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    domainDesc: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'domain_desc'
    }
  }, {
    sequelize,
    tableName: 'doms_gl_nature',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "pk_doms_gl_nature",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
