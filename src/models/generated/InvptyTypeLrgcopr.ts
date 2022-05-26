import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyDet, InvptyDetId } from './InvptyDet';

export interface InvptyTypeLrgcoprAttributes {
  invptyCode: number;
  classificationDate: string;
  largeCorporate: boolean;
}

export type InvptyTypeLrgcoprPk = "invptyCode" | "classificationDate";
export type InvptyTypeLrgcoprId = InvptyTypeLrgcopr[InvptyTypeLrgcoprPk];
export type InvptyTypeLrgcoprCreationAttributes = InvptyTypeLrgcoprAttributes;

export class InvptyTypeLrgcopr extends Model<InvptyTypeLrgcoprAttributes, InvptyTypeLrgcoprCreationAttributes> implements InvptyTypeLrgcoprAttributes {
  invptyCode!: number;
  classificationDate!: string;
  largeCorporate!: boolean;

  // InvptyTypeLrgcopr belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyTypeLrgcopr {
    return InvptyTypeLrgcopr.init({
    invptyCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'invpty_code'
    },
    classificationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'classification_date'
    },
    largeCorporate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'large_corporate'
    }
  }, {
    sequelize,
    tableName: 'invpty_type_lrgcopr',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_TYPE_LRGCOPR",
        unique: true,
        fields: [
          { name: "invpty_code" },
          { name: "classification_date" },
        ]
      },
    ]
  });
  }
}
