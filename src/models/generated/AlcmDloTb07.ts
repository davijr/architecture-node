import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmDloTb07Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
}

export type AlcmDloTb07Pk = "dloDomain";
export type AlcmDloTb07Id = AlcmDloTb07[AlcmDloTb07Pk];
export type AlcmDloTb07OptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb07CreationAttributes = Optional<AlcmDloTb07Attributes, AlcmDloTb07OptionalAttributes>;

export class AlcmDloTb07 extends Model<AlcmDloTb07Attributes, AlcmDloTb07CreationAttributes> implements AlcmDloTb07Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb07 {
    return AlcmDloTb07.init({
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
    tableName: 'alcm_dlo_tb07',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB07",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
