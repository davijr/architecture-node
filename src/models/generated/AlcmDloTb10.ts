import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmDloTb10Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
  dloDomainPercentage: number;
}

export type AlcmDloTb10Pk = "dloDomain";
export type AlcmDloTb10Id = AlcmDloTb10[AlcmDloTb10Pk];
export type AlcmDloTb10OptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb10CreationAttributes = Optional<AlcmDloTb10Attributes, AlcmDloTb10OptionalAttributes>;

export class AlcmDloTb10 extends Model<AlcmDloTb10Attributes, AlcmDloTb10CreationAttributes> implements AlcmDloTb10Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;
  dloDomainPercentage!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb10 {
    return AlcmDloTb10.init({
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
    tableName: 'alcm_dlo_tb10',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB10",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
