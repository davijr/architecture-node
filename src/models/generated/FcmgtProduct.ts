import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FcmgtFacilityCode, FcmgtFacilityCodeId } from './FcmgtFacilityCode';
import type { FcmgtProductFacilityLink, FcmgtProductFacilityLinkId } from './FcmgtProductFacilityLink';
import type { FcmgtProductGroup, FcmgtProductGroupId } from './FcmgtProductGroup';
import type { FcmgtProductLink, FcmgtProductLinkId } from './FcmgtProductLink';
import type { FcmgtUtilizationA, FcmgtUtilizationAId } from './FcmgtUtilizationA';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { Product, ProductId } from './Product';

export interface FcmgtProductAttributes {
  carmProductCode: string;
  carmProductDesc?: string;
  carmProductFamilyId: string;
}

export type FcmgtProductPk = "carmProductCode";
export type FcmgtProductId = FcmgtProduct[FcmgtProductPk];
export type FcmgtProductOptionalAttributes = "carmProductDesc";
export type FcmgtProductCreationAttributes = Optional<FcmgtProductAttributes, FcmgtProductOptionalAttributes>;

export class FcmgtProduct extends Model<FcmgtProductAttributes, FcmgtProductCreationAttributes> implements FcmgtProductAttributes {
  carmProductCode!: string;
  carmProductDesc?: string;
  carmProductFamilyId!: string;

  // FcmgtProduct belongsToMany FcmgtFacilityCode via carmProductCode and facilityCode
  facilityCodeFcmgtFacilityCodeFcmgtProductFacilityLinks!: FcmgtFacilityCode[];
  getFacilityCodeFcmgtFacilityCodeFcmgtProductFacilityLinks!: Sequelize.BelongsToManyGetAssociationsMixin<FcmgtFacilityCode>;
  setFacilityCodeFcmgtFacilityCodeFcmgtProductFacilityLinks!: Sequelize.BelongsToManySetAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  addFacilityCodeFcmgtFacilityCodeFcmgtProductFacilityLink!: Sequelize.BelongsToManyAddAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  addFacilityCodeFcmgtFacilityCodeFcmgtProductFacilityLinks!: Sequelize.BelongsToManyAddAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  createFacilityCodeFcmgtFacilityCodeFcmgtProductFacilityLink!: Sequelize.BelongsToManyCreateAssociationMixin<FcmgtFacilityCode>;
  removeFacilityCodeFcmgtFacilityCodeFcmgtProductFacilityLink!: Sequelize.BelongsToManyRemoveAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  removeFacilityCodeFcmgtFacilityCodeFcmgtProductFacilityLinks!: Sequelize.BelongsToManyRemoveAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  hasFacilityCodeFcmgtFacilityCodeFcmgtProductFacilityLink!: Sequelize.BelongsToManyHasAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  hasFacilityCodeFcmgtFacilityCodeFcmgtProductFacilityLinks!: Sequelize.BelongsToManyHasAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  countFacilityCodeFcmgtFacilityCodeFcmgtProductFacilityLinks!: Sequelize.BelongsToManyCountAssociationsMixin;
  // FcmgtProduct hasMany FcmgtProductFacilityLink via carmProductCode
  fcmgtProductFacilityLinks!: FcmgtProductFacilityLink[];
  getFcmgtProductFacilityLinks!: Sequelize.HasManyGetAssociationsMixin<FcmgtProductFacilityLink>;
  setFcmgtProductFacilityLinks!: Sequelize.HasManySetAssociationsMixin<FcmgtProductFacilityLink, FcmgtProductFacilityLinkId>;
  addFcmgtProductFacilityLink!: Sequelize.HasManyAddAssociationMixin<FcmgtProductFacilityLink, FcmgtProductFacilityLinkId>;
  addFcmgtProductFacilityLinks!: Sequelize.HasManyAddAssociationsMixin<FcmgtProductFacilityLink, FcmgtProductFacilityLinkId>;
  createFcmgtProductFacilityLink!: Sequelize.HasManyCreateAssociationMixin<FcmgtProductFacilityLink>;
  removeFcmgtProductFacilityLink!: Sequelize.HasManyRemoveAssociationMixin<FcmgtProductFacilityLink, FcmgtProductFacilityLinkId>;
  removeFcmgtProductFacilityLinks!: Sequelize.HasManyRemoveAssociationsMixin<FcmgtProductFacilityLink, FcmgtProductFacilityLinkId>;
  hasFcmgtProductFacilityLink!: Sequelize.HasManyHasAssociationMixin<FcmgtProductFacilityLink, FcmgtProductFacilityLinkId>;
  hasFcmgtProductFacilityLinks!: Sequelize.HasManyHasAssociationsMixin<FcmgtProductFacilityLink, FcmgtProductFacilityLinkId>;
  countFcmgtProductFacilityLinks!: Sequelize.HasManyCountAssociationsMixin;
  // FcmgtProduct hasMany FcmgtProductLink via carmProductCode
  fcmgtProductLinks!: FcmgtProductLink[];
  getFcmgtProductLinks!: Sequelize.HasManyGetAssociationsMixin<FcmgtProductLink>;
  setFcmgtProductLinks!: Sequelize.HasManySetAssociationsMixin<FcmgtProductLink, FcmgtProductLinkId>;
  addFcmgtProductLink!: Sequelize.HasManyAddAssociationMixin<FcmgtProductLink, FcmgtProductLinkId>;
  addFcmgtProductLinks!: Sequelize.HasManyAddAssociationsMixin<FcmgtProductLink, FcmgtProductLinkId>;
  createFcmgtProductLink!: Sequelize.HasManyCreateAssociationMixin<FcmgtProductLink>;
  removeFcmgtProductLink!: Sequelize.HasManyRemoveAssociationMixin<FcmgtProductLink, FcmgtProductLinkId>;
  removeFcmgtProductLinks!: Sequelize.HasManyRemoveAssociationsMixin<FcmgtProductLink, FcmgtProductLinkId>;
  hasFcmgtProductLink!: Sequelize.HasManyHasAssociationMixin<FcmgtProductLink, FcmgtProductLinkId>;
  hasFcmgtProductLinks!: Sequelize.HasManyHasAssociationsMixin<FcmgtProductLink, FcmgtProductLinkId>;
  countFcmgtProductLinks!: Sequelize.HasManyCountAssociationsMixin;
  // FcmgtProduct hasMany FcmgtUtilizationA via carmProductCode
  fcmgtUtilizationAs!: FcmgtUtilizationA[];
  getFcmgtUtilizationAs!: Sequelize.HasManyGetAssociationsMixin<FcmgtUtilizationA>;
  setFcmgtUtilizationAs!: Sequelize.HasManySetAssociationsMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  addFcmgtUtilizationA!: Sequelize.HasManyAddAssociationMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  addFcmgtUtilizationAs!: Sequelize.HasManyAddAssociationsMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  createFcmgtUtilizationA!: Sequelize.HasManyCreateAssociationMixin<FcmgtUtilizationA>;
  removeFcmgtUtilizationA!: Sequelize.HasManyRemoveAssociationMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  removeFcmgtUtilizationAs!: Sequelize.HasManyRemoveAssociationsMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  hasFcmgtUtilizationA!: Sequelize.HasManyHasAssociationMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  hasFcmgtUtilizationAs!: Sequelize.HasManyHasAssociationsMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  countFcmgtUtilizationAs!: Sequelize.HasManyCountAssociationsMixin;
  // FcmgtProduct belongsToMany InvptyDet via carmProductCode and invptyCode
  invptyCodeInvptyDets!: InvptyDet[];
  getInvptyCodeInvptyDets!: Sequelize.BelongsToManyGetAssociationsMixin<InvptyDet>;
  setInvptyCodeInvptyDets!: Sequelize.BelongsToManySetAssociationsMixin<InvptyDet, InvptyDetId>;
  addInvptyCodeInvptyDet!: Sequelize.BelongsToManyAddAssociationMixin<InvptyDet, InvptyDetId>;
  addInvptyCodeInvptyDets!: Sequelize.BelongsToManyAddAssociationsMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToManyCreateAssociationMixin<InvptyDet>;
  removeInvptyCodeInvptyDet!: Sequelize.BelongsToManyRemoveAssociationMixin<InvptyDet, InvptyDetId>;
  removeInvptyCodeInvptyDets!: Sequelize.BelongsToManyRemoveAssociationsMixin<InvptyDet, InvptyDetId>;
  hasInvptyCodeInvptyDet!: Sequelize.BelongsToManyHasAssociationMixin<InvptyDet, InvptyDetId>;
  hasInvptyCodeInvptyDets!: Sequelize.BelongsToManyHasAssociationsMixin<InvptyDet, InvptyDetId>;
  countInvptyCodeInvptyDets!: Sequelize.BelongsToManyCountAssociationsMixin;
  // FcmgtProduct belongsToMany Product via carmProductCode and productCode
  productCodeProductFcmgtProductLinks!: Product[];
  getProductCodeProductFcmgtProductLinks!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductFcmgtProductLinks!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductFcmgtProductLink!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductFcmgtProductLinks!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductFcmgtProductLink!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductFcmgtProductLink!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductFcmgtProductLinks!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductFcmgtProductLink!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductFcmgtProductLinks!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductFcmgtProductLinks!: Sequelize.BelongsToManyCountAssociationsMixin;
  // FcmgtProduct belongsTo FcmgtProductGroup via carmProductFamilyId
  carmProductFamily!: FcmgtProductGroup;
  getCarmProductFamily!: Sequelize.BelongsToGetAssociationMixin<FcmgtProductGroup>;
  setCarmProductFamily!: Sequelize.BelongsToSetAssociationMixin<FcmgtProductGroup, FcmgtProductGroupId>;
  createCarmProductFamily!: Sequelize.BelongsToCreateAssociationMixin<FcmgtProductGroup>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FcmgtProduct {
    return FcmgtProduct.init({
    carmProductCode: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'carm_product_code'
    },
    carmProductDesc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'carm_product_desc'
    },
    carmProductFamilyId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'fcmgt_product_group',
        key: 'carm_product_family_id'
      },
      field: 'carm_product_family_id'
    }
  }, {
    sequelize,
    tableName: 'fcmgt_product',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-FCMGT_PRODUCT",
        unique: true,
        fields: [
          { name: "carm_product_code" },
        ]
      },
    ]
  });
  }
}
