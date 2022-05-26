import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsGlNature, DomsGlNatureId } from './DomsGlNature';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';
import type { GenldgGaapCode, GenldgGaapCodeId } from './GenldgGaapCode';

export interface GenldgGaapPlanAttributes {
  glGaapCode: string;
  glGaapAccountCode: string;
  glAccountCode: string;
  glGaapAccountName?: string;
  glGroupCode?: string;
  glNature: string;
}

export type GenldgGaapPlanPk = "glGaapCode" | "glGaapAccountCode" | "glAccountCode";
export type GenldgGaapPlanId = GenldgGaapPlan[GenldgGaapPlanPk];
export type GenldgGaapPlanOptionalAttributes = "glGaapAccountName" | "glGroupCode";
export type GenldgGaapPlanCreationAttributes = Optional<GenldgGaapPlanAttributes, GenldgGaapPlanOptionalAttributes>;

export class GenldgGaapPlan extends Model<GenldgGaapPlanAttributes, GenldgGaapPlanCreationAttributes> implements GenldgGaapPlanAttributes {
  glGaapCode!: string;
  glGaapAccountCode!: string;
  glAccountCode!: string;
  glGaapAccountName?: string;
  glGroupCode?: string;
  glNature!: string;

  // GenldgGaapPlan belongsTo DomsGlNature via glNature
  glNatureDomsGlNature!: DomsGlNature;
  getGlNatureDomsGlNature!: Sequelize.BelongsToGetAssociationMixin<DomsGlNature>;
  setGlNatureDomsGlNature!: Sequelize.BelongsToSetAssociationMixin<DomsGlNature, DomsGlNatureId>;
  createGlNatureDomsGlNature!: Sequelize.BelongsToCreateAssociationMixin<DomsGlNature>;
  // GenldgGaapPlan belongsTo GenldgAccountPlan via glAccountCode
  glAccountCodeGenldgAccountPlan!: GenldgAccountPlan;
  getGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgAccountPlan>;
  // GenldgGaapPlan belongsTo GenldgGaapCode via glGaapCode
  glGaapCodeGenldgGaapCode!: GenldgGaapCode;
  getGlGaapCodeGenldgGaapCode!: Sequelize.BelongsToGetAssociationMixin<GenldgGaapCode>;
  setGlGaapCodeGenldgGaapCode!: Sequelize.BelongsToSetAssociationMixin<GenldgGaapCode, GenldgGaapCodeId>;
  createGlGaapCodeGenldgGaapCode!: Sequelize.BelongsToCreateAssociationMixin<GenldgGaapCode>;

  static initModel(sequelize: Sequelize.Sequelize): typeof GenldgGaapPlan {
    return GenldgGaapPlan.init({
    glGaapCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'genldg_gaap_code',
        key: 'gl_gaap_code'
      },
      field: 'gl_gaap_code'
    },
    glGaapAccountCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      field: 'gl_gaap_account_code'
    },
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
    glGaapAccountName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'gl_gaap_account_name'
    },
    glGroupCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'gl_group_code'
    },
    glNature: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'doms_gl_nature',
        key: 'domain'
      },
      field: 'gl_nature'
    }
  }, {
    sequelize,
    tableName: 'genldg_gaap_plan',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-GENLDG_GAAP_PLAN",
        unique: true,
        fields: [
          { name: "gl_gaap_code" },
          { name: "gl_gaap_account_code" },
          { name: "gl_account_code" },
        ]
      },
    ]
  });
  }
}
