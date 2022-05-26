import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';
import type { GenldgGaapPlan, GenldgGaapPlanId } from './GenldgGaapPlan';
import type { GenldgGlbsPos, GenldgGlbsPosId } from './GenldgGlbsPos';

export interface GenldgGaapCodeAttributes {
  glGaapCode: string;
  glGaapDescription?: string;
}

export type GenldgGaapCodePk = "glGaapCode";
export type GenldgGaapCodeId = GenldgGaapCode[GenldgGaapCodePk];
export type GenldgGaapCodeOptionalAttributes = "glGaapDescription";
export type GenldgGaapCodeCreationAttributes = Optional<GenldgGaapCodeAttributes, GenldgGaapCodeOptionalAttributes>;

export class GenldgGaapCode extends Model<GenldgGaapCodeAttributes, GenldgGaapCodeCreationAttributes> implements GenldgGaapCodeAttributes {
  glGaapCode!: string;
  glGaapDescription?: string;

  // GenldgGaapCode belongsToMany GenldgAccountPlan via glGaapCode and glAccountCode
  glAccountCodeGenldgAccountPlans!: GenldgAccountPlan[];
  getGlAccountCodeGenldgAccountPlans!: Sequelize.BelongsToManyGetAssociationsMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlans!: Sequelize.BelongsToManySetAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  addGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToManyAddAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  addGlAccountCodeGenldgAccountPlans!: Sequelize.BelongsToManyAddAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToManyCreateAssociationMixin<GenldgAccountPlan>;
  removeGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToManyRemoveAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  removeGlAccountCodeGenldgAccountPlans!: Sequelize.BelongsToManyRemoveAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  hasGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToManyHasAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  hasGlAccountCodeGenldgAccountPlans!: Sequelize.BelongsToManyHasAssociationsMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  countGlAccountCodeGenldgAccountPlans!: Sequelize.BelongsToManyCountAssociationsMixin;
  // GenldgGaapCode hasMany GenldgGaapPlan via glGaapCode
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
  // GenldgGaapCode hasMany GenldgGlbsPos via glGaapCode
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

  static initModel(sequelize: Sequelize.Sequelize): typeof GenldgGaapCode {
    return GenldgGaapCode.init({
    glGaapCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      field: 'gl_gaap_code'
    },
    glGaapDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'gl_gaap_description'
    }
  }, {
    sequelize,
    tableName: 'genldg_gaap_code',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-GENLDG_GAAP_CODE",
        unique: true,
        fields: [
          { name: "gl_gaap_code" },
        ]
      },
    ]
  });
  }
}
