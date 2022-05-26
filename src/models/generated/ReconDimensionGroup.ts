import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ReconDimension, ReconDimensionId } from './ReconDimension';
import type { ReconGlAggregation, ReconGlAggregationId } from './ReconGlAggregation';
import type { ReconGlPoint, ReconGlPointId } from './ReconGlPoint';

export interface ReconDimensionGroupAttributes {
  reconDimensionGroup: number;
}

export type ReconDimensionGroupPk = "reconDimensionGroup";
export type ReconDimensionGroupId = ReconDimensionGroup[ReconDimensionGroupPk];
export type ReconDimensionGroupOptionalAttributes = "reconDimensionGroup";
export type ReconDimensionGroupCreationAttributes = Optional<ReconDimensionGroupAttributes, ReconDimensionGroupOptionalAttributes>;

export class ReconDimensionGroup extends Model<ReconDimensionGroupAttributes, ReconDimensionGroupCreationAttributes> implements ReconDimensionGroupAttributes {
  reconDimensionGroup!: number;

  // ReconDimensionGroup hasMany ReconDimension via reconDimensionGroup
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
  // ReconDimensionGroup hasMany ReconGlAggregation via reconDimensionGroup
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
  // ReconDimensionGroup hasMany ReconGlPoint via reconDimensionGroup
  reconGlPoints!: ReconGlPoint[];
  getReconGlPoints!: Sequelize.HasManyGetAssociationsMixin<ReconGlPoint>;
  setReconGlPoints!: Sequelize.HasManySetAssociationsMixin<ReconGlPoint, ReconGlPointId>;
  addReconGlPoint!: Sequelize.HasManyAddAssociationMixin<ReconGlPoint, ReconGlPointId>;
  addReconGlPoints!: Sequelize.HasManyAddAssociationsMixin<ReconGlPoint, ReconGlPointId>;
  createReconGlPoint!: Sequelize.HasManyCreateAssociationMixin<ReconGlPoint>;
  removeReconGlPoint!: Sequelize.HasManyRemoveAssociationMixin<ReconGlPoint, ReconGlPointId>;
  removeReconGlPoints!: Sequelize.HasManyRemoveAssociationsMixin<ReconGlPoint, ReconGlPointId>;
  hasReconGlPoint!: Sequelize.HasManyHasAssociationMixin<ReconGlPoint, ReconGlPointId>;
  hasReconGlPoints!: Sequelize.HasManyHasAssociationsMixin<ReconGlPoint, ReconGlPointId>;
  countReconGlPoints!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ReconDimensionGroup {
    return ReconDimensionGroup.init({
    reconDimensionGroup: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'recon_dimension_group'
    }
  }, {
    sequelize,
    tableName: 'recon_dimension_group',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-RECON_DIMENSION_GROUP",
        unique: true,
        fields: [
          { name: "recon_dimension_group" },
        ]
      },
    ]
  });
  }
}
