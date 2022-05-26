import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyLink, InvptyLinkId } from './InvptyLink';

export interface InvptyLinkTypeAttributes {
  linkType: string;
  linkTypeDescription?: string;
}

export type InvptyLinkTypePk = "linkType";
export type InvptyLinkTypeId = InvptyLinkType[InvptyLinkTypePk];
export type InvptyLinkTypeOptionalAttributes = "linkTypeDescription";
export type InvptyLinkTypeCreationAttributes = Optional<InvptyLinkTypeAttributes, InvptyLinkTypeOptionalAttributes>;

export class InvptyLinkType extends Model<InvptyLinkTypeAttributes, InvptyLinkTypeCreationAttributes> implements InvptyLinkTypeAttributes {
  linkType!: string;
  linkTypeDescription?: string;

  // InvptyLinkType hasMany InvptyLink via linkType
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

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyLinkType {
    return InvptyLinkType.init({
    linkType: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true,
      field: 'link_type'
    },
    linkTypeDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'link_type_description'
    }
  }, {
    sequelize,
    tableName: 'invpty_link_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_LINK_TYPE",
        unique: true,
        fields: [
          { name: "link_type" },
        ]
      },
    ]
  });
  }
}
