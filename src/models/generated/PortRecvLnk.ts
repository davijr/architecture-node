import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { PortRecvPos, PortRecvPosId } from './PortRecvPos';
import type { Product, ProductId } from './Product';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';

export interface PortRecvLnkAttributes {
  referenceDate: string;
  sourceSystem: string;
  companyCode: string;
  costCentre: string;
  productCode: string;
  receivablePoolRef: string;
  invptyCode: number;
  currencyCode: string;
  notional?: number;
  outstanding?: number;
  drawnAmount?: number;
  undrawnAmount?: number;
  tradeDate: string;
  assumeDilution: boolean;
  averageMaturity?: number;
}

export type PortRecvLnkPk = "referenceDate" | "sourceSystem" | "companyCode" | "costCentre" | "productCode" | "receivablePoolRef";
export type PortRecvLnkId = PortRecvLnk[PortRecvLnkPk];
export type PortRecvLnkOptionalAttributes = "notional" | "outstanding" | "drawnAmount" | "undrawnAmount" | "averageMaturity";
export type PortRecvLnkCreationAttributes = Optional<PortRecvLnkAttributes, PortRecvLnkOptionalAttributes>;

export class PortRecvLnk extends Model<PortRecvLnkAttributes, PortRecvLnkCreationAttributes> implements PortRecvLnkAttributes {
  referenceDate!: string;
  sourceSystem!: string;
  companyCode!: string;
  costCentre!: string;
  productCode!: string;
  receivablePoolRef!: string;
  invptyCode!: number;
  currencyCode!: string;
  notional?: number;
  outstanding?: number;
  drawnAmount?: number;
  undrawnAmount?: number;
  tradeDate!: string;
  assumeDilution!: boolean;
  averageMaturity?: number;

  // PortRecvLnk belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortRecvLnk belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortRecvLnk belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortRecvLnk hasMany PortRecvPos via productCode
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
  // PortRecvLnk hasMany PortRecvPos via receivablePoolRef
  receivablePoolRefPortRecvPos!: PortRecvPos[];
  getReceivablePoolRefPortRecvPos!: Sequelize.HasManyGetAssociationsMixin<PortRecvPos>;
  setReceivablePoolRefPortRecvPos!: Sequelize.HasManySetAssociationsMixin<PortRecvPos, PortRecvPosId>;
  addReceivablePoolRefPortRecvPo!: Sequelize.HasManyAddAssociationMixin<PortRecvPos, PortRecvPosId>;
  addReceivablePoolRefPortRecvPos!: Sequelize.HasManyAddAssociationsMixin<PortRecvPos, PortRecvPosId>;
  createReceivablePoolRefPortRecvPo!: Sequelize.HasManyCreateAssociationMixin<PortRecvPos>;
  removeReceivablePoolRefPortRecvPo!: Sequelize.HasManyRemoveAssociationMixin<PortRecvPos, PortRecvPosId>;
  removeReceivablePoolRefPortRecvPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvPos, PortRecvPosId>;
  hasReceivablePoolRefPortRecvPo!: Sequelize.HasManyHasAssociationMixin<PortRecvPos, PortRecvPosId>;
  hasReceivablePoolRefPortRecvPos!: Sequelize.HasManyHasAssociationsMixin<PortRecvPos, PortRecvPosId>;
  countReceivablePoolRefPortRecvPos!: Sequelize.HasManyCountAssociationsMixin;
  // PortRecvLnk hasMany PortRecvPos via referenceDate
  referenceDatePortRecvPos!: PortRecvPos[];
  getReferenceDatePortRecvPos!: Sequelize.HasManyGetAssociationsMixin<PortRecvPos>;
  setReferenceDatePortRecvPos!: Sequelize.HasManySetAssociationsMixin<PortRecvPos, PortRecvPosId>;
  addReferenceDatePortRecvPo!: Sequelize.HasManyAddAssociationMixin<PortRecvPos, PortRecvPosId>;
  addReferenceDatePortRecvPos!: Sequelize.HasManyAddAssociationsMixin<PortRecvPos, PortRecvPosId>;
  createReferenceDatePortRecvPo!: Sequelize.HasManyCreateAssociationMixin<PortRecvPos>;
  removeReferenceDatePortRecvPo!: Sequelize.HasManyRemoveAssociationMixin<PortRecvPos, PortRecvPosId>;
  removeReferenceDatePortRecvPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvPos, PortRecvPosId>;
  hasReferenceDatePortRecvPo!: Sequelize.HasManyHasAssociationMixin<PortRecvPos, PortRecvPosId>;
  hasReferenceDatePortRecvPos!: Sequelize.HasManyHasAssociationsMixin<PortRecvPos, PortRecvPosId>;
  countReferenceDatePortRecvPos!: Sequelize.HasManyCountAssociationsMixin;
  // PortRecvLnk hasMany PortRecvPos via sourceSystem
  sourceSystemPortRecvPos!: PortRecvPos[];
  getSourceSystemPortRecvPos!: Sequelize.HasManyGetAssociationsMixin<PortRecvPos>;
  setSourceSystemPortRecvPos!: Sequelize.HasManySetAssociationsMixin<PortRecvPos, PortRecvPosId>;
  addSourceSystemPortRecvPo!: Sequelize.HasManyAddAssociationMixin<PortRecvPos, PortRecvPosId>;
  addSourceSystemPortRecvPos!: Sequelize.HasManyAddAssociationsMixin<PortRecvPos, PortRecvPosId>;
  createSourceSystemPortRecvPo!: Sequelize.HasManyCreateAssociationMixin<PortRecvPos>;
  removeSourceSystemPortRecvPo!: Sequelize.HasManyRemoveAssociationMixin<PortRecvPos, PortRecvPosId>;
  removeSourceSystemPortRecvPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvPos, PortRecvPosId>;
  hasSourceSystemPortRecvPo!: Sequelize.HasManyHasAssociationMixin<PortRecvPos, PortRecvPosId>;
  hasSourceSystemPortRecvPos!: Sequelize.HasManyHasAssociationsMixin<PortRecvPos, PortRecvPosId>;
  countSourceSystemPortRecvPos!: Sequelize.HasManyCountAssociationsMixin;
  // PortRecvLnk hasMany PortRecvPos via companyCode
  companyCodePortRecvPos!: PortRecvPos[];
  getCompanyCodePortRecvPos!: Sequelize.HasManyGetAssociationsMixin<PortRecvPos>;
  setCompanyCodePortRecvPos!: Sequelize.HasManySetAssociationsMixin<PortRecvPos, PortRecvPosId>;
  addCompanyCodePortRecvPo!: Sequelize.HasManyAddAssociationMixin<PortRecvPos, PortRecvPosId>;
  addCompanyCodePortRecvPos!: Sequelize.HasManyAddAssociationsMixin<PortRecvPos, PortRecvPosId>;
  createCompanyCodePortRecvPo!: Sequelize.HasManyCreateAssociationMixin<PortRecvPos>;
  removeCompanyCodePortRecvPo!: Sequelize.HasManyRemoveAssociationMixin<PortRecvPos, PortRecvPosId>;
  removeCompanyCodePortRecvPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvPos, PortRecvPosId>;
  hasCompanyCodePortRecvPo!: Sequelize.HasManyHasAssociationMixin<PortRecvPos, PortRecvPosId>;
  hasCompanyCodePortRecvPos!: Sequelize.HasManyHasAssociationsMixin<PortRecvPos, PortRecvPosId>;
  countCompanyCodePortRecvPos!: Sequelize.HasManyCountAssociationsMixin;
  // PortRecvLnk hasMany PortRecvPos via costCentre
  costCentrePortRecvPos!: PortRecvPos[];
  getCostCentrePortRecvPos!: Sequelize.HasManyGetAssociationsMixin<PortRecvPos>;
  setCostCentrePortRecvPos!: Sequelize.HasManySetAssociationsMixin<PortRecvPos, PortRecvPosId>;
  addCostCentrePortRecvPo!: Sequelize.HasManyAddAssociationMixin<PortRecvPos, PortRecvPosId>;
  addCostCentrePortRecvPos!: Sequelize.HasManyAddAssociationsMixin<PortRecvPos, PortRecvPosId>;
  createCostCentrePortRecvPo!: Sequelize.HasManyCreateAssociationMixin<PortRecvPos>;
  removeCostCentrePortRecvPo!: Sequelize.HasManyRemoveAssociationMixin<PortRecvPos, PortRecvPosId>;
  removeCostCentrePortRecvPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvPos, PortRecvPosId>;
  hasCostCentrePortRecvPo!: Sequelize.HasManyHasAssociationMixin<PortRecvPos, PortRecvPosId>;
  hasCostCentrePortRecvPos!: Sequelize.HasManyHasAssociationsMixin<PortRecvPos, PortRecvPosId>;
  countCostCentrePortRecvPos!: Sequelize.HasManyCountAssociationsMixin;
  // PortRecvLnk belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortRecvLnk belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortRecvLnk belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortRecvLnk {
    return PortRecvLnk.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_external_system',
        key: 'source_system'
      },
      field: 'source_system'
    },
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'company_code'
    },
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'cost_centre'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'product_code'
      },
      field: 'product_code'
    },
    receivablePoolRef: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'receivable_pool_ref'
    },
    invptyCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_code'
    },
    currencyCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'currency_code'
    },
    notional: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    outstanding: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    drawnAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'drawn_amount'
    },
    undrawnAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'undrawn_amount'
    },
    tradeDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'trade_date'
    },
    assumeDilution: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'assume_dilution'
    },
    averageMaturity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'average_maturity'
    }
  }, {
    sequelize,
    tableName: 'port_recv_lnk',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_RECV_LNK",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "cost_centre" },
          { name: "product_code" },
          { name: "receivable_pool_ref" },
        ]
      },
      {
        name: "port_recv_lnk_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
