import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsStatementTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsStatementTypePk = "domain";
export type DomsStatementTypeId = DomsStatementType[DomsStatementTypePk];
export type DomsStatementTypeCreationAttributes = DomsStatementTypeAttributes;

export class DomsStatementType extends Model<DomsStatementTypeAttributes, DomsStatementTypeCreationAttributes> implements DomsStatementTypeAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsStatementType {
    return DomsStatementType.init({
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
    tableName: 'doms_statement_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_statement_type_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_statement_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
