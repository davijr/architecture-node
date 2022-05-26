import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AlcmLiqNsfrTimeBucketStructAttributes {
  nsfrDomain: string;
  nsfrDomainDesc: string;
  nsfrDomainInitialDate: string;
  nsfrDomainEndDate?: string;
}

export type AlcmLiqNsfrTimeBucketStructPk = "nsfrDomain";
export type AlcmLiqNsfrTimeBucketStructId = AlcmLiqNsfrTimeBucketStruct[AlcmLiqNsfrTimeBucketStructPk];
export type AlcmLiqNsfrTimeBucketStructOptionalAttributes = "nsfrDomainEndDate";
export type AlcmLiqNsfrTimeBucketStructCreationAttributes = Optional<AlcmLiqNsfrTimeBucketStructAttributes, AlcmLiqNsfrTimeBucketStructOptionalAttributes>;

export class AlcmLiqNsfrTimeBucketStruct extends Model<AlcmLiqNsfrTimeBucketStructAttributes, AlcmLiqNsfrTimeBucketStructCreationAttributes> implements AlcmLiqNsfrTimeBucketStructAttributes {
  nsfrDomain!: string;
  nsfrDomainDesc!: string;
  nsfrDomainInitialDate!: string;
  nsfrDomainEndDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmLiqNsfrTimeBucketStruct {
    return AlcmLiqNsfrTimeBucketStruct.init({
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
    tableName: 'alcm_liq_nsfr_time_bucket_struct',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_LIQ_NSFR_TIME_BUCKET_STRUCT",
        unique: true,
        fields: [
          { name: "nsfr_domain" },
        ]
      },
    ]
  });
  }
}
