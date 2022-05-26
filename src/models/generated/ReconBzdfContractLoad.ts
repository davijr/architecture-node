import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ReconBzdfAggregation, ReconBzdfAggregationId } from './ReconBzdfAggregation';
import type { ReconDimension, ReconDimensionId } from './ReconDimension';

export interface ReconBzdfContractLoadAttributes {
  referenceDate: string;
  reconDimensionGroup: number;
  reconDimensionId: number;
  sourceTable: string;
  sourceSystem: string;
  companyCode: string;
  costCentre: string;
  contractReference: string;
  bzdfValue?: number;
}

export type ReconBzdfContractLoadPk = "referenceDate" | "reconDimensionGroup" | "reconDimensionId" | "sourceTable" | "sourceSystem" | "companyCode" | "costCentre" | "contractReference";
export type ReconBzdfContractLoadId = ReconBzdfContractLoad[ReconBzdfContractLoadPk];
export type ReconBzdfContractLoadOptionalAttributes = "bzdfValue";
export type ReconBzdfContractLoadCreationAttributes = Optional<ReconBzdfContractLoadAttributes, ReconBzdfContractLoadOptionalAttributes>;

export class ReconBzdfContractLoad extends Model<ReconBzdfContractLoadAttributes, ReconBzdfContractLoadCreationAttributes> implements ReconBzdfContractLoadAttributes {
  referenceDate!: string;
  reconDimensionGroup!: number;
  reconDimensionId!: number;
  sourceTable!: string;
  sourceSystem!: string;
  companyCode!: string;
  costCentre!: string;
  contractReference!: string;
  bzdfValue?: number;

  // ReconBzdfContractLoad belongsTo ReconBzdfAggregation via companyCode
  companyCodeReconBzdfAggregation!: ReconBzdfAggregation;
  getCompanyCodeReconBzdfAggregation!: Sequelize.BelongsToGetAssociationMixin<ReconBzdfAggregation>;
  setCompanyCodeReconBzdfAggregation!: Sequelize.BelongsToSetAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  createCompanyCodeReconBzdfAggregation!: Sequelize.BelongsToCreateAssociationMixin<ReconBzdfAggregation>;
  // ReconBzdfContractLoad belongsTo ReconBzdfAggregation via costCentre
  costCentreReconBzdfAggregation!: ReconBzdfAggregation;
  getCostCentreReconBzdfAggregation!: Sequelize.BelongsToGetAssociationMixin<ReconBzdfAggregation>;
  setCostCentreReconBzdfAggregation!: Sequelize.BelongsToSetAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  createCostCentreReconBzdfAggregation!: Sequelize.BelongsToCreateAssociationMixin<ReconBzdfAggregation>;
  // ReconBzdfContractLoad belongsTo ReconBzdfAggregation via referenceDate
  referenceDateReconBzdfAggregation!: ReconBzdfAggregation;
  getReferenceDateReconBzdfAggregation!: Sequelize.BelongsToGetAssociationMixin<ReconBzdfAggregation>;
  setReferenceDateReconBzdfAggregation!: Sequelize.BelongsToSetAssociationMixin<ReconBzdfAggregation, ReconBzdfAggregationId>;
  createReferenceDateReconBzdfAggregation!: Sequelize.BelongsToCreateAssociationMixin<ReconBzdfAggregation>;
  // ReconBzdfContractLoad belongsTo ReconDimension via reconDimensionGroup
  reconDimensionGroupReconDimension!: ReconDimension;
  getReconDimensionGroupReconDimension!: Sequelize.BelongsToGetAssociationMixin<ReconDimension>;
  setReconDimensionGroupReconDimension!: Sequelize.BelongsToSetAssociationMixin<ReconDimension, ReconDimensionId>;
  createReconDimensionGroupReconDimension!: Sequelize.BelongsToCreateAssociationMixin<ReconDimension>;
  // ReconBzdfContractLoad belongsTo ReconDimension via reconDimensionId
  reconDimension!: ReconDimension;
  getReconDimension!: Sequelize.BelongsToGetAssociationMixin<ReconDimension>;
  setReconDimension!: Sequelize.BelongsToSetAssociationMixin<ReconDimension, ReconDimensionId>;
  createReconDimension!: Sequelize.BelongsToCreateAssociationMixin<ReconDimension>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ReconBzdfContractLoad {
    return ReconBzdfContractLoad.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recon_bzdf_aggregation',
        key: 'reference_date'
      },
      field: 'reference_date'
    },
    reconDimensionGroup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recon_dimension',
        key: 'recon_dimension_id'
      },
      field: 'recon_dimension_group'
    },
    reconDimensionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recon_dimension',
        key: 'recon_dimension_id'
      },
      field: 'recon_dimension_id'
    },
    sourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'source_table'
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
        model: 'recon_bzdf_aggregation',
        key: 'reference_date'
      },
      field: 'company_code'
    },
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recon_bzdf_aggregation',
        key: 'reference_date'
      },
      field: 'cost_centre'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'contract_reference'
    },
    bzdfValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'bzdf_value'
    }
  }, {
    sequelize,
    tableName: 'recon_bzdf_contract_load',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-RECON_BZDF_CONTRACT_LOAD",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "recon_dimension_group" },
          { name: "recon_dimension_id" },
          { name: "source_table" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "cost_centre" },
          { name: "contract_reference" },
        ]
      },
      {
        name: "recon_bzdf_contract_load_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
