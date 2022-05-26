import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';
import type { GenldgGaapCode, GenldgGaapCodeId } from './GenldgGaapCode';
import type { GenldgGrcaPlan, GenldgGrcaPlanId } from './GenldgGrcaPlan';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';

export interface GenldgGlbsPosAttributes {
  referenceDate: string;
  sourceSystem: string;
  companyCode: string;
  costCentre: string;
  glGaapCode: string;
  glAccountCode: string;
  glFunctionalCcy: string;
  glValue?: number;
  glReportCcy: string;
  glRegAccountCode?: string;
  grcaCodePrimary?: string;
  grcaCodeAverage?: string;
  grcaValue?: number;
}

export type GenldgGlbsPosPk = "referenceDate" | "sourceSystem" | "companyCode" | "costCentre" | "glGaapCode" | "glAccountCode";
export type GenldgGlbsPosId = GenldgGlbsPos[GenldgGlbsPosPk];
export type GenldgGlbsPosOptionalAttributes = "glValue" | "glRegAccountCode" | "grcaCodePrimary" | "grcaCodeAverage" | "grcaValue";
export type GenldgGlbsPosCreationAttributes = Optional<GenldgGlbsPosAttributes, GenldgGlbsPosOptionalAttributes>;

export class GenldgGlbsPos extends Model<GenldgGlbsPosAttributes, GenldgGlbsPosCreationAttributes> implements GenldgGlbsPosAttributes {
  referenceDate!: string;
  sourceSystem!: string;
  companyCode!: string;
  costCentre!: string;
  glGaapCode!: string;
  glAccountCode!: string;
  glFunctionalCcy!: string;
  glValue?: number;
  glReportCcy!: string;
  glRegAccountCode?: string;
  grcaCodePrimary?: string;
  grcaCodeAverage?: string;
  grcaValue?: number;

  // GenldgGlbsPos belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // GenldgGlbsPos belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // GenldgGlbsPos belongsTo GenldgAccountPlan via glAccountCode
  glAccountCodeGenldgAccountPlan!: GenldgAccountPlan;
  getGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgAccountPlan>;
  // GenldgGlbsPos belongsTo GenldgGaapCode via glGaapCode
  glGaapCodeGenldgGaapCode!: GenldgGaapCode;
  getGlGaapCodeGenldgGaapCode!: Sequelize.BelongsToGetAssociationMixin<GenldgGaapCode>;
  setGlGaapCodeGenldgGaapCode!: Sequelize.BelongsToSetAssociationMixin<GenldgGaapCode, GenldgGaapCodeId>;
  createGlGaapCodeGenldgGaapCode!: Sequelize.BelongsToCreateAssociationMixin<GenldgGaapCode>;
  // GenldgGlbsPos belongsTo GenldgGrcaPlan via grcaCodePrimary
  grcaCodePrimaryGenldgGrcaPlan!: GenldgGrcaPlan;
  getGrcaCodePrimaryGenldgGrcaPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgGrcaPlan>;
  setGrcaCodePrimaryGenldgGrcaPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  createGrcaCodePrimaryGenldgGrcaPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgGrcaPlan>;
  // GenldgGlbsPos belongsTo GenldgGrcaPlan via grcaCodeAverage
  grcaCodeAverageGenldgGrcaPlan!: GenldgGrcaPlan;
  getGrcaCodeAverageGenldgGrcaPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgGrcaPlan>;
  setGrcaCodeAverageGenldgGrcaPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgGrcaPlan, GenldgGrcaPlanId>;
  createGrcaCodeAverageGenldgGrcaPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgGrcaPlan>;
  // GenldgGlbsPos belongsTo SysCurrency via glFunctionalCcy
  glFunctionalCcySysCurrency!: SysCurrency;
  getGlFunctionalCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setGlFunctionalCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createGlFunctionalCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // GenldgGlbsPos belongsTo SysCurrency via glReportCcy
  glReportCcySysCurrency!: SysCurrency;
  getGlReportCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setGlReportCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createGlReportCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // GenldgGlbsPos belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;

  static initModel(sequelize: Sequelize.Sequelize): typeof GenldgGlbsPos {
    return GenldgGlbsPos.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_external_system',
        key: 'source_system'
      },
      field: 'source_system'
    },
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'company_code'
    },
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'cost_centre'
    },
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
    glFunctionalCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'gl_functional_ccy'
    },
    glValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'gl_value'
    },
    glReportCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'gl_report_ccy'
    },
    glRegAccountCode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'gl_reg_account_code'
    },
    grcaCodePrimary: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'genldg_grca_plan',
        key: 'grca_code'
      },
      field: 'grca_code_primary'
    },
    grcaCodeAverage: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'genldg_grca_plan',
        key: 'grca_code'
      },
      field: 'grca_code_average'
    },
    grcaValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'grca_value'
    }
  }, {
    sequelize,
    tableName: 'genldg_glbs_pos',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-GENLDG_GLBS_POS",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "cost_centre" },
          { name: "gl_gaap_code" },
          { name: "gl_account_code" },
        ]
      },
      {
        name: "genldg_glbs_pos_cost_centre",
        fields: [
          { name: "cost_centre" },
        ]
      },
      {
        name: "genldg_glbs_pos_gl_gaap_code",
        fields: [
          { name: "gl_gaap_code" },
        ]
      },
      {
        name: "genldg_glbs_pos_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
      {
        name: "genldg_glbs_pos_source_system",
        fields: [
          { name: "source_system" },
        ]
      },
    ]
  });
  }
}
