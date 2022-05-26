import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';

export interface CompanyCostCentreLnkAttributes {
  costCentreParent: number;
  costCentreChild: number;
}

export type CompanyCostCentreLnkPk = "costCentreParent" | "costCentreChild";
export type CompanyCostCentreLnkId = CompanyCostCentreLnk[CompanyCostCentreLnkPk];
export type CompanyCostCentreLnkCreationAttributes = CompanyCostCentreLnkAttributes;

export class CompanyCostCentreLnk extends Model<CompanyCostCentreLnkAttributes, CompanyCostCentreLnkCreationAttributes> implements CompanyCostCentreLnkAttributes {
  costCentreParent!: number;
  costCentreChild!: number;

  // CompanyCostCentreLnk belongsTo CompanyCostCentre via costCentreChild
  costCentreChildCompanyCostCentre!: CompanyCostCentre;
  getCostCentreChildCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreChildCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreChildCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // CompanyCostCentreLnk belongsTo CompanyCostCentre via costCentreParent
  costCentreParentCompanyCostCentre!: CompanyCostCentre;
  getCostCentreParentCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreParentCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreParentCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CompanyCostCentreLnk {
    return CompanyCostCentreLnk.init({
    costCentreParent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre_lnk_id'
      },
      field: 'cost_centre_parent'
    },
    costCentreChild: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre_lnk_id'
      },
      field: 'cost_centre_child'
    }
  }, {
    sequelize,
    tableName: 'company_cost_centre_lnk',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-COMPANY_COST_CENTRE_LNK",
        unique: true,
        fields: [
          { name: "cost_centre_parent" },
          { name: "cost_centre_child" },
        ]
      },
    ]
  });
  }
}
