import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ReconBzdfAggregation, ReconBzdfAggregationId } from './ReconBzdfAggregation';
import type { ReconGlAggregation, ReconGlAggregationId } from './ReconGlAggregation';

export interface ReconResultAttributes {
  referenceDate: string;
  reconDimensionGroup: number;
  companyCode: string;
  costCentre: string;
  glValue: number;
  bzdfValue: number;
  reconciliationBreak: number;
}

export type ReconResultPk = "referenceDate" | "reconDimensionGroup" | "companyCode" | "costCentre";
export type ReconResultId = ReconResult[ReconResultPk];
export type ReconResultCreationAttributes = ReconResultAttributes;

export class ReconResult extends Model<ReconResultAttributes, ReconResultCreationAttributes> implements ReconResultAttributes {
  referenceDate!: string;
  reconDimensionGroup!: number;
  companyCode!: string;
  costCentre!: string;
  glValue!: number;
  bzdfValue!: number;
  reconciliationBreak!: number;

  // ReconResult hasMany ReconBzdfAggregation via companyCode
  reconBzdfAggregations!: ReconBzdfAggregation[];
  getReconBzdfAggregations!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfAggregation>;
  setReconBzdfAggregations!: Sequelize.HasManySetAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  addReconBzdfAggregation!: Sequelize.HasManyAddAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  addReconBzdfAggregations!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  createReconBzdfAggregation!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfAggregation>;
  removeReconBzdfAggregation!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  removeReconBzdfAggregations!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  hasReconBzdfAggregation!: Sequelize.HasManyHasAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  hasReconBzdfAggregations!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  countReconBzdfAggregations!: Sequelize.HasManyCountAssociationsMixin;
  // ReconResult hasMany ReconBzdfAggregation via costCentre
  costCentreReconBzdfAggregations!: ReconBzdfAggregation[];
  getCostCentreReconBzdfAggregations!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfAggregation>;
  setCostCentreReconBzdfAggregations!: Sequelize.HasManySetAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  addCostCentreReconBzdfAggregation!: Sequelize.HasManyAddAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  addCostCentreReconBzdfAggregations!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  createCostCentreReconBzdfAggregation!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfAggregation>;
  removeCostCentreReconBzdfAggregation!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  removeCostCentreReconBzdfAggregations!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  hasCostCentreReconBzdfAggregation!: Sequelize.HasManyHasAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  hasCostCentreReconBzdfAggregations!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  countCostCentreReconBzdfAggregations!: Sequelize.HasManyCountAssociationsMixin;
  // ReconResult hasMany ReconBzdfAggregation via reconDimensionGroup
  reconDimensionGroupReconBzdfAggregations!: ReconBzdfAggregation[];
  getReconDimensionGroupReconBzdfAggregations!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfAggregation>;
  setReconDimensionGroupReconBzdfAggregations!: Sequelize.HasManySetAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  addReconDimensionGroupReconBzdfAggregation!: Sequelize.HasManyAddAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  addReconDimensionGroupReconBzdfAggregations!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  createReconDimensionGroupReconBzdfAggregation!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfAggregation>;
  removeReconDimensionGroupReconBzdfAggregation!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  removeReconDimensionGroupReconBzdfAggregations!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  hasReconDimensionGroupReconBzdfAggregation!: Sequelize.HasManyHasAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  hasReconDimensionGroupReconBzdfAggregations!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  countReconDimensionGroupReconBzdfAggregations!: Sequelize.HasManyCountAssociationsMixin;
  // ReconResult hasMany ReconBzdfAggregation via referenceDate
  referenceDateReconBzdfAggregations!: ReconBzdfAggregation[];
  getReferenceDateReconBzdfAggregations!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfAggregation>;
  setReferenceDateReconBzdfAggregations!: Sequelize.HasManySetAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  addReferenceDateReconBzdfAggregation!: Sequelize.HasManyAddAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  addReferenceDateReconBzdfAggregations!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  createReferenceDateReconBzdfAggregation!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfAggregation>;
  removeReferenceDateReconBzdfAggregation!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  removeReferenceDateReconBzdfAggregations!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  hasReferenceDateReconBzdfAggregation!: Sequelize.HasManyHasAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  hasReferenceDateReconBzdfAggregations!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  countReferenceDateReconBzdfAggregations!: Sequelize.HasManyCountAssociationsMixin;
  // ReconResult hasMany ReconGlAggregation via companyCode
  reconGlAggregations!: ReconGlAggregation[];
  getReconGlAggregations!: Sequelize.HasManyGetAssociationsMixin<ReconGlAggregation>;
  setReconGlAggregations!: Sequelize.HasManySetAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  addReconGlAggregation!: Sequelize.HasManyAddAssociationMixin<ReconGlAggregation, ReconGlAggregationId>;
  addReconGlAggregations!: Sequelize.HasManyAddAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  createReconGlAggregation!: Sequelize.HasManyCreateAssociationMixin<ReconGlAggregation>;
  removeReconGlAggregation!: Sequelize.HasManyRemoveAssociationMixin<ReconGlAggregation, ReconGlAggregationId>;
  removeReconGlAggregations!: Sequelize.HasManyRemoveAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  hasReconGlAggregation!: Sequelize.HasManyHasAssociationMixin<ReconGlAggregation, ReconGlAggregationId>;
  hasReconGlAggregations!: Sequelize.HasManyHasAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  countReconGlAggregations!: Sequelize.HasManyCountAssociationsMixin;
  // ReconResult hasMany ReconGlAggregation via costCentre
  costCentreReconGlAggregations!: ReconGlAggregation[];
  getCostCentreReconGlAggregations!: Sequelize.HasManyGetAssociationsMixin<ReconGlAggregation>;
  setCostCentreReconGlAggregations!: Sequelize.HasManySetAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  addCostCentreReconGlAggregation!: Sequelize.HasManyAddAssociationMixin<ReconGlAggregation, ReconGlAggregationId>;
  addCostCentreReconGlAggregations!: Sequelize.HasManyAddAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  createCostCentreReconGlAggregation!: Sequelize.HasManyCreateAssociationMixin<ReconGlAggregation>;
  removeCostCentreReconGlAggregation!: Sequelize.HasManyRemoveAssociationMixin<ReconGlAggregation, ReconGlAggregationId>;
  removeCostCentreReconGlAggregations!: Sequelize.HasManyRemoveAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  hasCostCentreReconGlAggregation!: Sequelize.HasManyHasAssociationMixin<ReconGlAggregation, ReconGlAggregationId>;
  hasCostCentreReconGlAggregations!: Sequelize.HasManyHasAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  countCostCentreReconGlAggregations!: Sequelize.HasManyCountAssociationsMixin;
  // ReconResult hasMany ReconGlAggregation via referenceDate
  referenceDateReconGlAggregations!: ReconGlAggregation[];
  getReferenceDateReconGlAggregations!: Sequelize.HasManyGetAssociationsMixin<ReconGlAggregation>;
  setReferenceDateReconGlAggregations!: Sequelize.HasManySetAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  addReferenceDateReconGlAggregation!: Sequelize.HasManyAddAssociationMixin<ReconGlAggregation, ReconGlAggregationId>;
  addReferenceDateReconGlAggregations!: Sequelize.HasManyAddAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  createReferenceDateReconGlAggregation!: Sequelize.HasManyCreateAssociationMixin<ReconGlAggregation>;
  removeReferenceDateReconGlAggregation!: Sequelize.HasManyRemoveAssociationMixin<ReconGlAggregation, ReconGlAggregationId>;
  removeReferenceDateReconGlAggregations!: Sequelize.HasManyRemoveAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  hasReferenceDateReconGlAggregation!: Sequelize.HasManyHasAssociationMixin<ReconGlAggregation, ReconGlAggregationId>;
  hasReferenceDateReconGlAggregations!: Sequelize.HasManyHasAssociationsMixin<ReconGlAggregation, ReconGlAggregationId>;
  countReferenceDateReconGlAggregations!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ReconResult {
    return ReconResult.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    reconDimensionGroup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'recon_dimension_group'
    },
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      field: 'company_code'
    },
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      field: 'cost_centre'
    },
    glValue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'gl_value'
    },
    bzdfValue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'bzdf_value'
    },
    reconciliationBreak: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'reconciliation_break'
    }
  }, {
    sequelize,
    tableName: 'recon_result',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-RECON_RESULT",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "recon_dimension_group" },
          { name: "company_code" },
          { name: "cost_centre" },
        ]
      },
    ]
  });
  }
}
