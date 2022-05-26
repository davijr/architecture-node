import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PnlGmplexClc, PnlGmplexClcId } from './PnlGmplexClc';
import type { PnlGmplexDet, PnlGmplexDetId } from './PnlGmplexDet';
import type { PortFincMov, PortFincMovId } from './PortFincMov';
import type { PortFincPos, PortFincPosId } from './PortFincPos';
import type { PortFutuMov, PortFutuMovId } from './PortFutuMov';
import type { PortFutuPos, PortFutuPosId } from './PortFutuPos';

export interface DomsLongShortAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsLongShortPk = "domain";
export type DomsLongShortId = DomsLongShort[DomsLongShortPk];
export type DomsLongShortCreationAttributes = DomsLongShortAttributes;

export class DomsLongShort extends Model<DomsLongShortAttributes, DomsLongShortCreationAttributes> implements DomsLongShortAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsLongShort hasMany PnlGmplexClc via riskLeg
  pnlGmplexClcs!: PnlGmplexClc[];
  getPnlGmplexClcs!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexClc>;
  setPnlGmplexClcs!: Sequelize.HasManySetAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  addPnlGmplexClc!: Sequelize.HasManyAddAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  addPnlGmplexClcs!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  createPnlGmplexClc!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexClc>;
  removePnlGmplexClc!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  removePnlGmplexClcs!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasPnlGmplexClc!: Sequelize.HasManyHasAssociationMixin<PnlGmplexClc, PnlGmplexClcId>;
  hasPnlGmplexClcs!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexClc, PnlGmplexClcId>;
  countPnlGmplexClcs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsLongShort hasMany PnlGmplexDet via riskLeg
  pnlGmplexDets!: PnlGmplexDet[];
  getPnlGmplexDets!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexDet>;
  setPnlGmplexDets!: Sequelize.HasManySetAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  addPnlGmplexDet!: Sequelize.HasManyAddAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  addPnlGmplexDets!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  createPnlGmplexDet!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexDet>;
  removePnlGmplexDet!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  removePnlGmplexDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasPnlGmplexDet!: Sequelize.HasManyHasAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasPnlGmplexDets!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  countPnlGmplexDets!: Sequelize.HasManyCountAssociationsMixin;
  // DomsLongShort hasMany PortFincMov via longShort
  portFincMovs!: PortFincMov[];
  getPortFincMovs!: Sequelize.HasManyGetAssociationsMixin<PortFincMov>;
  setPortFincMovs!: Sequelize.HasManySetAssociationsMixin<PortFincMov, PortFincMovId>;
  addPortFincMov!: Sequelize.HasManyAddAssociationMixin<PortFincMov, PortFincMovId>;
  addPortFincMovs!: Sequelize.HasManyAddAssociationsMixin<PortFincMov, PortFincMovId>;
  createPortFincMov!: Sequelize.HasManyCreateAssociationMixin<PortFincMov>;
  removePortFincMov!: Sequelize.HasManyRemoveAssociationMixin<PortFincMov, PortFincMovId>;
  removePortFincMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincMov, PortFincMovId>;
  hasPortFincMov!: Sequelize.HasManyHasAssociationMixin<PortFincMov, PortFincMovId>;
  hasPortFincMovs!: Sequelize.HasManyHasAssociationsMixin<PortFincMov, PortFincMovId>;
  countPortFincMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsLongShort hasMany PortFincPos via longShort
  portFincPos!: PortFincPos[];
  getPortFincPos!: Sequelize.HasManyGetAssociationsMixin<PortFincPos>;
  setPortFincPos!: Sequelize.HasManySetAssociationsMixin<PortFincPos, PortFincPosId>;
  addPortFincPo!: Sequelize.HasManyAddAssociationMixin<PortFincPos, PortFincPosId>;
  addPortFincPos!: Sequelize.HasManyAddAssociationsMixin<PortFincPos, PortFincPosId>;
  createPortFincPo!: Sequelize.HasManyCreateAssociationMixin<PortFincPos>;
  removePortFincPo!: Sequelize.HasManyRemoveAssociationMixin<PortFincPos, PortFincPosId>;
  removePortFincPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFincPos, PortFincPosId>;
  hasPortFincPo!: Sequelize.HasManyHasAssociationMixin<PortFincPos, PortFincPosId>;
  hasPortFincPos!: Sequelize.HasManyHasAssociationsMixin<PortFincPos, PortFincPosId>;
  countPortFincPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsLongShort hasMany PortFutuMov via longShort
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
  // DomsLongShort hasMany PortFutuPos via longShort
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsLongShort {
    return DomsLongShort.init({
    domain: {
      type: DataTypes.STRING(1),
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
    tableName: 'doms_long_short',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_long_short_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_long_short",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
