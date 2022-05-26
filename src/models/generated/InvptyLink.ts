import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { InvptyLinkCodif, InvptyLinkCodifId } from './InvptyLinkCodif';
import type { InvptyLinkType, InvptyLinkTypeId } from './InvptyLinkType';

export interface InvptyLinkAttributes {
  invptyParentCode: number;
  invptyChildCode: number;
  linkTypeCodifier: string;
  linkType: string;
  linkDescription?: string;
  linkWeight: number;
}

export type InvptyLinkPk = "invptyParentCode" | "invptyChildCode" | "linkTypeCodifier";
export type InvptyLinkId = InvptyLink[InvptyLinkPk];
export type InvptyLinkOptionalAttributes = "linkDescription" | "linkWeight";
export type InvptyLinkCreationAttributes = Optional<InvptyLinkAttributes, InvptyLinkOptionalAttributes>;

export class InvptyLink extends Model<InvptyLinkAttributes, InvptyLinkCreationAttributes> implements InvptyLinkAttributes {
  invptyParentCode!: number;
  invptyChildCode!: number;
  linkTypeCodifier!: string;
  linkType!: string;
  linkDescription?: string;
  linkWeight!: number;

  // InvptyLink belongsTo InvptyDet via invptyChildCode
  invptyChildCodeInvptyDet!: InvptyDet;
  getInvptyChildCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyChildCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyChildCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // InvptyLink belongsTo InvptyDet via invptyParentCode
  invptyParentCodeInvptyDet!: InvptyDet;
  getInvptyParentCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyParentCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyParentCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // InvptyLink belongsTo InvptyLinkCodif via linkTypeCodifier
  linkTypeCodifierInvptyLinkCodif!: InvptyLinkCodif;
  getLinkTypeCodifierInvptyLinkCodif!: Sequelize.BelongsToGetAssociationMixin<InvptyLinkCodif>;
  setLinkTypeCodifierInvptyLinkCodif!: Sequelize.BelongsToSetAssociationMixin<InvptyLinkCodif, InvptyLinkCodifId>;
  createLinkTypeCodifierInvptyLinkCodif!: Sequelize.BelongsToCreateAssociationMixin<InvptyLinkCodif>;
  // InvptyLink belongsTo InvptyLinkType via linkType
  linkTypeInvptyLinkType!: InvptyLinkType;
  getLinkTypeInvptyLinkType!: Sequelize.BelongsToGetAssociationMixin<InvptyLinkType>;
  setLinkTypeInvptyLinkType!: Sequelize.BelongsToSetAssociationMixin<InvptyLinkType, InvptyLinkTypeId>;
  createLinkTypeInvptyLinkType!: Sequelize.BelongsToCreateAssociationMixin<InvptyLinkType>;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyLink {
    return InvptyLink.init({
    invptyParentCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_parent_code'
    },
    invptyChildCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_child_code'
    },
    linkTypeCodifier: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_link_codif',
        key: 'link_type_codifier'
      },
      field: 'link_type_codifier'
    },
    linkType: {
      type: DataTypes.STRING(7),
      allowNull: false,
      references: {
        model: 'invpty_link_type',
        key: 'link_type'
      },
      field: 'link_type'
    },
    linkDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'link_description'
    },
    linkWeight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 1,
      field: 'link_weight'
    }
  }, {
    sequelize,
    tableName: 'invpty_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_LINK",
        unique: true,
        fields: [
          { name: "invpty_parent_code" },
          { name: "invpty_child_code" },
          { name: "link_type_codifier" },
        ]
      },
    ]
  });
  }
}
