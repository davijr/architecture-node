import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SysCalendar, SysCalendarId } from './SysCalendar';

export interface SysAdhocHolidayAttributes {
  calendarCode: number;
  holidayDate: string;
  holidayName?: string;
}

export type SysAdhocHolidayPk = "calendarCode" | "holidayDate";
export type SysAdhocHolidayId = SysAdhocHoliday[SysAdhocHolidayPk];
export type SysAdhocHolidayOptionalAttributes = "holidayName";
export type SysAdhocHolidayCreationAttributes = Optional<SysAdhocHolidayAttributes, SysAdhocHolidayOptionalAttributes>;

export class SysAdhocHoliday extends Model<SysAdhocHolidayAttributes, SysAdhocHolidayCreationAttributes> implements SysAdhocHolidayAttributes {
  calendarCode!: number;
  holidayDate!: string;
  holidayName?: string;

  // SysAdhocHoliday belongsTo SysCalendar via calendarCode
  calendarCodeSysCalendar!: SysCalendar;
  getCalendarCodeSysCalendar!: Sequelize.BelongsToGetAssociationMixin<SysCalendar>;
  setCalendarCodeSysCalendar!: Sequelize.BelongsToSetAssociationMixin<SysCalendar, SysCalendarId>;
  createCalendarCodeSysCalendar!: Sequelize.BelongsToCreateAssociationMixin<SysCalendar>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SysAdhocHoliday {
    return SysAdhocHoliday.init({
    calendarCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_calendar',
        key: 'calendar_code'
      },
      field: 'calendar_code'
    },
    holidayDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'holiday_date'
    },
    holidayName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'holiday_name'
    }
  }, {
    sequelize,
    tableName: 'sys_adhoc_holiday',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-SYS_ADHOC_HOLIDAY",
        unique: true,
        fields: [
          { name: "calendar_code" },
          { name: "holiday_date" },
        ]
      },
      {
        name: "sys_adhoc_holiday_calendar_code",
        fields: [
          { name: "calendar_code" },
        ]
      },
    ]
  });
  }
}
