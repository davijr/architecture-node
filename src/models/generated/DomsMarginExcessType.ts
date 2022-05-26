import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortFincMov, PortFincMovId } from './PortFincMov';
import type { PortFincPos, PortFincPosId } from './PortFincPos';

export interface DomsMarginExcessTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsMarginExcessTypePk = "domain";
export type DomsMarginExcessTypeId = DomsMarginExcessType[DomsMarginExcessTypePk];
export type DomsMarginExcessTypeCreationAttributes = DomsMarginExcessTypeAttributes;

export class DomsMarginExcessType extends Model<DomsMarginExcessTypeAttributes, DomsMarginExcessTypeCreationAttributes> implements DomsMarginExcessTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsMarginExcessType hasMany PortFincMov via marginExcessType
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
  // DomsMarginExcessType hasMany PortFincPos via marginExcessType
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsMarginExcessType {
    return DomsMarginExcessType.init({
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
    tableName: 'doms_margin_excess_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_margin_excess_type_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_margin_excess_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
