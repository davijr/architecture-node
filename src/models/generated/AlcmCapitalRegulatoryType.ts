import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmCpadEadBase, AlcmCpadEadBaseId } from './AlcmCpadEadBase';

export interface AlcmCapitalRegulatoryTypeAttributes {
  alcmRegulatoryType: string;
  alcmRegulatoryTypeDesc?: string;
}

export type AlcmCapitalRegulatoryTypePk = "alcmRegulatoryType";
export type AlcmCapitalRegulatoryTypeId = AlcmCapitalRegulatoryType[AlcmCapitalRegulatoryTypePk];
export type AlcmCapitalRegulatoryTypeOptionalAttributes = "alcmRegulatoryTypeDesc";
export type AlcmCapitalRegulatoryTypeCreationAttributes = Optional<AlcmCapitalRegulatoryTypeAttributes, AlcmCapitalRegulatoryTypeOptionalAttributes>;

export class AlcmCapitalRegulatoryType extends Model<AlcmCapitalRegulatoryTypeAttributes, AlcmCapitalRegulatoryTypeCreationAttributes> implements AlcmCapitalRegulatoryTypeAttributes {
  alcmRegulatoryType!: string;
  alcmRegulatoryTypeDesc?: string;

  // AlcmCapitalRegulatoryType hasMany AlcmCpadEadBase via regulatoryType
  alcmCpadEadBases!: AlcmCpadEadBase[];
  getAlcmCpadEadBases!: Sequelize.HasManyGetAssociationsMixin<AlcmCpadEadBase>;
  setAlcmCpadEadBases!: Sequelize.HasManySetAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addAlcmCpadEadBasis!: Sequelize.HasManyAddAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  addAlcmCpadEadBases!: Sequelize.HasManyAddAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  createAlcmCpadEadBasis!: Sequelize.HasManyCreateAssociationMixin<AlcmCpadEadBase>;
  removeAlcmCpadEadBasis!: Sequelize.HasManyRemoveAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  removeAlcmCpadEadBases!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasAlcmCpadEadBasis!: Sequelize.HasManyHasAssociationMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  hasAlcmCpadEadBases!: Sequelize.HasManyHasAssociationsMixin<AlcmCpadEadBase, AlcmCpadEadBaseId>;
  countAlcmCpadEadBases!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmCapitalRegulatoryType {
    return AlcmCapitalRegulatoryType.init({
    alcmRegulatoryType: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'alcm_regulatory_type'
    },
    alcmRegulatoryTypeDesc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'alcm_regulatory_type_desc'
    }
  }, {
    sequelize,
    tableName: 'alcm_capital_regulatory_type',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_CAPITAL_REGULATORY_TYPE",
        unique: true,
        fields: [
          { name: "alcm_regulatory_type" },
        ]
      },
    ]
  });
  }
}
