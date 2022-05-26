import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FcmgtFacilityCode, FcmgtFacilityCodeId } from './FcmgtFacilityCode';
import type { FcmgtProduct, FcmgtProductId } from './FcmgtProduct';

export interface FcmgtProductFacilityLinkAttributes {
  facilityCode: string;
  carmProductCode: string;
}

export type FcmgtProductFacilityLinkPk = "facilityCode" | "carmProductCode";
export type FcmgtProductFacilityLinkId = FcmgtProductFacilityLink[FcmgtProductFacilityLinkPk];
export type FcmgtProductFacilityLinkCreationAttributes = FcmgtProductFacilityLinkAttributes;

export class FcmgtProductFacilityLink extends Model<FcmgtProductFacilityLinkAttributes, FcmgtProductFacilityLinkCreationAttributes> implements FcmgtProductFacilityLinkAttributes {
  facilityCode!: string;
  carmProductCode!: string;

  // FcmgtProductFacilityLink belongsTo FcmgtFacilityCode via facilityCode
  facilityCodeFcmgtFacilityCode!: FcmgtFacilityCode;
  getFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToGetAssociationMixin<FcmgtFacilityCode>;
  setFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToSetAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  createFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToCreateAssociationMixin<FcmgtFacilityCode>;
  // FcmgtProductFacilityLink belongsTo FcmgtProduct via carmProductCode
  carmProductCodeFcmgtProduct!: FcmgtProduct;
  getCarmProductCodeFcmgtProduct!: Sequelize.BelongsToGetAssociationMixin<FcmgtProduct>;
  setCarmProductCodeFcmgtProduct!: Sequelize.BelongsToSetAssociationMixin<FcmgtProduct, FcmgtProductId>;
  createCarmProductCodeFcmgtProduct!: Sequelize.BelongsToCreateAssociationMixin<FcmgtProduct>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FcmgtProductFacilityLink {
    return FcmgtProductFacilityLink.init({
    facilityCode: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fcmgt_facility_code',
        key: 'facility_code'
      },
      field: 'facility_code'
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
    }
  }, {
    sequelize,
    tableName: 'fcmgt_product_facility_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-FCMGT_PRODUCT_FACILITY_LINK",
        unique: true,
        fields: [
          { name: "facility_code" },
          { name: "carm_product_code" },
        ]
      },
    ]
  });
  }
}
