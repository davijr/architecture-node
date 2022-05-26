import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmCapitalProductParam, AlcmCapitalProductParamId } from './AlcmCapitalProductParam';

export interface AlcmDloTb12Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
  dloDomainPercentage: number;
}

export type AlcmDloTb12Pk = "dloDomain";
export type AlcmDloTb12Id = AlcmDloTb12[AlcmDloTb12Pk];
export type AlcmDloTb12OptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb12CreationAttributes = Optional<AlcmDloTb12Attributes, AlcmDloTb12OptionalAttributes>;

export class AlcmDloTb12 extends Model<AlcmDloTb12Attributes, AlcmDloTb12CreationAttributes> implements AlcmDloTb12Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;
  dloDomainPercentage!: number;

  // AlcmDloTb12 hasMany AlcmCapitalProductParam via dloCpadCft1
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
  // AlcmDloTb12 hasMany AlcmCapitalProductParam via dloCpadCft2
  dloCpadCft2AlcmCapitalProductParams!: AlcmCapitalProductParam[];
  getDloCpadCft2AlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setDloCpadCft2AlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloCpadCft2AlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloCpadCft2AlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createDloCpadCft2AlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeDloCpadCft2AlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeDloCpadCft2AlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloCpadCft2AlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloCpadCft2AlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countDloCpadCft2AlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmDloTb12 hasMany AlcmCapitalProductParam via dloCpadCft3
  dloCpadCft3AlcmCapitalProductParams!: AlcmCapitalProductParam[];
  getDloCpadCft3AlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setDloCpadCft3AlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloCpadCft3AlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addDloCpadCft3AlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createDloCpadCft3AlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeDloCpadCft3AlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeDloCpadCft3AlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloCpadCft3AlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasDloCpadCft3AlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countDloCpadCft3AlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb12 {
    return AlcmDloTb12.init({
    dloDomain: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      field: 'dlo_domain'
    },
    dloDomainDescription: {
      type: DataTypes.STRING(4000),
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
    dloDomainPercentage: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'dlo_domain_percentage'
    }
  }, {
    sequelize,
    tableName: 'alcm_dlo_tb12',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB12",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
