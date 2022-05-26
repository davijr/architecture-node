import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyLob, CompanyLobId } from './CompanyLob';

export interface CompanyLobLnkAttributes {
  lobCodeParent: number;
  lobCodeChild: number;
}

export type CompanyLobLnkPk = "lobCodeParent" | "lobCodeChild";
export type CompanyLobLnkId = CompanyLobLnk[CompanyLobLnkPk];
export type CompanyLobLnkCreationAttributes = CompanyLobLnkAttributes;

export class CompanyLobLnk extends Model<CompanyLobLnkAttributes, CompanyLobLnkCreationAttributes> implements CompanyLobLnkAttributes {
  lobCodeParent!: number;
  lobCodeChild!: number;

  // CompanyLobLnk belongsTo CompanyLob via lobCodeChild
  lobCodeChildCompanyLob!: CompanyLob;
  getLobCodeChildCompanyLob!: Sequelize.BelongsToGetAssociationMixin<CompanyLob>;
  setLobCodeChildCompanyLob!: Sequelize.BelongsToSetAssociationMixin<CompanyLob, CompanyLobId>;
  createLobCodeChildCompanyLob!: Sequelize.BelongsToCreateAssociationMixin<CompanyLob>;
  // CompanyLobLnk belongsTo CompanyLob via lobCodeParent
  lobCodeParentCompanyLob!: CompanyLob;
  getLobCodeParentCompanyLob!: Sequelize.BelongsToGetAssociationMixin<CompanyLob>;
  setLobCodeParentCompanyLob!: Sequelize.BelongsToSetAssociationMixin<CompanyLob, CompanyLobId>;
  createLobCodeParentCompanyLob!: Sequelize.BelongsToCreateAssociationMixin<CompanyLob>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CompanyLobLnk {
    return CompanyLobLnk.init({
    lobCodeParent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company_lob',
        key: 'lob_code_lnk_id'
      },
      field: 'lob_code_parent'
    },
    lobCodeChild: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company_lob',
        key: 'lob_code_lnk_id'
      },
      field: 'lob_code_child'
    }
  }, {
    sequelize,
    tableName: 'company_lob_lnk',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-COMPANY_LOB_LNK",
        unique: true,
        fields: [
          { name: "lob_code_parent" },
          { name: "lob_code_child" },
        ]
      },
    ]
  });
  }
}
