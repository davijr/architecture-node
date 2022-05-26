import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsGlNature, DomsGlNatureId } from './DomsGlNature';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';
import type { GenldgGrcaPlan, GenldgGrcaPlanId } from './GenldgGrcaPlan';

export interface GenldgAccountGroupAttributes {
  glGroupCode: string;
  glGroupDescription?: string;
  glGroupNature: string;
}

export type GenldgAccountGroupPk = "glGroupCode";
export type GenldgAccountGroupId = GenldgAccountGroup[GenldgAccountGroupPk];
export type GenldgAccountGroupOptionalAttributes = "glGroupDescription";
export type GenldgAccountGroupCreationAttributes = Optional<GenldgAccountGroupAttributes, GenldgAccountGroupOptionalAttributes>;

export class GenldgAccountGroup extends Model<GenldgAccountGroupAttributes, GenldgAccountGroupCreationAttributes> implements GenldgAccountGroupAttributes {
  glGroupCode!: string;
  glGroupDescription?: string;
  glGroupNature!: string;

  // GenldgAccountGroup belongsTo DomsGlNature via glGroupNature
  glGroupNatureDomsGlNature!: DomsGlNature;
  getGlGroupNatureDomsGlNature!: Sequelize.BelongsToGetAssociationMixin<DomsGlNature>;
  setGlGroupNatureDomsGlNature!: Sequelize.BelongsToSetAssociationMixin<DomsGlNature, DomsGlNatureId>;
  createGlGroupNatureDomsGlNature!: Sequelize.BelongsToCreateAssociationMixin<DomsGlNature>;
  // GenldgAccountGroup hasMany GenldgAccountPlan via glGroupCode
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
  // GenldgAccountGroup hasMany GenldgGrcaPlan via glGroupCode
  genldgGrcaPlans!: GenldgGrcaPlan[];
  getGenldgGrcaPlans!: Sequelize.HasManyGetAssociationsMixin<GenldgGrcaPlan>;
  setGenldgGrcaPlans!: Sequelize.HasManySetAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  addGenldgGrcaPlan!: Sequelize.HasManyAddAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  addGenldgGrcaPlans!: Sequelize.HasManyAddAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  createGenldgGrcaPlan!: Sequelize.HasManyCreateAssociationMixin<GenldgGrcaPlan>;
  removeGenldgGrcaPlan!: Sequelize.HasManyRemoveAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  removeGenldgGrcaPlans!: Sequelize.HasManyRemoveAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  hasGenldgGrcaPlan!: Sequelize.HasManyHasAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  hasGenldgGrcaPlans!: Sequelize.HasManyHasAssociationsMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  countGenldgGrcaPlans!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof GenldgAccountGroup {
    return GenldgAccountGroup.init({
    glGroupCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      field: 'gl_group_code'
    },
    glGroupDescription: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'gl_group_description'
    },
    glGroupNature: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'doms_gl_nature',
        key: 'domain'
      },
      field: 'gl_group_nature'
    }
  }, {
    sequelize,
    tableName: 'genldg_account_group',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-GENLDG_ACCOUNT_GROUP",
        unique: true,
        fields: [
          { name: "gl_group_code" },
        ]
      },
    ]
  });
  }
}
