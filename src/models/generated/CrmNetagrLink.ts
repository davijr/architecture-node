import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmAgreementLink, CrmAgreementLinkId } from './CrmAgreementLink';
import type { CrmNetagrDet, CrmNetagrDetId } from './CrmNetagrDet';
import type { InvptyDet, InvptyDetId } from './InvptyDet';

export interface CrmNetagrLinkAttributes {
  nettingAgreementRef: string;
  invptyCode: number;
}

export type CrmNetagrLinkPk = "nettingAgreementRef";
export type CrmNetagrLinkId = CrmNetagrLink[CrmNetagrLinkPk];
export type CrmNetagrLinkCreationAttributes = CrmNetagrLinkAttributes;

export class CrmNetagrLink extends Model<CrmNetagrLinkAttributes, CrmNetagrLinkCreationAttributes> implements CrmNetagrLinkAttributes {
  nettingAgreementRef!: string;
  invptyCode!: number;

  // CrmNetagrLink belongsTo CrmNetagrDet via nettingAgreementRef
  nettingAgreementRefCrmNetagrDet!: CrmNetagrDet;
  getNettingAgreementRefCrmNetagrDet!: Sequelize.BelongsToGetAssociationMixin<CrmNetagrDet>;
  setNettingAgreementRefCrmNetagrDet!: Sequelize.BelongsToSetAssociationMixin<CrmNetagrDet, CrmNetagrDetId>;
  createNettingAgreementRefCrmNetagrDet!: Sequelize.BelongsToCreateAssociationMixin<CrmNetagrDet>;
  // CrmNetagrLink hasMany CrmAgreementLink via nettingAgreementRef
  crmAgreementLinks!: CrmAgreementLink[];
  getCrmAgreementLinks!: Sequelize.HasManyGetAssociationsMixin<CrmAgreementLink>;
  setCrmAgreementLinks!: Sequelize.HasManySetAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmAgreementLink!: Sequelize.HasManyAddAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  addCrmAgreementLinks!: Sequelize.HasManyAddAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  createCrmAgreementLink!: Sequelize.HasManyCreateAssociationMixin<CrmAgreementLink>;
  removeCrmAgreementLink!: Sequelize.HasManyRemoveAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  removeCrmAgreementLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmAgreementLink!: Sequelize.HasManyHasAssociationMixin<CrmAgreementLink, CrmAgreementLinkId>;
  hasCrmAgreementLinks!: Sequelize.HasManyHasAssociationsMixin<CrmAgreementLink, CrmAgreementLinkId>;
  countCrmAgreementLinks!: Sequelize.HasManyCountAssociationsMixin;
  // CrmNetagrLink belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CrmNetagrLink {
    return CrmNetagrLink.init({
    nettingAgreementRef: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crm_netagr_det',
        key: 'netting_agreement_ref'
      },
      field: 'netting_agreement_ref'
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
    tableName: 'crm_netagr_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-CRM_NETAGR_LINK",
        unique: true,
        fields: [
          { name: "netting_agreement_ref" },
        ]
      },
    ]
  });
  }
}
