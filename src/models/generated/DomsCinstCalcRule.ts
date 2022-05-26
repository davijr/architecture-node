import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsCinstCalcRuleAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsCinstCalcRulePk = "domain";
export type DomsCinstCalcRuleId = DomsCinstCalcRule[DomsCinstCalcRulePk];
export type DomsCinstCalcRuleCreationAttributes = DomsCinstCalcRuleAttributes;

export class DomsCinstCalcRule extends Model<DomsCinstCalcRuleAttributes, DomsCinstCalcRuleCreationAttributes> implements DomsCinstCalcRuleAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsCinstCalcRule {
    return DomsCinstCalcRule.init({
    domain: {
      type: DataTypes.STRING(4),
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
    tableName: 'doms_cinst_calc_rule',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_cinst_calc_rule_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_cinst_calc_rule",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
