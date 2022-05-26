import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DomsCollateralModeAttributes {
  domain: string;
  domainDesc: string;
}

export type DomsCollateralModePk = "domain";
export type DomsCollateralModeId = DomsCollateralMode[DomsCollateralModePk];
export type DomsCollateralModeCreationAttributes = DomsCollateralModeAttributes;

export class DomsCollateralMode extends Model<DomsCollateralModeAttributes, DomsCollateralModeCreationAttributes> implements DomsCollateralModeAttributes {
  domain!: string;
  domainDesc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DomsCollateralMode {
    return DomsCollateralMode.init({
    domain: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    domainDesc: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'domain_desc'
    }
  }, {
    sequelize,
    tableName: 'doms_collateral_mode',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "doms_collateral_mode_domain",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "pk_doms_collateral_mode",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
    ]
  });
  }
}
