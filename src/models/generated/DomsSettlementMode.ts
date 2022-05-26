import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortFutuMov, PortFutuMovId } from './PortFutuMov';
import type { PortFutuPos, PortFutuPosId } from './PortFutuPos';

export interface DomsSettlementModeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsSettlementModePk = "domain";
export type DomsSettlementModeId = DomsSettlementMode[DomsSettlementModePk];
export type DomsSettlementModeCreationAttributes = DomsSettlementModeAttributes;

export class DomsSettlementMode extends Model<DomsSettlementModeAttributes, DomsSettlementModeCreationAttributes> implements DomsSettlementModeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsSettlementMode hasMany PortFutuMov via futureStlm
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
  // DomsSettlementMode hasMany PortFutuPos via futureStlm
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsSettlementMode {
    return DomsSettlementMode.init({
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
    tableName: 'doms_settlement_mode',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_settlement_mode_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_settlement_mode",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
