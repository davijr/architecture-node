import { globalInitAttributes } from '@config/database'
import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem'

export interface DomsSystemTypeAttributes {
  domain: string;
  domainDesc?: string;
}

export type DomsSystemTypePk = 'domain';
export type DomsSystemTypeId = DomsSystemType[DomsSystemTypePk];
export type DomsSystemTypeOptionalAttributes = 'domainDesc';
export type DomsSystemTypeCreationAttributes = Optional<DomsSystemTypeAttributes, DomsSystemTypeOptionalAttributes>;

export class DomsSystemType extends Model<DomsSystemTypeAttributes, DomsSystemTypeCreationAttributes> implements DomsSystemTypeAttributes {
  domain!: string;
  domainDesc?: string;

  // DomsSystemType hasMany SysExternalSystem via domsSystemTypeDomain
  sysExternalSystems!: SysExternalSystem[];
  getSysExternalSystems!: Sequelize.HasManyGetAssociationsMixin<SysExternalSystem>;
  setSysExternalSystems!: Sequelize.HasManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSysExternalSystem!: Sequelize.HasManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSysExternalSystems!: Sequelize.HasManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSysExternalSystem!: Sequelize.HasManyCreateAssociationMixin<SysExternalSystem>;
  removeSysExternalSystem!: Sequelize.HasManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSysExternalSystems!: Sequelize.HasManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSysExternalSystem!: Sequelize.HasManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSysExternalSystems!: Sequelize.HasManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSysExternalSystems!: Sequelize.HasManyCountAssociationsMixin;
  // DomsSystemType hasMany SysExternalSystem via systemType
  systemTypeSysExternalSystems!: SysExternalSystem[];
  getSystemTypeSysExternalSystems!: Sequelize.HasManyGetAssociationsMixin<SysExternalSystem>;
  setSystemTypeSysExternalSystems!: Sequelize.HasManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSystemTypeSysExternalSystem!: Sequelize.HasManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSystemTypeSysExternalSystems!: Sequelize.HasManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSystemTypeSysExternalSystem!: Sequelize.HasManyCreateAssociationMixin<SysExternalSystem>;
  removeSystemTypeSysExternalSystem!: Sequelize.HasManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSystemTypeSysExternalSystems!: Sequelize.HasManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSystemTypeSysExternalSystem!: Sequelize.HasManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSystemTypeSysExternalSystems!: Sequelize.HasManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSystemTypeSysExternalSystems!: Sequelize.HasManyCountAssociationsMixin;

  static initModel (sequelize: Sequelize.Sequelize): typeof DomsSystemType {
    return DomsSystemType.init({
      domain: {
        type: DataTypes.STRING(2),
        allowNull: false,
        primaryKey: true
      },
      domainDesc: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'domain_desc'
      }
    }, {
      sequelize,
      tableName: 'doms_system_type',
      schema: 'bzdf',
      timestamps: false,
      indexes: [
        {
          name: 'DomsSystemType_pkey',
          unique: true,
          fields: [
            { name: 'domain' }
          ]
        }
      ]
    })
  }
}
