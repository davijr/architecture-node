import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyTypeLnk, InvptyTypeLnkId } from './InvptyTypeLnk';

export interface InvptyTypeAttributes {
  invptyType: string;
  invptyTypeDesc?: string;
}

export type InvptyTypePk = "invptyType";
export type InvptyTypeId = InvptyType[InvptyTypePk];
export type InvptyTypeOptionalAttributes = "invptyTypeDesc";
export type InvptyTypeCreationAttributes = Optional<InvptyTypeAttributes, InvptyTypeOptionalAttributes>;

export class InvptyType extends Model<InvptyTypeAttributes, InvptyTypeCreationAttributes> implements InvptyTypeAttributes {
  invptyType!: string;
  invptyTypeDesc?: string;

  // InvptyType hasMany InvptyTypeLnk via invptyType
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

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyType {
    return InvptyType.init({
    invptyType: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
      field: 'invpty_type'
    },
    invptyTypeDesc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'invpty_type_desc'
    }
  }, {
    sequelize,
    tableName: 'invpty_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-INVPTY_TYPE",
        unique: true,
        fields: [
          { name: "invpty_type" },
        ]
      },
      {
        name: "PK-INVPTY_TYPE",
        unique: true,
        fields: [
          { name: "invpty_type" },
        ]
      },
    ]
  });
  }
}
