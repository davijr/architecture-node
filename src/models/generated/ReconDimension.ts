import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsGlClass, DomsGlClassId } from './DomsGlClass';
import type { Product, ProductId } from './Product';
import type { ReconBzdfContractLoad, ReconBzdfContractLoadId } from './ReconBzdfContractLoad';
import type { ReconBzdfPoint, ReconBzdfPointId } from './ReconBzdfPoint';
import type { ReconDimensionGroup, ReconDimensionGroupId } from './ReconDimensionGroup';
import type { ReconMetric, ReconMetricId } from './ReconMetric';

export interface ReconDimensionAttributes {
  reconDimensionId: number;
  reconDimensionGroup: number;
  reconMetricId: number;
  productCode: string;
  glClass: string;
}

export type ReconDimensionPk = "reconDimensionId";
export type ReconDimensionId = ReconDimension[ReconDimensionPk];
export type ReconDimensionOptionalAttributes = "reconDimensionId";
export type ReconDimensionCreationAttributes = Optional<ReconDimensionAttributes, ReconDimensionOptionalAttributes>;

export class ReconDimension extends Model<ReconDimensionAttributes, ReconDimensionCreationAttributes> implements ReconDimensionAttributes {
  reconDimensionId!: number;
  reconDimensionGroup!: number;
  reconMetricId!: number;
  productCode!: string;
  glClass!: string;

  // ReconDimension belongsTo DomsGlClass via glClass
  glClassDomsGlClass!: DomsGlClass;
  getGlClassDomsGlClass!: Sequelize.BelongsToGetAssociationMixin<DomsGlClass>;
  setGlClassDomsGlClass!: Sequelize.BelongsToSetAssociationMixin<DomsGlClass, DomsGlClassId>;
  createGlClassDomsGlClass!: Sequelize.BelongsToCreateAssociationMixin<DomsGlClass>;
  // ReconDimension belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // ReconDimension hasMany ReconBzdfContractLoad via reconDimensionGroup
  reconBzdfContractLoads!: ReconBzdfContractLoad[];
  getReconBzdfContractLoads!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfContractLoad>;
  setReconBzdfContractLoads!: Sequelize.HasManySetAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  addReconBzdfContractLoad!: Sequelize.HasManyAddAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  addReconBzdfContractLoads!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  createReconBzdfContractLoad!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfContractLoad>;
  removeReconBzdfContractLoad!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  removeReconBzdfContractLoads!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  hasReconBzdfContractLoad!: Sequelize.HasManyHasAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  hasReconBzdfContractLoads!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  countReconBzdfContractLoads!: Sequelize.HasManyCountAssociationsMixin;
  // ReconDimension hasMany ReconBzdfContractLoad via reconDimensionId
  reconDimensionReconBzdfContractLoads!: ReconBzdfContractLoad[];
  getReconDimensionReconBzdfContractLoads!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfContractLoad>;
  setReconDimensionReconBzdfContractLoads!: Sequelize.HasManySetAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  addReconDimensionReconBzdfContractLoad!: Sequelize.HasManyAddAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  addReconDimensionReconBzdfContractLoads!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  createReconDimensionReconBzdfContractLoad!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfContractLoad>;
  removeReconDimensionReconBzdfContractLoad!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  removeReconDimensionReconBzdfContractLoads!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  hasReconDimensionReconBzdfContractLoad!: Sequelize.HasManyHasAssociationMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  hasReconDimensionReconBzdfContractLoads!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfContractLoad, ReconBzdfContractLoadId>;
  countReconDimensionReconBzdfContractLoads!: Sequelize.HasManyCountAssociationsMixin;
  // ReconDimension hasMany ReconBzdfPoint via reconDimensionId
  reconBzdfPoints!: ReconBzdfPoint[];
  getReconBzdfPoints!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfPoint>;
  setReconBzdfPoints!: Sequelize.HasManySetAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  addReconBzdfPoint!: Sequelize.HasManyAddAssociationMixin<ReconBzdfPoint, ReconBzdfPointId>;
  addReconBzdfPoints!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  createReconBzdfPoint!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfPoint>;
  removeReconBzdfPoint!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfPoint, ReconBzdfPointId>;
  removeReconBzdfPoints!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  hasReconBzdfPoint!: Sequelize.HasManyHasAssociationMixin<ReconBzdfPoint, ReconBzdfPointId>;
  hasReconBzdfPoints!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  countReconBzdfPoints!: Sequelize.HasManyCountAssociationsMixin;
  // ReconDimension belongsTo ReconDimensionGroup via reconDimensionGroup
  reconDimensionGroupReconDimensionGroup!: ReconDimensionGroup;
  getReconDimensionGroupReconDimensionGroup!: Sequelize.BelongsToGetAssociationMixin<ReconDimensionGroup>;
  setReconDimensionGroupReconDimensionGroup!: Sequelize.BelongsToSetAssociationMixin<ReconDimensionGroup, ReconDimensionGroupId>;
  createReconDimensionGroupReconDimensionGroup!: Sequelize.BelongsToCreateAssociationMixin<ReconDimensionGroup>;
  // ReconDimension belongsTo ReconMetric via reconMetricId
  reconMetric!: ReconMetric;
  getReconMetric!: Sequelize.BelongsToGetAssociationMixin<ReconMetric>;
  setReconMetric!: Sequelize.BelongsToSetAssociationMixin<ReconMetric, ReconMetricId>;
  createReconMetric!: Sequelize.BelongsToCreateAssociationMixin<ReconMetric>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ReconDimension {
    return ReconDimension.init({
    reconDimensionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'recon_dimension_id'
    },
    reconDimensionGroup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recon_dimension_group',
        key: 'recon_dimension_group'
      },
      field: 'recon_dimension_group'
    },
    reconMetricId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recon_metric',
        key: 'recon_metric_id'
      },
      field: 'recon_metric_id'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      references: {
        model: 'product',
        key: 'product_code'
      },
      field: 'product_code'
    },
    glClass: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_gl_class',
        key: 'domain'
      },
      field: 'gl_class'
    }
  }, {
    sequelize,
    tableName: 'recon_dimension',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-RECON_DIMENSION",
        unique: true,
        fields: [
          { name: "recon_metric_id" },
          { name: "product_code" },
          { name: "gl_class" },
        ]
      },
      {
        name: "Indx-RECON_DIMENSION2",
        unique: true,
        fields: [
          { name: "recon_dimension_id" },
          { name: "recon_dimension_group" },
        ]
      },
      {
        name: "PK-RECON_DIMENSION",
        unique: true,
        fields: [
          { name: "recon_dimension_id" },
        ]
      },
    ]
  });
  }
}
