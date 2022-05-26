import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { InvptyExtCod, InvptyExtCodId } from './InvptyExtCod';

export interface InvptyExtCodCodifAttributes {
  extCodeCodifier: string;
  extCodeCodifierDesc: string;
}

export type InvptyExtCodCodifPk = "extCodeCodifier";
export type InvptyExtCodCodifId = InvptyExtCodCodif[InvptyExtCodCodifPk];
export type InvptyExtCodCodifCreationAttributes = InvptyExtCodCodifAttributes;

export class InvptyExtCodCodif extends Model<InvptyExtCodCodifAttributes, InvptyExtCodCodifCreationAttributes> implements InvptyExtCodCodifAttributes {
  extCodeCodifier!: string;
  extCodeCodifierDesc!: string;

  // InvptyExtCodCodif belongsToMany InvptyDet via extCodeCodifier and invptyCode
  invptyCodeInvptyDetInvptyExtCods!: InvptyDet[];
  getInvptyCodeInvptyDetInvptyExtCods!: Sequelize.BelongsToManyGetAssociationsMixin<InvptyDet>;
  setInvptyCodeInvptyDetInvptyExtCods!: Sequelize.BelongsToManySetAssociationsMixin<InvptyDet, InvptyDetId>;
  addInvptyCodeInvptyDetInvptyExtCod!: Sequelize.BelongsToManyAddAssociationMixin<InvptyDet, InvptyDetId>;
  addInvptyCodeInvptyDetInvptyExtCods!: Sequelize.BelongsToManyAddAssociationsMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDetInvptyExtCod!: Sequelize.BelongsToManyCreateAssociationMixin<InvptyDet>;
  removeInvptyCodeInvptyDetInvptyExtCod!: Sequelize.BelongsToManyRemoveAssociationMixin<InvptyDet, InvptyDetId>;
  removeInvptyCodeInvptyDetInvptyExtCods!: Sequelize.BelongsToManyRemoveAssociationsMixin<InvptyDet, InvptyDetId>;
  hasInvptyCodeInvptyDetInvptyExtCod!: Sequelize.BelongsToManyHasAssociationMixin<InvptyDet, InvptyDetId>;
  hasInvptyCodeInvptyDetInvptyExtCods!: Sequelize.BelongsToManyHasAssociationsMixin<InvptyDet, InvptyDetId>;
  countInvptyCodeInvptyDetInvptyExtCods!: Sequelize.BelongsToManyCountAssociationsMixin;
  // InvptyExtCodCodif hasMany InvptyExtCod via extCodeCodifier
  invptyExtCods!: InvptyExtCod[];
  getInvptyExtCods!: Sequelize.HasManyGetAssociationsMixin<InvptyExtCod>;
  setInvptyExtCods!: Sequelize.HasManySetAssociationsMixin<InvptyExtCod, InvptyExtCodId>;
  addInvptyExtCod!: Sequelize.HasManyAddAssociationMixin<InvptyExtCod, InvptyExtCodId>;
  addInvptyExtCods!: Sequelize.HasManyAddAssociationsMixin<InvptyExtCod, InvptyExtCodId>;
  createInvptyExtCod!: Sequelize.HasManyCreateAssociationMixin<InvptyExtCod>;
  removeInvptyExtCod!: Sequelize.HasManyRemoveAssociationMixin<InvptyExtCod, InvptyExtCodId>;
  removeInvptyExtCods!: Sequelize.HasManyRemoveAssociationsMixin<InvptyExtCod, InvptyExtCodId>;
  hasInvptyExtCod!: Sequelize.HasManyHasAssociationMixin<InvptyExtCod, InvptyExtCodId>;
  hasInvptyExtCods!: Sequelize.HasManyHasAssociationsMixin<InvptyExtCod, InvptyExtCodId>;
  countInvptyExtCods!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyExtCodCodif {
    return InvptyExtCodCodif.init({
    extCodeCodifier: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
      field: 'ext_code_codifier'
    },
    extCodeCodifierDesc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'ext_code_codifier_desc'
    }
  }, {
    sequelize,
    tableName: 'invpty_ext_cod_codif',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_EXT_COD_CODIF",
        unique: true,
        fields: [
          { name: "ext_code_codifier" },
        ]
      },
    ]
  });
  }
}
