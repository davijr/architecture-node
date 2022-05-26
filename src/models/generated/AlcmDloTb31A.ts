import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmDloTb31, AlcmDloTb31Id } from './AlcmDloTb31';

export interface AlcmDloTb31AAttributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
}

export type AlcmDloTb31APk = "dloDomain";
export type AlcmDloTb31AId = AlcmDloTb31A[AlcmDloTb31APk];
export type AlcmDloTb31AOptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb31ACreationAttributes = Optional<AlcmDloTb31AAttributes, AlcmDloTb31AOptionalAttributes>;

export class AlcmDloTb31A extends Model<AlcmDloTb31AAttributes, AlcmDloTb31ACreationAttributes> implements AlcmDloTb31AAttributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;

  // AlcmDloTb31A hasMany AlcmDloTb31 via dloHaircutType
  alcmDloTb31s!: AlcmDloTb31[];
  getAlcmDloTb31s!: Sequelize.HasManyGetAssociationsMixin<AlcmDloTb31>;
  setAlcmDloTb31s!: Sequelize.HasManySetAssociationsMixin<AlcmDloTb31, AlcmDloTb31Id>;
  addAlcmDloTb31!: Sequelize.HasManyAddAssociationMixin<AlcmDloTb31, AlcmDloTb31Id>;
  addAlcmDloTb31s!: Sequelize.HasManyAddAssociationsMixin<AlcmDloTb31, AlcmDloTb31Id>;
  createAlcmDloTb31!: Sequelize.HasManyCreateAssociationMixin<AlcmDloTb31>;
  removeAlcmDloTb31!: Sequelize.HasManyRemoveAssociationMixin<AlcmDloTb31, AlcmDloTb31Id>;
  removeAlcmDloTb31s!: Sequelize.HasManyRemoveAssociationsMixin<AlcmDloTb31, AlcmDloTb31Id>;
  hasAlcmDloTb31!: Sequelize.HasManyHasAssociationMixin<AlcmDloTb31, AlcmDloTb31Id>;
  hasAlcmDloTb31s!: Sequelize.HasManyHasAssociationsMixin<AlcmDloTb31, AlcmDloTb31Id>;
  countAlcmDloTb31s!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb31A {
    return AlcmDloTb31A.init({
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
    tableName: 'alcm_dlo_tb31a',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB31A",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
