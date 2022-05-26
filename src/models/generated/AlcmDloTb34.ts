import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmDloTb34Attributes {
  dloDomain: string;
  dloDomainDescription: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
}

export type AlcmDloTb34Pk = "dloDomain";
export type AlcmDloTb34Id = AlcmDloTb34[AlcmDloTb34Pk];
export type AlcmDloTb34OptionalAttributes = "dloDomainEndDate";
export type AlcmDloTb34CreationAttributes = Optional<AlcmDloTb34Attributes, AlcmDloTb34OptionalAttributes>;

export class AlcmDloTb34 extends Model<AlcmDloTb34Attributes, AlcmDloTb34CreationAttributes> implements AlcmDloTb34Attributes {
  dloDomain!: string;
  dloDomainDescription!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloTb34 {
    return AlcmDloTb34.init({
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
    tableName: 'alcm_dlo_tb34',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_TB34",
        unique: true,
        fields: [
          { name: "dlo_domain" },
        ]
      },
    ]
  });
  }
}
