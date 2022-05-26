import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmCapitalAccountParam, AlcmCapitalAccountParamId } from './AlcmCapitalAccountParam';
import type { AlcmCapitalProductParam, AlcmCapitalProductParamId } from './AlcmCapitalProductParam';
import type { AlcmDloAcctGroup, AlcmDloAcctGroupId } from './AlcmDloAcctGroup';

export interface AlcmDloTb03CpadAttributes {
  dloAccount: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
  dloDocumentCode: number;
  dloAccountGroup: string;
  dloDerivedFromData: boolean;
  dloDerivedFormula?: string;
}

export type AlcmDloTb03CpadPk = "dloAccount";
export type AlcmDloTb03CpadId = AlcmDloTb03Cpad[AlcmDloTb03CpadPk];
export type AlcmDloTb03CpadOptionalAttributes = "dloDomainEndDate" | "dloDerivedFormula";
export type AlcmDloTb03CpadCreationAttributes = Optional<AlcmDloTb03CpadAttributes, AlcmDloTb03CpadOptionalAttributes>;

export class AlcmDloTb03Cpad extends Model<AlcmDloTb03CpadAttributes, AlcmDloTb03CpadCreationAttributes> implements AlcmDloTb03CpadAttributes {
  dloAccount!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;
  dloDocumentCode!: number;
  dloAccountGroup!: string;
  dloDerivedFromData!: boolean;
  dloDerivedFormula?: string;

  // AlcmDloTb03Cpad belongsTo AlcmDloAcctGroup via dloAccountGroup
  dloAccountGroupAlcmDloAcctGroup!: AlcmDloAcctGroup;
  getDloAccountGroupAlcmDloAcctGroup!: Sequelize.BelongsToGetAssociationMixin<AlcmDloAcctGroup>;
  setDloAccountGroupAlcmDloAcctGroup!: Sequelize.BelongsToSetAssociationMixin<AlcmDloAcctGroup, AlcmDloAcctGroupId>;
  createDloAccountGroupAlcmDloAcctGroup!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloAcctGroup>;
  // AlcmDloTb03Cpad hasMany AlcmCapitalAccountParam via dloAccountCpad
  alcmCapitalAccountParams!: AlcmCapitalAccountParam[];
  getAlcmCapitalAccountParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalAccountParam>;
  setAlcmCapitalAccountParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  addAlcmCapitalAccountParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  addAlcmCapitalAccountParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  createAlcmCapitalAccountParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalAccountParam>;
  removeAlcmCapitalAccountParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  removeAlcmCapitalAccountParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  hasAlcmCapitalAccountParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  hasAlcmCapitalAccountParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  countAlcmCapitalAccountParams!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmDloTb03Cpad hasMany AlcmCapitalProductParam via dloAccountMtm
  alcmCapitalProductParams!: AlcmCapitalProductParam[];
  getAlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setAlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addAlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addAlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createAlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeAlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeAlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasAlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasAlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countAlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmDloTb03Cpad hasMany AlcmCapitalProductParam via dloAccountOffbal
  dloAccountOffbalAlcmCapitalProductParams!: AlcmCapitalProductParam[];
  getDloAccountOffbalAlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setDloAccountOffbalAlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloAccountOffbalAlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloAccountOffbalAlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createDloAccountOffbalAlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeDloAccountOffbalAlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeDloAccountOffbalAlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloAccountOffbalAlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloAccountOffbalAlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countDloAccountOffbalAlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmDloTb03Cpad hasMany AlcmCapitalProductParam via dloAccountOutstanding
  dloAccountOutstandingAlcmCapitalProductParams!: AlcmCapitalProductParam[];
  getDloAccountOutstandingAlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setDloAccountOutstandingAlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloAccountOutstandingAlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloAccountOutstandingAlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createDloAccountOutstandingAlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeDloAccountOutstandingAlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeDloAccountOutstandingAlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloAccountOutstandingAlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloAccountOutstandingAlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countDloAccountOutstandingAlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmDloTb03Cpad hasMany AlcmCapitalProductParam via dloAccountElim
  dloAccountElimAlcmCapitalProductParams!: AlcmCapitalProductParam[];
  getDloAccountElimAlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setDloAccountElimAlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloAccountElimAlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloAccountElimAlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createDloAccountElimAlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeDloAccountElimAlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeDloAccountElimAlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloAccountElimAlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloAccountElimAlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countDloAccountElimAlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb03Cpad {
    return AlcmDloTb03Cpad.init({
    dloAccount: {
      type: DataTypes.STRING(18),
      allowNull: false,
      primaryKey: true,
      field: 'dlo_account'
    },
    dloDomainDescription: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'dlo_domain_description'
    },
    dloDomainInitialDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'dlo_domain_initial_date'
    },
    dloDomainEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'dlo_domain_end_date'
    },
    dloDocumentCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'dlo_document_code'
    },
    dloAccountGroup: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'alcm_dlo_acct_group',
        key: 'dlo_group_code'
      },
      field: 'dlo_account_group'
    },
    dloDerivedFromData: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'dlo_derived_from_data'
    },
    dloDerivedFormula: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'dlo_derived_formula'
    }
  }, {
    sequelize,
    tableName: 'alcm_dlo_tb03_cpad',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB03_CPAD",
        unique: true,
        fields: [
          { name: "dlo_account" },
        ]
      },
    ]
  });
  }
}
