import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsCalcFrequency, DomsCalcFrequencyId } from './DomsCalcFrequency';
import type { PortRepoPos, PortRepoPosId } from './PortRepoPos';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';

export interface PortRepoDetAttributes {
  referenceDate: string;
  sourceTable: string;
  sourceSystem: string;
  productCode: string;
  contractReference: string;
  securityReference: string;
  issuerCode?: number;
  isinCode?: string;
  currencyCode: string;
  securityMaturityDate?: string;
  securityQuantity: number;
  securityUnitaryPrice?: number;
  securityMarketValue?: number;
  securityMarketValueCcy: string;
  notionalSecurityLeg?: number;
  revaluationFrequency: string;
  revaluationFrequencyUnit?: number;
}

export type PortRepoDetPk = "referenceDate" | "sourceTable" | "sourceSystem" | "productCode" | "contractReference" | "securityReference";
export type PortRepoDetId = PortRepoDet[PortRepoDetPk];
export type PortRepoDetOptionalAttributes = "issuerCode" | "isinCode" | "securityMaturityDate" | "securityUnitaryPrice" | "securityMarketValue" | "notionalSecurityLeg" | "revaluationFrequencyUnit";
export type PortRepoDetCreationAttributes = Optional<PortRepoDetAttributes, PortRepoDetOptionalAttributes>;

export class PortRepoDet extends Model<PortRepoDetAttributes, PortRepoDetCreationAttributes> implements PortRepoDetAttributes {
  referenceDate!: string;
  sourceTable!: string;
  sourceSystem!: string;
  productCode!: string;
  contractReference!: string;
  securityReference!: string;
  issuerCode?: number;
  isinCode?: string;
  currencyCode!: string;
  securityMaturityDate?: string;
  securityQuantity!: number;
  securityUnitaryPrice?: number;
  securityMarketValue?: number;
  securityMarketValueCcy!: string;
  notionalSecurityLeg?: number;
  revaluationFrequency!: string;
  revaluationFrequencyUnit?: number;

  // PortRepoDet belongsTo DomsCalcFrequency via revaluationFrequency
  revaluationFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getRevaluationFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setRevaluationFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createRevaluationFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortRepoDet belongsTo PortRepoPos via contractReference
  contractReferencePortRepoPo!: PortRepoPos;
  getContractReferencePortRepoPo!: Sequelize.BelongsToGetAssociationMixin<PortRepoPos>;
  setContractReferencePortRepoPo!: Sequelize.BelongsToSetAssociationMixin<PortRepoPos, PortRepoPosId>;
  createContractReferencePortRepoPo!: Sequelize.BelongsToCreateAssociationMixin<PortRepoPos>;
  // PortRepoDet belongsTo PortRepoPos via productCode
  productCodePortRepoPo!: PortRepoPos;
  getProductCodePortRepoPo!: Sequelize.BelongsToGetAssociationMixin<PortRepoPos>;
  setProductCodePortRepoPo!: Sequelize.BelongsToSetAssociationMixin<PortRepoPos, PortRepoPosId>;
  createProductCodePortRepoPo!: Sequelize.BelongsToCreateAssociationMixin<PortRepoPos>;
  // PortRepoDet belongsTo PortRepoPos via referenceDate
  referenceDatePortRepoPo!: PortRepoPos;
  getReferenceDatePortRepoPo!: Sequelize.BelongsToGetAssociationMixin<PortRepoPos>;
  setReferenceDatePortRepoPo!: Sequelize.BelongsToSetAssociationMixin<PortRepoPos, PortRepoPosId>;
  createReferenceDatePortRepoPo!: Sequelize.BelongsToCreateAssociationMixin<PortRepoPos>;
  // PortRepoDet belongsTo PortRepoPos via sourceSystem
  sourceSystemPortRepoPo!: PortRepoPos;
  getSourceSystemPortRepoPo!: Sequelize.BelongsToGetAssociationMixin<PortRepoPos>;
  setSourceSystemPortRepoPo!: Sequelize.BelongsToSetAssociationMixin<PortRepoPos, PortRepoPosId>;
  createSourceSystemPortRepoPo!: Sequelize.BelongsToCreateAssociationMixin<PortRepoPos>;
  // PortRepoDet belongsTo SysCurrency via securityMarketValueCcy
  securityMarketValueCcySysCurrency!: SysCurrency;
  getSecurityMarketValueCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setSecurityMarketValueCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createSecurityMarketValueCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortRepoDet belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortRepoDet {
    return PortRepoDet.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_repo_pos',
        key: 'source_system'
      },
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
      references: {
        model: 'port_repo_pos',
        key: 'source_system'
      },
      field: 'source_system'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_repo_pos',
        key: 'source_system'
      },
      field: 'product_code'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_repo_pos',
        key: 'source_system'
      },
      field: 'contract_reference'
    },
    securityReference: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      field: 'security_reference'
    },
    issuerCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'issuer_code'
    },
    isinCode: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'isin_code'
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
    securityMaturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'security_maturity_date'
    },
    securityQuantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'security_quantity'
    },
    securityUnitaryPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'security_unitary_price'
    },
    securityMarketValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'security_market_value'
    },
    securityMarketValueCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'security_market_value_ccy'
    },
    notionalSecurityLeg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'notional_security_leg'
    },
    revaluationFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'revaluation_frequency'
    },
    revaluationFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'revaluation_frequency_unit'
    }
  }, {
    sequelize,
    tableName: 'port_repo_det',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_REPO_DET",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_table" },
          { name: "source_system" },
          { name: "product_code" },
          { name: "contract_reference" },
          { name: "security_reference" },
        ]
      },
      {
        name: "port_repo_det_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
