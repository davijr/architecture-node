import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { FcmgtBorrowingGroup, FcmgtBorrowingGroupId } from './FcmgtBorrowingGroup'
import type { FcmgtFacilityBg, FcmgtFacilityBgId } from './FcmgtFacilityBg'
import type { FcmgtFacilityInvpty, FcmgtFacilityInvptyId } from './FcmgtFacilityInvpty'
import type { FcmgtGroupFacilityLink, FcmgtGroupFacilityLinkId } from './FcmgtGroupFacilityLink'
import type { FcmgtProduct, FcmgtProductId } from './FcmgtProduct'
import type { FcmgtProductFacilityLink, FcmgtProductFacilityLinkId } from './FcmgtProductFacilityLink'
import type { FcmgtSubordFac } from './FcmgtSubordFac'

export interface FcmgtFacilityCodeAttributes {
  facilityCode: string;
}

export type FcmgtFacilityCodePk = 'facilityCode';
export type FcmgtFacilityCodeId = FcmgtFacilityCode[FcmgtFacilityCodePk];
export type FcmgtFacilityCodeCreationAttributes = FcmgtFacilityCodeAttributes;

export class FcmgtFacilityCode extends Model<FcmgtFacilityCodeAttributes, FcmgtFacilityCodeCreationAttributes> implements FcmgtFacilityCodeAttributes {
  facilityCode!: string;

  // FcmgtFacilityCode belongsToMany FcmgtBorrowingGroup via facilityCode and borrowingGroupId
  borrowingGroupIdFcmgtBorrowingGroups!: FcmgtBorrowingGroup[];
  getBorrowingGroupIdFcmgtBorrowingGroups!: Sequelize.BelongsToManyGetAssociationsMixin<FcmgtBorrowingGroup>;
  setBorrowingGroupIdFcmgtBorrowingGroups!: Sequelize.BelongsToManySetAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  addBorrowingGroupIdFcmgtBorrowingGroup!: Sequelize.BelongsToManyAddAssociationMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  addBorrowingGroupIdFcmgtBorrowingGroups!: Sequelize.BelongsToManyAddAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  createBorrowingGroupIdFcmgtBorrowingGroup!: Sequelize.BelongsToManyCreateAssociationMixin<FcmgtBorrowingGroup>;
  removeBorrowingGroupIdFcmgtBorrowingGroup!: Sequelize.BelongsToManyRemoveAssociationMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  removeBorrowingGroupIdFcmgtBorrowingGroups!: Sequelize.BelongsToManyRemoveAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  hasBorrowingGroupIdFcmgtBorrowingGroup!: Sequelize.BelongsToManyHasAssociationMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  hasBorrowingGroupIdFcmgtBorrowingGroups!: Sequelize.BelongsToManyHasAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  countBorrowingGroupIdFcmgtBorrowingGroups!: Sequelize.BelongsToManyCountAssociationsMixin;
  // FcmgtFacilityCode belongsToMany FcmgtBorrowingGroup via facilityCode and borrowingGroupId
  borrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLinks!: FcmgtBorrowingGroup[];
  getBorrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLinks!: Sequelize.BelongsToManyGetAssociationsMixin<FcmgtBorrowingGroup>;
  setBorrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLinks!: Sequelize.BelongsToManySetAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  addBorrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLink!: Sequelize.BelongsToManyAddAssociationMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  addBorrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLinks!: Sequelize.BelongsToManyAddAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  createBorrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLink!: Sequelize.BelongsToManyCreateAssociationMixin<FcmgtBorrowingGroup>;
  removeBorrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLink!: Sequelize.BelongsToManyRemoveAssociationMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  removeBorrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLinks!: Sequelize.BelongsToManyRemoveAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  hasBorrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLink!: Sequelize.BelongsToManyHasAssociationMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  hasBorrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLinks!: Sequelize.BelongsToManyHasAssociationsMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  countBorrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLinks!: Sequelize.BelongsToManyCountAssociationsMixin;
  // FcmgtFacilityCode hasMany FcmgtFacilityBg via facilityCode
  fcmgtFacilityBgs!: FcmgtFacilityBg[];
  getFcmgtFacilityBgs!: Sequelize.HasManyGetAssociationsMixin<FcmgtFacilityBg>;
  setFcmgtFacilityBgs!: Sequelize.HasManySetAssociationsMixin<FcmgtFacilityBg, FcmgtFacilityBgId>;
  addFcmgtFacilityBg!: Sequelize.HasManyAddAssociationMixin<FcmgtFacilityBg, FcmgtFacilityBgId>;
  addFcmgtFacilityBgs!: Sequelize.HasManyAddAssociationsMixin<FcmgtFacilityBg, FcmgtFacilityBgId>;
  createFcmgtFacilityBg!: Sequelize.HasManyCreateAssociationMixin<FcmgtFacilityBg>;
  removeFcmgtFacilityBg!: Sequelize.HasManyRemoveAssociationMixin<FcmgtFacilityBg, FcmgtFacilityBgId>;
  removeFcmgtFacilityBgs!: Sequelize.HasManyRemoveAssociationsMixin<FcmgtFacilityBg, FcmgtFacilityBgId>;
  hasFcmgtFacilityBg!: Sequelize.HasManyHasAssociationMixin<FcmgtFacilityBg, FcmgtFacilityBgId>;
  hasFcmgtFacilityBgs!: Sequelize.HasManyHasAssociationsMixin<FcmgtFacilityBg, FcmgtFacilityBgId>;
  countFcmgtFacilityBgs!: Sequelize.HasManyCountAssociationsMixin;
  // FcmgtFacilityCode hasMany FcmgtFacilityInvpty via facilityCode
  fcmgtFacilityInvpties!: FcmgtFacilityInvpty[];
  getFcmgtFacilityInvpties!: Sequelize.HasManyGetAssociationsMixin<FcmgtFacilityInvpty>;
  setFcmgtFacilityInvpties!: Sequelize.HasManySetAssociationsMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  addFcmgtFacilityInvpty!: Sequelize.HasManyAddAssociationMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  addFcmgtFacilityInvpties!: Sequelize.HasManyAddAssociationsMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  createFcmgtFacilityInvpty!: Sequelize.HasManyCreateAssociationMixin<FcmgtFacilityInvpty>;
  removeFcmgtFacilityInvpty!: Sequelize.HasManyRemoveAssociationMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  removeFcmgtFacilityInvpties!: Sequelize.HasManyRemoveAssociationsMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  hasFcmgtFacilityInvpty!: Sequelize.HasManyHasAssociationMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  hasFcmgtFacilityInvpties!: Sequelize.HasManyHasAssociationsMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  countFcmgtFacilityInvpties!: Sequelize.HasManyCountAssociationsMixin;
  // FcmgtFacilityCode hasMany FcmgtGroupFacilityLink via facilityCode
  fcmgtGroupFacilityLinks!: FcmgtGroupFacilityLink[];
  getFcmgtGroupFacilityLinks!: Sequelize.HasManyGetAssociationsMixin<FcmgtGroupFacilityLink>;
  setFcmgtGroupFacilityLinks!: Sequelize.HasManySetAssociationsMixin<FcmgtGroupFacilityLink, FcmgtGroupFacilityLinkId>;
  addFcmgtGroupFacilityLink!: Sequelize.HasManyAddAssociationMixin<FcmgtGroupFacilityLink, FcmgtGroupFacilityLinkId>;
  addFcmgtGroupFacilityLinks!: Sequelize.HasManyAddAssociationsMixin<FcmgtGroupFacilityLink, FcmgtGroupFacilityLinkId>;
  createFcmgtGroupFacilityLink!: Sequelize.HasManyCreateAssociationMixin<FcmgtGroupFacilityLink>;
  removeFcmgtGroupFacilityLink!: Sequelize.HasManyRemoveAssociationMixin<FcmgtGroupFacilityLink, FcmgtGroupFacilityLinkId>;
  removeFcmgtGroupFacilityLinks!: Sequelize.HasManyRemoveAssociationsMixin<FcmgtGroupFacilityLink, FcmgtGroupFacilityLinkId>;
  hasFcmgtGroupFacilityLink!: Sequelize.HasManyHasAssociationMixin<FcmgtGroupFacilityLink, FcmgtGroupFacilityLinkId>;
  hasFcmgtGroupFacilityLinks!: Sequelize.HasManyHasAssociationsMixin<FcmgtGroupFacilityLink, FcmgtGroupFacilityLinkId>;
  countFcmgtGroupFacilityLinks!: Sequelize.HasManyCountAssociationsMixin;
  // FcmgtFacilityCode belongsToMany FcmgtProduct via facilityCode and carmProductCode
  carmProductCodeFcmgtProducts!: FcmgtProduct[];
  getCarmProductCodeFcmgtProducts!: Sequelize.BelongsToManyGetAssociationsMixin<FcmgtProduct>;
  setCarmProductCodeFcmgtProducts!: Sequelize.BelongsToManySetAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  addCarmProductCodeFcmgtProduct!: Sequelize.BelongsToManyAddAssociationMixin<FcmgtProduct, FcmgtProductId>;
  addCarmProductCodeFcmgtProducts!: Sequelize.BelongsToManyAddAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  createCarmProductCodeFcmgtProduct!: Sequelize.BelongsToManyCreateAssociationMixin<FcmgtProduct>;
  removeCarmProductCodeFcmgtProduct!: Sequelize.BelongsToManyRemoveAssociationMixin<FcmgtProduct, FcmgtProductId>;
  removeCarmProductCodeFcmgtProducts!: Sequelize.BelongsToManyRemoveAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  hasCarmProductCodeFcmgtProduct!: Sequelize.BelongsToManyHasAssociationMixin<FcmgtProduct, FcmgtProductId>;
  hasCarmProductCodeFcmgtProducts!: Sequelize.BelongsToManyHasAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  countCarmProductCodeFcmgtProducts!: Sequelize.BelongsToManyCountAssociationsMixin;
  // FcmgtFacilityCode hasMany FcmgtProductFacilityLink via facilityCode
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
  // FcmgtFacilityCode hasMany FcmgtSubordFac via facilityCode
  fcmgtSubordFacs!: FcmgtSubordFac[];
  getFcmgtSubordFacs!: Sequelize.HasManyGetAssociationsMixin<FcmgtSubordFac>;
  countFcmgtSubordFacs!: Sequelize.HasManyCountAssociationsMixin;
  // FcmgtFacilityCode hasMany FcmgtSubordFac via subFacilityCode
  subFacilityCodeFcmgtSubordFacs!: FcmgtSubordFac[];
  getSubFacilityCodeFcmgtSubordFacs!: Sequelize.HasManyGetAssociationsMixin<FcmgtSubordFac>;
  countSubFacilityCodeFcmgtSubordFacs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel (sequelize: Sequelize.Sequelize): typeof FcmgtFacilityCode {
    return FcmgtFacilityCode.init({
      facilityCode: {
        type: DataTypes.STRING(40),
        allowNull: false,
        primaryKey: true,
        field: 'facility_code'
      }
    }, {
      sequelize,
      tableName: 'fcmgt_facility_code',
      schema: 'bzdf',
      timestamps: false,
      indexes: [
        {
          name: 'PK-FCMGT_FACILITY_CODE',
          unique: true,
          fields: [
            { name: 'facility_code' }
          ]
        }
      ]
    })
  }
}
