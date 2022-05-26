import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';
import type { GenldgGrcaPlan, GenldgGrcaPlanId } from './GenldgGrcaPlan';

export interface GenldgGrcaAverageMapAttributes {
  glAccountCode: string;
  grcaCodeAverage: string;
}

export type GenldgGrcaAverageMapPk = "glAccountCode" | "grcaCodeAverage";
export type GenldgGrcaAverageMapId = GenldgGrcaAverageMap[GenldgGrcaAverageMapPk];
export type GenldgGrcaAverageMapCreationAttributes = GenldgGrcaAverageMapAttributes;

export class GenldgGrcaAverageMap extends Model<GenldgGrcaAverageMapAttributes, GenldgGrcaAverageMapCreationAttributes> implements GenldgGrcaAverageMapAttributes {
  glAccountCode!: string;
  grcaCodeAverage!: string;

  // GenldgGrcaAverageMap belongsTo GenldgAccountPlan via glAccountCode
  glAccountCodeGenldgAccountPlan!: GenldgAccountPlan;
  getGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgAccountPlan>;
  // GenldgGrcaAverageMap belongsTo GenldgGrcaPlan via grcaCodeAverage
  grcaCodeAverageGenldgGrcaPlan!: GenldgGrcaPlan;
  getGrcaCodeAverageGenldgGrcaPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgGrcaPlan>;
  setGrcaCodeAverageGenldgGrcaPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  createGrcaCodeAverageGenldgGrcaPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgGrcaPlan>;

  static initModel(sequelize: Sequelize.Sequelize): typeof GenldgGrcaAverageMap {
    return GenldgGrcaAverageMap.init({
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
    grcaCodeAverage: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'genldg_grca_plan',
        key: 'grca_code'
      },
      field: 'grca_code_average'
    }
  }, {
    sequelize,
    tableName: 'genldg_grca_average_map',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK--GENLDG_GRCA_AVERAGE_MAP",
        unique: true,
        fields: [
          { name: "gl_account_code" },
          { name: "grca_code_average" },
        ]
      },
    ]
  });
  }
}
