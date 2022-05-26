import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmContractLink, CrmContractLinkId } from './CrmContractLink';
import type { CrmInvptyLink, CrmInvptyLinkId } from './CrmInvptyLink';
import type { CrmNetagrDet, CrmNetagrDetId } from './CrmNetagrDet';
import type { CrmProductLink, CrmProductLinkId } from './CrmProductLink';

export interface DomsRepartitionMethodAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsRepartitionMethodPk = "domain";
export type DomsRepartitionMethodId = DomsRepartitionMethod[DomsRepartitionMethodPk];
export type DomsRepartitionMethodCreationAttributes = DomsRepartitionMethodAttributes;

export class DomsRepartitionMethod extends Model<DomsRepartitionMethodAttributes, DomsRepartitionMethodCreationAttributes> implements DomsRepartitionMethodAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsRepartitionMethod hasMany CrmContractLink via repartitionMethod
  crmContractLinks!: CrmContractLink[];
  getCrmContractLinks!: Sequelize.HasManyGetAssociationsMixin<CrmContractLink>;
  setCrmContractLinks!: Sequelize.HasManySetAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  addCrmContractLink!: Sequelize.HasManyAddAssociationMixin<CrmContractLink, CrmContractLinkId>;
  addCrmContractLinks!: Sequelize.HasManyAddAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  createCrmContractLink!: Sequelize.HasManyCreateAssociationMixin<CrmContractLink>;
  removeCrmContractLink!: Sequelize.HasManyRemoveAssociationMixin<CrmContractLink, CrmContractLinkId>;
  removeCrmContractLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmContractLink!: Sequelize.HasManyHasAssociationMixin<CrmContractLink, CrmContractLinkId>;
  hasCrmContractLinks!: Sequelize.HasManyHasAssociationsMixin<CrmContractLink, CrmContractLinkId>;
  countCrmContractLinks!: Sequelize.HasManyCountAssociationsMixin;
  // DomsRepartitionMethod hasMany CrmInvptyLink via repartitionMethod
  crmInvptyLinks!: CrmInvptyLink[];
  getCrmInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<CrmInvptyLink>;
  setCrmInvptyLinks!: Sequelize.HasManySetAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmInvptyLink!: Sequelize.HasManyAddAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmInvptyLinks!: Sequelize.HasManyAddAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  createCrmInvptyLink!: Sequelize.HasManyCreateAssociationMixin<CrmInvptyLink>;
  removeCrmInvptyLink!: Sequelize.HasManyRemoveAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  removeCrmInvptyLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmInvptyLink!: Sequelize.HasManyHasAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmInvptyLinks!: Sequelize.HasManyHasAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  countCrmInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // DomsRepartitionMethod hasMany CrmNetagrDet via repartitionMethod
  crmNetagrDets!: CrmNetagrDet[];
  getCrmNetagrDets!: Sequelize.HasManyGetAssociationsMixin<CrmNetagrDet>;
  setCrmNetagrDets!: Sequelize.HasManySetAssociationsMixin<CrmNetagrDet, CrmNetagrDetId>;
  addCrmNetagrDet!: Sequelize.HasManyAddAssociationMixin<CrmNetagrDet, CrmNetagrDetId>;
  addCrmNetagrDets!: Sequelize.HasManyAddAssociationsMixin<CrmNetagrDet, CrmNetagrDetId>;
  createCrmNetagrDet!: Sequelize.HasManyCreateAssociationMixin<CrmNetagrDet>;
  removeCrmNetagrDet!: Sequelize.HasManyRemoveAssociationMixin<CrmNetagrDet, CrmNetagrDetId>;
  removeCrmNetagrDets!: Sequelize.HasManyRemoveAssociationsMixin<CrmNetagrDet, CrmNetagrDetId>;
  hasCrmNetagrDet!: Sequelize.HasManyHasAssociationMixin<CrmNetagrDet, CrmNetagrDetId>;
  hasCrmNetagrDets!: Sequelize.HasManyHasAssociationsMixin<CrmNetagrDet, CrmNetagrDetId>;
  countCrmNetagrDets!: Sequelize.HasManyCountAssociationsMixin;
  // DomsRepartitionMethod hasMany CrmProductLink via repartitionMethod
  crmProductLinks!: CrmProductLink[];
  getCrmProductLinks!: Sequelize.HasManyGetAssociationsMixin<CrmProductLink>;
  setCrmProductLinks!: Sequelize.HasManySetAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  addCrmProductLink!: Sequelize.HasManyAddAssociationMixin<CrmProductLink, CrmProductLinkId>;
  addCrmProductLinks!: Sequelize.HasManyAddAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  createCrmProductLink!: Sequelize.HasManyCreateAssociationMixin<CrmProductLink>;
  removeCrmProductLink!: Sequelize.HasManyRemoveAssociationMixin<CrmProductLink, CrmProductLinkId>;
  removeCrmProductLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmProductLink!: Sequelize.HasManyHasAssociationMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmProductLinks!: Sequelize.HasManyHasAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  countCrmProductLinks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsRepartitionMethod {
    return DomsRepartitionMethod.init({
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
    tableName: 'doms_repartition_method',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_repartition_method_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_repartition_method",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
