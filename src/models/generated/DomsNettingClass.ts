import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmNetagrDet, CrmNetagrDetId } from './CrmNetagrDet';

export interface DomsNettingClassAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsNettingClassPk = "domain";
export type DomsNettingClassId = DomsNettingClass[DomsNettingClassPk];
export type DomsNettingClassCreationAttributes = DomsNettingClassAttributes;

export class DomsNettingClass extends Model<DomsNettingClassAttributes, DomsNettingClassCreationAttributes> implements DomsNettingClassAttributes {
  domain!: string;
  domainDesc!: string;

  // DomsNettingClass hasMany CrmNetagrDet via nettingClass
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

  static initModel(sequelize: Sequelize.Sequelize): typeof DomsNettingClass {
    return DomsNettingClass.init({
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
    tableName: 'doms_netting_class',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_netting_class_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_netting_class",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
