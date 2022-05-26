import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SysCountry, SysCountryId } from './SysCountry';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';

export interface SysCountryCcyLnkAttributes {
  countryCodeIso2: string;
  currencyCode: string;
}

export type SysCountryCcyLnkPk = "countryCodeIso2" | "currencyCode";
export type SysCountryCcyLnkId = SysCountryCcyLnk[SysCountryCcyLnkPk];
export type SysCountryCcyLnkCreationAttributes = SysCountryCcyLnkAttributes;

export class SysCountryCcyLnk extends Model<SysCountryCcyLnkAttributes, SysCountryCcyLnkCreationAttributes> implements SysCountryCcyLnkAttributes {
  countryCodeIso2!: string;
  currencyCode!: string;

  // SysCountryCcyLnk belongsTo SysCountry via countryCodeIso2
  countryCodeIso2SysCountry!: SysCountry;
  getCountryCodeIso2SysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setCountryCodeIso2SysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createCountryCodeIso2SysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;
  // SysCountryCcyLnk belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SysCountryCcyLnk {
    return SysCountryCcyLnk.init({
    countryCodeIso2: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_country',
        key: 'country_code_iso2'
      },
      field: 'country_code_iso2'
    },
    currencyCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'currency_code'
    }
  }, {
    sequelize,
    tableName: 'sys_country_ccy_lnk',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-SYS_COUNTRY_CCY_LNK",
        unique: true,
        fields: [
          { name: "country_code_iso2" },
          { name: "currency_code" },
        ]
      },
      {
        name: "sys_country_ccy_lnk_country_code_iso2",
        fields: [
          { name: "country_code_iso2" },
        ]
      },
    ]
  });
  }
}
