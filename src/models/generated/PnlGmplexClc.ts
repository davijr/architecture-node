import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsLongShort, DomsLongShortId } from './DomsLongShort';
import type { PortContractList, PortContractListId } from './PortContractList';

export interface PnlGmplexClcAttributes {
  referenceDate: string;
  sourceTable: string;
  sourceSystem: string;
  companyCode: string;
  productCode: string;
  contractReference: string;
  cashFlowReference: string;
  riskLeg: string;
  calcSourceSystem?: string;
  riskUnderlying?: number;
  riskCcy?: number;
  riskIrf?: number;
  riskIrfCurvemove?: number;
  riskCcyPtax?: number;
  mtmValue?: number;
  mtmValueAdj?: number;
  curveValue?: number;
  curveValueAdj?: number;
  accrual?: number;
  plexCof?: number;
  plexAmount?: number;
  plexNii?: number;
  plexNiiSales?: number;
  plexIntraday?: number;
  plexIntradaySales?: number;
  plexGreek1ODelta?: number;
  plexGreek1OVega?: number;
  plexGreek1OTheta?: number;
  plexGreek1ORho?: number;
  plexGreek1OLambda?: number;
  plexGreek1OEpsilon?: number;
  plexGreek2OBeta?: number;
  plexGreek2OGamma?: number;
  plexGreek2OVanna?: number;
  plexGreek2OCharm?: number;
  plexGreek2OVomma?: number;
  plexGreek2OVeta?: number;
  plexGreek2OVera?: number;
  plexGreek3OSpeed?: number;
  plexGreek3OZomma?: number;
  plexGreek3OColor?: number;
  plexGreek3OUltima?: number;
  plexUnexplained?: number;
}

export type PnlGmplexClcPk = "referenceDate" | "sourceTable" | "sourceSystem" | "companyCode" | "productCode" | "contractReference" | "cashFlowReference" | "riskLeg";
export type PnlGmplexClcId = PnlGmplexClc[PnlGmplexClcPk];
export type PnlGmplexClcOptionalAttributes = "calcSourceSystem" | "riskUnderlying" | "riskCcy" | "riskIrf" | "riskIrfCurvemove" | "riskCcyPtax" | "mtmValue" | "mtmValueAdj" | "curveValue" | "curveValueAdj" | "accrual" | "plexCof" | "plexAmount" | "plexNii" | "plexNiiSales" | "plexIntraday" | "plexIntradaySales" | "plexGreek1ODelta" | "plexGreek1OVega" | "plexGreek1OTheta" | "plexGreek1ORho" | "plexGreek1OLambda" | "plexGreek1OEpsilon" | "plexGreek2OBeta" | "plexGreek2OGamma" | "plexGreek2OVanna" | "plexGreek2OCharm" | "plexGreek2OVomma" | "plexGreek2OVeta" | "plexGreek2OVera" | "plexGreek3OSpeed" | "plexGreek3OZomma" | "plexGreek3OColor" | "plexGreek3OUltima" | "plexUnexplained";
export type PnlGmplexClcCreationAttributes = Optional<PnlGmplexClcAttributes, PnlGmplexClcOptionalAttributes>;

export class PnlGmplexClc extends Model<PnlGmplexClcAttributes, PnlGmplexClcCreationAttributes> implements PnlGmplexClcAttributes {
  referenceDate!: string;
  sourceTable!: string;
  sourceSystem!: string;
  companyCode!: string;
  productCode!: string;
  contractReference!: string;
  cashFlowReference!: string;
  riskLeg!: string;
  calcSourceSystem?: string;
  riskUnderlying?: number;
  riskCcy?: number;
  riskIrf?: number;
  riskIrfCurvemove?: number;
  riskCcyPtax?: number;
  mtmValue?: number;
  mtmValueAdj?: number;
  curveValue?: number;
  curveValueAdj?: number;
  accrual?: number;
  plexCof?: number;
  plexAmount?: number;
  plexNii?: number;
  plexNiiSales?: number;
  plexIntraday?: number;
  plexIntradaySales?: number;
  plexGreek1ODelta?: number;
  plexGreek1OVega?: number;
  plexGreek1OTheta?: number;
  plexGreek1ORho?: number;
  plexGreek1OLambda?: number;
  plexGreek1OEpsilon?: number;
  plexGreek2OBeta?: number;
  plexGreek2OGamma?: number;
  plexGreek2OVanna?: number;
  plexGreek2OCharm?: number;
  plexGreek2OVomma?: number;
  plexGreek2OVeta?: number;
  plexGreek2OVera?: number;
  plexGreek3OSpeed?: number;
  plexGreek3OZomma?: number;
  plexGreek3OColor?: number;
  plexGreek3OUltima?: number;
  plexUnexplained?: number;

  // PnlGmplexClc belongsTo DomsLongShort via riskLeg
  riskLegDomsLongShort!: DomsLongShort;
  getRiskLegDomsLongShort!: Sequelize.BelongsToGetAssociationMixin<DomsLongShort>;
  setRiskLegDomsLongShort!: Sequelize.BelongsToSetAssociationMixin<DomsLongShort, DomsLongShortId>;
  createRiskLegDomsLongShort!: Sequelize.BelongsToCreateAssociationMixin<DomsLongShort>;
  // PnlGmplexClc belongsTo PortContractList via companyCode
  companyCodePortContractList!: PortContractList;
  getCompanyCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setCompanyCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createCompanyCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlGmplexClc belongsTo PortContractList via contractReference
  contractReferencePortContractList!: PortContractList;
  getContractReferencePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setContractReferencePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createContractReferencePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlGmplexClc belongsTo PortContractList via productCode
  productCodePortContractList!: PortContractList;
  getProductCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setProductCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createProductCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlGmplexClc belongsTo PortContractList via sourceSystem
  sourceSystemPortContractList!: PortContractList;
  getSourceSystemPortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSourceSystemPortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSourceSystemPortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PnlGmplexClc belongsTo PortContractList via sourceTable
  sourceTablePortContractList!: PortContractList;
  getSourceTablePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSourceTablePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSourceTablePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PnlGmplexClc {
    return PnlGmplexClc.init({
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
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'source_table'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'source_system'
    },
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'company_code'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'product_code'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'contract_reference'
    },
    cashFlowReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'cash_flow_reference'
    },
    riskLeg: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'doms_long_short',
        key: 'domain'
      },
      field: 'risk_leg'
    },
    calcSourceSystem: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'calc_source_system'
    },
    riskUnderlying: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'risk_underlying'
    },
    riskCcy: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'risk_ccy'
    },
    riskIrf: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'risk_irf'
    },
    riskIrfCurvemove: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'risk_irf_curvemove'
    },
    riskCcyPtax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'risk_ccy_ptax'
    },
    mtmValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'mtm_value'
    },
    mtmValueAdj: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'mtm_value_adj'
    },
    curveValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'curve_value'
    },
    curveValueAdj: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'curve_value_adj'
    },
    accrual: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    plexCof: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_cof'
    },
    plexAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_amount'
    },
    plexNii: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_nii'
    },
    plexNiiSales: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_nii_sales'
    },
    plexIntraday: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_intraday'
    },
    plexIntradaySales: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_intraday_sales'
    },
    plexGreek1ODelta: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_1o_delta'
    },
    plexGreek1OVega: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_1o_vega'
    },
    plexGreek1OTheta: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_1o_theta'
    },
    plexGreek1ORho: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_1o_rho'
    },
    plexGreek1OLambda: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_1o_lambda'
    },
    plexGreek1OEpsilon: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_1o_epsilon'
    },
    plexGreek2OBeta: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_2o_beta'
    },
    plexGreek2OGamma: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_2o_gamma'
    },
    plexGreek2OVanna: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_2o_vanna'
    },
    plexGreek2OCharm: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_2o_charm'
    },
    plexGreek2OVomma: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_2o_vomma'
    },
    plexGreek2OVeta: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_2o_veta'
    },
    plexGreek2OVera: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_2o_vera'
    },
    plexGreek3OSpeed: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_3o_speed'
    },
    plexGreek3OZomma: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_3o_zomma'
    },
    plexGreek3OColor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_3o_color'
    },
    plexGreek3OUltima: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_greek_3o_ultima'
    },
    plexUnexplained: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'plex_unexplained'
    }
  }, {
    sequelize,
    tableName: 'pnl_gmplex_clc',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PNL_GMPLEX_CLC",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_table" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "product_code" },
          { name: "contract_reference" },
          { name: "cash_flow_reference" },
          { name: "risk_leg" },
        ]
      },
      {
        name: "pnl_gmplex_clc_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
