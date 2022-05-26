import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SysCountry, SysCountryId } from './SysCountry';

export interface TaxForeignPersonAttributes {
  id: number;
  entityCode: number;
  foreignStatusInitialDate: string;
  foreignStatusEndDate?: string;
  naturalised: boolean;
  countryOfNaturalization: string;
  taxForeignResidence: string;
  brTaxDirfScope: boolean;
  brTaxDeclaratedType?: string;
  countrycountryIsoCode2?: string;
  countrycountryIsoCode22?: string;
  countrycountryIsoCode23?: string;
  countrycountryIsoCode24?: string;
}

export type TaxForeignPersonPk = "id";
export type TaxForeignPersonId = TaxForeignPerson[TaxForeignPersonPk];
export type TaxForeignPersonOptionalAttributes = "id" | "foreignStatusEndDate" | "brTaxDeclaratedType" | "countrycountryIsoCode2" | "countrycountryIsoCode22" | "countrycountryIsoCode23" | "countrycountryIsoCode24";
export type TaxForeignPersonCreationAttributes = Optional<TaxForeignPersonAttributes, TaxForeignPersonOptionalAttributes>;

export class TaxForeignPerson extends Model<TaxForeignPersonAttributes, TaxForeignPersonCreationAttributes> implements TaxForeignPersonAttributes {
  id!: number;
  entityCode!: number;
  foreignStatusInitialDate!: string;
  foreignStatusEndDate?: string;
  naturalised!: boolean;
  countryOfNaturalization!: string;
  taxForeignResidence!: string;
  brTaxDirfScope!: boolean;
  brTaxDeclaratedType?: string;
  countrycountryIsoCode2?: string;
  countrycountryIsoCode22?: string;
  countrycountryIsoCode23?: string;
  countrycountryIsoCode24?: string;

  // TaxForeignPerson belongsTo SysCountry via countrycountryIsoCode23
  countrycountryIsoCode23SysCountry!: SysCountry;
  getCountrycountryIsoCode23SysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setCountrycountryIsoCode23SysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createCountrycountryIsoCode23SysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;
  // TaxForeignPerson belongsTo SysCountry via countrycountryIsoCode24
  countrycountryIsoCode24SysCountry!: SysCountry;
  getCountrycountryIsoCode24SysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setCountrycountryIsoCode24SysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createCountrycountryIsoCode24SysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxForeignPerson {
    return TaxForeignPerson.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    entityCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'entity_code'
    },
    foreignStatusInitialDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'foreign_status_initial_date'
    },
    foreignStatusEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'foreign_status_end_date'
    },
    naturalised: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    countryOfNaturalization: {
      type: DataTypes.STRING(2),
      allowNull: false,
      field: 'country_of_naturalization'
    },
    taxForeignResidence: {
      type: DataTypes.STRING(2),
      allowNull: false,
      field: 'tax_foreign_residence'
    },
    brTaxDirfScope: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'br_tax_dirf_scope'
    },
    brTaxDeclaratedType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'br_tax_declarated_type'
    },
    countrycountryIsoCode2: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'countrycountry_iso_code2'
    },
    countrycountryIsoCode22: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'countrycountry_iso_code22'
    },
    countrycountryIsoCode23: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'sys_country',
        key: 'country_code_iso2'
      },
      field: 'countrycountry_iso_code23'
    },
    countrycountryIsoCode24: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'sys_country',
        key: 'country_code_iso2'
      },
      field: 'countrycountry_iso_code24'
    }
  }, {
    sequelize,
    tableName: 'tax_foreign_person',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-TAX_FOREIGN_PERSON",
        unique: true,
        fields: [
          { name: "entity_code" },
          { name: "foreign_status_initial_date" },
        ]
      },
      {
        name: "PK-TAX_FOREIGN_PERSON",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
