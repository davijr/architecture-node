import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmLiqDrlDoctTypeAttributes {
  drlDomain: string;
  drlDomainDesc: string;
  drlDomainInitialDate: string;
  drlDomainEndDate?: string;
}

export type AlcmLiqDrlDoctTypePk = "drlDomain";
export type AlcmLiqDrlDoctTypeId = AlcmLiqDrlDoctType[AlcmLiqDrlDoctTypePk];
export type AlcmLiqDrlDoctTypeOptionalAttributes = "drlDomainEndDate";
export type AlcmLiqDrlDoctTypeCreationAttributes = Optional<AlcmLiqDrlDoctTypeAttributes, AlcmLiqDrlDoctTypeOptionalAttributes>;

export class AlcmLiqDrlDoctType extends Model<AlcmLiqDrlDoctTypeAttributes, AlcmLiqDrlDoctTypeCreationAttributes> implements AlcmLiqDrlDoctTypeAttributes {
  drlDomain!: string;
  drlDomainDesc!: string;
  drlDomainInitialDate!: string;
  drlDomainEndDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqDrlDoctType {
    return AlcmLiqDrlDoctType.init({
    drlDomain: {
      type: DataTypes.STRING(1),
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
    tableName: 'alcm_liq_drl_doct_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_LIQ_DRL_DOCT_TYPE",
        unique: true,
        fields: [
          { name: "drl_domain" },
        ]
      },
    ]
  });
  }
}
