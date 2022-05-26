import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { AlcmCpadEadBase, AlcmCpadEadBaseId } from './AlcmCpadEadBase'
import type { CompanyLob, CompanyLobId } from './CompanyLob'
import type { CrmGuarPos, CrmGuarPosId } from './CrmGuarPos'
import type { CrmInvptyLink, CrmInvptyLinkId } from './CrmInvptyLink'
import type { CrmNetagrLink, CrmNetagrLinkId } from './CrmNetagrLink'
import type { CrmProductLink, CrmProductLinkId } from './CrmProductLink'
import type { DomsIndustrySectorType, DomsIndustrySectorTypeId } from './DomsIndustrySectorType'
import type { DomsInvptyStatus, DomsInvptyStatusId } from './DomsInvptyStatus'
import type { FcmgtFacilityInvpty, FcmgtFacilityInvptyId } from './FcmgtFacilityInvpty'
import type { FcmgtProduct, FcmgtProductId } from './FcmgtProduct'
import type { FcmgtUtilizationA, FcmgtUtilizationAId } from './FcmgtUtilizationA'
import type { GenldgInvptyLink } from './GenldgInvptyLink'
import type { InvptyExtCod, InvptyExtCodId } from './InvptyExtCod'
import type { InvptyExtCodCodif, InvptyExtCodCodifId } from './InvptyExtCodCodif'
import type { InvptyFncls, InvptyFnclsId } from './InvptyFncls'
import type { InvptyLink, InvptyLinkId } from './InvptyLink'
import type { InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId } from './InvptyRtngAgcyRtsStr'
import type { InvptyRtngCrd, InvptyRtngCrdId } from './InvptyRtngCrd'
import type { InvptyTypeCodif, InvptyTypeCodifId } from './InvptyTypeCodif'
import type { InvptyTypeLnk, InvptyTypeLnkId } from './InvptyTypeLnk'
import type { InvptyTypeLrgcopr, InvptyTypeLrgcoprId } from './InvptyTypeLrgcopr'
import type { PnlOperincDet, PnlOperincDetId } from './PnlOperincDet'
import type { PortDsecMov, PortDsecMovId } from './PortDsecMov'
import type { PortDsecPos, PortDsecPosId } from './PortDsecPos'
import type { PortFctyMov, PortFctyMovId } from './PortFctyMov'
import type { PortFctyPos, PortFctyPosId } from './PortFctyPos'
import type { PortFincMov, PortFincMovId } from './PortFincMov'
import type { PortFincPos, PortFincPosId } from './PortFincPos'
import type { PortFoexMov, PortFoexMovId } from './PortFoexMov'
import type { PortFoexPos, PortFoexPosId } from './PortFoexPos'
import type { PortFutuMov, PortFutuMovId } from './PortFutuMov'
import type { PortFutuPos, PortFutuPosId } from './PortFutuPos'
import type { PortGuarPos, PortGuarPosId } from './PortGuarPos'
import type { PortLoanMov, PortLoanMovId } from './PortLoanMov'
import type { PortLoanPos, PortLoanPosId } from './PortLoanPos'
import type { PortNdfsMov, PortNdfsMovId } from './PortNdfsMov'
import type { PortNdfsPos, PortNdfsPosId } from './PortNdfsPos'
import type { PortNostroPos, PortNostroPosId } from './PortNostroPos'
import type { PortOtherPos, PortOtherPosId } from './PortOtherPos'
import type { PortRecvLnk, PortRecvLnkId } from './PortRecvLnk'
import type { PortRecvMov, PortRecvMovId } from './PortRecvMov'
import type { PortRecvPos, PortRecvPosId } from './PortRecvPos'
import type { PortRepoMov, PortRepoMovId } from './PortRepoMov'
import type { PortRepoPos, PortRepoPosId } from './PortRepoPos'
import type { PortSwapMov, PortSwapMovId } from './PortSwapMov'
import type { PortSwapPos, PortSwapPosId } from './PortSwapPos'
import type { PortThirdPartyLnk, PortThirdPartyLnkId } from './PortThirdPartyLnk'
import type { PortVostroPos, PortVostroPosId } from './PortVostroPos'
import type { SysCountry, SysCountryId } from './SysCountry'

export interface InvptyDetAttributes {
  invptyCode: number;
  shortName: string;
  invptyStatus: string;
  internalInvpty: boolean;
  relationshipStartDate?: string;
  lobCode: string;
  originationCountry: string;
  longName?: string;
  street1?: string;
  street2?: string;
  zipCode?: string;
  city?: string;
  state?: string;
  countryOfResidence: string;
  incorporationCountry: string;
  birthDate?: string;
  industrySectorType: string;
  industrySectorCode?: string;
  websiteUrl?: string;
  emailAddress?: string;
  defaultFlag: boolean;
  infoOnDefault: boolean;
  defaultDate?: string;
  legalProceedings?: string;
  legalProceedingsDate?: string;
  initialOnboardDate?: string;
  validInvptyInitialDate?: string;
  invptyUpdateDate?: string;
  validInvptyFinalDate?: string;
}

export type InvptyDetPk = 'invptyCode';
export type InvptyDetId = InvptyDet[InvptyDetPk];
export type InvptyDetOptionalAttributes = 'invptyStatus' | 'relationshipStartDate' | 'longName' | 'street1' | 'street2' | 'zipCode' | 'city' | 'state' | 'birthDate' | 'industrySectorType' | 'industrySectorCode' | 'websiteUrl' | 'emailAddress' | 'defaultDate' | 'legalProceedings' | 'legalProceedingsDate' | 'initialOnboardDate' | 'validInvptyInitialDate' | 'invptyUpdateDate' | 'validInvptyFinalDate';
export type InvptyDetCreationAttributes = Optional<InvptyDetAttributes, InvptyDetOptionalAttributes>;

export class InvptyDet extends Model<InvptyDetAttributes, InvptyDetCreationAttributes> implements InvptyDetAttributes {
  invptyCode!: number;
  shortName!: string;
  invptyStatus!: string;
  internalInvpty!: boolean;
  relationshipStartDate?: string;
  lobCode!: string;
  originationCountry!: string;
  longName?: string;
  street1?: string;
  street2?: string;
  zipCode?: string;
  city?: string;
  state?: string;
  countryOfResidence!: string;
  incorporationCountry!: string;
  birthDate?: string;
  industrySectorType!: string;
  industrySectorCode?: string;
  websiteUrl?: string;
  emailAddress?: string;
  defaultFlag!: boolean;
  infoOnDefault!: boolean;
  defaultDate?: string;
  legalProceedings?: string;
  legalProceedingsDate?: string;
  initialOnboardDate?: string;
  validInvptyInitialDate?: string;
  invptyUpdateDate?: string;
  validInvptyFinalDate?: string;

  // InvptyDet belongsTo CompanyLob via lobCode
  lobCodeCompanyLob!: CompanyLob;
  getLobCodeCompanyLob!: Sequelize.BelongsToGetAssociationMixin<CompanyLob>;
  setLobCodeCompanyLob!: Sequelize.BelongsToSetAssociationMixin<CompanyLob, CompanyLobId>;
  createLobCodeCompanyLob!: Sequelize.BelongsToCreateAssociationMixin<CompanyLob>;
  // InvptyDet belongsTo DomsIndustrySectorType via industrySectorType
  industrySectorTypeDomsIndustrySectorType!: DomsIndustrySectorType;
  getIndustrySectorTypeDomsIndustrySectorType!: Sequelize.BelongsToGetAssociationMixin<DomsIndustrySectorType>;
  setIndustrySectorTypeDomsIndustrySectorType!: Sequelize.BelongsToSetAssociationMixin<DomsIndustrySectorType, DomsIndustrySectorTypeId>;
  createIndustrySectorTypeDomsIndustrySectorType!: Sequelize.BelongsToCreateAssociationMixin<DomsIndustrySectorType>;
  // InvptyDet belongsTo DomsInvptyStatus via invptyStatus
  invptyStatusDomsInvptyStatus!: DomsInvptyStatus;
  getInvptyStatusDomsInvptyStatus!: Sequelize.BelongsToGetAssociationMixin<DomsInvptyStatus>;
  setInvptyStatusDomsInvptyStatus!: Sequelize.BelongsToSetAssociationMixin<DomsInvptyStatus, DomsInvptyStatusId>;
  createInvptyStatusDomsInvptyStatus!: Sequelize.BelongsToCreateAssociationMixin<DomsInvptyStatus>;
  // InvptyDet hasMany AlcmCpadEadBase via invptyCode
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
  // InvptyDet hasMany CrmGuarPos via guarantorCode
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
  // InvptyDet hasMany CrmInvptyLink via obligorCode
  crmInvptyLinks!: CrmInvptyLink[];
  getCrmInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<CrmInvptyLink>;
  setCrmInvptyLinks!: Sequelize.HasManySetAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmInvptyLink!: Sequelize.HasManyAddAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  addCrmInvptyLinks!: Sequelize.HasManyAddAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  createCrmInvptyLink!: Sequelize.HasManyCreateAssociationMixin<CrmInvptyLink>;
  removeCrmInvptyLink!: Sequelize.HasManyRemoveAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  removeCrmInvptyLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmInvptyLink!: Sequelize.HasManyHasAssociationMixin<CrmInvptyLink, CrmInvptyLinkId>;
  hasCrmInvptyLinks!: Sequelize.HasManyHasAssociationsMixin<CrmInvptyLink, CrmInvptyLinkId>;
  countCrmInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany CrmNetagrLink via invptyCode
  crmNetagrLinks!: CrmNetagrLink[];
  getCrmNetagrLinks!: Sequelize.HasManyGetAssociationsMixin<CrmNetagrLink>;
  setCrmNetagrLinks!: Sequelize.HasManySetAssociationsMixin<CrmNetagrLink, CrmNetagrLinkId>;
  addCrmNetagrLink!: Sequelize.HasManyAddAssociationMixin<CrmNetagrLink, CrmNetagrLinkId>;
  addCrmNetagrLinks!: Sequelize.HasManyAddAssociationsMixin<CrmNetagrLink, CrmNetagrLinkId>;
  createCrmNetagrLink!: Sequelize.HasManyCreateAssociationMixin<CrmNetagrLink>;
  removeCrmNetagrLink!: Sequelize.HasManyRemoveAssociationMixin<CrmNetagrLink, CrmNetagrLinkId>;
  removeCrmNetagrLinks!: Sequelize.HasManyRemoveAssociationsMixin<CrmNetagrLink, CrmNetagrLinkId>;
  hasCrmNetagrLink!: Sequelize.HasManyHasAssociationMixin<CrmNetagrLink, CrmNetagrLinkId>;
  hasCrmNetagrLinks!: Sequelize.HasManyHasAssociationsMixin<CrmNetagrLink, CrmNetagrLinkId>;
  countCrmNetagrLinks!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany CrmProductLink via obligorCode
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
  // InvptyDet hasMany FcmgtFacilityInvpty via invptyCode
  fcmgtFacilityInvpties!: FcmgtFacilityInvpty[];
  getFcmgtFacilityInvpties!: Sequelize.HasManyGetAssociationsMixin<FcmgtFacilityInvpty>;
  setFcmgtFacilityInvpties!: Sequelize.HasManySetAssociationsMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  addFcmgtFacilityInvpty!: Sequelize.HasManyAddAssociationMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  addFcmgtFacilityInvpties!: Sequelize.HasManyAddAssociationsMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  createFcmgtFacilityInvpty!: Sequelize.HasManyCreateAssociationMixin<FcmgtFacilityInvpty>;
  removeFcmgtFacilityInvpty!: Sequelize.HasManyRemoveAssociationMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  removeFcmgtFacilityInvpties!: Sequelize.HasManyRemoveAssociationsMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  hasFcmgtFacilityInvpty!: Sequelize.HasManyHasAssociationMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  hasFcmgtFacilityInvpties!: Sequelize.HasManyHasAssociationsMixin<FcmgtFacilityInvpty, FcmgtFacilityInvptyId>;
  countFcmgtFacilityInvpties!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet belongsToMany FcmgtProduct via invptyCode and carmProductCode
  carmProductCodeFcmgtProductFcmgtUtilizationAs!: FcmgtProduct[];
  getCarmProductCodeFcmgtProductFcmgtUtilizationAs!: Sequelize.BelongsToManyGetAssociationsMixin<FcmgtProduct>;
  setCarmProductCodeFcmgtProductFcmgtUtilizationAs!: Sequelize.BelongsToManySetAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  addCarmProductCodeFcmgtProductFcmgtUtilizationA!: Sequelize.BelongsToManyAddAssociationMixin<FcmgtProduct, FcmgtProductId>;
  addCarmProductCodeFcmgtProductFcmgtUtilizationAs!: Sequelize.BelongsToManyAddAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  createCarmProductCodeFcmgtProductFcmgtUtilizationA!: Sequelize.BelongsToManyCreateAssociationMixin<FcmgtProduct>;
  removeCarmProductCodeFcmgtProductFcmgtUtilizationA!: Sequelize.BelongsToManyRemoveAssociationMixin<FcmgtProduct, FcmgtProductId>;
  removeCarmProductCodeFcmgtProductFcmgtUtilizationAs!: Sequelize.BelongsToManyRemoveAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  hasCarmProductCodeFcmgtProductFcmgtUtilizationA!: Sequelize.BelongsToManyHasAssociationMixin<FcmgtProduct, FcmgtProductId>;
  hasCarmProductCodeFcmgtProductFcmgtUtilizationAs!: Sequelize.BelongsToManyHasAssociationsMixin<FcmgtProduct, FcmgtProductId>;
  countCarmProductCodeFcmgtProductFcmgtUtilizationAs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // InvptyDet hasMany FcmgtUtilizationA via invptyCode
  fcmgtUtilizationAs!: FcmgtUtilizationA[];
  getFcmgtUtilizationAs!: Sequelize.HasManyGetAssociationsMixin<FcmgtUtilizationA>;
  setFcmgtUtilizationAs!: Sequelize.HasManySetAssociationsMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  addFcmgtUtilizationA!: Sequelize.HasManyAddAssociationMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  addFcmgtUtilizationAs!: Sequelize.HasManyAddAssociationsMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  createFcmgtUtilizationA!: Sequelize.HasManyCreateAssociationMixin<FcmgtUtilizationA>;
  removeFcmgtUtilizationA!: Sequelize.HasManyRemoveAssociationMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  removeFcmgtUtilizationAs!: Sequelize.HasManyRemoveAssociationsMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  hasFcmgtUtilizationA!: Sequelize.HasManyHasAssociationMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  hasFcmgtUtilizationAs!: Sequelize.HasManyHasAssociationsMixin<FcmgtUtilizationA, FcmgtUtilizationAId>;
  countFcmgtUtilizationAs!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany GenldgInvptyLink via invptyCode
  genldgInvptyLinks!: GenldgInvptyLink[];
  getGenldgInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<GenldgInvptyLink>;
  countGenldgInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany InvptyExtCod via invptyCode
  invptyExtCods!: InvptyExtCod[];
  getInvptyExtCods!: Sequelize.HasManyGetAssociationsMixin<InvptyExtCod>;
  setInvptyExtCods!: Sequelize.HasManySetAssociationsMixin<InvptyExtCod, InvptyExtCodId>;
  addInvptyExtCod!: Sequelize.HasManyAddAssociationMixin<InvptyExtCod, InvptyExtCodId>;
  addInvptyExtCods!: Sequelize.HasManyAddAssociationsMixin<InvptyExtCod, InvptyExtCodId>;
  createInvptyExtCod!: Sequelize.HasManyCreateAssociationMixin<InvptyExtCod>;
  removeInvptyExtCod!: Sequelize.HasManyRemoveAssociationMixin<InvptyExtCod, InvptyExtCodId>;
  removeInvptyExtCods!: Sequelize.HasManyRemoveAssociationsMixin<InvptyExtCod, InvptyExtCodId>;
  hasInvptyExtCod!: Sequelize.HasManyHasAssociationMixin<InvptyExtCod, InvptyExtCodId>;
  hasInvptyExtCods!: Sequelize.HasManyHasAssociationsMixin<InvptyExtCod, InvptyExtCodId>;
  countInvptyExtCods!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet belongsToMany InvptyExtCodCodif via invptyCode and extCodeCodifier
  extCodeCodifierInvptyExtCodCodifs!: InvptyExtCodCodif[];
  getExtCodeCodifierInvptyExtCodCodifs!: Sequelize.BelongsToManyGetAssociationsMixin<InvptyExtCodCodif>;
  setExtCodeCodifierInvptyExtCodCodifs!: Sequelize.BelongsToManySetAssociationsMixin<InvptyExtCodCodif, InvptyExtCodCodifId>;
  addExtCodeCodifierInvptyExtCodCodif!: Sequelize.BelongsToManyAddAssociationMixin<InvptyExtCodCodif, InvptyExtCodCodifId>;
  addExtCodeCodifierInvptyExtCodCodifs!: Sequelize.BelongsToManyAddAssociationsMixin<InvptyExtCodCodif, InvptyExtCodCodifId>;
  createExtCodeCodifierInvptyExtCodCodif!: Sequelize.BelongsToManyCreateAssociationMixin<InvptyExtCodCodif>;
  removeExtCodeCodifierInvptyExtCodCodif!: Sequelize.BelongsToManyRemoveAssociationMixin<InvptyExtCodCodif, InvptyExtCodCodifId>;
  removeExtCodeCodifierInvptyExtCodCodifs!: Sequelize.BelongsToManyRemoveAssociationsMixin<InvptyExtCodCodif, InvptyExtCodCodifId>;
  hasExtCodeCodifierInvptyExtCodCodif!: Sequelize.BelongsToManyHasAssociationMixin<InvptyExtCodCodif, InvptyExtCodCodifId>;
  hasExtCodeCodifierInvptyExtCodCodifs!: Sequelize.BelongsToManyHasAssociationsMixin<InvptyExtCodCodif, InvptyExtCodCodifId>;
  countExtCodeCodifierInvptyExtCodCodifs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // InvptyDet hasMany InvptyFncls via invptyCode
  invptyFncls!: InvptyFncls[];
  getInvptyFncls!: Sequelize.HasManyGetAssociationsMixin<InvptyFncls>;
  setInvptyFncls!: Sequelize.HasManySetAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  addInvptyFncl!: Sequelize.HasManyAddAssociationMixin<InvptyFncls, InvptyFnclsId>;
  addInvptyFncls!: Sequelize.HasManyAddAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  createInvptyFncl!: Sequelize.HasManyCreateAssociationMixin<InvptyFncls>;
  removeInvptyFncl!: Sequelize.HasManyRemoveAssociationMixin<InvptyFncls, InvptyFnclsId>;
  removeInvptyFncls!: Sequelize.HasManyRemoveAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  hasInvptyFncl!: Sequelize.HasManyHasAssociationMixin<InvptyFncls, InvptyFnclsId>;
  hasInvptyFncls!: Sequelize.HasManyHasAssociationsMixin<InvptyFncls, InvptyFnclsId>;
  countInvptyFncls!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany InvptyLink via invptyChildCode
  invptyLinks!: InvptyLink[];
  getInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<InvptyLink>;
  setInvptyLinks!: Sequelize.HasManySetAssociationsMixin<InvptyLink, InvptyLinkId>;
  addInvptyLink!: Sequelize.HasManyAddAssociationMixin<InvptyLink, InvptyLinkId>;
  addInvptyLinks!: Sequelize.HasManyAddAssociationsMixin<InvptyLink, InvptyLinkId>;
  createInvptyLink!: Sequelize.HasManyCreateAssociationMixin<InvptyLink>;
  removeInvptyLink!: Sequelize.HasManyRemoveAssociationMixin<InvptyLink, InvptyLinkId>;
  removeInvptyLinks!: Sequelize.HasManyRemoveAssociationsMixin<InvptyLink, InvptyLinkId>;
  hasInvptyLink!: Sequelize.HasManyHasAssociationMixin<InvptyLink, InvptyLinkId>;
  hasInvptyLinks!: Sequelize.HasManyHasAssociationsMixin<InvptyLink, InvptyLinkId>;
  countInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany InvptyLink via invptyParentCode
  invptyParentCodeInvptyLinks!: InvptyLink[];
  getInvptyParentCodeInvptyLinks!: Sequelize.HasManyGetAssociationsMixin<InvptyLink>;
  setInvptyParentCodeInvptyLinks!: Sequelize.HasManySetAssociationsMixin<InvptyLink, InvptyLinkId>;
  addInvptyParentCodeInvptyLink!: Sequelize.HasManyAddAssociationMixin<InvptyLink, InvptyLinkId>;
  addInvptyParentCodeInvptyLinks!: Sequelize.HasManyAddAssociationsMixin<InvptyLink, InvptyLinkId>;
  createInvptyParentCodeInvptyLink!: Sequelize.HasManyCreateAssociationMixin<InvptyLink>;
  removeInvptyParentCodeInvptyLink!: Sequelize.HasManyRemoveAssociationMixin<InvptyLink, InvptyLinkId>;
  removeInvptyParentCodeInvptyLinks!: Sequelize.HasManyRemoveAssociationsMixin<InvptyLink, InvptyLinkId>;
  hasInvptyParentCodeInvptyLink!: Sequelize.HasManyHasAssociationMixin<InvptyLink, InvptyLinkId>;
  hasInvptyParentCodeInvptyLinks!: Sequelize.HasManyHasAssociationsMixin<InvptyLink, InvptyLinkId>;
  countInvptyParentCodeInvptyLinks!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet belongsToMany InvptyRtngAgcyRtsStr via invptyCode and ratingId
  ratingIdInvptyRtngAgcyRtsStrs!: InvptyRtngAgcyRtsStr[];
  getRatingIdInvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyGetAssociationsMixin<InvptyRtngAgcyRtsStr>;
  setRatingIdInvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManySetAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  addRatingIdInvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyAddAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  addRatingIdInvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyAddAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  createRatingIdInvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyCreateAssociationMixin<InvptyRtngAgcyRtsStr>;
  removeRatingIdInvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyRemoveAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  removeRatingIdInvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyRemoveAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  hasRatingIdInvptyRtngAgcyRtsStr!: Sequelize.BelongsToManyHasAssociationMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  hasRatingIdInvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyHasAssociationsMixin<InvptyRtngAgcyRtsStr, InvptyRtngAgcyRtsStrId>;
  countRatingIdInvptyRtngAgcyRtsStrs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // InvptyDet hasMany InvptyRtngCrd via invptyCode
  invptyRtngCrds!: InvptyRtngCrd[];
  getInvptyRtngCrds!: Sequelize.HasManyGetAssociationsMixin<InvptyRtngCrd>;
  setInvptyRtngCrds!: Sequelize.HasManySetAssociationsMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  addInvptyRtngCrd!: Sequelize.HasManyAddAssociationMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  addInvptyRtngCrds!: Sequelize.HasManyAddAssociationsMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  createInvptyRtngCrd!: Sequelize.HasManyCreateAssociationMixin<InvptyRtngCrd>;
  removeInvptyRtngCrd!: Sequelize.HasManyRemoveAssociationMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  removeInvptyRtngCrds!: Sequelize.HasManyRemoveAssociationsMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  hasInvptyRtngCrd!: Sequelize.HasManyHasAssociationMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  hasInvptyRtngCrds!: Sequelize.HasManyHasAssociationsMixin<InvptyRtngCrd, InvptyRtngCrdId>;
  countInvptyRtngCrds!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet belongsToMany InvptyTypeCodif via invptyCode and invptyTypeCodifier
  invptyTypeCodifierInvptyTypeCodifs!: InvptyTypeCodif[];
  getInvptyTypeCodifierInvptyTypeCodifs!: Sequelize.BelongsToManyGetAssociationsMixin<InvptyTypeCodif>;
  setInvptyTypeCodifierInvptyTypeCodifs!: Sequelize.BelongsToManySetAssociationsMixin<InvptyTypeCodif, InvptyTypeCodifId>;
  addInvptyTypeCodifierInvptyTypeCodif!: Sequelize.BelongsToManyAddAssociationMixin<InvptyTypeCodif, InvptyTypeCodifId>;
  addInvptyTypeCodifierInvptyTypeCodifs!: Sequelize.BelongsToManyAddAssociationsMixin<InvptyTypeCodif, InvptyTypeCodifId>;
  createInvptyTypeCodifierInvptyTypeCodif!: Sequelize.BelongsToManyCreateAssociationMixin<InvptyTypeCodif>;
  removeInvptyTypeCodifierInvptyTypeCodif!: Sequelize.BelongsToManyRemoveAssociationMixin<InvptyTypeCodif, InvptyTypeCodifId>;
  removeInvptyTypeCodifierInvptyTypeCodifs!: Sequelize.BelongsToManyRemoveAssociationsMixin<InvptyTypeCodif, InvptyTypeCodifId>;
  hasInvptyTypeCodifierInvptyTypeCodif!: Sequelize.BelongsToManyHasAssociationMixin<InvptyTypeCodif, InvptyTypeCodifId>;
  hasInvptyTypeCodifierInvptyTypeCodifs!: Sequelize.BelongsToManyHasAssociationsMixin<InvptyTypeCodif, InvptyTypeCodifId>;
  countInvptyTypeCodifierInvptyTypeCodifs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // InvptyDet hasMany InvptyTypeLnk via invptyCode
  invptyTypeLnks!: InvptyTypeLnk[];
  getInvptyTypeLnks!: Sequelize.HasManyGetAssociationsMixin<InvptyTypeLnk>;
  setInvptyTypeLnks!: Sequelize.HasManySetAssociationsMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  addInvptyTypeLnk!: Sequelize.HasManyAddAssociationMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  addInvptyTypeLnks!: Sequelize.HasManyAddAssociationsMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  createInvptyTypeLnk!: Sequelize.HasManyCreateAssociationMixin<InvptyTypeLnk>;
  removeInvptyTypeLnk!: Sequelize.HasManyRemoveAssociationMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  removeInvptyTypeLnks!: Sequelize.HasManyRemoveAssociationsMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  hasInvptyTypeLnk!: Sequelize.HasManyHasAssociationMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  hasInvptyTypeLnks!: Sequelize.HasManyHasAssociationsMixin<InvptyTypeLnk, InvptyTypeLnkId>;
  countInvptyTypeLnks!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany InvptyTypeLrgcopr via invptyCode
  invptyTypeLrgcoprs!: InvptyTypeLrgcopr[];
  getInvptyTypeLrgcoprs!: Sequelize.HasManyGetAssociationsMixin<InvptyTypeLrgcopr>;
  setInvptyTypeLrgcoprs!: Sequelize.HasManySetAssociationsMixin<InvptyTypeLrgcopr, InvptyTypeLrgcoprId>;
  addInvptyTypeLrgcopr!: Sequelize.HasManyAddAssociationMixin<InvptyTypeLrgcopr, InvptyTypeLrgcoprId>;
  addInvptyTypeLrgcoprs!: Sequelize.HasManyAddAssociationsMixin<InvptyTypeLrgcopr, InvptyTypeLrgcoprId>;
  createInvptyTypeLrgcopr!: Sequelize.HasManyCreateAssociationMixin<InvptyTypeLrgcopr>;
  removeInvptyTypeLrgcopr!: Sequelize.HasManyRemoveAssociationMixin<InvptyTypeLrgcopr, InvptyTypeLrgcoprId>;
  removeInvptyTypeLrgcoprs!: Sequelize.HasManyRemoveAssociationsMixin<InvptyTypeLrgcopr, InvptyTypeLrgcoprId>;
  hasInvptyTypeLrgcopr!: Sequelize.HasManyHasAssociationMixin<InvptyTypeLrgcopr, InvptyTypeLrgcoprId>;
  hasInvptyTypeLrgcoprs!: Sequelize.HasManyHasAssociationsMixin<InvptyTypeLrgcopr, InvptyTypeLrgcoprId>;
  countInvptyTypeLrgcoprs!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PnlOperincDet via invptyCode
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
  // InvptyDet hasMany PortDsecMov via invptyCode
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
  // InvptyDet hasMany PortDsecPos via invptyCode
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
  // InvptyDet hasMany PortFctyMov via invptyCode
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
  // InvptyDet hasMany PortFctyPos via invptyCode
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
  // InvptyDet hasMany PortFincMov via issuerCode
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
  // InvptyDet hasMany PortFincPos via issuerCode
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
  // InvptyDet hasMany PortFoexMov via invptyCode
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
  // InvptyDet hasMany PortFoexPos via invptyCode
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
  // InvptyDet hasMany PortFutuMov via invptyCode
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
  // InvptyDet hasMany PortFutuMov via exchangeCode
  exchangeCodePortFutuMovs!: PortFutuMov[];
  getExchangeCodePortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setExchangeCodePortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addExchangeCodePortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addExchangeCodePortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createExchangeCodePortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeExchangeCodePortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeExchangeCodePortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasExchangeCodePortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasExchangeCodePortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countExchangeCodePortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PortFutuMov via ccpCmCode
  ccpCmCodePortFutuMovs!: PortFutuMov[];
  getCcpCmCodePortFutuMovs!: Sequelize.HasManyGetAssociationsMixin<PortFutuMov>;
  setCcpCmCodePortFutuMovs!: Sequelize.HasManySetAssociationsMixin<PortFutuMov, PortFutuMovId>;
  addCcpCmCodePortFutuMov!: Sequelize.HasManyAddAssociationMixin<PortFutuMov, PortFutuMovId>;
  addCcpCmCodePortFutuMovs!: Sequelize.HasManyAddAssociationsMixin<PortFutuMov, PortFutuMovId>;
  createCcpCmCodePortFutuMov!: Sequelize.HasManyCreateAssociationMixin<PortFutuMov>;
  removeCcpCmCodePortFutuMov!: Sequelize.HasManyRemoveAssociationMixin<PortFutuMov, PortFutuMovId>;
  removeCcpCmCodePortFutuMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuMov, PortFutuMovId>;
  hasCcpCmCodePortFutuMov!: Sequelize.HasManyHasAssociationMixin<PortFutuMov, PortFutuMovId>;
  hasCcpCmCodePortFutuMovs!: Sequelize.HasManyHasAssociationsMixin<PortFutuMov, PortFutuMovId>;
  countCcpCmCodePortFutuMovs!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PortFutuPos via invptyCode
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
  // InvptyDet hasMany PortFutuPos via exchangeCode
  exchangeCodePortFutuPos!: PortFutuPos[];
  getExchangeCodePortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setExchangeCodePortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addExchangeCodePortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addExchangeCodePortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createExchangeCodePortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeExchangeCodePortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeExchangeCodePortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasExchangeCodePortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasExchangeCodePortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countExchangeCodePortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PortFutuPos via ccpCmCode
  ccpCmCodePortFutuPos!: PortFutuPos[];
  getCcpCmCodePortFutuPos!: Sequelize.HasManyGetAssociationsMixin<PortFutuPos>;
  setCcpCmCodePortFutuPos!: Sequelize.HasManySetAssociationsMixin<PortFutuPos, PortFutuPosId>;
  addCcpCmCodePortFutuPo!: Sequelize.HasManyAddAssociationMixin<PortFutuPos, PortFutuPosId>;
  addCcpCmCodePortFutuPos!: Sequelize.HasManyAddAssociationsMixin<PortFutuPos, PortFutuPosId>;
  createCcpCmCodePortFutuPo!: Sequelize.HasManyCreateAssociationMixin<PortFutuPos>;
  removeCcpCmCodePortFutuPo!: Sequelize.HasManyRemoveAssociationMixin<PortFutuPos, PortFutuPosId>;
  removeCcpCmCodePortFutuPos!: Sequelize.HasManyRemoveAssociationsMixin<PortFutuPos, PortFutuPosId>;
  hasCcpCmCodePortFutuPo!: Sequelize.HasManyHasAssociationMixin<PortFutuPos, PortFutuPosId>;
  hasCcpCmCodePortFutuPos!: Sequelize.HasManyHasAssociationsMixin<PortFutuPos, PortFutuPosId>;
  countCcpCmCodePortFutuPos!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PortGuarPos via beneficiaryCode
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
  // InvptyDet hasMany PortGuarPos via finalBeneficiary
  finalBeneficiaryPortGuarPos!: PortGuarPos[];
  getFinalBeneficiaryPortGuarPos!: Sequelize.HasManyGetAssociationsMixin<PortGuarPos>;
  setFinalBeneficiaryPortGuarPos!: Sequelize.HasManySetAssociationsMixin<PortGuarPos, PortGuarPosId>;
  addFinalBeneficiaryPortGuarPo!: Sequelize.HasManyAddAssociationMixin<PortGuarPos, PortGuarPosId>;
  addFinalBeneficiaryPortGuarPos!: Sequelize.HasManyAddAssociationsMixin<PortGuarPos, PortGuarPosId>;
  createFinalBeneficiaryPortGuarPo!: Sequelize.HasManyCreateAssociationMixin<PortGuarPos>;
  removeFinalBeneficiaryPortGuarPo!: Sequelize.HasManyRemoveAssociationMixin<PortGuarPos, PortGuarPosId>;
  removeFinalBeneficiaryPortGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarPos, PortGuarPosId>;
  hasFinalBeneficiaryPortGuarPo!: Sequelize.HasManyHasAssociationMixin<PortGuarPos, PortGuarPosId>;
  hasFinalBeneficiaryPortGuarPos!: Sequelize.HasManyHasAssociationsMixin<PortGuarPos, PortGuarPosId>;
  countFinalBeneficiaryPortGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PortGuarPos via obligorCode
  obligorCodePortGuarPos!: PortGuarPos[];
  getObligorCodePortGuarPos!: Sequelize.HasManyGetAssociationsMixin<PortGuarPos>;
  setObligorCodePortGuarPos!: Sequelize.HasManySetAssociationsMixin<PortGuarPos, PortGuarPosId>;
  addObligorCodePortGuarPo!: Sequelize.HasManyAddAssociationMixin<PortGuarPos, PortGuarPosId>;
  addObligorCodePortGuarPos!: Sequelize.HasManyAddAssociationsMixin<PortGuarPos, PortGuarPosId>;
  createObligorCodePortGuarPo!: Sequelize.HasManyCreateAssociationMixin<PortGuarPos>;
  removeObligorCodePortGuarPo!: Sequelize.HasManyRemoveAssociationMixin<PortGuarPos, PortGuarPosId>;
  removeObligorCodePortGuarPos!: Sequelize.HasManyRemoveAssociationsMixin<PortGuarPos, PortGuarPosId>;
  hasObligorCodePortGuarPo!: Sequelize.HasManyHasAssociationMixin<PortGuarPos, PortGuarPosId>;
  hasObligorCodePortGuarPos!: Sequelize.HasManyHasAssociationsMixin<PortGuarPos, PortGuarPosId>;
  countObligorCodePortGuarPos!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PortLoanMov via invptyCode
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
  // InvptyDet hasMany PortLoanPos via invptyCode
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
  // InvptyDet hasMany PortNdfsMov via invptyCode
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
  // InvptyDet hasMany PortNdfsPos via invptyCode
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
  // InvptyDet hasMany PortNostroPos via invptyCode
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
  // InvptyDet hasMany PortOtherPos via invptyCode
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
  // InvptyDet hasMany PortRecvLnk via invptyCode
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
  // InvptyDet hasMany PortRecvMov via invptyCode
  portRecvMovs!: PortRecvMov[];
  getPortRecvMovs!: Sequelize.HasManyGetAssociationsMixin<PortRecvMov>;
  setPortRecvMovs!: Sequelize.HasManySetAssociationsMixin<PortRecvMov, PortRecvMovId>;
  addPortRecvMov!: Sequelize.HasManyAddAssociationMixin<PortRecvMov, PortRecvMovId>;
  addPortRecvMovs!: Sequelize.HasManyAddAssociationsMixin<PortRecvMov, PortRecvMovId>;
  createPortRecvMov!: Sequelize.HasManyCreateAssociationMixin<PortRecvMov>;
  removePortRecvMov!: Sequelize.HasManyRemoveAssociationMixin<PortRecvMov, PortRecvMovId>;
  removePortRecvMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvMov, PortRecvMovId>;
  hasPortRecvMov!: Sequelize.HasManyHasAssociationMixin<PortRecvMov, PortRecvMovId>;
  hasPortRecvMovs!: Sequelize.HasManyHasAssociationsMixin<PortRecvMov, PortRecvMovId>;
  countPortRecvMovs!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PortRecvPos via invptyCode
  portRecvPos!: PortRecvPos[];
  getPortRecvPos!: Sequelize.HasManyGetAssociationsMixin<PortRecvPos>;
  setPortRecvPos!: Sequelize.HasManySetAssociationsMixin<PortRecvPos, PortRecvPosId>;
  addPortRecvPo!: Sequelize.HasManyAddAssociationMixin<PortRecvPos, PortRecvPosId>;
  addPortRecvPos!: Sequelize.HasManyAddAssociationsMixin<PortRecvPos, PortRecvPosId>;
  createPortRecvPo!: Sequelize.HasManyCreateAssociationMixin<PortRecvPos>;
  removePortRecvPo!: Sequelize.HasManyRemoveAssociationMixin<PortRecvPos, PortRecvPosId>;
  removePortRecvPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRecvPos, PortRecvPosId>;
  hasPortRecvPo!: Sequelize.HasManyHasAssociationMixin<PortRecvPos, PortRecvPosId>;
  hasPortRecvPos!: Sequelize.HasManyHasAssociationsMixin<PortRecvPos, PortRecvPosId>;
  countPortRecvPos!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PortRepoMov via invptyCode
  portRepoMovs!: PortRepoMov[];
  getPortRepoMovs!: Sequelize.HasManyGetAssociationsMixin<PortRepoMov>;
  setPortRepoMovs!: Sequelize.HasManySetAssociationsMixin<PortRepoMov, PortRepoMovId>;
  addPortRepoMov!: Sequelize.HasManyAddAssociationMixin<PortRepoMov, PortRepoMovId>;
  addPortRepoMovs!: Sequelize.HasManyAddAssociationsMixin<PortRepoMov, PortRepoMovId>;
  createPortRepoMov!: Sequelize.HasManyCreateAssociationMixin<PortRepoMov>;
  removePortRepoMov!: Sequelize.HasManyRemoveAssociationMixin<PortRepoMov, PortRepoMovId>;
  removePortRepoMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoMov, PortRepoMovId>;
  hasPortRepoMov!: Sequelize.HasManyHasAssociationMixin<PortRepoMov, PortRepoMovId>;
  hasPortRepoMovs!: Sequelize.HasManyHasAssociationsMixin<PortRepoMov, PortRepoMovId>;
  countPortRepoMovs!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PortRepoPos via invptyCode
  portRepoPos!: PortRepoPos[];
  getPortRepoPos!: Sequelize.HasManyGetAssociationsMixin<PortRepoPos>;
  setPortRepoPos!: Sequelize.HasManySetAssociationsMixin<PortRepoPos, PortRepoPosId>;
  addPortRepoPo!: Sequelize.HasManyAddAssociationMixin<PortRepoPos, PortRepoPosId>;
  addPortRepoPos!: Sequelize.HasManyAddAssociationsMixin<PortRepoPos, PortRepoPosId>;
  createPortRepoPo!: Sequelize.HasManyCreateAssociationMixin<PortRepoPos>;
  removePortRepoPo!: Sequelize.HasManyRemoveAssociationMixin<PortRepoPos, PortRepoPosId>;
  removePortRepoPos!: Sequelize.HasManyRemoveAssociationsMixin<PortRepoPos, PortRepoPosId>;
  hasPortRepoPo!: Sequelize.HasManyHasAssociationMixin<PortRepoPos, PortRepoPosId>;
  hasPortRepoPos!: Sequelize.HasManyHasAssociationsMixin<PortRepoPos, PortRepoPosId>;
  countPortRepoPos!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PortSwapMov via invptyCode
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
  // InvptyDet hasMany PortSwapPos via invptyCode
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
  // InvptyDet hasMany PortThirdPartyLnk via invptyCode
  portThirdPartyLnks!: PortThirdPartyLnk[];
  getPortThirdPartyLnks!: Sequelize.HasManyGetAssociationsMixin<PortThirdPartyLnk>;
  setPortThirdPartyLnks!: Sequelize.HasManySetAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addPortThirdPartyLnk!: Sequelize.HasManyAddAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  addPortThirdPartyLnks!: Sequelize.HasManyAddAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  createPortThirdPartyLnk!: Sequelize.HasManyCreateAssociationMixin<PortThirdPartyLnk>;
  removePortThirdPartyLnk!: Sequelize.HasManyRemoveAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  removePortThirdPartyLnks!: Sequelize.HasManyRemoveAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasPortThirdPartyLnk!: Sequelize.HasManyHasAssociationMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  hasPortThirdPartyLnks!: Sequelize.HasManyHasAssociationsMixin<PortThirdPartyLnk, PortThirdPartyLnkId>;
  countPortThirdPartyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // InvptyDet hasMany PortVostroPos via invptyCode
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
  // InvptyDet belongsTo SysCountry via countryOfResidence
  countryOfResidenceSysCountry!: SysCountry;
  getCountryOfResidenceSysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setCountryOfResidenceSysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createCountryOfResidenceSysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;
  // InvptyDet belongsTo SysCountry via incorporationCountry
  incorporationCountrySysCountry!: SysCountry;
  getIncorporationCountrySysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setIncorporationCountrySysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createIncorporationCountrySysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;
  // InvptyDet belongsTo SysCountry via originationCountry
  originationCountrySysCountry!: SysCountry;
  getOriginationCountrySysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setOriginationCountrySysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createOriginationCountrySysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;

  static initModel (sequelize: Sequelize.Sequelize): typeof InvptyDet {
    return InvptyDet.init({
      invptyCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'invpty_code'
      },
      shortName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'short_name'
      },
      invptyStatus: {
        type: DataTypes.STRING(3),
        allowNull: false,
        defaultValue: 'LIV',
        references: {
          model: 'doms_invpty_status',
          key: 'domain'
        },
        field: 'invpty_status'
      },
      internalInvpty: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'internal_invpty'
      },
      relationshipStartDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'relationship_start_date'
      },
      lobCode: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: 'company_lob',
          key: 'lob_code'
        },
        field: 'lob_code'
      },
      originationCountry: {
        type: DataTypes.STRING(2),
        allowNull: false,
        references: {
          model: 'sys_country',
          key: 'country_code_iso2'
        },
        field: 'origination_country'
      },
      longName: {
        type: DataTypes.STRING(200),
        allowNull: true,
        field: 'long_name'
      },
      street1: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'street_1'
      },
      street2: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'street_2'
      },
      zipCode: {
        type: DataTypes.STRING(10),
        allowNull: true,
        field: 'zip_code'
      },
      city: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      state: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      countryOfResidence: {
        type: DataTypes.STRING(2),
        allowNull: false,
        references: {
          model: 'sys_country',
          key: 'country_code_iso2'
        },
        field: 'country_of_residence'
      },
      incorporationCountry: {
        type: DataTypes.STRING(2),
        allowNull: false,
        references: {
          model: 'sys_country',
          key: 'country_code_iso2'
        },
        field: 'incorporation_country'
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'birth_date'
      },
      industrySectorType: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: 'CNAE',
        references: {
          model: 'doms_industry_sector_type',
          key: 'domain'
        },
        field: 'industry_sector_type'
      },
      industrySectorCode: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'industry_sector_code'
      },
      websiteUrl: {
        type: DataTypes.STRING(80),
        allowNull: true,
        field: 'website_url'
      },
      emailAddress: {
        type: DataTypes.STRING(80),
        allowNull: true,
        field: 'email_address'
      },
      defaultFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'default_flag'
      },
      infoOnDefault: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'info_on_default'
      },
      defaultDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'default_date'
      },
      legalProceedings: {
        type: DataTypes.STRING(30),
        allowNull: true,
        field: 'legal_proceedings'
      },
      legalProceedingsDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'legal_proceedings_date'
      },
      initialOnboardDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'initial_onboard_date'
      },
      validInvptyInitialDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'valid_invpty_initial_date'
      },
      invptyUpdateDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'invpty_update_date'
      },
      validInvptyFinalDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'valid_invpty_final_date'
      }
    }, {
      sequelize,
      tableName: 'invpty_det',
      schema: 'bzdf',
      timestamps: false,
      indexes: [
        {
          name: 'PK-INVPTY_DET',
          unique: true,
          fields: [
            { name: 'invpty_code' }
          ]
        }
      ]
    })
  }
}
