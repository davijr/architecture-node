import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortDsecMov, PortDsecMovId } from './PortDsecMov';
import type { PortDsecPos, PortDsecPosId } from './PortDsecPos';
import type { PortFctyMov, PortFctyMovId } from './PortFctyMov';
import type { PortFctyPos, PortFctyPosId } from './PortFctyPos';
import type { PortLoanMov, PortLoanMovId } from './PortLoanMov';
import type { PortLoanPos, PortLoanPosId } from './PortLoanPos';

export interface DomsTaxStatusAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsTaxStatusPk = "domain";
export type DomsTaxStatusId = DomsTaxStatus[DomsTaxStatusPk];
export type DomsTaxStatusCreationAttributes = DomsTaxStatusAttributes;

export class DomsTaxStatus extends Model<DomsTaxStatusAttributes, DomsTaxStatusCreationAttributes> implements DomsTaxStatusAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsTaxStatus hasMany PortDsecMov via interestIncomeTaxStatus
  portDsecMovs!: PortDsecMov[];
  getPortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setPortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addPortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addPortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createPortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removePortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removePortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasPortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasPortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countPortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsTaxStatus hasMany PortDsecPos via interestIncomeTaxStatus
  portDsecPos!: PortDsecPos[];
  getPortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setPortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addPortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addPortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createPortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removePortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removePortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasPortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasPortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countPortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsTaxStatus hasMany PortFctyMov via interestIncomeTaxStatus
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
  // DomsTaxStatus hasMany PortFctyPos via interestIncomeTaxStatus
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
  // DomsTaxStatus hasMany PortLoanMov via interestIncomeTaxStatus
  portLoanMovs!: PortLoanMov[];
  getPortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setPortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addPortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addPortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createPortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removePortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removePortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasPortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasPortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countPortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsTaxStatus hasMany PortLoanPos via interestIncomeTaxStatus
  portLoanPos!: PortLoanPos[];
  getPortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setPortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addPortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addPortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createPortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removePortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removePortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasPortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasPortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countPortLoanPos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsTaxStatus {
    return DomsTaxStatus.init({
    domain: {
      type: DataTypes.STRING(2),
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
    tableName: 'doms_tax_status',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_tax_status_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_tax_status",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
