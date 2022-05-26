import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { BuyinSelloutGlbsGroup, BuyinSelloutGlbsGroupId } from './BuyinSelloutGlbsGroup';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';

export interface BuyinSelloutGlLinkAttributes {
  buyinGroupCode: string;
  glAccountCode: string;
}

export type BuyinSelloutGlLinkCreationAttributes = BuyinSelloutGlLinkAttributes;

export class BuyinSelloutGlLink extends Model<BuyinSelloutGlLinkAttributes, BuyinSelloutGlLinkCreationAttributes> implements BuyinSelloutGlLinkAttributes {
  buyinGroupCode!: string;
  glAccountCode!: string;

  // BuyinSelloutGlLink belongsTo BuyinSelloutGlbsGroup via buyinGroupCode
  buyinGroupCodeBuyinSelloutGlbsGroup!: BuyinSelloutGlbsGroup;
  getBuyinGroupCodeBuyinSelloutGlbsGroup!: Sequelize.BelongsToGetAssociationMixin<BuyinSelloutGlbsGroup>;
  setBuyinGroupCodeBuyinSelloutGlbsGroup!: Sequelize.BelongsToSetAssociationMixin<BuyinSelloutGlbsGroup, BuyinSelloutGlbsGroupId>;
  createBuyinGroupCodeBuyinSelloutGlbsGroup!: Sequelize.BelongsToCreateAssociationMixin<BuyinSelloutGlbsGroup>;
  // BuyinSelloutGlLink belongsTo GenldgAccountPlan via glAccountCode
  glAccountCodeGenldgAccountPlan!: GenldgAccountPlan;
  getGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgAccountPlan>;

  static initModel(sequelize: Sequelize.Sequelize): typeof BuyinSelloutGlLink {
    return BuyinSelloutGlLink.init({
    buyinGroupCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'buyin_sellout_glbs_group',
        key: 'buyin_group_code'
      },
      field: 'buyin_group_code'
    },
    glAccountCode: {
      type: DataTypes.CHAR(19),
      allowNull: false,
      references: {
        model: 'genldg_account_plan',
        key: 'gl_account_code'
      },
      field: 'gl_account_code'
    }
  }, {
    sequelize,
    tableName: 'buyin_sellout_gl_link',
    schema: 'bzdf',
    timestamps: false
  });
  }
}
