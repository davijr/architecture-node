import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmProductGroup, AlcmProductGroupId } from './AlcmProductGroup';

export interface AlcmDloLelExceptProductsAttributes {
  alcmProductGroup: string;
  exclusionRegReference: string;
  recordInitialDate: string;
  recordEndDate?: string;
}

export type AlcmDloLelExceptProductsOptionalAttributes = "recordEndDate";
export type AlcmDloLelExceptProductsCreationAttributes = Optional<AlcmDloLelExceptProductsAttributes, AlcmDloLelExceptProductsOptionalAttributes>;

export class AlcmDloLelExceptProducts extends Model<AlcmDloLelExceptProductsAttributes, AlcmDloLelExceptProductsCreationAttributes> implements AlcmDloLelExceptProductsAttributes {
  alcmProductGroup!: string;
  exclusionRegReference!: string;
  recordInitialDate!: string;
  recordEndDate?: string;

  // AlcmDloLelExceptProducts belongsTo AlcmProductGroup via alcmProductGroup
  alcmProductGroupAlcmProductGroup!: AlcmProductGroup;
  getAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToGetAssociationMixin<AlcmProductGroup>;
  setAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToSetAssociationMixin<AlcmProductGroup, AlcmProductGroupId>;
  createAlcmProductGroupAlcmProductGroup!: Sequelize.BelongsToCreateAssociationMixin<AlcmProductGroup>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloLelExceptProducts {
    return AlcmDloLelExceptProducts.init({
    alcmProductGroup: {
      type: DataTypes.STRING(40),
      allowNull: false,
      references: {
        model: 'alcm_product_group',
        key: 'alcm_product_group'
      },
      field: 'alcm_product_group'
    },
    exclusionRegReference: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      field: 'exclusion_reg_reference'
    },
    recordInitialDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'record_initial_date'
    },
    recordEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'record_end_date'
    }
  }, {
    sequelize,
    tableName: 'alcm_dlo_lel_except_products',
    schema: 'bzdf',
    timestamps: false
  });
  }
}
