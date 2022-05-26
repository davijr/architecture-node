import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsGlNature, DomsGlNatureId } from './DomsGlNature';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';

export interface GenldgBsJournalAttributes {
  referenceDate: string;
  glMovJournalId: number;
  sourceSystem: string;
  companyCode: string;
  costCentre: string;
  glGaapCode: string;
  glValue?: number;
  glReportCcy: string;
  glNature: string;
  glAccountCode: string;
  glMovDoct?: string;
  glMovDoctGrp?: string;
  glMovDescription?: string;
  glMovResponsibleUser?: string;
  recordDate?: string;
}

export type GenldgBsJournalPk = "referenceDate" | "glMovJournalId" | "sourceSystem" | "companyCode" | "costCentre" | "glGaapCode";
export type GenldgBsJournalId = GenldgBsJournal[GenldgBsJournalPk];
export type GenldgBsJournalOptionalAttributes = "glValue" | "glMovDoct" | "glMovDoctGrp" | "glMovDescription" | "glMovResponsibleUser" | "recordDate";
export type GenldgBsJournalCreationAttributes = Optional<GenldgBsJournalAttributes, GenldgBsJournalOptionalAttributes>;

export class GenldgBsJournal extends Model<GenldgBsJournalAttributes, GenldgBsJournalCreationAttributes> implements GenldgBsJournalAttributes {
  referenceDate!: string;
  glMovJournalId!: number;
  sourceSystem!: string;
  companyCode!: string;
  costCentre!: string;
  glGaapCode!: string;
  glValue?: number;
  glReportCcy!: string;
  glNature!: string;
  glAccountCode!: string;
  glMovDoct?: string;
  glMovDoctGrp?: string;
  glMovDescription?: string;
  glMovResponsibleUser?: string;
  recordDate?: string;

  // GenldgBsJournal belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // GenldgBsJournal belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // GenldgBsJournal belongsTo DomsGlNature via glNature
  glNatureDomsGlNature!: DomsGlNature;
  getGlNatureDomsGlNature!: Sequelize.BelongsToGetAssociationMixin<DomsGlNature>;
  setGlNatureDomsGlNature!: Sequelize.BelongsToSetAssociationMixin<DomsGlNature, DomsGlNatureId>;
  createGlNatureDomsGlNature!: Sequelize.BelongsToCreateAssociationMixin<DomsGlNature>;
  // GenldgBsJournal belongsTo GenldgAccountPlan via glAccountCode
  glAccountCodeGenldgAccountPlan!: GenldgAccountPlan;
  getGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgAccountPlan>;
  // GenldgBsJournal belongsTo SysCurrency via glReportCcy
  glReportCcySysCurrency!: SysCurrency;
  getGlReportCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setGlReportCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createGlReportCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // GenldgBsJournal belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;

  static initModel(sequelize: Sequelize.Sequelize): typeof GenldgBsJournal {
    return GenldgBsJournal.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    glMovJournalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'gl_mov_journal_id'
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
      field: 'gl_gaap_code'
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
    glNature: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'doms_gl_nature',
        key: 'domain'
      },
      field: 'gl_nature'
    },
    glAccountCode: {
      type: DataTypes.CHAR(19),
      allowNull: false,
      references: {
        model: 'genldg_account_plan',
        key: 'gl_account_code'
      },
      field: 'gl_account_code'
    },
    glMovDoct: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'gl_mov_doct'
    },
    glMovDoctGrp: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'gl_mov_doct_grp'
    },
    glMovDescription: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'gl_mov_description'
    },
    glMovResponsibleUser: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'gl_mov_responsible_user'
    },
    recordDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'record_date'
    }
  }, {
    sequelize,
    tableName: 'genldg_bs_journal',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-GENLDG_BS_JOURNAL",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "gl_mov_journal_id" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "cost_centre" },
          { name: "gl_gaap_code" },
        ]
      },
      {
        name: "genldg_bs_journal_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
