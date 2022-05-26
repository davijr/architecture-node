import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmCapitalAccountParam, AlcmCapitalAccountParamId } from './AlcmCapitalAccountParam';
import type { AlcmDloAcctGroup, AlcmDloAcctGroupId } from './AlcmDloAcctGroup';

export interface AlcmDloTb03LimimobAttributes {
  dloAccount: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
  dloDocumentCode: number;
  dloAccountGroup: string;
  dloDerivedFromData: boolean;
  dloDerivedFormula?: string;
}

export type AlcmDloTb03LimimobPk = "dloAccount";
export type AlcmDloTb03LimimobId = AlcmDloTb03Limimob[AlcmDloTb03LimimobPk];
export type AlcmDloTb03LimimobOptionalAttributes = "dloDomainEndDate" | "dloDerivedFormula";
export type AlcmDloTb03LimimobCreationAttributes = Optional<AlcmDloTb03LimimobAttributes, AlcmDloTb03LimimobOptionalAttributes>;

export class AlcmDloTb03Limimob extends Model<AlcmDloTb03LimimobAttributes, AlcmDloTb03LimimobCreationAttributes> implements AlcmDloTb03LimimobAttributes {
  dloAccount!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;
  dloDocumentCode!: number;
  dloAccountGroup!: string;
  dloDerivedFromData!: boolean;
  dloDerivedFormula?: string;

  // AlcmDloTb03Limimob belongsTo AlcmDloAcctGroup via dloAccountGroup
  dloAccountGroupAlcmDloAcctGroup!: AlcmDloAcctGroup;
  getDloAccountGroupAlcmDloAcctGroup!: Sequelize.BelongsToGetAssociationMixin<AlcmDloAcctGroup>;
  setDloAccountGroupAlcmDloAcctGroup!: Sequelize.BelongsToSetAssociationMixin<AlcmDloAcctGroup, AlcmDloAcctGroupId>;
  createDloAccountGroupAlcmDloAcctGroup!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloAcctGroup>;
  // AlcmDloTb03Limimob hasMany AlcmCapitalAccountParam via dloAccountLimimob
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

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb03Limimob {
    return AlcmDloTb03Limimob.init({
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
    tableName: 'alcm_dlo_tb03_limimob',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB03_LIMIMOB",
        unique: true,
        fields: [
          { name: "dlo_account" },
        ]
      },
    ]
  });
  }
}
