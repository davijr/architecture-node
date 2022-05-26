import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ReconBzdfContractLoad, ReconBzdfContractLoadId } from './ReconBzdfContractLoad';
import type { ReconResult, ReconResultId } from './ReconResult';

export interface ReconBzdfAggregationAttributes {
  reconDimensionGroup: number;
  reconDimensionId: number;
  referenceDate: string;
  companyCode: string;
  costCentre: string;
  bzdfValue?: number;
}

export type ReconBzdfAggregationPk = "reconDimensionGroup" | "reconDimensionId" | "referenceDate" | "companyCode" | "costCentre";
export type ReconBzdfAggregationId = ReconBzdfAggregation[ReconBzdfAggregationPk];
export type ReconBzdfAggregationOptionalAttributes = "bzdfValue";
export type ReconBzdfAggregationCreationAttributes = Optional<ReconBzdfAggregationAttributes, ReconBzdfAggregationOptionalAttributes>;

export class ReconBzdfAggregation extends Model<ReconBzdfAggregationAttributes, ReconBzdfAggregationCreationAttributes> implements ReconBzdfAggregationAttributes {
  reconDimensionGroup!: number;
  reconDimensionId!: number;
  referenceDate!: string;
  companyCode!: string;
  costCentre!: string;
  bzdfValue?: number;

  // ReconBzdfAggregation hasMany ReconBzdfContractLoad via companyCode
  reconBzdfContractLoads!: ReconBzdfContractLoad[];
  getReconBzdfContractLoads!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfContractLoad>;
  setReconBzdfContractLoads!: Sequelize.HasManySetAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  addReconBzdfContractLoad!: Sequelize.HasManyAddAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  addReconBzdfContractLoads!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  createReconBzdfContractLoad!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfContractLoad>;
  removeReconBzdfContractLoad!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  removeReconBzdfContractLoads!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  hasReconBzdfContractLoad!: Sequelize.HasManyHasAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  hasReconBzdfContractLoads!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  countReconBzdfContractLoads!: Sequelize.HasManyCountAssociationsMixin;
  // ReconBzdfAggregation hasMany ReconBzdfContractLoad via costCentre
  costCentreReconBzdfContractLoads!: ReconBzdfContractLoad[];
  getCostCentreReconBzdfContractLoads!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfContractLoad>;
  setCostCentreReconBzdfContractLoads!: Sequelize.HasManySetAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  addCostCentreReconBzdfContractLoad!: Sequelize.HasManyAddAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  addCostCentreReconBzdfContractLoads!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  createCostCentreReconBzdfContractLoad!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfContractLoad>;
  removeCostCentreReconBzdfContractLoad!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  removeCostCentreReconBzdfContractLoads!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  hasCostCentreReconBzdfContractLoad!: Sequelize.HasManyHasAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  hasCostCentreReconBzdfContractLoads!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  countCostCentreReconBzdfContractLoads!: Sequelize.HasManyCountAssociationsMixin;
  // ReconBzdfAggregation hasMany ReconBzdfContractLoad via referenceDate
  referenceDateReconBzdfContractLoads!: ReconBzdfContractLoad[];
  getReferenceDateReconBzdfContractLoads!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfContractLoad>;
  setReferenceDateReconBzdfContractLoads!: Sequelize.HasManySetAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  addReferenceDateReconBzdfContractLoad!: Sequelize.HasManyAddAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  addReferenceDateReconBzdfContractLoads!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  createReferenceDateReconBzdfContractLoad!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfContractLoad>;
  removeReferenceDateReconBzdfContractLoad!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  removeReferenceDateReconBzdfContractLoads!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  hasReferenceDateReconBzdfContractLoad!: Sequelize.HasManyHasAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  hasReferenceDateReconBzdfContractLoads!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  countReferenceDateReconBzdfContractLoads!: Sequelize.HasManyCountAssociationsMixin;
  // ReconBzdfAggregation belongsTo ReconResult via companyCode
  companyCodeReconResult!: ReconResult;
  getCompanyCodeReconResult!: Sequelize.BelongsToGetAssociationMixin<ReconResult>;
  setCompanyCodeReconResult!: Sequelize.BelongsToSetAssociationMixin<ReconResult, ReconResultId>;
  createCompanyCodeReconResult!: Sequelize.BelongsToCreateAssociationMixin<ReconResult>;
  // ReconBzdfAggregation belongsTo ReconResult via costCentre
  costCentreReconResult!: ReconResult;
  getCostCentreReconResult!: Sequelize.BelongsToGetAssociationMixin<ReconResult>;
  setCostCentreReconResult!: Sequelize.BelongsToSetAssociationMixin<ReconResult, ReconResultId>;
  createCostCentreReconResult!: Sequelize.BelongsToCreateAssociationMixin<ReconResult>;
  // ReconBzdfAggregation belongsTo ReconResult via reconDimensionGroup
  reconDimensionGroupReconResult!: ReconResult;
  getReconDimensionGroupReconResult!: Sequelize.BelongsToGetAssociationMixin<ReconResult>;
  setReconDimensionGroupReconResult!: Sequelize.BelongsToSetAssociationMixin<ReconResult, ReconResultId>;
  createReconDimensionGroupReconResult!: Sequelize.BelongsToCreateAssociationMixin<ReconResult>;
  // ReconBzdfAggregation belongsTo ReconResult via referenceDate
  referenceDateReconResult!: ReconResult;
  getReferenceDateReconResult!: Sequelize.BelongsToGetAssociationMixin<ReconResult>;
  setReferenceDateReconResult!: Sequelize.BelongsToSetAssociationMixin<ReconResult, ReconResultId>;
  createReferenceDateReconResult!: Sequelize.BelongsToCreateAssociationMixin<ReconResult>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ReconBzdfAggregation {
    return ReconBzdfAggregation.init({
    reconDimensionGroup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recon_result',
        key: 'reference_date'
      },
      field: 'recon_dimension_group'
    },
    reconDimensionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'recon_dimension_id'
    },
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
    bzdfValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'bzdf_value'
    }
  }, {
    sequelize,
    tableName: 'recon_bzdf_aggregation',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-RECON_BZDF_AGGREGATION",
        unique: true,
        fields: [
          { name: "recon_dimension_group" },
          { name: "recon_dimension_id" },
          { name: "reference_date" },
          { name: "company_code" },
          { name: "cost_centre" },
        ]
      },
      {
        name: "recon_bzdf_aggregation_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
