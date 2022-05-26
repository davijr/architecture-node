import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsRmgtFacility, DomsRmgtFacilityId } from './DomsRmgtFacility';
import type { FcmgtFacilityBg, FcmgtFacilityBgId } from './FcmgtFacilityBg';
import type { FcmgtFacilityCode, FcmgtFacilityCodeId } from './FcmgtFacilityCode';
import type { FcmgtGroupFacilityLink, FcmgtGroupFacilityLinkId } from './FcmgtGroupFacilityLink';

export interface FcmgtBorrowingGroupAttributes {
  borrowingGroupId: string;
  limitType: string;
}

export type FcmgtBorrowingGroupPk = "borrowingGroupId";
export type FcmgtBorrowingGroupId = FcmgtBorrowingGroup[FcmgtBorrowingGroupPk];
export type FcmgtBorrowingGroupCreationAttributes = FcmgtBorrowingGroupAttributes;

export class FcmgtBorrowingGroup extends Model<FcmgtBorrowingGroupAttributes, FcmgtBorrowingGroupCreationAttributes> implements FcmgtBorrowingGroupAttributes {
  borrowingGroupId!: string;
  limitType!: string;

  // FcmgtBorrowingGroup belongsTo DomsRmgtFacility via limitType
  limitTypeDomsRmgtFacility!: DomsRmgtFacility;
  getLimitTypeDomsRmgtFacility!: Sequelize.BelongsToGetAssociationMixin<DomsRmgtFacility>;
  setLimitTypeDomsRmgtFacility!: Sequelize.BelongsToSetAssociationMixin<DomsRmgtFacility, DomsRmgtFacilityId>;
  createLimitTypeDomsRmgtFacility!: Sequelize.BelongsToCreateAssociationMixin<DomsRmgtFacility>;
  // FcmgtBorrowingGroup hasMany FcmgtFacilityBg via borrowingGroupId
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
  // FcmgtBorrowingGroup belongsToMany FcmgtFacilityCode via borrowingGroupId and facilityCode
  facilityCodeFcmgtFacilityCodes!: FcmgtFacilityCode[];
  getFacilityCodeFcmgtFacilityCodes!: Sequelize.BelongsToManyGetAssociationsMixin<FcmgtFacilityCode>;
  setFacilityCodeFcmgtFacilityCodes!: Sequelize.BelongsToManySetAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  addFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToManyAddAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  addFacilityCodeFcmgtFacilityCodes!: Sequelize.BelongsToManyAddAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  createFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToManyCreateAssociationMixin<FcmgtFacilityCode>;
  removeFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToManyRemoveAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  removeFacilityCodeFcmgtFacilityCodes!: Sequelize.BelongsToManyRemoveAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  hasFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToManyHasAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  hasFacilityCodeFcmgtFacilityCodes!: Sequelize.BelongsToManyHasAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  countFacilityCodeFcmgtFacilityCodes!: Sequelize.BelongsToManyCountAssociationsMixin;
  // FcmgtBorrowingGroup belongsToMany FcmgtFacilityCode via borrowingGroupId and facilityCode
  facilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLinks!: FcmgtFacilityCode[];
  getFacilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLinks!: Sequelize.BelongsToManyGetAssociationsMixin<FcmgtFacilityCode>;
  setFacilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLinks!: Sequelize.BelongsToManySetAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  addFacilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLink!: Sequelize.BelongsToManyAddAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  addFacilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLinks!: Sequelize.BelongsToManyAddAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  createFacilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLink!: Sequelize.BelongsToManyCreateAssociationMixin<FcmgtFacilityCode>;
  removeFacilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLink!: Sequelize.BelongsToManyRemoveAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  removeFacilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLinks!: Sequelize.BelongsToManyRemoveAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  hasFacilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLink!: Sequelize.BelongsToManyHasAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  hasFacilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLinks!: Sequelize.BelongsToManyHasAssociationsMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  countFacilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLinks!: Sequelize.BelongsToManyCountAssociationsMixin;
  // FcmgtBorrowingGroup hasMany FcmgtGroupFacilityLink via borrowingGroupId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof FcmgtBorrowingGroup {
    return FcmgtBorrowingGroup.init({
    borrowingGroupId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true,
      field: 'borrowing_group_id'
    },
    limitType: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      references: {
        model: 'doms_rmgt_facility',
        key: 'domain'
      },
      field: 'limit_type'
    }
  }, {
    sequelize,
    tableName: 'fcmgt_borrowing_group',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-FCMGT_BORROWING_GROUP",
        unique: true,
        fields: [
          { name: "borrowing_group_id" },
        ]
      },
    ]
  });
  }
}
