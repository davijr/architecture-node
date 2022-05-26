import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmDloTb39Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
}

export type AlcmDloTb39Pk = "dloDomain";
export type AlcmDloTb39Id = AlcmDloTb39[AlcmDloTb39Pk];
export type AlcmDloTb39OptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb39CreationAttributes = Optional<AlcmDloTb39Attributes, AlcmDloTb39OptionalAttributes>;

export class AlcmDloTb39 extends Model<AlcmDloTb39Attributes, AlcmDloTb39CreationAttributes> implements AlcmDloTb39Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb39 {
    return AlcmDloTb39.init({
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
    tableName: 'alcm_dlo_tb39',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB39",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
