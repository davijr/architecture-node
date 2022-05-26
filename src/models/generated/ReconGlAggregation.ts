import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ReconDimensionGroup, ReconDimensionGroupId } from './ReconDimensionGroup';
import type { ReconResult, ReconResultId } from './ReconResult';

export interface ReconGlAggregationAttributes {
  referenceDate: string;
  sourceSystem: string;
  companyCode: string;
  costCentre: string;
  glGaapCode: string;
  reconDimensionGroup: number;
  glValue?: number;
}

export type ReconGlAggregationPk = "referenceDate" | "sourceSystem" | "companyCode" | "costCentre" | "glGaapCode" | "reconDimensionGroup";
export type ReconGlAggregationId = ReconGlAggregation[ReconGlAggregationPk];
export type ReconGlAggregationOptionalAttributes = "glValue";
export type ReconGlAggregationCreationAttributes = Optional<ReconGlAggregationAttributes, ReconGlAggregationOptionalAttributes>;

export class ReconGlAggregation extends Model<ReconGlAggregationAttributes, ReconGlAggregationCreationAttributes> implements ReconGlAggregationAttributes {
  referenceDate!: string;
  sourceSystem!: string;
  companyCode!: string;
  costCentre!: string;
  glGaapCode!: string;
  reconDimensionGroup!: number;
  glValue?: number;

  // ReconGlAggregation belongsTo ReconDimensionGroup via reconDimensionGroup
  reconDimensionGroupReconDimensionGroup!: ReconDimensionGroup;
  getReconDimensionGroupReconDimensionGroup!: Sequelize.BelongsToGetAssociationMixin<ReconDimensionGroup>;
  setReconDimensionGroupReconDimensionGroup!: Sequelize.BelongsToSetAssociationMixin<ReconDimensionGroup, ReconDimensionGroupId>;
  createReconDimensionGroupReconDimensionGroup!: Sequelize.BelongsToCreateAssociationMixin<ReconDimensionGroup>;
  // ReconGlAggregation belongsTo ReconResult via companyCode
  companyCodeReconResult!: ReconResult;
  getCompanyCodeReconResult!: Sequelize.BelongsToGetAssociationMixin<ReconResult>;
  setCompanyCodeReconResult!: Sequelize.BelongsToSetAssociationMixin<ReconResult, ReconResultId>;
  createCompanyCodeReconResult!: Sequelize.BelongsToCreateAssociationMixin<ReconResult>;
  // ReconGlAggregation belongsTo ReconResult via costCentre
  costCentreReconResult!: ReconResult;
  getCostCentreReconResult!: Sequelize.BelongsToGetAssociationMixin<ReconResult>;
  setCostCentreReconResult!: Sequelize.BelongsToSetAssociationMixin<ReconResult, ReconResultId>;
  createCostCentreReconResult!: Sequelize.BelongsToCreateAssociationMixin<ReconResult>;
  // ReconGlAggregation belongsTo ReconResult via referenceDate
  referenceDateReconResult!: ReconResult;
  getReferenceDateReconResult!: Sequelize.BelongsToGetAssociationMixin<ReconResult>;
  setReferenceDateReconResult!: Sequelize.BelongsToSetAssociationMixin<ReconResult, ReconResultId>;
  createReferenceDateReconResult!: Sequelize.BelongsToCreateAssociationMixin<ReconResult>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ReconGlAggregation {
    return ReconGlAggregation.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recon_result',
        key: 'reference_date'
      },
      field: 'reference_date'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'source_system'
    },
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recon_result',
        key: 'reference_date'
      },
      field: 'company_code'
    },
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recon_result',
        key: 'reference_date'
      },
      field: 'cost_centre'
    },
    glGaapCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      field: 'gl_gaap_code'
    },
    reconDimensionGroup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recon_dimension_group',
        key: 'recon_dimension_group'
      },
      field: 'recon_dimension_group'
    },
    glValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'gl_value'
    }
  }, {
    sequelize,
    tableName: 'recon_gl_aggregation',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-RECON_GL_AGGREGATION",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "cost_centre" },
          { name: "gl_gaap_code" },
          { name: "recon_dimension_group" },
        ]
      },
      {
        name: "recon_gl_aggregation_company_code",
        fields: [
          { name: "company_code" },
        ]
      },
      {
        name: "recon_gl_aggregation_cost_centre",
        fields: [
          { name: "cost_centre" },
        ]
      },
      {
        name: "recon_gl_aggregation_recon_dimension_group",
        fields: [
          { name: "recon_dimension_group" },
        ]
      },
      {
        name: "recon_gl_aggregation_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
      {
        name: "recon_gl_aggregation_source_system",
        fields: [
          { name: "source_system" },
        ]
      },
    ]
  });
  }
}
