import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmLiqDrlDoctParam, AlcmLiqDrlDoctParamId } from './AlcmLiqDrlDoctParam';

export interface AlcmLiqDrlDoctParamValueAttributes {
  drlValidValue: string;
  drlDomain: string;
  drlDomainValueDesc: string;
  drlDomainInitialDate: string;
  drlDomainEndDate?: string;
}

export type AlcmLiqDrlDoctParamValuePk = "drlValidValue" | "drlDomain";
export type AlcmLiqDrlDoctParamValueId = AlcmLiqDrlDoctParamValue[AlcmLiqDrlDoctParamValuePk];
export type AlcmLiqDrlDoctParamValueOptionalAttributes = "drlDomainEndDate";
export type AlcmLiqDrlDoctParamValueCreationAttributes = Optional<AlcmLiqDrlDoctParamValueAttributes, AlcmLiqDrlDoctParamValueOptionalAttributes>;

export class AlcmLiqDrlDoctParamValue extends Model<AlcmLiqDrlDoctParamValueAttributes, AlcmLiqDrlDoctParamValueCreationAttributes> implements AlcmLiqDrlDoctParamValueAttributes {
  drlValidValue!: string;
  drlDomain!: string;
  drlDomainValueDesc!: string;
  drlDomainInitialDate!: string;
  drlDomainEndDate?: string;

  // AlcmLiqDrlDoctParamValue belongsTo AlcmLiqDrlDoctParam via drlDomain
  drlDomainAlcmLiqDrlDoctParam!: AlcmLiqDrlDoctParam;
  getDrlDomainAlcmLiqDrlDoctParam!: Sequelize.BelongsToGetAssociationMixin<AlcmLiqDrlDoctParam>;
  setDrlDomainAlcmLiqDrlDoctParam!: Sequelize.BelongsToSetAssociationMixin<AlcmLiqDrlDoctParam, AlcmLiqDrlDoctParamId>;
  createDrlDomainAlcmLiqDrlDoctParam!: Sequelize.BelongsToCreateAssociationMixin<AlcmLiqDrlDoctParam>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqDrlDoctParamValue {
    return AlcmLiqDrlDoctParamValue.init({
    drlValidValue: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      field: 'drl_valid_value'
    },
    drlDomain: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'alcm_liq_drl_doct_param',
        key: 'drl_domain'
      },
      field: 'drl_domain'
    },
    drlDomainValueDesc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'drl_domain_value_desc'
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
    tableName: 'alcm_liq_drl_doct_param_value',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_LIQ_DRL_DOCT_PARAM_VALUE",
        unique: true,
        fields: [
          { name: "drl_valid_value" },
          { name: "drl_domain" },
        ]
      },
    ]
  });
  }
}
