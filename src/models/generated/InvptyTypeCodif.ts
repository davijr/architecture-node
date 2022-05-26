import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { InvptyTypeLnk, InvptyTypeLnkId } from './InvptyTypeLnk';

export interface InvptyTypeCodifAttributes {
  invptyTypeCodifier: string;
  invptyTypeCodifierDesc?: string;
}

export type InvptyTypeCodifPk = "invptyTypeCodifier";
export type InvptyTypeCodifId = InvptyTypeCodif[InvptyTypeCodifPk];
export type InvptyTypeCodifOptionalAttributes = "invptyTypeCodifierDesc";
export type InvptyTypeCodifCreationAttributes = Optional<InvptyTypeCodifAttributes, InvptyTypeCodifOptionalAttributes>;

export class InvptyTypeCodif extends Model<InvptyTypeCodifAttributes, InvptyTypeCodifCreationAttributes> implements InvptyTypeCodifAttributes {
  invptyTypeCodifier!: string;
  invptyTypeCodifierDesc?: string;

  // InvptyTypeCodif belongsToMany InvptyDet via invptyTypeCodifier and invptyCode
  invptyCodeInvptyDetInvptyTypeLnks!: InvptyDet[];
  getInvptyCodeInvptyDetInvptyTypeLnks!: Sequelize.BelongsToManyGetAssociationsMixin<InvptyDet>;
  setInvptyCodeInvptyDetInvptyTypeLnks!: Sequelize.BelongsToManySetAssociationsMixin<InvptyDet, InvptyDetId>;
  addInvptyCodeInvptyDetInvptyTypeLnk!: Sequelize.BelongsToManyAddAssociationMixin<InvptyDet, InvptyDetId>;
  addInvptyCodeInvptyDetInvptyTypeLnks!: Sequelize.BelongsToManyAddAssociationsMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDetInvptyTypeLnk!: Sequelize.BelongsToManyCreateAssociationMixin<InvptyDet>;
  removeInvptyCodeInvptyDetInvptyTypeLnk!: Sequelize.BelongsToManyRemoveAssociationMixin<InvptyDet, InvptyDetId>;
  removeInvptyCodeInvptyDetInvptyTypeLnks!: Sequelize.BelongsToManyRemoveAssociationsMixin<InvptyDet, InvptyDetId>;
  hasInvptyCodeInvptyDetInvptyTypeLnk!: Sequelize.BelongsToManyHasAssociationMixin<InvptyDet, InvptyDetId>;
  hasInvptyCodeInvptyDetInvptyTypeLnks!: Sequelize.BelongsToManyHasAssociationsMixin<InvptyDet, InvptyDetId>;
  countInvptyCodeInvptyDetInvptyTypeLnks!: Sequelize.BelongsToManyCountAssociationsMixin;
  // InvptyTypeCodif hasMany InvptyTypeLnk via invptyTypeCodifier
  invptyTypeLnks!: InvptyTypeLnk[];
  getInvptyTypeLnks!: Sequelize.HasManyGetAssociationsMixin<InvptyTypeLnk>;
  setInvptyTypeLnks!: Sequelize.HasManySetAssociationsMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  addInvptyTypeLnk!: Sequelize.HasManyAddAssociationMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  addInvptyTypeLnks!: Sequelize.HasManyAddAssociationsMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  createInvptyTypeLnk!: Sequelize.HasManyCreateAssociationMixin<InvptyTypeLnk>;
  removeInvptyTypeLnk!: Sequelize.HasManyRemoveAssociationMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  removeInvptyTypeLnks!: Sequelize.HasManyRemoveAssociationsMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  hasInvptyTypeLnk!: Sequelize.HasManyHasAssociationMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  hasInvptyTypeLnks!: Sequelize.HasManyHasAssociationsMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  countInvptyTypeLnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyTypeCodif {
    return InvptyTypeCodif.init({
    invptyTypeCodifier: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
      field: 'invpty_type_codifier'
    },
    invptyTypeCodifierDesc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'invpty_type_codifier_desc'
    }
  }, {
    sequelize,
    tableName: 'invpty_type_codif',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_TYPE_CODIF",
        unique: true,
        fields: [
          { name: "invpty_type_codifier" },
        ]
      },
    ]
  });
  }
}
