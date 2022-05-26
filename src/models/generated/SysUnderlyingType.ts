import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface SysUnderlyingTypeAttributes {
  underlyingType: string;
  underlyingTypeDescription?: string;
}

export type SysUnderlyingTypePk = "underlyingType";
export type SysUnderlyingTypeId = SysUnderlyingType[SysUnderlyingTypePk];
export type SysUnderlyingTypeOptionalAttributes = "underlyingTypeDescription";
export type SysUnderlyingTypeCreationAttributes = Optional<SysUnderlyingTypeAttributes, SysUnderlyingTypeOptionalAttributes>;

export class SysUnderlyingType extends Model<SysUnderlyingTypeAttributes, SysUnderlyingTypeCreationAttributes> implements SysUnderlyingTypeAttributes {
  underlyingType!: string;
  underlyingTypeDescription?: string;

  // SysUnderlyingType hasMany SysUnderlying via underlyingType
  sysUnderlyings!: SysUnderlying[];
  getSysUnderlyings!: Sequelize.HasManyGetAssociationsMixin<SysUnderlying>;
  setSysUnderlyings!: Sequelize.HasManySetAssociationsMixin<SysUnderlying, SysUnderlyingId>;
  addSysUnderlying!: Sequelize.HasManyAddAssociationMixin<SysUnderlying, SysUnderlyingId>;
  addSysUnderlyings!: Sequelize.HasManyAddAssociationsMixin<SysUnderlying, SysUnderlyingId>;
  createSysUnderlying!: Sequelize.HasManyCreateAssociationMixin<SysUnderlying>;
  removeSysUnderlying!: Sequelize.HasManyRemoveAssociationMixin<SysUnderlying, SysUnderlyingId>;
  removeSysUnderlyings!: Sequelize.HasManyRemoveAssociationsMixin<SysUnderlying, SysUnderlyingId>;
  hasSysUnderlying!: Sequelize.HasManyHasAssociationMixin<SysUnderlying, SysUnderlyingId>;
  hasSysUnderlyings!: Sequelize.HasManyHasAssociationsMixin<SysUnderlying, SysUnderlyingId>;
  countSysUnderlyings!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof SysUnderlyingType {
    return SysUnderlyingType.init({
    underlyingType: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
      field: 'underlying_type'
    },
    underlyingTypeDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'underlying_type_description'
    }
  }, {
    sequelize,
    tableName: 'sys_underlying_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-SYS_UNDERLYING_TYPE",
        unique: true,
        fields: [
          { name: "underlying_type" },
        ]
      },
    ]
  });
  }
}
