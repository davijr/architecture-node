import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxExemption, TaxExemptionId } from './TaxExemption';

export interface TaxExemptMunicipalityAttributes {
  taxExemptionId: number;
  taxExempValidMunicipalities: string;
}

export type TaxExemptMunicipalityPk = "taxExemptionId" | "taxExempValidMunicipalities";
export type TaxExemptMunicipalityId = TaxExemptMunicipality[TaxExemptMunicipalityPk];
export type TaxExemptMunicipalityCreationAttributes = TaxExemptMunicipalityAttributes;

export class TaxExemptMunicipality extends Model<TaxExemptMunicipalityAttributes, TaxExemptMunicipalityCreationAttributes> implements TaxExemptMunicipalityAttributes {
  taxExemptionId!: number;
  taxExempValidMunicipalities!: string;

  // TaxExemptMunicipality belongsTo TaxExemption via taxExemptionId
  taxExemption!: TaxExemption;
  getTaxExemption!: Sequelize.BelongsToGetAssociationMixin<TaxExemption>;
  setTaxExemption!: Sequelize.BelongsToSetAssociationMixin<TaxExemption, TaxExemptionId>;
  createTaxExemption!: Sequelize.BelongsToCreateAssociationMixin<TaxExemption>;

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxExemptMunicipality {
    return TaxExemptMunicipality.init({
    taxExemptionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tax_exemption',
        key: 'tax_exemption_id'
      },
      field: 'tax_exemption_id'
    },
    taxExempValidMunicipalities: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      field: 'tax_exemp_valid_municipalities'
    }
  }, {
    sequelize,
    tableName: 'tax_exempt_municipality',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-TAX_EXEMPT_MUNICIPALITY",
        unique: true,
        fields: [
          { name: "tax_exemption_id" },
          { name: "tax_exemp_valid_municipalities" },
        ]
      },
    ]
  });
  }
}
