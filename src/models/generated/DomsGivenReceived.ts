import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsGivenReceivedAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsGivenReceivedPk = "domain";
export type DomsGivenReceivedId = DomsGivenReceived[DomsGivenReceivedPk];
export type DomsGivenReceivedCreationAttributes = DomsGivenReceivedAttributes;

export class DomsGivenReceived extends Model<DomsGivenReceivedAttributes, DomsGivenReceivedCreationAttributes> implements DomsGivenReceivedAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsGivenReceived {
    return DomsGivenReceived.init({
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
    tableName: 'doms_given_received',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_given_received_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_given_received",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
