import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FcmgtProduct, FcmgtProductId } from './FcmgtProduct';
import type { Product, ProductId } from './Product';

export interface FcmgtProductLinkAttributes {
  carmProductCode: string;
  productCode: string;
}

export type FcmgtProductLinkPk = "carmProductCode" | "productCode";
export type FcmgtProductLinkId = FcmgtProductLink[FcmgtProductLinkPk];
export type FcmgtProductLinkCreationAttributes = FcmgtProductLinkAttributes;

export class FcmgtProductLink extends Model<FcmgtProductLinkAttributes, FcmgtProductLinkCreationAttributes> implements FcmgtProductLinkAttributes {
  carmProductCode!: string;
  productCode!: string;

  // FcmgtProductLink belongsTo FcmgtProduct via carmProductCode
  carmProductCodeFcmgtProduct!: FcmgtProduct;
  getCarmProductCodeFcmgtProduct!: Sequelize.BelongsToGetAssociationMixin<FcmgtProduct>;
  setCarmProductCodeFcmgtProduct!: Sequelize.BelongsToSetAssociationMixin<FcmgtProduct, FcmgtProductId>;
  createCarmProductCodeFcmgtProduct!: Sequelize.BelongsToCreateAssociationMixin<FcmgtProduct>;
  // FcmgtProductLink belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FcmgtProductLink {
    return FcmgtProductLink.init({
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
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'product_code'
      },
      field: 'product_code'
    }
  }, {
    sequelize,
    tableName: 'fcmgt_product_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-FCMGT_PRODUCT_LINK",
        unique: true,
        fields: [
          { name: "carm_product_code" },
          { name: "product_code" },
        ]
      },
    ]
  });
  }
}
