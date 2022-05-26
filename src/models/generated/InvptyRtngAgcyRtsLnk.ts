import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId } from './InvptyRtngAgcyRtsStr';

export interface InvptyRtngAgcyRtsLnkAttributes {
  rating1: number;
  rating2: number;
}

export type InvptyRtngAgcyRtsLnkPk = "rating1" | "rating2";
export type InvptyRtngAgcyRtsLnkId = InvptyRtngAgcyRtsLnk[InvptyRtngAgcyRtsLnkPk];
export type InvptyRtngAgcyRtsLnkCreationAttributes = InvptyRtngAgcyRtsLnkAttributes;

export class InvptyRtngAgcyRtsLnk extends Model<InvptyRtngAgcyRtsLnkAttributes, InvptyRtngAgcyRtsLnkCreationAttributes> implements InvptyRtngAgcyRtsLnkAttributes {
  rating1!: number;
  rating2!: number;

  // InvptyRtngAgcyRtsLnk belongsTo InvptyRtngAgcyRtsStr via rating1
  rating1InvptyRtngAgcyRtsStr!: InvptyRtngAgcyRtsStr;
  getRating1InvptyRtngAgcyRtsStr!: Sequelize.BelongsToGetAssociationMixin<InvptyRtngAgcyRtsStr>;
  setRating1InvptyRtngAgcyRtsStr!: Sequelize.BelongsToSetAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  createRating1InvptyRtngAgcyRtsStr!: Sequelize.BelongsToCreateAssociationMixin<InvptyRtngAgcyRtsStr>;
  // InvptyRtngAgcyRtsLnk belongsTo InvptyRtngAgcyRtsStr via rating2
  rating2InvptyRtngAgcyRtsStr!: InvptyRtngAgcyRtsStr;
  getRating2InvptyRtngAgcyRtsStr!: Sequelize.BelongsToGetAssociationMixin<InvptyRtngAgcyRtsStr>;
  setRating2InvptyRtngAgcyRtsStr!: Sequelize.BelongsToSetAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  createRating2InvptyRtngAgcyRtsStr!: Sequelize.BelongsToCreateAssociationMixin<InvptyRtngAgcyRtsStr>;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyRtngAgcyRtsLnk {
    return InvptyRtngAgcyRtsLnk.init({
    rating1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_rtng_agcy_rts_str',
        key: 'rating_id'
      },
      field: 'rating_1'
    },
    rating2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_rtng_agcy_rts_str',
        key: 'rating_id'
      },
      field: 'rating_2'
    }
  }, {
    sequelize,
    tableName: 'invpty_rtng_agcy_rts_lnk',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_RTNG_AGCY_RTS_LNK",
        unique: true,
        fields: [
          { name: "rating_1" },
          { name: "rating_2" },
        ]
      },
    ]
  });
  }
}
