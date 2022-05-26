import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FcmgtBorrowingGroup, FcmgtBorrowingGroupId } from './FcmgtBorrowingGroup';
import type { FcmgtFacilityCode, FcmgtFacilityCodeId } from './FcmgtFacilityCode';

export interface FcmgtGroupFacilityLinkAttributes {
  borrowingGroupId: string;
  facilityCode: string;
}

export type FcmgtGroupFacilityLinkPk = "borrowingGroupId" | "facilityCode";
export type FcmgtGroupFacilityLinkId = FcmgtGroupFacilityLink[FcmgtGroupFacilityLinkPk];
export type FcmgtGroupFacilityLinkOptionalAttributes = "facilityCode";
export type FcmgtGroupFacilityLinkCreationAttributes = Optional<FcmgtGroupFacilityLinkAttributes, FcmgtGroupFacilityLinkOptionalAttributes>;

export class FcmgtGroupFacilityLink extends Model<FcmgtGroupFacilityLinkAttributes, FcmgtGroupFacilityLinkCreationAttributes> implements FcmgtGroupFacilityLinkAttributes {
  borrowingGroupId!: string;
  facilityCode!: string;

  // FcmgtGroupFacilityLink belongsTo FcmgtBorrowingGroup via borrowingGroupId
  borrowingGroup!: FcmgtBorrowingGroup;
  getBorrowingGroup!: Sequelize.BelongsToGetAssociationMixin<FcmgtBorrowingGroup>;
  setBorrowingGroup!: Sequelize.BelongsToSetAssociationMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  createBorrowingGroup!: Sequelize.BelongsToCreateAssociationMixin<FcmgtBorrowingGroup>;
  // FcmgtGroupFacilityLink belongsTo FcmgtFacilityCode via facilityCode
  facilityCodeFcmgtFacilityCode!: FcmgtFacilityCode;
  getFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToGetAssociationMixin<FcmgtFacilityCode>;
  setFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToSetAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  createFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToCreateAssociationMixin<FcmgtFacilityCode>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FcmgtGroupFacilityLink {
    return FcmgtGroupFacilityLink.init({
    borrowingGroupId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fcmgt_borrowing_group',
        key: 'borrowing_group_id'
      },
      field: 'borrowing_group_id'
    },
    facilityCode: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "CARM",
      primaryKey: true,
      references: {
        model: 'fcmgt_facility_code',
        key: 'facility_code'
      },
      field: 'facility_code'
    }
  }, {
    sequelize,
    tableName: 'fcmgt_group_facility_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-FCMGT_GROUP_FACILITY_LINK",
        unique: true,
        fields: [
          { name: "borrowing_group_id" },
          { name: "facility_code" },
        ]
      },
    ]
  });
  }
}
