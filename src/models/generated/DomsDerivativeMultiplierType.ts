import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortFoexMov, PortFoexMovId } from './PortFoexMov';
import type { PortFoexPos, PortFoexPosId } from './PortFoexPos';
import type { PortNdfsMov, PortNdfsMovId } from './PortNdfsMov';
import type { PortNdfsPos, PortNdfsPosId } from './PortNdfsPos';
import type { PortSwapMov, PortSwapMovId } from './PortSwapMov';
import type { PortSwapPos, PortSwapPosId } from './PortSwapPos';

export interface DomsDerivativeMultiplierTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsDerivativeMultiplierTypePk = "domain";
export type DomsDerivativeMultiplierTypeId = DomsDerivativeMultiplierType[DomsDerivativeMultiplierTypePk];
export type DomsDerivativeMultiplierTypeCreationAttributes = DomsDerivativeMultiplierTypeAttributes;

export class DomsDerivativeMultiplierType extends Model<DomsDerivativeMultiplierTypeAttributes, DomsDerivativeMultiplierTypeCreationAttributes> implements DomsDerivativeMultiplierTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsDerivativeMultiplierType hasMany PortFoexMov via multiplierTypeRecLeg
  portFoexMovs!: PortFoexMov[];
  getPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removePortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removePortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsDerivativeMultiplierType hasMany PortFoexMov via multiplierTypePayLeg
  multiplierTypePayLegPortFoexMovs!: PortFoexMov[];
  getMultiplierTypePayLegPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setMultiplierTypePayLegPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addMultiplierTypePayLegPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addMultiplierTypePayLegPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createMultiplierTypePayLegPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removeMultiplierTypePayLegPortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removeMultiplierTypePayLegPortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasMultiplierTypePayLegPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasMultiplierTypePayLegPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countMultiplierTypePayLegPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsDerivativeMultiplierType hasMany PortFoexPos via multiplierTypeRecLeg
  portFoexPos!: PortFoexPos[];
  getPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removePortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removePortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsDerivativeMultiplierType hasMany PortFoexPos via multiplierTypePayLeg
  multiplierTypePayLegPortFoexPos!: PortFoexPos[];
  getMultiplierTypePayLegPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setMultiplierTypePayLegPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addMultiplierTypePayLegPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addMultiplierTypePayLegPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createMultiplierTypePayLegPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removeMultiplierTypePayLegPortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removeMultiplierTypePayLegPortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasMultiplierTypePayLegPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasMultiplierTypePayLegPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countMultiplierTypePayLegPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsDerivativeMultiplierType hasMany PortNdfsMov via multiplierTypeRecLeg
  portNdfsMovs!: PortNdfsMov[];
  getPortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setPortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addPortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addPortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createPortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removePortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removePortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasPortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasPortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countPortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsDerivativeMultiplierType hasMany PortNdfsMov via multiplierTypePayLeg
  multiplierTypePayLegPortNdfsMovs!: PortNdfsMov[];
  getMultiplierTypePayLegPortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setMultiplierTypePayLegPortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addMultiplierTypePayLegPortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addMultiplierTypePayLegPortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createMultiplierTypePayLegPortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removeMultiplierTypePayLegPortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removeMultiplierTypePayLegPortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasMultiplierTypePayLegPortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasMultiplierTypePayLegPortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countMultiplierTypePayLegPortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsDerivativeMultiplierType hasMany PortNdfsPos via multiplierTypeRecLeg
  portNdfsPos!: PortNdfsPos[];
  getPortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setPortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addPortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addPortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createPortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removePortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removePortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasPortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasPortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countPortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsDerivativeMultiplierType hasMany PortNdfsPos via multiplierTypePayLeg
  multiplierTypePayLegPortNdfsPos!: PortNdfsPos[];
  getMultiplierTypePayLegPortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setMultiplierTypePayLegPortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addMultiplierTypePayLegPortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addMultiplierTypePayLegPortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createMultiplierTypePayLegPortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removeMultiplierTypePayLegPortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removeMultiplierTypePayLegPortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasMultiplierTypePayLegPortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasMultiplierTypePayLegPortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countMultiplierTypePayLegPortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsDerivativeMultiplierType hasMany PortSwapMov via multiplierTypeRecLeg
  portSwapMovs!: PortSwapMov[];
  getPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removePortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removePortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsDerivativeMultiplierType hasMany PortSwapMov via multiplierTypePayLeg
  multiplierTypePayLegPortSwapMovs!: PortSwapMov[];
  getMultiplierTypePayLegPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setMultiplierTypePayLegPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addMultiplierTypePayLegPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addMultiplierTypePayLegPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createMultiplierTypePayLegPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removeMultiplierTypePayLegPortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removeMultiplierTypePayLegPortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasMultiplierTypePayLegPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasMultiplierTypePayLegPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countMultiplierTypePayLegPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsDerivativeMultiplierType hasMany PortSwapPos via multiplierTypeRecLeg
  portSwapPos!: PortSwapPos[];
  getPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removePortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removePortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // DomsDerivativeMultiplierType hasMany PortSwapPos via multiplierTypePayLeg
  multiplierTypePayLegPortSwapPos!: PortSwapPos[];
  getMultiplierTypePayLegPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setMultiplierTypePayLegPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addMultiplierTypePayLegPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addMultiplierTypePayLegPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createMultiplierTypePayLegPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removeMultiplierTypePayLegPortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removeMultiplierTypePayLegPortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasMultiplierTypePayLegPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasMultiplierTypePayLegPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countMultiplierTypePayLegPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsDerivativeMultiplierType {
    return DomsDerivativeMultiplierType.init({
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
    tableName: 'doms_derivative_multiplier_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_derivative_multiplier_type_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_derivative_multiplier_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
