import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ReconBzdfPoint, ReconBzdfPointId } from './ReconBzdfPoint';

export interface ReconMathOperatorAttributes {
  mathOperatorId: number;
  mathOperator: string;
  mathOperatorDesc?: string;
}

export type ReconMathOperatorPk = "mathOperatorId";
export type ReconMathOperatorId = ReconMathOperator[ReconMathOperatorPk];
export type ReconMathOperatorOptionalAttributes = "mathOperatorId" | "mathOperatorDesc";
export type ReconMathOperatorCreationAttributes = Optional<ReconMathOperatorAttributes, ReconMathOperatorOptionalAttributes>;

export class ReconMathOperator extends Model<ReconMathOperatorAttributes, ReconMathOperatorCreationAttributes> implements ReconMathOperatorAttributes {
  mathOperatorId!: number;
  mathOperator!: string;
  mathOperatorDesc?: string;

  // ReconMathOperator hasMany ReconBzdfPoint via mathOperatorId
  reconBzdfPoints!: ReconBzdfPoint[];
  getReconBzdfPoints!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfPoint>;
  setReconBzdfPoints!: Sequelize.HasManySetAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  addReconBzdfPoint!: Sequelize.HasManyAddAssociationMixin<ReconBzdfPoint, ReconBzdfPointId>;
  addReconBzdfPoints!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  createReconBzdfPoint!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfPoint>;
  removeReconBzdfPoint!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfPoint, ReconBzdfPointId>;
  removeReconBzdfPoints!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  hasReconBzdfPoint!: Sequelize.HasManyHasAssociationMixin<ReconBzdfPoint, ReconBzdfPointId>;
  hasReconBzdfPoints!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  countReconBzdfPoints!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ReconMathOperator {
    return ReconMathOperator.init({
    mathOperatorId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'math_operator_id'
    },
    mathOperator: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'math_operator'
    },
    mathOperatorDesc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'math_operator_desc'
    }
  }, {
    sequelize,
    tableName: 'recon_math_operator',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-RECON_MATH_OPERATOR",
        unique: true,
        fields: [
          { name: "math_operator_id" },
        ]
      },
      {
        name: "recon_math_operator_math_operator_id",
        unique: true,
        fields: [
          { name: "math_operator_id" },
        ]
      },
    ]
  });
  }
}
