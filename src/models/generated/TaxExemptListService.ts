import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxExemption, TaxExemptionId } from './TaxExemption';

export interface TaxExemptListServiceAttributes {
  taxExemptionId: number;
  taxExempTypeOfService: string;
}

export type TaxExemptListServicePk = "taxExemptionId" | "taxExempTypeOfService";
export type TaxExemptListServiceId = TaxExemptListService[TaxExemptListServicePk];
export type TaxExemptListServiceCreationAttributes = TaxExemptListServiceAttributes;

export class TaxExemptListService extends Model<TaxExemptListServiceAttributes, TaxExemptListServiceCreationAttributes> implements TaxExemptListServiceAttributes {
  taxExemptionId!: number;
  taxExempTypeOfService!: string;

  // TaxExemptListService belongsTo TaxExemption via taxExemptionId
  taxExemption!: TaxExemption;
  getTaxExemption!: Sequelize.BelongsToGetAssociationMixin<TaxExemption>;
  setTaxExemption!: Sequelize.BelongsToSetAssociationMixin<TaxExemption, TaxExemptionId>;
  createTaxExemption!: Sequelize.BelongsToCreateAssociationMixin<TaxExemption>;

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxExemptListService {
    return TaxExemptListService.init({
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
    taxExempTypeOfService: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      field: 'tax_exemp_type_of_service'
    }
  }, {
    sequelize,
    tableName: 'tax_exempt_list_service',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-TAX_EXEMPT_LIST_SERVICE",
        unique: true,
        fields: [
          { name: "tax_exemption_id" },
          { name: "tax_exemp_type_of_service" },
        ]
      },
    ]
  });
  }
}
