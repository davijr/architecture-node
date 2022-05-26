import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxEntityAdditionalInfo, TaxEntityAdditionalInfoId } from './TaxEntityAdditionalInfo';

export interface TaxConsolTypeAttributes {
  taxReportConsolType: string;
  taxReportConsolDesc: string;
}

export type TaxConsolTypePk = "taxReportConsolType";
export type TaxConsolTypeId = TaxConsolType[TaxConsolTypePk];
export type TaxConsolTypeCreationAttributes = TaxConsolTypeAttributes;

export class TaxConsolType extends Model<TaxConsolTypeAttributes, TaxConsolTypeCreationAttributes> implements TaxConsolTypeAttributes {
  taxReportConsolType!: string;
  taxReportConsolDesc!: string;

  // TaxConsolType hasMany TaxEntityAdditionalInfo via taxReportConsolidationType
  taxEntityAdditionalInfos!: TaxEntityAdditionalInfo[];
  getTaxEntityAdditionalInfos!: Sequelize.HasManyGetAssociationsMixin<TaxEntityAdditionalInfo>;
  setTaxEntityAdditionalInfos!: Sequelize.HasManySetAssociationsMixin<TaxEntityAdditionalInfo, TaxEntityAdditionalInfoId>;
  addTaxEntityAdditionalInfo!: Sequelize.HasManyAddAssociationMixin<TaxEntityAdditionalInfo, TaxEntityAdditionalInfoId>;
  addTaxEntityAdditionalInfos!: Sequelize.HasManyAddAssociationsMixin<TaxEntityAdditionalInfo, TaxEntityAdditionalInfoId>;
  createTaxEntityAdditionalInfo!: Sequelize.HasManyCreateAssociationMixin<TaxEntityAdditionalInfo>;
  removeTaxEntityAdditionalInfo!: Sequelize.HasManyRemoveAssociationMixin<TaxEntityAdditionalInfo, TaxEntityAdditionalInfoId>;
  removeTaxEntityAdditionalInfos!: Sequelize.HasManyRemoveAssociationsMixin<TaxEntityAdditionalInfo, TaxEntityAdditionalInfoId>;
  hasTaxEntityAdditionalInfo!: Sequelize.HasManyHasAssociationMixin<TaxEntityAdditionalInfo, TaxEntityAdditionalInfoId>;
  hasTaxEntityAdditionalInfos!: Sequelize.HasManyHasAssociationsMixin<TaxEntityAdditionalInfo, TaxEntityAdditionalInfoId>;
  countTaxEntityAdditionalInfos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxConsolType {
    return TaxConsolType.init({
    taxReportConsolType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      field: 'tax_report_consol_type'
    },
    taxReportConsolDesc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'tax_report_consol_desc'
    }
  }, {
    sequelize,
    tableName: 'tax_consol_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-TAX_CONSOL_TYPE",
        unique: true,
        fields: [
          { name: "tax_report_consol_type" },
        ]
      },
    ]
  });
  }
}
