import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId } from './InvptyRtngAgcyRtsStr';

export interface InvptyRtngCrdAttributes {
  invptyCode: number;
  ratingId: number;
  ratingDate: string;
  agencyComment?: string;
}

export type InvptyRtngCrdPk = "invptyCode" | "ratingId" | "ratingDate";
export type InvptyRtngCrdId = InvptyRtngCrd[InvptyRtngCrdPk];
export type InvptyRtngCrdOptionalAttributes = "agencyComment";
export type InvptyRtngCrdCreationAttributes = Optional<InvptyRtngCrdAttributes, InvptyRtngCrdOptionalAttributes>;

export class InvptyRtngCrd extends Model<InvptyRtngCrdAttributes, InvptyRtngCrdCreationAttributes> implements InvptyRtngCrdAttributes {
  invptyCode!: number;
  ratingId!: number;
  ratingDate!: string;
  agencyComment?: string;

  // InvptyRtngCrd belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // InvptyRtngCrd belongsTo InvptyRtngAgcyRtsStr via ratingId
  rating!: InvptyRtngAgcyRtsStr;
  getRating!: Sequelize.BelongsToGetAssociationMixin<InvptyRtngAgcyRtsStr>;
  setRating!: Sequelize.BelongsToSetAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  createRating!: Sequelize.BelongsToCreateAssociationMixin<InvptyRtngAgcyRtsStr>;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyRtngCrd {
    return InvptyRtngCrd.init({
    invptyCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_code'
    },
    ratingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_rtng_agcy_rts_str',
        key: 'rating_id'
      },
      field: 'rating_id'
    },
    ratingDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'rating_date'
    },
    agencyComment: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'agency_comment'
    }
  }, {
    sequelize,
    tableName: 'invpty_rtng_crd',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_RTNG_CRD",
        unique: true,
        fields: [
          { name: "invpty_code" },
          { name: "rating_id" },
          { name: "rating_date" },
        ]
      },
    ]
  });
  }
}
