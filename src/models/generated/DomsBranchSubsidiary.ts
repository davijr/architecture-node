import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsBranchSubsidiaryAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsBranchSubsidiaryPk = "domain";
export type DomsBranchSubsidiaryId = DomsBranchSubsidiary[DomsBranchSubsidiaryPk];
export type DomsBranchSubsidiaryCreationAttributes = DomsBranchSubsidiaryAttributes;

export class DomsBranchSubsidiary extends Model<DomsBranchSubsidiaryAttributes, DomsBranchSubsidiaryCreationAttributes> implements DomsBranchSubsidiaryAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsBranchSubsidiary {
    return DomsBranchSubsidiary.init({
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
    tableName: 'doms_branch_subsidiary',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_branch_subsidiary_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_domsbranchsubsidiary",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
