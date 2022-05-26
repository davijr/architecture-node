import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmDloTb11A, AlcmDloTb11AId } from './AlcmDloTb11A';

export interface AlcmDloTb11Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
  dloMitigType: string;
  dloDomainNormativeReference?: string;
  dloDomainPercentage: number;
}

export type AlcmDloTb11Pk = "dloDomain";
export type AlcmDloTb11Id = AlcmDloTb11[AlcmDloTb11Pk];
export type AlcmDloTb11OptionalAttributes = "dloDomainEndDate" | "dloDomainNormativeReference";
export type AlcmDloTb11CreationAttributes = Optional<AlcmDloTb11Attributes, AlcmDloTb11OptionalAttributes>;

export class AlcmDloTb11 extends Model<AlcmDloTb11Attributes, AlcmDloTb11CreationAttributes> implements AlcmDloTb11Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;
  dloMitigType!: string;
  dloDomainNormativeReference?: string;
  dloDomainPercentage!: number;

  // AlcmDloTb11 belongsTo AlcmDloTb11A via dloMitigType
  dloMitigTypeAlcmDloTb11A!: AlcmDloTb11A;
  getDloMitigTypeAlcmDloTb11A!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb11A>;
  setDloMitigTypeAlcmDloTb11A!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb11A, AlcmDloTb11AId>;
  createDloMitigTypeAlcmDloTb11A!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb11A>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb11 {
    return AlcmDloTb11.init({
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
    dloMitigType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb11a',
        key: 'dlo_domain'
      },
      field: 'dlo_mitig_type'
    },
    dloDomainNormativeReference: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'dlo_domain_normative_reference'
    },
    dloDomainPercentage: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'dlo_domain_percentage'
    }
  }, {
    sequelize,
    tableName: 'alcm_dlo_tb11',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB11",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
