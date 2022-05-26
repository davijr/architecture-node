import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SysCurve, SysCurveId } from './SysCurve';

export interface MktdEodCurveAttributes {
  referenceDate: string;
  discountCurveName: string;
  curvePillarDate: string;
  curvePillarTenorWd: number;
  curvePillarTenorAct: number;
  discountFactor?: number;
  rate?: number;
}

export type MktdEodCurvePk = "referenceDate" | "discountCurveName" | "curvePillarDate";
export type MktdEodCurveId = MktdEodCurve[MktdEodCurvePk];
export type MktdEodCurveOptionalAttributes = "discountFactor" | "rate";
export type MktdEodCurveCreationAttributes = Optional<MktdEodCurveAttributes, MktdEodCurveOptionalAttributes>;

export class MktdEodCurve extends Model<MktdEodCurveAttributes, MktdEodCurveCreationAttributes> implements MktdEodCurveAttributes {
  referenceDate!: string;
  discountCurveName!: string;
  curvePillarDate!: string;
  curvePillarTenorWd!: number;
  curvePillarTenorAct!: number;
  discountFactor?: number;
  rate?: number;

  // MktdEodCurve belongsTo SysCurve via discountCurveName
  discountCurveNameSysCurve!: SysCurve;
  getDiscountCurveNameSysCurve!: Sequelize.BelongsToGetAssociationMixin<SysCurve>;
  setDiscountCurveNameSysCurve!: Sequelize.BelongsToSetAssociationMixin<SysCurve, SysCurveId>;
  createDiscountCurveNameSysCurve!: Sequelize.BelongsToCreateAssociationMixin<SysCurve>;

  static initModel(sequelize: Sequelize.Sequelize): typeof MktdEodCurve {
    return MktdEodCurve.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    discountCurveName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_curve',
        key: 'curve_name'
      },
      field: 'discount_curve_name'
    },
    curvePillarDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'curve_pillar_date'
    },
    curvePillarTenorWd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'curve_pillar_tenor_wd'
    },
    curvePillarTenorAct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'curve_pillar_tenor_act'
    },
    discountFactor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'discount_factor'
    },
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mktd_eod_curve',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-MKTD_EOD_CURVE",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "discount_curve_name" },
          { name: "curve_pillar_date" },
        ]
      },
      {
        name: "mktd_eod_curve_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
