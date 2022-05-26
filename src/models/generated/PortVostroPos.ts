import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsClientProprietary, DomsClientProprietaryId } from './DomsClientProprietary';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { DomsServicingType, DomsServicingTypeId } from './DomsServicingType';
import type { DomsSubType, DomsSubTypeId } from './DomsSubType';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { PortVostroCsf, PortVostroCsfId } from './PortVostroCsf';
import type { Product, ProductId } from './Product';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortVostroPosAttributes {
  referenceDate: string;
  sourceSystem: string;
  productCode: string;
  accountReference: string;
  companyCode: string;
  costCentre: string;
  internalDeal: boolean;
  invptyCode: number;
  currencyCode: string;
  outstanding?: number;
  glValue?: number;
  glReportCcy: string;
  excludeFromNetting: boolean;
  maturityDate: string;
  subType: string;
  clientProprietary: string;
  protectedBalance?: number;
  legalWithdraw: boolean;
  noticePeriod?: number;
  underTsyControl: boolean;
  servicingType: string;
  operationalBalance?: number;
  fundingProvider: string;
  fundingRateType: string;
  fundingCurve: string;
  fundingCost?: number;
  fundingCcy: string;
}

export type PortVostroPosPk = "referenceDate" | "sourceSystem" | "productCode" | "accountReference" | "companyCode";
export type PortVostroPosId = PortVostroPos[PortVostroPosPk];
export type PortVostroPosOptionalAttributes = "outstanding" | "glValue" | "clientProprietary" | "protectedBalance" | "noticePeriod" | "operationalBalance" | "fundingCost";
export type PortVostroPosCreationAttributes = Optional<PortVostroPosAttributes, PortVostroPosOptionalAttributes>;

export class PortVostroPos extends Model<PortVostroPosAttributes, PortVostroPosCreationAttributes> implements PortVostroPosAttributes {
  referenceDate!: string;
  sourceSystem!: string;
  productCode!: string;
  accountReference!: string;
  companyCode!: string;
  costCentre!: string;
  internalDeal!: boolean;
  invptyCode!: number;
  currencyCode!: string;
  outstanding?: number;
  glValue?: number;
  glReportCcy!: string;
  excludeFromNetting!: boolean;
  maturityDate!: string;
  subType!: string;
  clientProprietary!: string;
  protectedBalance?: number;
  legalWithdraw!: boolean;
  noticePeriod?: number;
  underTsyControl!: boolean;
  servicingType!: string;
  operationalBalance?: number;
  fundingProvider!: string;
  fundingRateType!: string;
  fundingCurve!: string;
  fundingCost?: number;
  fundingCcy!: string;

  // PortVostroPos belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortVostroPos belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortVostroPos belongsTo CompanyCostCentre via fundingProvider
  fundingProviderCompanyCostCentre!: CompanyCostCentre;
  getFundingProviderCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setFundingProviderCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createFundingProviderCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortVostroPos belongsTo DomsClientProprietary via clientProprietary
  clientProprietaryDomsClientProprietary!: DomsClientProprietary;
  getClientProprietaryDomsClientProprietary!: Sequelize.BelongsToGetAssociationMixin<DomsClientProprietary>;
  setClientProprietaryDomsClientProprietary!: Sequelize.BelongsToSetAssociationMixin<DomsClientProprietary, DomsClientProprietaryId>;
  createClientProprietaryDomsClientProprietary!: Sequelize.BelongsToCreateAssociationMixin<DomsClientProprietary>;
  // PortVostroPos belongsTo DomsRateType via fundingRateType
  fundingRateTypeDomsRateType!: DomsRateType;
  getFundingRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setFundingRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createFundingRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortVostroPos belongsTo DomsServicingType via servicingType
  servicingTypeDomsServicingType!: DomsServicingType;
  getServicingTypeDomsServicingType!: Sequelize.BelongsToGetAssociationMixin<DomsServicingType>;
  setServicingTypeDomsServicingType!: Sequelize.BelongsToSetAssociationMixin<DomsServicingType, DomsServicingTypeId>;
  createServicingTypeDomsServicingType!: Sequelize.BelongsToCreateAssociationMixin<DomsServicingType>;
  // PortVostroPos belongsTo DomsSubType via subType
  subTypeDomsSubType!: DomsSubType;
  getSubTypeDomsSubType!: Sequelize.BelongsToGetAssociationMixin<DomsSubType>;
  setSubTypeDomsSubType!: Sequelize.BelongsToSetAssociationMixin<DomsSubType, DomsSubTypeId>;
  createSubTypeDomsSubType!: Sequelize.BelongsToCreateAssociationMixin<DomsSubType>;
  // PortVostroPos belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortVostroPos hasMany PortVostroCsf via companyCode
  portVostroCsfs!: PortVostroCsf[];
  getPortVostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortVostroCsf>;
  setPortVostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  addPortVostroCsf!: Sequelize.HasManyAddAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  addPortVostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  createPortVostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortVostroCsf>;
  removePortVostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  removePortVostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  hasPortVostroCsf!: Sequelize.HasManyHasAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  hasPortVostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  countPortVostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortVostroPos hasMany PortVostroCsf via contractReference
  contractReferencePortVostroCsfs!: PortVostroCsf[];
  getContractReferencePortVostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortVostroCsf>;
  setContractReferencePortVostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  addContractReferencePortVostroCsf!: Sequelize.HasManyAddAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  addContractReferencePortVostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  createContractReferencePortVostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortVostroCsf>;
  removeContractReferencePortVostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  removeContractReferencePortVostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  hasContractReferencePortVostroCsf!: Sequelize.HasManyHasAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  hasContractReferencePortVostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  countContractReferencePortVostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortVostroPos hasMany PortVostroCsf via productCode
  productCodePortVostroCsfs!: PortVostroCsf[];
  getProductCodePortVostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortVostroCsf>;
  setProductCodePortVostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  addProductCodePortVostroCsf!: Sequelize.HasManyAddAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  addProductCodePortVostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  createProductCodePortVostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortVostroCsf>;
  removeProductCodePortVostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  removeProductCodePortVostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  hasProductCodePortVostroCsf!: Sequelize.HasManyHasAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  hasProductCodePortVostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  countProductCodePortVostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortVostroPos hasMany PortVostroCsf via referenceDate
  referenceDatePortVostroCsfs!: PortVostroCsf[];
  getReferenceDatePortVostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortVostroCsf>;
  setReferenceDatePortVostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  addReferenceDatePortVostroCsf!: Sequelize.HasManyAddAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  addReferenceDatePortVostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  createReferenceDatePortVostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortVostroCsf>;
  removeReferenceDatePortVostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  removeReferenceDatePortVostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  hasReferenceDatePortVostroCsf!: Sequelize.HasManyHasAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  hasReferenceDatePortVostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  countReferenceDatePortVostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortVostroPos hasMany PortVostroCsf via sourceSystem
  sourceSystemPortVostroCsfs!: PortVostroCsf[];
  getSourceSystemPortVostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortVostroCsf>;
  setSourceSystemPortVostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  addSourceSystemPortVostroCsf!: Sequelize.HasManyAddAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  addSourceSystemPortVostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  createSourceSystemPortVostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortVostroCsf>;
  removeSourceSystemPortVostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  removeSourceSystemPortVostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  hasSourceSystemPortVostroCsf!: Sequelize.HasManyHasAssociationMixin<PortVostroCsf, PortVostroCsfId>;
  hasSourceSystemPortVostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortVostroCsf, PortVostroCsfId>;
  countSourceSystemPortVostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortVostroPos belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortVostroPos belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortVostroPos belongsTo SysCurrency via glReportCcy
  glReportCcySysCurrency!: SysCurrency;
  getGlReportCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setGlReportCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createGlReportCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortVostroPos belongsTo SysCurrency via fundingCcy
  fundingCcySysCurrency!: SysCurrency;
  getFundingCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setFundingCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createFundingCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortVostroPos belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PortVostroPos belongsTo SysUnderlying via fundingCurve
  fundingCurveSysUnderlying!: SysUnderlying;
  getFundingCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFundingCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFundingCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortVostroPos {
    return PortVostroPos.init({
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
    accountReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'account_reference'
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
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'cost_centre'
    },
    internalDeal: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'internal_deal'
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
    outstanding: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    glValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'gl_value'
    },
    glReportCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'gl_report_ccy'
    },
    excludeFromNetting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'exclude_from_netting'
    },
    maturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'maturity_date'
    },
    subType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_sub_type',
        key: 'domain'
      },
      field: 'sub_type'
    },
    clientProprietary: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "OWA",
      references: {
        model: 'doms_client_proprietary',
        key: 'domain'
      },
      field: 'client_proprietary'
    },
    protectedBalance: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'protected_balance'
    },
    legalWithdraw: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'legal_withdraw'
    },
    noticePeriod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'notice_period'
    },
    underTsyControl: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'under_tsy_control'
    },
    servicingType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_servicing_type',
        key: 'domain'
      },
      field: 'servicing_type'
    },
    operationalBalance: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'operational_balance'
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
      allowNull: true,
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
    tableName: 'port_vostro_pos',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_VOSTRO_POS",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_system" },
          { name: "product_code" },
          { name: "account_reference" },
          { name: "company_code" },
        ]
      },
      {
        name: "port_vostro_pos_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
