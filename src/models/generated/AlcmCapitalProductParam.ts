import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmDloTb03Cpad, AlcmDloTb03CpadId } from './AlcmDloTb03Cpad';
import type { AlcmDloTb12, AlcmDloTb12Id } from './AlcmDloTb12';
import type { AlcmDloTb24, AlcmDloTb24Id } from './AlcmDloTb24';
import type { AlcmProductGroup, AlcmProductGroupId } from './AlcmProductGroup';
import type { Product, ProductId } from './Product';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface AlcmCapitalProductParamAttributes {
  sourceTable: string;
  productCode: string;
  underlyingRecCode: string;
  underlyingPayCode: string;
  alcmProductGroup: string;
  dloAccountOutstanding: string;
  dloAccountMtm: string;
  dloAccountOffbal: string;
  dloAccountElim: string;
  dloReconcOutstanding: string;
  dloReconcMtm: string;
  dloReconcOffbal: string;
  dloReconcElim: string;
  dloCpadCcr: boolean;
  dloCpadUndlyAsset: boolean;
  dloCpadForClient: boolean;
  dloCpadOtherRisk: boolean;
  dloCpadCft1: string;
  dloCpadCft2: string;
  dloCpadCft3: string;
  recordInitialDate: string;
  recordEndDate?: string;
}

export type AlcmCapitalProductParamPk = "sourceTable" | "productCode" | "underlyingRecCode" | "underlyingPayCode";
export type AlcmCapitalProductParamId = AlcmCapitalProductParam[AlcmCapitalProductParamPk];
export type AlcmCapitalProductParamOptionalAttributes = "dloCpadCft1" | "dloCpadCft2" | "dloCpadCft3" | "recordEndDate";
export type AlcmCapitalProductParamCreationAttributes = Optional<AlcmCapitalProductParamAttributes, AlcmCapitalProductParamOptionalAttributes>;

export class AlcmCapitalProductParam extends Model<AlcmCapitalProductParamAttributes, AlcmCapitalProductParamCreationAttributes> implements AlcmCapitalProductParamAttributes {
  sourceTable!: string;
  productCode!: string;
  underlyingRecCode!: string;
  underlyingPayCode!: string;
  alcmProductGroup!: string;
  dloAccountOutstanding!: string;
  dloAccountMtm!: string;
  dloAccountOffbal!: string;
  dloAccountElim!: string;
  dloReconcOutstanding!: string;
  dloReconcMtm!: string;
  dloReconcOffbal!: string;
  dloReconcElim!: string;
  dloCpadCcr!: boolean;
  dloCpadUndlyAsset!: boolean;
  dloCpadForClient!: boolean;
  dloCpadOtherRisk!: boolean;
  dloCpadCft1!: string;
  dloCpadCft2!: string;
  dloCpadCft3!: string;
  recordInitialDate!: string;
  recordEndDate?: string;

  // AlcmCapitalProductParam belongsTo AlcmDloTb03Cpad via dloAccountMtm
  dloAccountMtmAlcmDloTb03Cpad!: AlcmDloTb03Cpad;
  getDloAccountMtmAlcmDloTb03Cpad!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb03Cpad>;
  setDloAccountMtmAlcmDloTb03Cpad!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  createDloAccountMtmAlcmDloTb03Cpad!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb03Cpad>;
  // AlcmCapitalProductParam belongsTo AlcmDloTb03Cpad via dloAccountOffbal
  dloAccountOffbalAlcmDloTb03Cpad!: AlcmDloTb03Cpad;
  getDloAccountOffbalAlcmDloTb03Cpad!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb03Cpad>;
  setDloAccountOffbalAlcmDloTb03Cpad!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  createDloAccountOffbalAlcmDloTb03Cpad!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb03Cpad>;
  // AlcmCapitalProductParam belongsTo AlcmDloTb03Cpad via dloAccountOutstanding
  dloAccountOutstandingAlcmDloTb03Cpad!: AlcmDloTb03Cpad;
  getDloAccountOutstandingAlcmDloTb03Cpad!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb03Cpad>;
  setDloAccountOutstandingAlcmDloTb03Cpad!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  createDloAccountOutstandingAlcmDloTb03Cpad!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb03Cpad>;
  // AlcmCapitalProductParam belongsTo AlcmDloTb03Cpad via dloAccountElim
  dloAccountElimAlcmDloTb03Cpad!: AlcmDloTb03Cpad;
  getDloAccountElimAlcmDloTb03Cpad!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb03Cpad>;
  setDloAccountElimAlcmDloTb03Cpad!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  createDloAccountElimAlcmDloTb03Cpad!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb03Cpad>;
  // AlcmCapitalProductParam belongsTo AlcmDloTb12 via dloCpadCft1
  dloCpadCft1AlcmDloTb12!: AlcmDloTb12;
  getDloCpadCft1AlcmDloTb12!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb12>;
  setDloCpadCft1AlcmDloTb12!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb12, AlcmDloTb12Id>;
  createDloCpadCft1AlcmDloTb12!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb12>;
  // AlcmCapitalProductParam belongsTo AlcmDloTb12 via dloCpadCft2
  dloCpadCft2AlcmDloTb12!: AlcmDloTb12;
  getDloCpadCft2AlcmDloTb12!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb12>;
  setDloCpadCft2AlcmDloTb12!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb12, AlcmDloTb12Id>;
  createDloCpadCft2AlcmDloTb12!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb12>;
  // AlcmCapitalProductParam belongsTo AlcmDloTb12 via dloCpadCft3
  dloCpadCft3AlcmDloTb12!: AlcmDloTb12;
  getDloCpadCft3AlcmDloTb12!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb12>;
  setDloCpadCft3AlcmDloTb12!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb12, AlcmDloTb12Id>;
  createDloCpadCft3AlcmDloTb12!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb12>;
  // AlcmCapitalProductParam belongsTo AlcmDloTb24 via dloReconcElim
  dloReconcElimAlcmDloTb24!: AlcmDloTb24;
  getDloReconcElimAlcmDloTb24!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb24>;
  setDloReconcElimAlcmDloTb24!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb24, AlcmDloTb24Id>;
  createDloReconcElimAlcmDloTb24!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb24>;
  // AlcmCapitalProductParam belongsTo AlcmDloTb24 via dloReconcMtm
  dloReconcMtmAlcmDloTb24!: AlcmDloTb24;
  getDloReconcMtmAlcmDloTb24!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb24>;
  setDloReconcMtmAlcmDloTb24!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb24, AlcmDloTb24Id>;
  createDloReconcMtmAlcmDloTb24!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb24>;
  // AlcmCapitalProductParam belongsTo AlcmDloTb24 via dloReconcOffbal
  dloReconcOffbalAlcmDloTb24!: AlcmDloTb24;
  getDloReconcOffbalAlcmDloTb24!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb24>;
  setDloReconcOffbalAlcmDloTb24!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb24, AlcmDloTb24Id>;
  createDloReconcOffbalAlcmDloTb24!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb24>;
  // AlcmCapitalProductParam belongsTo AlcmDloTb24 via dloReconcOutstanding
  dloReconcOutstandingAlcmDloTb24!: AlcmDloTb24;
  getDloReconcOutstandingAlcmDloTb24!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb24>;
  setDloReconcOutstandingAlcmDloTb24!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb24, AlcmDloTb24Id>;
  createDloReconcOutstandingAlcmDloTb24!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb24>;
  // AlcmCapitalProductParam belongsTo AlcmProductGroup via alcmProductGroup
  alcmProductGroupAlcmProductGroup!: AlcmProductGroup;
  getAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToGetAssociationMixin<AlcmProductGroup>;
  setAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToSetAssociationMixin<AlcmProductGroup, AlcmProductGroupId>;
  createAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToCreateAssociationMixin<AlcmProductGroup>;
  // AlcmCapitalProductParam belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // AlcmCapitalProductParam belongsTo SysUnderlying via underlyingPayCode
  underlyingPayCodeSysUnderlying!: SysUnderlying;
  getUnderlyingPayCodeSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingPayCodeSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingPayCodeSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // AlcmCapitalProductParam belongsTo SysUnderlying via underlyingRecCode
  underlyingRecCodeSysUnderlying!: SysUnderlying;
  getUnderlyingRecCodeSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingRecCodeSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingRecCodeSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmCapitalProductParam {
    return AlcmCapitalProductParam.init({
    sourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'source_table'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'product_code'
      },
      field: 'product_code'
    },
    underlyingRecCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'underlying_rec_code'
    },
    underlyingPayCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'underlying_pay_code'
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
    dloAccountOutstanding: {
      type: DataTypes.STRING(18),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb03_cpad',
        key: 'dlo_account'
      },
      field: 'dlo_account_outstanding'
    },
    dloAccountMtm: {
      type: DataTypes.STRING(18),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb03_cpad',
        key: 'dlo_account'
      },
      field: 'dlo_account_mtm'
    },
    dloAccountOffbal: {
      type: DataTypes.STRING(18),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb03_cpad',
        key: 'dlo_account'
      },
      field: 'dlo_account_offbal'
    },
    dloAccountElim: {
      type: DataTypes.STRING(18),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb03_cpad',
        key: 'dlo_account'
      },
      field: 'dlo_account_elim'
    },
    dloReconcOutstanding: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb24',
        key: 'dlo_domain'
      },
      field: 'dlo_reconc_outstanding'
    },
    dloReconcMtm: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb24',
        key: 'dlo_domain'
      },
      field: 'dlo_reconc_mtm'
    },
    dloReconcOffbal: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb24',
        key: 'dlo_domain'
      },
      field: 'dlo_reconc_offbal'
    },
    dloReconcElim: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb24',
        key: 'dlo_domain'
      },
      field: 'dlo_reconc_elim'
    },
    dloCpadCcr: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'dlo_cpad_ccr'
    },
    dloCpadUndlyAsset: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'dlo_cpad_undly_asset'
    },
    dloCpadForClient: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'dlo_cpad_for_client'
    },
    dloCpadOtherRisk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'dlo_cpad_other_risk'
    },
    dloCpadCft1: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "99",
      references: {
        model: 'alcm_dlo_tb12',
        key: 'dlo_domain'
      },
      field: 'dlo_cpad_cft1'
    },
    dloCpadCft2: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "99",
      references: {
        model: 'alcm_dlo_tb12',
        key: 'dlo_domain'
      },
      field: 'dlo_cpad_cft2'
    },
    dloCpadCft3: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "99",
      references: {
        model: 'alcm_dlo_tb12',
        key: 'dlo_domain'
      },
      field: 'dlo_cpad_cft3'
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
    tableName: 'alcm_capital_product_param',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_CAPITAL_PRODUCT_PARAM",
        unique: true,
        fields: [
          { name: "source_table" },
          { name: "product_code" },
          { name: "underlying_rec_code" },
          { name: "underlying_pay_code" },
        ]
      },
    ]
  });
  }
}
