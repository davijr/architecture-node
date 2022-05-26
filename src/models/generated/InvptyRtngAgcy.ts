import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId } from './InvptyRtngAgcyRtsStr';

export interface InvptyRtngAgcyAttributes {
  agencyCode: string;
  agencyDescription?: string;
}

export type InvptyRtngAgcyPk = "agencyCode";
export type InvptyRtngAgcyId = InvptyRtngAgcy[InvptyRtngAgcyPk];
export type InvptyRtngAgcyOptionalAttributes = "agencyDescription";
export type InvptyRtngAgcyCreationAttributes = Optional<InvptyRtngAgcyAttributes, InvptyRtngAgcyOptionalAttributes>;

export class InvptyRtngAgcy extends Model<InvptyRtngAgcyAttributes, InvptyRtngAgcyCreationAttributes> implements InvptyRtngAgcyAttributes {
  agencyCode!: string;
  agencyDescription?: string;

  // InvptyRtngAgcy hasMany InvptyRtngAgcyRtsStr via agencyCode
  invptyRtngAgcyRtsStrs!: InvptyRtngAgcyRtsStr[];
  getInvptyRtngAgcyRtsStrs!: Sequelize.HasManyGetAssociationsMixin<InvptyRtngAgcyRtsStr>;
  setInvptyRtngAgcyRtsStrs!: Sequelize.HasManySetAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  addInvptyRtngAgcyRtsStr!: Sequelize.HasManyAddAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  addInvptyRtngAgcyRtsStrs!: Sequelize.HasManyAddAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  createInvptyRtngAgcyRtsStr!: Sequelize.HasManyCreateAssociationMixin<InvptyRtngAgcyRtsStr>;
  removeInvptyRtngAgcyRtsStr!: Sequelize.HasManyRemoveAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  removeInvptyRtngAgcyRtsStrs!: Sequelize.HasManyRemoveAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  hasInvptyRtngAgcyRtsStr!: Sequelize.HasManyHasAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  hasInvptyRtngAgcyRtsStrs!: Sequelize.HasManyHasAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  countInvptyRtngAgcyRtsStrs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyRtngAgcy {
    return InvptyRtngAgcy.init({
    agencyCode: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
      field: 'agency_code'
    },
    agencyDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'agency_description'
    }
  }, {
    sequelize,
    tableName: 'invpty_rtng_agcy',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_RTNG_AGCY",
        unique: true,
        fields: [
          { name: "agency_code" },
        ]
      },
    ]
  });
  }
}
