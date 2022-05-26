import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsTrueFalseAttributes {
  domain: boolean;
  domainDesc: string;
}

export type DomsTrueFalsePk = "domain";
export type DomsTrueFalseId = DomsTrueFalse[DomsTrueFalsePk];
export type DomsTrueFalseCreationAttributes = DomsTrueFalseAttributes;

export class DomsTrueFalse extends Model<DomsTrueFalseAttributes, DomsTrueFalseCreationAttributes> implements DomsTrueFalseAttributes {
  domain!: boolean;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsTrueFalse {
    return DomsTrueFalse.init({
    domain: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'doms_true_false',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "pk_doms_true_false",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
