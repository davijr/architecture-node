import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { CompanyLobLnk, CompanyLobLnkId } from './CompanyLobLnk';
import type { CompanyLobType, CompanyLobTypeId } from './CompanyLobType';
import type { InvptyDet, InvptyDetId } from './InvptyDet';

export interface CompanyLobAttributes {
  lobCode: string;
  lobDescription?: string;
  lobType: string;
  lobCodeLnkId: number;
}

export type CompanyLobPk = "lobCode";
export type CompanyLobId = CompanyLob[CompanyLobPk];
export type CompanyLobOptionalAttributes = "lobDescription";
export type CompanyLobCreationAttributes = Optional<CompanyLobAttributes, CompanyLobOptionalAttributes>;

export class CompanyLob extends Model<CompanyLobAttributes, CompanyLobCreationAttributes> implements CompanyLobAttributes {
  lobCode!: string;
  lobDescription?: string;
  lobType!: string;
  lobCodeLnkId!: number;

  // CompanyLob hasMany CompanyCostCentre via lobCode
  companyCostCentres!: CompanyCostCentre[];
  getCompanyCostCentres!: Sequelize.HasManyGetAssociationsMixin<CompanyCostCentre>;
  setCompanyCostCentres!: Sequelize.HasManySetAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  addCompanyCostCentre!: Sequelize.HasManyAddAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  addCompanyCostCentres!: Sequelize.HasManyAddAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCostCentre!: Sequelize.HasManyCreateAssociationMixin<CompanyCostCentre>;
  removeCompanyCostCentre!: Sequelize.HasManyRemoveAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  removeCompanyCostCentres!: Sequelize.HasManyRemoveAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  hasCompanyCostCentre!: Sequelize.HasManyHasAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  hasCompanyCostCentres!: Sequelize.HasManyHasAssociationsMixin<CompanyCostCentre, CompanyCostCentreId>;
  countCompanyCostCentres!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyLob belongsToMany CompanyLob via lobCodeChild and lobCodeParent
  lobCodeParentCompanyLobs!: CompanyLob[];
  getLobCodeParentCompanyLobs!: Sequelize.BelongsToManyGetAssociationsMixin<CompanyLob>;
  setLobCodeParentCompanyLobs!: Sequelize.BelongsToManySetAssociationsMixin<CompanyLob, CompanyLobId>;
  addLobCodeParentCompanyLob!: Sequelize.BelongsToManyAddAssociationMixin<CompanyLob, CompanyLobId>;
  addLobCodeParentCompanyLobs!: Sequelize.BelongsToManyAddAssociationsMixin<CompanyLob, CompanyLobId>;
  createLobCodeParentCompanyLob!: Sequelize.BelongsToManyCreateAssociationMixin<CompanyLob>;
  removeLobCodeParentCompanyLob!: Sequelize.BelongsToManyRemoveAssociationMixin<CompanyLob, CompanyLobId>;
  removeLobCodeParentCompanyLobs!: Sequelize.BelongsToManyRemoveAssociationsMixin<CompanyLob, CompanyLobId>;
  hasLobCodeParentCompanyLob!: Sequelize.BelongsToManyHasAssociationMixin<CompanyLob, CompanyLobId>;
  hasLobCodeParentCompanyLobs!: Sequelize.BelongsToManyHasAssociationsMixin<CompanyLob, CompanyLobId>;
  countLobCodeParentCompanyLobs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // CompanyLob belongsToMany CompanyLob via lobCodeParent and lobCodeChild
  lobCodeChildCompanyLobs!: CompanyLob[];
  getLobCodeChildCompanyLobs!: Sequelize.BelongsToManyGetAssociationsMixin<CompanyLob>;
  setLobCodeChildCompanyLobs!: Sequelize.BelongsToManySetAssociationsMixin<CompanyLob, CompanyLobId>;
  addLobCodeChildCompanyLob!: Sequelize.BelongsToManyAddAssociationMixin<CompanyLob, CompanyLobId>;
  addLobCodeChildCompanyLobs!: Sequelize.BelongsToManyAddAssociationsMixin<CompanyLob, CompanyLobId>;
  createLobCodeChildCompanyLob!: Sequelize.BelongsToManyCreateAssociationMixin<CompanyLob>;
  removeLobCodeChildCompanyLob!: Sequelize.BelongsToManyRemoveAssociationMixin<CompanyLob, CompanyLobId>;
  removeLobCodeChildCompanyLobs!: Sequelize.BelongsToManyRemoveAssociationsMixin<CompanyLob, CompanyLobId>;
  hasLobCodeChildCompanyLob!: Sequelize.BelongsToManyHasAssociationMixin<CompanyLob, CompanyLobId>;
  hasLobCodeChildCompanyLobs!: Sequelize.BelongsToManyHasAssociationsMixin<CompanyLob, CompanyLobId>;
  countLobCodeChildCompanyLobs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // CompanyLob hasMany CompanyLobLnk via lobCodeChild
  companyLobLnks!: CompanyLobLnk[];
  getCompanyLobLnks!: Sequelize.HasManyGetAssociationsMixin<CompanyLobLnk>;
  setCompanyLobLnks!: Sequelize.HasManySetAssociationsMixin<CompanyLobLnk, CompanyLobLnkId>;
  addCompanyLobLnk!: Sequelize.HasManyAddAssociationMixin<CompanyLobLnk, CompanyLobLnkId>;
  addCompanyLobLnks!: Sequelize.HasManyAddAssociationsMixin<CompanyLobLnk, CompanyLobLnkId>;
  createCompanyLobLnk!: Sequelize.HasManyCreateAssociationMixin<CompanyLobLnk>;
  removeCompanyLobLnk!: Sequelize.HasManyRemoveAssociationMixin<CompanyLobLnk, CompanyLobLnkId>;
  removeCompanyLobLnks!: Sequelize.HasManyRemoveAssociationsMixin<CompanyLobLnk, CompanyLobLnkId>;
  hasCompanyLobLnk!: Sequelize.HasManyHasAssociationMixin<CompanyLobLnk, CompanyLobLnkId>;
  hasCompanyLobLnks!: Sequelize.HasManyHasAssociationsMixin<CompanyLobLnk, CompanyLobLnkId>;
  countCompanyLobLnks!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyLob hasMany CompanyLobLnk via lobCodeParent
  lobCodeParentCompanyLobLnks!: CompanyLobLnk[];
  getLobCodeParentCompanyLobLnks!: Sequelize.HasManyGetAssociationsMixin<CompanyLobLnk>;
  setLobCodeParentCompanyLobLnks!: Sequelize.HasManySetAssociationsMixin<CompanyLobLnk, CompanyLobLnkId>;
  addLobCodeParentCompanyLobLnk!: Sequelize.HasManyAddAssociationMixin<CompanyLobLnk, CompanyLobLnkId>;
  addLobCodeParentCompanyLobLnks!: Sequelize.HasManyAddAssociationsMixin<CompanyLobLnk, CompanyLobLnkId>;
  createLobCodeParentCompanyLobLnk!: Sequelize.HasManyCreateAssociationMixin<CompanyLobLnk>;
  removeLobCodeParentCompanyLobLnk!: Sequelize.HasManyRemoveAssociationMixin<CompanyLobLnk, CompanyLobLnkId>;
  removeLobCodeParentCompanyLobLnks!: Sequelize.HasManyRemoveAssociationsMixin<CompanyLobLnk, CompanyLobLnkId>;
  hasLobCodeParentCompanyLobLnk!: Sequelize.HasManyHasAssociationMixin<CompanyLobLnk, CompanyLobLnkId>;
  hasLobCodeParentCompanyLobLnks!: Sequelize.HasManyHasAssociationsMixin<CompanyLobLnk, CompanyLobLnkId>;
  countLobCodeParentCompanyLobLnks!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyLob hasMany InvptyDet via lobCode
  invptyDets!: InvptyDet[];
  getInvptyDets!: Sequelize.HasManyGetAssociationsMixin<InvptyDet>;
  setInvptyDets!: Sequelize.HasManySetAssociationsMixin<InvptyDet, InvptyDetId>;
  addInvptyDet!: Sequelize.HasManyAddAssociationMixin<InvptyDet, InvptyDetId>;
  addInvptyDets!: Sequelize.HasManyAddAssociationsMixin<InvptyDet, InvptyDetId>;
  createInvptyDet!: Sequelize.HasManyCreateAssociationMixin<InvptyDet>;
  removeInvptyDet!: Sequelize.HasManyRemoveAssociationMixin<InvptyDet, InvptyDetId>;
  removeInvptyDets!: Sequelize.HasManyRemoveAssociationsMixin<InvptyDet, InvptyDetId>;
  hasInvptyDet!: Sequelize.HasManyHasAssociationMixin<InvptyDet, InvptyDetId>;
  hasInvptyDets!: Sequelize.HasManyHasAssociationsMixin<InvptyDet, InvptyDetId>;
  countInvptyDets!: Sequelize.HasManyCountAssociationsMixin;
  // CompanyLob belongsTo CompanyLobType via lobType
  lobTypeCompanyLobType!: CompanyLobType;
  getLobTypeCompanyLobType!: Sequelize.BelongsToGetAssociationMixin<CompanyLobType>;
  setLobTypeCompanyLobType!: Sequelize.BelongsToSetAssociationMixin<CompanyLobType, CompanyLobTypeId>;
  createLobTypeCompanyLobType!: Sequelize.BelongsToCreateAssociationMixin<CompanyLobType>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CompanyLob {
    return CompanyLob.init({
    lobCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      field: 'lob_code'
    },
    lobDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'lob_description'
    },
    lobType: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'company_lob_type',
        key: 'lob_type'
      },
      field: 'lob_type'
    },
    lobCodeLnkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'lob_code_lnk_id'
    }
  }, {
    sequelize,
    tableName: 'company_lob',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-COMPANY_LOB",
        unique: true,
        fields: [
          { name: "lob_code_lnk_id" },
        ]
      },
      {
        name: "PK-COMPANY_LOB",
        unique: true,
        fields: [
          { name: "lob_code" },
        ]
      },
    ]
  });
  }
}
