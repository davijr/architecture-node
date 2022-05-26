import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmNetagrDet, CrmNetagrDetId } from './CrmNetagrDet';

export interface DomsCollContractTypeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsCollContractTypePk = "domain";
export type DomsCollContractTypeId = DomsCollContractType[DomsCollContractTypePk];
export type DomsCollContractTypeCreationAttributes = DomsCollContractTypeAttributes;

export class DomsCollContractType extends Model<DomsCollContractTypeAttributes, DomsCollContractTypeCreationAttributes> implements DomsCollContractTypeAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsCollContractType hasMany CrmNetagrDet via collateralContractType
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsCollContractType {
    return DomsCollContractType.init({
    domain: {
      type: DataTypes.STRING(255),
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
    tableName: 'doms_coll_contract_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "pk_domscollcontracttype",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
