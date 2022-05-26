import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { MktdEodPrice, MktdEodPriceId } from './MktdEodPrice';

export interface MktdSecurityAttributes {
  securityReference: string;
  securityDescription?: string;
  securitySource?: string;
  sourceTicker?: string;
}

export type MktdSecurityPk = "securityReference";
export type MktdSecurityId = MktdSecurity[MktdSecurityPk];
export type MktdSecurityOptionalAttributes = "securityDescription" | "securitySource" | "sourceTicker";
export type MktdSecurityCreationAttributes = Optional<MktdSecurityAttributes, MktdSecurityOptionalAttributes>;

export class MktdSecurity extends Model<MktdSecurityAttributes, MktdSecurityCreationAttributes> implements MktdSecurityAttributes {
  securityReference!: string;
  securityDescription?: string;
  securitySource?: string;
  sourceTicker?: string;

  // MktdSecurity hasMany MktdEodPrice via securityReference
  mktdEodPrices!: MktdEodPrice[];
  getMktdEodPrices!: Sequelize.HasManyGetAssociationsMixin<MktdEodPrice>;
  setMktdEodPrices!: Sequelize.HasManySetAssociationsMixin<MktdEodPrice, MktdEodPriceId>;
  addMktdEodPrice!: Sequelize.HasManyAddAssociationMixin<MktdEodPrice, MktdEodPriceId>;
  addMktdEodPrices!: Sequelize.HasManyAddAssociationsMixin<MktdEodPrice, MktdEodPriceId>;
  createMktdEodPrice!: Sequelize.HasManyCreateAssociationMixin<MktdEodPrice>;
  removeMktdEodPrice!: Sequelize.HasManyRemoveAssociationMixin<MktdEodPrice, MktdEodPriceId>;
  removeMktdEodPrices!: Sequelize.HasManyRemoveAssociationsMixin<MktdEodPrice, MktdEodPriceId>;
  hasMktdEodPrice!: Sequelize.HasManyHasAssociationMixin<MktdEodPrice, MktdEodPriceId>;
  hasMktdEodPrices!: Sequelize.HasManyHasAssociationsMixin<MktdEodPrice, MktdEodPriceId>;
  countMktdEodPrices!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof MktdSecurity {
    return MktdSecurity.init({
    securityReference: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      field: 'security_reference'
    },
    securityDescription: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'security_description'
    },
    securitySource: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'security_source'
    },
    sourceTicker: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'source_ticker'
    }
  }, {
    sequelize,
    tableName: 'mktd_security',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-MKTD_SECURITY",
        unique: true,
        fields: [
          { name: "security_reference" },
        ]
      },
    ]
  });
  }
}
