import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmDloTb42Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
}

export type AlcmDloTb42Pk = "dloDomain";
export type AlcmDloTb42Id = AlcmDloTb42[AlcmDloTb42Pk];
export type AlcmDloTb42OptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb42CreationAttributes = Optional<AlcmDloTb42Attributes, AlcmDloTb42OptionalAttributes>;

export class AlcmDloTb42 extends Model<AlcmDloTb42Attributes, AlcmDloTb42CreationAttributes> implements AlcmDloTb42Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb42 {
    return AlcmDloTb42.init({
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
    tableName: 'alcm_dlo_tb42',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB42",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
