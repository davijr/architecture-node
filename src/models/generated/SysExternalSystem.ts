import { globalInitAttributes } from '@config/database'
import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import { AlcmLiqNsfrProductParam } from './AlcmLiqNsfrProductParam'
import { CrmGuarPos, CrmGuarPosId } from './CrmGuarPos'
import { CrmInstrumentList, CrmInstrumentListId } from './CrmInstrumentList'
import type { DomsSystemType, DomsSystemTypeId } from './DomsSystemType'
import { GenldgBsJournal, GenldgBsJournalId } from './GenldgBsJournal'
import { GenldgGlbsPos, GenldgGlbsPosId } from './GenldgGlbsPos'
import { PnlFeeincDet, PnlFeeincDetId } from './PnlFeeincDet'
import { PnlGmplexDet, PnlGmplexDetId } from './PnlGmplexDet'
import { PnlOperincDet, PnlOperincDetId } from './PnlOperincDet'
import { PortContractList, PortContractListId } from './PortContractList'
import { PortDsecMov, PortDsecMovId } from './PortDsecMov'
import { PortDsecPos, PortDsecPosId } from './PortDsecPos'
import { PortFctyMov, PortFctyMovId } from './PortFctyMov'
import { PortFctyPos, PortFctyPosId } from './PortFctyPos'
import { PortFincMov, PortFincMovId } from './PortFincMov'
import { PortFincPos, PortFincPosId } from './PortFincPos'
import { PortFoexMov, PortFoexMovId } from './PortFoexMov'
import { PortFoexPos, PortFoexPosId } from './PortFoexPos'
import { PortFutuMov, PortFutuMovId } from './PortFutuMov'
import { PortFutuPos, PortFutuPosId } from './PortFutuPos'
import { PortGuarMov, PortGuarMovId } from './PortGuarMov'
import { PortGuarPos, PortGuarPosId } from './PortGuarPos'
import { PortLoanMov, PortLoanMovId } from './PortLoanMov'
import { PortLoanPos, PortLoanPosId } from './PortLoanPos'
import { PortNdfsMov, PortNdfsMovId } from './PortNdfsMov'
import { PortNdfsPos, PortNdfsPosId } from './PortNdfsPos'
import { PortNostroPos, PortNostroPosId } from './PortNostroPos'
import { PortOtherPos, PortOtherPosId } from './PortOtherPos'
import { PortRecvLnk, PortRecvLnkId } from './PortRecvLnk'
import { PortSwapMov, PortSwapMovId } from './PortSwapMov'
import { PortSwapPos, PortSwapPosId } from './PortSwapPos'
import { PortVostroPos, PortVostroPosId } from './PortVostroPos'
import { Product, ProductId } from './Product'
import { ProductExtCod, ProductExtCodId } from './ProductExtCod'

export interface SysExternalSystemAttributes {
  sourceSystem: string;
  sourceSystemName?: string;
  systemType?: string;
}

export type SysExternalSystemPk = 'sourceSystem';
export type SysExternalSystemId = SysExternalSystem[SysExternalSystemPk];
export type SysExternalSystemOptionalAttributes = 'sourceSystemName' | 'systemType';
export type SysExternalSystemCreationAttributes = Optional<SysExternalSystemAttributes, SysExternalSystemOptionalAttributes>;

export class SysExternalSystem extends Model<SysExternalSystemAttributes, SysExternalSystemCreationAttributes> implements SysExternalSystemAttributes {
  sourceSystem!: string;
  sourceSystemName?: string;
  systemType!: string;

  // SysExternalSystem belongsTo DomsSystemType via systemType
  systemTypeDomsSystemType!: DomsSystemType;
  getSystemTypeDomsSystemType!: Sequelize.BelongsToGetAssociationMixin<DomsSystemType>;
  setSystemTypeDomsSystemType!: Sequelize.BelongsToSetAssociationMixin<DomsSystemType, DomsSystemTypeId>;
  createSystemTypeDomsSystemType!: Sequelize.BelongsToCreateAssociationMixin<DomsSystemType>;
  // SysExternalSystem hasMany AlcmLiqNsfrProductParam via sourceSystem
  alcmLiqNsfrProductParams!: AlcmLiqNsfrProductParam[];
  getAlcmLiqNsfrProductParams!: Sequelize.HasManyGetAssociationsMixin<AlcmLiqNsfrProductParam>;
  countAlcmLiqNsfrProductParams!: Sequelize.HasManyCountAssociationsMixin;
  // SysExternalSystem hasMany CrmGuarPos via sourceSystem
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
  // SysExternalSystem hasMany CrmInstrumentList via crmSourceSystem
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
  // SysExternalSystem hasMany GenldgBsJournal via sourceSystem
  genldgBsJournals!: GenldgBsJournal[];
  getGenldgBsJournals!: Sequelize.HasManyGetAssociationsMixin<GenldgBsJournal>;
  setGenldgBsJournals!: Sequelize.HasManySetAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  addGenldgBsJournal!: Sequelize.HasManyAddAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  addGenldgBsJournals!: Sequelize.HasManyAddAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  createGenldgBsJournal!: Sequelize.HasManyCreateAssociationMixin<GenldgBsJournal>;
  removeGenldgBsJournal!: Sequelize.HasManyRemoveAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  removeGenldgBsJournals!: Sequelize.HasManyRemoveAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  hasGenldgBsJournal!: Sequelize.HasManyHasAssociationMixin<GenldgBsJournal, GenldgBsJournalId>;
  hasGenldgBsJournals!: Sequelize.HasManyHasAssociationsMixin<GenldgBsJournal, GenldgBsJournalId>;
  countGenldgBsJournals!: Sequelize.HasManyCountAssociationsMixin;
  // SysExternalSystem hasMany GenldgGlbsPos via sourceSystem
  genldgGlbsPos!: GenldgGlbsPos[];
  getGenldgGlbsPos!: Sequelize.HasManyGetAssociationsMixin<GenldgGlbsPos>;
  setGenldgGlbsPos!: Sequelize.HasManySetAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addGenldgGlbsPo!: Sequelize.HasManyAddAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  addGenldgGlbsPos!: Sequelize.HasManyAddAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  createGenldgGlbsPo!: Sequelize.HasManyCreateAssociationMixin<GenldgGlbsPos>;
  removeGenldgGlbsPo!: Sequelize.HasManyRemoveAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  removeGenldgGlbsPos!: Sequelize.HasManyRemoveAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasGenldgGlbsPo!: Sequelize.HasManyHasAssociationMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  hasGenldgGlbsPos!: Sequelize.HasManyHasAssociationsMixin<GenldgGlbsPos, GenldgGlbsPosId>;
  countGenldgGlbsPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysExternalSystem hasMany PnlFeeincDet via calcSourceSystem
  pnlFeeincDets!: PnlFeeincDet[];
  getPnlFeeincDets!: Sequelize.HasManyGetAssociationsMixin<PnlFeeincDet>;
  setPnlFeeincDets!: Sequelize.HasManySetAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  addPnlFeeincDet!: Sequelize.HasManyAddAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  addPnlFeeincDets!: Sequelize.HasManyAddAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  createPnlFeeincDet!: Sequelize.HasManyCreateAssociationMixin<PnlFeeincDet>;
  removePnlFeeincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  removePnlFeeincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasPnlFeeincDet!: Sequelize.HasManyHasAssociationMixin<PnlFeeincDet, PnlFeeincDetId>;
  hasPnlFeeincDets!: Sequelize.HasManyHasAssociationsMixin<PnlFeeincDet, PnlFeeincDetId>;
  countPnlFeeincDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysExternalSystem hasMany PnlGmplexDet via sourceSystem
  pnlGmplexDets!: PnlGmplexDet[];
  getPnlGmplexDets!: Sequelize.HasManyGetAssociationsMixin<PnlGmplexDet>;
  setPnlGmplexDets!: Sequelize.HasManySetAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  addPnlGmplexDet!: Sequelize.HasManyAddAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  addPnlGmplexDets!: Sequelize.HasManyAddAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  createPnlGmplexDet!: Sequelize.HasManyCreateAssociationMixin<PnlGmplexDet>;
  removePnlGmplexDet!: Sequelize.HasManyRemoveAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  removePnlGmplexDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasPnlGmplexDet!: Sequelize.HasManyHasAssociationMixin<PnlGmplexDet, PnlGmplexDetId>;
  hasPnlGmplexDets!: Sequelize.HasManyHasAssociationsMixin<PnlGmplexDet, PnlGmplexDetId>;
  countPnlGmplexDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysExternalSystem hasMany PnlOperincDet via calcSourceSystem
  pnlOperincDets!: PnlOperincDet[];
  getPnlOperincDets!: Sequelize.HasManyGetAssociationsMixin<PnlOperincDet>;
  setPnlOperincDets!: Sequelize.HasManySetAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  addPnlOperincDet!: Sequelize.HasManyAddAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  addPnlOperincDets!: Sequelize.HasManyAddAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  createPnlOperincDet!: Sequelize.HasManyCreateAssociationMixin<PnlOperincDet>;
  removePnlOperincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  removePnlOperincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  hasPnlOperincDet!: Sequelize.HasManyHasAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  hasPnlOperincDets!: Sequelize.HasManyHasAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  countPnlOperincDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysExternalSystem hasMany PnlOperincDet via sourceSystem
  sourceSystemPnlOperincDets!: PnlOperincDet[];
  getSourceSystemPnlOperincDets!: Sequelize.HasManyGetAssociationsMixin<PnlOperincDet>;
  setSourceSystemPnlOperincDets!: Sequelize.HasManySetAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  addSourceSystemPnlOperincDet!: Sequelize.HasManyAddAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  addSourceSystemPnlOperincDets!: Sequelize.HasManyAddAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  createSourceSystemPnlOperincDet!: Sequelize.HasManyCreateAssociationMixin<PnlOperincDet>;
  removeSourceSystemPnlOperincDet!: Sequelize.HasManyRemoveAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  removeSourceSystemPnlOperincDets!: Sequelize.HasManyRemoveAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  hasSourceSystemPnlOperincDet!: Sequelize.HasManyHasAssociationMixin<PnlOperincDet, PnlOperincDetId>;
  hasSourceSystemPnlOperincDets!: Sequelize.HasManyHasAssociationsMixin<PnlOperincDet, PnlOperincDetId>;
  countSourceSystemPnlOperincDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysExternalSystem hasMany PortContractList via sourceSystem
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
  // SysExternalSystem hasMany PortDsecMov via sourceSystem
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
  // SysExternalSystem hasMany PortDsecPos via sourceSystem
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
  // SysExternalSystem hasMany PortFctyMov via sourceSystem
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
  // SysExternalSystem hasMany PortFctyPos via sourceSystem
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
  // SysExternalSystem hasMany PortFincMov via sourceSystem
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
  // SysExternalSystem hasMany PortFincPos via sourceSystem
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
  // SysExternalSystem hasMany PortFoexMov via sourceSystem
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
  // SysExternalSystem hasMany PortFoexPos via sourceSystem
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
  // SysExternalSystem hasMany PortFutuMov via sourceSystem
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
  // SysExternalSystem hasMany PortFutuPos via sourceSystem
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
  // SysExternalSystem hasMany PortGuarMov via sourceSystem
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
  // SysExternalSystem hasMany PortGuarPos via sourceSystem
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
  // SysExternalSystem hasMany PortLoanMov via sourceSystem
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
  // SysExternalSystem hasMany PortLoanPos via sourceSystem
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
  // SysExternalSystem hasMany PortNdfsMov via sourceSystem
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
  // SysExternalSystem hasMany PortNdfsPos via sourceSystem
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
  // SysExternalSystem hasMany PortNostroPos via sourceSystem
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
  // SysExternalSystem hasMany PortOtherPos via sourceSystem
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
  // SysExternalSystem hasMany PortRecvLnk via sourceSystem
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
  // SysExternalSystem hasMany PortSwapMov via sourceSystem
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
  // SysExternalSystem hasMany PortSwapPos via sourceSystem
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
  // SysExternalSystem hasMany PortVostroPos via sourceSystem
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
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProducts!: Product[];
  getProductCodeProducts!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProducts!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProduct!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProducts!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProduct!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProducts!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProduct!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProducts!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProducts!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortDsecMovs!: Product[];
  getProductCodeProductPortDsecMovs!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortDsecMovs!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortDsecMov!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortDsecMovs!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortDsecMov!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortDsecMov!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortDsecMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortDsecMov!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortDsecMovs!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortDsecMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortDsecPos!: Product[];
  getProductCodeProductPortDsecPos!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortDsecPos!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortDsecPo!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortDsecPos!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortDsecPo!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortDsecPo!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortDsecPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortDsecPo!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortDsecPos!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortDsecPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortFctyMovs!: Product[];
  getProductCodeProductPortFctyMovs!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortFctyMovs!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortFctyMov!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortFctyMovs!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortFctyMov!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortFctyMov!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortFctyMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortFctyMov!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortFctyMovs!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortFctyMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortFctyPos!: Product[];
  getProductCodeProductPortFctyPos!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortFctyPos!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortFctyPo!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortFctyPos!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortFctyPo!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortFctyPo!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortFctyPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortFctyPo!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortFctyPos!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortFctyPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortFincMovs!: Product[];
  getProductCodeProductPortFincMovs!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortFincMovs!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortFincMov!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortFincMovs!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortFincMov!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortFincMov!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortFincMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortFincMov!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortFincMovs!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortFincMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortFincPos!: Product[];
  getProductCodeProductPortFincPos!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortFincPos!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortFincPo!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortFincPos!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortFincPo!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortFincPo!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortFincPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortFincPo!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortFincPos!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortFincPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortFoexMovs!: Product[];
  getProductCodeProductPortFoexMovs!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortFoexMovs!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortFoexMov!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortFoexMovs!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortFoexMov!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortFoexMov!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortFoexMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortFoexMov!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortFoexMovs!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortFoexMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortFoexPos!: Product[];
  getProductCodeProductPortFoexPos!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortFoexPos!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortFoexPo!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortFoexPos!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortFoexPo!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortFoexPo!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortFoexPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortFoexPo!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortFoexPos!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortFoexPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortGuarMovs!: Product[];
  getProductCodeProductPortGuarMovs!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortGuarMovs!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortGuarMov!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortGuarMovs!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortGuarMov!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortGuarMov!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortGuarMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortGuarMov!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortGuarMovs!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortGuarMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortGuarPos!: Product[];
  getProductCodeProductPortGuarPos!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortGuarPos!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortGuarPo!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortGuarPos!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortGuarPo!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortGuarPo!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortGuarPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortGuarPo!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortGuarPos!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortGuarPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortLoanMovs!: Product[];
  getProductCodeProductPortLoanMovs!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortLoanMovs!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortLoanMov!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortLoanMovs!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortLoanMov!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortLoanMov!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortLoanMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortLoanMov!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortLoanMovs!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortLoanMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortLoanPos!: Product[];
  getProductCodeProductPortLoanPos!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortLoanPos!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortLoanPo!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortLoanPos!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortLoanPo!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortLoanPo!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortLoanPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortLoanPo!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortLoanPos!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortLoanPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortNdfsMovs!: Product[];
  getProductCodeProductPortNdfsMovs!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortNdfsMovs!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortNdfsMov!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortNdfsMovs!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortNdfsMov!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortNdfsMov!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortNdfsMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortNdfsMov!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortNdfsMovs!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortNdfsMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortNdfsPos!: Product[];
  getProductCodeProductPortNdfsPos!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortNdfsPos!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortNdfsPo!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortNdfsPos!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortNdfsPo!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortNdfsPo!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortNdfsPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortNdfsPo!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortNdfsPos!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortNdfsPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortSwapMovs!: Product[];
  getProductCodeProductPortSwapMovs!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortSwapMovs!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortSwapMov!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortSwapMovs!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortSwapMov!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortSwapMov!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortSwapMovs!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortSwapMov!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortSwapMovs!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortSwapMovs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem belongsToMany Product via sourceSystem and productCode
  productCodeProductPortSwapPos!: Product[];
  getProductCodeProductPortSwapPos!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductCodeProductPortSwapPos!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductCodeProductPortSwapPo!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductCodeProductPortSwapPos!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductCodeProductPortSwapPo!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductCodeProductPortSwapPo!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductCodeProductPortSwapPos!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductCodeProductPortSwapPo!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductCodeProductPortSwapPos!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductCodeProductPortSwapPos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysExternalSystem hasMany ProductExtCod via sourceSystem
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

  static initModel (sequelize: Sequelize.Sequelize): typeof SysExternalSystem {
    return SysExternalSystem.init({
      sourceSystem: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true,
        field: 'source_system'
      },
      sourceSystemName: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'source_system_name'
      },
      systemType: {
        type: DataTypes.STRING(2),
        allowNull: false,
        references: {
          model: 'doms_system_type',
          key: 'domain'
        },
        field: 'system_type'
      }
    }, {
      sequelize,
      tableName: 'sys_external_system',
      schema: 'bzdf',
      timestamps: false,
      indexes: [
        {
          name: 'PK-SYS_EXTERNAL_SYSTEM',
          unique: true,
          fields: [
            { name: 'source_system' }
          ]
        }
      ]
    })
  }
}
