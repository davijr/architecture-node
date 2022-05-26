import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmInstrumentList, CrmInstrumentListId } from './CrmInstrumentList';
import type { DomsRepartitionMethod, DomsRepartitionMethodId } from './DomsRepartitionMethod';
import type { PortContractList, PortContractListId } from './PortContractList';

export interface CrmContractLinkAttributes {
  crmSourceTable: string;
  crmSourceSystem: string;
  crmCompanyCode: string;
  crmProductCode: string;
  crmContractReference: string;
  obligCtrctSourceTable: string;
  obligCtrctSourceSystem: string;
  obligCtrctCompanyCode: string;
  obligCtrctProductCode: string;
  obligContractReference: string;
  repartitionMethod: string;
}

export type CrmContractLinkPk = "crmSourceTable" | "crmSourceSystem" | "crmCompanyCode" | "crmProductCode" | "crmContractReference" | "obligCtrctSourceTable" | "obligCtrctSourceSystem" | "obligCtrctCompanyCode" | "obligCtrctProductCode" | "obligContractReference";
export type CrmContractLinkId = CrmContractLink[CrmContractLinkPk];
export type CrmContractLinkOptionalAttributes = "repartitionMethod";
export type CrmContractLinkCreationAttributes = Optional<CrmContractLinkAttributes, CrmContractLinkOptionalAttributes>;

export class CrmContractLink extends Model<CrmContractLinkAttributes, CrmContractLinkCreationAttributes> implements CrmContractLinkAttributes {
  crmSourceTable!: string;
  crmSourceSystem!: string;
  crmCompanyCode!: string;
  crmProductCode!: string;
  crmContractReference!: string;
  obligCtrctSourceTable!: string;
  obligCtrctSourceSystem!: string;
  obligCtrctCompanyCode!: string;
  obligCtrctProductCode!: string;
  obligContractReference!: string;
  repartitionMethod!: string;

  // CrmContractLink belongsTo CrmInstrumentList via crmCompanyCode
  crmCompanyCodeCrmInstrumentList!: CrmInstrumentList;
  getCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmContractLink belongsTo CrmInstrumentList via crmContractReference
  crmContractReferenceCrmInstrumentList!: CrmInstrumentList;
  getCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmContractLink belongsTo CrmInstrumentList via crmProductCode
  crmProductCodeCrmInstrumentList!: CrmInstrumentList;
  getCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmContractLink belongsTo CrmInstrumentList via crmSourceSystem
  crmSourceSystemCrmInstrumentList!: CrmInstrumentList;
  getCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmContractLink belongsTo CrmInstrumentList via crmSourceTable
  crmSourceTableCrmInstrumentList!: CrmInstrumentList;
  getCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmContractLink belongsTo DomsRepartitionMethod via repartitionMethod
  repartitionMethodDomsRepartitionMethod!: DomsRepartitionMethod;
  getRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToGetAssociationMixin<DomsRepartitionMethod>;
  setRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToSetAssociationMixin<DomsRepartitionMethod, DomsRepartitionMethodId>;
  createRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToCreateAssociationMixin<DomsRepartitionMethod>;
  // CrmContractLink belongsTo PortContractList via obligContractReference
  obligContractReferencePortContractList!: PortContractList;
  getObligContractReferencePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setObligContractReferencePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createObligContractReferencePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // CrmContractLink belongsTo PortContractList via obligCtrctCompanyCode
  obligCtrctCompanyCodePortContractList!: PortContractList;
  getObligCtrctCompanyCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setObligCtrctCompanyCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createObligCtrctCompanyCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // CrmContractLink belongsTo PortContractList via obligCtrctProductCode
  obligCtrctProductCodePortContractList!: PortContractList;
  getObligCtrctProductCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setObligCtrctProductCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createObligCtrctProductCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // CrmContractLink belongsTo PortContractList via obligCtrctSourceSystem
  obligCtrctSourceSystemPortContractList!: PortContractList;
  getObligCtrctSourceSystemPortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setObligCtrctSourceSystemPortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createObligCtrctSourceSystemPortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // CrmContractLink belongsTo PortContractList via obligCtrctSourceTable
  obligCtrctSourceTablePortContractList!: PortContractList;
  getObligCtrctSourceTablePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setObligCtrctSourceTablePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createObligCtrctSourceTablePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CrmContractLink {
    return CrmContractLink.init({
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
    obligCtrctSourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'oblig_ctrct_source_table'
    },
    obligCtrctSourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'oblig_ctrct_source_system'
    },
    obligCtrctCompanyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'oblig_ctrct_company_code'
    },
    obligCtrctProductCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'oblig_ctrct_product_code'
    },
    obligContractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'oblig_contract_reference'
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
    tableName: 'crm_contract_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-CRM_CONTRACT_LINK",
        unique: true,
        fields: [
          { name: "crm_source_table" },
          { name: "crm_source_system" },
          { name: "crm_company_code" },
          { name: "crm_product_code" },
          { name: "crm_contract_reference" },
          { name: "oblig_ctrct_source_table" },
          { name: "oblig_ctrct_source_system" },
          { name: "oblig_ctrct_company_code" },
          { name: "oblig_ctrct_product_code" },
          { name: "oblig_contract_reference" },
        ]
      },
    ]
  });
  }
}
