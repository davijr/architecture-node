import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmDloTb11, AlcmDloTb11Id } from './AlcmDloTb11';

export interface AlcmDloTb11AAttributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
}

export type AlcmDloTb11APk = "dloDomain";
export type AlcmDloTb11AId = AlcmDloTb11A[AlcmDloTb11APk];
export type AlcmDloTb11AOptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb11ACreationAttributes = Optional<AlcmDloTb11AAttributes, AlcmDloTb11AOptionalAttributes>;

export class AlcmDloTb11A extends Model<AlcmDloTb11AAttributes, AlcmDloTb11ACreationAttributes> implements AlcmDloTb11AAttributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;

  // AlcmDloTb11A hasMany AlcmDloTb11 via dloMitigType
  alcmDloTb11s!: AlcmDloTb11[];
  getAlcmDloTb11s!: Sequelize.HasManyGetAssociationsMixin<AlcmDloTb11>;
  setAlcmDloTb11s!: Sequelize.HasManySetAssociationsMixin<AlcmDloTb11, AlcmDloTb11Id>;
  addAlcmDloTb11!: Sequelize.HasManyAddAssociationMixin<AlcmDloTb11, AlcmDloTb11Id>;
  addAlcmDloTb11s!: Sequelize.HasManyAddAssociationsMixin<AlcmDloTb11, AlcmDloTb11Id>;
  createAlcmDloTb11!: Sequelize.HasManyCreateAssociationMixin<AlcmDloTb11>;
  removeAlcmDloTb11!: Sequelize.HasManyRemoveAssociationMixin<AlcmDloTb11, AlcmDloTb11Id>;
  removeAlcmDloTb11s!: Sequelize.HasManyRemoveAssociationsMixin<AlcmDloTb11, AlcmDloTb11Id>;
  hasAlcmDloTb11!: Sequelize.HasManyHasAssociationMixin<AlcmDloTb11, AlcmDloTb11Id>;
  hasAlcmDloTb11s!: Sequelize.HasManyHasAssociationsMixin<AlcmDloTb11, AlcmDloTb11Id>;
  countAlcmDloTb11s!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb11A {
    return AlcmDloTb11A.init({
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
    tableName: 'alcm_dlo_tb11a',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB11A",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
