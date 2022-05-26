import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FcmgtProduct, FcmgtProductId } from './FcmgtProduct';
import type { InvptyDet, InvptyDetId } from './InvptyDet';

export interface FcmgtUtilizationAAttributes {
  invptyCode: number;
  carmProductCode: string;
  utilizationAmount?: number;
}

export type FcmgtUtilizationAPk = "invptyCode" | "carmProductCode";
export type FcmgtUtilizationAId = FcmgtUtilizationA[FcmgtUtilizationAPk];
export type FcmgtUtilizationAOptionalAttributes = "utilizationAmount";
export type FcmgtUtilizationACreationAttributes = Optional<FcmgtUtilizationAAttributes, FcmgtUtilizationAOptionalAttributes>;

export class FcmgtUtilizationA extends Model<FcmgtUtilizationAAttributes, FcmgtUtilizationACreationAttributes> implements FcmgtUtilizationAAttributes {
  invptyCode!: number;
  carmProductCode!: string;
  utilizationAmount?: number;

  // FcmgtUtilizationA belongsTo FcmgtProduct via carmProductCode
  carmProductCodeFcmgtProduct!: FcmgtProduct;
  getCarmProductCodeFcmgtProduct!: Sequelize.BelongsToGetAssociationMixin<FcmgtProduct>;
  setCarmProductCodeFcmgtProduct!: Sequelize.BelongsToSetAssociationMixin<FcmgtProduct, FcmgtProductId>;
  createCarmProductCodeFcmgtProduct!: Sequelize.BelongsToCreateAssociationMixin<FcmgtProduct>;
  // FcmgtUtilizationA belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FcmgtUtilizationA {
    return FcmgtUtilizationA.init({
    invptyCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_code'
    },
    carmProductCode: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fcmgt_product',
        key: 'carm_product_code'
      },
      field: 'carm_product_code'
    },
    utilizationAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'utilization_amount'
    }
  }, {
    sequelize,
    tableName: 'fcmgt_utilization_a',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-FCMGT_UTILIZATION_A",
        unique: true,
        fields: [
          { name: "invpty_code" },
          { name: "carm_product_code" },
        ]
      },
    ]
  });
  }
}
