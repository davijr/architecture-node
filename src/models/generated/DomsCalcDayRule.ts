import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsCalcDayRuleAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsCalcDayRulePk = "domain";
export type DomsCalcDayRuleId = DomsCalcDayRule[DomsCalcDayRulePk];
export type DomsCalcDayRuleCreationAttributes = DomsCalcDayRuleAttributes;

export class DomsCalcDayRule extends Model<DomsCalcDayRuleAttributes, DomsCalcDayRuleCreationAttributes> implements DomsCalcDayRuleAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsCalcDayRule {
    return DomsCalcDayRule.init({
    domain: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    domainDesc: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'domain_desc'
    }
  }, {
    sequelize,
    tableName: 'doms_calc_day_rule',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_calc_day_rule_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_calc_day_rule",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
