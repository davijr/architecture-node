import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortDsecMov, PortDsecMovId } from './PortDsecMov';
import type { PortDsecPos, PortDsecPosId } from './PortDsecPos';
import type { PortFctyMov, PortFctyMovId } from './PortFctyMov';
import type { PortFctyPos, PortFctyPosId } from './PortFctyPos';
import type { PortLoanMov, PortLoanMovId } from './PortLoanMov';
import type { PortLoanPos, PortLoanPosId } from './PortLoanPos';

export interface DomsCalcDayConventionAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsCalcDayConventionPk = "domain";
export type DomsCalcDayConventionId = DomsCalcDayConvention[DomsCalcDayConventionPk];
export type DomsCalcDayConventionCreationAttributes = DomsCalcDayConventionAttributes;

export class DomsCalcDayConvention extends Model<DomsCalcDayConventionAttributes, DomsCalcDayConventionCreationAttributes> implements DomsCalcDayConventionAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsCalcDayConvention hasMany PortDsecMov via calcDayConvention
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
  // DomsCalcDayConvention hasMany PortDsecMov via payDayConvention
  payDayConventionPortDsecMovs!: PortDsecMov[];
  getPayDayConventionPortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setPayDayConventionPortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addPayDayConventionPortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addPayDayConventionPortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createPayDayConventionPortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removePayDayConventionPortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removePayDayConventionPortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasPayDayConventionPortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasPayDayConventionPortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countPayDayConventionPortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcDayConvention hasMany PortDsecPos via calcDayConvention
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
  // DomsCalcDayConvention hasMany PortDsecPos via payDayConvention
  payDayConventionPortDsecPos!: PortDsecPos[];
  getPayDayConventionPortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setPayDayConventionPortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addPayDayConventionPortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addPayDayConventionPortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createPayDayConventionPortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removePayDayConventionPortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removePayDayConventionPortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasPayDayConventionPortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasPayDayConventionPortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countPayDayConventionPortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCalcDayConvention hasMany PortFctyMov via payDayConvention
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
  // DomsCalcDayConvention hasMany PortFctyPos via payDayConvention
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
  // DomsCalcDayConvention hasMany PortLoanMov via fixingDayConvention
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
  // DomsCalcDayConvention hasMany PortLoanPos via fixingDayConvention
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsCalcDayConvention {
    return DomsCalcDayConvention.init({
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
    tableName: 'doms_calc_day_convention',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_calc_day_convention_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_domscalcdayconvention",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
