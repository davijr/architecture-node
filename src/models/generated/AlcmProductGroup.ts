import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { AlcmCapitalAccountParam, AlcmCapitalAccountParamId } from './AlcmCapitalAccountParam'
import type { AlcmCapitalProductParam, AlcmCapitalProductParamId } from './AlcmCapitalProductParam'
import type { AlcmCpadEadBase, AlcmCpadEadBaseId } from './AlcmCpadEadBase'
import type { AlcmDloLelExceptProducts } from './AlcmDloLelExceptProducts'
import type { AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId } from './AlcmLiqNsfrProductParam'

export interface AlcmProductGroupAttributes {
  alcmProductGroup: string;
  alcmProductGroupDesc?: string;
  alcmProductGroupIsActive: boolean;
  alcmProductGroupUpdateDate?: string;
}

export type AlcmProductGroupPk = 'alcmProductGroup';
export type AlcmProductGroupId = AlcmProductGroup[AlcmProductGroupPk];
export type AlcmProductGroupOptionalAttributes = 'alcmProductGroupDesc' | 'alcmProductGroupUpdateDate';
export type AlcmProductGroupCreationAttributes = Optional<AlcmProductGroupAttributes, AlcmProductGroupOptionalAttributes>;

export class AlcmProductGroup extends Model<AlcmProductGroupAttributes, AlcmProductGroupCreationAttributes> implements AlcmProductGroupAttributes {
  alcmProductGroup!: string;
  alcmProductGroupDesc?: string;
  alcmProductGroupIsActive!: boolean;
  alcmProductGroupUpdateDate?: string;

  // AlcmProductGroup hasMany AlcmCapitalAccountParam via alcmProductGroup
  alcmCapitalAccountParams!: AlcmCapitalAccountParam[];
  getAlcmCapitalAccountParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalAccountParam>;
  setAlcmCapitalAccountParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  addAlcmCapitalAccountParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  addAlcmCapitalAccountParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  createAlcmCapitalAccountParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalAccountParam>;
  removeAlcmCapitalAccountParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  removeAlcmCapitalAccountParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  hasAlcmCapitalAccountParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  hasAlcmCapitalAccountParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalAccountParam, AlcmCapitalAccountParamId>;
  countAlcmCapitalAccountParams!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmProductGroup hasMany AlcmCapitalProductParam via alcmProductGroup
  alcmCapitalProductParams!: AlcmCapitalProductParam[];
  getAlcmCapitalProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmCapitalProductParam>;
  setAlcmCapitalProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addAlcmCapitalProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  addAlcmCapitalProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  createAlcmCapitalProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmCapitalProductParam>;
  removeAlcmCapitalProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  removeAlcmCapitalProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasAlcmCapitalProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  hasAlcmCapitalProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmCapitalProductParam, AlcmCapitalProductParamId>;
  countAlcmCapitalProductParams!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmProductGroup hasMany AlcmCpadEadBase via productGroup
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
  // AlcmProductGroup hasMany AlcmDloLelExceptProducts via alcmProductGroup
  alcmDloLelExceptProducts!: AlcmDloLelExceptProducts[];
  getAlcmDloLelExceptProducts!: Sequelize.HasManyGetAssociationsMixin<AlcmDloLelExceptProducts>;
  countAlcmDloLelExceptProducts!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmProductGroup hasMany AlcmLiqNsfrProductParam via alcmProductGroup
  alcmLiqNsfrProductParams!: AlcmLiqNsfrProductParam[];
  getAlcmLiqNsfrProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmLiqNsfrProductParam>;
  setAlcmLiqNsfrProductParams!: Sequelize.HasManySetAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  addAlcmLiqNsfrProductParam!: Sequelize.HasManyAddAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  addAlcmLiqNsfrProductParams!: Sequelize.HasManyAddAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  createAlcmLiqNsfrProductParam!: Sequelize.HasManyCreateAssociationMixin<AlcmLiqNsfrProductParam>;
  removeAlcmLiqNsfrProductParam!: Sequelize.HasManyRemoveAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  removeAlcmLiqNsfrProductParams!: Sequelize.HasManyRemoveAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  hasAlcmLiqNsfrProductParam!: Sequelize.HasManyHasAssociationMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  hasAlcmLiqNsfrProductParams!: Sequelize.HasManyHasAssociationsMixin<AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId>;
  countAlcmLiqNsfrProductParams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel (sequelize: Sequelize.Sequelize): typeof AlcmProductGroup {
    return AlcmProductGroup.init({
      alcmProductGroup: {
        type: DataTypes.STRING(40),
        allowNull: false,
        primaryKey: true,
        field: 'alcm_product_group'
      },
      alcmProductGroupDesc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'alcm_product_group_desc'
      },
      alcmProductGroupIsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'alcm_product_group_is_active'
      },
      alcmProductGroupUpdateDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'alcm_product_group_update_date'
      }
    }, {
      sequelize,
      tableName: 'alcm_product_group',
      schema: 'bzdf',
      timestamps: false,
      indexes: [
        {
          name: 'PK-ALCM_PRODUCT_GROUP',
          unique: true,
          fields: [
            { name: 'alcm_product_group' }
          ]
        }
      ]
    })
  }
}
