import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmLiqDrlDoctMaturityLadderAttributes {
  drlDomain: string;
  drlDomainDesc: string;
  drlUpBoundary?: number;
  drlDomainInitialDate: string;
  drlDomainEndDate?: string;
}

export type AlcmLiqDrlDoctMaturityLadderPk = "drlDomain";
export type AlcmLiqDrlDoctMaturityLadderId = AlcmLiqDrlDoctMaturityLadder[AlcmLiqDrlDoctMaturityLadderPk];
export type AlcmLiqDrlDoctMaturityLadderOptionalAttributes = "drlUpBoundary" | "drlDomainEndDate";
export type AlcmLiqDrlDoctMaturityLadderCreationAttributes = Optional<AlcmLiqDrlDoctMaturityLadderAttributes, AlcmLiqDrlDoctMaturityLadderOptionalAttributes>;

export class AlcmLiqDrlDoctMaturityLadder extends Model<AlcmLiqDrlDoctMaturityLadderAttributes, AlcmLiqDrlDoctMaturityLadderCreationAttributes> implements AlcmLiqDrlDoctMaturityLadderAttributes {
  drlDomain!: string;
  drlDomainDesc!: string;
  drlUpBoundary?: number;
  drlDomainInitialDate!: string;
  drlDomainEndDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqDrlDoctMaturityLadder {
    return AlcmLiqDrlDoctMaturityLadder.init({
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
    drlUpBoundary: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'drl_up_boundary'
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
    tableName: 'alcm_liq_drl_doct_maturity_ladder',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_LIQ_DRL_DOCT_MATURITY_LADDER",
        unique: true,
        fields: [
          { name: "drl_domain" },
        ]
      },
    ]
  });
  }
}
