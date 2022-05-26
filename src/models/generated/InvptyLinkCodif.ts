import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyLink, InvptyLinkId } from './InvptyLink';

export interface InvptyLinkCodifAttributes {
  linkTypeCodifier: string;
  linkTypeCodifierDesc?: string;
}

export type InvptyLinkCodifPk = "linkTypeCodifier";
export type InvptyLinkCodifId = InvptyLinkCodif[InvptyLinkCodifPk];
export type InvptyLinkCodifOptionalAttributes = "linkTypeCodifierDesc";
export type InvptyLinkCodifCreationAttributes = Optional<InvptyLinkCodifAttributes, InvptyLinkCodifOptionalAttributes>;

export class InvptyLinkCodif extends Model<InvptyLinkCodifAttributes, InvptyLinkCodifCreationAttributes> implements InvptyLinkCodifAttributes {
  linkTypeCodifier!: string;
  linkTypeCodifierDesc?: string;

  // InvptyLinkCodif hasMany InvptyLink via linkTypeCodifier
  invptyLinks!: InvptyLink[];
  getInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<InvptyLink>;
  setInvptyLinks!: Sequelize.HasManySetAssociationsMixin<InvptyLink, InvptyLinkId>;
  addInvptyLink!: Sequelize.HasManyAddAssociationMixin<InvptyLink, InvptyLinkId>;
  addInvptyLinks!: Sequelize.HasManyAddAssociationsMixin<InvptyLink, InvptyLinkId>;
  createInvptyLink!: Sequelize.HasManyCreateAssociationMixin<InvptyLink>;
  removeInvptyLink!: Sequelize.HasManyRemoveAssociationMixin<InvptyLink, InvptyLinkId>;
  removeInvptyLinks!: Sequelize.HasManyRemoveAssociationsMixin<InvptyLink, InvptyLinkId>;
  hasInvptyLink!: Sequelize.HasManyHasAssociationMixin<InvptyLink, InvptyLinkId>;
  hasInvptyLinks!: Sequelize.HasManyHasAssociationsMixin<InvptyLink, InvptyLinkId>;
  countInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyLinkCodif {
    return InvptyLinkCodif.init({
    linkTypeCodifier: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
      field: 'link_type_codifier'
    },
    linkTypeCodifierDesc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'link_type_codifier_desc'
    }
  }, {
    sequelize,
    tableName: 'invpty_link_codif',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_LINK_CODIF",
        unique: true,
        fields: [
          { name: "link_type_codifier" },
        ]
      },
    ]
  });
  }
}
