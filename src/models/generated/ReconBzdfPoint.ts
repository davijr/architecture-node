import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ReconBzdfMap, ReconBzdfMapId } from './ReconBzdfMap';
import type { ReconDimension, ReconDimensionId } from './ReconDimension';
import type { ReconMathOperator, ReconMathOperatorId } from './ReconMathOperator';

export interface ReconBzdfPointAttributes {
  reconBzdfPointId: number;
  reconDimensionId: number;
  reconBzdfMapId: number;
  mathOperatorId: number;
}

export type ReconBzdfPointPk = "reconBzdfPointId";
export type ReconBzdfPointId = ReconBzdfPoint[ReconBzdfPointPk];
export type ReconBzdfPointOptionalAttributes = "reconBzdfPointId";
export type ReconBzdfPointCreationAttributes = Optional<ReconBzdfPointAttributes, ReconBzdfPointOptionalAttributes>;

export class ReconBzdfPoint extends Model<ReconBzdfPointAttributes, ReconBzdfPointCreationAttributes> implements ReconBzdfPointAttributes {
  reconBzdfPointId!: number;
  reconDimensionId!: number;
  reconBzdfMapId!: number;
  mathOperatorId!: number;

  // ReconBzdfPoint belongsTo ReconBzdfMap via reconBzdfMapId
  reconBzdfMap!: ReconBzdfMap;
  getReconBzdfMap!: Sequelize.BelongsToGetAssociationMixin<ReconBzdfMap>;
  setReconBzdfMap!: Sequelize.BelongsToSetAssociationMixin<ReconBzdfMap, ReconBzdfMapId>;
  createReconBzdfMap!: Sequelize.BelongsToCreateAssociationMixin<ReconBzdfMap>;
  // ReconBzdfPoint belongsTo ReconDimension via reconDimensionId
  reconDimension!: ReconDimension;
  getReconDimension!: Sequelize.BelongsToGetAssociationMixin<ReconDimension>;
  setReconDimension!: Sequelize.BelongsToSetAssociationMixin<ReconDimension, ReconDimensionId>;
  createReconDimension!: Sequelize.BelongsToCreateAssociationMixin<ReconDimension>;
  // ReconBzdfPoint belongsTo ReconMathOperator via mathOperatorId
  mathOperator!: ReconMathOperator;
  getMathOperator!: Sequelize.BelongsToGetAssociationMixin<ReconMathOperator>;
  setMathOperator!: Sequelize.BelongsToSetAssociationMixin<ReconMathOperator, ReconMathOperatorId>;
  createMathOperator!: Sequelize.BelongsToCreateAssociationMixin<ReconMathOperator>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ReconBzdfPoint {
    return ReconBzdfPoint.init({
    reconBzdfPointId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'recon_bzdf_point_id'
    },
    reconDimensionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recon_dimension',
        key: 'recon_dimension_id'
      },
      field: 'recon_dimension_id'
    },
    reconBzdfMapId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recon_bzdf_map',
        key: 'recon_bzdf_map_id'
      },
      field: 'recon_bzdf_map_id'
    },
    mathOperatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recon_math_operator',
        key: 'math_operator_id'
      },
      field: 'math_operator_id'
    }
  }, {
    sequelize,
    tableName: 'recon_bzdf_point',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-RECON_BZDF_POINT",
        unique: true,
        fields: [
          { name: "recon_dimension_id" },
          { name: "recon_bzdf_map_id" },
        ]
      },
      {
        name: "PK-RECON_BZDF_POINT",
        unique: true,
        fields: [
          { name: "recon_bzdf_point_id" },
        ]
      },
    ]
  });
  }
}
