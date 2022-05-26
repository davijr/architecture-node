import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsClientProprietary, DomsClientProprietaryId } from './DomsClientProprietary';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { DomsServicingType, DomsServicingTypeId } from './DomsServicingType';
import type { DomsSubType, DomsSubTypeId } from './DomsSubType';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { PortNostroCsf, PortNostroCsfId } from './PortNostroCsf';
import type { Product, ProductId } from './Product';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortNostroPosAttributes {
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
  fundingProvider?: string;
  fundingRateType: string;
  fundingCurve: string;
  fundingCost?: number;
  fundingCcy: string;
}

export type PortNostroPosPk = "referenceDate" | "sourceSystem" | "productCode" | "accountReference" | "companyCode";
export type PortNostroPosId = PortNostroPos[PortNostroPosPk];
export type PortNostroPosOptionalAttributes = "outstanding" | "glValue" | "clientProprietary" | "protectedBalance" | "noticePeriod" | "operationalBalance" | "fundingProvider" | "fundingCost";
export type PortNostroPosCreationAttributes = Optional<PortNostroPosAttributes, PortNostroPosOptionalAttributes>;

export class PortNostroPos extends Model<PortNostroPosAttributes, PortNostroPosCreationAttributes> implements PortNostroPosAttributes {
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
  fundingProvider?: string;
  fundingRateType!: string;
  fundingCurve!: string;
  fundingCost?: number;
  fundingCcy!: string;

  // PortNostroPos belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortNostroPos belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortNostroPos belongsTo DomsClientProprietary via clientProprietary
  clientProprietaryDomsClientProprietary!: DomsClientProprietary;
  getClientProprietaryDomsClientProprietary!: Sequelize.BelongsToGetAssociationMixin<DomsClientProprietary>;
  setClientProprietaryDomsClientProprietary!: Sequelize.BelongsToSetAssociationMixin<DomsClientProprietary, DomsClientProprietaryId>;
  createClientProprietaryDomsClientProprietary!: Sequelize.BelongsToCreateAssociationMixin<DomsClientProprietary>;
  // PortNostroPos belongsTo DomsRateType via fundingRateType
  fundingRateTypeDomsRateType!: DomsRateType;
  getFundingRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setFundingRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createFundingRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortNostroPos belongsTo DomsServicingType via servicingType
  servicingTypeDomsServicingType!: DomsServicingType;
  getServicingTypeDomsServicingType!: Sequelize.BelongsToGetAssociationMixin<DomsServicingType>;
  setServicingTypeDomsServicingType!: Sequelize.BelongsToSetAssociationMixin<DomsServicingType, DomsServicingTypeId>;
  createServicingTypeDomsServicingType!: Sequelize.BelongsToCreateAssociationMixin<DomsServicingType>;
  // PortNostroPos belongsTo DomsSubType via subType
  subTypeDomsSubType!: DomsSubType;
  getSubTypeDomsSubType!: Sequelize.BelongsToGetAssociationMixin<DomsSubType>;
  setSubTypeDomsSubType!: Sequelize.BelongsToSetAssociationMixin<DomsSubType, DomsSubTypeId>;
  createSubTypeDomsSubType!: Sequelize.BelongsToCreateAssociationMixin<DomsSubType>;
  // PortNostroPos belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortNostroPos hasMany PortNostroCsf via companyCode
  portNostroCsfs!: PortNostroCsf[];
  getPortNostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortNostroCsf>;
  setPortNostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  addPortNostroCsf!: Sequelize.HasManyAddAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  addPortNostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  createPortNostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortNostroCsf>;
  removePortNostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  removePortNostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  hasPortNostroCsf!: Sequelize.HasManyHasAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  hasPortNostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  countPortNostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortNostroPos hasMany PortNostroCsf via contractReference
  contractReferencePortNostroCsfs!: PortNostroCsf[];
  getContractReferencePortNostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortNostroCsf>;
  setContractReferencePortNostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  addContractReferencePortNostroCsf!: Sequelize.HasManyAddAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  addContractReferencePortNostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  createContractReferencePortNostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortNostroCsf>;
  removeContractReferencePortNostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  removeContractReferencePortNostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  hasContractReferencePortNostroCsf!: Sequelize.HasManyHasAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  hasContractReferencePortNostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  countContractReferencePortNostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortNostroPos hasMany PortNostroCsf via productCode
  productCodePortNostroCsfs!: PortNostroCsf[];
  getProductCodePortNostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortNostroCsf>;
  setProductCodePortNostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  addProductCodePortNostroCsf!: Sequelize.HasManyAddAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  addProductCodePortNostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  createProductCodePortNostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortNostroCsf>;
  removeProductCodePortNostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  removeProductCodePortNostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  hasProductCodePortNostroCsf!: Sequelize.HasManyHasAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  hasProductCodePortNostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  countProductCodePortNostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortNostroPos hasMany PortNostroCsf via referenceDate
  referenceDatePortNostroCsfs!: PortNostroCsf[];
  getReferenceDatePortNostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortNostroCsf>;
  setReferenceDatePortNostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  addReferenceDatePortNostroCsf!: Sequelize.HasManyAddAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  addReferenceDatePortNostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  createReferenceDatePortNostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortNostroCsf>;
  removeReferenceDatePortNostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  removeReferenceDatePortNostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  hasReferenceDatePortNostroCsf!: Sequelize.HasManyHasAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  hasReferenceDatePortNostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  countReferenceDatePortNostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortNostroPos hasMany PortNostroCsf via sourceSystem
  sourceSystemPortNostroCsfs!: PortNostroCsf[];
  getSourceSystemPortNostroCsfs!: Sequelize.HasManyGetAssociationsMixin<PortNostroCsf>;
  setSourceSystemPortNostroCsfs!: Sequelize.HasManySetAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  addSourceSystemPortNostroCsf!: Sequelize.HasManyAddAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  addSourceSystemPortNostroCsfs!: Sequelize.HasManyAddAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  createSourceSystemPortNostroCsf!: Sequelize.HasManyCreateAssociationMixin<PortNostroCsf>;
  removeSourceSystemPortNostroCsf!: Sequelize.HasManyRemoveAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  removeSourceSystemPortNostroCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  hasSourceSystemPortNostroCsf!: Sequelize.HasManyHasAssociationMixin<PortNostroCsf, PortNostroCsfId>;
  hasSourceSystemPortNostroCsfs!: Sequelize.HasManyHasAssociationsMixin<PortNostroCsf, PortNostroCsfId>;
  countSourceSystemPortNostroCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortNostroPos belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortNostroPos belongsTo SysCurrency via fundingCcy
  fundingCcySysCurrency!: SysCurrency;
  getFundingCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setFundingCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createFundingCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortNostroPos belongsTo SysCurrency via glReportCcy
  glReportCcySysCurrency!: SysCurrency;
  getGlReportCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setGlReportCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createGlReportCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortNostroPos belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortNostroPos belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PortNostroPos belongsTo SysUnderlying via fundingCurve
  fundingCurveSysUnderlying!: SysUnderlying;
  getFundingCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFundingCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFundingCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortNostroPos {
    return PortNostroPos.init({
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
      allowNull: true,
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
    tableName: 'port_nostro_pos',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_NOSTRO_POS",
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
        name: "port_nostro_pos_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
