import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsBankingTrading, DomsBankingTradingId } from './DomsBankingTrading';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { PortOtherCsf, PortOtherCsfId } from './PortOtherCsf';
import type { Product, ProductId } from './Product';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortOtherPosAttributes {
  referenceDate: string;
  sourceSystem: string;
  companyCode: string;
  productCode: string;
  contractReference: string;
  costCentre: string;
  invptyCode: number;
  maturityDate: string;
  bankingTrading: string;
  underlyingCode: string;
  currencyCode: string;
  outstanding?: number;
  repaymentRight: boolean;
  fundingProvider: string;
  fundingRateType: string;
  fundingCurve: string;
  fundingCost: number;
  fundingCcy: string;
}

export type PortOtherPosPk = "referenceDate" | "sourceSystem" | "companyCode" | "productCode" | "contractReference";
export type PortOtherPosId = PortOtherPos[PortOtherPosPk];
export type PortOtherPosOptionalAttributes = "outstanding";
export type PortOtherPosCreationAttributes = Optional<PortOtherPosAttributes, PortOtherPosOptionalAttributes>;

export class PortOtherPos extends Model<PortOtherPosAttributes, PortOtherPosCreationAttributes> implements PortOtherPosAttributes {
  referenceDate!: string;
  sourceSystem!: string;
  companyCode!: string;
  productCode!: string;
  contractReference!: string;
  costCentre!: string;
  invptyCode!: number;
  maturityDate!: string;
  bankingTrading!: string;
  underlyingCode!: string;
  currencyCode!: string;
  outstanding?: number;
  repaymentRight!: boolean;
  fundingProvider!: string;
  fundingRateType!: string;
  fundingCurve!: string;
  fundingCost!: number;
  fundingCcy!: string;

  // PortOtherPos belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortOtherPos belongsTo CompanyCostCentre via fundingProvider
  fundingProviderCompanyCostCentre!: CompanyCostCentre;
  getFundingProviderCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setFundingProviderCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createFundingProviderCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortOtherPos belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortOtherPos belongsTo DomsBankingTrading via bankingTrading
  bankingTradingDomsBankingTrading!: DomsBankingTrading;
  getBankingTradingDomsBankingTrading!: Sequelize.BelongsToGetAssociationMixin<DomsBankingTrading>;
  setBankingTradingDomsBankingTrading!: Sequelize.BelongsToSetAssociationMixin<DomsBankingTrading, DomsBankingTradingId>;
  createBankingTradingDomsBankingTrading!: Sequelize.BelongsToCreateAssociationMixin<DomsBankingTrading>;
  // PortOtherPos belongsTo DomsRateType via fundingRateType
  fundingRateTypeDomsRateType!: DomsRateType;
  getFundingRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setFundingRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createFundingRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortOtherPos belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortOtherPos hasMany PortOtherCsf via companyCode
  portOtherCsfs!: PortOtherCsf[];
  getPortOtherCsfs!: Sequelize.HasManyGetAssociationsMixin<PortOtherCsf>;
  setPortOtherCsfs!: Sequelize.HasManySetAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  addPortOtherCsf!: Sequelize.HasManyAddAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  addPortOtherCsfs!: Sequelize.HasManyAddAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  createPortOtherCsf!: Sequelize.HasManyCreateAssociationMixin<PortOtherCsf>;
  removePortOtherCsf!: Sequelize.HasManyRemoveAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  removePortOtherCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  hasPortOtherCsf!: Sequelize.HasManyHasAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  hasPortOtherCsfs!: Sequelize.HasManyHasAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  countPortOtherCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortOtherPos hasMany PortOtherCsf via contractReference
  contractReferencePortOtherCsfs!: PortOtherCsf[];
  getContractReferencePortOtherCsfs!: Sequelize.HasManyGetAssociationsMixin<PortOtherCsf>;
  setContractReferencePortOtherCsfs!: Sequelize.HasManySetAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  addContractReferencePortOtherCsf!: Sequelize.HasManyAddAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  addContractReferencePortOtherCsfs!: Sequelize.HasManyAddAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  createContractReferencePortOtherCsf!: Sequelize.HasManyCreateAssociationMixin<PortOtherCsf>;
  removeContractReferencePortOtherCsf!: Sequelize.HasManyRemoveAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  removeContractReferencePortOtherCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  hasContractReferencePortOtherCsf!: Sequelize.HasManyHasAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  hasContractReferencePortOtherCsfs!: Sequelize.HasManyHasAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  countContractReferencePortOtherCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortOtherPos hasMany PortOtherCsf via productCode
  productCodePortOtherCsfs!: PortOtherCsf[];
  getProductCodePortOtherCsfs!: Sequelize.HasManyGetAssociationsMixin<PortOtherCsf>;
  setProductCodePortOtherCsfs!: Sequelize.HasManySetAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  addProductCodePortOtherCsf!: Sequelize.HasManyAddAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  addProductCodePortOtherCsfs!: Sequelize.HasManyAddAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  createProductCodePortOtherCsf!: Sequelize.HasManyCreateAssociationMixin<PortOtherCsf>;
  removeProductCodePortOtherCsf!: Sequelize.HasManyRemoveAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  removeProductCodePortOtherCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  hasProductCodePortOtherCsf!: Sequelize.HasManyHasAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  hasProductCodePortOtherCsfs!: Sequelize.HasManyHasAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  countProductCodePortOtherCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortOtherPos hasMany PortOtherCsf via referenceDate
  referenceDatePortOtherCsfs!: PortOtherCsf[];
  getReferenceDatePortOtherCsfs!: Sequelize.HasManyGetAssociationsMixin<PortOtherCsf>;
  setReferenceDatePortOtherCsfs!: Sequelize.HasManySetAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  addReferenceDatePortOtherCsf!: Sequelize.HasManyAddAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  addReferenceDatePortOtherCsfs!: Sequelize.HasManyAddAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  createReferenceDatePortOtherCsf!: Sequelize.HasManyCreateAssociationMixin<PortOtherCsf>;
  removeReferenceDatePortOtherCsf!: Sequelize.HasManyRemoveAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  removeReferenceDatePortOtherCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  hasReferenceDatePortOtherCsf!: Sequelize.HasManyHasAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  hasReferenceDatePortOtherCsfs!: Sequelize.HasManyHasAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  countReferenceDatePortOtherCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortOtherPos hasMany PortOtherCsf via sourceSystem
  sourceSystemPortOtherCsfs!: PortOtherCsf[];
  getSourceSystemPortOtherCsfs!: Sequelize.HasManyGetAssociationsMixin<PortOtherCsf>;
  setSourceSystemPortOtherCsfs!: Sequelize.HasManySetAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  addSourceSystemPortOtherCsf!: Sequelize.HasManyAddAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  addSourceSystemPortOtherCsfs!: Sequelize.HasManyAddAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  createSourceSystemPortOtherCsf!: Sequelize.HasManyCreateAssociationMixin<PortOtherCsf>;
  removeSourceSystemPortOtherCsf!: Sequelize.HasManyRemoveAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  removeSourceSystemPortOtherCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  hasSourceSystemPortOtherCsf!: Sequelize.HasManyHasAssociationMixin<PortOtherCsf, PortOtherCsfId>;
  hasSourceSystemPortOtherCsfs!: Sequelize.HasManyHasAssociationsMixin<PortOtherCsf, PortOtherCsfId>;
  countSourceSystemPortOtherCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortOtherPos belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortOtherPos belongsTo SysCurrency via fundingCcy
  fundingCcySysCurrency!: SysCurrency;
  getFundingCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setFundingCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createFundingCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortOtherPos belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortOtherPos belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PortOtherPos belongsTo SysUnderlying via underlyingCode
  underlyingCodeSysUnderlying!: SysUnderlying;
  getUnderlyingCodeSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingCodeSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingCodeSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortOtherPos belongsTo SysUnderlying via fundingCurve
  fundingCurveSysUnderlying!: SysUnderlying;
  getFundingCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFundingCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFundingCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortOtherPos {
    return PortOtherPos.init({
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
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'contract_reference'
    },
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'cost_centre'
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
    maturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'maturity_date'
    },
    bankingTrading: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'doms_banking_trading',
        key: 'domain'
      },
      field: 'banking_trading'
    },
    underlyingCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'underlying_code'
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
    outstanding: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    repaymentRight: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'repayment_right'
    },
    fundingProvider: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'funding_provider'
    },
    fundingRateType: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'doms_rate_type',
        key: 'domain'
      },
      field: 'funding_rate_type'
    },
    fundingCurve: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'funding_curve'
    },
    fundingCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'funding_cost'
    },
    fundingCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'funding_ccy'
    }
  }, {
    sequelize,
    tableName: 'port_other_pos',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_OTHER_POS",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "product_code" },
          { name: "contract_reference" },
        ]
      },
      {
        name: "port_other_pos_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
