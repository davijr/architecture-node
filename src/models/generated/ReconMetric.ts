import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ReconDimension, ReconDimensionId } from './ReconDimension';

export interface ReconMetricAttributes {
  reconMetricId: number;
  reconMetricDescription: string;
}

export type ReconMetricPk = "reconMetricId";
export type ReconMetricId = ReconMetric[ReconMetricPk];
export type ReconMetricOptionalAttributes = "reconMetricId";
export type ReconMetricCreationAttributes = Optional<ReconMetricAttributes, ReconMetricOptionalAttributes>;

export class ReconMetric extends Model<ReconMetricAttributes, ReconMetricCreationAttributes> implements ReconMetricAttributes {
  reconMetricId!: number;
  reconMetricDescription!: string;

  // ReconMetric hasMany ReconDimension via reconMetricId
  reconDimensions!: ReconDimension[];
  getReconDimensions!: Sequelize.HasManyGetAssociationsMixin<ReconDimension>;
  setReconDimensions!: Sequelize.HasManySetAssociationsMixin<ReconDimension, ReconDimensionId>;
  addReconDimension!: Sequelize.HasManyAddAssociationMixin<ReconDimension, ReconDimensionId>;
  addReconDimensions!: Sequelize.HasManyAddAssociationsMixin<ReconDimension, ReconDimensionId>;
  createReconDimension!: Sequelize.HasManyCreateAssociationMixin<ReconDimension>;
  removeReconDimension!: Sequelize.HasManyRemoveAssociationMixin<ReconDimension, ReconDimensionId>;
  removeReconDimensions!: Sequelize.HasManyRemoveAssociationsMixin<ReconDimension, ReconDimensionId>;
  hasReconDimension!: Sequelize.HasManyHasAssociationMixin<ReconDimension, ReconDimensionId>;
  hasReconDimensions!: Sequelize.HasManyHasAssociationsMixin<ReconDimension, ReconDimensionId>;
  countReconDimensions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ReconMetric {
    return ReconMetric.init({
    reconMetricId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'recon_metric_id'
    },
    reconMetricDescription: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'recon_metric_description'
    }
  }, {
    sequelize,
    tableName: 'recon_metric',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-RECON_METRIC",
        unique: true,
        fields: [
          { name: "recon_metric_id" },
        ]
      },
    ]
  });
  }
}
