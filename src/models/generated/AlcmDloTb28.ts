import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmDloTb28D, AlcmDloTb28DId } from './AlcmDloTb28D';

export interface AlcmDloTb28Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
  dloDomainIncluido: boolean;
  dloDomainPercentage: number;
}

export type AlcmDloTb28Pk = "dloDomain";
export type AlcmDloTb28Id = AlcmDloTb28[AlcmDloTb28Pk];
export type AlcmDloTb28OptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb28CreationAttributes = Optional<AlcmDloTb28Attributes, AlcmDloTb28OptionalAttributes>;

export class AlcmDloTb28 extends Model<AlcmDloTb28Attributes, AlcmDloTb28CreationAttributes> implements AlcmDloTb28Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;
  dloDomainIncluido!: boolean;
  dloDomainPercentage!: number;

  // AlcmDloTb28 hasMany AlcmDloTb28D via dloDomainCdLimit
  alcmDloTb28Ds!: AlcmDloTb28D[];
  getAlcmDloTb28Ds!: Sequelize.HasManyGetAssociationsMixin<AlcmDloTb28D>;
  setAlcmDloTb28Ds!: Sequelize.HasManySetAssociationsMixin<AlcmDloTb28D, AlcmDloTb28DId>;
  addAlcmDloTb28D!: Sequelize.HasManyAddAssociationMixin<AlcmDloTb28D, AlcmDloTb28DId>;
  addAlcmDloTb28Ds!: Sequelize.HasManyAddAssociationsMixin<AlcmDloTb28D, AlcmDloTb28DId>;
  createAlcmDloTb28D!: Sequelize.HasManyCreateAssociationMixin<AlcmDloTb28D>;
  removeAlcmDloTb28D!: Sequelize.HasManyRemoveAssociationMixin<AlcmDloTb28D, AlcmDloTb28DId>;
  removeAlcmDloTb28Ds!: Sequelize.HasManyRemoveAssociationsMixin<AlcmDloTb28D, AlcmDloTb28DId>;
  hasAlcmDloTb28D!: Sequelize.HasManyHasAssociationMixin<AlcmDloTb28D, AlcmDloTb28DId>;
  hasAlcmDloTb28Ds!: Sequelize.HasManyHasAssociationsMixin<AlcmDloTb28D, AlcmDloTb28DId>;
  countAlcmDloTb28Ds!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb28 {
    return AlcmDloTb28.init({
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
    },
    dloDomainIncluido: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'dlo_domain_incluido'
    },
    dloDomainPercentage: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'dlo_domain_percentage'
    }
  }, {
    sequelize,
    tableName: 'alcm_dlo_tb28',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB28",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
