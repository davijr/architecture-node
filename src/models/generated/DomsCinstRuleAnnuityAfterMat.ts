import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsCinstRuleAnnuityAfterMatAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsCinstRuleAnnuityAfterMatPk = "domain";
export type DomsCinstRuleAnnuityAfterMatId = DomsCinstRuleAnnuityAfterMat[DomsCinstRuleAnnuityAfterMatPk];
export type DomsCinstRuleAnnuityAfterMatCreationAttributes = DomsCinstRuleAnnuityAfterMatAttributes;

export class DomsCinstRuleAnnuityAfterMat extends Model<DomsCinstRuleAnnuityAfterMatAttributes, DomsCinstRuleAnnuityAfterMatCreationAttributes> implements DomsCinstRuleAnnuityAfterMatAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsCinstRuleAnnuityAfterMat {
    return DomsCinstRuleAnnuityAfterMat.init({
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
    tableName: 'doms_cinst_rule_annuity_after_mat',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_cinst_rule_annuity_after_mat_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_cinst_rule_annuity_after_mat",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
