import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmDloTb28, AlcmDloTb28Id } from './AlcmDloTb28';

export interface AlcmDloTb28DAttributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
  dloDomainCdLimit: string;
}

export type AlcmDloTb28DPk = "dloDomain";
export type AlcmDloTb28DId = AlcmDloTb28D[AlcmDloTb28DPk];
export type AlcmDloTb28DOptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb28DCreationAttributes = Optional<AlcmDloTb28DAttributes, AlcmDloTb28DOptionalAttributes>;

export class AlcmDloTb28D extends Model<AlcmDloTb28DAttributes, AlcmDloTb28DCreationAttributes> implements AlcmDloTb28DAttributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;
  dloDomainCdLimit!: string;

  // AlcmDloTb28D belongsTo AlcmDloTb28 via dloDomainCdLimit
  dloDomainCdLimitAlcmDloTb28!: AlcmDloTb28;
  getDloDomainCdLimitAlcmDloTb28!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb28>;
  setDloDomainCdLimitAlcmDloTb28!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb28, AlcmDloTb28Id>;
  createDloDomainCdLimitAlcmDloTb28!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb28>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb28D {
    return AlcmDloTb28D.init({
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
    dloDomainCdLimit: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb28',
        key: 'dlo_domain'
      },
      field: 'dlo_domain_cd_limit'
    }
  }, {
    sequelize,
    tableName: 'alcm_dlo_tb28d',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB28D",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
