import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmLiqNsfrAccount, AlcmLiqNsfrAccountId } from './AlcmLiqNsfrAccount';
import type { AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId } from './AlcmLiqNsfrProductParam';

export interface AlcmLiqNsfrGroupAttributes {
  nsfrDomain: string;
  nsfrDomainDesc: string;
  nsfrDomainInitialDate: string;
  nsfrDomainEndDate?: string;
}

export type AlcmLiqNsfrGroupPk = "nsfrDomain";
export type AlcmLiqNsfrGroupId = AlcmLiqNsfrGroup[AlcmLiqNsfrGroupPk];
export type AlcmLiqNsfrGroupOptionalAttributes = "nsfrDomainEndDate";
export type AlcmLiqNsfrGroupCreationAttributes = Optional<AlcmLiqNsfrGroupAttributes, AlcmLiqNsfrGroupOptionalAttributes>;

export class AlcmLiqNsfrGroup extends Model<AlcmLiqNsfrGroupAttributes, AlcmLiqNsfrGroupCreationAttributes> implements AlcmLiqNsfrGroupAttributes {
  nsfrDomain!: string;
  nsfrDomainDesc!: string;
  nsfrDomainInitialDate!: string;
  nsfrDomainEndDate?: string;

  // AlcmLiqNsfrGroup hasMany AlcmLiqNsfrAccount via nsfrGroup
  alcmLiqNsfrAccounts!: AlcmLiqNsfrAccount[];
  getAlcmLiqNsfrAccounts!: Sequelize.HasManyGetAssociationsMixin<AlcmLiqNsfrAccount>;
  setAlcmLiqNsfrAccounts!: Sequelize.HasManySetAssociationsMixin<AlcmLiqNsfrAccount, AlcmLiqNsfrAccountId>;
  addAlcmLiqNsfrAccount!: Sequelize.HasManyAddAssociationMixin<AlcmLiqNsfrAccount, AlcmLiqNsfrAccountId>;
  addAlcmLiqNsfrAccounts!: Sequelize.HasManyAddAssociationsMixin<AlcmLiqNsfrAccount, AlcmLiqNsfrAccountId>;
  createAlcmLiqNsfrAccount!: Sequelize.HasManyCreateAssociationMixin<AlcmLiqNsfrAccount>;
  removeAlcmLiqNsfrAccount!: Sequelize.HasManyRemoveAssociationMixin<AlcmLiqNsfrAccount, AlcmLiqNsfrAccountId>;
  removeAlcmLiqNsfrAccounts!: Sequelize.HasManyRemoveAssociationsMixin<AlcmLiqNsfrAccount, AlcmLiqNsfrAccountId>;
  hasAlcmLiqNsfrAccount!: Sequelize.HasManyHasAssociationMixin<AlcmLiqNsfrAccount, AlcmLiqNsfrAccountId>;
  hasAlcmLiqNsfrAccounts!: Sequelize.HasManyHasAssociationsMixin<AlcmLiqNsfrAccount, AlcmLiqNsfrAccountId>;
  countAlcmLiqNsfrAccounts!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmLiqNsfrGroup hasMany AlcmLiqNsfrProductParam via nsfrGroup
  alcmLiqNsfrProductParams!: AlcmLiqNsfrProductParam[];
  getAlcmLiqNsfrProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmLiqNsfrProductParam>;
  setAlcmLiqNsfrProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  addAlcmLiqNsfrProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  addAlcmLiqNsfrProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  createAlcmLiqNsfrProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmLiqNsfrProductParam>;
  removeAlcmLiqNsfrProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  removeAlcmLiqNsfrProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  hasAlcmLiqNsfrProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  hasAlcmLiqNsfrProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  countAlcmLiqNsfrProductParams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqNsfrGroup {
    return AlcmLiqNsfrGroup.init({
    nsfrDomain: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      field: 'nsfr_domain'
    },
    nsfrDomainDesc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'nsfr_domain_desc'
    },
    nsfrDomainInitialDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'nsfr_domain_initial_date'
    },
    nsfrDomainEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'nsfr_domain_end_date'
    }
  }, {
    sequelize,
    tableName: 'alcm_liq_nsfr_group',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_LIQ_NSFR_GROUP",
        unique: true,
        fields: [
          { name: "nsfr_domain" },
        ]
      },
    ]
  });
  }
}
