import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxExemption, TaxExemptionId } from './TaxExemption';
import type { TaxType, TaxTypeId } from './TaxType';

export interface TaxListAttributes {
  taxCode: string;
  taxType: string;
  taxShortName: string;
  taxLongName?: string;
}

export type TaxListPk = "taxCode";
export type TaxListId = TaxList[TaxListPk];
export type TaxListOptionalAttributes = "taxLongName";
export type TaxListCreationAttributes = Optional<TaxListAttributes, TaxListOptionalAttributes>;

export class TaxList extends Model<TaxListAttributes, TaxListCreationAttributes> implements TaxListAttributes {
  taxCode!: string;
  taxType!: string;
  taxShortName!: string;
  taxLongName?: string;

  // TaxList hasMany TaxExemption via taxCode
  taxExemptions!: TaxExemption[];
  getTaxExemptions!: Sequelize.HasManyGetAssociationsMixin<TaxExemption>;
  setTaxExemptions!: Sequelize.HasManySetAssociationsMixin<TaxExemption, TaxExemptionId>;
  addTaxExemption!: Sequelize.HasManyAddAssociationMixin<TaxExemption, TaxExemptionId>;
  addTaxExemptions!: Sequelize.HasManyAddAssociationsMixin<TaxExemption, TaxExemptionId>;
  createTaxExemption!: Sequelize.HasManyCreateAssociationMixin<TaxExemption>;
  removeTaxExemption!: Sequelize.HasManyRemoveAssociationMixin<TaxExemption, TaxExemptionId>;
  removeTaxExemptions!: Sequelize.HasManyRemoveAssociationsMixin<TaxExemption, TaxExemptionId>;
  hasTaxExemption!: Sequelize.HasManyHasAssociationMixin<TaxExemption, TaxExemptionId>;
  hasTaxExemptions!: Sequelize.HasManyHasAssociationsMixin<TaxExemption, TaxExemptionId>;
  countTaxExemptions!: Sequelize.HasManyCountAssociationsMixin;
  // TaxList belongsTo TaxType via taxType
  taxTypeTaxType!: TaxType;
  getTaxTypeTaxType!: Sequelize.BelongsToGetAssociationMixin<TaxType>;
  setTaxTypeTaxType!: Sequelize.BelongsToSetAssociationMixin<TaxType, TaxTypeId>;
  createTaxTypeTaxType!: Sequelize.BelongsToCreateAssociationMixin<TaxType>;

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxList {
    return TaxList.init({
    taxCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      field: 'tax_code'
    },
    taxType: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'tax_type',
        key: 'tax_type'
      },
      field: 'tax_type'
    },
    taxShortName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'tax_short_name'
    },
    taxLongName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'tax_long_name'
    }
  }, {
    sequelize,
    tableName: 'tax_list',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-TAX_LIST",
        unique: true,
        fields: [
          { name: "tax_code" },
        ]
      },
    ]
  });
  }
}
