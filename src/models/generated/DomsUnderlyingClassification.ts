import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsUnderlyingClassificationAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsUnderlyingClassificationPk = "domain";
export type DomsUnderlyingClassificationId = DomsUnderlyingClassification[DomsUnderlyingClassificationPk];
export type DomsUnderlyingClassificationCreationAttributes = DomsUnderlyingClassificationAttributes;

export class DomsUnderlyingClassification extends Model<DomsUnderlyingClassificationAttributes, DomsUnderlyingClassificationCreationAttributes> implements DomsUnderlyingClassificationAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsUnderlyingClassification {
    return DomsUnderlyingClassification.init({
    domain: {
      type: DataTypes.STRING(4),
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
    tableName: 'doms_underlying_classification',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_underlying_classification_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_underlying_classification",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
