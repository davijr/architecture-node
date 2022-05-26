import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';
import type { ReconDimensionGroup, ReconDimensionGroupId } from './ReconDimensionGroup';

export interface ReconGlPointAttributes {
  reconGlPointId: number;
  reconDimensionGroup: number;
  glAccountCode: string;
}

export type ReconGlPointPk = "reconGlPointId";
export type ReconGlPointId = ReconGlPoint[ReconGlPointPk];
export type ReconGlPointOptionalAttributes = "reconGlPointId";
export type ReconGlPointCreationAttributes = Optional<ReconGlPointAttributes, ReconGlPointOptionalAttributes>;

export class ReconGlPoint extends Model<ReconGlPointAttributes, ReconGlPointCreationAttributes> implements ReconGlPointAttributes {
  reconGlPointId!: number;
  reconDimensionGroup!: number;
  glAccountCode!: string;

  // ReconGlPoint belongsTo GenldgAccountPlan via glAccountCode
  glAccountCodeGenldgAccountPlan!: GenldgAccountPlan;
  getGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgAccountPlan>;
  // ReconGlPoint belongsTo ReconDimensionGroup via reconDimensionGroup
  reconDimensionGroupReconDimensionGroup!: ReconDimensionGroup;
  getReconDimensionGroupReconDimensionGroup!: Sequelize.BelongsToGetAssociationMixin<ReconDimensionGroup>;
  setReconDimensionGroupReconDimensionGroup!: Sequelize.BelongsToSetAssociationMixin<ReconDimensionGroup, ReconDimensionGroupId>;
  createReconDimensionGroupReconDimensionGroup!: Sequelize.BelongsToCreateAssociationMixin<ReconDimensionGroup>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ReconGlPoint {
    return ReconGlPoint.init({
    reconGlPointId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'recon_gl_point_id'
    },
    reconDimensionGroup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recon_dimension_group',
        key: 'recon_dimension_group'
      },
      field: 'recon_dimension_group'
    },
    glAccountCode: {
      type: DataTypes.CHAR(19),
      allowNull: false,
      references: {
        model: 'genldg_account_plan',
        key: 'gl_account_code'
      },
      field: 'gl_account_code'
    }
  }, {
    sequelize,
    tableName: 'recon_gl_point',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-RECON_GL_POINT",
        unique: true,
        fields: [
          { name: "recon_dimension_group" },
          { name: "gl_account_code" },
        ]
      },
      {
        name: "PK-RECON_GL_POINT",
        unique: true,
        fields: [
          { name: "recon_gl_point_id" },
        ]
      },
    ]
  });
  }
}
