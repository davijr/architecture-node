import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmCapitalProductParam, AlcmCapitalProductParamId } from './AlcmCapitalProductParam';
import type { AlcmLiqNsfrProductParam, AlcmLiqNsfrProductParamId } from './AlcmLiqNsfrProductParam';
import type { CrmGuarPos, CrmGuarPosId } from './CrmGuarPos';
import type { CrmInstrumentList, CrmInstrumentListId } from './CrmInstrumentList';
import type { CrmProductLink, CrmProductLinkId } from './CrmProductLink';
import type { FcmgtProduct, FcmgtProductId } from './FcmgtProduct';
import type { FcmgtProductLink, FcmgtProductLinkId } from './FcmgtProductLink';
import type { PortContractList, PortContractListId } from './PortContractList';
import type { PortDsecMov, PortDsecMovId } from './PortDsecMov';
import type { PortDsecPos, PortDsecPosId } from './PortDsecPos';
import type { PortFctyMov, PortFctyMovId } from './PortFctyMov';
import type { PortFctyPos, PortFctyPosId } from './PortFctyPos';
import type { PortFincMov, PortFincMovId } from './PortFincMov';
import type { PortFincPos, PortFincPosId } from './PortFincPos';
import type { PortFoexMov, PortFoexMovId } from './PortFoexMov';
import type { PortFoexPos, PortFoexPosId } from './PortFoexPos';
import type { PortFutuMov, PortFutuMovId } from './PortFutuMov';
import type { PortFutuPos, PortFutuPosId } from './PortFutuPos';
import type { PortGuarMov, PortGuarMovId } from './PortGuarMov';
import type { PortGuarPos, PortGuarPosId } from './PortGuarPos';
import type { PortLoanMov, PortLoanMovId } from './PortLoanMov';
import type { PortLoanPos, PortLoanPosId } from './PortLoanPos';
import type { PortNdfsMov, PortNdfsMovId } from './PortNdfsMov';
import type { PortNdfsPos, PortNdfsPosId } from './PortNdfsPos';
import type { PortNostroPos, PortNostroPosId } from './PortNostroPos';
import type { PortOtherPos, PortOtherPosId } from './PortOtherPos';
import type { PortRecvLnk, PortRecvLnkId } from './PortRecvLnk';
import type { PortSwapMov, PortSwapMovId } from './PortSwapMov';
import type { PortSwapPos, PortSwapPosId } from './PortSwapPos';
import type { PortVostroPos, PortVostroPosId } from './PortVostroPos';
import type { ProductExtCod, ProductExtCodId } from './ProductExtCod';
import type { ProductHsbcGrpLink, ProductHsbcGrpLinkId } from './ProductHsbcGrpLink';
import type { ReconDimension, ReconDimensionId } from './ReconDimension';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';

export interface ProductAttributes {
  productCode: string;
  productDescription: string;
  productIsIso: boolean;
  productIsApproved: boolean;
  recordInitialDate: string;
  recordEndDate?: string;
}

export type ProductPk = "productCode";
export type ProductId = Product[ProductPk];
export type ProductOptionalAttributes = "recordEndDate";
export type ProductCreationAttributes = Optional<ProductAttributes, ProductOptionalAttributes>;

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  productCode!: string;
  productDescription!: string;
  productIsIso!: boolean;
  productIsApproved!: boolean;
  recordInitialDate!: string;
  recordEndDate?: string;

  // Product hasMany AlcmCapitalProductParam via productCode
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
  // Product hasMany AlcmLiqNsfrProductParam via productCode
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
  // Product hasMany CrmGuarPos via productCode
  crmGuarPos!: CrmGuarPos[];
  getCrmGuarPos!: Sequelize.HasManyGetAssociationsMixin<CrmGuarPos>;
  setCrmGuarPos!: Sequelize.HasManySetAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  addCrmGuarPo!: Sequelize.HasManyAddAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  addCrmGuarPos!: Sequelize.HasManyAddAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  createCrmGuarPo!: Sequelize.HasManyCreateAssociationMixin<CrmGuarPos>;
  removeCrmGuarPo!: Sequelize.HasManyRemoveAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  removeCrmGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  hasCrmGuarPo!: Sequelize.HasManyHasAssociationMixin<CrmGuarPos, CrmGuarPosId>;
  hasCrmGuarPos!: Sequelize.HasManyHasAssociationsMixin<CrmGuarPos, CrmGuarPosId>;
  countCrmGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany CrmInstrumentList via crmProductCode
  crmInstrumentLists!: CrmInstrumentList[];
  getCrmInstrumentLists!: Sequelize.HasManyGetAssociationsMixin<CrmInstrumentList>;
  setCrmInstrumentLists!: Sequelize.HasManySetAssociationsMixin<CrmInstrumentList, CrmInstrumentListId>;
  addCrmInstrumentList!: Sequelize.HasManyAddAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  addCrmInstrumentLists!: Sequelize.HasManyAddAssociationsMixin<CrmInstrumentList, CrmInstrumentListId>;
  createCrmInstrumentList!: Sequelize.HasManyCreateAssociationMixin<CrmInstrumentList>;
  removeCrmInstrumentList!: Sequelize.HasManyRemoveAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  removeCrmInstrumentLists!: Sequelize.HasManyRemoveAssociationsMixin<CrmInstrumentList, CrmInstrumentListId>;
  hasCrmInstrumentList!: Sequelize.HasManyHasAssociationMixin<CrmInstrumentList, CrmInstrumentListId>;
  hasCrmInstrumentLists!: Sequelize.HasManyHasAssociationsMixin<CrmInstrumentList, CrmInstrumentListId>;
  countCrmInstrumentLists!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany CrmProductLink via productCode
  crmProductLinks!: CrmProductLink[];
  getCrmProductLinks!: Sequelize.HasManyGetAssociationsMixin<CrmProductLink>;
  setCrmProductLinks!: Sequelize.HasManySetAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  addCrmProductLink!: Sequelize.HasManyAddAssociationMixin<CrmProductLink, CrmProductLinkId>;
  addCrmProductLinks!: Sequelize.HasManyAddAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  createCrmProductLink!: Sequelize.HasManyCreateAssociationMixin<CrmProductLink>;
  removeCrmProductLink!: Sequelize.HasManyRemoveAssociationMixin<CrmProductLink, CrmProductLinkId>;
  removeCrmProductLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmProductLink!: Sequelize.HasManyHasAssociationMixin<CrmProductLink, CrmProductLinkId>;
  hasCrmProductLinks!: Sequelize.HasManyHasAssociationsMixin<CrmProductLink, CrmProductLinkId>;
  countCrmProductLinks!: Sequelize.HasManyCountAssociationsMixin;
  // Product belongsToMany FcmgtProduct via productCode and carmProductCode
  carmProductCodeFcmgtProductFcmgtProductLinks!: FcmgtProduct[];
  getCarmProductCodeFcmgtProductFcmgtProductLinks!: Sequelize.BelongsToManyGetAssociationsMixin<FcmgtProduct>;
  setCarmProductCodeFcmgtProductFcmgtProductLinks!: Sequelize.BelongsToManySetAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  addCarmProductCodeFcmgtProductFcmgtProductLink!: Sequelize.BelongsToManyAddAssociationMixin<FcmgtProduct, FcmgtProductId>;
  addCarmProductCodeFcmgtProductFcmgtProductLinks!: Sequelize.BelongsToManyAddAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  createCarmProductCodeFcmgtProductFcmgtProductLink!: Sequelize.BelongsToManyCreateAssociationMixin<FcmgtProduct>;
  removeCarmProductCodeFcmgtProductFcmgtProductLink!: Sequelize.BelongsToManyRemoveAssociationMixin<FcmgtProduct, FcmgtProductId>;
  removeCarmProductCodeFcmgtProductFcmgtProductLinks!: Sequelize.BelongsToManyRemoveAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  hasCarmProductCodeFcmgtProductFcmgtProductLink!: Sequelize.BelongsToManyHasAssociationMixin<FcmgtProduct, FcmgtProductId>;
  hasCarmProductCodeFcmgtProductFcmgtProductLinks!: Sequelize.BelongsToManyHasAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  countCarmProductCodeFcmgtProductFcmgtProductLinks!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product hasMany FcmgtProductLink via productCode
  fcmgtProductLinks!: FcmgtProductLink[];
  getFcmgtProductLinks!: Sequelize.HasManyGetAssociationsMixin<FcmgtProductLink>;
  setFcmgtProductLinks!: Sequelize.HasManySetAssociationsMixin<FcmgtProductLink, FcmgtProductLinkId>;
  addFcmgtProductLink!: Sequelize.HasManyAddAssociationMixin<FcmgtProductLink, FcmgtProductLinkId>;
  addFcmgtProductLinks!: Sequelize.HasManyAddAssociationsMixin<FcmgtProductLink, FcmgtProductLinkId>;
  createFcmgtProductLink!: Sequelize.HasManyCreateAssociationMixin<FcmgtProductLink>;
  removeFcmgtProductLink!: Sequelize.HasManyRemoveAssociationMixin<FcmgtProductLink, FcmgtProductLinkId>;
  removeFcmgtProductLinks!: Sequelize.HasManyRemoveAssociationsMixin<FcmgtProductLink, FcmgtProductLinkId>;
  hasFcmgtProductLink!: Sequelize.HasManyHasAssociationMixin<FcmgtProductLink, FcmgtProductLinkId>;
  hasFcmgtProductLinks!: Sequelize.HasManyHasAssociationsMixin<FcmgtProductLink, FcmgtProductLinkId>;
  countFcmgtProductLinks!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortContractList via productCode
  portContractLists!: PortContractList[];
  getPortContractLists!: Sequelize.HasManyGetAssociationsMixin<PortContractList>;
  setPortContractLists!: Sequelize.HasManySetAssociationsMixin<PortContractList, PortContractListId>;
  addPortContractList!: Sequelize.HasManyAddAssociationMixin<PortContractList, PortContractListId>;
  addPortContractLists!: Sequelize.HasManyAddAssociationsMixin<PortContractList, PortContractListId>;
  createPortContractList!: Sequelize.HasManyCreateAssociationMixin<PortContractList>;
  removePortContractList!: Sequelize.HasManyRemoveAssociationMixin<PortContractList, PortContractListId>;
  removePortContractLists!: Sequelize.HasManyRemoveAssociationsMixin<PortContractList, PortContractListId>;
  hasPortContractList!: Sequelize.HasManyHasAssociationMixin<PortContractList, PortContractListId>;
  hasPortContractLists!: Sequelize.HasManyHasAssociationsMixin<PortContractList, PortContractListId>;
  countPortContractLists!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortDsecMov via productCode
  portDsecMovs!: PortDsecMov[];
  getPortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setPortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addPortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addPortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createPortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removePortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removePortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasPortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasPortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countPortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortDsecPos via productCode
  portDsecPos!: PortDsecPos[];
  getPortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setPortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addPortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addPortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createPortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removePortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removePortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasPortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasPortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countPortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortFctyMov via productCode
  portFctyMovs!: PortFctyMov[];
  getPortFctyMovs!: Sequelize.HasManyGetAssociationsMixin<PortFctyMov>;
  setPortFctyMovs!: Sequelize.HasManySetAssociationsMixin<PortFctyMov, PortFctyMovId>;
  addPortFctyMov!: Sequelize.HasManyAddAssociationMixin<PortFctyMov, PortFctyMovId>;
  addPortFctyMovs!: Sequelize.HasManyAddAssociationsMixin<PortFctyMov, PortFctyMovId>;
  createPortFctyMov!: Sequelize.HasManyCreateAssociationMixin<PortFctyMov>;
  removePortFctyMov!: Sequelize.HasManyRemoveAssociationMixin<PortFctyMov, PortFctyMovId>;
  removePortFctyMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyMov, PortFctyMovId>;
  hasPortFctyMov!: Sequelize.HasManyHasAssociationMixin<PortFctyMov, PortFctyMovId>;
  hasPortFctyMovs!: Sequelize.HasManyHasAssociationsMixin<PortFctyMov, PortFctyMovId>;
  countPortFctyMovs!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortFctyPos via productCode
  portFctyPos!: PortFctyPos[];
  getPortFctyPos!: Sequelize.HasManyGetAssociationsMixin<PortFctyPos>;
  setPortFctyPos!: Sequelize.HasManySetAssociationsMixin<PortFctyPos, PortFctyPosId>;
  addPortFctyPo!: Sequelize.HasManyAddAssociationMixin<PortFctyPos, PortFctyPosId>;
  addPortFctyPos!: Sequelize.HasManyAddAssociationsMixin<PortFctyPos, PortFctyPosId>;
  createPortFctyPo!: Sequelize.HasManyCreateAssociationMixin<PortFctyPos>;
  removePortFctyPo!: Sequelize.HasManyRemoveAssociationMixin<PortFctyPos, PortFctyPosId>;
  removePortFctyPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFctyPos, PortFctyPosId>;
  hasPortFctyPo!: Sequelize.HasManyHasAssociationMixin<PortFctyPos, PortFctyPosId>;
  hasPortFctyPos!: Sequelize.HasManyHasAssociationsMixin<PortFctyPos, PortFctyPosId>;
  countPortFctyPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortFincMov via productCode
  portFincMovs!: PortFincMov[];
  getPortFincMovs!: Sequelize.HasManyGetAssociationsMixin<PortFincMov>;
  setPortFincMovs!: Sequelize.HasManySetAssociationsMixin<PortFincMov, PortFincMovId>;
  addPortFincMov!: Sequelize.HasManyAddAssociationMixin<PortFincMov, PortFincMovId>;
  addPortFincMovs!: Sequelize.HasManyAddAssociationsMixin<PortFincMov, PortFincMovId>;
  createPortFincMov!: Sequelize.HasManyCreateAssociationMixin<PortFincMov>;
  removePortFincMov!: Sequelize.HasManyRemoveAssociationMixin<PortFincMov, PortFincMovId>;
  removePortFincMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFincMov, PortFincMovId>;
  hasPortFincMov!: Sequelize.HasManyHasAssociationMixin<PortFincMov, PortFincMovId>;
  hasPortFincMovs!: Sequelize.HasManyHasAssociationsMixin<PortFincMov, PortFincMovId>;
  countPortFincMovs!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortFincPos via productCode
  portFincPos!: PortFincPos[];
  getPortFincPos!: Sequelize.HasManyGetAssociationsMixin<PortFincPos>;
  setPortFincPos!: Sequelize.HasManySetAssociationsMixin<PortFincPos, PortFincPosId>;
  addPortFincPo!: Sequelize.HasManyAddAssociationMixin<PortFincPos, PortFincPosId>;
  addPortFincPos!: Sequelize.HasManyAddAssociationsMixin<PortFincPos, PortFincPosId>;
  createPortFincPo!: Sequelize.HasManyCreateAssociationMixin<PortFincPos>;
  removePortFincPo!: Sequelize.HasManyRemoveAssociationMixin<PortFincPos, PortFincPosId>;
  removePortFincPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFincPos, PortFincPosId>;
  hasPortFincPo!: Sequelize.HasManyHasAssociationMixin<PortFincPos, PortFincPosId>;
  hasPortFincPos!: Sequelize.HasManyHasAssociationsMixin<PortFincPos, PortFincPosId>;
  countPortFincPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortFoexMov via productCode
  portFoexMovs!: PortFoexMov[];
  getPortFoexMovs!: Sequelize.HasManyGetAssociationsMixin<PortFoexMov>;
  setPortFoexMovs!: Sequelize.HasManySetAssociationsMixin<PortFoexMov, PortFoexMovId>;
  addPortFoexMov!: Sequelize.HasManyAddAssociationMixin<PortFoexMov, PortFoexMovId>;
  addPortFoexMovs!: Sequelize.HasManyAddAssociationsMixin<PortFoexMov, PortFoexMovId>;
  createPortFoexMov!: Sequelize.HasManyCreateAssociationMixin<PortFoexMov>;
  removePortFoexMov!: Sequelize.HasManyRemoveAssociationMixin<PortFoexMov, PortFoexMovId>;
  removePortFoexMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexMov, PortFoexMovId>;
  hasPortFoexMov!: Sequelize.HasManyHasAssociationMixin<PortFoexMov, PortFoexMovId>;
  hasPortFoexMovs!: Sequelize.HasManyHasAssociationsMixin<PortFoexMov, PortFoexMovId>;
  countPortFoexMovs!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortFoexPos via productCode
  portFoexPos!: PortFoexPos[];
  getPortFoexPos!: Sequelize.HasManyGetAssociationsMixin<PortFoexPos>;
  setPortFoexPos!: Sequelize.HasManySetAssociationsMixin<PortFoexPos, PortFoexPosId>;
  addPortFoexPo!: Sequelize.HasManyAddAssociationMixin<PortFoexPos, PortFoexPosId>;
  addPortFoexPos!: Sequelize.HasManyAddAssociationsMixin<PortFoexPos, PortFoexPosId>;
  createPortFoexPo!: Sequelize.HasManyCreateAssociationMixin<PortFoexPos>;
  removePortFoexPo!: Sequelize.HasManyRemoveAssociationMixin<PortFoexPos, PortFoexPosId>;
  removePortFoexPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFoexPos, PortFoexPosId>;
  hasPortFoexPo!: Sequelize.HasManyHasAssociationMixin<PortFoexPos, PortFoexPosId>;
  hasPortFoexPos!: Sequelize.HasManyHasAssociationsMixin<PortFoexPos, PortFoexPosId>;
  countPortFoexPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortFutuMov via productCode
  portFutuMovs!: PortFutuMov[];
  getPortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setPortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addPortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addPortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createPortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removePortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removePortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasPortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasPortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countPortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortFutuPos via productCode
  portFutuPos!: PortFutuPos[];
  getPortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setPortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addPortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addPortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createPortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removePortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removePortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasPortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasPortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countPortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortGuarMov via productCode
  portGuarMovs!: PortGuarMov[];
  getPortGuarMovs!: Sequelize.HasManyGetAssociationsMixin<PortGuarMov>;
  setPortGuarMovs!: Sequelize.HasManySetAssociationsMixin<PortGuarMov, PortGuarMovId>;
  addPortGuarMov!: Sequelize.HasManyAddAssociationMixin<PortGuarMov, PortGuarMovId>;
  addPortGuarMovs!: Sequelize.HasManyAddAssociationsMixin<PortGuarMov, PortGuarMovId>;
  createPortGuarMov!: Sequelize.HasManyCreateAssociationMixin<PortGuarMov>;
  removePortGuarMov!: Sequelize.HasManyRemoveAssociationMixin<PortGuarMov, PortGuarMovId>;
  removePortGuarMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarMov, PortGuarMovId>;
  hasPortGuarMov!: Sequelize.HasManyHasAssociationMixin<PortGuarMov, PortGuarMovId>;
  hasPortGuarMovs!: Sequelize.HasManyHasAssociationsMixin<PortGuarMov, PortGuarMovId>;
  countPortGuarMovs!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortGuarPos via productCode
  portGuarPos!: PortGuarPos[];
  getPortGuarPos!: Sequelize.HasManyGetAssociationsMixin<PortGuarPos>;
  setPortGuarPos!: Sequelize.HasManySetAssociationsMixin<PortGuarPos, PortGuarPosId>;
  addPortGuarPo!: Sequelize.HasManyAddAssociationMixin<PortGuarPos, PortGuarPosId>;
  addPortGuarPos!: Sequelize.HasManyAddAssociationsMixin<PortGuarPos, PortGuarPosId>;
  createPortGuarPo!: Sequelize.HasManyCreateAssociationMixin<PortGuarPos>;
  removePortGuarPo!: Sequelize.HasManyRemoveAssociationMixin<PortGuarPos, PortGuarPosId>;
  removePortGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarPos, PortGuarPosId>;
  hasPortGuarPo!: Sequelize.HasManyHasAssociationMixin<PortGuarPos, PortGuarPosId>;
  hasPortGuarPos!: Sequelize.HasManyHasAssociationsMixin<PortGuarPos, PortGuarPosId>;
  countPortGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortLoanMov via productCode
  portLoanMovs!: PortLoanMov[];
  getPortLoanMovs!: Sequelize.HasManyGetAssociationsMixin<PortLoanMov>;
  setPortLoanMovs!: Sequelize.HasManySetAssociationsMixin<PortLoanMov, PortLoanMovId>;
  addPortLoanMov!: Sequelize.HasManyAddAssociationMixin<PortLoanMov, PortLoanMovId>;
  addPortLoanMovs!: Sequelize.HasManyAddAssociationsMixin<PortLoanMov, PortLoanMovId>;
  createPortLoanMov!: Sequelize.HasManyCreateAssociationMixin<PortLoanMov>;
  removePortLoanMov!: Sequelize.HasManyRemoveAssociationMixin<PortLoanMov, PortLoanMovId>;
  removePortLoanMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanMov, PortLoanMovId>;
  hasPortLoanMov!: Sequelize.HasManyHasAssociationMixin<PortLoanMov, PortLoanMovId>;
  hasPortLoanMovs!: Sequelize.HasManyHasAssociationsMixin<PortLoanMov, PortLoanMovId>;
  countPortLoanMovs!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortLoanPos via productCode
  portLoanPos!: PortLoanPos[];
  getPortLoanPos!: Sequelize.HasManyGetAssociationsMixin<PortLoanPos>;
  setPortLoanPos!: Sequelize.HasManySetAssociationsMixin<PortLoanPos, PortLoanPosId>;
  addPortLoanPo!: Sequelize.HasManyAddAssociationMixin<PortLoanPos, PortLoanPosId>;
  addPortLoanPos!: Sequelize.HasManyAddAssociationsMixin<PortLoanPos, PortLoanPosId>;
  createPortLoanPo!: Sequelize.HasManyCreateAssociationMixin<PortLoanPos>;
  removePortLoanPo!: Sequelize.HasManyRemoveAssociationMixin<PortLoanPos, PortLoanPosId>;
  removePortLoanPos!: Sequelize.HasManyRemoveAssociationsMixin<PortLoanPos, PortLoanPosId>;
  hasPortLoanPo!: Sequelize.HasManyHasAssociationMixin<PortLoanPos, PortLoanPosId>;
  hasPortLoanPos!: Sequelize.HasManyHasAssociationsMixin<PortLoanPos, PortLoanPosId>;
  countPortLoanPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortNdfsMov via productCode
  portNdfsMovs!: PortNdfsMov[];
  getPortNdfsMovs!: Sequelize.HasManyGetAssociationsMixin<PortNdfsMov>;
  setPortNdfsMovs!: Sequelize.HasManySetAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  addPortNdfsMov!: Sequelize.HasManyAddAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  addPortNdfsMovs!: Sequelize.HasManyAddAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  createPortNdfsMov!: Sequelize.HasManyCreateAssociationMixin<PortNdfsMov>;
  removePortNdfsMov!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  removePortNdfsMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  hasPortNdfsMov!: Sequelize.HasManyHasAssociationMixin<PortNdfsMov, PortNdfsMovId>;
  hasPortNdfsMovs!: Sequelize.HasManyHasAssociationsMixin<PortNdfsMov, PortNdfsMovId>;
  countPortNdfsMovs!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortNdfsPos via productCode
  portNdfsPos!: PortNdfsPos[];
  getPortNdfsPos!: Sequelize.HasManyGetAssociationsMixin<PortNdfsPos>;
  setPortNdfsPos!: Sequelize.HasManySetAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  addPortNdfsPo!: Sequelize.HasManyAddAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  addPortNdfsPos!: Sequelize.HasManyAddAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  createPortNdfsPo!: Sequelize.HasManyCreateAssociationMixin<PortNdfsPos>;
  removePortNdfsPo!: Sequelize.HasManyRemoveAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  removePortNdfsPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  hasPortNdfsPo!: Sequelize.HasManyHasAssociationMixin<PortNdfsPos, PortNdfsPosId>;
  hasPortNdfsPos!: Sequelize.HasManyHasAssociationsMixin<PortNdfsPos, PortNdfsPosId>;
  countPortNdfsPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortNostroPos via productCode
  portNostroPos!: PortNostroPos[];
  getPortNostroPos!: Sequelize.HasManyGetAssociationsMixin<PortNostroPos>;
  setPortNostroPos!: Sequelize.HasManySetAssociationsMixin<PortNostroPos, PortNostroPosId>;
  addPortNostroPo!: Sequelize.HasManyAddAssociationMixin<PortNostroPos, PortNostroPosId>;
  addPortNostroPos!: Sequelize.HasManyAddAssociationsMixin<PortNostroPos, PortNostroPosId>;
  createPortNostroPo!: Sequelize.HasManyCreateAssociationMixin<PortNostroPos>;
  removePortNostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortNostroPos, PortNostroPosId>;
  removePortNostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortNostroPos, PortNostroPosId>;
  hasPortNostroPo!: Sequelize.HasManyHasAssociationMixin<PortNostroPos, PortNostroPosId>;
  hasPortNostroPos!: Sequelize.HasManyHasAssociationsMixin<PortNostroPos, PortNostroPosId>;
  countPortNostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortOtherPos via productCode
  portOtherPos!: PortOtherPos[];
  getPortOtherPos!: Sequelize.HasManyGetAssociationsMixin<PortOtherPos>;
  setPortOtherPos!: Sequelize.HasManySetAssociationsMixin<PortOtherPos, PortOtherPosId>;
  addPortOtherPo!: Sequelize.HasManyAddAssociationMixin<PortOtherPos, PortOtherPosId>;
  addPortOtherPos!: Sequelize.HasManyAddAssociationsMixin<PortOtherPos, PortOtherPosId>;
  createPortOtherPo!: Sequelize.HasManyCreateAssociationMixin<PortOtherPos>;
  removePortOtherPo!: Sequelize.HasManyRemoveAssociationMixin<PortOtherPos, PortOtherPosId>;
  removePortOtherPos!: Sequelize.HasManyRemoveAssociationsMixin<PortOtherPos, PortOtherPosId>;
  hasPortOtherPo!: Sequelize.HasManyHasAssociationMixin<PortOtherPos, PortOtherPosId>;
  hasPortOtherPos!: Sequelize.HasManyHasAssociationsMixin<PortOtherPos, PortOtherPosId>;
  countPortOtherPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortRecvLnk via productCode
  portRecvLnks!: PortRecvLnk[];
  getPortRecvLnks!: Sequelize.HasManyGetAssociationsMixin<PortRecvLnk>;
  setPortRecvLnks!: Sequelize.HasManySetAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  addPortRecvLnk!: Sequelize.HasManyAddAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  addPortRecvLnks!: Sequelize.HasManyAddAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  createPortRecvLnk!: Sequelize.HasManyCreateAssociationMixin<PortRecvLnk>;
  removePortRecvLnk!: Sequelize.HasManyRemoveAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  removePortRecvLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  hasPortRecvLnk!: Sequelize.HasManyHasAssociationMixin<PortRecvLnk, PortRecvLnkId>;
  hasPortRecvLnks!: Sequelize.HasManyHasAssociationsMixin<PortRecvLnk, PortRecvLnkId>;
  countPortRecvLnks!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortSwapMov via productCode
  portSwapMovs!: PortSwapMov[];
  getPortSwapMovs!: Sequelize.HasManyGetAssociationsMixin<PortSwapMov>;
  setPortSwapMovs!: Sequelize.HasManySetAssociationsMixin<PortSwapMov, PortSwapMovId>;
  addPortSwapMov!: Sequelize.HasManyAddAssociationMixin<PortSwapMov, PortSwapMovId>;
  addPortSwapMovs!: Sequelize.HasManyAddAssociationsMixin<PortSwapMov, PortSwapMovId>;
  createPortSwapMov!: Sequelize.HasManyCreateAssociationMixin<PortSwapMov>;
  removePortSwapMov!: Sequelize.HasManyRemoveAssociationMixin<PortSwapMov, PortSwapMovId>;
  removePortSwapMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapMov, PortSwapMovId>;
  hasPortSwapMov!: Sequelize.HasManyHasAssociationMixin<PortSwapMov, PortSwapMovId>;
  hasPortSwapMovs!: Sequelize.HasManyHasAssociationsMixin<PortSwapMov, PortSwapMovId>;
  countPortSwapMovs!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortSwapPos via productCode
  portSwapPos!: PortSwapPos[];
  getPortSwapPos!: Sequelize.HasManyGetAssociationsMixin<PortSwapPos>;
  setPortSwapPos!: Sequelize.HasManySetAssociationsMixin<PortSwapPos, PortSwapPosId>;
  addPortSwapPo!: Sequelize.HasManyAddAssociationMixin<PortSwapPos, PortSwapPosId>;
  addPortSwapPos!: Sequelize.HasManyAddAssociationsMixin<PortSwapPos, PortSwapPosId>;
  createPortSwapPo!: Sequelize.HasManyCreateAssociationMixin<PortSwapPos>;
  removePortSwapPo!: Sequelize.HasManyRemoveAssociationMixin<PortSwapPos, PortSwapPosId>;
  removePortSwapPos!: Sequelize.HasManyRemoveAssociationsMixin<PortSwapPos, PortSwapPosId>;
  hasPortSwapPo!: Sequelize.HasManyHasAssociationMixin<PortSwapPos, PortSwapPosId>;
  hasPortSwapPos!: Sequelize.HasManyHasAssociationsMixin<PortSwapPos, PortSwapPosId>;
  countPortSwapPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany PortVostroPos via productCode
  portVostroPos!: PortVostroPos[];
  getPortVostroPos!: Sequelize.HasManyGetAssociationsMixin<PortVostroPos>;
  setPortVostroPos!: Sequelize.HasManySetAssociationsMixin<PortVostroPos, PortVostroPosId>;
  addPortVostroPo!: Sequelize.HasManyAddAssociationMixin<PortVostroPos, PortVostroPosId>;
  addPortVostroPos!: Sequelize.HasManyAddAssociationsMixin<PortVostroPos, PortVostroPosId>;
  createPortVostroPo!: Sequelize.HasManyCreateAssociationMixin<PortVostroPos>;
  removePortVostroPo!: Sequelize.HasManyRemoveAssociationMixin<PortVostroPos, PortVostroPosId>;
  removePortVostroPos!: Sequelize.HasManyRemoveAssociationsMixin<PortVostroPos, PortVostroPosId>;
  hasPortVostroPo!: Sequelize.HasManyHasAssociationMixin<PortVostroPos, PortVostroPosId>;
  hasPortVostroPos!: Sequelize.HasManyHasAssociationsMixin<PortVostroPos, PortVostroPosId>;
  countPortVostroPos!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany ProductExtCod via productCode
  productExtCods!: ProductExtCod[];
  getProductExtCods!: Sequelize.HasManyGetAssociationsMixin<ProductExtCod>;
  setProductExtCods!: Sequelize.HasManySetAssociationsMixin<ProductExtCod, ProductExtCodId>;
  addProductExtCod!: Sequelize.HasManyAddAssociationMixin<ProductExtCod, ProductExtCodId>;
  addProductExtCods!: Sequelize.HasManyAddAssociationsMixin<ProductExtCod, ProductExtCodId>;
  createProductExtCod!: Sequelize.HasManyCreateAssociationMixin<ProductExtCod>;
  removeProductExtCod!: Sequelize.HasManyRemoveAssociationMixin<ProductExtCod, ProductExtCodId>;
  removeProductExtCods!: Sequelize.HasManyRemoveAssociationsMixin<ProductExtCod, ProductExtCodId>;
  hasProductExtCod!: Sequelize.HasManyHasAssociationMixin<ProductExtCod, ProductExtCodId>;
  hasProductExtCods!: Sequelize.HasManyHasAssociationsMixin<ProductExtCod, ProductExtCodId>;
  countProductExtCods!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany ProductHsbcGrpLink via productCode
  productHsbcGrpLinks!: ProductHsbcGrpLink[];
  getProductHsbcGrpLinks!: Sequelize.HasManyGetAssociationsMixin<ProductHsbcGrpLink>;
  setProductHsbcGrpLinks!: Sequelize.HasManySetAssociationsMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  addProductHsbcGrpLink!: Sequelize.HasManyAddAssociationMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  addProductHsbcGrpLinks!: Sequelize.HasManyAddAssociationsMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  createProductHsbcGrpLink!: Sequelize.HasManyCreateAssociationMixin<ProductHsbcGrpLink>;
  removeProductHsbcGrpLink!: Sequelize.HasManyRemoveAssociationMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  removeProductHsbcGrpLinks!: Sequelize.HasManyRemoveAssociationsMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  hasProductHsbcGrpLink!: Sequelize.HasManyHasAssociationMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  hasProductHsbcGrpLinks!: Sequelize.HasManyHasAssociationsMixin<ProductHsbcGrpLink, ProductHsbcGrpLinkId>;
  countProductHsbcGrpLinks!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany ReconDimension via productCode
  reconDimensions!: ReconDimension[];
  getReconDimensions!: Sequelize.HasManyGetAssociationsMixin<ReconDimension>;
  setReconDimensions!: Sequelize.HasManySetAssociationsMixin<ReconDimension, ReconDimensionId>;
  addReconDimension!: Sequelize.HasManyAddAssociationMixin<ReconDimension, ReconDimensionId>;
  addReconDimensions!: Sequelize.HasManyAddAssociationsMixin<ReconDimension, ReconDimensionId>;
  createReconDimension!: Sequelize.HasManyCreateAssociationMixin<ReconDimension>;
  removeReconDimension!: Sequelize.HasManyRemoveAssociationMixin<ReconDimension, ReconDimensionId>;
  removeReconDimensions!: Sequelize.HasManyRemoveAssociationsMixin<ReconDimension, ReconDimensionId>;
  hasReconDimension!: Sequelize.HasManyHasAssociationMixin<ReconDimension, ReconDimensionId>;
  hasReconDimensions!: Sequelize.HasManyHasAssociationsMixin<ReconDimension, ReconDimensionId>;
  countReconDimensions!: Sequelize.HasManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystems!: SysExternalSystem[];
  getSourceSystemSysExternalSystems!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystems!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystem!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystems!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystem!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystems!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystem!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystems!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystems!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortDsecMovs!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortDsecMovs!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortDsecMovs!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortDsecMov!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortDsecMovs!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortDsecMov!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortDsecMov!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortDsecMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortDsecMov!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortDsecMovs!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortDsecMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortDsecPos!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortDsecPos!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortDsecPos!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortDsecPo!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortDsecPos!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortDsecPo!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortDsecPo!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortDsecPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortDsecPo!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortDsecPos!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortDsecPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortFctyMovs!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortFctyMovs!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortFctyMovs!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFctyMov!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFctyMovs!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortFctyMov!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortFctyMov!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortFctyMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFctyMov!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFctyMovs!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortFctyMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortFctyPos!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortFctyPos!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortFctyPos!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFctyPo!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFctyPos!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortFctyPo!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortFctyPo!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortFctyPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFctyPo!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFctyPos!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortFctyPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortFincMovs!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortFincMovs!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortFincMovs!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFincMov!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFincMovs!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortFincMov!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortFincMov!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortFincMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFincMov!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFincMovs!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortFincMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortFincPos!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortFincPos!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortFincPos!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFincPo!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFincPos!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortFincPo!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortFincPo!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortFincPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFincPo!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFincPos!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortFincPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortFoexMovs!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortFoexMovs!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortFoexMovs!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFoexMov!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFoexMovs!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortFoexMov!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortFoexMov!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortFoexMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFoexMov!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFoexMovs!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortFoexMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortFoexPos!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortFoexPos!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortFoexPos!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFoexPo!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortFoexPos!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortFoexPo!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortFoexPo!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortFoexPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFoexPo!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortFoexPos!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortFoexPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortGuarMovs!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortGuarMovs!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortGuarMovs!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortGuarMov!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortGuarMovs!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortGuarMov!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortGuarMov!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortGuarMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortGuarMov!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortGuarMovs!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortGuarMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortGuarPos!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortGuarPos!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortGuarPos!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortGuarPo!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortGuarPos!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortGuarPo!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortGuarPo!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortGuarPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortGuarPo!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortGuarPos!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortGuarPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortLoanMovs!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortLoanMovs!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortLoanMovs!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortLoanMov!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortLoanMovs!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortLoanMov!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortLoanMov!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortLoanMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortLoanMov!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortLoanMovs!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortLoanMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortLoanPos!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortLoanPos!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortLoanPos!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortLoanPo!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortLoanPos!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortLoanPo!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortLoanPo!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortLoanPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortLoanPo!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortLoanPos!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortLoanPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortNdfsMovs!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortNdfsMovs!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortNdfsMovs!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortNdfsMov!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortNdfsMovs!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortNdfsMov!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortNdfsMov!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortNdfsMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortNdfsMov!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortNdfsMovs!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortNdfsMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortNdfsPos!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortNdfsPos!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortNdfsPos!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortNdfsPo!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortNdfsPos!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortNdfsPo!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortNdfsPo!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortNdfsPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortNdfsPo!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortNdfsPos!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortNdfsPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortSwapMovs!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortSwapMovs!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortSwapMovs!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortSwapMov!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortSwapMovs!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortSwapMov!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortSwapMov!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortSwapMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortSwapMov!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortSwapMovs!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortSwapMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany SysExternalSystem via productCode and sourceSystem
  sourceSystemSysExternalSystemPortSwapPos!: SysExternalSystem[];
  getSourceSystemSysExternalSystemPortSwapPos!: Sequelize.BelongsToManyGetAssociationsMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystemPortSwapPos!: Sequelize.BelongsToManySetAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortSwapPo!: Sequelize.BelongsToManyAddAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  addSourceSystemSysExternalSystemPortSwapPos!: Sequelize.BelongsToManyAddAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystemPortSwapPo!: Sequelize.BelongsToManyCreateAssociationMixin<SysExternalSystem>;
  removeSourceSystemSysExternalSystemPortSwapPo!: Sequelize.BelongsToManyRemoveAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  removeSourceSystemSysExternalSystemPortSwapPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortSwapPo!: Sequelize.BelongsToManyHasAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  hasSourceSystemSysExternalSystemPortSwapPos!: Sequelize.BelongsToManyHasAssociationsMixin<SysExternalSystem, SysExternalSystemId>;
  countSourceSystemSysExternalSystemPortSwapPos!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Product {
    return Product.init({
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      field: 'product_code'
    },
    productDescription: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'product_description'
    },
    productIsIso: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'product_is_iso'
    },
    productIsApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'product_is_approved'
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
    tableName: 'product',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PRODUCT",
        unique: true,
        fields: [
          { name: "product_code" },
        ]
      },
    ]
  });
  }
}
