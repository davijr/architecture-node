import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FcmgtFacilityCode, FcmgtFacilityCodeId } from './FcmgtFacilityCode';

export interface FcmgtSubordFacAttributes {
  facilityCode: string;
  subFacilityCode: string;
}

export type FcmgtSubordFacCreationAttributes = FcmgtSubordFacAttributes;

export class FcmgtSubordFac extends Model<FcmgtSubordFacAttributes, FcmgtSubordFacCreationAttributes> implements FcmgtSubordFacAttributes {
  facilityCode!: string;
  subFacilityCode!: string;

  // FcmgtSubordFac belongsTo FcmgtFacilityCode via facilityCode
  facilityCodeFcmgtFacilityCode!: FcmgtFacilityCode;
  getFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToGetAssociationMixin<FcmgtFacilityCode>;
  setFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToSetAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  createFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToCreateAssociationMixin<FcmgtFacilityCode>;
  // FcmgtSubordFac belongsTo FcmgtFacilityCode via subFacilityCode
  subFacilityCodeFcmgtFacilityCode!: FcmgtFacilityCode;
  getSubFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToGetAssociationMixin<FcmgtFacilityCode>;
  setSubFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToSetAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  createSubFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToCreateAssociationMixin<FcmgtFacilityCode>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FcmgtSubordFac {
    return FcmgtSubordFac.init({
    facilityCode: {
      type: DataTypes.STRING(40),
      allowNull: false,
      references: {
        model: 'fcmgt_facility_code',
        key: 'facility_code'
      },
      field: 'facility_code'
    },
    subFacilityCode: {
      type: DataTypes.STRING(40),
      allowNull: false,
      references: {
        model: 'fcmgt_facility_code',
        key: 'facility_code'
      },
      field: 'sub_facility_code'
    }
  }, {
    sequelize,
    tableName: 'fcmgt_subord_fac',
    schema: 'bzdf',
    timestamps: false
  });
  }
}
