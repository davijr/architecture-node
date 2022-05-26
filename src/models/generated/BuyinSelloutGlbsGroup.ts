import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { BuyinBalanceLink, BuyinBalanceLinkId } from './BuyinBalanceLink'
import type { BuyinSelloutGlLink } from './BuyinSelloutGlLink'

export interface BuyinSelloutGlbsGroupAttributes {
  buyinGroupCode: string;
  buyinGroupDescription?: string;
}

export type BuyinSelloutGlbsGroupPk = 'buyinGroupCode';
export type BuyinSelloutGlbsGroupId = BuyinSelloutGlbsGroup[BuyinSelloutGlbsGroupPk];
export type BuyinSelloutGlbsGroupOptionalAttributes = 'buyinGroupDescription';
export type BuyinSelloutGlbsGroupCreationAttributes = Optional<BuyinSelloutGlbsGroupAttributes, BuyinSelloutGlbsGroupOptionalAttributes>;

export class BuyinSelloutGlbsGroup extends Model<BuyinSelloutGlbsGroupAttributes, BuyinSelloutGlbsGroupCreationAttributes> implements BuyinSelloutGlbsGroupAttributes {
  buyinGroupCode!: string;
  buyinGroupDescription?: string;

  // BuyinSelloutGlbsGroup hasMany BuyinBalanceLink via selloutGlbsGroupCode
  buyinBalanceLinks!: BuyinBalanceLink[];
  getBuyinBalanceLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinBalanceLink>;
  setBuyinBalanceLinks!: Sequelize.HasManySetAssociationsMixin<BuyinBalanceLink, BuyinBalanceLinkId>;
  addBuyinBalanceLink!: Sequelize.HasManyAddAssociationMixin<BuyinBalanceLink, BuyinBalanceLinkId>;
  addBuyinBalanceLinks!: Sequelize.HasManyAddAssociationsMixin<BuyinBalanceLink, BuyinBalanceLinkId>;
  createBuyinBalanceLink!: Sequelize.HasManyCreateAssociationMixin<BuyinBalanceLink>;
  removeBuyinBalanceLink!: Sequelize.HasManyRemoveAssociationMixin<BuyinBalanceLink, BuyinBalanceLinkId>;
  removeBuyinBalanceLinks!: Sequelize.HasManyRemoveAssociationsMixin<BuyinBalanceLink, BuyinBalanceLinkId>;
  hasBuyinBalanceLink!: Sequelize.HasManyHasAssociationMixin<BuyinBalanceLink, BuyinBalanceLinkId>;
  hasBuyinBalanceLinks!: Sequelize.HasManyHasAssociationsMixin<BuyinBalanceLink, BuyinBalanceLinkId>;
  countBuyinBalanceLinks!: Sequelize.HasManyCountAssociationsMixin;
  // BuyinSelloutGlbsGroup hasMany BuyinSelloutGlLink via buyinGroupCode
  buyinSelloutGlLinks!: BuyinSelloutGlLink[];
  getBuyinSelloutGlLinks!: Sequelize.HasManyGetAssociationsMixin<BuyinSelloutGlLink>;
  countBuyinSelloutGlLinks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel (sequelize: Sequelize.Sequelize): typeof BuyinSelloutGlbsGroup {
    return BuyinSelloutGlbsGroup.init({
      buyinGroupCode: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true,
        field: 'buyin_group_code'
      },
      buyinGroupDescription: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'buyin_group_description'
      }
    }, {
      sequelize,
      tableName: 'buyin_sellout_glbs_group',
      schema: 'bzdf',
      timestamps: false,
      indexes: [
        {
          name: 'PK-BUYIN_SELLOUT_GLBS_GROUP',
          unique: true,
          fields: [
            { name: 'buyin_group_code' }
          ]
        }
      ]
    })
  }
}
