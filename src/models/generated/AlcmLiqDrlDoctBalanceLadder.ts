import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmLiqDrlDoctBalanceLadderAttributes {
  drlDomain: string;
  drlDomainDesc: string;
  drlUpBoundary?: number;
  drlDomainInitialDate: string;
  drlDomainEndDate?: string;
}

export type AlcmLiqDrlDoctBalanceLadderPk = "drlDomain";
export type AlcmLiqDrlDoctBalanceLadderId = AlcmLiqDrlDoctBalanceLadder[AlcmLiqDrlDoctBalanceLadderPk];
export type AlcmLiqDrlDoctBalanceLadderOptionalAttributes = "drlUpBoundary" | "drlDomainEndDate";
export type AlcmLiqDrlDoctBalanceLadderCreationAttributes = Optional<AlcmLiqDrlDoctBalanceLadderAttributes, AlcmLiqDrlDoctBalanceLadderOptionalAttributes>;

export class AlcmLiqDrlDoctBalanceLadder extends Model<AlcmLiqDrlDoctBalanceLadderAttributes, AlcmLiqDrlDoctBalanceLadderCreationAttributes> implements AlcmLiqDrlDoctBalanceLadderAttributes {
  drlDomain!: string;
  drlDomainDesc!: string;
  drlUpBoundary?: number;
  drlDomainInitialDate!: string;
  drlDomainEndDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqDrlDoctBalanceLadder {
    return AlcmLiqDrlDoctBalanceLadder.init({
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
      type: DataTypes.DECIMAL,
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
    tableName: 'alcm_liq_drl_doct_balance_ladder',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_LIQ_DRL_DOCT_BALANCE_LADDER",
        unique: true,
        fields: [
          { name: "drl_domain" },
        ]
      },
    ]
  });
  }
}
