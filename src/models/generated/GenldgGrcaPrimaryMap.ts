import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';
import type { GenldgGrcaPlan, GenldgGrcaPlanId } from './GenldgGrcaPlan';

export interface GenldgGrcaPrimaryMapAttributes {
  glAccountCode: string;
  grcaCodePrimary: string;
}

export type GenldgGrcaPrimaryMapPk = "glAccountCode" | "grcaCodePrimary";
export type GenldgGrcaPrimaryMapId = GenldgGrcaPrimaryMap[GenldgGrcaPrimaryMapPk];
export type GenldgGrcaPrimaryMapCreationAttributes = GenldgGrcaPrimaryMapAttributes;

export class GenldgGrcaPrimaryMap extends Model<GenldgGrcaPrimaryMapAttributes, GenldgGrcaPrimaryMapCreationAttributes> implements GenldgGrcaPrimaryMapAttributes {
  glAccountCode!: string;
  grcaCodePrimary!: string;

  // GenldgGrcaPrimaryMap belongsTo GenldgAccountPlan via glAccountCode
  glAccountCodeGenldgAccountPlan!: GenldgAccountPlan;
  getGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgAccountPlan>;
  // GenldgGrcaPrimaryMap belongsTo GenldgGrcaPlan via grcaCodePrimary
  grcaCodePrimaryGenldgGrcaPlan!: GenldgGrcaPlan;
  getGrcaCodePrimaryGenldgGrcaPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgGrcaPlan>;
  setGrcaCodePrimaryGenldgGrcaPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  createGrcaCodePrimaryGenldgGrcaPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgGrcaPlan>;

  static initModel(sequelize: Sequelize.Sequelize): typeof GenldgGrcaPrimaryMap {
    return GenldgGrcaPrimaryMap.init({
    glAccountCode: {
      type: DataTypes.CHAR(19),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'genldg_account_plan',
        key: 'gl_account_code'
      },
      field: 'gl_account_code'
    },
    grcaCodePrimary: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'genldg_grca_plan',
        key: 'grca_code'
      },
      field: 'grca_code_primary'
    }
  }, {
    sequelize,
    tableName: 'genldg_grca_primary_map',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK--GENLDG_GRCA_MAP",
        unique: true,
        fields: [
          { name: "gl_account_code" },
          { name: "grca_code_primary" },
        ]
      },
    ]
  });
  }
}
