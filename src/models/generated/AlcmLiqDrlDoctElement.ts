import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmLiqDrlDoctElementAttributes {
  drlDomain: string;
  drlDomainDesc: string;
  drlDomainInitialDate: string;
  drlDomainEndDate?: string;
}

export type AlcmLiqDrlDoctElementPk = "drlDomain";
export type AlcmLiqDrlDoctElementId = AlcmLiqDrlDoctElement[AlcmLiqDrlDoctElementPk];
export type AlcmLiqDrlDoctElementOptionalAttributes = "drlDomainEndDate";
export type AlcmLiqDrlDoctElementCreationAttributes = Optional<AlcmLiqDrlDoctElementAttributes, AlcmLiqDrlDoctElementOptionalAttributes>;

export class AlcmLiqDrlDoctElement extends Model<AlcmLiqDrlDoctElementAttributes, AlcmLiqDrlDoctElementCreationAttributes> implements AlcmLiqDrlDoctElementAttributes {
  drlDomain!: string;
  drlDomainDesc!: string;
  drlDomainInitialDate!: string;
  drlDomainEndDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqDrlDoctElement {
    return AlcmLiqDrlDoctElement.init({
    drlDomain: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      field: 'drl_domain'
    },
    drlDomainDesc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'drl_domain_desc'
    },
    drlDomainInitialDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'drl_domain_initial_date'
    },
    drlDomainEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'drl_domain_end_date'
    }
  }, {
    sequelize,
    tableName: 'alcm_liq_drl_doct_element',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_LIQ_DRL_DOCT_ELEMENT",
        unique: true,
        fields: [
          { name: "drl_domain" },
        ]
      },
    ]
  });
  }
}
