import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmInstrumentList, CrmInstrumentListId } from './CrmInstrumentList';
import type { DomsRepartitionMethod, DomsRepartitionMethodId } from './DomsRepartitionMethod';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { Product, ProductId } from './Product';

export interface CrmProductLinkAttributes {
  crmSourceTable: string;
  crmSourceSystem: string;
  crmCompanyCode: string;
  crmProductCode: string;
  crmContractReference: string;
  obligorCode: number;
  productCode: string;
  repartitionMethod: string;
}

export type CrmProductLinkPk = "crmSourceTable" | "crmSourceSystem" | "crmCompanyCode" | "crmProductCode" | "crmContractReference" | "obligorCode" | "productCode";
export type CrmProductLinkId = CrmProductLink[CrmProductLinkPk];
export type CrmProductLinkOptionalAttributes = "repartitionMethod";
export type CrmProductLinkCreationAttributes = Optional<CrmProductLinkAttributes, CrmProductLinkOptionalAttributes>;

export class CrmProductLink extends Model<CrmProductLinkAttributes, CrmProductLinkCreationAttributes> implements CrmProductLinkAttributes {
  crmSourceTable!: string;
  crmSourceSystem!: string;
  crmCompanyCode!: string;
  crmProductCode!: string;
  crmContractReference!: string;
  obligorCode!: number;
  productCode!: string;
  repartitionMethod!: string;

  // CrmProductLink belongsTo CrmInstrumentList via crmCompanyCode
  crmCompanyCodeCrmInstrumentList!: CrmInstrumentList;
  getCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmProductLink belongsTo CrmInstrumentList via crmContractReference
  crmContractReferenceCrmInstrumentList!: CrmInstrumentList;
  getCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmProductLink belongsTo CrmInstrumentList via crmProductCode
  crmProductCodeCrmInstrumentList!: CrmInstrumentList;
  getCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmProductLink belongsTo CrmInstrumentList via crmSourceSystem
  crmSourceSystemCrmInstrumentList!: CrmInstrumentList;
  getCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmProductLink belongsTo CrmInstrumentList via crmSourceTable
  crmSourceTableCrmInstrumentList!: CrmInstrumentList;
  getCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmProductLink belongsTo DomsRepartitionMethod via repartitionMethod
  repartitionMethodDomsRepartitionMethod!: DomsRepartitionMethod;
  getRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToGetAssociationMixin<DomsRepartitionMethod>;
  setRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToSetAssociationMixin<DomsRepartitionMethod, DomsRepartitionMethodId>;
  createRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToCreateAssociationMixin<DomsRepartitionMethod>;
  // CrmProductLink belongsTo InvptyDet via obligorCode
  obligorCodeInvptyDet!: InvptyDet;
  getObligorCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setObligorCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createObligorCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // CrmProductLink belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CrmProductLink {
    return CrmProductLink.init({
    crmSourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crm_instrument_list',
        key: 'crm_source_table'
      },
      field: 'crm_source_table'
    },
    crmSourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crm_instrument_list',
        key: 'crm_source_table'
      },
      field: 'crm_source_system'
    },
    crmCompanyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crm_instrument_list',
        key: 'crm_source_table'
      },
      field: 'crm_company_code'
    },
    crmProductCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crm_instrument_list',
        key: 'crm_source_table'
      },
      field: 'crm_product_code'
    },
    crmContractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crm_instrument_list',
        key: 'crm_source_table'
      },
      field: 'crm_contract_reference'
    },
    obligorCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'obligor_code'
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
    repartitionMethod: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "PRP",
      references: {
        model: 'doms_repartition_method',
        key: 'domain'
      },
      field: 'repartition_method'
    }
  }, {
    sequelize,
    tableName: 'crm_product_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-CRM_PRODUCT_LINK",
        unique: true,
        fields: [
          { name: "crm_source_table" },
          { name: "crm_source_system" },
          { name: "crm_company_code" },
          { name: "crm_product_code" },
          { name: "crm_contract_reference" },
          { name: "obligor_code" },
          { name: "product_code" },
        ]
      },
    ]
  });
  }
}
