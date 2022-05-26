import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PnlFeeincDet, PnlFeeincDetId } from './PnlFeeincDet';

export interface DomsCompoundTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsCompoundTypePk = "domain";
export type DomsCompoundTypeId = DomsCompoundType[DomsCompoundTypePk];
export type DomsCompoundTypeCreationAttributes = DomsCompoundTypeAttributes;

export class DomsCompoundType extends Model<DomsCompoundTypeAttributes, DomsCompoundTypeCreationAttributes> implements DomsCompoundTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsCompoundType hasMany PnlFeeincDet via feeCoumpoundCalculationType
  pnlFeeincDets!: PnlFeeincDet[];
  getPnlFeeincDets!: Sequelize.HasManyGetAssociationsMixin<PnlFeeincDet>;
  setPnlFeeincDets!: Sequelize.HasManySetAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  addPnlFeeincDet!: Sequelize.HasManyAddAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  addPnlFeeincDets!: Sequelize.HasManyAddAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  createPnlFeeincDet!: Sequelize.HasManyCreateAssociationMixin<PnlFeeincDet>;
  removePnlFeeincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  removePnlFeeincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasPnlFeeincDet!: Sequelize.HasManyHasAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasPnlFeeincDets!: Sequelize.HasManyHasAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  countPnlFeeincDets!: Sequelize.HasManyCountAssociationsMixin;
  // DomsCompoundType hasMany PnlFeeincDet via rateCompoundCalculationType
  rateCompoundCalculationTypePnlFeeincDets!: PnlFeeincDet[];
  getRateCompoundCalculationTypePnlFeeincDets!: Sequelize.HasManyGetAssociationsMixin<PnlFeeincDet>;
  setRateCompoundCalculationTypePnlFeeincDets!: Sequelize.HasManySetAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  addRateCompoundCalculationTypePnlFeeincDet!: Sequelize.HasManyAddAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  addRateCompoundCalculationTypePnlFeeincDets!: Sequelize.HasManyAddAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  createRateCompoundCalculationTypePnlFeeincDet!: Sequelize.HasManyCreateAssociationMixin<PnlFeeincDet>;
  removeRateCompoundCalculationTypePnlFeeincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  removeRateCompoundCalculationTypePnlFeeincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasRateCompoundCalculationTypePnlFeeincDet!: Sequelize.HasManyHasAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasRateCompoundCalculationTypePnlFeeincDets!: Sequelize.HasManyHasAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  countRateCompoundCalculationTypePnlFeeincDets!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsCompoundType {
    return DomsCompoundType.init({
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
    tableName: 'doms_compound_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "pk_doms_compound_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
