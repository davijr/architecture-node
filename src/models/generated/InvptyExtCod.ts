import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { InvptyExtCodCodif, InvptyExtCodCodifId } from './InvptyExtCodCodif';

export interface InvptyExtCodAttributes {
  extCodeCodifier: string;
  invptyCode: number;
  extInvptyCode: string;
  taxNifDescription?: string;
}

export type InvptyExtCodPk = "extCodeCodifier" | "invptyCode";
export type InvptyExtCodId = InvptyExtCod[InvptyExtCodPk];
export type InvptyExtCodOptionalAttributes = "taxNifDescription";
export type InvptyExtCodCreationAttributes = Optional<InvptyExtCodAttributes, InvptyExtCodOptionalAttributes>;

export class InvptyExtCod extends Model<InvptyExtCodAttributes, InvptyExtCodCreationAttributes> implements InvptyExtCodAttributes {
  extCodeCodifier!: string;
  invptyCode!: number;
  extInvptyCode!: string;
  taxNifDescription?: string;

  // InvptyExtCod belongsTo InvptyDet via invptyCode
  invptyCodeInvptyDet!: InvptyDet;
  getInvptyCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setInvptyCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createInvptyCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // InvptyExtCod belongsTo InvptyExtCodCodif via extCodeCodifier
  extCodeCodifierInvptyExtCodCodif!: InvptyExtCodCodif;
  getExtCodeCodifierInvptyExtCodCodif!: Sequelize.BelongsToGetAssociationMixin<InvptyExtCodCodif>;
  setExtCodeCodifierInvptyExtCodCodif!: Sequelize.BelongsToSetAssociationMixin<InvptyExtCodCodif, InvptyExtCodCodifId>;
  createExtCodeCodifierInvptyExtCodCodif!: Sequelize.BelongsToCreateAssociationMixin<InvptyExtCodCodif>;

  static initModel(sequelize: Sequelize.Sequelize): typeof InvptyExtCod {
    return InvptyExtCod.init({
    extCodeCodifier: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invpty_ext_cod_codif',
        key: 'ext_code_codifier'
      },
      field: 'ext_code_codifier'
    },
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
    extInvptyCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'ext_invpty_code'
    },
    taxNifDescription: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'tax_nif_description'
    }
  }, {
    sequelize,
    tableName: 'invpty_ext_cod',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-INVPTY_EXT_COD",
        unique: true,
        fields: [
          { name: "ext_code_codifier" },
          { name: "invpty_code" },
        ]
      },
    ]
  });
  }
}
