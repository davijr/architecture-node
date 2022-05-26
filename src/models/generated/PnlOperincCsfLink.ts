import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PnlOperincCsf, PnlOperincCsfId } from './PnlOperincCsf';

export interface PnlOperincCsfLinkAttributes {
  referenceDate: string;
  sourceTable: string;
  sourceSystem: string;
  companyCode: string;
  productCode: string;
  contractReference: string;
}

export type PnlOperincCsfLinkPk = "referenceDate" | "sourceTable" | "sourceSystem" | "companyCode" | "productCode" | "contractReference";
export type PnlOperincCsfLinkId = PnlOperincCsfLink[PnlOperincCsfLinkPk];
export type PnlOperincCsfLinkCreationAttributes = PnlOperincCsfLinkAttributes;

export class PnlOperincCsfLink extends Model<PnlOperincCsfLinkAttributes, PnlOperincCsfLinkCreationAttributes> implements PnlOperincCsfLinkAttributes {
  referenceDate!: string;
  sourceTable!: string;
  sourceSystem!: string;
  companyCode!: string;
  productCode!: string;
  contractReference!: string;

  // PnlOperincCsfLink hasMany PnlOperincCsf via companyCode
  pnlOperincCsfs!: PnlOperincCsf[];
  getPnlOperincCsfs!: Sequelize.HasManyGetAssociationsMixin<PnlOperincCsf>;
  setPnlOperincCsfs!: Sequelize.HasManySetAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  addPnlOperincCsf!: Sequelize.HasManyAddAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  addPnlOperincCsfs!: Sequelize.HasManyAddAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  createPnlOperincCsf!: Sequelize.HasManyCreateAssociationMixin<PnlOperincCsf>;
  removePnlOperincCsf!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  removePnlOperincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasPnlOperincCsf!: Sequelize.HasManyHasAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasPnlOperincCsfs!: Sequelize.HasManyHasAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  countPnlOperincCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PnlOperincCsfLink hasMany PnlOperincCsf via contractReference
  contractReferencePnlOperincCsfs!: PnlOperincCsf[];
  getContractReferencePnlOperincCsfs!: Sequelize.HasManyGetAssociationsMixin<PnlOperincCsf>;
  setContractReferencePnlOperincCsfs!: Sequelize.HasManySetAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  addContractReferencePnlOperincCsf!: Sequelize.HasManyAddAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  addContractReferencePnlOperincCsfs!: Sequelize.HasManyAddAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  createContractReferencePnlOperincCsf!: Sequelize.HasManyCreateAssociationMixin<PnlOperincCsf>;
  removeContractReferencePnlOperincCsf!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  removeContractReferencePnlOperincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasContractReferencePnlOperincCsf!: Sequelize.HasManyHasAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasContractReferencePnlOperincCsfs!: Sequelize.HasManyHasAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  countContractReferencePnlOperincCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PnlOperincCsfLink hasMany PnlOperincCsf via productCode
  productCodePnlOperincCsfs!: PnlOperincCsf[];
  getProductCodePnlOperincCsfs!: Sequelize.HasManyGetAssociationsMixin<PnlOperincCsf>;
  setProductCodePnlOperincCsfs!: Sequelize.HasManySetAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  addProductCodePnlOperincCsf!: Sequelize.HasManyAddAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  addProductCodePnlOperincCsfs!: Sequelize.HasManyAddAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  createProductCodePnlOperincCsf!: Sequelize.HasManyCreateAssociationMixin<PnlOperincCsf>;
  removeProductCodePnlOperincCsf!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  removeProductCodePnlOperincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasProductCodePnlOperincCsf!: Sequelize.HasManyHasAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasProductCodePnlOperincCsfs!: Sequelize.HasManyHasAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  countProductCodePnlOperincCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PnlOperincCsfLink hasMany PnlOperincCsf via referenceDate
  referenceDatePnlOperincCsfs!: PnlOperincCsf[];
  getReferenceDatePnlOperincCsfs!: Sequelize.HasManyGetAssociationsMixin<PnlOperincCsf>;
  setReferenceDatePnlOperincCsfs!: Sequelize.HasManySetAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  addReferenceDatePnlOperincCsf!: Sequelize.HasManyAddAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  addReferenceDatePnlOperincCsfs!: Sequelize.HasManyAddAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  createReferenceDatePnlOperincCsf!: Sequelize.HasManyCreateAssociationMixin<PnlOperincCsf>;
  removeReferenceDatePnlOperincCsf!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  removeReferenceDatePnlOperincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasReferenceDatePnlOperincCsf!: Sequelize.HasManyHasAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasReferenceDatePnlOperincCsfs!: Sequelize.HasManyHasAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  countReferenceDatePnlOperincCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PnlOperincCsfLink hasMany PnlOperincCsf via sourceSystem
  sourceSystemPnlOperincCsfs!: PnlOperincCsf[];
  getSourceSystemPnlOperincCsfs!: Sequelize.HasManyGetAssociationsMixin<PnlOperincCsf>;
  setSourceSystemPnlOperincCsfs!: Sequelize.HasManySetAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  addSourceSystemPnlOperincCsf!: Sequelize.HasManyAddAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  addSourceSystemPnlOperincCsfs!: Sequelize.HasManyAddAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  createSourceSystemPnlOperincCsf!: Sequelize.HasManyCreateAssociationMixin<PnlOperincCsf>;
  removeSourceSystemPnlOperincCsf!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  removeSourceSystemPnlOperincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasSourceSystemPnlOperincCsf!: Sequelize.HasManyHasAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasSourceSystemPnlOperincCsfs!: Sequelize.HasManyHasAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  countSourceSystemPnlOperincCsfs!: Sequelize.HasManyCountAssociationsMixin;
  // PnlOperincCsfLink hasMany PnlOperincCsf via sourceTable
  sourceTablePnlOperincCsfs!: PnlOperincCsf[];
  getSourceTablePnlOperincCsfs!: Sequelize.HasManyGetAssociationsMixin<PnlOperincCsf>;
  setSourceTablePnlOperincCsfs!: Sequelize.HasManySetAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  addSourceTablePnlOperincCsf!: Sequelize.HasManyAddAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  addSourceTablePnlOperincCsfs!: Sequelize.HasManyAddAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  createSourceTablePnlOperincCsf!: Sequelize.HasManyCreateAssociationMixin<PnlOperincCsf>;
  removeSourceTablePnlOperincCsf!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  removeSourceTablePnlOperincCsfs!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasSourceTablePnlOperincCsf!: Sequelize.HasManyHasAssociationMixin<PnlOperincCsf, PnlOperincCsfId>;
  hasSourceTablePnlOperincCsfs!: Sequelize.HasManyHasAssociationsMixin<PnlOperincCsf, PnlOperincCsfId>;
  countSourceTablePnlOperincCsfs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof PnlOperincCsfLink {
    return PnlOperincCsfLink.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    sourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'source_table'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'source_system'
    },
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      field: 'company_code'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      field: 'product_code'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'contract_reference'
    }
  }, {
    sequelize,
    tableName: 'pnl_operinc_csf_link',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PNL_OPERINC_CSF_LINK",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "source_table" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "product_code" },
          { name: "contract_reference" },
        ]
      },
      {
        name: "pnl_operinc_csf_link_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
