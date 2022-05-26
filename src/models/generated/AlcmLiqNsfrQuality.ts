import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId } from './AlcmLiqNsfrProductParam';

export interface AlcmLiqNsfrQualityAttributes {
  nsfrDomain: string;
  nsfrDomainDesc: string;
  nsfrDomainInitialDate: string;
  nsfrDomainEndDate?: string;
}

export type AlcmLiqNsfrQualityPk = "nsfrDomain";
export type AlcmLiqNsfrQualityId = AlcmLiqNsfrQuality[AlcmLiqNsfrQualityPk];
export type AlcmLiqNsfrQualityOptionalAttributes = "nsfrDomainEndDate";
export type AlcmLiqNsfrQualityCreationAttributes = Optional<AlcmLiqNsfrQualityAttributes, AlcmLiqNsfrQualityOptionalAttributes>;

export class AlcmLiqNsfrQuality extends Model<AlcmLiqNsfrQualityAttributes, AlcmLiqNsfrQualityCreationAttributes> implements AlcmLiqNsfrQualityAttributes {
  nsfrDomain!: string;
  nsfrDomainDesc!: string;
  nsfrDomainInitialDate!: string;
  nsfrDomainEndDate?: string;

  // AlcmLiqNsfrQuality hasMany AlcmLiqNsfrProductParam via nsfrQuality
  alcmLiqNsfrProductParams!: AlcmLiqNsfrProductParam[];
  getAlcmLiqNsfrProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmLiqNsfrProductParam>;
  setAlcmLiqNsfrProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  addAlcmLiqNsfrProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  addAlcmLiqNsfrProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  createAlcmLiqNsfrProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmLiqNsfrProductParam>;
  removeAlcmLiqNsfrProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  removeAlcmLiqNsfrProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  hasAlcmLiqNsfrProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  hasAlcmLiqNsfrProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  countAlcmLiqNsfrProductParams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqNsfrQuality {
    return AlcmLiqNsfrQuality.init({
    nsfrDomain: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      field: 'nsfr_domain'
    },
    nsfrDomainDesc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'nsfr_domain_desc'
    },
    nsfrDomainInitialDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'nsfr_domain_initial_date'
    },
    nsfrDomainEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'nsfr_domain_end_date'
    }
  }, {
    sequelize,
    tableName: 'alcm_liq_nsfr_quality',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_LIQ_NSFR_QUALITY",
        unique: true,
        fields: [
          { name: "nsfr_domain" },
        ]
      },
    ]
  });
  }
}
