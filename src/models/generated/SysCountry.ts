import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { CrmGuarPos, CrmGuarPosId } from './CrmGuarPos'
import type { CrmNetagrDet, CrmNetagrDetId } from './CrmNetagrDet'
import type { InvptyDet, InvptyDetId } from './InvptyDet'
import type { PortDsecMov, PortDsecMovId } from './PortDsecMov'
import type { PortDsecPos, PortDsecPosId } from './PortDsecPos'
import type { PortFctyMov, PortFctyMovId } from './PortFctyMov'
import type { PortFctyPos, PortFctyPosId } from './PortFctyPos'
import type { PortGuarMov, PortGuarMovId } from './PortGuarMov'
import type { PortGuarPos, PortGuarPosId } from './PortGuarPos'
import type { PortLoanMov, PortLoanMovId } from './PortLoanMov'
import type { PortLoanPos, PortLoanPosId } from './PortLoanPos'
import type { PortRecvMov, PortRecvMovId } from './PortRecvMov'
import type { PortRecvPos, PortRecvPosId } from './PortRecvPos'
import type { SysCalendar, SysCalendarId } from './SysCalendar'
import type { SysCountryCcyLnk, SysCountryCcyLnkId } from './SysCountryCcyLnk'
import type { SysCurrency, SysCurrencyId } from './SysCurrency'
import type { TaxForeignPerson, TaxForeignPersonId } from './TaxForeignPerson'

export interface SysCountryAttributes {
  countryCodeIso2: string;
  countryShortName: string;
  countryLongName?: string;
  countryCodeIso3?: string;
  countryNumCode?: number;
}

export type SysCountryPk = 'countryCodeIso2';
export type SysCountryId = SysCountry[SysCountryPk];
export type SysCountryOptionalAttributes = 'countryLongName' | 'countryCodeIso3' | 'countryNumCode';
export type SysCountryCreationAttributes = Optional<SysCountryAttributes, SysCountryOptionalAttributes>;

export class SysCountry extends Model<SysCountryAttributes, SysCountryCreationAttributes> implements SysCountryAttributes {
  countryCodeIso2!: string;
  countryShortName!: string;
  countryLongName?: string;
  countryCodeIso3?: string;
  countryNumCode?: number;

  // SysCountry hasMany CrmGuarPos via originationCountry
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
  // SysCountry hasMany CrmNetagrDet via conventionCountryCode
  crmNetagrDets!: CrmNetagrDet[];
  getCrmNetagrDets!: Sequelize.HasManyGetAssociationsMixin<CrmNetagrDet>;
  setCrmNetagrDets!: Sequelize.HasManySetAssociationsMixin<CrmNetagrDet, CrmNetagrDetId>;
  addCrmNetagrDet!: Sequelize.HasManyAddAssociationMixin<CrmNetagrDet, CrmNetagrDetId>;
  addCrmNetagrDets!: Sequelize.HasManyAddAssociationsMixin<CrmNetagrDet, CrmNetagrDetId>;
  createCrmNetagrDet!: Sequelize.HasManyCreateAssociationMixin<CrmNetagrDet>;
  removeCrmNetagrDet!: Sequelize.HasManyRemoveAssociationMixin<CrmNetagrDet, CrmNetagrDetId>;
  removeCrmNetagrDets!: Sequelize.HasManyRemoveAssociationsMixin<CrmNetagrDet, CrmNetagrDetId>;
  hasCrmNetagrDet!: Sequelize.HasManyHasAssociationMixin<CrmNetagrDet, CrmNetagrDetId>;
  hasCrmNetagrDets!: Sequelize.HasManyHasAssociationsMixin<CrmNetagrDet, CrmNetagrDetId>;
  countCrmNetagrDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysCountry hasMany InvptyDet via countryOfResidence
  invptyDets!: InvptyDet[];
  getInvptyDets!: Sequelize.HasManyGetAssociationsMixin<InvptyDet>;
  setInvptyDets!: Sequelize.HasManySetAssociationsMixin<InvptyDet, InvptyDetId>;
  addInvptyDet!: Sequelize.HasManyAddAssociationMixin<InvptyDet, InvptyDetId>;
  addInvptyDets!: Sequelize.HasManyAddAssociationsMixin<InvptyDet, InvptyDetId>;
  createInvptyDet!: Sequelize.HasManyCreateAssociationMixin<InvptyDet>;
  removeInvptyDet!: Sequelize.HasManyRemoveAssociationMixin<InvptyDet, InvptyDetId>;
  removeInvptyDets!: Sequelize.HasManyRemoveAssociationsMixin<InvptyDet, InvptyDetId>;
  hasInvptyDet!: Sequelize.HasManyHasAssociationMixin<InvptyDet, InvptyDetId>;
  hasInvptyDets!: Sequelize.HasManyHasAssociationsMixin<InvptyDet, InvptyDetId>;
  countInvptyDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysCountry hasMany InvptyDet via incorporationCountry
  incorporationCountryInvptyDets!: InvptyDet[];
  getIncorporationCountryInvptyDets!: Sequelize.HasManyGetAssociationsMixin<InvptyDet>;
  setIncorporationCountryInvptyDets!: Sequelize.HasManySetAssociationsMixin<InvptyDet, InvptyDetId>;
  addIncorporationCountryInvptyDet!: Sequelize.HasManyAddAssociationMixin<InvptyDet, InvptyDetId>;
  addIncorporationCountryInvptyDets!: Sequelize.HasManyAddAssociationsMixin<InvptyDet, InvptyDetId>;
  createIncorporationCountryInvptyDet!: Sequelize.HasManyCreateAssociationMixin<InvptyDet>;
  removeIncorporationCountryInvptyDet!: Sequelize.HasManyRemoveAssociationMixin<InvptyDet, InvptyDetId>;
  removeIncorporationCountryInvptyDets!: Sequelize.HasManyRemoveAssociationsMixin<InvptyDet, InvptyDetId>;
  hasIncorporationCountryInvptyDet!: Sequelize.HasManyHasAssociationMixin<InvptyDet, InvptyDetId>;
  hasIncorporationCountryInvptyDets!: Sequelize.HasManyHasAssociationsMixin<InvptyDet, InvptyDetId>;
  countIncorporationCountryInvptyDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysCountry hasMany InvptyDet via originationCountry
  originationCountryInvptyDets!: InvptyDet[];
  getOriginationCountryInvptyDets!: Sequelize.HasManyGetAssociationsMixin<InvptyDet>;
  setOriginationCountryInvptyDets!: Sequelize.HasManySetAssociationsMixin<InvptyDet, InvptyDetId>;
  addOriginationCountryInvptyDet!: Sequelize.HasManyAddAssociationMixin<InvptyDet, InvptyDetId>;
  addOriginationCountryInvptyDets!: Sequelize.HasManyAddAssociationsMixin<InvptyDet, InvptyDetId>;
  createOriginationCountryInvptyDet!: Sequelize.HasManyCreateAssociationMixin<InvptyDet>;
  removeOriginationCountryInvptyDet!: Sequelize.HasManyRemoveAssociationMixin<InvptyDet, InvptyDetId>;
  removeOriginationCountryInvptyDets!: Sequelize.HasManyRemoveAssociationsMixin<InvptyDet, InvptyDetId>;
  hasOriginationCountryInvptyDet!: Sequelize.HasManyHasAssociationMixin<InvptyDet, InvptyDetId>;
  hasOriginationCountryInvptyDets!: Sequelize.HasManyHasAssociationsMixin<InvptyDet, InvptyDetId>;
  countOriginationCountryInvptyDets!: Sequelize.HasManyCountAssociationsMixin;
  // SysCountry hasMany PortDsecMov via centralBank
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
  // SysCountry hasMany PortDsecMov via originationCountry
  originationCountryPortDsecMovs!: PortDsecMov[];
  getOriginationCountryPortDsecMovs!: Sequelize.HasManyGetAssociationsMixin<PortDsecMov>;
  setOriginationCountryPortDsecMovs!: Sequelize.HasManySetAssociationsMixin<PortDsecMov, PortDsecMovId>;
  addOriginationCountryPortDsecMov!: Sequelize.HasManyAddAssociationMixin<PortDsecMov, PortDsecMovId>;
  addOriginationCountryPortDsecMovs!: Sequelize.HasManyAddAssociationsMixin<PortDsecMov, PortDsecMovId>;
  createOriginationCountryPortDsecMov!: Sequelize.HasManyCreateAssociationMixin<PortDsecMov>;
  removeOriginationCountryPortDsecMov!: Sequelize.HasManyRemoveAssociationMixin<PortDsecMov, PortDsecMovId>;
  removeOriginationCountryPortDsecMovs!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecMov, PortDsecMovId>;
  hasOriginationCountryPortDsecMov!: Sequelize.HasManyHasAssociationMixin<PortDsecMov, PortDsecMovId>;
  hasOriginationCountryPortDsecMovs!: Sequelize.HasManyHasAssociationsMixin<PortDsecMov, PortDsecMovId>;
  countOriginationCountryPortDsecMovs!: Sequelize.HasManyCountAssociationsMixin;
  // SysCountry hasMany PortDsecPos via centralBank
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
  // SysCountry hasMany PortDsecPos via originationCountry
  originationCountryPortDsecPos!: PortDsecPos[];
  getOriginationCountryPortDsecPos!: Sequelize.HasManyGetAssociationsMixin<PortDsecPos>;
  setOriginationCountryPortDsecPos!: Sequelize.HasManySetAssociationsMixin<PortDsecPos, PortDsecPosId>;
  addOriginationCountryPortDsecPo!: Sequelize.HasManyAddAssociationMixin<PortDsecPos, PortDsecPosId>;
  addOriginationCountryPortDsecPos!: Sequelize.HasManyAddAssociationsMixin<PortDsecPos, PortDsecPosId>;
  createOriginationCountryPortDsecPo!: Sequelize.HasManyCreateAssociationMixin<PortDsecPos>;
  removeOriginationCountryPortDsecPo!: Sequelize.HasManyRemoveAssociationMixin<PortDsecPos, PortDsecPosId>;
  removeOriginationCountryPortDsecPos!: Sequelize.HasManyRemoveAssociationsMixin<PortDsecPos, PortDsecPosId>;
  hasOriginationCountryPortDsecPo!: Sequelize.HasManyHasAssociationMixin<PortDsecPos, PortDsecPosId>;
  hasOriginationCountryPortDsecPos!: Sequelize.HasManyHasAssociationsMixin<PortDsecPos, PortDsecPosId>;
  countOriginationCountryPortDsecPos!: Sequelize.HasManyCountAssociationsMixin;
  // SysCountry hasMany PortFctyMov via originationCountry
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
  // SysCountry hasMany PortFctyPos via originationCountry
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
  // SysCountry hasMany PortGuarMov via originationCountry
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
  // SysCountry hasMany PortGuarPos via originationCountry
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
  // SysCountry hasMany PortLoanMov via originationCountry
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
  // SysCountry hasMany PortLoanPos via originationCountry
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
  // SysCountry hasMany PortRecvMov via originationCountry
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
  // SysCountry hasMany PortRecvPos via originationCountry
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
  // SysCountry hasMany SysCalendar via countryCodeIso2
  sysCalendars!: SysCalendar[];
  getSysCalendars!: Sequelize.HasManyGetAssociationsMixin<SysCalendar>;
  setSysCalendars!: Sequelize.HasManySetAssociationsMixin<SysCalendar, SysCalendarId>;
  addSysCalendar!: Sequelize.HasManyAddAssociationMixin<SysCalendar, SysCalendarId>;
  addSysCalendars!: Sequelize.HasManyAddAssociationsMixin<SysCalendar, SysCalendarId>;
  createSysCalendar!: Sequelize.HasManyCreateAssociationMixin<SysCalendar>;
  removeSysCalendar!: Sequelize.HasManyRemoveAssociationMixin<SysCalendar, SysCalendarId>;
  removeSysCalendars!: Sequelize.HasManyRemoveAssociationsMixin<SysCalendar, SysCalendarId>;
  hasSysCalendar!: Sequelize.HasManyHasAssociationMixin<SysCalendar, SysCalendarId>;
  hasSysCalendars!: Sequelize.HasManyHasAssociationsMixin<SysCalendar, SysCalendarId>;
  countSysCalendars!: Sequelize.HasManyCountAssociationsMixin;
  // SysCountry hasMany SysCountryCcyLnk via countryCodeIso2
  sysCountryCcyLnks!: SysCountryCcyLnk[];
  getSysCountryCcyLnks!: Sequelize.HasManyGetAssociationsMixin<SysCountryCcyLnk>;
  setSysCountryCcyLnks!: Sequelize.HasManySetAssociationsMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  addSysCountryCcyLnk!: Sequelize.HasManyAddAssociationMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  addSysCountryCcyLnks!: Sequelize.HasManyAddAssociationsMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  createSysCountryCcyLnk!: Sequelize.HasManyCreateAssociationMixin<SysCountryCcyLnk>;
  removeSysCountryCcyLnk!: Sequelize.HasManyRemoveAssociationMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  removeSysCountryCcyLnks!: Sequelize.HasManyRemoveAssociationsMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  hasSysCountryCcyLnk!: Sequelize.HasManyHasAssociationMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  hasSysCountryCcyLnks!: Sequelize.HasManyHasAssociationsMixin<SysCountryCcyLnk, SysCountryCcyLnkId>;
  countSysCountryCcyLnks!: Sequelize.HasManyCountAssociationsMixin;
  // SysCountry belongsToMany SysCurrency via countryCodeIso2 and currencyCode
  currencyCodeSysCurrencies!: SysCurrency[];
  getCurrencyCodeSysCurrencies!: Sequelize.BelongsToManyGetAssociationsMixin<SysCurrency>;
  setCurrencyCodeSysCurrencies!: Sequelize.BelongsToManySetAssociationsMixin<SysCurrency, SysCurrencyId>;
  addCurrencyCodeSysCurrency!: Sequelize.BelongsToManyAddAssociationMixin<SysCurrency, SysCurrencyId>;
  addCurrencyCodeSysCurrencies!: Sequelize.BelongsToManyAddAssociationsMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToManyCreateAssociationMixin<SysCurrency>;
  removeCurrencyCodeSysCurrency!: Sequelize.BelongsToManyRemoveAssociationMixin<SysCurrency, SysCurrencyId>;
  removeCurrencyCodeSysCurrencies!: Sequelize.BelongsToManyRemoveAssociationsMixin<SysCurrency, SysCurrencyId>;
  hasCurrencyCodeSysCurrency!: Sequelize.BelongsToManyHasAssociationMixin<SysCurrency, SysCurrencyId>;
  hasCurrencyCodeSysCurrencies!: Sequelize.BelongsToManyHasAssociationsMixin<SysCurrency, SysCurrencyId>;
  countCurrencyCodeSysCurrencies!: Sequelize.BelongsToManyCountAssociationsMixin;
  // SysCountry hasMany TaxForeignPerson via countrycountryIsoCode23
  taxForeignPeople!: TaxForeignPerson[];
  getTaxForeignPeople!: Sequelize.HasManyGetAssociationsMixin<TaxForeignPerson>;
  setTaxForeignPeople!: Sequelize.HasManySetAssociationsMixin<TaxForeignPerson, TaxForeignPersonId>;
  addTaxForeignPerson!: Sequelize.HasManyAddAssociationMixin<TaxForeignPerson, TaxForeignPersonId>;
  addTaxForeignPeople!: Sequelize.HasManyAddAssociationsMixin<TaxForeignPerson, TaxForeignPersonId>;
  createTaxForeignPerson!: Sequelize.HasManyCreateAssociationMixin<TaxForeignPerson>;
  removeTaxForeignPerson!: Sequelize.HasManyRemoveAssociationMixin<TaxForeignPerson, TaxForeignPersonId>;
  removeTaxForeignPeople!: Sequelize.HasManyRemoveAssociationsMixin<TaxForeignPerson, TaxForeignPersonId>;
  hasTaxForeignPerson!: Sequelize.HasManyHasAssociationMixin<TaxForeignPerson, TaxForeignPersonId>;
  hasTaxForeignPeople!: Sequelize.HasManyHasAssociationsMixin<TaxForeignPerson, TaxForeignPersonId>;
  countTaxForeignPeople!: Sequelize.HasManyCountAssociationsMixin;
  // SysCountry hasMany TaxForeignPerson via countrycountryIsoCode24
  countrycountryIsoCode24TaxForeignPeople!: TaxForeignPerson[];
  getCountrycountryIsoCode24TaxForeignPeople!: Sequelize.HasManyGetAssociationsMixin<TaxForeignPerson>;
  setCountrycountryIsoCode24TaxForeignPeople!: Sequelize.HasManySetAssociationsMixin<TaxForeignPerson, TaxForeignPersonId>;
  addCountrycountryIsoCode24TaxForeignPerson!: Sequelize.HasManyAddAssociationMixin<TaxForeignPerson, TaxForeignPersonId>;
  addCountrycountryIsoCode24TaxForeignPeople!: Sequelize.HasManyAddAssociationsMixin<TaxForeignPerson, TaxForeignPersonId>;
  createCountrycountryIsoCode24TaxForeignPerson!: Sequelize.HasManyCreateAssociationMixin<TaxForeignPerson>;
  removeCountrycountryIsoCode24TaxForeignPerson!: Sequelize.HasManyRemoveAssociationMixin<TaxForeignPerson, TaxForeignPersonId>;
  removeCountrycountryIsoCode24TaxForeignPeople!: Sequelize.HasManyRemoveAssociationsMixin<TaxForeignPerson, TaxForeignPersonId>;
  hasCountrycountryIsoCode24TaxForeignPerson!: Sequelize.HasManyHasAssociationMixin<TaxForeignPerson, TaxForeignPersonId>;
  hasCountrycountryIsoCode24TaxForeignPeople!: Sequelize.HasManyHasAssociationsMixin<TaxForeignPerson, TaxForeignPersonId>;
  countCountrycountryIsoCode24TaxForeignPeople!: Sequelize.HasManyCountAssociationsMixin;

  static initModel (sequelize: Sequelize.Sequelize): typeof SysCountry {
    return SysCountry.init({
      countryCodeIso2: {
        type: DataTypes.STRING(2),
        allowNull: false,
        primaryKey: true,
        field: 'country_code_iso2'
      },
      countryShortName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'country_short_name'
      },
      countryLongName: {
        type: DataTypes.STRING(80),
        allowNull: true,
        field: 'country_long_name'
      },
      countryCodeIso3: {
        type: DataTypes.STRING(3),
        allowNull: true,
        field: 'country_code_iso3'
      },
      countryNumCode: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'country_num_code'
      }
    }, {
      sequelize,
      tableName: 'sys_country',
      schema: 'bzdf',
      timestamps: false,
      indexes: [
        {
          name: 'PK-SYS_COUNTRY',
          unique: true,
          fields: [
            { name: 'country_code_iso2' }
          ]
        },
        {
          name: 'sys_country_country_code_iso2',
          fields: [
            { name: 'country_code_iso2' }
          ]
        }
      ]
    })
  }
}
