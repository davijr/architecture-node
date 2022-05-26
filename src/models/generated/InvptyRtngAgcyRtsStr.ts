import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { InvptyRtngAgcy, InvptyRtngAgcyId } from './InvptyRtngAgcy';
import type { InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId } from './InvptyRtngAgcyRtsLnk';
import type { InvptyRtngCrd, InvptyRtngCrdId } from './InvptyRtngCrd';

export interface InvptyRtngAgcyRtsStrAttributes {
  rating: string;
  agencyCode: string;
  ratingDescription?: string;
  ratingId: number;
}

export type InvptyRtngAgcyRtsStrPk = "rating" | "agencyCode";
export type InvptyRtngAgcyRtsStrId = InvptyRtngAgcyRtsStr[InvptyRtngAgcyRtsStrPk];
export type InvptyRtngAgcyRtsStrOptionalAttributes = "ratingDescription";
export type InvptyRtngAgcyRtsStrCreationAttributes = Optional<InvptyRtngAgcyRtsStrAttributes, InvptyRtngAgcyRtsStrOptionalAttributes>;

export class InvptyRtngAgcyRtsStr extends Model<InvptyRtngAgcyRtsStrAttributes, InvptyRtngAgcyRtsStrCreationAttributes> implements InvptyRtngAgcyRtsStrAttributes {
  rating!: string;
  agencyCode!: string;
  ratingDescription?: string;
  ratingId!: number;

  // InvptyRtngAgcyRtsStr belongsTo InvptyRtngAgcy via agencyCode
  agencyCodeInvptyRtngAgcy!: InvptyRtngAgcy;
  getAgencyCodeInvptyRtngAgcy!: Sequelize.BelongsToGetAssociationMixin<InvptyRtngAgcy>;
  setAgencyCodeInvptyRtngAgcy!: Sequelize.BelongsToSetAssociationMixin<InvptyRtngAgcy, InvptyRtngAgcyId>;
  createAgencyCodeInvptyRtngAgcy!: Sequelize.BelongsToCreateAssociationMixin<InvptyRtngAgcy>;
  // InvptyRtngAgcyRtsStr belongsToMany InvptyDet via ratingId and invptyCode
  invptyCodeInvptyDetInvptyRtngCrds!: InvptyDet[];
  getInvptyCodeInvptyDetInvptyRtngCrds!: Sequelize.BelongsToManyGetAssociationsMixin<InvptyDet>;
  setInvptyCodeInvptyDetInvptyRtngCrds!: Sequelize.BelongsToManySetAssociationsMixin<InvptyDet, InvptyDetId>;
  addInvptyCodeInvptyDetInvptyRtngCrd!: Sequelize.BelongsToManyAddAssociationMixin<InvptyDet, InvptyDetId>;
  addInvptyCodeInvptyDetInvptyRtngCrds!: Sequelize.BelongsToManyAddAssociationsMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDetInvptyRtngCrd!: Sequelize.BelongsToManyCreateAssociationMixin<InvptyDet>;
  removeInvptyCodeInvptyDetInvptyRtngCrd!: Sequelize.BelongsToManyRemoveAssociationMixin<InvptyDet, InvptyDetId>;
  removeInvptyCodeInvptyDetInvptyRtngCrds!: Sequelize.BelongsToManyRemoveAssociationsMixin<InvptyDet, InvptyDetId>;
  hasInvptyCodeInvptyDetInvptyRtngCrd!: Sequelize.BelongsToManyHasAssociationMixin<InvptyDet, InvptyDetId>;
  hasInvptyCodeInvptyDetInvptyRtngCrds!: Sequelize.BelongsToManyHasAssociationsMixin<InvptyDet, InvptyDetId>;
  countInvptyCodeInvptyDetInvptyRtngCrds!: Sequelize.BelongsToManyCountAssociationsMixin;
  // InvptyRtngAgcyRtsStr hasMany InvptyRtngAgcyRtsLnk via rating1
  invptyRtngAgcyRtsLnks!: InvptyRtngAgcyRtsLnk[];
  getInvptyRtngAgcyRtsLnks!: Sequelize.HasManyGetAssociationsMixin<InvptyRtngAgcyRtsLnk>;
  setInvptyRtngAgcyRtsLnks!: Sequelize.HasManySetAssociationsMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  addInvptyRtngAgcyRtsLnk!: Sequelize.HasManyAddAssociationMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  addInvptyRtngAgcyRtsLnks!: Sequelize.HasManyAddAssociationsMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  createInvptyRtngAgcyRtsLnk!: Sequelize.HasManyCreateAssociationMixin<InvptyRtngAgcyRtsLnk>;
  removeInvptyRtngAgcyRtsLnk!: Sequelize.HasManyRemoveAssociationMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  removeInvptyRtngAgcyRtsLnks!: Sequelize.HasManyRemoveAssociationsMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  hasInvptyRtngAgcyRtsLnk!: Sequelize.HasManyHasAssociationMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  hasInvptyRtngAgcyRtsLnks!: Sequelize.HasManyHasAssociationsMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  countInvptyRtngAgcyRtsLnks!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyRtngAgcyRtsStr hasMany InvptyRtngAgcyRtsLnk via rating2
  rating2InvptyRtngAgcyRtsLnks!: InvptyRtngAgcyRtsLnk[];
  getRating2InvptyRtngAgcyRtsLnks!: Sequelize.HasManyGetAssociationsMixin<InvptyRtngAgcyRtsLnk>;
  setRating2InvptyRtngAgcyRtsLnks!: Sequelize.HasManySetAssociationsMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  addRating2InvptyRtngAgcyRtsLnk!: Sequelize.HasManyAddAssociationMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  addRating2InvptyRtngAgcyRtsLnks!: Sequelize.HasManyAddAssociationsMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  createRating2InvptyRtngAgcyRtsLnk!: Sequelize.HasManyCreateAssociationMixin<InvptyRtngAgcyRtsLnk>;
  removeRating2InvptyRtngAgcyRtsLnk!: Sequelize.HasManyRemoveAssociationMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  removeRating2InvptyRtngAgcyRtsLnks!: Sequelize.HasManyRemoveAssociationsMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  hasRating2InvptyRtngAgcyRtsLnk!: Sequelize.HasManyHasAssociationMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  hasRating2InvptyRtngAgcyRtsLnks!: Sequelize.HasManyHasAssociationsMixin<InvptyRtngAgcyRtsLnk, InvptyRtngAgcyRtsLnkId>;
  countRating2InvptyRtngAgcyRtsLnks!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyRtngAgcyRtsStr belongsToMany InvptyRtngAgcyRtsStr via rating1 and rating2
  rating2InvptyRtngAgcyRtsStrs!: InvptyRtngAgcyRtsStr[];
  getRating2InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyGetAssociationsMixin<InvptyRtngAgcyRtsStr>;
  setRating2InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManySetAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  addRating2InvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyAddAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  addRating2InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyAddAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  createRating2InvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyCreateAssociationMixin<InvptyRtngAgcyRtsStr>;
  removeRating2InvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyRemoveAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  removeRating2InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyRemoveAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  hasRating2InvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyHasAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  hasRating2InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyHasAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  countRating2InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // InvptyRtngAgcyRtsStr belongsToMany InvptyRtngAgcyRtsStr via rating2 and rating1
  rating1InvptyRtngAgcyRtsStrs!: InvptyRtngAgcyRtsStr[];
  getRating1InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyGetAssociationsMixin<InvptyRtngAgcyRtsStr>;
  setRating1InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManySetAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  addRating1InvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyAddAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  addRating1InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyAddAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  createRating1InvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyCreateAssociationMixin<InvptyRtngAgcyRtsStr>;
  removeRating1InvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyRemoveAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  removeRating1InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyRemoveAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  hasRating1InvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyHasAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  hasRating1InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyHasAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  countRating1InvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // InvptyRtngAgcyRtsStr hasMany InvptyRtngCrd via ratingId
  invptyRtngCrds!: InvptyRtngCrd[];
  getInvptyRtngCrds!: Sequelize.HasManyGetAssociationsMixin<InvptyRtngCrd>;
  setInvptyRtngCrds!: Sequelize.HasManySetAssociationsMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  addInvptyRtngCrd!: Sequelize.HasManyAddAssociationMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  addInvptyRtngCrds!: Sequelize.HasManyAddAssociationsMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  createInvptyRtngCrd!: Sequelize.HasManyCreateAssociationMixin<InvptyRtngCrd>;
  removeInvptyRtngCrd!: Sequelize.HasManyRemoveAssociationMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  removeInvptyRtngCrds!: Sequelize.HasManyRemoveAssociationsMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  hasInvptyRtngCrd!: Sequelize.HasManyHasAssociationMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  hasInvptyRtngCrds!: Sequelize.HasManyHasAssociationsMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  countInvptyRtngCrds!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyRtngAgcyRtsStr {
    return InvptyRtngAgcyRtsStr.init({
    rating: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    agencyCode: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_rtng_agcy',
        key: 'agency_code'
      },
      field: 'agency_code'
    },
    ratingDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'rating_description'
    },
    ratingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'rating_id'
    }
  }, {
    sequelize,
    tableName: 'invpty_rtng_agcy_rts_str',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-INVPTY_RTNG_AGCY_RTS_STR",
        unique: true,
        fields: [
          { name: "rating_id" },
        ]
      },
      {
        name: "PK-INVPTY_RTNG_AGCY_RTS_STR",
        unique: true,
        fields: [
          { name: "rating" },
          { name: "agency_code" },
        ]
      },
    ]
  });
  }
}
