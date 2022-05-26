import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmInstrumentList, CrmInstrumentListId } from './CrmInstrumentList';
import type { DomsRepartitionMethod, DomsRepartitionMethodId } from './DomsRepartitionMethod';
import type { InvptyDet, InvptyDetId } from './InvptyDet';

export interface CrmInvptyLinkAttributes {
  crmSourceTable: string;
  crmSourceSystem: string;
  crmCompanyCode: string;
  crmProductCode: string;
  crmContractReference: string;
  obligorCode: number;
  repartitionMethod: string;
}

export type CrmInvptyLinkPk = "crmSourceTable" | "crmSourceSystem" | "crmCompanyCode" | "crmProductCode" | "crmContractReference" | "obligorCode";
export type CrmInvptyLinkId = CrmInvptyLink[CrmInvptyLinkPk];
export type CrmInvptyLinkOptionalAttributes = "repartitionMethod";
export type CrmInvptyLinkCreationAttributes = Optional<CrmInvptyLinkAttributes, CrmInvptyLinkOptionalAttributes>;

export class CrmInvptyLink extends Model<CrmInvptyLinkAttributes, CrmInvptyLinkCreationAttributes> implements CrmInvptyLinkAttributes {
  crmSourceTable!: string;
  crmSourceSystem!: string;
  crmCompanyCode!: string;
  crmProductCode!: string;
  crmContractReference!: string;
  obligorCode!: number;
  repartitionMethod!: string;

  // CrmInvptyLink belongsTo CrmInstrumentList via crmCompanyCode
  crmCompanyCodeCrmInstrumentList!: CrmInstrumentList;
  getCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmCompanyCodeCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmInvptyLink belongsTo CrmInstrumentList via crmContractReference
  crmContractReferenceCrmInstrumentList!: CrmInstrumentList;
  getCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmContractReferenceCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmInvptyLink belongsTo CrmInstrumentList via crmProductCode
  crmProductCodeCrmInstrumentList!: CrmInstrumentList;
  getCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmProductCodeCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmInvptyLink belongsTo CrmInstrumentList via crmSourceSystem
  crmSourceSystemCrmInstrumentList!: CrmInstrumentList;
  getCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmSourceSystemCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmInvptyLink belongsTo CrmInstrumentList via crmSourceTable
  crmSourceTableCrmInstrumentList!: CrmInstrumentList;
  getCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToGetAssociationMixin<CrmInstrumentList>;
  setCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToSetAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmSourceTableCrmInstrumentList!: Sequelize.BelongsToCreateAssociationMixin<CrmInstrumentList>;
  // CrmInvptyLink belongsTo DomsRepartitionMethod via repartitionMethod
  repartitionMethodDomsRepartitionMethod!: DomsRepartitionMethod;
  getRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToGetAssociationMixin<DomsRepartitionMethod>;
  setRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToSetAssociationMixin<DomsRepartitionMethod, DomsRepartitionMethodId>;
  createRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToCreateAssociationMixin<DomsRepartitionMethod>;
  // CrmInvptyLink belongsTo InvptyDet via obligorCode
  obligorCodeInvptyDet!: InvptyDet;
  getObligorCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setObligorCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createObligorCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CrmInvptyLink {
    return CrmInvptyLink.init({
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
    tableName: 'crm_invpty_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-CRM_INVPTY_LINK",
        unique: true,
        fields: [
          { name: "crm_source_table" },
          { name: "crm_source_system" },
          { name: "crm_company_code" },
          { name: "crm_product_code" },
          { name: "crm_contract_reference" },
          { name: "obligor_code" },
        ]
      },
    ]
  });
  }
}
