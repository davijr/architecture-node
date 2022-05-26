import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmDloTb30Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
}

export type AlcmDloTb30Pk = "dloDomain";
export type AlcmDloTb30Id = AlcmDloTb30[AlcmDloTb30Pk];
export type AlcmDloTb30OptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb30CreationAttributes = Optional<AlcmDloTb30Attributes, AlcmDloTb30OptionalAttributes>;

export class AlcmDloTb30 extends Model<AlcmDloTb30Attributes, AlcmDloTb30CreationAttributes> implements AlcmDloTb30Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb30 {
    return AlcmDloTb30.init({
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
    tableName: 'alcm_dlo_tb30',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB30",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
