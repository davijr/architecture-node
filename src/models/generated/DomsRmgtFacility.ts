import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FcmgtBorrowingGroup, FcmgtBorrowingGroupId } from './FcmgtBorrowingGroup';
import type { ProductHsbcGrp, ProductHsbcGrpId } from './ProductHsbcGrp';

export interface DomsRmgtFacilityAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsRmgtFacilityPk = "domain";
export type DomsRmgtFacilityId = DomsRmgtFacility[DomsRmgtFacilityPk];
export type DomsRmgtFacilityCreationAttributes = DomsRmgtFacilityAttributes;

export class DomsRmgtFacility extends Model<DomsRmgtFacilityAttributes, DomsRmgtFacilityCreationAttributes> implements DomsRmgtFacilityAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsRmgtFacility hasMany FcmgtBorrowingGroup via limitType
  fcmgtBorrowingGroups!: FcmgtBorrowingGroup[];
  getFcmgtBorrowingGroups!: Sequelize.HasManyGetAssociationsMixin<FcmgtBorrowingGroup>;
  setFcmgtBorrowingGroups!: Sequelize.HasManySetAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  addFcmgtBorrowingGroup!: Sequelize.HasManyAddAssociationMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  addFcmgtBorrowingGroups!: Sequelize.HasManyAddAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  createFcmgtBorrowingGroup!: Sequelize.HasManyCreateAssociationMixin<FcmgtBorrowingGroup>;
  removeFcmgtBorrowingGroup!: Sequelize.HasManyRemoveAssociationMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  removeFcmgtBorrowingGroups!: Sequelize.HasManyRemoveAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  hasFcmgtBorrowingGroup!: Sequelize.HasManyHasAssociationMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  hasFcmgtBorrowingGroups!: Sequelize.HasManyHasAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  countFcmgtBorrowingGroups!: Sequelize.HasManyCountAssociationsMixin;
  // DomsRmgtFacility hasMany ProductHsbcGrp via catAB
  productHsbcGrps!: ProductHsbcGrp[];
  getProductHsbcGrps!: Sequelize.HasManyGetAssociationsMixin<ProductHsbcGrp>;
  setProductHsbcGrps!: Sequelize.HasManySetAssociationsMixin<ProductHsbcGrp, ProductHsbcGrpId>;
  addProductHsbcGrp!: Sequelize.HasManyAddAssociationMixin<ProductHsbcGrp, ProductHsbcGrpId>;
  addProductHsbcGrps!: Sequelize.HasManyAddAssociationsMixin<ProductHsbcGrp, ProductHsbcGrpId>;
  createProductHsbcGrp!: Sequelize.HasManyCreateAssociationMixin<ProductHsbcGrp>;
  removeProductHsbcGrp!: Sequelize.HasManyRemoveAssociationMixin<ProductHsbcGrp, ProductHsbcGrpId>;
  removeProductHsbcGrps!: Sequelize.HasManyRemoveAssociationsMixin<ProductHsbcGrp, ProductHsbcGrpId>;
  hasProductHsbcGrp!: Sequelize.HasManyHasAssociationMixin<ProductHsbcGrp, ProductHsbcGrpId>;
  hasProductHsbcGrps!: Sequelize.HasManyHasAssociationsMixin<ProductHsbcGrp, ProductHsbcGrpId>;
  countProductHsbcGrps!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsRmgtFacility {
    return DomsRmgtFacility.init({
    domain: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    domainDesc: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'domain_desc'
    }
  }, {
    sequelize,
    tableName: 'doms_rmgt_facility',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-DOMS_RMGT_FACILITY",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
