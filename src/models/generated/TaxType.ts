import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxList, TaxListId } from './TaxList';

export interface TaxTypeAttributes {
  taxType: string;
  taxTypeDesc: string;
}

export type TaxTypePk = "taxType";
export type TaxTypeId = TaxType[TaxTypePk];
export type TaxTypeCreationAttributes = TaxTypeAttributes;

export class TaxType extends Model<TaxTypeAttributes, TaxTypeCreationAttributes> implements TaxTypeAttributes {
  taxType!: string;
  taxTypeDesc!: string;

  // TaxType hasMany TaxList via taxType
  taxLists!: TaxList[];
  getTaxLists!: Sequelize.HasManyGetAssociationsMixin<TaxList>;
  setTaxLists!: Sequelize.HasManySetAssociationsMixin<TaxList, TaxListId>;
  addTaxList!: Sequelize.HasManyAddAssociationMixin<TaxList, TaxListId>;
  addTaxLists!: Sequelize.HasManyAddAssociationsMixin<TaxList, TaxListId>;
  createTaxList!: Sequelize.HasManyCreateAssociationMixin<TaxList>;
  removeTaxList!: Sequelize.HasManyRemoveAssociationMixin<TaxList, TaxListId>;
  removeTaxLists!: Sequelize.HasManyRemoveAssociationsMixin<TaxList, TaxListId>;
  hasTaxList!: Sequelize.HasManyHasAssociationMixin<TaxList, TaxListId>;
  hasTaxLists!: Sequelize.HasManyHasAssociationsMixin<TaxList, TaxListId>;
  countTaxLists!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxType {
    return TaxType.init({
    taxType: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      field: 'tax_type'
    },
    taxTypeDesc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'tax_type_desc'
    }
  }, {
    sequelize,
    tableName: 'tax_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-TAX_TYPE",
        unique: true,
        fields: [
          { name: "tax_type" },
        ]
      },
      {
        name: "tax_type_tax_type",
        unique: true,
        fields: [
          { name: "tax_type" },
        ]
      },
    ]
  });
  }
}
