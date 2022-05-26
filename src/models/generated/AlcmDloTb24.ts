import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmCapitalProductParam, AlcmCapitalProductParamId } from './AlcmCapitalProductParam';

export interface AlcmDloTb24Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
}

export type AlcmDloTb24Pk = "dloDomain";
export type AlcmDloTb24Id = AlcmDloTb24[AlcmDloTb24Pk];
export type AlcmDloTb24OptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb24CreationAttributes = Optional<AlcmDloTb24Attributes, AlcmDloTb24OptionalAttributes>;

export class AlcmDloTb24 extends Model<AlcmDloTb24Attributes, AlcmDloTb24CreationAttributes> implements AlcmDloTb24Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;

  // AlcmDloTb24 hasMany AlcmCapitalProductParam via dloReconcElim
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
  // AlcmDloTb24 hasMany AlcmCapitalProductParam via dloReconcMtm
  dloReconcMtmAlcmCapitalProductParams!: AlcmCapitalProductParam[];
  getDloReconcMtmAlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setDloReconcMtmAlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloReconcMtmAlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloReconcMtmAlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createDloReconcMtmAlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeDloReconcMtmAlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeDloReconcMtmAlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloReconcMtmAlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloReconcMtmAlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countDloReconcMtmAlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmDloTb24 hasMany AlcmCapitalProductParam via dloReconcOffbal
  dloReconcOffbalAlcmCapitalProductParams!: AlcmCapitalProductParam[];
  getDloReconcOffbalAlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setDloReconcOffbalAlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloReconcOffbalAlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloReconcOffbalAlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createDloReconcOffbalAlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeDloReconcOffbalAlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeDloReconcOffbalAlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloReconcOffbalAlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloReconcOffbalAlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countDloReconcOffbalAlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmDloTb24 hasMany AlcmCapitalProductParam via dloReconcOutstanding
  dloReconcOutstandingAlcmCapitalProductParams!: AlcmCapitalProductParam[];
  getDloReconcOutstandingAlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setDloReconcOutstandingAlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloReconcOutstandingAlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloReconcOutstandingAlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createDloReconcOutstandingAlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeDloReconcOutstandingAlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeDloReconcOutstandingAlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloReconcOutstandingAlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloReconcOutstandingAlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countDloReconcOutstandingAlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb24 {
    return AlcmDloTb24.init({
    dloDomain: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      field: 'dlo_domain'
    },
    dloDomainDescription: {
      type: DataTypes.STRING(1000),
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
    }
  }, {
    sequelize,
    tableName: 'alcm_dlo_tb24',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB24",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
