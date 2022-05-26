import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmLiqNsfrGroup, AlcmLiqNsfrGroupId } from './AlcmLiqNsfrGroup';
import type { AlcmLiqNsfrWeight, AlcmLiqNsfrWeightId } from './AlcmLiqNsfrWeight';

export interface AlcmLiqNsfrAccountAttributes {
  nsfrAccount: string;
  nsfrAccountDescription?: string;
  nsfrGroup: string;
  nsfrAccountAggreg: boolean;
  nsfrAccountRuleRef?: string;
  recordInitialDate: string;
  recordEndDate?: string;
}

export type AlcmLiqNsfrAccountPk = "nsfrAccount";
export type AlcmLiqNsfrAccountId = AlcmLiqNsfrAccount[AlcmLiqNsfrAccountPk];
export type AlcmLiqNsfrAccountOptionalAttributes = "nsfrAccountDescription" | "nsfrAccountRuleRef" | "recordEndDate";
export type AlcmLiqNsfrAccountCreationAttributes = Optional<AlcmLiqNsfrAccountAttributes, AlcmLiqNsfrAccountOptionalAttributes>;

export class AlcmLiqNsfrAccount extends Model<AlcmLiqNsfrAccountAttributes, AlcmLiqNsfrAccountCreationAttributes> implements AlcmLiqNsfrAccountAttributes {
  nsfrAccount!: string;
  nsfrAccountDescription?: string;
  nsfrGroup!: string;
  nsfrAccountAggreg!: boolean;
  nsfrAccountRuleRef?: string;
  recordInitialDate!: string;
  recordEndDate?: string;

  // AlcmLiqNsfrAccount hasMany AlcmLiqNsfrWeight via nsfrAccount
  alcmLiqNsfrWeights!: AlcmLiqNsfrWeight[];
  getAlcmLiqNsfrWeights!: Sequelize.HasManyGetAssociationsMixin<AlcmLiqNsfrWeight>;
  setAlcmLiqNsfrWeights!: Sequelize.HasManySetAssociationsMixin<AlcmLiqNsfrWeight, AlcmLiqNsfrWeightId>;
  addAlcmLiqNsfrWeight!: Sequelize.HasManyAddAssociationMixin<AlcmLiqNsfrWeight, AlcmLiqNsfrWeightId>;
  addAlcmLiqNsfrWeights!: Sequelize.HasManyAddAssociationsMixin<AlcmLiqNsfrWeight, AlcmLiqNsfrWeightId>;
  createAlcmLiqNsfrWeight!: Sequelize.HasManyCreateAssociationMixin<AlcmLiqNsfrWeight>;
  removeAlcmLiqNsfrWeight!: Sequelize.HasManyRemoveAssociationMixin<AlcmLiqNsfrWeight, AlcmLiqNsfrWeightId>;
  removeAlcmLiqNsfrWeights!: Sequelize.HasManyRemoveAssociationsMixin<AlcmLiqNsfrWeight, AlcmLiqNsfrWeightId>;
  hasAlcmLiqNsfrWeight!: Sequelize.HasManyHasAssociationMixin<AlcmLiqNsfrWeight, AlcmLiqNsfrWeightId>;
  hasAlcmLiqNsfrWeights!: Sequelize.HasManyHasAssociationsMixin<AlcmLiqNsfrWeight, AlcmLiqNsfrWeightId>;
  countAlcmLiqNsfrWeights!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmLiqNsfrAccount belongsTo AlcmLiqNsfrGroup via nsfrGroup
  nsfrGroupAlcmLiqNsfrGroup!: AlcmLiqNsfrGroup;
  getNsfrGroupAlcmLiqNsfrGroup!: Sequelize.BelongsToGetAssociationMixin<AlcmLiqNsfrGroup>;
  setNsfrGroupAlcmLiqNsfrGroup!: Sequelize.BelongsToSetAssociationMixin<AlcmLiqNsfrGroup, AlcmLiqNsfrGroupId>;
  createNsfrGroupAlcmLiqNsfrGroup!: Sequelize.BelongsToCreateAssociationMixin<AlcmLiqNsfrGroup>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqNsfrAccount {
    return AlcmLiqNsfrAccount.init({
    nsfrAccount: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'nsfr_account'
    },
    nsfrAccountDescription: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'nsfr_account_description'
    },
    nsfrGroup: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'alcm_liq_nsfr_group',
        key: 'nsfr_domain'
      },
      field: 'nsfr_group'
    },
    nsfrAccountAggreg: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'nsfr_account_aggreg'
    },
    nsfrAccountRuleRef: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'nsfr_account_rule_ref'
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
    tableName: 'alcm_liq_nsfr_account',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_LIQ_NSFR_ACCOUNT",
        unique: true,
        fields: [
          { name: "nsfr_account" },
        ]
      },
    ]
  });
  }
}
