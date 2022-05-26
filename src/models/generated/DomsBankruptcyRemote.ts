import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsBankruptcyRemoteAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsBankruptcyRemotePk = "domain";
export type DomsBankruptcyRemoteId = DomsBankruptcyRemote[DomsBankruptcyRemotePk];
export type DomsBankruptcyRemoteCreationAttributes = DomsBankruptcyRemoteAttributes;

export class DomsBankruptcyRemote extends Model<DomsBankruptcyRemoteAttributes, DomsBankruptcyRemoteCreationAttributes> implements DomsBankruptcyRemoteAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsBankruptcyRemote {
    return DomsBankruptcyRemote.init({
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
    tableName: 'doms_bankruptcy_remote',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_bankruptcy_remote_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_domsbankruptcyremote",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
