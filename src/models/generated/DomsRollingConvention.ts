import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsRollingConventionAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsRollingConventionPk = "domain";
export type DomsRollingConventionId = DomsRollingConvention[DomsRollingConventionPk];
export type DomsRollingConventionCreationAttributes = DomsRollingConventionAttributes;

export class DomsRollingConvention extends Model<DomsRollingConventionAttributes, DomsRollingConventionCreationAttributes> implements DomsRollingConventionAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsRollingConvention {
    return DomsRollingConvention.init({
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
    tableName: 'doms_rolling_convention',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_rolling_convention_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_rolling_convention",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
