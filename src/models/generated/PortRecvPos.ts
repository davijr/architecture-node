import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsForbearanceMeasures, DomsForbearanceMeasuresId } from './DomsForbearanceMeasures';
import type { DomsGlClass, DomsGlClassId } from './DomsGlClass';
import type { DomsPerformingStatus, DomsPerformingStatusId } from './DomsPerformingStatus';
import type { DomsRateType, DomsRateTypeId } from './DomsRateType';
import type { DomsSeniority, DomsSeniorityId } from './DomsSeniority';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { PortRecvCsf, PortRecvCsfId } from './PortRecvCsf';
import type { PortRecvLnk, PortRecvLnkId } from './PortRecvLnk';
import type { SysCountry, SysCountryId } from './SysCountry';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortRecvPosAttributes {
  referenceDate: string;
  sourceSystem: string;
  productCode: string;
  receivablePoolRef: string;
  contractReference: string;
  invptyCode: number;
  companyCode: string;
  costCentre: string;
  currencyCode: string;
  notional: number;
  drawnAmount: number;
  undrawnAmount: number;
  accrual: number;
  outstanding: number;
  marketValue: number;
  recourse: boolean;
  discountRateCurve: string;
  discountRate: number;
  originalCreditSpread?: number;
  actualCreditSpread?: number;
  revolving: boolean;
  seniority: string;
  performingStatus: string;
  glClass: string;
  tradeDate: string;
  startDate: string;
  maturityDate: string;
  assumeDilution: boolean;
  originationCountry: string;
  defaultInvptyContagion: boolean;
  repaymentRight: boolean;
  defaultDate?: string;
  purchasedInDefault: boolean;
  pastDueDays?: number;
  pastDueInstallments: number;
  forbearanceMeasures: string;
  forbearanceDate?: string;
  recoveriesSinceDefault: number;
  fundingProvider?: string;
  fundingRateType: string;
  fundingCurve: string;
  fundingCost: number;
  fundingCcy: string;
  intermCostPayDate?: string;
  intermCostValue?: number;
  intermCostRate?: number;
  intermCostAccrual?: number;
}

export type PortRecvPosPk = "referenceDate" | "sourceSystem" | "productCode" | "receivablePoolRef" | "contractReference";
export type PortRecvPosId = PortRecvPos[PortRecvPosPk];
export type PortRecvPosOptionalAttributes = "originalCreditSpread" | "actualCreditSpread" | "performingStatus" | "defaultDate" | "pastDueDays" | "forbearanceDate" | "fundingProvider" | "intermCostPayDate" | "intermCostValue" | "intermCostRate" | "intermCostAccrual";
export type PortRecvPosCreationAttributes = Optional<PortRecvPosAttributes, PortRecvPosOptionalAttributes>;

export class PortRecvPos extends Model<PortRecvPosAttributes, PortRecvPosCreationAttributes> implements PortRecvPosAttributes {
  referenceDate!: string;
  sourceSystem!: string;
  productCode!: string;
  receivablePoolRef!: string;
  contractReference!: string;
  invptyCode!: number;
  companyCode!: string;
  costCentre!: string;
  currencyCode!: string;
  notional!: number;
  drawnAmount!: number;
  undrawnAmount!: number;
  accrual!: number;
  outstanding!: number;
  marketValue!: number;
  recourse!: boolean;
  discountRateCurve!: string;
  discountRate!: number;
  originalCreditSpread?: number;
  actualCreditSpread?: number;
  revolving!: boolean;
  seniority!: string;
  performingStatus!: string;
  glClass!: string;
  tradeDate!: string;
  startDate!: string;
  maturityDate!: string;
  assumeDilution!: boolean;
  originationCountry!: string;
  defaultInvptyContagion!: boolean;
  repaymentRight!: boolean;
  defaultDate?: string;
  purchasedInDefault!: boolean;
  pastDueDays?: number;
  pastDueInstallments!: number;
  forbearanceMeasures!: string;
  forbearanceDate?: string;
  recoveriesSinceDefault!: number;
  fundingProvider?: string;
  fundingRateType!: string;
  fundingCurve!: string;
  fundingCost!: number;
  fundingCcy!: string;
  intermCostPayDate?: string;
  intermCostValue?: number;
  intermCostRate?: number;
  intermCostAccrual?: number;

  // PortRecvPos belongsTo DomsForbearanceMeasures via forbearanceMeasures
  forbearanceMeasuresDomsForbearanceMeasure!: DomsForbearanceMeasures;
  getForbearanceMeasuresDomsForbearanceMeasure!: Sequelize.BelongsToGetAssociationMixin<DomsForbearanceMeasures>;
  setForbearanceMeasuresDomsForbearanceMeasure!: Sequelize.BelongsToSetAssociationMixin<DomsForbearanceMeasures, DomsForbearanceMeasuresId>;
  createForbearanceMeasuresDomsForbearanceMeasure!: Sequelize.BelongsToCreateAssociationMixin<DomsForbearanceMeasures>;
  // PortRecvPos belongsTo DomsGlClass via glClass
  glClassDomsGlClass!: DomsGlClass;
  getGlClassDomsGlClass!: Sequelize.BelongsToGetAssociationMixin<DomsGlClass>;
  setGlClassDomsGlClass!: Sequelize.BelongsToSetAssociationMixin<DomsGlClass, DomsGlClassId>;
  createGlClassDomsGlClass!: Sequelize.BelongsToCreateAssociationMixin<DomsGlClass>;
  // PortRecvPos belongsTo DomsPerformingStatus via performingStatus
  performingStatusDomsPerformingStatus!: DomsPerformingStatus;
  getPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToGetAssociationMixin<DomsPerformingStatus>;
  setPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToSetAssociationMixin<DomsPerformingStatus, DomsPerformingStatusId>;
  createPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToCreateAssociationMixin<DomsPerformingStatus>;
  // PortRecvPos belongsTo DomsRateType via fundingRateType
  fundingRateTypeDomsRateType!: DomsRateType;
  getFundingRateTypeDomsRateType!: Sequelize.BelongsToGetAssociationMixin<DomsRateType>;
  setFundingRateTypeDomsRateType!: Sequelize.BelongsToSetAssociationMixin<DomsRateType, DomsRateTypeId>;
  createFundingRateTypeDomsRateType!: Sequelize.BelongsToCreateAssociationMixin<DomsRateType>;
  // PortRecvPos belongsTo DomsSeniority via seniority
  seniorityDomsSeniority!: DomsSeniority;
  getSeniorityDomsSeniority!: Sequelize.BelongsToGetAssociationMixin<DomsSeniority>;
  setSeniorityDomsSeniority!: Sequelize.BelongsToSetAssociationMixin<DomsSeniority, DomsSeniorityId>;
  createSeniorityDomsSeniority!: Sequelize.BelongsToCreateAssociationMixin<DomsSeniority>;
  // PortRecvPos belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortRecvPos belongsTo PortRecvLnk via productCode
  productCodePortRecvLnk!: PortRecvLnk;
  getProductCodePortRecvLnk!: Sequelize.BelongsToGetAssociationMixin<PortRecvLnk>;
  setProductCodePortRecvLnk!: Sequelize.BelongsToSetAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  createProductCodePortRecvLnk!: Sequelize.BelongsToCreateAssociationMixin<PortRecvLnk>;
  // PortRecvPos belongsTo PortRecvLnk via receivablePoolRef
  receivablePoolRefPortRecvLnk!: PortRecvLnk;
  getReceivablePoolRefPortRecvLnk!: Sequelize.BelongsToGetAssociationMixin<PortRecvLnk>;
  setReceivablePoolRefPortRecvLnk!: Sequelize.BelongsToSetAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  createReceivablePoolRefPortRecvLnk!: Sequelize.BelongsToCreateAssociationMixin<PortRecvLnk>;
  // PortRecvPos belongsTo PortRecvLnk via referenceDate
  referenceDatePortRecvLnk!: PortRecvLnk;
  getReferenceDatePortRecvLnk!: Sequelize.BelongsToGetAssociationMixin<PortRecvLnk>;
  setReferenceDatePortRecvLnk!: Sequelize.BelongsToSetAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  createReferenceDatePortRecvLnk!: Sequelize.BelongsToCreateAssociationMixin<PortRecvLnk>;
  // PortRecvPos belongsTo PortRecvLnk via sourceSystem
  sourceSystemPortRecvLnk!: PortRecvLnk;
  getSourceSystemPortRecvLnk!: Sequelize.BelongsToGetAssociationMixin<PortRecvLnk>;
  setSourceSystemPortRecvLnk!: Sequelize.BelongsToSetAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  createSourceSystemPortRecvLnk!: Sequelize.BelongsToCreateAssociationMixin<PortRecvLnk>;
  // PortRecvPos belongsTo PortRecvLnk via companyCode
  companyCodePortRecvLnk!: PortRecvLnk;
  getCompanyCodePortRecvLnk!: Sequelize.BelongsToGetAssociationMixin<PortRecvLnk>;
  setCompanyCodePortRecvLnk!: Sequelize.BelongsToSetAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  createCompanyCodePortRecvLnk!: Sequelize.BelongsToCreateAssociationMixin<PortRecvLnk>;
  // PortRecvPos belongsTo PortRecvLnk via costCentre
  costCentrePortRecvLnk!: PortRecvLnk;
  getCostCentrePortRecvLnk!: Sequelize.BelongsToGetAssociationMixin<PortRecvLnk>;
  setCostCentrePortRecvLnk!: Sequelize.BelongsToSetAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  createCostCentrePortRecvLnk!: Sequelize.BelongsToCreateAssociationMixin<PortRecvLnk>;
  // PortRecvPos hasMany PortRecvCsf via cashFlowReference
  portRecvCsfs!: PortRecvCsf[];
  getPortRecvCsfs!: Sequelize.HasManyGetAssociationsMixin<PortRecvCsf>;
  setPortRecvCsfs!: Sequelize.HasManySetAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  addPortRecvCsf!: Sequelize.HasManyAddAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  addPortRecvCsfs!: Sequelize.HasManyAddAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  createPortRecvCsf!: Sequelize.HasManyCreateAssociationMixin<PortRecvCsf>;
  removePortRecvCsf!: Sequelize.HasManyRemoveAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  removePortRecvCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  hasPortRecvCsf!: Sequelize.HasManyHasAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  hasPortRecvCsfs!: Sequelize.HasManyHasAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  countPortRecvCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortRecvPos hasMany PortRecvCsf via contractReference
  contractReferencePortRecvCsfs!: PortRecvCsf[];
  getContractReferencePortRecvCsfs!: Sequelize.HasManyGetAssociationsMixin<PortRecvCsf>;
  setContractReferencePortRecvCsfs!: Sequelize.HasManySetAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  addContractReferencePortRecvCsf!: Sequelize.HasManyAddAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  addContractReferencePortRecvCsfs!: Sequelize.HasManyAddAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  createContractReferencePortRecvCsf!: Sequelize.HasManyCreateAssociationMixin<PortRecvCsf>;
  removeContractReferencePortRecvCsf!: Sequelize.HasManyRemoveAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  removeContractReferencePortRecvCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  hasContractReferencePortRecvCsf!: Sequelize.HasManyHasAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  hasContractReferencePortRecvCsfs!: Sequelize.HasManyHasAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  countContractReferencePortRecvCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortRecvPos hasMany PortRecvCsf via productCode
  productCodePortRecvCsfs!: PortRecvCsf[];
  getProductCodePortRecvCsfs!: Sequelize.HasManyGetAssociationsMixin<PortRecvCsf>;
  setProductCodePortRecvCsfs!: Sequelize.HasManySetAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  addProductCodePortRecvCsf!: Sequelize.HasManyAddAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  addProductCodePortRecvCsfs!: Sequelize.HasManyAddAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  createProductCodePortRecvCsf!: Sequelize.HasManyCreateAssociationMixin<PortRecvCsf>;
  removeProductCodePortRecvCsf!: Sequelize.HasManyRemoveAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  removeProductCodePortRecvCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  hasProductCodePortRecvCsf!: Sequelize.HasManyHasAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  hasProductCodePortRecvCsfs!: Sequelize.HasManyHasAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  countProductCodePortRecvCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortRecvPos hasMany PortRecvCsf via referenceDate
  referenceDatePortRecvCsfs!: PortRecvCsf[];
  getReferenceDatePortRecvCsfs!: Sequelize.HasManyGetAssociationsMixin<PortRecvCsf>;
  setReferenceDatePortRecvCsfs!: Sequelize.HasManySetAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  addReferenceDatePortRecvCsf!: Sequelize.HasManyAddAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  addReferenceDatePortRecvCsfs!: Sequelize.HasManyAddAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  createReferenceDatePortRecvCsf!: Sequelize.HasManyCreateAssociationMixin<PortRecvCsf>;
  removeReferenceDatePortRecvCsf!: Sequelize.HasManyRemoveAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  removeReferenceDatePortRecvCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  hasReferenceDatePortRecvCsf!: Sequelize.HasManyHasAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  hasReferenceDatePortRecvCsfs!: Sequelize.HasManyHasAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  countReferenceDatePortRecvCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortRecvPos hasMany PortRecvCsf via sourceSystem
  sourceSystemPortRecvCsfs!: PortRecvCsf[];
  getSourceSystemPortRecvCsfs!: Sequelize.HasManyGetAssociationsMixin<PortRecvCsf>;
  setSourceSystemPortRecvCsfs!: Sequelize.HasManySetAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  addSourceSystemPortRecvCsf!: Sequelize.HasManyAddAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  addSourceSystemPortRecvCsfs!: Sequelize.HasManyAddAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  createSourceSystemPortRecvCsf!: Sequelize.HasManyCreateAssociationMixin<PortRecvCsf>;
  removeSourceSystemPortRecvCsf!: Sequelize.HasManyRemoveAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  removeSourceSystemPortRecvCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  hasSourceSystemPortRecvCsf!: Sequelize.HasManyHasAssociationMixin<PortRecvCsf, PortRecvCsfId>;
  hasSourceSystemPortRecvCsfs!: Sequelize.HasManyHasAssociationsMixin<PortRecvCsf, PortRecvCsfId>;
  countSourceSystemPortRecvCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PortRecvPos belongsTo SysCountry via originationCountry
  originationCountrySysCountry!: SysCountry;
  getOriginationCountrySysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setOriginationCountrySysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createOriginationCountrySysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;
  // PortRecvPos belongsTo SysCurrency via fundingCcy
  fundingCcySysCurrency!: SysCurrency;
  getFundingCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setFundingCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createFundingCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortRecvPos belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortRecvPos belongsTo SysUnderlying via fundingCurve
  fundingCurveSysUnderlying!: SysUnderlying;
  getFundingCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFundingCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFundingCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortRecvPos belongsTo SysUnderlying via discountRateCurve
  discountRateCurveSysUnderlying!: SysUnderlying;
  getDiscountRateCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setDiscountRateCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createDiscountRateCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortRecvPos {
    return PortRecvPos.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_recv_lnk',
        key: 'source_system'
      },
      field: 'reference_date'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_recv_lnk',
        key: 'source_system'
      },
      field: 'source_system'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_recv_lnk',
        key: 'source_system'
      },
      field: 'product_code'
    },
    receivablePoolRef: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_recv_lnk',
        key: 'source_system'
      },
      field: 'receivable_pool_ref'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'contract_reference'
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
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      references: {
        model: 'port_recv_lnk',
        key: 'source_system'
      },
      field: 'company_code'
    },
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'port_recv_lnk',
        key: 'source_system'
      },
      field: 'cost_centre'
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
      allowNull: false
    },
    drawnAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'drawn_amount'
    },
    undrawnAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'undrawn_amount'
    },
    accrual: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    outstanding: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    marketValue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'market_value'
    },
    recourse: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    discountRateCurve: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'discount_rate_curve'
    },
    discountRate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'discount_rate'
    },
    originalCreditSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'original_credit_spread'
    },
    actualCreditSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'actual_credit_spread'
    },
    revolving: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    seniority: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_seniority',
        key: 'domain'
      }
    },
    performingStatus: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "SAFE",
      references: {
        model: 'doms_performing_status',
        key: 'domain'
      },
      field: 'performing_status'
    },
    glClass: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_gl_class',
        key: 'domain'
      },
      field: 'gl_class'
    },
    tradeDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'trade_date'
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'start_date'
    },
    maturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'maturity_date'
    },
    assumeDilution: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'assume_dilution'
    },
    originationCountry: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'sys_country',
        key: 'country_code_iso2'
      },
      field: 'origination_country'
    },
    defaultInvptyContagion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'default_invpty_contagion'
    },
    repaymentRight: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'repayment_right'
    },
    defaultDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'default_date'
    },
    purchasedInDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'purchased_in_default'
    },
    pastDueDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'past_due_days'
    },
    pastDueInstallments: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'past_due_installments'
    },
    forbearanceMeasures: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_forbearance_measures',
        key: 'domain'
      },
      field: 'forbearance_measures'
    },
    forbearanceDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'forbearance_date'
    },
    recoveriesSinceDefault: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'recoveries_since_default'
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
    },
    intermCostPayDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'interm_cost_pay_date'
    },
    intermCostValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'interm_cost_value'
    },
    intermCostRate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'interm_cost_rate'
    },
    intermCostAccrual: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'interm_cost_accrual'
    }
  }, {
    sequelize,
    tableName: 'port_recv_pos',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_RECV_POS",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_system" },
          { name: "product_code" },
          { name: "receivable_pool_ref" },
          { name: "contract_reference" },
        ]
      },
      {
        name: "port_recv_pos_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
