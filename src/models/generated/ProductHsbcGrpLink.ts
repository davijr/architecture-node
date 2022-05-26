import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Product, ProductId } from './Product';
import type { ProductHsbcGrp, ProductHsbcGrpId } from './ProductHsbcGrp';

export interface ProductHsbcGrpLinkAttributes {
  sourceTable: string;
  productCode: string;
  grpProductCode: string;
  prdGrpLnkId: number;
}

export type ProductHsbcGrpLinkPk = "prdGrpLnkId";
export type ProductHsbcGrpLinkId = ProductHsbcGrpLink[ProductHsbcGrpLinkPk];
export type ProductHsbcGrpLinkCreationAttributes = ProductHsbcGrpLinkAttributes;

export class ProductHsbcGrpLink extends Model<ProductHsbcGrpLinkAttributes, ProductHsbcGrpLinkCreationAttributes> implements ProductHsbcGrpLinkAttributes {
  sourceTable!: string;
  productCode!: string;
  grpProductCode!: string;
  prdGrpLnkId!: number;

  // ProductHsbcGrpLink belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // ProductHsbcGrpLink belongsTo ProductHsbcGrp via grpProductCode
  grpProductCodeProductHsbcGrp!: ProductHsbcGrp;
  getGrpProductCodeProductHsbcGrp!: Sequelize.BelongsToGetAssociationMixin<ProductHsbcGrp>;
  setGrpProductCodeProductHsbcGrp!: Sequelize.BelongsToSetAssociationMixin<ProductHsbcGrp, ProductHsbcGrpId>;
  createGrpProductCodeProductHsbcGrp!: Sequelize.BelongsToCreateAssociationMixin<ProductHsbcGrp>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ProductHsbcGrpLink {
    return ProductHsbcGrpLink.init({
    sourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'source_table'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      references: {
        model: 'product',
        key: 'product_code'
      },
      field: 'product_code'
    },
    grpProductCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'product_hsbc_grp',
        key: 'grp_product_code'
      },
      field: 'grp_product_code'
    },
    prdGrpLnkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'prd_grp_lnk_id'
    }
  }, {
    sequelize,
    tableName: 'product_hsbc_grp_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-PRODUCT_HSBC_GRP_LINK",
        unique: true,
        fields: [
          { name: "product_code" },
          { name: "grp_product_code" },
          { name: "source_table" },
        ]
      },
      {
        name: "PK-PRODUCT_HSBC_GRP_LINK",
        unique: true,
        fields: [
          { name: "prd_grp_lnk_id" },
        ]
      },
    ]
  });
  }
}
