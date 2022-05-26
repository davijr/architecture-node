import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { BuyinSelloutGlbsGroup, BuyinSelloutGlbsGroupId } from './BuyinSelloutGlbsGroup';

export interface BuyinBalanceLinkAttributes {
  companyCode: string;
  buyinSourceTable: string;
  buyinSourceSystem: string;
  buyinProductCode: string;
  buyinContractReference: string;
  selloutGlbsGroupCode: string;
}

export type BuyinBalanceLinkPk = "companyCode" | "buyinSourceTable" | "buyinSourceSystem" | "buyinProductCode" | "buyinContractReference" | "selloutGlbsGroupCode";
export type BuyinBalanceLinkId = BuyinBalanceLink[BuyinBalanceLinkPk];
export type BuyinBalanceLinkCreationAttributes = BuyinBalanceLinkAttributes;

export class BuyinBalanceLink extends Model<BuyinBalanceLinkAttributes, BuyinBalanceLinkCreationAttributes> implements BuyinBalanceLinkAttributes {
  companyCode!: string;
  buyinSourceTable!: string;
  buyinSourceSystem!: string;
  buyinProductCode!: string;
  buyinContractReference!: string;
  selloutGlbsGroupCode!: string;

  // BuyinBalanceLink belongsTo BuyinSelloutGlbsGroup via selloutGlbsGroupCode
  selloutGlbsGroupCodeBuyinSelloutGlbsGroup!: BuyinSelloutGlbsGroup;
  getSelloutGlbsGroupCodeBuyinSelloutGlbsGroup!: Sequelize.BelongsToGetAssociationMixin<BuyinSelloutGlbsGroup>;
  setSelloutGlbsGroupCodeBuyinSelloutGlbsGroup!: Sequelize.BelongsToSetAssociationMixin<BuyinSelloutGlbsGroup, BuyinSelloutGlbsGroupId>;
  createSelloutGlbsGroupCodeBuyinSelloutGlbsGroup!: Sequelize.BelongsToCreateAssociationMixin<BuyinSelloutGlbsGroup>;

  static initModel(sequelize: Sequelize.Sequelize): typeof BuyinBalanceLink {
    return BuyinBalanceLink.init({
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      field: 'company_code'
    },
    buyinSourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'buyin_source_table'
    },
    buyinSourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'buyin_source_system'
    },
    buyinProductCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      field: 'buyin_product_code'
    },
    buyinContractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'buyin_contract_reference'
    },
    selloutGlbsGroupCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'buyin_sellout_glbs_group',
        key: 'buyin_group_code'
      },
      field: 'sellout_glbs_group_code'
    }
  }, {
    sequelize,
    tableName: 'buyin_balance_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-BUYIN_BALANCE_LINK",
        unique: true,
        fields: [
          { name: "company_code" },
          { name: "buyin_source_table" },
          { name: "buyin_source_system" },
          { name: "buyin_product_code" },
          { name: "buyin_contract_reference" },
          { name: "sellout_glbs_group_code" },
        ]
      },
    ]
  });
  }
}
