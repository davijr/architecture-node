import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GenldgAccountPlan, GenldgAccountPlanId } from './GenldgAccountPlan';
import type { InvptyDet, InvptyDetId } from './InvptyDet';

export interface GenldgInvptyLinkAttributes {
  glAccountCode: string;
  invptyCode: number;
}

export type GenldgInvptyLinkCreationAttributes = GenldgInvptyLinkAttributes;

export class GenldgInvptyLink extends Model<GenldgInvptyLinkAttributes, GenldgInvptyLinkCreationAttributes> implements GenldgInvptyLinkAttributes {
  glAccountCode!: string;
  invptyCode!: number;

  // GenldgInvptyLink belongsTo GenldgAccountPlan via glAccountCode
  glAccountCodeGenldgAccountPlan!: GenldgAccountPlan;
  getGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToGetAssociationMixin<GenldgAccountPlan>;
  setGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToSetAssociationMixin<GenldgAccountPlan, GenldgAccountPlanId>;
  createGlAccountCodeGenldgAccountPlan!: Sequelize.BelongsToCreateAssociationMixin<GenldgAccountPlan>;
  // GenldgInvptyLink belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;

  static initModel(sequelize: Sequelize.Sequelize): typeof GenldgInvptyLink {
    return GenldgInvptyLink.init({
    glAccountCode: {
      type: DataTypes.CHAR(19),
      allowNull: false,
      references: {
        model: 'genldg_account_plan',
        key: 'gl_account_code'
      },
      field: 'gl_account_code'
    },
    invptyCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_code'
    }
  }, {
    sequelize,
    tableName: 'genldg_invpty_link',
    schema: 'bzdf',
    timestamps: false
  });
  }
}
