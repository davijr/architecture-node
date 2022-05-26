import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortThirdPartyLnk, PortThirdPartyLnkId } from './PortThirdPartyLnk';

export interface DomsParticipationLinkAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsParticipationLinkPk = "domain";
export type DomsParticipationLinkId = DomsParticipationLink[DomsParticipationLinkPk];
export type DomsParticipationLinkCreationAttributes = DomsParticipationLinkAttributes;

export class DomsParticipationLink extends Model<DomsParticipationLinkAttributes, DomsParticipationLinkCreationAttributes> implements DomsParticipationLinkAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsParticipationLink hasMany PortThirdPartyLnk via participationLink
  portThirdPartyLnks!: PortThirdPartyLnk[];
  getPortThirdPartyLnks!: Sequelize.HasManyGetAssociationsMixin<PortThirdPartyLnk>;
  setPortThirdPartyLnks!: Sequelize.HasManySetAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addPortThirdPartyLnk!: Sequelize.HasManyAddAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addPortThirdPartyLnks!: Sequelize.HasManyAddAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  createPortThirdPartyLnk!: Sequelize.HasManyCreateAssociationMixin<PortThirdPartyLnk>;
  removePortThirdPartyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  removePortThirdPartyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasPortThirdPartyLnk!: Sequelize.HasManyHasAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasPortThirdPartyLnks!: Sequelize.HasManyHasAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  countPortThirdPartyLnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsParticipationLink {
    return DomsParticipationLink.init({
    domain: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    domainDesc: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'domain_desc'
    }
  }, {
    sequelize,
    tableName: 'doms_participation_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "pk_doms_participation_link",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
