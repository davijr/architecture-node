import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FcmgtProduct, FcmgtProductId } from './FcmgtProduct';

export interface FcmgtProductGroupAttributes {
  carmProductFamilyId: string;
  carmProductFamilyDesc?: string;
}

export type FcmgtProductGroupPk = "carmProductFamilyId";
export type FcmgtProductGroupId = FcmgtProductGroup[FcmgtProductGroupPk];
export type FcmgtProductGroupOptionalAttributes = "carmProductFamilyDesc";
export type FcmgtProductGroupCreationAttributes = Optional<FcmgtProductGroupAttributes, FcmgtProductGroupOptionalAttributes>;

export class FcmgtProductGroup extends Model<FcmgtProductGroupAttributes, FcmgtProductGroupCreationAttributes> implements FcmgtProductGroupAttributes {
  carmProductFamilyId!: string;
  carmProductFamilyDesc?: string;

  // FcmgtProductGroup hasMany FcmgtProduct via carmProductFamilyId
  fcmgtProducts!: FcmgtProduct[];
  getFcmgtProducts!: Sequelize.HasManyGetAssociationsMixin<FcmgtProduct>;
  setFcmgtProducts!: Sequelize.HasManySetAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  addFcmgtProduct!: Sequelize.HasManyAddAssociationMixin<FcmgtProduct, FcmgtProductId>;
  addFcmgtProducts!: Sequelize.HasManyAddAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  createFcmgtProduct!: Sequelize.HasManyCreateAssociationMixin<FcmgtProduct>;
  removeFcmgtProduct!: Sequelize.HasManyRemoveAssociationMixin<FcmgtProduct, FcmgtProductId>;
  removeFcmgtProducts!: Sequelize.HasManyRemoveAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  hasFcmgtProduct!: Sequelize.HasManyHasAssociationMixin<FcmgtProduct, FcmgtProductId>;
  hasFcmgtProducts!: Sequelize.HasManyHasAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  countFcmgtProducts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof FcmgtProductGroup {
    return FcmgtProductGroup.init({
    carmProductFamilyId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      field: 'carm_product_family_id'
    },
    carmProductFamilyDesc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'carm_product_family_desc'
    }
  }, {
    sequelize,
    tableName: 'fcmgt_product_group',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-FCMGT_PRODUCT_GROUP",
        unique: true,
        fields: [
          { name: "carm_product_family_id" },
        ]
      },
    ]
  });
  }
}
