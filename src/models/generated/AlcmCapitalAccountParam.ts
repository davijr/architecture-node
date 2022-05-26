import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmDloTb03Cpad, AlcmDloTb03CpadId } from './AlcmDloTb03Cpad';
import type { AlcmDloTb03Limimob, AlcmDloTb03LimimobId } from './AlcmDloTb03Limimob';
import type { AlcmDloTb03Opad, AlcmDloTb03OpadId } from './AlcmDloTb03Opad';
import type { AlcmDloTb03Pr, AlcmDloTb03PrId } from './AlcmDloTb03Pr';
import type { AlcmDloTb03Ra, AlcmDloTb03RaId } from './AlcmDloTb03Ra';
import type { AlcmProductGroup, AlcmProductGroupId } from './AlcmProductGroup';
import type { DomsBalanceType, DomsBalanceTypeId } from './DomsBalanceType';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';

export interface AlcmCapitalAccountParamAttributes {
  glAccountCode: string;
  glMultiplier: number;
  dloAccountPr: string;
  dloAccountCpad: string;
  dloAccountOpad: string;
  dloAccountRa: string;
  dloAccountLimimob: string;
  alcmProductGroup: string;
  balanceType: string;
  dloReportable: boolean;
  recordInitialDate: string;
  recordEndDate?: string;
}

export type AlcmCapitalAccountParamPk = "glAccountCode";
export type AlcmCapitalAccountParamId = AlcmCapitalAccountParam[AlcmCapitalAccountParamPk];
export type AlcmCapitalAccountParamOptionalAttributes = "glMultiplier" | "dloAccountPr" | "dloAccountCpad" | "recordEndDate";
export type AlcmCapitalAccountParamCreationAttributes = Optional<AlcmCapitalAccountParamAttributes, AlcmCapitalAccountParamOptionalAttributes>;

export class AlcmCapitalAccountParam extends Model<AlcmCapitalAccountParamAttributes, AlcmCapitalAccountParamCreationAttributes> implements AlcmCapitalAccountParamAttributes {
  glAccountCode!: string;
  glMultiplier!: number;
  dloAccountPr!: string;
  dloAccountCpad!: string;
  dloAccountOpad!: string;
  dloAccountRa!: string;
  dloAccountLimimob!: string;
  alcmProductGroup!: string;
  balanceType!: string;
  dloReportable!: boolean;
  recordInitialDate!: string;
  recordEndDate?: string;

  // AlcmCapitalAccountParam belongsTo AlcmDloTb03Cpad via dloAccountCpad
  dloAccountCpadAlcmDloTb03Cpad!: AlcmDloTb03Cpad;
  getDloAccountCpadAlcmDloTb03Cpad!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb03Cpad>;
  setDloAccountCpadAlcmDloTb03Cpad!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  createDloAccountCpadAlcmDloTb03Cpad!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb03Cpad>;
  // AlcmCapitalAccountParam belongsTo AlcmDloTb03Limimob via dloAccountLimimob
  dloAccountLimimobAlcmDloTb03Limimob!: AlcmDloTb03Limimob;
  getDloAccountLimimobAlcmDloTb03Limimob!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb03Limimob>;
  setDloAccountLimimobAlcmDloTb03Limimob!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb03Limimob, AlcmDloTb03LimimobId>;
  createDloAccountLimimobAlcmDloTb03Limimob!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb03Limimob>;
  // AlcmCapitalAccountParam belongsTo AlcmDloTb03Opad via dloAccountOpad
  dloAccountOpadAlcmDloTb03Opad!: AlcmDloTb03Opad;
  getDloAccountOpadAlcmDloTb03Opad!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb03Opad>;
  setDloAccountOpadAlcmDloTb03Opad!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb03Opad, AlcmDloTb03OpadId>;
  createDloAccountOpadAlcmDloTb03Opad!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb03Opad>;
  // AlcmCapitalAccountParam belongsTo AlcmDloTb03Pr via dloAccountPr
  dloAccountPrAlcmDloTb03Pr!: AlcmDloTb03Pr;
  getDloAccountPrAlcmDloTb03Pr!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb03Pr>;
  setDloAccountPrAlcmDloTb03Pr!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb03Pr, AlcmDloTb03PrId>;
  createDloAccountPrAlcmDloTb03Pr!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb03Pr>;
  // AlcmCapitalAccountParam belongsTo AlcmDloTb03Ra via dloAccountRa
  dloAccountRaAlcmDloTb03Ra!: AlcmDloTb03Ra;
  getDloAccountRaAlcmDloTb03Ra!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb03Ra>;
  setDloAccountRaAlcmDloTb03Ra!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb03Ra, AlcmDloTb03RaId>;
  createDloAccountRaAlcmDloTb03Ra!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb03Ra>;
  // AlcmCapitalAccountParam belongsTo AlcmProductGroup via alcmProductGroup
  alcmProductGroupAlcmProductGroup!: AlcmProductGroup;
  getAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToGetAssociationMixin<AlcmProductGroup>;
  setAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToSetAssociationMixin<AlcmProductGroup, AlcmProductGroupId>;
  createAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToCreateAssociationMixin<AlcmProductGroup>;
  // AlcmCapitalAccountParam belongsTo DomsBalanceType via balanceType
  balanceTypeDomsBalanceType!: DomsBalanceType;
  getBalanceTypeDomsBalanceType!: Sequelize.BelongsToGetAssociationMixin<DomsBalanceType>;
  setBalanceTypeDomsBalanceType!: Sequelize.BelongsToSetAssociationMixin<DomsBalanceType, DomsBalanceTypeId>;
  createBalanceTypeDomsBalanceType!: Sequelize.BelongsToCreateAssociationMixin<DomsBalanceType>;
  // AlcmCapitalAccountParam belongsTo GenldgAccountPlan via glAccountCode
  glAccountCodeGenldgAccountPlan!: GenldgAccountPlan;
  getGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgAccountPlan>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmCapitalAccountParam {
    return AlcmCapitalAccountParam.init({
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
    glMultiplier: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1,
      field: 'gl_multiplier'
    },
    dloAccountPr: {
      type: DataTypes.STRING(18),
      allowNull: false,
      defaultValue: "NA",
      references: {
        model: 'alcm_dlo_tb03_pr',
        key: 'dlo_account'
      },
      field: 'dlo_account_pr'
    },
    dloAccountCpad: {
      type: DataTypes.STRING(18),
      allowNull: false,
      defaultValue: "NA",
      references: {
        model: 'alcm_dlo_tb03_cpad',
        key: 'dlo_account'
      },
      field: 'dlo_account_cpad'
    },
    dloAccountOpad: {
      type: DataTypes.STRING(18),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb03_opad',
        key: 'dlo_account'
      },
      field: 'dlo_account_opad'
    },
    dloAccountRa: {
      type: DataTypes.STRING(18),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb03_ra',
        key: 'dlo_account'
      },
      field: 'dlo_account_ra'
    },
    dloAccountLimimob: {
      type: DataTypes.STRING(18),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb03_limimob',
        key: 'dlo_account'
      },
      field: 'dlo_account_limimob'
    },
    alcmProductGroup: {
      type: DataTypes.STRING(40),
      allowNull: false,
      references: {
        model: 'alcm_product_group',
        key: 'alcm_product_group'
      },
      field: 'alcm_product_group'
    },
    balanceType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_balance_type',
        key: 'domain'
      },
      field: 'balance_type'
    },
    dloReportable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'dlo_reportable'
    },
    recordInitialDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'record_initial_date'
    },
    recordEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'record_end_date'
    }
  }, {
    sequelize,
    tableName: 'alcm_capital_account_param',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_CAPITAL_ACCOUNT_PARAM",
        unique: true,
        fields: [
          { name: "gl_account_code" },
        ]
      },
    ]
  });
  }
}
