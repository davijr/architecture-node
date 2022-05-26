import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmDloTb31A, AlcmDloTb31AId } from './AlcmDloTb31A';

export interface AlcmDloTb31Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
  dloHaircutType: string;
  dloDomainNormativeReference?: string;
  dloDomainPercentage: number;
}

export type AlcmDloTb31Pk = "dloDomain";
export type AlcmDloTb31Id = AlcmDloTb31[AlcmDloTb31Pk];
export type AlcmDloTb31OptionalAttributes = "dloDomainEndDate" | "dloDomainNormativeReference";
export type AlcmDloTb31CreationAttributes = Optional<AlcmDloTb31Attributes, AlcmDloTb31OptionalAttributes>;

export class AlcmDloTb31 extends Model<AlcmDloTb31Attributes, AlcmDloTb31CreationAttributes> implements AlcmDloTb31Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;
  dloHaircutType!: string;
  dloDomainNormativeReference?: string;
  dloDomainPercentage!: number;

  // AlcmDloTb31 belongsTo AlcmDloTb31A via dloHaircutType
  dloHaircutTypeAlcmDloTb31A!: AlcmDloTb31A;
  getDloHaircutTypeAlcmDloTb31A!: Sequelize.BelongsToGetAssociationMixin<AlcmDloTb31A>;
  setDloHaircutTypeAlcmDloTb31A!: Sequelize.BelongsToSetAssociationMixin<AlcmDloTb31A, AlcmDloTb31AId>;
  createDloHaircutTypeAlcmDloTb31A!: Sequelize.BelongsToCreateAssociationMixin<AlcmDloTb31A>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb31 {
    return AlcmDloTb31.init({
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
    dloHaircutType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'alcm_dlo_tb31a',
        key: 'dlo_domain'
      },
      field: 'dlo_haircut_type'
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
    tableName: 'alcm_dlo_tb31',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB31",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
