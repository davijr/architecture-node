import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SysAdhocHoliday, SysAdhocHolidayId } from './SysAdhocHoliday';
import type { SysCountry, SysCountryId } from './SysCountry';

export interface SysCalendarAttributes {
  calendarCode: number;
  calendarName: string;
  countryCodeIso2: string;
}

export type SysCalendarPk = "calendarCode";
export type SysCalendarId = SysCalendar[SysCalendarPk];
export type SysCalendarOptionalAttributes = "calendarCode";
export type SysCalendarCreationAttributes = Optional<SysCalendarAttributes, SysCalendarOptionalAttributes>;

export class SysCalendar extends Model<SysCalendarAttributes, SysCalendarCreationAttributes> implements SysCalendarAttributes {
  calendarCode!: number;
  calendarName!: string;
  countryCodeIso2!: string;

  // SysCalendar hasMany SysAdhocHoliday via calendarCode
  sysAdhocHolidays!: SysAdhocHoliday[];
  getSysAdhocHolidays!: Sequelize.HasManyGetAssociationsMixin<SysAdhocHoliday>;
  setSysAdhocHolidays!: Sequelize.HasManySetAssociationsMixin<SysAdhocHoliday, SysAdhocHolidayId>;
  addSysAdhocHoliday!: Sequelize.HasManyAddAssociationMixin<SysAdhocHoliday, SysAdhocHolidayId>;
  addSysAdhocHolidays!: Sequelize.HasManyAddAssociationsMixin<SysAdhocHoliday, SysAdhocHolidayId>;
  createSysAdhocHoliday!: Sequelize.HasManyCreateAssociationMixin<SysAdhocHoliday>;
  removeSysAdhocHoliday!: Sequelize.HasManyRemoveAssociationMixin<SysAdhocHoliday, SysAdhocHolidayId>;
  removeSysAdhocHolidays!: Sequelize.HasManyRemoveAssociationsMixin<SysAdhocHoliday, SysAdhocHolidayId>;
  hasSysAdhocHoliday!: Sequelize.HasManyHasAssociationMixin<SysAdhocHoliday, SysAdhocHolidayId>;
  hasSysAdhocHolidays!: Sequelize.HasManyHasAssociationsMixin<SysAdhocHoliday, SysAdhocHolidayId>;
  countSysAdhocHolidays!: Sequelize.HasManyCountAssociationsMixin;
  // SysCalendar belongsTo SysCountry via countryCodeIso2
  countryCodeIso2SysCountry!: SysCountry;
  getCountryCodeIso2SysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setCountryCodeIso2SysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createCountryCodeIso2SysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SysCalendar {
    return SysCalendar.init({
    calendarCode: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'calendar_code'
    },
    calendarName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'calendar_name'
    },
    countryCodeIso2: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'sys_country',
        key: 'country_code_iso2'
      },
      field: 'country_code_iso2'
    }
  }, {
    sequelize,
    tableName: 'sys_calendar',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-SYS_CALENDAR",
        unique: true,
        fields: [
          { name: "calendar_code" },
        ]
      },
      {
        name: "sys_calendar_calendar_code",
        unique: true,
        fields: [
          { name: "calendar_code" },
        ]
      },
    ]
  });
  }
}
