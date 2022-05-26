import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { AlcmLiqNsfrGroup, AlcmLiqNsfrGroupId } from './AlcmLiqNsfrGroup'
import type { AlcmLiqNsfrQuality, AlcmLiqNsfrQualityId } from './AlcmLiqNsfrQuality'
import type { AlcmProductGroup, AlcmProductGroupId } from './AlcmProductGroup'
import type { Product, ProductId } from './Product'
import type { SysCurrency, SysCurrencyId } from './SysCurrency'
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem'

export interface AlcmLiqNsfrProductParamAttributes {
  sourceTable: string;
  sourceSystem: string;
  productCode: string;
  currencyCode: string;
  alcmProductGroup: string;
  nsfrGroup: string;
  nsfrQuality: string;
  recordInitialDate: string;
  recordEndDate?: string;
}

export type AlcmLiqNsfrProductParamPk = 'sourceTable' | 'sourceSystem' | 'productCode' | 'currencyCode';
export type AlcmLiqNsfrProductParamId = AlcmLiqNsfrProductParam[AlcmLiqNsfrProductParamPk];
export type AlcmLiqNsfrProductParamOptionalAttributes = 'recordEndDate';
export type AlcmLiqNsfrProductParamCreationAttributes = Optional<AlcmLiqNsfrProductParamAttributes, AlcmLiqNsfrProductParamOptionalAttributes>;

export class AlcmLiqNsfrProductParam extends Model<AlcmLiqNsfrProductParamAttributes, AlcmLiqNsfrProductParamCreationAttributes> implements AlcmLiqNsfrProductParamAttributes {
  sourceTable!: string;
  sourceSystem!: string;
  productCode!: string;
  currencyCode!: string;
  alcmProductGroup!: string;
  nsfrGroup!: string;
  nsfrQuality!: string;
  recordInitialDate!: string;
  recordEndDate?: string;

  // AlcmLiqNsfrProductParam belongsTo AlcmLiqNsfrGroup via nsfrGroup
  nsfrGroupAlcmLiqNsfrGroup!: AlcmLiqNsfrGroup;
  getNsfrGroupAlcmLiqNsfrGroup!: Sequelize.BelongsToGetAssociationMixin<AlcmLiqNsfrGroup>;
  setNsfrGroupAlcmLiqNsfrGroup!: Sequelize.BelongsToSetAssociationMixin<AlcmLiqNsfrGroup, AlcmLiqNsfrGroupId>;
  createNsfrGroupAlcmLiqNsfrGroup!: Sequelize.BelongsToCreateAssociationMixin<AlcmLiqNsfrGroup>;
  // AlcmLiqNsfrProductParam belongsTo AlcmLiqNsfrQuality via nsfrQuality
  nsfrQualityAlcmLiqNsfrQuality!: AlcmLiqNsfrQuality;
  getNsfrQualityAlcmLiqNsfrQuality!: Sequelize.BelongsToGetAssociationMixin<AlcmLiqNsfrQuality>;
  setNsfrQualityAlcmLiqNsfrQuality!: Sequelize.BelongsToSetAssociationMixin<AlcmLiqNsfrQuality, AlcmLiqNsfrQualityId>;
  createNsfrQualityAlcmLiqNsfrQuality!: Sequelize.BelongsToCreateAssociationMixin<AlcmLiqNsfrQuality>;
  // AlcmLiqNsfrProductParam belongsTo AlcmProductGroup via alcmProductGroup
  alcmProductGroupAlcmProductGroup!: AlcmProductGroup;
  getAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToGetAssociationMixin<AlcmProductGroup>;
  setAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToSetAssociationMixin<AlcmProductGroup, AlcmProductGroupId>;
  createAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToCreateAssociationMixin<AlcmProductGroup>;
  // AlcmLiqNsfrProductParam belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // AlcmLiqNsfrProductParam belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // AlcmLiqNsfrProductParam belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;

  static initModel (sequelize: Sequelize.Sequelize): typeof AlcmLiqNsfrProductParam {
    return AlcmLiqNsfrProductParam.init({
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
      currencyCode: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'sys_currency',
          key: 'currency_code'
        },
        field: 'currency_code'
      },
      alcmProductGroup: {
        type: DataTypes.STRING(40),
        allowNull: false,
        references: {
          model: 'alcm_product_group',
          key: 'alcm_product_group'
        },
        field: 'alcm_product_group'
      },
      nsfrGroup: {
        type: DataTypes.STRING(3),
        allowNull: false,
        references: {
          model: 'alcm_liq_nsfr_group',
          key: 'nsfr_domain'
        },
        field: 'nsfr_group'
      },
      nsfrQuality: {
        type: DataTypes.STRING(3),
        allowNull: false,
        references: {
          model: 'alcm_liq_nsfr_quality',
          key: 'nsfr_domain'
        },
        field: 'nsfr_quality'
      },
      recordInitialDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'record_initial_date'
      },
      recordEndDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'record_end_date'
      }
    }, {
      sequelize,
      tableName: 'alcm_liq_nsfr_product_param',
      schema: 'bzdf',
      timestamps: false,
      indexes: [
        {
          name: 'PK-ALCM_LIQ_NSFR_PRODUCT_PARAM',
          unique: true,
          fields: [
            { name: 'source_table' },
            { name: 'source_system' },
            { name: 'product_code' },
            { name: 'currency_code' }
          ]
        }
      ]
    })
  }
}
