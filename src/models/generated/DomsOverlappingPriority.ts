import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsOverlappingPriorityAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsOverlappingPriorityPk = "domain";
export type DomsOverlappingPriorityId = DomsOverlappingPriority[DomsOverlappingPriorityPk];
export type DomsOverlappingPriorityCreationAttributes = DomsOverlappingPriorityAttributes;

export class DomsOverlappingPriority extends Model<DomsOverlappingPriorityAttributes, DomsOverlappingPriorityCreationAttributes> implements DomsOverlappingPriorityAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsOverlappingPriority {
    return DomsOverlappingPriority.init({
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
    tableName: 'doms_overlapping_priority',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_overlapping_priority_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_overlapping_priority",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
