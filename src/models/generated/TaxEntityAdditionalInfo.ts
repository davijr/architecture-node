import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxConsolType, TaxConsolTypeId } from './TaxConsolType';

export interface TaxEntityAdditionalInfoAttributes {
  entityCode: number;
  ruralProducer: boolean;
  taxSmallCompany: boolean;
  brPisCofinsRetention: boolean;
  taxEntityStatus: boolean;
  taxReportConsolidation: boolean;
  taxReportConsolidationType: string;
}

export type TaxEntityAdditionalInfoPk = "entityCode";
export type TaxEntityAdditionalInfoId = TaxEntityAdditionalInfo[TaxEntityAdditionalInfoPk];
export type TaxEntityAdditionalInfoOptionalAttributes = "entityCode" | "taxReportConsolidationType";
export type TaxEntityAdditionalInfoCreationAttributes = Optional<TaxEntityAdditionalInfoAttributes, TaxEntityAdditionalInfoOptionalAttributes>;

export class TaxEntityAdditionalInfo extends Model<TaxEntityAdditionalInfoAttributes, TaxEntityAdditionalInfoCreationAttributes> implements TaxEntityAdditionalInfoAttributes {
  entityCode!: number;
  ruralProducer!: boolean;
  taxSmallCompany!: boolean;
  brPisCofinsRetention!: boolean;
  taxEntityStatus!: boolean;
  taxReportConsolidation!: boolean;
  taxReportConsolidationType!: string;

  // TaxEntityAdditionalInfo belongsTo TaxConsolType via taxReportConsolidationType
  taxReportConsolidationTypeTaxConsolType!: TaxConsolType;
  getTaxReportConsolidationTypeTaxConsolType!: Sequelize.BelongsToGetAssociationMixin<TaxConsolType>;
  setTaxReportConsolidationTypeTaxConsolType!: Sequelize.BelongsToSetAssociationMixin<TaxConsolType, TaxConsolTypeId>;
  createTaxReportConsolidationTypeTaxConsolType!: Sequelize.BelongsToCreateAssociationMixin<TaxConsolType>;

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxEntityAdditionalInfo {
    return TaxEntityAdditionalInfo.init({
    entityCode: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'entity_code'
    },
    ruralProducer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'rural_producer'
    },
    taxSmallCompany: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'tax_small_company'
    },
    brPisCofinsRetention: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'br_pis_cofins_retention'
    },
    taxEntityStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'tax_entity_status'
    },
    taxReportConsolidation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'tax_report_consolidation'
    },
    taxReportConsolidationType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "0",
      references: {
        model: 'tax_consol_type',
        key: 'tax_report_consol_type'
      },
      field: 'tax_report_consolidation_type'
    }
  }, {
    sequelize,
    tableName: 'tax_entity_additional_info',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-TAX_ENTITY_ADDITIONAL_INFO",
        unique: true,
        fields: [
          { name: "entity_code" },
        ]
      },
    ]
  });
  }
}
