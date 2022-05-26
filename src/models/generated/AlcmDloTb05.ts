import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmDloTb05Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
  dloDomainPercentage: number;
}

export type AlcmDloTb05Pk = "dloDomain";
export type AlcmDloTb05Id = AlcmDloTb05[AlcmDloTb05Pk];
export type AlcmDloTb05OptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb05CreationAttributes = Optional<AlcmDloTb05Attributes, AlcmDloTb05OptionalAttributes>;

export class AlcmDloTb05 extends Model<AlcmDloTb05Attributes, AlcmDloTb05CreationAttributes> implements AlcmDloTb05Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;
  dloDomainPercentage!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb05 {
    return AlcmDloTb05.init({
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
    dloDomainPercentage: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'dlo_domain_percentage'
    }
  }, {
    sequelize,
    tableName: 'alcm_dlo_tb05',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB05",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
