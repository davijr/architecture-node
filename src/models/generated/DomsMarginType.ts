import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmAgreementLink, CrmAgreementLinkId } from './CrmAgreementLink';
import type { PortFutuMov, PortFutuMovId } from './PortFutuMov';
import type { PortFutuPos, PortFutuPosId } from './PortFutuPos';

export interface DomsMarginTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsMarginTypePk = "domain";
export type DomsMarginTypeId = DomsMarginType[DomsMarginTypePk];
export type DomsMarginTypeCreationAttributes = DomsMarginTypeAttributes;

export class DomsMarginType extends Model<DomsMarginTypeAttributes, DomsMarginTypeCreationAttributes> implements DomsMarginTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsMarginType hasMany CrmAgreementLink via marginType
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
  // DomsMarginType hasMany PortFutuMov via marginType
  portFutuMovs!: PortFutuMov[];
  getPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removePortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removePortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // DomsMarginType hasMany PortFutuPos via marginType
  portFutuPos!: PortFutuPos[];
  getPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removePortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removePortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsMarginType {
    return DomsMarginType.init({
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
    tableName: 'doms_margin_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_margin_type_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_margin_type",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
