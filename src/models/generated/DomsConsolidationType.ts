import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';

export interface DomsConsolidationTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsConsolidationTypePk = "domain";
export type DomsConsolidationTypeId = DomsConsolidationType[DomsConsolidationTypePk];
export type DomsConsolidationTypeCreationAttributes = DomsConsolidationTypeAttributes;

export class DomsConsolidationType extends Model<DomsConsolidationTypeAttributes, DomsConsolidationTypeCreationAttributes> implements DomsConsolidationTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsConsolidationType hasMany CompanyCostCentre via costCentreType
  companyCostCentres!: CompanyCostCentre[];
  getCompanyCostCentres!: Sequelize.HasManyGetAssociationsMixin<CompanyCostCentre>;
  setCompanyCostCentres!: Sequelize.HasManySetAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  addCompanyCostCentre!: Sequelize.HasManyAddAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  addCompanyCostCentres!: Sequelize.HasManyAddAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCostCentre!: Sequelize.HasManyCreateAssociationMixin<CompanyCostCentre>;
  removeCompanyCostCentre!: Sequelize.HasManyRemoveAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  removeCompanyCostCentres!: Sequelize.HasManyRemoveAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  hasCompanyCostCentre!: Sequelize.HasManyHasAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  hasCompanyCostCentres!: Sequelize.HasManyHasAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  countCompanyCostCentres!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsConsolidationType {
    return DomsConsolidationType.init({
    domain: {
      type: DataTypes.STRING(1),
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
    tableName: 'doms_consolidation_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_consolidation_type_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_consolidation_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
