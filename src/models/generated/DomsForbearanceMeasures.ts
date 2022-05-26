import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmGuarPos, CrmGuarPosId } from './CrmGuarPos';
import type { PortFctyMov, PortFctyMovId } from './PortFctyMov';
import type { PortFctyPos, PortFctyPosId } from './PortFctyPos';
import type { PortGuarMov, PortGuarMovId } from './PortGuarMov';
import type { PortGuarPos, PortGuarPosId } from './PortGuarPos';
import type { PortRecvMov, PortRecvMovId } from './PortRecvMov';
import type { PortRecvPos, PortRecvPosId } from './PortRecvPos';

export interface DomsForbearanceMeasuresAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsForbearanceMeasuresPk = "domain";
export type DomsForbearanceMeasuresId = DomsForbearanceMeasures[DomsForbearanceMeasuresPk];
export type DomsForbearanceMeasuresCreationAttributes = DomsForbearanceMeasuresAttributes;

export class DomsForbearanceMeasures extends Model<DomsForbearanceMeasuresAttributes, DomsForbearanceMeasuresCreationAttributes> implements DomsForbearanceMeasuresAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsForbearanceMeasures hasMany CrmGuarPos via forbearanceMeasures
  crmGuarPos!: CrmGuarPos[];
  getCrmGuarPos!: Sequelize.HasManyGetAssociationsMixin<CrmGuarPos>;
  setCrmGuarPos!: Sequelize.HasManySetAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  addCrmGuarPo!: Sequelize.HasManyAddAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  addCrmGuarPos!: Sequelize.HasManyAddAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  createCrmGuarPo!: Sequelize.HasManyCreateAssociationMixin<CrmGuarPos>;
  removeCrmGuarPo!: Sequelize.HasManyRemoveAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  removeCrmGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  hasCrmGuarPo!: Sequelize.HasManyHasAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  hasCrmGuarPos!: Sequelize.HasManyHasAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  countCrmGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsForbearanceMeasures hasMany PortFctyMov via forbearanceMeasures
  portFctyMovs!: PortFctyMov[];
  getPortFctyMovs!: Sequelize.HasManyGetAssociationsMixin<PortFctyMov>;
  setPortFctyMovs!: Sequelize.HasManySetAssociationsMixin<PortFctyMov, PortFctyMovId>;
  addPortFctyMov!: Sequelize.HasManyAddAssociationMixin<PortFctyMov, PortFctyMovId>;
  addPortFctyMovs!: Sequelize.HasManyAddAssociationsMixin<PortFctyMov, PortFctyMovId>;
  createPortFctyMov!: Sequelize.HasManyCreateAssociationMixin<PortFctyMov>;
  removePortFctyMov!: Sequelize.HasManyRemoveAssociationMixin<PortFctyMov, PortFctyMovId>;
  removePortFctyMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyMov, PortFctyMovId>;
  hasPortFctyMov!: Sequelize.HasManyHasAssociationMixin<PortFctyMov, PortFctyMovId>;
  hasPortFctyMovs!: Sequelize.HasManyHasAssociationsMixin<PortFctyMov, PortFctyMovId>;
  countPortFctyMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsForbearanceMeasures hasMany PortFctyPos via forbearanceMeasures
  portFctyPos!: PortFctyPos[];
  getPortFctyPos!: Sequelize.HasManyGetAssociationsMixin<PortFctyPos>;
  setPortFctyPos!: Sequelize.HasManySetAssociationsMixin<PortFctyPos, PortFctyPosId>;
  addPortFctyPo!: Sequelize.HasManyAddAssociationMixin<PortFctyPos, PortFctyPosId>;
  addPortFctyPos!: Sequelize.HasManyAddAssociationsMixin<PortFctyPos, PortFctyPosId>;
  createPortFctyPo!: Sequelize.HasManyCreateAssociationMixin<PortFctyPos>;
  removePortFctyPo!: Sequelize.HasManyRemoveAssociationMixin<PortFctyPos, PortFctyPosId>;
  removePortFctyPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyPos, PortFctyPosId>;
  hasPortFctyPo!: Sequelize.HasManyHasAssociationMixin<PortFctyPos, PortFctyPosId>;
  hasPortFctyPos!: Sequelize.HasManyHasAssociationsMixin<PortFctyPos, PortFctyPosId>;
  countPortFctyPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsForbearanceMeasures hasMany PortGuarMov via forbearanceMeasures
  portGuarMovs!: PortGuarMov[];
  getPortGuarMovs!: Sequelize.HasManyGetAssociationsMixin<PortGuarMov>;
  setPortGuarMovs!: Sequelize.HasManySetAssociationsMixin<PortGuarMov, PortGuarMovId>;
  addPortGuarMov!: Sequelize.HasManyAddAssociationMixin<PortGuarMov, PortGuarMovId>;
  addPortGuarMovs!: Sequelize.HasManyAddAssociationsMixin<PortGuarMov, PortGuarMovId>;
  createPortGuarMov!: Sequelize.HasManyCreateAssociationMixin<PortGuarMov>;
  removePortGuarMov!: Sequelize.HasManyRemoveAssociationMixin<PortGuarMov, PortGuarMovId>;
  removePortGuarMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarMov, PortGuarMovId>;
  hasPortGuarMov!: Sequelize.HasManyHasAssociationMixin<PortGuarMov, PortGuarMovId>;
  hasPortGuarMovs!: Sequelize.HasManyHasAssociationsMixin<PortGuarMov, PortGuarMovId>;
  countPortGuarMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsForbearanceMeasures hasMany PortGuarPos via forbearanceMeasures
  portGuarPos!: PortGuarPos[];
  getPortGuarPos!: Sequelize.HasManyGetAssociationsMixin<PortGuarPos>;
  setPortGuarPos!: Sequelize.HasManySetAssociationsMixin<PortGuarPos, PortGuarPosId>;
  addPortGuarPo!: Sequelize.HasManyAddAssociationMixin<PortGuarPos, PortGuarPosId>;
  addPortGuarPos!: Sequelize.HasManyAddAssociationsMixin<PortGuarPos, PortGuarPosId>;
  createPortGuarPo!: Sequelize.HasManyCreateAssociationMixin<PortGuarPos>;
  removePortGuarPo!: Sequelize.HasManyRemoveAssociationMixin<PortGuarPos, PortGuarPosId>;
  removePortGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarPos, PortGuarPosId>;
  hasPortGuarPo!: Sequelize.HasManyHasAssociationMixin<PortGuarPos, PortGuarPosId>;
  hasPortGuarPos!: Sequelize.HasManyHasAssociationsMixin<PortGuarPos, PortGuarPosId>;
  countPortGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsForbearanceMeasures hasMany PortRecvMov via forbearanceMeasures
  portRecvMovs!: PortRecvMov[];
  getPortRecvMovs!: Sequelize.HasManyGetAssociationsMixin<PortRecvMov>;
  setPortRecvMovs!: Sequelize.HasManySetAssociationsMixin<PortRecvMov, PortRecvMovId>;
  addPortRecvMov!: Sequelize.HasManyAddAssociationMixin<PortRecvMov, PortRecvMovId>;
  addPortRecvMovs!: Sequelize.HasManyAddAssociationsMixin<PortRecvMov, PortRecvMovId>;
  createPortRecvMov!: Sequelize.HasManyCreateAssociationMixin<PortRecvMov>;
  removePortRecvMov!: Sequelize.HasManyRemoveAssociationMixin<PortRecvMov, PortRecvMovId>;
  removePortRecvMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvMov, PortRecvMovId>;
  hasPortRecvMov!: Sequelize.HasManyHasAssociationMixin<PortRecvMov, PortRecvMovId>;
  hasPortRecvMovs!: Sequelize.HasManyHasAssociationsMixin<PortRecvMov, PortRecvMovId>;
  countPortRecvMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsForbearanceMeasures hasMany PortRecvPos via forbearanceMeasures
  portRecvPos!: PortRecvPos[];
  getPortRecvPos!: Sequelize.HasManyGetAssociationsMixin<PortRecvPos>;
  setPortRecvPos!: Sequelize.HasManySetAssociationsMixin<PortRecvPos, PortRecvPosId>;
  addPortRecvPo!: Sequelize.HasManyAddAssociationMixin<PortRecvPos, PortRecvPosId>;
  addPortRecvPos!: Sequelize.HasManyAddAssociationsMixin<PortRecvPos, PortRecvPosId>;
  createPortRecvPo!: Sequelize.HasManyCreateAssociationMixin<PortRecvPos>;
  removePortRecvPo!: Sequelize.HasManyRemoveAssociationMixin<PortRecvPos, PortRecvPosId>;
  removePortRecvPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvPos, PortRecvPosId>;
  hasPortRecvPo!: Sequelize.HasManyHasAssociationMixin<PortRecvPos, PortRecvPosId>;
  hasPortRecvPos!: Sequelize.HasManyHasAssociationsMixin<PortRecvPos, PortRecvPosId>;
  countPortRecvPos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsForbearanceMeasures {
    return DomsForbearanceMeasures.init({
    domain: {
      type: DataTypes.STRING(3),
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
    tableName: 'doms_forbearance_measures',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_forbearance_measures_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_forbearance_measures",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
