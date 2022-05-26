import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmInstrumentList, CrmInstrumentListId } from './CrmInstrumentList';
import type { CrmNetagrLink, CrmNetagrLinkId } from './CrmNetagrLink';
import type { DomsMarginType, DomsMarginTypeId } from './DomsMarginType';

export interface CrmAgreementLinkAttributes {
  crmSourceTable: string;
  crmSourceSystem: string;
  crmCompanyCode: string;
  crmProductCode: string;
  crmContractReference: string;
  nettingAgreementRef: string;
  marginType: string;
  linkWeight?: number;
}

export type CrmAgreementLinkPk = "crmSourceTable" | "crmSourceSystem" | "crmCompanyCode" | "crmProductCode" | "crmContractReference" | "nettingAgreementRef" | "marginType";
export type CrmAgreementLinkId = CrmAgreementLink[CrmAgreementLinkPk];
export type CrmAgreementLinkOptionalAttributes = "marginType" | "linkWeight";
export type CrmAgreementLinkCreationAttributes = Optional<CrmAgreementLinkAttributes, CrmAgreementLinkOptionalAttributes>;

export class CrmAgreementLink extends Model<CrmAgreementLinkAttributes, CrmAgreementLinkCreationAttributes> implements CrmAgreementLinkAttributes {
  crmSourceTable!: string;
  crmSourceSystem!: string;
  crmCompanyCode!: string;
  crmProductCode!: string;
  crmContractReference!: string;
  nettingAgreementRef!: string;
  marginType!: string;
  linkWeight?: number;

  // CrmAgreementLink belongsTo CrmInstrumentList via crmCompanyCode
  crmCompanyCodeCrmInstrumentList!: CrmInstrumentList;
  getCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmAgreementLink belongsTo CrmInstrumentList via crmContractReference
  crmContractReferenceCrmInstrumentList!: CrmInstrumentList;
  getCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmAgreementLink belongsTo CrmInstrumentList via crmProductCode
  crmProductCodeCrmInstrumentList!: CrmInstrumentList;
  getCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmAgreementLink belongsTo CrmInstrumentList via crmSourceSystem
  crmSourceSystemCrmInstrumentList!: CrmInstrumentList;
  getCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmAgreementLink belongsTo CrmInstrumentList via crmSourceTable
  crmSourceTableCrmInstrumentList!: CrmInstrumentList;
  getCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmAgreementLink belongsTo CrmNetagrLink via nettingAgreementRef
  nettingAgreementRefCrmNetagrLink!: CrmNetagrLink;
  getNettingAgreementRefCrmNetagrLink!: Sequelize.BelongsToGetAssociationMixin<CrmNetagrLink>;
  setNettingAgreementRefCrmNetagrLink!: Sequelize.BelongsToSetAssociationMixin<CrmNetagrLink, CrmNetagrLinkId>;
  createNettingAgreementRefCrmNetagrLink!: Sequelize.BelongsToCreateAssociationMixin<CrmNetagrLink>;
  // CrmAgreementLink belongsTo DomsMarginType via marginType
  marginTypeDomsMarginType!: DomsMarginType;
  getMarginTypeDomsMarginType!: Sequelize.BelongsToGetAssociationMixin<DomsMarginType>;
  setMarginTypeDomsMarginType!: Sequelize.BelongsToSetAssociationMixin<DomsMarginType, DomsMarginTypeId>;
  createMarginTypeDomsMarginType!: Sequelize.BelongsToCreateAssociationMixin<DomsMarginType>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CrmAgreementLink {
    return CrmAgreementLink.init({
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
    nettingAgreementRef: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crm_netagr_link',
        key: 'netting_agreement_ref'
      },
      field: 'netting_agreement_ref'
    },
    marginType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NAN",
      primaryKey: true,
      references: {
        model: 'doms_margin_type',
        key: 'domain'
      },
      field: 'margin_type'
    },
    linkWeight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'link_weight'
    }
  }, {
    sequelize,
    tableName: 'crm_agreement_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-CRM_AGREEMENT_LINK",
        unique: true,
        fields: [
          { name: "crm_source_table" },
          { name: "crm_source_system" },
          { name: "crm_company_code" },
          { name: "crm_product_code" },
          { name: "crm_contract_reference" },
          { name: "netting_agreement_ref" },
          { name: "margin_type" },
        ]
      },
    ]
  });
  }
}
