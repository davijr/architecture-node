import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortFutuMov, PortFutuMovId } from './PortFutuMov';
import type { PortFutuPos, PortFutuPosId } from './PortFutuPos';
import type { PortRepoMov, PortRepoMovId } from './PortRepoMov';
import type { PortRepoPos, PortRepoPosId } from './PortRepoPos';

export interface DomsCcpExposureTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsCcpExposureTypePk = "domain";
export type DomsCcpExposureTypeId = DomsCcpExposureType[DomsCcpExposureTypePk];
export type DomsCcpExposureTypeCreationAttributes = DomsCcpExposureTypeAttributes;

export class DomsCcpExposureType extends Model<DomsCcpExposureTypeAttributes, DomsCcpExposureTypeCreationAttributes> implements DomsCcpExposureTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsCcpExposureType hasMany PortFutuMov via ccpExposureType
  portFutuMovs!: PortFutuMov[];
  getPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removePortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removePortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCcpExposureType hasMany PortFutuPos via ccpExposureType
  portFutuPos!: PortFutuPos[];
  getPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removePortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removePortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCcpExposureType hasMany PortRepoMov via ccpExposureType
  portRepoMovs!: PortRepoMov[];
  getPortRepoMovs!: Sequelize.HasManyGetAssociationsMixin<PortRepoMov>;
  setPortRepoMovs!: Sequelize.HasManySetAssociationsMixin<PortRepoMov, PortRepoMovId>;
  addPortRepoMov!: Sequelize.HasManyAddAssociationMixin<PortRepoMov, PortRepoMovId>;
  addPortRepoMovs!: Sequelize.HasManyAddAssociationsMixin<PortRepoMov, PortRepoMovId>;
  createPortRepoMov!: Sequelize.HasManyCreateAssociationMixin<PortRepoMov>;
  removePortRepoMov!: Sequelize.HasManyRemoveAssociationMixin<PortRepoMov, PortRepoMovId>;
  removePortRepoMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoMov, PortRepoMovId>;
  hasPortRepoMov!: Sequelize.HasManyHasAssociationMixin<PortRepoMov, PortRepoMovId>;
  hasPortRepoMovs!: Sequelize.HasManyHasAssociationsMixin<PortRepoMov, PortRepoMovId>;
  countPortRepoMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCcpExposureType hasMany PortRepoPos via ccpExposureType
  portRepoPos!: PortRepoPos[];
  getPortRepoPos!: Sequelize.HasManyGetAssociationsMixin<PortRepoPos>;
  setPortRepoPos!: Sequelize.HasManySetAssociationsMixin<PortRepoPos, PortRepoPosId>;
  addPortRepoPo!: Sequelize.HasManyAddAssociationMixin<PortRepoPos, PortRepoPosId>;
  addPortRepoPos!: Sequelize.HasManyAddAssociationsMixin<PortRepoPos, PortRepoPosId>;
  createPortRepoPo!: Sequelize.HasManyCreateAssociationMixin<PortRepoPos>;
  removePortRepoPo!: Sequelize.HasManyRemoveAssociationMixin<PortRepoPos, PortRepoPosId>;
  removePortRepoPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoPos, PortRepoPosId>;
  hasPortRepoPo!: Sequelize.HasManyHasAssociationMixin<PortRepoPos, PortRepoPosId>;
  hasPortRepoPos!: Sequelize.HasManyHasAssociationsMixin<PortRepoPos, PortRepoPosId>;
  countPortRepoPos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsCcpExposureType {
    return DomsCcpExposureType.init({
    domain: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    domainDesc: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'domain_desc'
    }
  }, {
    sequelize,
    tableName: 'doms_ccp_exposure_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_ccp_exposure_type_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_ccp_exposure_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
