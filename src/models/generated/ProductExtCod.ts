import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Product, ProductId } from './Product';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';

export interface ProductExtCodAttributes {
  productExtCodId: number;
  productCode: string;
  sourceSystem: string;
  productCodeExt: string;
  productDescriptionExt?: string;
}

export type ProductExtCodPk = "productExtCodId";
export type ProductExtCodId = ProductExtCod[ProductExtCodPk];
export type ProductExtCodOptionalAttributes = "productDescriptionExt";
export type ProductExtCodCreationAttributes = Optional<ProductExtCodAttributes, ProductExtCodOptionalAttributes>;

export class ProductExtCod extends Model<ProductExtCodAttributes, ProductExtCodCreationAttributes> implements ProductExtCodAttributes {
  productExtCodId!: number;
  productCode!: string;
  sourceSystem!: string;
  productCodeExt!: string;
  productDescriptionExt?: string;

  // ProductExtCod belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // ProductExtCod belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ProductExtCod {
    return ProductExtCod.init({
    productExtCodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'product_ext_cod_id'
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
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      references: {
        model: 'sys_external_system',
        key: 'source_system'
      },
      field: 'source_system'
    },
    productCodeExt: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'product_code_ext'
    },
    productDescriptionExt: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'product_description_ext'
    }
  }, {
    sequelize,
    tableName: 'product_ext_cod',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-PRODUCT_EXT_COD",
        unique: true,
        fields: [
          { name: "product_code" },
          { name: "source_system" },
          { name: "product_code_ext" },
        ]
      },
      {
        name: "PK-PRODUCT_EXT_COD",
        unique: true,
        fields: [
          { name: "product_ext_cod_id" },
        ]
      },
    ]
  });
  }
}
