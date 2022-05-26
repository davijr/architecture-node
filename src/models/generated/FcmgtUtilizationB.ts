import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface FcmgtUtilizationBAttributes {
  referenceDate: string;
  treatsId: string;
  extCodeCodifier: string;
  ravenPeakPfeValue: number;
  ravenPeakPfeDate: string;
  nonModelled: any;
  maxMat: string;
}

export type FcmgtUtilizationBPk = "referenceDate" | "treatsId" | "extCodeCodifier";
export type FcmgtUtilizationBId = FcmgtUtilizationB[FcmgtUtilizationBPk];
export type FcmgtUtilizationBCreationAttributes = FcmgtUtilizationBAttributes;

export class FcmgtUtilizationB extends Model<FcmgtUtilizationBAttributes, FcmgtUtilizationBCreationAttributes> implements FcmgtUtilizationBAttributes {
  referenceDate!: string;
  treatsId!: string;
  extCodeCodifier!: string;
  ravenPeakPfeValue!: number;
  ravenPeakPfeDate!: string;
  nonModelled!: any;
  maxMat!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof FcmgtUtilizationB {
    return FcmgtUtilizationB.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    treatsId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'treats_id'
    },
    extCodeCodifier: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
      field: 'ext_code_codifier'
    },
    ravenPeakPfeValue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'raven_peak_pfe_value'
    },
    ravenPeakPfeDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'raven_peak_pfe_date'
    },
    nonModelled: {
      type: DataTypes.BLOB,
      allowNull: false,
      field: 'non_modelled'
    },
    maxMat: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'max_mat'
    }
  }, {
    sequelize,
    tableName: 'fcmgt_utilization_b',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-FCMGT_UTILIZATION_B",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "treats_id" },
          { name: "ext_code_codifier" },
        ]
      },
    ]
  });
  }
}
