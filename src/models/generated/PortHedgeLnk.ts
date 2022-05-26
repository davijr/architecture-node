import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsHedgeAccountingType, DomsHedgeAccountingTypeId } from './DomsHedgeAccountingType';
import type { PortContractList, PortContractListId } from './PortContractList';

export interface PortHedgeLnkAttributes {
  hedgeObjSourceTable: string;
  hedgeObjSourceSystem: string;
  hedgeObjCompanyCode: string;
  hedgeObjProductCode: string;
  hedgeObjContractReference: string;
  hedgeInsSourceTable: string;
  hedgeInsSourceSystem: string;
  hedgeInsCompanyCode: string;
  hedgeInsProductCode: string;
  hedgeInsContractReference: string;
  hedgeAccountingType: string;
}

export type PortHedgeLnkPk = "hedgeObjSourceTable" | "hedgeObjSourceSystem" | "hedgeObjCompanyCode" | "hedgeObjProductCode" | "hedgeObjContractReference" | "hedgeInsSourceTable" | "hedgeInsSourceSystem" | "hedgeInsCompanyCode" | "hedgeInsProductCode" | "hedgeInsContractReference" | "hedgeAccountingType";
export type PortHedgeLnkId = PortHedgeLnk[PortHedgeLnkPk];
export type PortHedgeLnkCreationAttributes = PortHedgeLnkAttributes;

export class PortHedgeLnk extends Model<PortHedgeLnkAttributes, PortHedgeLnkCreationAttributes> implements PortHedgeLnkAttributes {
  hedgeObjSourceTable!: string;
  hedgeObjSourceSystem!: string;
  hedgeObjCompanyCode!: string;
  hedgeObjProductCode!: string;
  hedgeObjContractReference!: string;
  hedgeInsSourceTable!: string;
  hedgeInsSourceSystem!: string;
  hedgeInsCompanyCode!: string;
  hedgeInsProductCode!: string;
  hedgeInsContractReference!: string;
  hedgeAccountingType!: string;

  // PortHedgeLnk belongsTo DomsHedgeAccountingType via hedgeAccountingType
  hedgeAccountingTypeDomsHedgeAccountingType!: DomsHedgeAccountingType;
  getHedgeAccountingTypeDomsHedgeAccountingType!: Sequelize.BelongsToGetAssociationMixin<DomsHedgeAccountingType>;
  setHedgeAccountingTypeDomsHedgeAccountingType!: Sequelize.BelongsToSetAssociationMixin<DomsHedgeAccountingType, DomsHedgeAccountingTypeId>;
  createHedgeAccountingTypeDomsHedgeAccountingType!: Sequelize.BelongsToCreateAssociationMixin<DomsHedgeAccountingType>;
  // PortHedgeLnk belongsTo PortContractList via hedgeInsCompanyCode
  hedgeInsCompanyCodePortContractList!: PortContractList;
  getHedgeInsCompanyCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setHedgeInsCompanyCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createHedgeInsCompanyCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortHedgeLnk belongsTo PortContractList via hedgeInsContractReference
  hedgeInsContractReferencePortContractList!: PortContractList;
  getHedgeInsContractReferencePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setHedgeInsContractReferencePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createHedgeInsContractReferencePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortHedgeLnk belongsTo PortContractList via hedgeInsProductCode
  hedgeInsProductCodePortContractList!: PortContractList;
  getHedgeInsProductCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setHedgeInsProductCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createHedgeInsProductCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortHedgeLnk belongsTo PortContractList via hedgeInsSourceSystem
  hedgeInsSourceSystemPortContractList!: PortContractList;
  getHedgeInsSourceSystemPortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setHedgeInsSourceSystemPortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createHedgeInsSourceSystemPortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortHedgeLnk belongsTo PortContractList via hedgeInsSourceTable
  hedgeInsSourceTablePortContractList!: PortContractList;
  getHedgeInsSourceTablePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setHedgeInsSourceTablePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createHedgeInsSourceTablePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortHedgeLnk belongsTo PortContractList via hedgeObjCompanyCode
  hedgeObjCompanyCodePortContractList!: PortContractList;
  getHedgeObjCompanyCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setHedgeObjCompanyCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createHedgeObjCompanyCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortHedgeLnk belongsTo PortContractList via hedgeObjContractReference
  hedgeObjContractReferencePortContractList!: PortContractList;
  getHedgeObjContractReferencePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setHedgeObjContractReferencePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createHedgeObjContractReferencePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortHedgeLnk belongsTo PortContractList via hedgeObjProductCode
  hedgeObjProductCodePortContractList!: PortContractList;
  getHedgeObjProductCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setHedgeObjProductCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createHedgeObjProductCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortHedgeLnk belongsTo PortContractList via hedgeObjSourceSystem
  hedgeObjSourceSystemPortContractList!: PortContractList;
  getHedgeObjSourceSystemPortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setHedgeObjSourceSystemPortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createHedgeObjSourceSystemPortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortHedgeLnk belongsTo PortContractList via hedgeObjSourceTable
  hedgeObjSourceTablePortContractList!: PortContractList;
  getHedgeObjSourceTablePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setHedgeObjSourceTablePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createHedgeObjSourceTablePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortHedgeLnk {
    return PortHedgeLnk.init({
    hedgeObjSourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'hedge_obj_source_table'
    },
    hedgeObjSourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'hedge_obj_source_system'
    },
    hedgeObjCompanyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'hedge_obj_company_code'
    },
    hedgeObjProductCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'hedge_obj_product_code'
    },
    hedgeObjContractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'hedge_obj_contract_reference'
    },
    hedgeInsSourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'hedge_ins_source_table'
    },
    hedgeInsSourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'hedge_ins_source_system'
    },
    hedgeInsCompanyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'hedge_ins_company_code'
    },
    hedgeInsProductCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'hedge_ins_product_code'
    },
    hedgeInsContractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'hedge_ins_contract_reference'
    },
    hedgeAccountingType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'doms_hedge_accounting_type',
        key: 'domain'
      },
      field: 'hedge_accounting_type'
    }
  }, {
    sequelize,
    tableName: 'port_hedge_lnk',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_HEDGE_LNK",
        unique: true,
        fields: [
          { name: "hedge_obj_source_table" },
          { name: "hedge_obj_source_system" },
          { name: "hedge_obj_company_code" },
          { name: "hedge_obj_product_code" },
          { name: "hedge_obj_contract_reference" },
          { name: "hedge_ins_source_table" },
          { name: "hedge_ins_source_system" },
          { name: "hedge_ins_company_code" },
          { name: "hedge_ins_product_code" },
          { name: "hedge_ins_contract_reference" },
          { name: "hedge_accounting_type" },
        ]
      },
    ]
  });
  }
}
