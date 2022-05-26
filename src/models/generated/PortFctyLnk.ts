import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PortContractList, PortContractListId } from './PortContractList';
import type { PortFctyPos, PortFctyPosId } from './PortFctyPos';

export interface PortFctyLnkAttributes {
  referenceDate: string;
  facilitySourceSystem: string;
  facilityCompanyCode: string;
  facilityProductCode: string;
  facilityReference: string;
  sourceTable: string;
  sourceSystem: string;
  companyCode: string;
  productCode: string;
  contractReference: string;
  fkPortFctyPosfirstContractReference: string;
}

export type PortFctyLnkPk = "referenceDate" | "facilitySourceSystem" | "facilityCompanyCode" | "facilityProductCode" | "facilityReference" | "sourceTable" | "sourceSystem" | "companyCode" | "productCode" | "contractReference";
export type PortFctyLnkId = PortFctyLnk[PortFctyLnkPk];
export type PortFctyLnkCreationAttributes = PortFctyLnkAttributes;

export class PortFctyLnk extends Model<PortFctyLnkAttributes, PortFctyLnkCreationAttributes> implements PortFctyLnkAttributes {
  referenceDate!: string;
  facilitySourceSystem!: string;
  facilityCompanyCode!: string;
  facilityProductCode!: string;
  facilityReference!: string;
  sourceTable!: string;
  sourceSystem!: string;
  companyCode!: string;
  productCode!: string;
  contractReference!: string;
  fkPortFctyPosfirstContractReference!: string;

  // PortFctyLnk belongsTo PortContractList via companyCode
  companyCodePortContractList!: PortContractList;
  getCompanyCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setCompanyCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createCompanyCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortFctyLnk belongsTo PortContractList via contractReference
  contractReferencePortContractList!: PortContractList;
  getContractReferencePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setContractReferencePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createContractReferencePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortFctyLnk belongsTo PortContractList via productCode
  productCodePortContractList!: PortContractList;
  getProductCodePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setProductCodePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createProductCodePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortFctyLnk belongsTo PortContractList via sourceSystem
  sourceSystemPortContractList!: PortContractList;
  getSourceSystemPortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSourceSystemPortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSourceSystemPortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortFctyLnk belongsTo PortContractList via sourceTable
  sourceTablePortContractList!: PortContractList;
  getSourceTablePortContractList!: Sequelize.BelongsToGetAssociationMixin<PortContractList>;
  setSourceTablePortContractList!: Sequelize.BelongsToSetAssociationMixin<PortContractList, PortContractListId>;
  createSourceTablePortContractList!: Sequelize.BelongsToCreateAssociationMixin<PortContractList>;
  // PortFctyLnk belongsTo PortFctyPos via fkPortFctyPosfirstContractReference
  fkPortFctyPosfirstContractReferencePortFctyPo!: PortFctyPos;
  getFkPortFctyPosfirstContractReferencePortFctyPo!: Sequelize.BelongsToGetAssociationMixin<PortFctyPos>;
  setFkPortFctyPosfirstContractReferencePortFctyPo!: Sequelize.BelongsToSetAssociationMixin<PortFctyPos, PortFctyPosId>;
  createFkPortFctyPosfirstContractReferencePortFctyPo!: Sequelize.BelongsToCreateAssociationMixin<PortFctyPos>;
  // PortFctyLnk belongsTo PortFctyPos via facilityProductCode
  facilityProductCodePortFctyPo!: PortFctyPos;
  getFacilityProductCodePortFctyPo!: Sequelize.BelongsToGetAssociationMixin<PortFctyPos>;
  setFacilityProductCodePortFctyPo!: Sequelize.BelongsToSetAssociationMixin<PortFctyPos, PortFctyPosId>;
  createFacilityProductCodePortFctyPo!: Sequelize.BelongsToCreateAssociationMixin<PortFctyPos>;
  // PortFctyLnk belongsTo PortFctyPos via facilityReference
  facilityReferencePortFctyPo!: PortFctyPos;
  getFacilityReferencePortFctyPo!: Sequelize.BelongsToGetAssociationMixin<PortFctyPos>;
  setFacilityReferencePortFctyPo!: Sequelize.BelongsToSetAssociationMixin<PortFctyPos, PortFctyPosId>;
  createFacilityReferencePortFctyPo!: Sequelize.BelongsToCreateAssociationMixin<PortFctyPos>;
  // PortFctyLnk belongsTo PortFctyPos via facilitySourceSystem
  facilitySourceSystemPortFctyPo!: PortFctyPos;
  getFacilitySourceSystemPortFctyPo!: Sequelize.BelongsToGetAssociationMixin<PortFctyPos>;
  setFacilitySourceSystemPortFctyPo!: Sequelize.BelongsToSetAssociationMixin<PortFctyPos, PortFctyPosId>;
  createFacilitySourceSystemPortFctyPo!: Sequelize.BelongsToCreateAssociationMixin<PortFctyPos>;
  // PortFctyLnk belongsTo PortFctyPos via referenceDate
  referenceDatePortFctyPo!: PortFctyPos;
  getReferenceDatePortFctyPo!: Sequelize.BelongsToGetAssociationMixin<PortFctyPos>;
  setReferenceDatePortFctyPo!: Sequelize.BelongsToSetAssociationMixin<PortFctyPos, PortFctyPosId>;
  createReferenceDatePortFctyPo!: Sequelize.BelongsToCreateAssociationMixin<PortFctyPos>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortFctyLnk {
    return PortFctyLnk.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_fcty_pos',
        key: 'source_system'
      },
      field: 'reference_date'
    },
    facilitySourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_fcty_pos',
        key: 'source_system'
      },
      field: 'facility_source_system'
    },
    facilityCompanyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      field: 'facility_company_code'
    },
    facilityProductCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_fcty_pos',
        key: 'source_system'
      },
      field: 'facility_product_code'
    },
    facilityReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_fcty_pos',
        key: 'source_system'
      },
      field: 'facility_reference'
    },
    sourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'source_table'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'source_system'
    },
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'company_code'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'product_code'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'port_contract_list',
        key: 'source_table'
      },
      field: 'contract_reference'
    },
    fkPortFctyPosfirstContractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'port_fcty_pos',
        key: 'source_system'
      },
      field: 'FK-PORT_FCTY_POSFIRST_CONTRACT_REFERENCE'
    }
  }, {
    sequelize,
    tableName: 'port_fcty_lnk',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_FCTY_LNK",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "facility_source_system" },
          { name: "facility_company_code" },
          { name: "facility_product_code" },
          { name: "facility_reference" },
          { name: "source_table" },
          { name: "source_system" },
          { name: "company_code" },
          { name: "product_code" },
          { name: "contract_reference" },
        ]
      },
      {
        name: "port_fcty_lnk_reference_date",
        fields: [
          { name: "reference_date" },
        ]
      },
    ]
  });
  }
}
