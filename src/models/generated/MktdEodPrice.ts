import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MktdSecurity, MktdSecurityId } from './MktdSecurity';

export interface MktdEodPriceAttributes {
  referenceDate: string;
  securityReference: string;
  securityPriceBuy?: number;
  securityPriceSell?: number;
  securityUnitaryPrice?: number;
}

export type MktdEodPricePk = "referenceDate" | "securityReference";
export type MktdEodPriceId = MktdEodPrice[MktdEodPricePk];
export type MktdEodPriceOptionalAttributes = "securityPriceBuy" | "securityPriceSell" | "securityUnitaryPrice";
export type MktdEodPriceCreationAttributes = Optional<MktdEodPriceAttributes, MktdEodPriceOptionalAttributes>;

export class MktdEodPrice extends Model<MktdEodPriceAttributes, MktdEodPriceCreationAttributes> implements MktdEodPriceAttributes {
  referenceDate!: string;
  securityReference!: string;
  securityPriceBuy?: number;
  securityPriceSell?: number;
  securityUnitaryPrice?: number;

  // MktdEodPrice belongsTo MktdSecurity via securityReference
  securityReferenceMktdSecurity!: MktdSecurity;
  getSecurityReferenceMktdSecurity!: Sequelize.BelongsToGetAssociationMixin<MktdSecurity>;
  setSecurityReferenceMktdSecurity!: Sequelize.BelongsToSetAssociationMixin<MktdSecurity, MktdSecurityId>;
  createSecurityReferenceMktdSecurity!: Sequelize.BelongsToCreateAssociationMixin<MktdSecurity>;

  static initModel(sequelize: Sequelize.Sequelize): typeof MktdEodPrice {
    return MktdEodPrice.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    securityReference: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mktd_security',
        key: 'security_reference'
      },
      field: 'security_reference'
    },
    securityPriceBuy: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'security_price_buy'
    },
    securityPriceSell: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'security_price_sell'
    },
    securityUnitaryPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'security_unitary_price'
    }
  }, {
    sequelize,
    tableName: 'mktd_eod_price',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-MKTD_EOD_PRICE",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "security_reference" },
        ]
      },
      {
        name: "mktd_eod_price_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
