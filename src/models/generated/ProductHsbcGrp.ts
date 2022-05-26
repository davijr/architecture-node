import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsRmgtFacility, DomsRmgtFacilityId } from './DomsRmgtFacility';
import type { ProductHsbcGrpLink, ProductHsbcGrpLinkId } from './ProductHsbcGrpLink';

export interface ProductHsbcGrpAttributes {
  grpProductCode: string;
  grpProductDesc?: string;
  catAB: string;
}

export type ProductHsbcGrpPk = "grpProductCode";
export type ProductHsbcGrpId = ProductHsbcGrp[ProductHsbcGrpPk];
export type ProductHsbcGrpOptionalAttributes = "grpProductDesc";
export type ProductHsbcGrpCreationAttributes = Optional<ProductHsbcGrpAttributes, ProductHsbcGrpOptionalAttributes>;

export class ProductHsbcGrp extends Model<ProductHsbcGrpAttributes, ProductHsbcGrpCreationAttributes> implements ProductHsbcGrpAttributes {
  grpProductCode!: string;
  grpProductDesc?: string;
  catAB!: string;

  // ProductHsbcGrp belongsTo DomsRmgtFacility via catAB
  catABDomsRmgtFacility!: DomsRmgtFacility;
  getCatABDomsRmgtFacility!: Sequelize.BelongsToGetAssociationMixin<DomsRmgtFacility>;
  setCatABDomsRmgtFacility!: Sequelize.BelongsToSetAssociationMixin<DomsRmgtFacility, DomsRmgtFacilityId>;
  createCatABDomsRmgtFacility!: Sequelize.BelongsToCreateAssociationMixin<DomsRmgtFacility>;
  // ProductHsbcGrp hasMany ProductHsbcGrpLink via grpProductCode
  productHsbcGrpLinks!: ProductHsbcGrpLink[];
  getProductHsbcGrpLinks!: Sequelize.HasManyGetAssociationsMixin<ProductHsbcGrpLink>;
  setProductHsbcGrpLinks!: Sequelize.HasManySetAssociationsMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  addProductHsbcGrpLink!: Sequelize.HasManyAddAssociationMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  addProductHsbcGrpLinks!: Sequelize.HasManyAddAssociationsMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  createProductHsbcGrpLink!: Sequelize.HasManyCreateAssociationMixin<ProductHsbcGrpLink>;
  removeProductHsbcGrpLink!: Sequelize.HasManyRemoveAssociationMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  removeProductHsbcGrpLinks!: Sequelize.HasManyRemoveAssociationsMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  hasProductHsbcGrpLink!: Sequelize.HasManyHasAssociationMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  hasProductHsbcGrpLinks!: Sequelize.HasManyHasAssociationsMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  countProductHsbcGrpLinks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ProductHsbcGrp {
    return ProductHsbcGrp.init({
    grpProductCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      field: 'grp_product_code'
    },
    grpProductDesc: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'grp_product_desc'
    },
    catAB: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      references: {
        model: 'doms_rmgt_facility',
        key: 'domain'
      },
      field: 'cat_a_b'
    }
  }, {
    sequelize,
    tableName: 'product_hsbc_grp',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PRODUCT_HSBC_GRP",
        unique: true,
        fields: [
          { name: "grp_product_code" },
        ]
      },
    ]
  });
  }
}
