import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsParticipationLink, DomsParticipationLinkId } from './DomsParticipationLink';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { PortContractList, PortContractListId } from './PortContractList';

export interface PortThirdPartyLnkAttributes {
  sourceTable: string;
  sourceSystem: string;
  companyCode: string;
  productCode: string;
  contractReference: string;
  invptyCode: number;
  participationLink: string;
  linkWeight?: number;
}

export type PortThirdPartyLnkPk = "sourceTable" | "sourceSystem" | "companyCode" | "productCode" | "contractReference";
export type PortThirdPartyLnkId = PortThirdPartyLnk[PortThirdPartyLnkPk];
export type PortThirdPartyLnkOptionalAttributes = "linkWeight";
export type PortThirdPartyLnkCreationAttributes = Optional<PortThirdPartyLnkAttributes, PortThirdPartyLnkOptionalAttributes>;

export class PortThirdPartyLnk extends Model<PortThirdPartyLnkAttributes, PortThirdPartyLnkCreationAttributes> implements PortThirdPartyLnkAttributes {
  sourceTable!: string;
  sourceSystem!: string;
  companyCode!: string;
  productCode!: string;
  contractReference!: string;
  invptyCode!: number;
  participationLink!: string;
  linkWeight?: number;

  // PortThirdPartyLnk belongsTo DomsParticipationLink via participationLink
  participationLinkDomsParticipationLink!: DomsParticipationLink;
  getParticipationLinkDomsParticipationLink!: Sequelize.BelongsToGetAssociationMixin<DomsParticipationLink>;
  setParticipationLinkDomsParticipationLink!: Sequelize.BelongsToSetAssociationMixin<DomsParticipationLink, DomsParticipationLinkId>;
  createParticipationLinkDomsParticipationLink!: Sequelize.BelongsToCreateAssociationMixin<DomsParticipationLink>;
  // PortThirdPartyLnk belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortThirdPartyLnk belongsTo PortContractList via companyCode
  companyCodePortContractList!: PortContractList;
  getCompanyCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setCompanyCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createCompanyCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortThirdPartyLnk belongsTo PortContractList via contractReference
  contractReferencePortContractList!: PortContractList;
  getContractReferencePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setContractReferencePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createContractReferencePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortThirdPartyLnk belongsTo PortContractList via productCode
  productCodePortContractList!: PortContractList;
  getProductCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setProductCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createProductCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortThirdPartyLnk belongsTo PortContractList via sourceSystem
  sourceSystemPortContractList!: PortContractList;
  getSourceSystemPortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSourceSystemPortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSourceSystemPortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortThirdPartyLnk belongsTo PortContractList via sourceTable
  sourceTablePortContractList!: PortContractList;
  getSourceTablePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSourceTablePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSourceTablePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortThirdPartyLnk {
    return PortThirdPartyLnk.init({
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
    invptyCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_code'
    },
    participationLink: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_participation_link',
        key: 'domain'
      },
      field: 'participation_link'
    },
    linkWeight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'link_weight'
    }
  }, {
    sequelize,
    tableName: 'port_third_party_lnk',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_THIRD_PARTY_LNK",
        unique: true,
        fields: [
          { name: "source_table" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "product_code" },
          { name: "contract_reference" },
        ]
      },
    ]
  });
  }
}
