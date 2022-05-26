import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxExemption, TaxExemptionId } from './TaxExemption';

export interface TaxExcemptionTypeAttributes {
  taxExemptionReason: string;
  taxExemptionReasonDesc: string;
}

export type TaxExcemptionTypePk = "taxExemptionReason";
export type TaxExcemptionTypeId = TaxExcemptionType[TaxExcemptionTypePk];
export type TaxExcemptionTypeCreationAttributes = TaxExcemptionTypeAttributes;

export class TaxExcemptionType extends Model<TaxExcemptionTypeAttributes, TaxExcemptionTypeCreationAttributes> implements TaxExcemptionTypeAttributes {
  taxExemptionReason!: string;
  taxExemptionReasonDesc!: string;

  // TaxExcemptionType hasMany TaxExemption via taxExemptionReason
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxExcemptionType {
    return TaxExcemptionType.init({
    taxExemptionReason: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      field: 'tax_exemption_reason'
    },
    taxExemptionReasonDesc: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'tax_exemption_reason_desc'
    }
  }, {
    sequelize,
    tableName: 'tax_excemption_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-TAX_EXCEMPTION_TYPE",
        unique: true,
        fields: [
          { name: "tax_exemption_reason" },
        ]
      },
    ]
  });
  }
}
