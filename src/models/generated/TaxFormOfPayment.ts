import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxExemption, TaxExemptionId } from './TaxExemption';

export interface TaxFormOfPaymentAttributes {
  taxFormOfPaymentId: string;
  taxFormOfPaymentDesc: string;
}

export type TaxFormOfPaymentPk = "taxFormOfPaymentId";
export type TaxFormOfPaymentId = TaxFormOfPayment[TaxFormOfPaymentPk];
export type TaxFormOfPaymentCreationAttributes = TaxFormOfPaymentAttributes;

export class TaxFormOfPayment extends Model<TaxFormOfPaymentAttributes, TaxFormOfPaymentCreationAttributes> implements TaxFormOfPaymentAttributes {
  taxFormOfPaymentId!: string;
  taxFormOfPaymentDesc!: string;

  // TaxFormOfPayment hasMany TaxExemption via taxExempFormOfPayment
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxFormOfPayment {
    return TaxFormOfPayment.init({
    taxFormOfPaymentId: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      field: 'tax_form_of_payment_id'
    },
    taxFormOfPaymentDesc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'tax_form_of_payment_desc'
    }
  }, {
    sequelize,
    tableName: 'tax_form_of_payment',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-TAX_FORM_OF_PAYMENT",
        unique: true,
        fields: [
          { name: "tax_form_of_payment_id" },
        ]
      },
    ]
  });
  }
}
