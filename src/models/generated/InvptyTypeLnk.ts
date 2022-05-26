import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { InvptyType, InvptyTypeId } from './InvptyType';
import type { InvptyTypeCodif, InvptyTypeCodifId } from './InvptyTypeCodif';

export interface InvptyTypeLnkAttributes {
  invptyCode: number;
  invptyTypeCodifier: string;
  invptyType: string;
}

export type InvptyTypeLnkPk = "invptyCode" | "invptyTypeCodifier";
export type InvptyTypeLnkId = InvptyTypeLnk[InvptyTypeLnkPk];
export type InvptyTypeLnkCreationAttributes = InvptyTypeLnkAttributes;

export class InvptyTypeLnk extends Model<InvptyTypeLnkAttributes, InvptyTypeLnkCreationAttributes> implements InvptyTypeLnkAttributes {
  invptyCode!: number;
  invptyTypeCodifier!: string;
  invptyType!: string;

  // InvptyTypeLnk belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // InvptyTypeLnk belongsTo InvptyType via invptyType
  invptyTypeInvptyType!: InvptyType;
  getInvptyTypeInvptyType!: Sequelize.BelongsToGetAssociationMixin<InvptyType>;
  setInvptyTypeInvptyType!: Sequelize.BelongsToSetAssociationMixin<InvptyType, InvptyTypeId>;
  createInvptyTypeInvptyType!: Sequelize.BelongsToCreateAssociationMixin<InvptyType>;
  // InvptyTypeLnk belongsTo InvptyTypeCodif via invptyTypeCodifier
  invptyTypeCodifierInvptyTypeCodif!: InvptyTypeCodif;
  getInvptyTypeCodifierInvptyTypeCodif!: Sequelize.BelongsToGetAssociationMixin<InvptyTypeCodif>;
  setInvptyTypeCodifierInvptyTypeCodif!: Sequelize.BelongsToSetAssociationMixin<InvptyTypeCodif, InvptyTypeCodifId>;
  createInvptyTypeCodifierInvptyTypeCodif!: Sequelize.BelongsToCreateAssociationMixin<InvptyTypeCodif>;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyTypeLnk {
    return InvptyTypeLnk.init({
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
    invptyTypeCodifier: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_type_codif',
        key: 'invpty_type_codifier'
      },
      field: 'invpty_type_codifier'
    },
    invptyType: {
      type: DataTypes.STRING(12),
      allowNull: false,
      references: {
        model: 'invpty_type',
        key: 'invpty_type'
      },
      field: 'invpty_type'
    }
  }, {
    sequelize,
    tableName: 'invpty_type_lnk',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_TYPE_LNK",
        unique: true,
        fields: [
          { name: "invpty_code" },
          { name: "invpty_type_codifier" },
        ]
      },
    ]
  });
  }
}
