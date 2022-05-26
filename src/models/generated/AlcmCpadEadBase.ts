import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmCapitalRegulatoryType, AlcmCapitalRegulatoryTypeId } from './AlcmCapitalRegulatoryType';
import type { AlcmProductGroup, AlcmProductGroupId } from './AlcmProductGroup';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsBankingTrading, DomsBankingTradingId } from './DomsBankingTrading';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface AlcmCpadEadBaseAttributes {
  referenceDate: string;
  sourceTable: string;
  sourceSystem: string;
  companyCode: string;
  productCode: string;
  contractReference: string;
  invptyCode: number;
  costCentre: string;
  bankingTrading: string;
  productGroup: string;
  regulatoryType: string;
  glAccountGroup?: string;
  cpadGroup: string;
  tradeDate: string;
  maturityDate: string;
  underlyingRecLeg: string;
  underlyingPayLeg: string;
  underlyingCcyRecLeg: string;
  underlyingCcyPayLeg: string;
  notionalOutstanding: number;
  replacementCost: number;
  outstanding: number;
  notionalCcy: string;
  notionalCcyOutstanding: number;
}

export type AlcmCpadEadBasePk = "referenceDate" | "sourceTable" | "sourceSystem" | "companyCode" | "productCode" | "contractReference";
export type AlcmCpadEadBaseId = AlcmCpadEadBase[AlcmCpadEadBasePk];
export type AlcmCpadEadBaseOptionalAttributes = "glAccountGroup";
export type AlcmCpadEadBaseCreationAttributes = Optional<AlcmCpadEadBaseAttributes, AlcmCpadEadBaseOptionalAttributes>;

export class AlcmCpadEadBase extends Model<AlcmCpadEadBaseAttributes, AlcmCpadEadBaseCreationAttributes> implements AlcmCpadEadBaseAttributes {
  referenceDate!: string;
  sourceTable!: string;
  sourceSystem!: string;
  companyCode!: string;
  productCode!: string;
  contractReference!: string;
  invptyCode!: number;
  costCentre!: string;
  bankingTrading!: string;
  productGroup!: string;
  regulatoryType!: string;
  glAccountGroup?: string;
  cpadGroup!: string;
  tradeDate!: string;
  maturityDate!: string;
  underlyingRecLeg!: string;
  underlyingPayLeg!: string;
  underlyingCcyRecLeg!: string;
  underlyingCcyPayLeg!: string;
  notionalOutstanding!: number;
  replacementCost!: number;
  outstanding!: number;
  notionalCcy!: string;
  notionalCcyOutstanding!: number;

  // AlcmCpadEadBase belongsTo AlcmCapitalRegulatoryType via regulatoryType
  regulatoryTypeAlcmCapitalRegulatoryType!: AlcmCapitalRegulatoryType;
  getRegulatoryTypeAlcmCapitalRegulatoryType!: Sequelize.BelongsToGetAssociationMixin<AlcmCapitalRegulatoryType>;
  setRegulatoryTypeAlcmCapitalRegulatoryType!: Sequelize.BelongsToSetAssociationMixin<AlcmCapitalRegulatoryType, AlcmCapitalRegulatoryTypeId>;
  createRegulatoryTypeAlcmCapitalRegulatoryType!: Sequelize.BelongsToCreateAssociationMixin<AlcmCapitalRegulatoryType>;
  // AlcmCpadEadBase belongsTo AlcmProductGroup via productGroup
  productGroupAlcmProductGroup!: AlcmProductGroup;
  getProductGroupAlcmProductGroup!: Sequelize.BelongsToGetAssociationMixin<AlcmProductGroup>;
  setProductGroupAlcmProductGroup!: Sequelize.BelongsToSetAssociationMixin<AlcmProductGroup, AlcmProductGroupId>;
  createProductGroupAlcmProductGroup!: Sequelize.BelongsToCreateAssociationMixin<AlcmProductGroup>;
  // AlcmCpadEadBase belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // AlcmCpadEadBase belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // AlcmCpadEadBase belongsTo DomsBankingTrading via bankingTrading
  bankingTradingDomsBankingTrading!: DomsBankingTrading;
  getBankingTradingDomsBankingTrading!: Sequelize.BelongsToGetAssociationMixin<DomsBankingTrading>;
  setBankingTradingDomsBankingTrading!: Sequelize.BelongsToSetAssociationMixin<DomsBankingTrading, DomsBankingTradingId>;
  createBankingTradingDomsBankingTrading!: Sequelize.BelongsToCreateAssociationMixin<DomsBankingTrading>;
  // AlcmCpadEadBase belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // AlcmCpadEadBase belongsTo SysCurrency via notionalCcy
  notionalCcySysCurrency!: SysCurrency;
  getNotionalCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setNotionalCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createNotionalCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // AlcmCpadEadBase belongsTo SysCurrency via underlyingCcyPayLeg
  underlyingCcyPayLegSysCurrency!: SysCurrency;
  getUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createUnderlyingCcyPayLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // AlcmCpadEadBase belongsTo SysCurrency via underlyingCcyRecLeg
  underlyingCcyRecLegSysCurrency!: SysCurrency;
  getUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createUnderlyingCcyRecLegSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // AlcmCpadEadBase belongsTo SysUnderlying via underlyingPayLeg
  underlyingPayLegSysUnderlying!: SysUnderlying;
  getUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingPayLegSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // AlcmCpadEadBase belongsTo SysUnderlying via underlyingRecLeg
  underlyingRecLegSysUnderlying!: SysUnderlying;
  getUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingRecLegSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmCpadEadBase {
    return AlcmCpadEadBase.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    sourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'source_table'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
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
      field: 'product_code'
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
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'cost_centre'
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
    productGroup: {
      type: DataTypes.STRING(40),
      allowNull: false,
      references: {
        model: 'alcm_product_group',
        key: 'alcm_product_group'
      },
      field: 'product_group'
    },
    regulatoryType: {
      type: DataTypes.STRING(30),
      allowNull: false,
      references: {
        model: 'alcm_capital_regulatory_type',
        key: 'alcm_regulatory_type'
      },
      field: 'regulatory_type'
    },
    glAccountGroup: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'gl_account_group'
    },
    cpadGroup: {
      type: DataTypes.STRING(3),
      allowNull: false,
      field: 'cpad_group'
    },
    tradeDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'trade_date'
    },
    maturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'maturity_date'
    },
    underlyingRecLeg: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'underlying_rec_leg'
    },
    underlyingPayLeg: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'underlying_pay_leg'
    },
    underlyingCcyRecLeg: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'underlying_ccy_rec_leg'
    },
    underlyingCcyPayLeg: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'underlying_ccy_pay_leg'
    },
    notionalOutstanding: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'notional_outstanding'
    },
    replacementCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'replacement_cost'
    },
    outstanding: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    notionalCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'notional_ccy'
    },
    notionalCcyOutstanding: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'notional_ccy_outstanding'
    }
  }, {
    sequelize,
    tableName: 'alcm_cpad_ead_base',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_CPAD_EAD_BASE",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_table" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "product_code" },
          { name: "contract_reference" },
        ]
      },
      {
        name: "alcm_cpad_ead_base_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
