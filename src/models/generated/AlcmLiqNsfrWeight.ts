import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmLiqNsfrAccount, AlcmLiqNsfrAccountId } from './AlcmLiqNsfrAccount';

export interface AlcmLiqNsfrWeightAttributes {
  nsfrAccount: string;
  recordInitialDate: string;
  recordEndDate?: string;
  l1ABuckt1?: number;
  l1ABuckt2?: number;
  l1ABuckt3?: number;
  l1ABuckt4?: number;
  l1ABuckt5?: number;
  l2ABuckt1?: number;
  l2ABuckt2?: number;
  l2ABuckt3?: number;
  l2ABuckt4?: number;
  l2ABuckt5?: number;
  l2BBuckt1?: number;
  l2BBuckt2?: number;
  l2BBuckt3?: number;
  l2BBuckt4?: number;
  l2BBuckt5?: number;
}

export type AlcmLiqNsfrWeightPk = "nsfrAccount" | "recordInitialDate";
export type AlcmLiqNsfrWeightId = AlcmLiqNsfrWeight[AlcmLiqNsfrWeightPk];
export type AlcmLiqNsfrWeightOptionalAttributes = "recordEndDate" | "l1ABuckt1" | "l1ABuckt2" | "l1ABuckt3" | "l1ABuckt4" | "l1ABuckt5" | "l2ABuckt1" | "l2ABuckt2" | "l2ABuckt3" | "l2ABuckt4" | "l2ABuckt5" | "l2BBuckt1" | "l2BBuckt2" | "l2BBuckt3" | "l2BBuckt4" | "l2BBuckt5";
export type AlcmLiqNsfrWeightCreationAttributes = Optional<AlcmLiqNsfrWeightAttributes, AlcmLiqNsfrWeightOptionalAttributes>;

export class AlcmLiqNsfrWeight extends Model<AlcmLiqNsfrWeightAttributes, AlcmLiqNsfrWeightCreationAttributes> implements AlcmLiqNsfrWeightAttributes {
  nsfrAccount!: string;
  recordInitialDate!: string;
  recordEndDate?: string;
  l1ABuckt1?: number;
  l1ABuckt2?: number;
  l1ABuckt3?: number;
  l1ABuckt4?: number;
  l1ABuckt5?: number;
  l2ABuckt1?: number;
  l2ABuckt2?: number;
  l2ABuckt3?: number;
  l2ABuckt4?: number;
  l2ABuckt5?: number;
  l2BBuckt1?: number;
  l2BBuckt2?: number;
  l2BBuckt3?: number;
  l2BBuckt4?: number;
  l2BBuckt5?: number;

  // AlcmLiqNsfrWeight belongsTo AlcmLiqNsfrAccount via nsfrAccount
  nsfrAccountAlcmLiqNsfrAccount!: AlcmLiqNsfrAccount;
  getNsfrAccountAlcmLiqNsfrAccount!: Sequelize.BelongsToGetAssociationMixin<AlcmLiqNsfrAccount>;
  setNsfrAccountAlcmLiqNsfrAccount!: Sequelize.BelongsToSetAssociationMixin<AlcmLiqNsfrAccount, AlcmLiqNsfrAccountId>;
  createNsfrAccountAlcmLiqNsfrAccount!: Sequelize.BelongsToCreateAssociationMixin<AlcmLiqNsfrAccount>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqNsfrWeight {
    return AlcmLiqNsfrWeight.init({
    nsfrAccount: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'alcm_liq_nsfr_account',
        key: 'nsfr_account'
      },
      field: 'nsfr_account'
    },
    recordInitialDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'record_initial_date'
    },
    recordEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'record_end_date'
    },
    l1ABuckt1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l1a_buckt_1'
    },
    l1ABuckt2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l1a_buckt_2'
    },
    l1ABuckt3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l1a_buckt_3'
    },
    l1ABuckt4: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l1a_buckt_4'
    },
    l1ABuckt5: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l1a_buckt_5'
    },
    l2ABuckt1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l2a_buckt_1'
    },
    l2ABuckt2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l2a_buckt_2'
    },
    l2ABuckt3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l2a_buckt_3'
    },
    l2ABuckt4: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l2a_buckt_4'
    },
    l2ABuckt5: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l2a_buckt_5'
    },
    l2BBuckt1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l2b_buckt_1'
    },
    l2BBuckt2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l2b_buckt_2'
    },
    l2BBuckt3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l2b_buckt_3'
    },
    l2BBuckt4: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l2b_buckt_4'
    },
    l2BBuckt5: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'l2b_buckt_5'
    }
  }, {
    sequelize,
    tableName: 'alcm_liq_nsfr_weight',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_LIQ_NSFR_WEIGHT",
        unique: true,
        fields: [
          { name: "nsfr_account" },
          { name: "record_initial_date" },
        ]
      },
    ]
  });
  }
}
