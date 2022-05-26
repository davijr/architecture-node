import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GenldgAccountGroup, GenldgAccountGroupId } from './GenldgAccountGroup';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';
import type { GenldgGlbsPos, GenldgGlbsPosId } from './GenldgGlbsPos';
import type { GenldgGrcaAverageMap, GenldgGrcaAverageMapId } from './GenldgGrcaAverageMap';
import type { GenldgGrcaPrimaryMap, GenldgGrcaPrimaryMapId } from './GenldgGrcaPrimaryMap';

export interface GenldgGrcaPlanAttributes {
  grcaCode: string;
  grcaAccountName?: string;
  glGroupCode: string;
  recordInitialDate: string;
  recordEndDate?: string;
}

export type GenldgGrcaPlanPk = "grcaCode";
export type GenldgGrcaPlanId = GenldgGrcaPlan[GenldgGrcaPlanPk];
export type GenldgGrcaPlanOptionalAttributes = "grcaAccountName" | "recordEndDate";
export type GenldgGrcaPlanCreationAttributes = Optional<GenldgGrcaPlanAttributes, GenldgGrcaPlanOptionalAttributes>;

export class GenldgGrcaPlan extends Model<GenldgGrcaPlanAttributes, GenldgGrcaPlanCreationAttributes> implements GenldgGrcaPlanAttributes {
  grcaCode!: string;
  grcaAccountName?: string;
  glGroupCode!: string;
  recordInitialDate!: string;
  recordEndDate?: string;

  // GenldgGrcaPlan belongsTo GenldgAccountGroup via glGroupCode
  glGroupCodeGenldgAccountGroup!: GenldgAccountGroup;
  getGlGroupCodeGenldgAccountGroup!: Sequelize.BelongsToGetAssociationMixin<GenldgAccountGroup>;
  setGlGroupCodeGenldgAccountGroup!: Sequelize.BelongsToSetAssociationMixin<GenldgAccountGroup, GenldgAccountGroupId>;
  createGlGroupCodeGenldgAccountGroup!: Sequelize.BelongsToCreateAssociationMixin<GenldgAccountGroup>;
  // GenldgGrcaPlan belongsToMany GenldgAccountPlan via grcaCodeAverage and glAccountCode
  glAccountCodeGenldgAccountPlanGenldgGrcaAverageMaps!: GenldgAccountPlan[];
  getGlAccountCodeGenldgAccountPlanGenldgGrcaAverageMaps!: Sequelize.BelongsToManyGetAssociationsMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlanGenldgGrcaAverageMaps!: Sequelize.BelongsToManySetAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  addGlAccountCodeGenldgAccountPlanGenldgGrcaAverageMap!: Sequelize.BelongsToManyAddAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  addGlAccountCodeGenldgAccountPlanGenldgGrcaAverageMaps!: Sequelize.BelongsToManyAddAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlanGenldgGrcaAverageMap!: Sequelize.BelongsToManyCreateAssociationMixin<GenldgAccountPlan>;
  removeGlAccountCodeGenldgAccountPlanGenldgGrcaAverageMap!: Sequelize.BelongsToManyRemoveAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  removeGlAccountCodeGenldgAccountPlanGenldgGrcaAverageMaps!: Sequelize.BelongsToManyRemoveAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  hasGlAccountCodeGenldgAccountPlanGenldgGrcaAverageMap!: Sequelize.BelongsToManyHasAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  hasGlAccountCodeGenldgAccountPlanGenldgGrcaAverageMaps!: Sequelize.BelongsToManyHasAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  countGlAccountCodeGenldgAccountPlanGenldgGrcaAverageMaps!: Sequelize.BelongsToManyCountAssociationsMixin;
  // GenldgGrcaPlan belongsToMany GenldgAccountPlan via grcaCodePrimary and glAccountCode
  glAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMaps!: GenldgAccountPlan[];
  getGlAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMaps!: Sequelize.BelongsToManyGetAssociationsMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMaps!: Sequelize.BelongsToManySetAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  addGlAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMap!: Sequelize.BelongsToManyAddAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  addGlAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMaps!: Sequelize.BelongsToManyAddAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMap!: Sequelize.BelongsToManyCreateAssociationMixin<GenldgAccountPlan>;
  removeGlAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMap!: Sequelize.BelongsToManyRemoveAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  removeGlAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMaps!: Sequelize.BelongsToManyRemoveAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  hasGlAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMap!: Sequelize.BelongsToManyHasAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  hasGlAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMaps!: Sequelize.BelongsToManyHasAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  countGlAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMaps!: Sequelize.BelongsToManyCountAssociationsMixin;
  // GenldgGrcaPlan hasMany GenldgGlbsPos via grcaCodePrimary
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
  // GenldgGrcaPlan hasMany GenldgGlbsPos via grcaCodeAverage
  grcaCodeAverageGenldgGlbsPos!: GenldgGlbsPos[];
  getGrcaCodeAverageGenldgGlbsPos!: Sequelize.HasManyGetAssociationsMixin<GenldgGlbsPos>;
  setGrcaCodeAverageGenldgGlbsPos!: Sequelize.HasManySetAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addGrcaCodeAverageGenldgGlbsPo!: Sequelize.HasManyAddAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addGrcaCodeAverageGenldgGlbsPos!: Sequelize.HasManyAddAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  createGrcaCodeAverageGenldgGlbsPo!: Sequelize.HasManyCreateAssociationMixin<GenldgGlbsPos>;
  removeGrcaCodeAverageGenldgGlbsPo!: Sequelize.HasManyRemoveAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  removeGrcaCodeAverageGenldgGlbsPos!: Sequelize.HasManyRemoveAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasGrcaCodeAverageGenldgGlbsPo!: Sequelize.HasManyHasAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasGrcaCodeAverageGenldgGlbsPos!: Sequelize.HasManyHasAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  countGrcaCodeAverageGenldgGlbsPos!: Sequelize.HasManyCountAssociationsMixin;
  // GenldgGrcaPlan hasMany GenldgGrcaAverageMap via grcaCodeAverage
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
  // GenldgGrcaPlan hasMany GenldgGrcaPrimaryMap via grcaCodePrimary
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

  static initModel(sequelize: Sequelize.Sequelize): typeof GenldgGrcaPlan {
    return GenldgGrcaPlan.init({
    grcaCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      field: 'grca_code'
    },
    grcaAccountName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'grca_account_name'
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
    tableName: 'genldg_grca_plan',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK--GENLDG_GRCA_PLAN",
        unique: true,
        fields: [
          { name: "grca_code" },
        ]
      },
    ]
  });
  }
}
