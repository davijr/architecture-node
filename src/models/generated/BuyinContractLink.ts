import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortContractList, PortContractListId } from './PortContractList';

export interface BuyinContractLinkAttributes {
  companyCode: string;
  buyinSourceTable: string;
  buyinSourceSystem: string;
  buyinProductCode: string;
  buyinContractReference: string;
  selloutSourceTable: string;
  selloutSourceSystem: string;
  selloutProductCode: string;
  selloutContractReference: string;
}

export type BuyinContractLinkPk = "companyCode" | "buyinSourceTable" | "buyinSourceSystem" | "buyinProductCode" | "buyinContractReference" | "selloutSourceTable" | "selloutSourceSystem" | "selloutProductCode" | "selloutContractReference";
export type BuyinContractLinkId = BuyinContractLink[BuyinContractLinkPk];
export type BuyinContractLinkCreationAttributes = BuyinContractLinkAttributes;

export class BuyinContractLink extends Model<BuyinContractLinkAttributes, BuyinContractLinkCreationAttributes> implements BuyinContractLinkAttributes {
  companyCode!: string;
  buyinSourceTable!: string;
  buyinSourceSystem!: string;
  buyinProductCode!: string;
  buyinContractReference!: string;
  selloutSourceTable!: string;
  selloutSourceSystem!: string;
  selloutProductCode!: string;
  selloutContractReference!: string;

  // BuyinContractLink belongsTo PortContractList via buyinContractReference
  buyinContractReferencePortContractList!: PortContractList;
  getBuyinContractReferencePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setBuyinContractReferencePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createBuyinContractReferencePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // BuyinContractLink belongsTo PortContractList via buyinProductCode
  buyinProductCodePortContractList!: PortContractList;
  getBuyinProductCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setBuyinProductCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createBuyinProductCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // BuyinContractLink belongsTo PortContractList via buyinSourceSystem
  buyinSourceSystemPortContractList!: PortContractList;
  getBuyinSourceSystemPortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setBuyinSourceSystemPortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createBuyinSourceSystemPortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // BuyinContractLink belongsTo PortContractList via buyinSourceTable
  buyinSourceTablePortContractList!: PortContractList;
  getBuyinSourceTablePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setBuyinSourceTablePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createBuyinSourceTablePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // BuyinContractLink belongsTo PortContractList via companyCode
  companyCodePortContractList!: PortContractList;
  getCompanyCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setCompanyCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createCompanyCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // BuyinContractLink belongsTo PortContractList via selloutContractReference
  selloutContractReferencePortContractList!: PortContractList;
  getSelloutContractReferencePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSelloutContractReferencePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSelloutContractReferencePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // BuyinContractLink belongsTo PortContractList via selloutProductCode
  selloutProductCodePortContractList!: PortContractList;
  getSelloutProductCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSelloutProductCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSelloutProductCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // BuyinContractLink belongsTo PortContractList via selloutSourceSystem
  selloutSourceSystemPortContractList!: PortContractList;
  getSelloutSourceSystemPortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSelloutSourceSystemPortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSelloutSourceSystemPortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // BuyinContractLink belongsTo PortContractList via selloutSourceTable
  selloutSourceTablePortContractList!: PortContractList;
  getSelloutSourceTablePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSelloutSourceTablePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSelloutSourceTablePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;

  static initModel(sequelize: Sequelize.Sequelize): typeof BuyinContractLink {
    return BuyinContractLink.init({
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
    buyinSourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'buyin_source_table'
    },
    buyinSourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'buyin_source_system'
    },
    buyinProductCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'buyin_product_code'
    },
    buyinContractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'buyin_contract_reference'
    },
    selloutSourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'sellout_source_table'
    },
    selloutSourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'sellout_source_system'
    },
    selloutProductCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'sellout_product_code'
    },
    selloutContractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'sellout_contract_reference'
    }
  }, {
    sequelize,
    tableName: 'buyin_contract_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-BUYIN_CONTRACT_LINK",
        unique: true,
        fields: [
          { name: "company_code" },
          { name: "buyin_source_table" },
          { name: "buyin_source_system" },
          { name: "buyin_product_code" },
          { name: "buyin_contract_reference" },
          { name: "sellout_source_table" },
          { name: "sellout_source_system" },
          { name: "sellout_product_code" },
          { name: "sellout_contract_reference" },
        ]
      },
    ]
  });
  }
}
