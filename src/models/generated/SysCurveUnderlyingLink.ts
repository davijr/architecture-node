import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SysCurve, SysCurveId } from './SysCurve';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface SysCurveUnderlyingLinkAttributes {
  linkid: number;
  underlyingCode: string;
  curveName: string;
}

export type SysCurveUnderlyingLinkPk = "linkid";
export type SysCurveUnderlyingLinkId = SysCurveUnderlyingLink[SysCurveUnderlyingLinkPk];
export type SysCurveUnderlyingLinkOptionalAttributes = "linkid";
export type SysCurveUnderlyingLinkCreationAttributes = Optional<SysCurveUnderlyingLinkAttributes, SysCurveUnderlyingLinkOptionalAttributes>;

export class SysCurveUnderlyingLink extends Model<SysCurveUnderlyingLinkAttributes, SysCurveUnderlyingLinkCreationAttributes> implements SysCurveUnderlyingLinkAttributes {
  linkid!: number;
  underlyingCode!: string;
  curveName!: string;

  // SysCurveUnderlyingLink belongsTo SysCurve via curveName
  curveNameSysCurve!: SysCurve;
  getCurveNameSysCurve!: Sequelize.BelongsToGetAssociationMixin<SysCurve>;
  setCurveNameSysCurve!: Sequelize.BelongsToSetAssociationMixin<SysCurve, SysCurveId>;
  createCurveNameSysCurve!: Sequelize.BelongsToCreateAssociationMixin<SysCurve>;
  // SysCurveUnderlyingLink belongsTo SysUnderlying via underlyingCode
  underlyingCodeSysUnderlying!: SysUnderlying;
  getUnderlyingCodeSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingCodeSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingCodeSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SysCurveUnderlyingLink {
    return SysCurveUnderlyingLink.init({
    linkid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    underlyingCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'underlying_code'
    },
    curveName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_curve',
        key: 'curve_name'
      },
      field: 'curve_name'
    }
  }, {
    sequelize,
    tableName: 'sys_curve_underlying_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-SYS_CURVE_UNDERLYING_LINK",
        unique: true,
        fields: [
          { name: "curve_name" },
          { name: "underlying_code" },
        ]
      },
      {
        name: "PK-SYS_CURVE_UNDERLYING_LINK",
        unique: true,
        fields: [
          { name: "linkid" },
        ]
      },
    ]
  });
  }
}
