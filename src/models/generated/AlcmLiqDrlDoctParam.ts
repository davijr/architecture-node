import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmLiqDrlDoctParamValue, AlcmLiqDrlDoctParamValueId } from './AlcmLiqDrlDoctParamValue';

export interface AlcmLiqDrlDoctParamAttributes {
  drlDomain: string;
  drlDomainDesc: string;
  drlDomainInitialDate: string;
  drlDomainEndDate?: string;
}

export type AlcmLiqDrlDoctParamPk = "drlDomain";
export type AlcmLiqDrlDoctParamId = AlcmLiqDrlDoctParam[AlcmLiqDrlDoctParamPk];
export type AlcmLiqDrlDoctParamOptionalAttributes = "drlDomainEndDate";
export type AlcmLiqDrlDoctParamCreationAttributes = Optional<AlcmLiqDrlDoctParamAttributes, AlcmLiqDrlDoctParamOptionalAttributes>;

export class AlcmLiqDrlDoctParam extends Model<AlcmLiqDrlDoctParamAttributes, AlcmLiqDrlDoctParamCreationAttributes> implements AlcmLiqDrlDoctParamAttributes {
  drlDomain!: string;
  drlDomainDesc!: string;
  drlDomainInitialDate!: string;
  drlDomainEndDate?: string;

  // AlcmLiqDrlDoctParam hasMany AlcmLiqDrlDoctParamValue via drlDomain
  alcmLiqDrlDoctParamValues!: AlcmLiqDrlDoctParamValue[];
  getAlcmLiqDrlDoctParamValues!: Sequelize.HasManyGetAssociationsMixin<AlcmLiqDrlDoctParamValue>;
  setAlcmLiqDrlDoctParamValues!: Sequelize.HasManySetAssociationsMixin<AlcmLiqDrlDoctParamValue, AlcmLiqDrlDoctParamValueId>;
  addAlcmLiqDrlDoctParamValue!: Sequelize.HasManyAddAssociationMixin<AlcmLiqDrlDoctParamValue, AlcmLiqDrlDoctParamValueId>;
  addAlcmLiqDrlDoctParamValues!: Sequelize.HasManyAddAssociationsMixin<AlcmLiqDrlDoctParamValue, AlcmLiqDrlDoctParamValueId>;
  createAlcmLiqDrlDoctParamValue!: Sequelize.HasManyCreateAssociationMixin<AlcmLiqDrlDoctParamValue>;
  removeAlcmLiqDrlDoctParamValue!: Sequelize.HasManyRemoveAssociationMixin<AlcmLiqDrlDoctParamValue, AlcmLiqDrlDoctParamValueId>;
  removeAlcmLiqDrlDoctParamValues!: Sequelize.HasManyRemoveAssociationsMixin<AlcmLiqDrlDoctParamValue, AlcmLiqDrlDoctParamValueId>;
  hasAlcmLiqDrlDoctParamValue!: Sequelize.HasManyHasAssociationMixin<AlcmLiqDrlDoctParamValue, AlcmLiqDrlDoctParamValueId>;
  hasAlcmLiqDrlDoctParamValues!: Sequelize.HasManyHasAssociationsMixin<AlcmLiqDrlDoctParamValue, AlcmLiqDrlDoctParamValueId>;
  countAlcmLiqDrlDoctParamValues!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqDrlDoctParam {
    return AlcmLiqDrlDoctParam.init({
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
    tableName: 'alcm_liq_drl_doct_param',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_LIQ_DRL_DOCT_PARAM",
        unique: true,
        fields: [
          { name: "drl_domain" },
        ]
      },
    ]
  });
  }
}
