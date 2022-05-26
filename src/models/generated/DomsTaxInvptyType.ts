import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsTaxInvptyTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsTaxInvptyTypePk = "domain";
export type DomsTaxInvptyTypeId = DomsTaxInvptyType[DomsTaxInvptyTypePk];
export type DomsTaxInvptyTypeCreationAttributes = DomsTaxInvptyTypeAttributes;

export class DomsTaxInvptyType extends Model<DomsTaxInvptyTypeAttributes, DomsTaxInvptyTypeCreationAttributes> implements DomsTaxInvptyTypeAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsTaxInvptyType {
    return DomsTaxInvptyType.init({
    domain: {
      type: DataTypes.STRING(2),
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
    tableName: 'doms_tax_invpty_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_tax_invpty_type_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_tax_invpty_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
