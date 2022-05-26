import type { Sequelize } from 'sequelize'
import { DomsSystemType as _DomsSystemType } from './DomsSystemType'
import type { DomsSystemTypeAttributes, DomsSystemTypeCreationAttributes } from './DomsSystemType'
import { SysExternalSystem as _SysExternalSystem } from './SysExternalSystem'
import type { SysExternalSystemAttributes, SysExternalSystemCreationAttributes } from './SysExternalSystem'
import { AlcmCapitalAccountParam as _AlcmCapitalAccountParam } from './AlcmCapitalAccountParam'
import type { AlcmCapitalAccountParamAttributes, AlcmCapitalAccountParamCreationAttributes } from './AlcmCapitalAccountParam'
import { AlcmCapitalProductParam as _AlcmCapitalProductParam } from './AlcmCapitalProductParam'
import type { AlcmCapitalProductParamAttributes, AlcmCapitalProductParamCreationAttributes } from './AlcmCapitalProductParam'
import { AlcmCapitalRegulatoryType as _AlcmCapitalRegulatoryType } from './AlcmCapitalRegulatoryType'
import type { AlcmCapitalRegulatoryTypeAttributes, AlcmCapitalRegulatoryTypeCreationAttributes } from './AlcmCapitalRegulatoryType'
import { AlcmCpadEadBase as _AlcmCpadEadBase } from './AlcmCpadEadBase'
import type { AlcmCpadEadBaseAttributes, AlcmCpadEadBaseCreationAttributes } from './AlcmCpadEadBase'
import { AlcmDloAcctGroup as _AlcmDloAcctGroup } from './AlcmDloAcctGroup'
import type { AlcmDloAcctGroupAttributes, AlcmDloAcctGroupCreationAttributes } from './AlcmDloAcctGroup'
import { AlcmDloLelExceptProducts as _AlcmDloLelExceptProducts } from './AlcmDloLelExceptProducts'
import type { AlcmDloLelExceptProductsAttributes, AlcmDloLelExceptProductsCreationAttributes } from './AlcmDloLelExceptProducts'
import { AlcmDloTb01 as _AlcmDloTb01 } from './AlcmDloTb01'
import type { AlcmDloTb01Attributes, AlcmDloTb01CreationAttributes } from './AlcmDloTb01'
import { AlcmDloTb02 as _AlcmDloTb02 } from './AlcmDloTb02'
import type { AlcmDloTb02Attributes, AlcmDloTb02CreationAttributes } from './AlcmDloTb02'
import { AlcmDloTb03Cpad as _AlcmDloTb03Cpad } from './AlcmDloTb03Cpad'
import type { AlcmDloTb03CpadAttributes, AlcmDloTb03CpadCreationAttributes } from './AlcmDloTb03Cpad'
import { AlcmDloTb03Limimob as _AlcmDloTb03Limimob } from './AlcmDloTb03Limimob'
import type { AlcmDloTb03LimimobAttributes, AlcmDloTb03LimimobCreationAttributes } from './AlcmDloTb03Limimob'
import { AlcmDloTb03Opad as _AlcmDloTb03Opad } from './AlcmDloTb03Opad'
import type { AlcmDloTb03OpadAttributes, AlcmDloTb03OpadCreationAttributes } from './AlcmDloTb03Opad'
import { AlcmDloTb03Pr as _AlcmDloTb03Pr } from './AlcmDloTb03Pr'
import type { AlcmDloTb03PrAttributes, AlcmDloTb03PrCreationAttributes } from './AlcmDloTb03Pr'
import { AlcmDloTb03Ra as _AlcmDloTb03Ra } from './AlcmDloTb03Ra'
import type { AlcmDloTb03RaAttributes, AlcmDloTb03RaCreationAttributes } from './AlcmDloTb03Ra'
import { AlcmDloTb04 as _AlcmDloTb04 } from './AlcmDloTb04'
import type { AlcmDloTb04Attributes, AlcmDloTb04CreationAttributes } from './AlcmDloTb04'
import { AlcmDloTb05 as _AlcmDloTb05 } from './AlcmDloTb05'
import type { AlcmDloTb05Attributes, AlcmDloTb05CreationAttributes } from './AlcmDloTb05'
import { AlcmDloTb06 as _AlcmDloTb06 } from './AlcmDloTb06'
import type { AlcmDloTb06Attributes, AlcmDloTb06CreationAttributes } from './AlcmDloTb06'
import { AlcmDloTb07 as _AlcmDloTb07 } from './AlcmDloTb07'
import type { AlcmDloTb07Attributes, AlcmDloTb07CreationAttributes } from './AlcmDloTb07'
import { AlcmDloTb09 as _AlcmDloTb09 } from './AlcmDloTb09'
import type { AlcmDloTb09Attributes, AlcmDloTb09CreationAttributes } from './AlcmDloTb09'
import { AlcmDloTb10 as _AlcmDloTb10 } from './AlcmDloTb10'
import type { AlcmDloTb10Attributes, AlcmDloTb10CreationAttributes } from './AlcmDloTb10'
import { AlcmDloTb11 as _AlcmDloTb11 } from './AlcmDloTb11'
import type { AlcmDloTb11Attributes, AlcmDloTb11CreationAttributes } from './AlcmDloTb11'
import { AlcmDloTb11A as _AlcmDloTb11A } from './AlcmDloTb11A'
import type { AlcmDloTb11AAttributes, AlcmDloTb11ACreationAttributes } from './AlcmDloTb11A'
import { AlcmDloTb12 as _AlcmDloTb12 } from './AlcmDloTb12'
import type { AlcmDloTb12Attributes, AlcmDloTb12CreationAttributes } from './AlcmDloTb12'
import { AlcmDloTb13 as _AlcmDloTb13 } from './AlcmDloTb13'
import type { AlcmDloTb13Attributes, AlcmDloTb13CreationAttributes } from './AlcmDloTb13'
import { AlcmDloTb14 as _AlcmDloTb14 } from './AlcmDloTb14'
import type { AlcmDloTb14Attributes, AlcmDloTb14CreationAttributes } from './AlcmDloTb14'
import { AlcmDloTb19 as _AlcmDloTb19 } from './AlcmDloTb19'
import type { AlcmDloTb19Attributes, AlcmDloTb19CreationAttributes } from './AlcmDloTb19'
import { AlcmDloTb23 as _AlcmDloTb23 } from './AlcmDloTb23'
import type { AlcmDloTb23Attributes, AlcmDloTb23CreationAttributes } from './AlcmDloTb23'
import { AlcmDloTb24 as _AlcmDloTb24 } from './AlcmDloTb24'
import type { AlcmDloTb24Attributes, AlcmDloTb24CreationAttributes } from './AlcmDloTb24'
import { AlcmDloTb25 as _AlcmDloTb25 } from './AlcmDloTb25'
import type { AlcmDloTb25Attributes, AlcmDloTb25CreationAttributes } from './AlcmDloTb25'
import { AlcmDloTb26 as _AlcmDloTb26 } from './AlcmDloTb26'
import type { AlcmDloTb26Attributes, AlcmDloTb26CreationAttributes } from './AlcmDloTb26'
import { AlcmDloTb28 as _AlcmDloTb28 } from './AlcmDloTb28'
import type { AlcmDloTb28Attributes, AlcmDloTb28CreationAttributes } from './AlcmDloTb28'
import { AlcmDloTb28D as _AlcmDloTb28D } from './AlcmDloTb28D'
import type { AlcmDloTb28DAttributes, AlcmDloTb28DCreationAttributes } from './AlcmDloTb28D'
import { AlcmDloTb29 as _AlcmDloTb29 } from './AlcmDloTb29'
import type { AlcmDloTb29Attributes, AlcmDloTb29CreationAttributes } from './AlcmDloTb29'
import { AlcmDloTb30 as _AlcmDloTb30 } from './AlcmDloTb30'
import type { AlcmDloTb30Attributes, AlcmDloTb30CreationAttributes } from './AlcmDloTb30'
import { AlcmDloTb31 as _AlcmDloTb31 } from './AlcmDloTb31'
import type { AlcmDloTb31Attributes, AlcmDloTb31CreationAttributes } from './AlcmDloTb31'
import { AlcmDloTb31A as _AlcmDloTb31A } from './AlcmDloTb31A'
import type { AlcmDloTb31AAttributes, AlcmDloTb31ACreationAttributes } from './AlcmDloTb31A'
import { AlcmDloTb32 as _AlcmDloTb32 } from './AlcmDloTb32'
import type { AlcmDloTb32Attributes, AlcmDloTb32CreationAttributes } from './AlcmDloTb32'
import { AlcmDloTb33 as _AlcmDloTb33 } from './AlcmDloTb33'
import type { AlcmDloTb33Attributes, AlcmDloTb33CreationAttributes } from './AlcmDloTb33'
import { AlcmDloTb34 as _AlcmDloTb34 } from './AlcmDloTb34'
import type { AlcmDloTb34Attributes, AlcmDloTb34CreationAttributes } from './AlcmDloTb34'
import { AlcmDloTb35 as _AlcmDloTb35 } from './AlcmDloTb35'
import type { AlcmDloTb35Attributes, AlcmDloTb35CreationAttributes } from './AlcmDloTb35'
import { AlcmDloTb36 as _AlcmDloTb36 } from './AlcmDloTb36'
import type { AlcmDloTb36Attributes, AlcmDloTb36CreationAttributes } from './AlcmDloTb36'
import { AlcmDloTb37 as _AlcmDloTb37 } from './AlcmDloTb37'
import type { AlcmDloTb37Attributes, AlcmDloTb37CreationAttributes } from './AlcmDloTb37'
import { AlcmDloTb38 as _AlcmDloTb38 } from './AlcmDloTb38'
import type { AlcmDloTb38Attributes, AlcmDloTb38CreationAttributes } from './AlcmDloTb38'
import { AlcmDloTb39 as _AlcmDloTb39 } from './AlcmDloTb39'
import type { AlcmDloTb39Attributes, AlcmDloTb39CreationAttributes } from './AlcmDloTb39'
import { AlcmDloTb42 as _AlcmDloTb42 } from './AlcmDloTb42'
import type { AlcmDloTb42Attributes, AlcmDloTb42CreationAttributes } from './AlcmDloTb42'
import { AlcmDloTb43 as _AlcmDloTb43 } from './AlcmDloTb43'
import type { AlcmDloTb43Attributes, AlcmDloTb43CreationAttributes } from './AlcmDloTb43'
import { AlcmDloTb44 as _AlcmDloTb44 } from './AlcmDloTb44'
import type { AlcmDloTb44Attributes, AlcmDloTb44CreationAttributes } from './AlcmDloTb44'
import { AlcmDloTb46 as _AlcmDloTb46 } from './AlcmDloTb46'
import type { AlcmDloTb46Attributes, AlcmDloTb46CreationAttributes } from './AlcmDloTb46'
import { AlcmDloTb47 as _AlcmDloTb47 } from './AlcmDloTb47'
import type { AlcmDloTb47Attributes, AlcmDloTb47CreationAttributes } from './AlcmDloTb47'
import { AlcmLiqDrlAccount as _AlcmLiqDrlAccount } from './AlcmLiqDrlAccount'
import type { AlcmLiqDrlAccountAttributes, AlcmLiqDrlAccountCreationAttributes } from './AlcmLiqDrlAccount'
import { AlcmLiqDrlAcctGrp as _AlcmLiqDrlAcctGrp } from './AlcmLiqDrlAcctGrp'
import type { AlcmLiqDrlAcctGrpAttributes, AlcmLiqDrlAcctGrpCreationAttributes } from './AlcmLiqDrlAcctGrp'
import { AlcmLiqDrlDoctBalanceLadder as _AlcmLiqDrlDoctBalanceLadder } from './AlcmLiqDrlDoctBalanceLadder'
import type { AlcmLiqDrlDoctBalanceLadderAttributes, AlcmLiqDrlDoctBalanceLadderCreationAttributes } from './AlcmLiqDrlDoctBalanceLadder'
import { AlcmLiqDrlDoctElement as _AlcmLiqDrlDoctElement } from './AlcmLiqDrlDoctElement'
import type { AlcmLiqDrlDoctElementAttributes, AlcmLiqDrlDoctElementCreationAttributes } from './AlcmLiqDrlDoctElement'
import { AlcmLiqDrlDoctMaturityLadder as _AlcmLiqDrlDoctMaturityLadder } from './AlcmLiqDrlDoctMaturityLadder'
import type { AlcmLiqDrlDoctMaturityLadderAttributes, AlcmLiqDrlDoctMaturityLadderCreationAttributes } from './AlcmLiqDrlDoctMaturityLadder'
import { AlcmLiqDrlDoctParam as _AlcmLiqDrlDoctParam } from './AlcmLiqDrlDoctParam'
import type { AlcmLiqDrlDoctParamAttributes, AlcmLiqDrlDoctParamCreationAttributes } from './AlcmLiqDrlDoctParam'
import { AlcmLiqDrlDoctParamValue as _AlcmLiqDrlDoctParamValue } from './AlcmLiqDrlDoctParamValue'
import type { AlcmLiqDrlDoctParamValueAttributes, AlcmLiqDrlDoctParamValueCreationAttributes } from './AlcmLiqDrlDoctParamValue'
import { AlcmLiqDrlDoctType as _AlcmLiqDrlDoctType } from './AlcmLiqDrlDoctType'
import type { AlcmLiqDrlDoctTypeAttributes, AlcmLiqDrlDoctTypeCreationAttributes } from './AlcmLiqDrlDoctType'
import { AlcmLiqNsfrAccount as _AlcmLiqNsfrAccount } from './AlcmLiqNsfrAccount'
import type { AlcmLiqNsfrAccountAttributes, AlcmLiqNsfrAccountCreationAttributes } from './AlcmLiqNsfrAccount'
import { AlcmLiqNsfrGroup as _AlcmLiqNsfrGroup } from './AlcmLiqNsfrGroup'
import type { AlcmLiqNsfrGroupAttributes, AlcmLiqNsfrGroupCreationAttributes } from './AlcmLiqNsfrGroup'
import { AlcmLiqNsfrProductParam as _AlcmLiqNsfrProductParam } from './AlcmLiqNsfrProductParam'
import type { AlcmLiqNsfrProductParamAttributes, AlcmLiqNsfrProductParamCreationAttributes } from './AlcmLiqNsfrProductParam'
import { AlcmLiqNsfrQuality as _AlcmLiqNsfrQuality } from './AlcmLiqNsfrQuality'
import type { AlcmLiqNsfrQualityAttributes, AlcmLiqNsfrQualityCreationAttributes } from './AlcmLiqNsfrQuality'
import { AlcmLiqNsfrTimeBucketStruct as _AlcmLiqNsfrTimeBucketStruct } from './AlcmLiqNsfrTimeBucketStruct'
import type { AlcmLiqNsfrTimeBucketStructAttributes, AlcmLiqNsfrTimeBucketStructCreationAttributes } from './AlcmLiqNsfrTimeBucketStruct'
import { AlcmLiqNsfrWeight as _AlcmLiqNsfrWeight } from './AlcmLiqNsfrWeight'
import type { AlcmLiqNsfrWeightAttributes, AlcmLiqNsfrWeightCreationAttributes } from './AlcmLiqNsfrWeight'
import { AlcmProductGroup as _AlcmProductGroup } from './AlcmProductGroup'
import type { AlcmProductGroupAttributes, AlcmProductGroupCreationAttributes } from './AlcmProductGroup'
import { BuyinBalanceLink as _BuyinBalanceLink } from './BuyinBalanceLink'
import type { BuyinBalanceLinkAttributes, BuyinBalanceLinkCreationAttributes } from './BuyinBalanceLink'
import { BuyinContractLink as _BuyinContractLink } from './BuyinContractLink'
import type { BuyinContractLinkAttributes, BuyinContractLinkCreationAttributes } from './BuyinContractLink'
import { BuyinSelloutGlLink as _BuyinSelloutGlLink } from './BuyinSelloutGlLink'
import type { BuyinSelloutGlLinkAttributes, BuyinSelloutGlLinkCreationAttributes } from './BuyinSelloutGlLink'
import { BuyinSelloutGlbsGroup as _BuyinSelloutGlbsGroup } from './BuyinSelloutGlbsGroup'
import type { BuyinSelloutGlbsGroupAttributes, BuyinSelloutGlbsGroupCreationAttributes } from './BuyinSelloutGlbsGroup'
import { Company as _Company } from './Company'
import type { CompanyAttributes, CompanyCreationAttributes } from './Company'
import { CompanyBook as _CompanyBook } from './CompanyBook'
import type { CompanyBookAttributes, CompanyBookCreationAttributes } from './CompanyBook'
import { CompanyBookType as _CompanyBookType } from './CompanyBookType'
import type { CompanyBookTypeAttributes, CompanyBookTypeCreationAttributes } from './CompanyBookType'
import { CompanyCostCentre as _CompanyCostCentre } from './CompanyCostCentre'
import type { CompanyCostCentreAttributes, CompanyCostCentreCreationAttributes } from './CompanyCostCentre'
import { CompanyCostCentreLnk as _CompanyCostCentreLnk } from './CompanyCostCentreLnk'
import type { CompanyCostCentreLnkAttributes, CompanyCostCentreLnkCreationAttributes } from './CompanyCostCentreLnk'
import { CompanyLink as _CompanyLink } from './CompanyLink'
import type { CompanyLinkAttributes, CompanyLinkCreationAttributes } from './CompanyLink'
import { CompanyLob as _CompanyLob } from './CompanyLob'
import type { CompanyLobAttributes, CompanyLobCreationAttributes } from './CompanyLob'
import { CompanyLobLnk as _CompanyLobLnk } from './CompanyLobLnk'
import type { CompanyLobLnkAttributes, CompanyLobLnkCreationAttributes } from './CompanyLobLnk'
import { CompanyLobType as _CompanyLobType } from './CompanyLobType'
import type { CompanyLobTypeAttributes, CompanyLobTypeCreationAttributes } from './CompanyLobType'
import { CrmAgreementLink as _CrmAgreementLink } from './CrmAgreementLink'
import type { CrmAgreementLinkAttributes, CrmAgreementLinkCreationAttributes } from './CrmAgreementLink'
import { CrmContractLink as _CrmContractLink } from './CrmContractLink'
import type { CrmContractLinkAttributes, CrmContractLinkCreationAttributes } from './CrmContractLink'
import { CrmGuarPos as _CrmGuarPos } from './CrmGuarPos'
import type { CrmGuarPosAttributes, CrmGuarPosCreationAttributes } from './CrmGuarPos'
import { CrmInstrumentList as _CrmInstrumentList } from './CrmInstrumentList'
import type { CrmInstrumentListAttributes, CrmInstrumentListCreationAttributes } from './CrmInstrumentList'
import { CrmInvptyLink as _CrmInvptyLink } from './CrmInvptyLink'
import type { CrmInvptyLinkAttributes, CrmInvptyLinkCreationAttributes } from './CrmInvptyLink'
import { CrmNetagrDet as _CrmNetagrDet } from './CrmNetagrDet'
import type { CrmNetagrDetAttributes, CrmNetagrDetCreationAttributes } from './CrmNetagrDet'
import { CrmNetagrLink as _CrmNetagrLink } from './CrmNetagrLink'
import type { CrmNetagrLinkAttributes, CrmNetagrLinkCreationAttributes } from './CrmNetagrLink'
import { CrmProductLink as _CrmProductLink } from './CrmProductLink'
import type { CrmProductLinkAttributes, CrmProductLinkCreationAttributes } from './CrmProductLink'
import { DomsAccrualBasis as _DomsAccrualBasis } from './DomsAccrualBasis'
import type { DomsAccrualBasisAttributes, DomsAccrualBasisCreationAttributes } from './DomsAccrualBasis'
import { DomsAmortizingType as _DomsAmortizingType } from './DomsAmortizingType'
import type { DomsAmortizingTypeAttributes, DomsAmortizingTypeCreationAttributes } from './DomsAmortizingType'
import { DomsBalanceType as _DomsBalanceType } from './DomsBalanceType'
import type { DomsBalanceTypeAttributes, DomsBalanceTypeCreationAttributes } from './DomsBalanceType'
import { DomsBankingFacilityType as _DomsBankingFacilityType } from './DomsBankingFacilityType'
import type { DomsBankingFacilityTypeAttributes, DomsBankingFacilityTypeCreationAttributes } from './DomsBankingFacilityType'
import { DomsBankingTrading as _DomsBankingTrading } from './DomsBankingTrading'
import type { DomsBankingTradingAttributes, DomsBankingTradingCreationAttributes } from './DomsBankingTrading'
import { DomsBankruptcyRemote as _DomsBankruptcyRemote } from './DomsBankruptcyRemote'
import type { DomsBankruptcyRemoteAttributes, DomsBankruptcyRemoteCreationAttributes } from './DomsBankruptcyRemote'
import { DomsBranchSubsidiary as _DomsBranchSubsidiary } from './DomsBranchSubsidiary'
import type { DomsBranchSubsidiaryAttributes, DomsBranchSubsidiaryCreationAttributes } from './DomsBranchSubsidiary'
import { DomsBrokenPeriodType as _DomsBrokenPeriodType } from './DomsBrokenPeriodType'
import type { DomsBrokenPeriodTypeAttributes, DomsBrokenPeriodTypeCreationAttributes } from './DomsBrokenPeriodType'
import { DomsCalcDayConvention as _DomsCalcDayConvention } from './DomsCalcDayConvention'
import type { DomsCalcDayConventionAttributes, DomsCalcDayConventionCreationAttributes } from './DomsCalcDayConvention'
import { DomsCalcDayRule as _DomsCalcDayRule } from './DomsCalcDayRule'
import type { DomsCalcDayRuleAttributes, DomsCalcDayRuleCreationAttributes } from './DomsCalcDayRule'
import { DomsCalcFrequency as _DomsCalcFrequency } from './DomsCalcFrequency'
import type { DomsCalcFrequencyAttributes, DomsCalcFrequencyCreationAttributes } from './DomsCalcFrequency'
import { DomsCapType as _DomsCapType } from './DomsCapType'
import type { DomsCapTypeAttributes, DomsCapTypeCreationAttributes } from './DomsCapType'
import { DomsCashFlowApproach as _DomsCashFlowApproach } from './DomsCashFlowApproach'
import type { DomsCashFlowApproachAttributes, DomsCashFlowApproachCreationAttributes } from './DomsCashFlowApproach'
import { DomsCashFlowQuality as _DomsCashFlowQuality } from './DomsCashFlowQuality'
import type { DomsCashFlowQualityAttributes, DomsCashFlowQualityCreationAttributes } from './DomsCashFlowQuality'
import { DomsCashFlowType as _DomsCashFlowType } from './DomsCashFlowType'
import type { DomsCashFlowTypeAttributes, DomsCashFlowTypeCreationAttributes } from './DomsCashFlowType'
import { DomsCcpExposureType as _DomsCcpExposureType } from './DomsCcpExposureType'
import type { DomsCcpExposureTypeAttributes, DomsCcpExposureTypeCreationAttributes } from './DomsCcpExposureType'
import { DomsCcyConvType as _DomsCcyConvType } from './DomsCcyConvType'
import type { DomsCcyConvTypeAttributes, DomsCcyConvTypeCreationAttributes } from './DomsCcyConvType'
import { DomsCinstCalcRule as _DomsCinstCalcRule } from './DomsCinstCalcRule'
import type { DomsCinstCalcRuleAttributes, DomsCinstCalcRuleCreationAttributes } from './DomsCinstCalcRule'
import { DomsCinstRuleAnnuityAfterMat as _DomsCinstRuleAnnuityAfterMat } from './DomsCinstRuleAnnuityAfterMat'
import type { DomsCinstRuleAnnuityAfterMatAttributes, DomsCinstRuleAnnuityAfterMatCreationAttributes } from './DomsCinstRuleAnnuityAfterMat'
import { DomsClientProprietary as _DomsClientProprietary } from './DomsClientProprietary'
import type { DomsClientProprietaryAttributes, DomsClientProprietaryCreationAttributes } from './DomsClientProprietary'
import { DomsCollContractType as _DomsCollContractType } from './DomsCollContractType'
import type { DomsCollContractTypeAttributes, DomsCollContractTypeCreationAttributes } from './DomsCollContractType'
import { DomsCollateralMode as _DomsCollateralMode } from './DomsCollateralMode'
import type { DomsCollateralModeAttributes, DomsCollateralModeCreationAttributes } from './DomsCollateralMode'
import { DomsCommitted as _DomsCommitted } from './DomsCommitted'
import type { DomsCommittedAttributes, DomsCommittedCreationAttributes } from './DomsCommitted'
import { DomsCompoundType as _DomsCompoundType } from './DomsCompoundType'
import type { DomsCompoundTypeAttributes, DomsCompoundTypeCreationAttributes } from './DomsCompoundType'
import { DomsConsolidationType as _DomsConsolidationType } from './DomsConsolidationType'
import type { DomsConsolidationTypeAttributes, DomsConsolidationTypeCreationAttributes } from './DomsConsolidationType'
import { DomsDefermentContext as _DomsDefermentContext } from './DomsDefermentContext'
import type { DomsDefermentContextAttributes, DomsDefermentContextCreationAttributes } from './DomsDefermentContext'
import { DomsDefermentMethod as _DomsDefermentMethod } from './DomsDefermentMethod'
import type { DomsDefermentMethodAttributes, DomsDefermentMethodCreationAttributes } from './DomsDefermentMethod'
import { DomsDeliveryType as _DomsDeliveryType } from './DomsDeliveryType'
import type { DomsDeliveryTypeAttributes, DomsDeliveryTypeCreationAttributes } from './DomsDeliveryType'
import { DomsDerivativeMultiplierType as _DomsDerivativeMultiplierType } from './DomsDerivativeMultiplierType'
import type { DomsDerivativeMultiplierTypeAttributes, DomsDerivativeMultiplierTypeCreationAttributes } from './DomsDerivativeMultiplierType'
import { DomsDiscountMethod as _DomsDiscountMethod } from './DomsDiscountMethod'
import type { DomsDiscountMethodAttributes, DomsDiscountMethodCreationAttributes } from './DomsDiscountMethod'
import { DomsDistributionChannel as _DomsDistributionChannel } from './DomsDistributionChannel'
import type { DomsDistributionChannelAttributes, DomsDistributionChannelCreationAttributes } from './DomsDistributionChannel'
import { DomsFacilityLiqType as _DomsFacilityLiqType } from './DomsFacilityLiqType'
import type { DomsFacilityLiqTypeAttributes, DomsFacilityLiqTypeCreationAttributes } from './DomsFacilityLiqType'
import { DomsFacilityPurpose as _DomsFacilityPurpose } from './DomsFacilityPurpose'
import type { DomsFacilityPurposeAttributes, DomsFacilityPurposeCreationAttributes } from './DomsFacilityPurpose'
import { DomsFacilityType as _DomsFacilityType } from './DomsFacilityType'
import type { DomsFacilityTypeAttributes, DomsFacilityTypeCreationAttributes } from './DomsFacilityType'
import { DomsFairValueOption as _DomsFairValueOption } from './DomsFairValueOption'
import type { DomsFairValueOptionAttributes, DomsFairValueOptionCreationAttributes } from './DomsFairValueOption'
import { DomsFixingRule as _DomsFixingRule } from './DomsFixingRule'
import type { DomsFixingRuleAttributes, DomsFixingRuleCreationAttributes } from './DomsFixingRule'
import { DomsForbearanceMeasures as _DomsForbearanceMeasures } from './DomsForbearanceMeasures'
import type { DomsForbearanceMeasuresAttributes, DomsForbearanceMeasuresCreationAttributes } from './DomsForbearanceMeasures'
import { DomsGivenReceived as _DomsGivenReceived } from './DomsGivenReceived'
import type { DomsGivenReceivedAttributes, DomsGivenReceivedCreationAttributes } from './DomsGivenReceived'
import { DomsGlClass as _DomsGlClass } from './DomsGlClass'
import type { DomsGlClassAttributes, DomsGlClassCreationAttributes } from './DomsGlClass'
import { DomsGlNature as _DomsGlNature } from './DomsGlNature'
import type { DomsGlNatureAttributes, DomsGlNatureCreationAttributes } from './DomsGlNature'
import { DomsHedgeAccountingType as _DomsHedgeAccountingType } from './DomsHedgeAccountingType'
import type { DomsHedgeAccountingTypeAttributes, DomsHedgeAccountingTypeCreationAttributes } from './DomsHedgeAccountingType'
import { DomsIncomeType as _DomsIncomeType } from './DomsIncomeType'
import type { DomsIncomeTypeAttributes, DomsIncomeTypeCreationAttributes } from './DomsIncomeType'
import { DomsIndustrySectorType as _DomsIndustrySectorType } from './DomsIndustrySectorType'
import type { DomsIndustrySectorTypeAttributes, DomsIndustrySectorTypeCreationAttributes } from './DomsIndustrySectorType'
import { DomsInvptyStatus as _DomsInvptyStatus } from './DomsInvptyStatus'
import type { DomsInvptyStatusAttributes, DomsInvptyStatusCreationAttributes } from './DomsInvptyStatus'
import { DomsLongShort as _DomsLongShort } from './DomsLongShort'
import type { DomsLongShortAttributes, DomsLongShortCreationAttributes } from './DomsLongShort'
import { DomsMarginExcessType as _DomsMarginExcessType } from './DomsMarginExcessType'
import type { DomsMarginExcessTypeAttributes, DomsMarginExcessTypeCreationAttributes } from './DomsMarginExcessType'
import { DomsMarginType as _DomsMarginType } from './DomsMarginType'
import type { DomsMarginTypeAttributes, DomsMarginTypeCreationAttributes } from './DomsMarginType'
import { DomsNettingClass as _DomsNettingClass } from './DomsNettingClass'
import type { DomsNettingClassAttributes, DomsNettingClassCreationAttributes } from './DomsNettingClass'
import { DomsOverlappingPriority as _DomsOverlappingPriority } from './DomsOverlappingPriority'
import type { DomsOverlappingPriorityAttributes, DomsOverlappingPriorityCreationAttributes } from './DomsOverlappingPriority'
import { DomsParticipationFlag as _DomsParticipationFlag } from './DomsParticipationFlag'
import type { DomsParticipationFlagAttributes, DomsParticipationFlagCreationAttributes } from './DomsParticipationFlag'
import { DomsParticipationLink as _DomsParticipationLink } from './DomsParticipationLink'
import type { DomsParticipationLinkAttributes, DomsParticipationLinkCreationAttributes } from './DomsParticipationLink'
import { DomsPayReceive as _DomsPayReceive } from './DomsPayReceive'
import type { DomsPayReceiveAttributes, DomsPayReceiveCreationAttributes } from './DomsPayReceive'
import { DomsPenaltyCalcMethod as _DomsPenaltyCalcMethod } from './DomsPenaltyCalcMethod'
import type { DomsPenaltyCalcMethodAttributes, DomsPenaltyCalcMethodCreationAttributes } from './DomsPenaltyCalcMethod'
import { DomsPerformingStatus as _DomsPerformingStatus } from './DomsPerformingStatus'
import type { DomsPerformingStatusAttributes, DomsPerformingStatusCreationAttributes } from './DomsPerformingStatus'
import { DomsRateType as _DomsRateType } from './DomsRateType'
import type { DomsRateTypeAttributes, DomsRateTypeCreationAttributes } from './DomsRateType'
import { DomsRepartitionMethod as _DomsRepartitionMethod } from './DomsRepartitionMethod'
import type { DomsRepartitionMethodAttributes, DomsRepartitionMethodCreationAttributes } from './DomsRepartitionMethod'
import { DomsRmgtFacility as _DomsRmgtFacility } from './DomsRmgtFacility'
import type { DomsRmgtFacilityAttributes, DomsRmgtFacilityCreationAttributes } from './DomsRmgtFacility'
import { DomsRollingConvention as _DomsRollingConvention } from './DomsRollingConvention'
import type { DomsRollingConventionAttributes, DomsRollingConventionCreationAttributes } from './DomsRollingConvention'
import { DomsSecurityStatus as _DomsSecurityStatus } from './DomsSecurityStatus'
import type { DomsSecurityStatusAttributes, DomsSecurityStatusCreationAttributes } from './DomsSecurityStatus'
import { DomsSeniority as _DomsSeniority } from './DomsSeniority'
import type { DomsSeniorityAttributes, DomsSeniorityCreationAttributes } from './DomsSeniority'
import { DomsServicingType as _DomsServicingType } from './DomsServicingType'
import type { DomsServicingTypeAttributes, DomsServicingTypeCreationAttributes } from './DomsServicingType'
import { DomsSettlementMode as _DomsSettlementMode } from './DomsSettlementMode'
import type { DomsSettlementModeAttributes, DomsSettlementModeCreationAttributes } from './DomsSettlementMode'
import { DomsStatementType as _DomsStatementType } from './DomsStatementType'
import type { DomsStatementTypeAttributes, DomsStatementTypeCreationAttributes } from './DomsStatementType'
import { DomsSubType as _DomsSubType } from './DomsSubType'
import type { DomsSubTypeAttributes, DomsSubTypeCreationAttributes } from './DomsSubType'
import { DomsTargetType as _DomsTargetType } from './DomsTargetType'
import type { DomsTargetTypeAttributes, DomsTargetTypeCreationAttributes } from './DomsTargetType'
import { DomsTaxInvptyType as _DomsTaxInvptyType } from './DomsTaxInvptyType'
import type { DomsTaxInvptyTypeAttributes, DomsTaxInvptyTypeCreationAttributes } from './DomsTaxInvptyType'
import { DomsTaxStatus as _DomsTaxStatus } from './DomsTaxStatus'
import type { DomsTaxStatusAttributes, DomsTaxStatusCreationAttributes } from './DomsTaxStatus'
import { DomsTransferred as _DomsTransferred } from './DomsTransferred'
import type { DomsTransferredAttributes, DomsTransferredCreationAttributes } from './DomsTransferred'
import { DomsTrueFalse as _DomsTrueFalse } from './DomsTrueFalse'
import type { DomsTrueFalseAttributes, DomsTrueFalseCreationAttributes } from './DomsTrueFalse'
import { DomsUnderlyingClassification as _DomsUnderlyingClassification } from './DomsUnderlyingClassification'
import type { DomsUnderlyingClassificationAttributes, DomsUnderlyingClassificationCreationAttributes } from './DomsUnderlyingClassification'
import { DomsUnderlyingFamily as _DomsUnderlyingFamily } from './DomsUnderlyingFamily'
import type { DomsUnderlyingFamilyAttributes, DomsUnderlyingFamilyCreationAttributes } from './DomsUnderlyingFamily'
import { FcmgtBorrowingGroup as _FcmgtBorrowingGroup } from './FcmgtBorrowingGroup'
import type { FcmgtBorrowingGroupAttributes, FcmgtBorrowingGroupCreationAttributes } from './FcmgtBorrowingGroup'
import { FcmgtFacilityBg as _FcmgtFacilityBg } from './FcmgtFacilityBg'
import type { FcmgtFacilityBgAttributes, FcmgtFacilityBgCreationAttributes } from './FcmgtFacilityBg'
import { FcmgtFacilityCode as _FcmgtFacilityCode } from './FcmgtFacilityCode'
import type { FcmgtFacilityCodeAttributes, FcmgtFacilityCodeCreationAttributes } from './FcmgtFacilityCode'
import { FcmgtFacilityInvpty as _FcmgtFacilityInvpty } from './FcmgtFacilityInvpty'
import type { FcmgtFacilityInvptyAttributes, FcmgtFacilityInvptyCreationAttributes } from './FcmgtFacilityInvpty'
import { FcmgtGroupFacilityLink as _FcmgtGroupFacilityLink } from './FcmgtGroupFacilityLink'
import type { FcmgtGroupFacilityLinkAttributes, FcmgtGroupFacilityLinkCreationAttributes } from './FcmgtGroupFacilityLink'
import { FcmgtProduct as _FcmgtProduct } from './FcmgtProduct'
import type { FcmgtProductAttributes, FcmgtProductCreationAttributes } from './FcmgtProduct'
import { FcmgtProductFacilityLink as _FcmgtProductFacilityLink } from './FcmgtProductFacilityLink'
import type { FcmgtProductFacilityLinkAttributes, FcmgtProductFacilityLinkCreationAttributes } from './FcmgtProductFacilityLink'
import { FcmgtProductGroup as _FcmgtProductGroup } from './FcmgtProductGroup'
import type { FcmgtProductGroupAttributes, FcmgtProductGroupCreationAttributes } from './FcmgtProductGroup'
import { FcmgtProductLink as _FcmgtProductLink } from './FcmgtProductLink'
import type { FcmgtProductLinkAttributes, FcmgtProductLinkCreationAttributes } from './FcmgtProductLink'
import { FcmgtSubordFac as _FcmgtSubordFac } from './FcmgtSubordFac'
import type { FcmgtSubordFacAttributes, FcmgtSubordFacCreationAttributes } from './FcmgtSubordFac'
import { FcmgtUtilizationA as _FcmgtUtilizationA } from './FcmgtUtilizationA'
import type { FcmgtUtilizationAAttributes, FcmgtUtilizationACreationAttributes } from './FcmgtUtilizationA'
import { FcmgtUtilizationB as _FcmgtUtilizationB } from './FcmgtUtilizationB'
import type { FcmgtUtilizationBAttributes, FcmgtUtilizationBCreationAttributes } from './FcmgtUtilizationB'
import { GenldgAccountGroup as _GenldgAccountGroup } from './GenldgAccountGroup'
import type { GenldgAccountGroupAttributes, GenldgAccountGroupCreationAttributes } from './GenldgAccountGroup'
import { GenldgAccountPlan as _GenldgAccountPlan } from './GenldgAccountPlan'
import type { GenldgAccountPlanAttributes, GenldgAccountPlanCreationAttributes } from './GenldgAccountPlan'
import { GenldgBsJournal as _GenldgBsJournal } from './GenldgBsJournal'
import type { GenldgBsJournalAttributes, GenldgBsJournalCreationAttributes } from './GenldgBsJournal'
import { GenldgGaapCode as _GenldgGaapCode } from './GenldgGaapCode'
import type { GenldgGaapCodeAttributes, GenldgGaapCodeCreationAttributes } from './GenldgGaapCode'
import { GenldgGaapPlan as _GenldgGaapPlan } from './GenldgGaapPlan'
import type { GenldgGaapPlanAttributes, GenldgGaapPlanCreationAttributes } from './GenldgGaapPlan'
import { GenldgGlbsPos as _GenldgGlbsPos } from './GenldgGlbsPos'
import type { GenldgGlbsPosAttributes, GenldgGlbsPosCreationAttributes } from './GenldgGlbsPos'
import { GenldgGrcaAverageMap as _GenldgGrcaAverageMap } from './GenldgGrcaAverageMap'
import type { GenldgGrcaAverageMapAttributes, GenldgGrcaAverageMapCreationAttributes } from './GenldgGrcaAverageMap'
import { GenldgGrcaPlan as _GenldgGrcaPlan } from './GenldgGrcaPlan'
import type { GenldgGrcaPlanAttributes, GenldgGrcaPlanCreationAttributes } from './GenldgGrcaPlan'
import { GenldgGrcaPrimaryMap as _GenldgGrcaPrimaryMap } from './GenldgGrcaPrimaryMap'
import type { GenldgGrcaPrimaryMapAttributes, GenldgGrcaPrimaryMapCreationAttributes } from './GenldgGrcaPrimaryMap'
import { GenldgInvptyLink as _GenldgInvptyLink } from './GenldgInvptyLink'
import type { GenldgInvptyLinkAttributes, GenldgInvptyLinkCreationAttributes } from './GenldgInvptyLink'
import { InvptyDet as _InvptyDet } from './InvptyDet'
import type { InvptyDetAttributes, InvptyDetCreationAttributes } from './InvptyDet'
import { InvptyExtCod as _InvptyExtCod } from './InvptyExtCod'
import type { InvptyExtCodAttributes, InvptyExtCodCreationAttributes } from './InvptyExtCod'
import { InvptyExtCodCodif as _InvptyExtCodCodif } from './InvptyExtCodCodif'
import type { InvptyExtCodCodifAttributes, InvptyExtCodCodifCreationAttributes } from './InvptyExtCodCodif'
import { InvptyFncls as _InvptyFncls } from './InvptyFncls'
import type { InvptyFnclsAttributes, InvptyFnclsCreationAttributes } from './InvptyFncls'
import { InvptyLink as _InvptyLink } from './InvptyLink'
import type { InvptyLinkAttributes, InvptyLinkCreationAttributes } from './InvptyLink'
import { InvptyLinkCodif as _InvptyLinkCodif } from './InvptyLinkCodif'
import type { InvptyLinkCodifAttributes, InvptyLinkCodifCreationAttributes } from './InvptyLinkCodif'
import { InvptyLinkType as _InvptyLinkType } from './InvptyLinkType'
import type { InvptyLinkTypeAttributes, InvptyLinkTypeCreationAttributes } from './InvptyLinkType'
import { InvptyRtngAgcy as _InvptyRtngAgcy } from './InvptyRtngAgcy'
import type { InvptyRtngAgcyAttributes, InvptyRtngAgcyCreationAttributes } from './InvptyRtngAgcy'
import { InvptyRtngAgcyRtsLnk as _InvptyRtngAgcyRtsLnk } from './InvptyRtngAgcyRtsLnk'
import type { InvptyRtngAgcyRtsLnkAttributes, InvptyRtngAgcyRtsLnkCreationAttributes } from './InvptyRtngAgcyRtsLnk'
import { InvptyRtngAgcyRtsStr as _InvptyRtngAgcyRtsStr } from './InvptyRtngAgcyRtsStr'
import type { InvptyRtngAgcyRtsStrAttributes, InvptyRtngAgcyRtsStrCreationAttributes } from './InvptyRtngAgcyRtsStr'
import { InvptyRtngCrd as _InvptyRtngCrd } from './InvptyRtngCrd'
import type { InvptyRtngCrdAttributes, InvptyRtngCrdCreationAttributes } from './InvptyRtngCrd'
import { InvptyType as _InvptyType } from './InvptyType'
import type { InvptyTypeAttributes, InvptyTypeCreationAttributes } from './InvptyType'
import { InvptyTypeCodif as _InvptyTypeCodif } from './InvptyTypeCodif'
import type { InvptyTypeCodifAttributes, InvptyTypeCodifCreationAttributes } from './InvptyTypeCodif'
import { InvptyTypeLnk as _InvptyTypeLnk } from './InvptyTypeLnk'
import type { InvptyTypeLnkAttributes, InvptyTypeLnkCreationAttributes } from './InvptyTypeLnk'
import { InvptyTypeLrgcopr as _InvptyTypeLrgcopr } from './InvptyTypeLrgcopr'
import type { InvptyTypeLrgcoprAttributes, InvptyTypeLrgcoprCreationAttributes } from './InvptyTypeLrgcopr'
import { MktdEodCurve as _MktdEodCurve } from './MktdEodCurve'
import type { MktdEodCurveAttributes, MktdEodCurveCreationAttributes } from './MktdEodCurve'
import { MktdEodPrice as _MktdEodPrice } from './MktdEodPrice'
import type { MktdEodPriceAttributes, MktdEodPriceCreationAttributes } from './MktdEodPrice'
import { MktdSecurity as _MktdSecurity } from './MktdSecurity'
import type { MktdSecurityAttributes, MktdSecurityCreationAttributes } from './MktdSecurity'
import { PnlFeeincDet as _PnlFeeincDet } from './PnlFeeincDet'
import type { PnlFeeincDetAttributes, PnlFeeincDetCreationAttributes } from './PnlFeeincDet'
import { PnlGmplexClc as _PnlGmplexClc } from './PnlGmplexClc'
import type { PnlGmplexClcAttributes, PnlGmplexClcCreationAttributes } from './PnlGmplexClc'
import { PnlGmplexDet as _PnlGmplexDet } from './PnlGmplexDet'
import type { PnlGmplexDetAttributes, PnlGmplexDetCreationAttributes } from './PnlGmplexDet'
import { PnlInterestincClc as _PnlInterestincClc } from './PnlInterestincClc'
import type { PnlInterestincClcAttributes, PnlInterestincClcCreationAttributes } from './PnlInterestincClc'
import { PnlOperincCsf as _PnlOperincCsf } from './PnlOperincCsf'
import type { PnlOperincCsfAttributes, PnlOperincCsfCreationAttributes } from './PnlOperincCsf'
import { PnlOperincCsfLink as _PnlOperincCsfLink } from './PnlOperincCsfLink'
import type { PnlOperincCsfLinkAttributes, PnlOperincCsfLinkCreationAttributes } from './PnlOperincCsfLink'
import { PnlOperincDet as _PnlOperincDet } from './PnlOperincDet'
import type { PnlOperincDetAttributes, PnlOperincDetCreationAttributes } from './PnlOperincDet'
import { PortContractList as _PortContractList } from './PortContractList'
import type { PortContractListAttributes, PortContractListCreationAttributes } from './PortContractList'
import { PortDsecCsf as _PortDsecCsf } from './PortDsecCsf'
import type { PortDsecCsfAttributes, PortDsecCsfCreationAttributes } from './PortDsecCsf'
import { PortDsecMov as _PortDsecMov } from './PortDsecMov'
import type { PortDsecMovAttributes, PortDsecMovCreationAttributes } from './PortDsecMov'
import { PortDsecPos as _PortDsecPos } from './PortDsecPos'
import type { PortDsecPosAttributes, PortDsecPosCreationAttributes } from './PortDsecPos'
import { PortFctyLnk as _PortFctyLnk } from './PortFctyLnk'
import type { PortFctyLnkAttributes, PortFctyLnkCreationAttributes } from './PortFctyLnk'
import { PortFctyMov as _PortFctyMov } from './PortFctyMov'
import type { PortFctyMovAttributes, PortFctyMovCreationAttributes } from './PortFctyMov'
import { PortFctyPos as _PortFctyPos } from './PortFctyPos'
import type { PortFctyPosAttributes, PortFctyPosCreationAttributes } from './PortFctyPos'
import { PortFincCsf as _PortFincCsf } from './PortFincCsf'
import type { PortFincCsfAttributes, PortFincCsfCreationAttributes } from './PortFincCsf'
import { PortFincMov as _PortFincMov } from './PortFincMov'
import type { PortFincMovAttributes, PortFincMovCreationAttributes } from './PortFincMov'
import { PortFincPos as _PortFincPos } from './PortFincPos'
import type { PortFincPosAttributes, PortFincPosCreationAttributes } from './PortFincPos'
import { PortFoexCsf as _PortFoexCsf } from './PortFoexCsf'
import type { PortFoexCsfAttributes, PortFoexCsfCreationAttributes } from './PortFoexCsf'
import { PortFoexMov as _PortFoexMov } from './PortFoexMov'
import type { PortFoexMovAttributes, PortFoexMovCreationAttributes } from './PortFoexMov'
import { PortFoexPos as _PortFoexPos } from './PortFoexPos'
import type { PortFoexPosAttributes, PortFoexPosCreationAttributes } from './PortFoexPos'
import { PortFutuCsf as _PortFutuCsf } from './PortFutuCsf'
import type { PortFutuCsfAttributes, PortFutuCsfCreationAttributes } from './PortFutuCsf'
import { PortFutuMov as _PortFutuMov } from './PortFutuMov'
import type { PortFutuMovAttributes, PortFutuMovCreationAttributes } from './PortFutuMov'
import { PortFutuPos as _PortFutuPos } from './PortFutuPos'
import type { PortFutuPosAttributes, PortFutuPosCreationAttributes } from './PortFutuPos'
import { PortGuarMov as _PortGuarMov } from './PortGuarMov'
import type { PortGuarMovAttributes, PortGuarMovCreationAttributes } from './PortGuarMov'
import { PortGuarPos as _PortGuarPos } from './PortGuarPos'
import type { PortGuarPosAttributes, PortGuarPosCreationAttributes } from './PortGuarPos'
import { PortHedgeLnk as _PortHedgeLnk } from './PortHedgeLnk'
import type { PortHedgeLnkAttributes, PortHedgeLnkCreationAttributes } from './PortHedgeLnk'
import { PortLoanCsf as _PortLoanCsf } from './PortLoanCsf'
import type { PortLoanCsfAttributes, PortLoanCsfCreationAttributes } from './PortLoanCsf'
import { PortLoanMov as _PortLoanMov } from './PortLoanMov'
import type { PortLoanMovAttributes, PortLoanMovCreationAttributes } from './PortLoanMov'
import { PortLoanPos as _PortLoanPos } from './PortLoanPos'
import type { PortLoanPosAttributes, PortLoanPosCreationAttributes } from './PortLoanPos'
import { PortNdfsCsf as _PortNdfsCsf } from './PortNdfsCsf'
import type { PortNdfsCsfAttributes, PortNdfsCsfCreationAttributes } from './PortNdfsCsf'
import { PortNdfsMov as _PortNdfsMov } from './PortNdfsMov'
import type { PortNdfsMovAttributes, PortNdfsMovCreationAttributes } from './PortNdfsMov'
import { PortNdfsPos as _PortNdfsPos } from './PortNdfsPos'
import type { PortNdfsPosAttributes, PortNdfsPosCreationAttributes } from './PortNdfsPos'
import { PortNostroCsf as _PortNostroCsf } from './PortNostroCsf'
import type { PortNostroCsfAttributes, PortNostroCsfCreationAttributes } from './PortNostroCsf'
import { PortNostroPos as _PortNostroPos } from './PortNostroPos'
import type { PortNostroPosAttributes, PortNostroPosCreationAttributes } from './PortNostroPos'
import { PortOtherCsf as _PortOtherCsf } from './PortOtherCsf'
import type { PortOtherCsfAttributes, PortOtherCsfCreationAttributes } from './PortOtherCsf'
import { PortOtherPos as _PortOtherPos } from './PortOtherPos'
import type { PortOtherPosAttributes, PortOtherPosCreationAttributes } from './PortOtherPos'
import { PortRecvCsf as _PortRecvCsf } from './PortRecvCsf'
import type { PortRecvCsfAttributes, PortRecvCsfCreationAttributes } from './PortRecvCsf'
import { PortRecvLnk as _PortRecvLnk } from './PortRecvLnk'
import type { PortRecvLnkAttributes, PortRecvLnkCreationAttributes } from './PortRecvLnk'
import { PortRecvMov as _PortRecvMov } from './PortRecvMov'
import type { PortRecvMovAttributes, PortRecvMovCreationAttributes } from './PortRecvMov'
import { PortRecvPos as _PortRecvPos } from './PortRecvPos'
import type { PortRecvPosAttributes, PortRecvPosCreationAttributes } from './PortRecvPos'
import { PortRepoCsf as _PortRepoCsf } from './PortRepoCsf'
import type { PortRepoCsfAttributes, PortRepoCsfCreationAttributes } from './PortRepoCsf'
import { PortRepoDet as _PortRepoDet } from './PortRepoDet'
import type { PortRepoDetAttributes, PortRepoDetCreationAttributes } from './PortRepoDet'
import { PortRepoMov as _PortRepoMov } from './PortRepoMov'
import type { PortRepoMovAttributes, PortRepoMovCreationAttributes } from './PortRepoMov'
import { PortRepoPos as _PortRepoPos } from './PortRepoPos'
import type { PortRepoPosAttributes, PortRepoPosCreationAttributes } from './PortRepoPos'
import { PortSwapCsf as _PortSwapCsf } from './PortSwapCsf'
import type { PortSwapCsfAttributes, PortSwapCsfCreationAttributes } from './PortSwapCsf'
import { PortSwapMov as _PortSwapMov } from './PortSwapMov'
import type { PortSwapMovAttributes, PortSwapMovCreationAttributes } from './PortSwapMov'
import { PortSwapPos as _PortSwapPos } from './PortSwapPos'
import type { PortSwapPosAttributes, PortSwapPosCreationAttributes } from './PortSwapPos'
import { PortThirdPartyLnk as _PortThirdPartyLnk } from './PortThirdPartyLnk'
import type { PortThirdPartyLnkAttributes, PortThirdPartyLnkCreationAttributes } from './PortThirdPartyLnk'
import { PortVostroCsf as _PortVostroCsf } from './PortVostroCsf'
import type { PortVostroCsfAttributes, PortVostroCsfCreationAttributes } from './PortVostroCsf'
import { PortVostroPos as _PortVostroPos } from './PortVostroPos'
import type { PortVostroPosAttributes, PortVostroPosCreationAttributes } from './PortVostroPos'
import { Product as _Product } from './Product'
import type { ProductAttributes, ProductCreationAttributes } from './Product'
import { ProductExtCod as _ProductExtCod } from './ProductExtCod'
import type { ProductExtCodAttributes, ProductExtCodCreationAttributes } from './ProductExtCod'
import { ProductHsbcGrp as _ProductHsbcGrp } from './ProductHsbcGrp'
import type { ProductHsbcGrpAttributes, ProductHsbcGrpCreationAttributes } from './ProductHsbcGrp'
import { ProductHsbcGrpLink as _ProductHsbcGrpLink } from './ProductHsbcGrpLink'
import type { ProductHsbcGrpLinkAttributes, ProductHsbcGrpLinkCreationAttributes } from './ProductHsbcGrpLink'
import { ReconBzdfAggregation as _ReconBzdfAggregation } from './ReconBzdfAggregation'
import type { ReconBzdfAggregationAttributes, ReconBzdfAggregationCreationAttributes } from './ReconBzdfAggregation'
import { ReconBzdfContractLoad as _ReconBzdfContractLoad } from './ReconBzdfContractLoad'
import type { ReconBzdfContractLoadAttributes, ReconBzdfContractLoadCreationAttributes } from './ReconBzdfContractLoad'
import { ReconBzdfMap as _ReconBzdfMap } from './ReconBzdfMap'
import type { ReconBzdfMapAttributes, ReconBzdfMapCreationAttributes } from './ReconBzdfMap'
import { ReconBzdfPoint as _ReconBzdfPoint } from './ReconBzdfPoint'
import type { ReconBzdfPointAttributes, ReconBzdfPointCreationAttributes } from './ReconBzdfPoint'
import { ReconDimension as _ReconDimension } from './ReconDimension'
import type { ReconDimensionAttributes, ReconDimensionCreationAttributes } from './ReconDimension'
import { ReconDimensionGroup as _ReconDimensionGroup } from './ReconDimensionGroup'
import type { ReconDimensionGroupAttributes, ReconDimensionGroupCreationAttributes } from './ReconDimensionGroup'
import { ReconGlAggregation as _ReconGlAggregation } from './ReconGlAggregation'
import type { ReconGlAggregationAttributes, ReconGlAggregationCreationAttributes } from './ReconGlAggregation'
import { ReconGlPoint as _ReconGlPoint } from './ReconGlPoint'
import type { ReconGlPointAttributes, ReconGlPointCreationAttributes } from './ReconGlPoint'
import { ReconMathOperator as _ReconMathOperator } from './ReconMathOperator'
import type { ReconMathOperatorAttributes, ReconMathOperatorCreationAttributes } from './ReconMathOperator'
import { ReconMetric as _ReconMetric } from './ReconMetric'
import type { ReconMetricAttributes, ReconMetricCreationAttributes } from './ReconMetric'
import { ReconResult as _ReconResult } from './ReconResult'
import type { ReconResultAttributes, ReconResultCreationAttributes } from './ReconResult'
import { SysAdhocHoliday as _SysAdhocHoliday } from './SysAdhocHoliday'
import type { SysAdhocHolidayAttributes, SysAdhocHolidayCreationAttributes } from './SysAdhocHoliday'
import { SysCalendar as _SysCalendar } from './SysCalendar'
import type { SysCalendarAttributes, SysCalendarCreationAttributes } from './SysCalendar'
import { SysCountry as _SysCountry } from './SysCountry'
import type { SysCountryAttributes, SysCountryCreationAttributes } from './SysCountry'
import { SysCountryCcyLnk as _SysCountryCcyLnk } from './SysCountryCcyLnk'
import type { SysCountryCcyLnkAttributes, SysCountryCcyLnkCreationAttributes } from './SysCountryCcyLnk'
import { SysCurrency as _SysCurrency } from './SysCurrency'
import type { SysCurrencyAttributes, SysCurrencyCreationAttributes } from './SysCurrency'
import { SysCurve as _SysCurve } from './SysCurve'
import type { SysCurveAttributes, SysCurveCreationAttributes } from './SysCurve'
import { SysCurveUnderlyingLink as _SysCurveUnderlyingLink } from './SysCurveUnderlyingLink'
import type { SysCurveUnderlyingLinkAttributes, SysCurveUnderlyingLinkCreationAttributes } from './SysCurveUnderlyingLink'
import { SysUnderlying as _SysUnderlying } from './SysUnderlying'
import type { SysUnderlyingAttributes, SysUnderlyingCreationAttributes } from './SysUnderlying'
import { SysUnderlyingType as _SysUnderlyingType } from './SysUnderlyingType'
import type { SysUnderlyingTypeAttributes, SysUnderlyingTypeCreationAttributes } from './SysUnderlyingType'
import { TaxBankAccountInfo as _TaxBankAccountInfo } from './TaxBankAccountInfo'
import type { TaxBankAccountInfoAttributes, TaxBankAccountInfoCreationAttributes } from './TaxBankAccountInfo'
import { TaxConsolType as _TaxConsolType } from './TaxConsolType'
import type { TaxConsolTypeAttributes, TaxConsolTypeCreationAttributes } from './TaxConsolType'
import { TaxEntityAdditionalInfo as _TaxEntityAdditionalInfo } from './TaxEntityAdditionalInfo'
import type { TaxEntityAdditionalInfoAttributes, TaxEntityAdditionalInfoCreationAttributes } from './TaxEntityAdditionalInfo'
import { TaxExcemptionType as _TaxExcemptionType } from './TaxExcemptionType'
import type { TaxExcemptionTypeAttributes, TaxExcemptionTypeCreationAttributes } from './TaxExcemptionType'
import { TaxExemptListService as _TaxExemptListService } from './TaxExemptListService'
import type { TaxExemptListServiceAttributes, TaxExemptListServiceCreationAttributes } from './TaxExemptListService'
import { TaxExemptMunicipality as _TaxExemptMunicipality } from './TaxExemptMunicipality'
import type { TaxExemptMunicipalityAttributes, TaxExemptMunicipalityCreationAttributes } from './TaxExemptMunicipality'
import { TaxExemption as _TaxExemption } from './TaxExemption'
import type { TaxExemptionAttributes, TaxExemptionCreationAttributes } from './TaxExemption'
import { TaxForeignPerson as _TaxForeignPerson } from './TaxForeignPerson'
import type { TaxForeignPersonAttributes, TaxForeignPersonCreationAttributes } from './TaxForeignPerson'
import { TaxFormOfPayment as _TaxFormOfPayment } from './TaxFormOfPayment'
import type { TaxFormOfPaymentAttributes, TaxFormOfPaymentCreationAttributes } from './TaxFormOfPayment'
import { TaxList as _TaxList } from './TaxList'
import type { TaxListAttributes, TaxListCreationAttributes } from './TaxList'
import { TaxType as _TaxType } from './TaxType'
import type { TaxTypeAttributes, TaxTypeCreationAttributes } from './TaxType'

export {
  _AlcmCapitalAccountParam as AlcmCapitalAccountParam,
  _AlcmCapitalProductParam as AlcmCapitalProductParam,
  _AlcmCapitalRegulatoryType as AlcmCapitalRegulatoryType,
  _AlcmCpadEadBase as AlcmCpadEadBase,
  _AlcmDloAcctGroup as AlcmDloAcctGroup,
  _AlcmDloLelExceptProducts as AlcmDloLelExceptProducts,
  _AlcmDloTb01 as AlcmDloTb01,
  _AlcmDloTb02 as AlcmDloTb02,
  _AlcmDloTb03Cpad as AlcmDloTb03Cpad,
  _AlcmDloTb03Limimob as AlcmDloTb03Limimob,
  _AlcmDloTb03Opad as AlcmDloTb03Opad,
  _AlcmDloTb03Pr as AlcmDloTb03Pr,
  _AlcmDloTb03Ra as AlcmDloTb03Ra,
  _AlcmDloTb04 as AlcmDloTb04,
  _AlcmDloTb05 as AlcmDloTb05,
  _AlcmDloTb06 as AlcmDloTb06,
  _AlcmDloTb07 as AlcmDloTb07,
  _AlcmDloTb09 as AlcmDloTb09,
  _AlcmDloTb10 as AlcmDloTb10,
  _AlcmDloTb11 as AlcmDloTb11,
  _AlcmDloTb11A as AlcmDloTb11A,
  _AlcmDloTb12 as AlcmDloTb12,
  _AlcmDloTb13 as AlcmDloTb13,
  _AlcmDloTb14 as AlcmDloTb14,
  _AlcmDloTb19 as AlcmDloTb19,
  _AlcmDloTb23 as AlcmDloTb23,
  _AlcmDloTb24 as AlcmDloTb24,
  _AlcmDloTb25 as AlcmDloTb25,
  _AlcmDloTb26 as AlcmDloTb26,
  _AlcmDloTb28 as AlcmDloTb28,
  _AlcmDloTb28D as AlcmDloTb28D,
  _AlcmDloTb29 as AlcmDloTb29,
  _AlcmDloTb30 as AlcmDloTb30,
  _AlcmDloTb31 as AlcmDloTb31,
  _AlcmDloTb31A as AlcmDloTb31A,
  _AlcmDloTb32 as AlcmDloTb32,
  _AlcmDloTb33 as AlcmDloTb33,
  _AlcmDloTb34 as AlcmDloTb34,
  _AlcmDloTb35 as AlcmDloTb35,
  _AlcmDloTb36 as AlcmDloTb36,
  _AlcmDloTb37 as AlcmDloTb37,
  _AlcmDloTb38 as AlcmDloTb38,
  _AlcmDloTb39 as AlcmDloTb39,
  _AlcmDloTb42 as AlcmDloTb42,
  _AlcmDloTb43 as AlcmDloTb43,
  _AlcmDloTb44 as AlcmDloTb44,
  _AlcmDloTb46 as AlcmDloTb46,
  _AlcmDloTb47 as AlcmDloTb47,
  _AlcmLiqDrlAccount as AlcmLiqDrlAccount,
  _AlcmLiqDrlAcctGrp as AlcmLiqDrlAcctGrp,
  _AlcmLiqDrlDoctBalanceLadder as AlcmLiqDrlDoctBalanceLadder,
  _AlcmLiqDrlDoctElement as AlcmLiqDrlDoctElement,
  _AlcmLiqDrlDoctMaturityLadder as AlcmLiqDrlDoctMaturityLadder,
  _AlcmLiqDrlDoctParam as AlcmLiqDrlDoctParam,
  _AlcmLiqDrlDoctParamValue as AlcmLiqDrlDoctParamValue,
  _AlcmLiqDrlDoctType as AlcmLiqDrlDoctType,
  _AlcmLiqNsfrAccount as AlcmLiqNsfrAccount,
  _AlcmLiqNsfrGroup as AlcmLiqNsfrGroup,
  _AlcmLiqNsfrProductParam as AlcmLiqNsfrProductParam,
  _AlcmLiqNsfrQuality as AlcmLiqNsfrQuality,
  _AlcmLiqNsfrTimeBucketStruct as AlcmLiqNsfrTimeBucketStruct,
  _AlcmLiqNsfrWeight as AlcmLiqNsfrWeight,
  _AlcmProductGroup as AlcmProductGroup,
  _BuyinBalanceLink as BuyinBalanceLink,
  _BuyinContractLink as BuyinContractLink,
  _BuyinSelloutGlLink as BuyinSelloutGlLink,
  _BuyinSelloutGlbsGroup as BuyinSelloutGlbsGroup,
  _Company as Company,
  _CompanyBook as CompanyBook,
  _CompanyBookType as CompanyBookType,
  _CompanyCostCentre as CompanyCostCentre,
  _CompanyCostCentreLnk as CompanyCostCentreLnk,
  _CompanyLink as CompanyLink,
  _CompanyLob as CompanyLob,
  _CompanyLobLnk as CompanyLobLnk,
  _CompanyLobType as CompanyLobType,
  _CrmAgreementLink as CrmAgreementLink,
  _CrmContractLink as CrmContractLink,
  _CrmGuarPos as CrmGuarPos,
  _CrmInstrumentList as CrmInstrumentList,
  _CrmInvptyLink as CrmInvptyLink,
  _CrmNetagrDet as CrmNetagrDet,
  _CrmNetagrLink as CrmNetagrLink,
  _CrmProductLink as CrmProductLink,
  _DomsAccrualBasis as DomsAccrualBasis,
  _DomsAmortizingType as DomsAmortizingType,
  _DomsBalanceType as DomsBalanceType,
  _DomsBankingFacilityType as DomsBankingFacilityType,
  _DomsBankingTrading as DomsBankingTrading,
  _DomsBankruptcyRemote as DomsBankruptcyRemote,
  _DomsBranchSubsidiary as DomsBranchSubsidiary,
  _DomsBrokenPeriodType as DomsBrokenPeriodType,
  _DomsCalcDayConvention as DomsCalcDayConvention,
  _DomsCalcDayRule as DomsCalcDayRule,
  _DomsCalcFrequency as DomsCalcFrequency,
  _DomsCapType as DomsCapType,
  _DomsCashFlowApproach as DomsCashFlowApproach,
  _DomsCashFlowQuality as DomsCashFlowQuality,
  _DomsCashFlowType as DomsCashFlowType,
  _DomsCcpExposureType as DomsCcpExposureType,
  _DomsCcyConvType as DomsCcyConvType,
  _DomsCinstCalcRule as DomsCinstCalcRule,
  _DomsCinstRuleAnnuityAfterMat as DomsCinstRuleAnnuityAfterMat,
  _DomsClientProprietary as DomsClientProprietary,
  _DomsCollContractType as DomsCollContractType,
  _DomsCollateralMode as DomsCollateralMode,
  _DomsCommitted as DomsCommitted,
  _DomsCompoundType as DomsCompoundType,
  _DomsConsolidationType as DomsConsolidationType,
  _DomsDefermentContext as DomsDefermentContext,
  _DomsDefermentMethod as DomsDefermentMethod,
  _DomsDeliveryType as DomsDeliveryType,
  _DomsDerivativeMultiplierType as DomsDerivativeMultiplierType,
  _DomsDiscountMethod as DomsDiscountMethod,
  _DomsDistributionChannel as DomsDistributionChannel,
  _DomsFacilityLiqType as DomsFacilityLiqType,
  _DomsFacilityPurpose as DomsFacilityPurpose,
  _DomsFacilityType as DomsFacilityType,
  _DomsFairValueOption as DomsFairValueOption,
  _DomsFixingRule as DomsFixingRule,
  _DomsForbearanceMeasures as DomsForbearanceMeasures,
  _DomsGivenReceived as DomsGivenReceived,
  _DomsGlClass as DomsGlClass,
  _DomsGlNature as DomsGlNature,
  _DomsHedgeAccountingType as DomsHedgeAccountingType,
  _DomsIncomeType as DomsIncomeType,
  _DomsIndustrySectorType as DomsIndustrySectorType,
  _DomsInvptyStatus as DomsInvptyStatus,
  _DomsLongShort as DomsLongShort,
  _DomsMarginExcessType as DomsMarginExcessType,
  _DomsMarginType as DomsMarginType,
  _DomsNettingClass as DomsNettingClass,
  _DomsOverlappingPriority as DomsOverlappingPriority,
  _DomsParticipationFlag as DomsParticipationFlag,
  _DomsParticipationLink as DomsParticipationLink,
  _DomsPayReceive as DomsPayReceive,
  _DomsPenaltyCalcMethod as DomsPenaltyCalcMethod,
  _DomsPerformingStatus as DomsPerformingStatus,
  _DomsRateType as DomsRateType,
  _DomsRepartitionMethod as DomsRepartitionMethod,
  _DomsRmgtFacility as DomsRmgtFacility,
  _DomsRollingConvention as DomsRollingConvention,
  _DomsSecurityStatus as DomsSecurityStatus,
  _DomsSeniority as DomsSeniority,
  _DomsServicingType as DomsServicingType,
  _DomsSettlementMode as DomsSettlementMode,
  _DomsStatementType as DomsStatementType,
  _DomsSubType as DomsSubType,
  _DomsSystemType as DomsSystemType,
  _DomsTargetType as DomsTargetType,
  _DomsTaxInvptyType as DomsTaxInvptyType,
  _DomsTaxStatus as DomsTaxStatus,
  _DomsTransferred as DomsTransferred,
  _DomsTrueFalse as DomsTrueFalse,
  _DomsUnderlyingClassification as DomsUnderlyingClassification,
  _DomsUnderlyingFamily as DomsUnderlyingFamily,
  _FcmgtBorrowingGroup as FcmgtBorrowingGroup,
  _FcmgtFacilityBg as FcmgtFacilityBg,
  _FcmgtFacilityCode as FcmgtFacilityCode,
  _FcmgtFacilityInvpty as FcmgtFacilityInvpty,
  _FcmgtGroupFacilityLink as FcmgtGroupFacilityLink,
  _FcmgtProduct as FcmgtProduct,
  _FcmgtProductFacilityLink as FcmgtProductFacilityLink,
  _FcmgtProductGroup as FcmgtProductGroup,
  _FcmgtProductLink as FcmgtProductLink,
  _FcmgtSubordFac as FcmgtSubordFac,
  _FcmgtUtilizationA as FcmgtUtilizationA,
  _FcmgtUtilizationB as FcmgtUtilizationB,
  _GenldgAccountGroup as GenldgAccountGroup,
  _GenldgAccountPlan as GenldgAccountPlan,
  _GenldgBsJournal as GenldgBsJournal,
  _GenldgGaapCode as GenldgGaapCode,
  _GenldgGaapPlan as GenldgGaapPlan,
  _GenldgGlbsPos as GenldgGlbsPos,
  _GenldgGrcaAverageMap as GenldgGrcaAverageMap,
  _GenldgGrcaPlan as GenldgGrcaPlan,
  _GenldgGrcaPrimaryMap as GenldgGrcaPrimaryMap,
  _GenldgInvptyLink as GenldgInvptyLink,
  _InvptyDet as InvptyDet,
  _InvptyExtCod as InvptyExtCod,
  _InvptyExtCodCodif as InvptyExtCodCodif,
  _InvptyFncls as InvptyFncls,
  _InvptyLink as InvptyLink,
  _InvptyLinkCodif as InvptyLinkCodif,
  _InvptyLinkType as InvptyLinkType,
  _InvptyRtngAgcy as InvptyRtngAgcy,
  _InvptyRtngAgcyRtsLnk as InvptyRtngAgcyRtsLnk,
  _InvptyRtngAgcyRtsStr as InvptyRtngAgcyRtsStr,
  _InvptyRtngCrd as InvptyRtngCrd,
  _InvptyType as InvptyType,
  _InvptyTypeCodif as InvptyTypeCodif,
  _InvptyTypeLnk as InvptyTypeLnk,
  _InvptyTypeLrgcopr as InvptyTypeLrgcopr,
  _MktdEodCurve as MktdEodCurve,
  _MktdEodPrice as MktdEodPrice,
  _MktdSecurity as MktdSecurity,
  _PnlFeeincDet as PnlFeeincDet,
  _PnlGmplexClc as PnlGmplexClc,
  _PnlGmplexDet as PnlGmplexDet,
  _PnlInterestincClc as PnlInterestincClc,
  _PnlOperincCsf as PnlOperincCsf,
  _PnlOperincCsfLink as PnlOperincCsfLink,
  _PnlOperincDet as PnlOperincDet,
  _PortContractList as PortContractList,
  _PortDsecCsf as PortDsecCsf,
  _PortDsecMov as PortDsecMov,
  _PortDsecPos as PortDsecPos,
  _PortFctyLnk as PortFctyLnk,
  _PortFctyMov as PortFctyMov,
  _PortFctyPos as PortFctyPos,
  _PortFincCsf as PortFincCsf,
  _PortFincMov as PortFincMov,
  _PortFincPos as PortFincPos,
  _PortFoexCsf as PortFoexCsf,
  _PortFoexMov as PortFoexMov,
  _PortFoexPos as PortFoexPos,
  _PortFutuCsf as PortFutuCsf,
  _PortFutuMov as PortFutuMov,
  _PortFutuPos as PortFutuPos,
  _PortGuarMov as PortGuarMov,
  _PortGuarPos as PortGuarPos,
  _PortHedgeLnk as PortHedgeLnk,
  _PortLoanCsf as PortLoanCsf,
  _PortLoanMov as PortLoanMov,
  _PortLoanPos as PortLoanPos,
  _PortNdfsCsf as PortNdfsCsf,
  _PortNdfsMov as PortNdfsMov,
  _PortNdfsPos as PortNdfsPos,
  _PortNostroCsf as PortNostroCsf,
  _PortNostroPos as PortNostroPos,
  _PortOtherCsf as PortOtherCsf,
  _PortOtherPos as PortOtherPos,
  _PortRecvCsf as PortRecvCsf,
  _PortRecvLnk as PortRecvLnk,
  _PortRecvMov as PortRecvMov,
  _PortRecvPos as PortRecvPos,
  _PortRepoCsf as PortRepoCsf,
  _PortRepoDet as PortRepoDet,
  _PortRepoMov as PortRepoMov,
  _PortRepoPos as PortRepoPos,
  _PortSwapCsf as PortSwapCsf,
  _PortSwapMov as PortSwapMov,
  _PortSwapPos as PortSwapPos,
  _PortThirdPartyLnk as PortThirdPartyLnk,
  _PortVostroCsf as PortVostroCsf,
  _PortVostroPos as PortVostroPos,
  _Product as Product,
  _ProductExtCod as ProductExtCod,
  _ProductHsbcGrp as ProductHsbcGrp,
  _ProductHsbcGrpLink as ProductHsbcGrpLink,
  _ReconBzdfAggregation as ReconBzdfAggregation,
  _ReconBzdfContractLoad as ReconBzdfContractLoad,
  _ReconBzdfMap as ReconBzdfMap,
  _ReconBzdfPoint as ReconBzdfPoint,
  _ReconDimension as ReconDimension,
  _ReconDimensionGroup as ReconDimensionGroup,
  _ReconGlAggregation as ReconGlAggregation,
  _ReconGlPoint as ReconGlPoint,
  _ReconMathOperator as ReconMathOperator,
  _ReconMetric as ReconMetric,
  _ReconResult as ReconResult,
  _SysAdhocHoliday as SysAdhocHoliday,
  _SysCalendar as SysCalendar,
  _SysCountry as SysCountry,
  _SysCountryCcyLnk as SysCountryCcyLnk,
  _SysCurrency as SysCurrency,
  _SysCurve as SysCurve,
  _SysCurveUnderlyingLink as SysCurveUnderlyingLink,
  _SysExternalSystem as SysExternalSystem,
  _SysUnderlying as SysUnderlying,
  _SysUnderlyingType as SysUnderlyingType,
  _TaxBankAccountInfo as TaxBankAccountInfo,
  _TaxConsolType as TaxConsolType,
  _TaxEntityAdditionalInfo as TaxEntityAdditionalInfo,
  _TaxExcemptionType as TaxExcemptionType,
  _TaxExemptListService as TaxExemptListService,
  _TaxExemptMunicipality as TaxExemptMunicipality,
  _TaxExemption as TaxExemption,
  _TaxForeignPerson as TaxForeignPerson,
  _TaxFormOfPayment as TaxFormOfPayment,
  _TaxList as TaxList,
  _TaxType as TaxType
}

export type {
  DomsSystemTypeAttributes,
  DomsSystemTypeCreationAttributes,
  SysExternalSystemAttributes,
  SysExternalSystemCreationAttributes,
  AlcmCapitalAccountParamAttributes,
  AlcmCapitalAccountParamCreationAttributes,
  AlcmCapitalProductParamAttributes,
  AlcmCapitalProductParamCreationAttributes,
  AlcmCapitalRegulatoryTypeAttributes,
  AlcmCapitalRegulatoryTypeCreationAttributes,
  AlcmCpadEadBaseAttributes,
  AlcmCpadEadBaseCreationAttributes,
  AlcmDloAcctGroupAttributes,
  AlcmDloAcctGroupCreationAttributes,
  AlcmDloLelExceptProductsAttributes,
  AlcmDloLelExceptProductsCreationAttributes,
  AlcmDloTb01Attributes,
  AlcmDloTb01CreationAttributes,
  AlcmDloTb02Attributes,
  AlcmDloTb02CreationAttributes,
  AlcmDloTb03CpadAttributes,
  AlcmDloTb03CpadCreationAttributes,
  AlcmDloTb03LimimobAttributes,
  AlcmDloTb03LimimobCreationAttributes,
  AlcmDloTb03OpadAttributes,
  AlcmDloTb03OpadCreationAttributes,
  AlcmDloTb03PrAttributes,
  AlcmDloTb03PrCreationAttributes,
  AlcmDloTb03RaAttributes,
  AlcmDloTb03RaCreationAttributes,
  AlcmDloTb04Attributes,
  AlcmDloTb04CreationAttributes,
  AlcmDloTb05Attributes,
  AlcmDloTb05CreationAttributes,
  AlcmDloTb06Attributes,
  AlcmDloTb06CreationAttributes,
  AlcmDloTb07Attributes,
  AlcmDloTb07CreationAttributes,
  AlcmDloTb09Attributes,
  AlcmDloTb09CreationAttributes,
  AlcmDloTb10Attributes,
  AlcmDloTb10CreationAttributes,
  AlcmDloTb11Attributes,
  AlcmDloTb11CreationAttributes,
  AlcmDloTb11AAttributes,
  AlcmDloTb11ACreationAttributes,
  AlcmDloTb12Attributes,
  AlcmDloTb12CreationAttributes,
  AlcmDloTb13Attributes,
  AlcmDloTb13CreationAttributes,
  AlcmDloTb14Attributes,
  AlcmDloTb14CreationAttributes,
  AlcmDloTb19Attributes,
  AlcmDloTb19CreationAttributes,
  AlcmDloTb23Attributes,
  AlcmDloTb23CreationAttributes,
  AlcmDloTb24Attributes,
  AlcmDloTb24CreationAttributes,
  AlcmDloTb25Attributes,
  AlcmDloTb25CreationAttributes,
  AlcmDloTb26Attributes,
  AlcmDloTb26CreationAttributes,
  AlcmDloTb28Attributes,
  AlcmDloTb28CreationAttributes,
  AlcmDloTb28DAttributes,
  AlcmDloTb28DCreationAttributes,
  AlcmDloTb29Attributes,
  AlcmDloTb29CreationAttributes,
  AlcmDloTb30Attributes,
  AlcmDloTb30CreationAttributes,
  AlcmDloTb31Attributes,
  AlcmDloTb31CreationAttributes,
  AlcmDloTb31AAttributes,
  AlcmDloTb31ACreationAttributes,
  AlcmDloTb32Attributes,
  AlcmDloTb32CreationAttributes,
  AlcmDloTb33Attributes,
  AlcmDloTb33CreationAttributes,
  AlcmDloTb34Attributes,
  AlcmDloTb34CreationAttributes,
  AlcmDloTb35Attributes,
  AlcmDloTb35CreationAttributes,
  AlcmDloTb36Attributes,
  AlcmDloTb36CreationAttributes,
  AlcmDloTb37Attributes,
  AlcmDloTb37CreationAttributes,
  AlcmDloTb38Attributes,
  AlcmDloTb38CreationAttributes,
  AlcmDloTb39Attributes,
  AlcmDloTb39CreationAttributes,
  AlcmDloTb42Attributes,
  AlcmDloTb42CreationAttributes,
  AlcmDloTb43Attributes,
  AlcmDloTb43CreationAttributes,
  AlcmDloTb44Attributes,
  AlcmDloTb44CreationAttributes,
  AlcmDloTb46Attributes,
  AlcmDloTb46CreationAttributes,
  AlcmDloTb47Attributes,
  AlcmDloTb47CreationAttributes,
  AlcmLiqDrlAccountAttributes,
  AlcmLiqDrlAccountCreationAttributes,
  AlcmLiqDrlAcctGrpAttributes,
  AlcmLiqDrlAcctGrpCreationAttributes,
  AlcmLiqDrlDoctBalanceLadderAttributes,
  AlcmLiqDrlDoctBalanceLadderCreationAttributes,
  AlcmLiqDrlDoctElementAttributes,
  AlcmLiqDrlDoctElementCreationAttributes,
  AlcmLiqDrlDoctMaturityLadderAttributes,
  AlcmLiqDrlDoctMaturityLadderCreationAttributes,
  AlcmLiqDrlDoctParamAttributes,
  AlcmLiqDrlDoctParamCreationAttributes,
  AlcmLiqDrlDoctParamValueAttributes,
  AlcmLiqDrlDoctParamValueCreationAttributes,
  AlcmLiqDrlDoctTypeAttributes,
  AlcmLiqDrlDoctTypeCreationAttributes,
  AlcmLiqNsfrAccountAttributes,
  AlcmLiqNsfrAccountCreationAttributes,
  AlcmLiqNsfrGroupAttributes,
  AlcmLiqNsfrGroupCreationAttributes,
  AlcmLiqNsfrProductParamAttributes,
  AlcmLiqNsfrProductParamCreationAttributes,
  AlcmLiqNsfrQualityAttributes,
  AlcmLiqNsfrQualityCreationAttributes,
  AlcmLiqNsfrTimeBucketStructAttributes,
  AlcmLiqNsfrTimeBucketStructCreationAttributes,
  AlcmLiqNsfrWeightAttributes,
  AlcmLiqNsfrWeightCreationAttributes,
  AlcmProductGroupAttributes,
  AlcmProductGroupCreationAttributes,
  BuyinBalanceLinkAttributes,
  BuyinBalanceLinkCreationAttributes,
  BuyinContractLinkAttributes,
  BuyinContractLinkCreationAttributes,
  BuyinSelloutGlLinkAttributes,
  BuyinSelloutGlLinkCreationAttributes,
  BuyinSelloutGlbsGroupAttributes,
  BuyinSelloutGlbsGroupCreationAttributes,
  CompanyAttributes,
  CompanyCreationAttributes,
  CompanyBookAttributes,
  CompanyBookCreationAttributes,
  CompanyBookTypeAttributes,
  CompanyBookTypeCreationAttributes,
  CompanyCostCentreAttributes,
  CompanyCostCentreCreationAttributes,
  CompanyCostCentreLnkAttributes,
  CompanyCostCentreLnkCreationAttributes,
  CompanyLinkAttributes,
  CompanyLinkCreationAttributes,
  CompanyLobAttributes,
  CompanyLobCreationAttributes,
  CompanyLobLnkAttributes,
  CompanyLobLnkCreationAttributes,
  CompanyLobTypeAttributes,
  CompanyLobTypeCreationAttributes,
  CrmAgreementLinkAttributes,
  CrmAgreementLinkCreationAttributes,
  CrmContractLinkAttributes,
  CrmContractLinkCreationAttributes,
  CrmGuarPosAttributes,
  CrmGuarPosCreationAttributes,
  CrmInstrumentListAttributes,
  CrmInstrumentListCreationAttributes,
  CrmInvptyLinkAttributes,
  CrmInvptyLinkCreationAttributes,
  CrmNetagrDetAttributes,
  CrmNetagrDetCreationAttributes,
  CrmNetagrLinkAttributes,
  CrmNetagrLinkCreationAttributes,
  CrmProductLinkAttributes,
  CrmProductLinkCreationAttributes,
  DomsAccrualBasisAttributes,
  DomsAccrualBasisCreationAttributes,
  DomsAmortizingTypeAttributes,
  DomsAmortizingTypeCreationAttributes,
  DomsBalanceTypeAttributes,
  DomsBalanceTypeCreationAttributes,
  DomsBankingFacilityTypeAttributes,
  DomsBankingFacilityTypeCreationAttributes,
  DomsBankingTradingAttributes,
  DomsBankingTradingCreationAttributes,
  DomsBankruptcyRemoteAttributes,
  DomsBankruptcyRemoteCreationAttributes,
  DomsBranchSubsidiaryAttributes,
  DomsBranchSubsidiaryCreationAttributes,
  DomsBrokenPeriodTypeAttributes,
  DomsBrokenPeriodTypeCreationAttributes,
  DomsCalcDayConventionAttributes,
  DomsCalcDayConventionCreationAttributes,
  DomsCalcDayRuleAttributes,
  DomsCalcDayRuleCreationAttributes,
  DomsCalcFrequencyAttributes,
  DomsCalcFrequencyCreationAttributes,
  DomsCapTypeAttributes,
  DomsCapTypeCreationAttributes,
  DomsCashFlowApproachAttributes,
  DomsCashFlowApproachCreationAttributes,
  DomsCashFlowQualityAttributes,
  DomsCashFlowQualityCreationAttributes,
  DomsCashFlowTypeAttributes,
  DomsCashFlowTypeCreationAttributes,
  DomsCcpExposureTypeAttributes,
  DomsCcpExposureTypeCreationAttributes,
  DomsCcyConvTypeAttributes,
  DomsCcyConvTypeCreationAttributes,
  DomsCinstCalcRuleAttributes,
  DomsCinstCalcRuleCreationAttributes,
  DomsCinstRuleAnnuityAfterMatAttributes,
  DomsCinstRuleAnnuityAfterMatCreationAttributes,
  DomsClientProprietaryAttributes,
  DomsClientProprietaryCreationAttributes,
  DomsCollContractTypeAttributes,
  DomsCollContractTypeCreationAttributes,
  DomsCollateralModeAttributes,
  DomsCollateralModeCreationAttributes,
  DomsCommittedAttributes,
  DomsCommittedCreationAttributes,
  DomsCompoundTypeAttributes,
  DomsCompoundTypeCreationAttributes,
  DomsConsolidationTypeAttributes,
  DomsConsolidationTypeCreationAttributes,
  DomsDefermentContextAttributes,
  DomsDefermentContextCreationAttributes,
  DomsDefermentMethodAttributes,
  DomsDefermentMethodCreationAttributes,
  DomsDeliveryTypeAttributes,
  DomsDeliveryTypeCreationAttributes,
  DomsDerivativeMultiplierTypeAttributes,
  DomsDerivativeMultiplierTypeCreationAttributes,
  DomsDiscountMethodAttributes,
  DomsDiscountMethodCreationAttributes,
  DomsDistributionChannelAttributes,
  DomsDistributionChannelCreationAttributes,
  DomsFacilityLiqTypeAttributes,
  DomsFacilityLiqTypeCreationAttributes,
  DomsFacilityPurposeAttributes,
  DomsFacilityPurposeCreationAttributes,
  DomsFacilityTypeAttributes,
  DomsFacilityTypeCreationAttributes,
  DomsFairValueOptionAttributes,
  DomsFairValueOptionCreationAttributes,
  DomsFixingRuleAttributes,
  DomsFixingRuleCreationAttributes,
  DomsForbearanceMeasuresAttributes,
  DomsForbearanceMeasuresCreationAttributes,
  DomsGivenReceivedAttributes,
  DomsGivenReceivedCreationAttributes,
  DomsGlClassAttributes,
  DomsGlClassCreationAttributes,
  DomsGlNatureAttributes,
  DomsGlNatureCreationAttributes,
  DomsHedgeAccountingTypeAttributes,
  DomsHedgeAccountingTypeCreationAttributes,
  DomsIncomeTypeAttributes,
  DomsIncomeTypeCreationAttributes,
  DomsIndustrySectorTypeAttributes,
  DomsIndustrySectorTypeCreationAttributes,
  DomsInvptyStatusAttributes,
  DomsInvptyStatusCreationAttributes,
  DomsLongShortAttributes,
  DomsLongShortCreationAttributes,
  DomsMarginExcessTypeAttributes,
  DomsMarginExcessTypeCreationAttributes,
  DomsMarginTypeAttributes,
  DomsMarginTypeCreationAttributes,
  DomsNettingClassAttributes,
  DomsNettingClassCreationAttributes,
  DomsOverlappingPriorityAttributes,
  DomsOverlappingPriorityCreationAttributes,
  DomsParticipationFlagAttributes,
  DomsParticipationFlagCreationAttributes,
  DomsParticipationLinkAttributes,
  DomsParticipationLinkCreationAttributes,
  DomsPayReceiveAttributes,
  DomsPayReceiveCreationAttributes,
  DomsPenaltyCalcMethodAttributes,
  DomsPenaltyCalcMethodCreationAttributes,
  DomsPerformingStatusAttributes,
  DomsPerformingStatusCreationAttributes,
  DomsRateTypeAttributes,
  DomsRateTypeCreationAttributes,
  DomsRepartitionMethodAttributes,
  DomsRepartitionMethodCreationAttributes,
  DomsRmgtFacilityAttributes,
  DomsRmgtFacilityCreationAttributes,
  DomsRollingConventionAttributes,
  DomsRollingConventionCreationAttributes,
  DomsSecurityStatusAttributes,
  DomsSecurityStatusCreationAttributes,
  DomsSeniorityAttributes,
  DomsSeniorityCreationAttributes,
  DomsServicingTypeAttributes,
  DomsServicingTypeCreationAttributes,
  DomsSettlementModeAttributes,
  DomsSettlementModeCreationAttributes,
  DomsStatementTypeAttributes,
  DomsStatementTypeCreationAttributes,
  DomsTargetTypeAttributes,
  DomsTargetTypeCreationAttributes,
  DomsTaxInvptyTypeAttributes,
  DomsTaxInvptyTypeCreationAttributes,
  DomsTaxStatusAttributes,
  DomsTaxStatusCreationAttributes,
  DomsTransferredAttributes,
  DomsTransferredCreationAttributes,
  DomsTrueFalseAttributes,
  DomsTrueFalseCreationAttributes,
  DomsUnderlyingClassificationAttributes,
  DomsUnderlyingClassificationCreationAttributes,
  DomsUnderlyingFamilyAttributes,
  DomsUnderlyingFamilyCreationAttributes,
  FcmgtBorrowingGroupAttributes,
  FcmgtBorrowingGroupCreationAttributes,
  FcmgtFacilityBgAttributes,
  FcmgtFacilityBgCreationAttributes,
  FcmgtFacilityCodeAttributes,
  FcmgtFacilityCodeCreationAttributes,
  FcmgtFacilityInvptyAttributes,
  FcmgtFacilityInvptyCreationAttributes,
  FcmgtGroupFacilityLinkAttributes,
  FcmgtGroupFacilityLinkCreationAttributes,
  FcmgtProductAttributes,
  FcmgtProductCreationAttributes,
  FcmgtProductFacilityLinkAttributes,
  FcmgtProductFacilityLinkCreationAttributes,
  FcmgtProductGroupAttributes,
  FcmgtProductGroupCreationAttributes,
  FcmgtProductLinkAttributes,
  FcmgtProductLinkCreationAttributes,
  FcmgtSubordFacAttributes,
  FcmgtSubordFacCreationAttributes,
  FcmgtUtilizationAAttributes,
  FcmgtUtilizationACreationAttributes,
  FcmgtUtilizationBAttributes,
  FcmgtUtilizationBCreationAttributes,
  GenldgAccountGroupAttributes,
  GenldgAccountGroupCreationAttributes,
  GenldgAccountPlanAttributes,
  GenldgAccountPlanCreationAttributes,
  GenldgBsJournalAttributes,
  GenldgBsJournalCreationAttributes,
  GenldgGaapCodeAttributes,
  GenldgGaapCodeCreationAttributes,
  GenldgGaapPlanAttributes,
  GenldgGaapPlanCreationAttributes,
  GenldgGlbsPosAttributes,
  GenldgGlbsPosCreationAttributes,
  GenldgGrcaAverageMapAttributes,
  GenldgGrcaAverageMapCreationAttributes,
  GenldgGrcaPlanAttributes,
  GenldgGrcaPlanCreationAttributes,
  GenldgGrcaPrimaryMapAttributes,
  GenldgGrcaPrimaryMapCreationAttributes,
  GenldgInvptyLinkAttributes,
  GenldgInvptyLinkCreationAttributes,
  InvptyDetAttributes,
  InvptyDetCreationAttributes,
  InvptyExtCodAttributes,
  InvptyExtCodCreationAttributes,
  InvptyExtCodCodifAttributes,
  InvptyExtCodCodifCreationAttributes,
  InvptyFnclsAttributes,
  InvptyFnclsCreationAttributes,
  InvptyLinkAttributes,
  InvptyLinkCreationAttributes,
  InvptyLinkCodifAttributes,
  InvptyLinkCodifCreationAttributes,
  InvptyLinkTypeAttributes,
  InvptyLinkTypeCreationAttributes,
  InvptyRtngAgcyAttributes,
  InvptyRtngAgcyCreationAttributes,
  InvptyRtngAgcyRtsLnkAttributes,
  InvptyRtngAgcyRtsLnkCreationAttributes,
  InvptyRtngAgcyRtsStrAttributes,
  InvptyRtngAgcyRtsStrCreationAttributes,
  InvptyRtngCrdAttributes,
  InvptyRtngCrdCreationAttributes,
  InvptyTypeAttributes,
  InvptyTypeCreationAttributes,
  InvptyTypeCodifAttributes,
  InvptyTypeCodifCreationAttributes,
  InvptyTypeLnkAttributes,
  InvptyTypeLnkCreationAttributes,
  InvptyTypeLrgcoprAttributes,
  InvptyTypeLrgcoprCreationAttributes,
  MktdEodCurveAttributes,
  MktdEodCurveCreationAttributes,
  MktdEodPriceAttributes,
  MktdEodPriceCreationAttributes,
  MktdSecurityAttributes,
  MktdSecurityCreationAttributes,
  PnlFeeincDetAttributes,
  PnlFeeincDetCreationAttributes,
  PnlGmplexClcAttributes,
  PnlGmplexClcCreationAttributes,
  PnlGmplexDetAttributes,
  PnlGmplexDetCreationAttributes,
  PnlInterestincClcAttributes,
  PnlInterestincClcCreationAttributes,
  PnlOperincCsfAttributes,
  PnlOperincCsfCreationAttributes,
  PnlOperincCsfLinkAttributes,
  PnlOperincCsfLinkCreationAttributes,
  PnlOperincDetAttributes,
  PnlOperincDetCreationAttributes,
  PortContractListAttributes,
  PortContractListCreationAttributes,
  PortDsecCsfAttributes,
  PortDsecCsfCreationAttributes,
  PortDsecMovAttributes,
  PortDsecMovCreationAttributes,
  PortDsecPosAttributes,
  PortDsecPosCreationAttributes,
  PortFctyLnkAttributes,
  PortFctyLnkCreationAttributes,
  PortFctyMovAttributes,
  PortFctyMovCreationAttributes,
  PortFctyPosAttributes,
  PortFctyPosCreationAttributes,
  PortFincCsfAttributes,
  PortFincCsfCreationAttributes,
  PortFincMovAttributes,
  PortFincMovCreationAttributes,
  PortFincPosAttributes,
  PortFincPosCreationAttributes,
  PortFoexCsfAttributes,
  PortFoexCsfCreationAttributes,
  PortFoexMovAttributes,
  PortFoexMovCreationAttributes,
  PortFoexPosAttributes,
  PortFoexPosCreationAttributes,
  PortFutuCsfAttributes,
  PortFutuCsfCreationAttributes,
  PortFutuMovAttributes,
  PortFutuMovCreationAttributes,
  PortFutuPosAttributes,
  PortFutuPosCreationAttributes,
  PortGuarMovAttributes,
  PortGuarMovCreationAttributes,
  PortGuarPosAttributes,
  PortGuarPosCreationAttributes,
  PortHedgeLnkAttributes,
  PortHedgeLnkCreationAttributes,
  PortLoanCsfAttributes,
  PortLoanCsfCreationAttributes,
  PortLoanMovAttributes,
  PortLoanMovCreationAttributes,
  PortLoanPosAttributes,
  PortLoanPosCreationAttributes,
  PortNdfsCsfAttributes,
  PortNdfsCsfCreationAttributes,
  PortNdfsMovAttributes,
  PortNdfsMovCreationAttributes,
  PortNdfsPosAttributes,
  PortNdfsPosCreationAttributes,
  PortNostroCsfAttributes,
  PortNostroCsfCreationAttributes,
  PortNostroPosAttributes,
  PortNostroPosCreationAttributes,
  PortOtherCsfAttributes,
  PortOtherCsfCreationAttributes,
  PortOtherPosAttributes,
  PortOtherPosCreationAttributes,
  PortRecvCsfAttributes,
  PortRecvCsfCreationAttributes,
  PortRecvLnkAttributes,
  PortRecvLnkCreationAttributes,
  PortRecvMovAttributes,
  PortRecvMovCreationAttributes,
  PortRecvPosAttributes,
  PortRecvPosCreationAttributes,
  PortRepoCsfAttributes,
  PortRepoCsfCreationAttributes,
  PortRepoDetAttributes,
  PortRepoDetCreationAttributes,
  PortRepoMovAttributes,
  PortRepoMovCreationAttributes,
  PortRepoPosAttributes,
  PortRepoPosCreationAttributes,
  PortSwapCsfAttributes,
  PortSwapCsfCreationAttributes,
  PortSwapMovAttributes,
  PortSwapMovCreationAttributes,
  PortSwapPosAttributes,
  PortSwapPosCreationAttributes,
  PortThirdPartyLnkAttributes,
  PortThirdPartyLnkCreationAttributes,
  PortVostroCsfAttributes,
  PortVostroCsfCreationAttributes,
  PortVostroPosAttributes,
  PortVostroPosCreationAttributes,
  ProductAttributes,
  ProductCreationAttributes,
  ProductExtCodAttributes,
  ProductExtCodCreationAttributes,
  ProductHsbcGrpAttributes,
  ProductHsbcGrpCreationAttributes,
  ProductHsbcGrpLinkAttributes,
  ProductHsbcGrpLinkCreationAttributes,
  ReconBzdfAggregationAttributes,
  ReconBzdfAggregationCreationAttributes,
  ReconBzdfContractLoadAttributes,
  ReconBzdfContractLoadCreationAttributes,
  ReconBzdfMapAttributes,
  ReconBzdfMapCreationAttributes,
  ReconBzdfPointAttributes,
  ReconBzdfPointCreationAttributes,
  ReconDimensionAttributes,
  ReconDimensionCreationAttributes,
  ReconDimensionGroupAttributes,
  ReconDimensionGroupCreationAttributes,
  ReconGlAggregationAttributes,
  ReconGlAggregationCreationAttributes,
  ReconGlPointAttributes,
  ReconGlPointCreationAttributes,
  ReconMathOperatorAttributes,
  ReconMathOperatorCreationAttributes,
  ReconMetricAttributes,
  ReconMetricCreationAttributes,
  ReconResultAttributes,
  ReconResultCreationAttributes,
  SysAdhocHolidayAttributes,
  SysAdhocHolidayCreationAttributes,
  SysCalendarAttributes,
  SysCalendarCreationAttributes,
  SysCountryAttributes,
  SysCountryCreationAttributes,
  SysCountryCcyLnkAttributes,
  SysCountryCcyLnkCreationAttributes,
  SysCurrencyAttributes,
  SysCurrencyCreationAttributes,
  SysCurveAttributes,
  SysCurveCreationAttributes,
  SysCurveUnderlyingLinkAttributes,
  SysCurveUnderlyingLinkCreationAttributes,
  SysUnderlyingAttributes,
  SysUnderlyingCreationAttributes,
  SysUnderlyingTypeAttributes,
  SysUnderlyingTypeCreationAttributes,
  TaxBankAccountInfoAttributes,
  TaxBankAccountInfoCreationAttributes,
  TaxConsolTypeAttributes,
  TaxConsolTypeCreationAttributes,
  TaxEntityAdditionalInfoAttributes,
  TaxEntityAdditionalInfoCreationAttributes,
  TaxExcemptionTypeAttributes,
  TaxExcemptionTypeCreationAttributes,
  TaxExemptListServiceAttributes,
  TaxExemptListServiceCreationAttributes,
  TaxExemptMunicipalityAttributes,
  TaxExemptMunicipalityCreationAttributes,
  TaxExemptionAttributes,
  TaxExemptionCreationAttributes,
  TaxForeignPersonAttributes,
  TaxForeignPersonCreationAttributes,
  TaxFormOfPaymentAttributes,
  TaxFormOfPaymentCreationAttributes,
  TaxListAttributes,
  TaxListCreationAttributes,
  TaxTypeAttributes,
  TaxTypeCreationAttributes
}

export function initModels (sequelize: Sequelize) {
  const DomsSystemType = _DomsSystemType.initModel(sequelize)
  const SysExternalSystem = _SysExternalSystem.initModel(sequelize)
  const AlcmCapitalAccountParam = _AlcmCapitalAccountParam.initModel(sequelize)
  const AlcmCapitalProductParam = _AlcmCapitalProductParam.initModel(sequelize)
  const AlcmCapitalRegulatoryType = _AlcmCapitalRegulatoryType.initModel(sequelize)
  const AlcmCpadEadBase = _AlcmCpadEadBase.initModel(sequelize)
  const AlcmDloAcctGroup = _AlcmDloAcctGroup.initModel(sequelize)
  const AlcmDloLelExceptProducts = _AlcmDloLelExceptProducts.initModel(sequelize)
  const AlcmDloTb01 = _AlcmDloTb01.initModel(sequelize)
  const AlcmDloTb02 = _AlcmDloTb02.initModel(sequelize)
  const AlcmDloTb03Cpad = _AlcmDloTb03Cpad.initModel(sequelize)
  const AlcmDloTb03Limimob = _AlcmDloTb03Limimob.initModel(sequelize)
  const AlcmDloTb03Opad = _AlcmDloTb03Opad.initModel(sequelize)
  const AlcmDloTb03Pr = _AlcmDloTb03Pr.initModel(sequelize)
  const AlcmDloTb03Ra = _AlcmDloTb03Ra.initModel(sequelize)
  const AlcmDloTb04 = _AlcmDloTb04.initModel(sequelize)
  const AlcmDloTb05 = _AlcmDloTb05.initModel(sequelize)
  const AlcmDloTb06 = _AlcmDloTb06.initModel(sequelize)
  const AlcmDloTb07 = _AlcmDloTb07.initModel(sequelize)
  const AlcmDloTb09 = _AlcmDloTb09.initModel(sequelize)
  const AlcmDloTb10 = _AlcmDloTb10.initModel(sequelize)
  const AlcmDloTb11 = _AlcmDloTb11.initModel(sequelize)
  const AlcmDloTb11A = _AlcmDloTb11A.initModel(sequelize)
  const AlcmDloTb12 = _AlcmDloTb12.initModel(sequelize)
  const AlcmDloTb13 = _AlcmDloTb13.initModel(sequelize)
  const AlcmDloTb14 = _AlcmDloTb14.initModel(sequelize)
  const AlcmDloTb19 = _AlcmDloTb19.initModel(sequelize)
  const AlcmDloTb23 = _AlcmDloTb23.initModel(sequelize)
  const AlcmDloTb24 = _AlcmDloTb24.initModel(sequelize)
  const AlcmDloTb25 = _AlcmDloTb25.initModel(sequelize)
  const AlcmDloTb26 = _AlcmDloTb26.initModel(sequelize)
  const AlcmDloTb28 = _AlcmDloTb28.initModel(sequelize)
  const AlcmDloTb28D = _AlcmDloTb28D.initModel(sequelize)
  const AlcmDloTb29 = _AlcmDloTb29.initModel(sequelize)
  const AlcmDloTb30 = _AlcmDloTb30.initModel(sequelize)
  const AlcmDloTb31 = _AlcmDloTb31.initModel(sequelize)
  const AlcmDloTb31A = _AlcmDloTb31A.initModel(sequelize)
  const AlcmDloTb32 = _AlcmDloTb32.initModel(sequelize)
  const AlcmDloTb33 = _AlcmDloTb33.initModel(sequelize)
  const AlcmDloTb34 = _AlcmDloTb34.initModel(sequelize)
  const AlcmDloTb35 = _AlcmDloTb35.initModel(sequelize)
  const AlcmDloTb36 = _AlcmDloTb36.initModel(sequelize)
  const AlcmDloTb37 = _AlcmDloTb37.initModel(sequelize)
  const AlcmDloTb38 = _AlcmDloTb38.initModel(sequelize)
  const AlcmDloTb39 = _AlcmDloTb39.initModel(sequelize)
  const AlcmDloTb42 = _AlcmDloTb42.initModel(sequelize)
  const AlcmDloTb43 = _AlcmDloTb43.initModel(sequelize)
  const AlcmDloTb44 = _AlcmDloTb44.initModel(sequelize)
  const AlcmDloTb46 = _AlcmDloTb46.initModel(sequelize)
  const AlcmDloTb47 = _AlcmDloTb47.initModel(sequelize)
  const AlcmLiqDrlAccount = _AlcmLiqDrlAccount.initModel(sequelize)
  const AlcmLiqDrlAcctGrp = _AlcmLiqDrlAcctGrp.initModel(sequelize)
  const AlcmLiqDrlDoctBalanceLadder = _AlcmLiqDrlDoctBalanceLadder.initModel(sequelize)
  const AlcmLiqDrlDoctElement = _AlcmLiqDrlDoctElement.initModel(sequelize)
  const AlcmLiqDrlDoctMaturityLadder = _AlcmLiqDrlDoctMaturityLadder.initModel(sequelize)
  const AlcmLiqDrlDoctParam = _AlcmLiqDrlDoctParam.initModel(sequelize)
  const AlcmLiqDrlDoctParamValue = _AlcmLiqDrlDoctParamValue.initModel(sequelize)
  const AlcmLiqDrlDoctType = _AlcmLiqDrlDoctType.initModel(sequelize)
  const AlcmLiqNsfrAccount = _AlcmLiqNsfrAccount.initModel(sequelize)
  const AlcmLiqNsfrGroup = _AlcmLiqNsfrGroup.initModel(sequelize)
  const AlcmLiqNsfrProductParam = _AlcmLiqNsfrProductParam.initModel(sequelize)
  const AlcmLiqNsfrQuality = _AlcmLiqNsfrQuality.initModel(sequelize)
  const AlcmLiqNsfrTimeBucketStruct = _AlcmLiqNsfrTimeBucketStruct.initModel(sequelize)
  const AlcmLiqNsfrWeight = _AlcmLiqNsfrWeight.initModel(sequelize)
  const AlcmProductGroup = _AlcmProductGroup.initModel(sequelize)
  const BuyinBalanceLink = _BuyinBalanceLink.initModel(sequelize)
  const BuyinContractLink = _BuyinContractLink.initModel(sequelize)
  const BuyinSelloutGlLink = _BuyinSelloutGlLink.initModel(sequelize)
  const BuyinSelloutGlbsGroup = _BuyinSelloutGlbsGroup.initModel(sequelize)
  const Company = _Company.initModel(sequelize)
  const CompanyBook = _CompanyBook.initModel(sequelize)
  const CompanyBookType = _CompanyBookType.initModel(sequelize)
  const CompanyCostCentre = _CompanyCostCentre.initModel(sequelize)
  const CompanyCostCentreLnk = _CompanyCostCentreLnk.initModel(sequelize)
  const CompanyLink = _CompanyLink.initModel(sequelize)
  const CompanyLob = _CompanyLob.initModel(sequelize)
  const CompanyLobLnk = _CompanyLobLnk.initModel(sequelize)
  const CompanyLobType = _CompanyLobType.initModel(sequelize)
  const CrmAgreementLink = _CrmAgreementLink.initModel(sequelize)
  const CrmContractLink = _CrmContractLink.initModel(sequelize)
  const CrmGuarPos = _CrmGuarPos.initModel(sequelize)
  const CrmInstrumentList = _CrmInstrumentList.initModel(sequelize)
  const CrmInvptyLink = _CrmInvptyLink.initModel(sequelize)
  const CrmNetagrDet = _CrmNetagrDet.initModel(sequelize)
  const CrmNetagrLink = _CrmNetagrLink.initModel(sequelize)
  const CrmProductLink = _CrmProductLink.initModel(sequelize)
  const DomsAccrualBasis = _DomsAccrualBasis.initModel(sequelize)
  const DomsAmortizingType = _DomsAmortizingType.initModel(sequelize)
  const DomsBalanceType = _DomsBalanceType.initModel(sequelize)
  const DomsBankingFacilityType = _DomsBankingFacilityType.initModel(sequelize)
  const DomsBankingTrading = _DomsBankingTrading.initModel(sequelize)
  const DomsBankruptcyRemote = _DomsBankruptcyRemote.initModel(sequelize)
  const DomsBranchSubsidiary = _DomsBranchSubsidiary.initModel(sequelize)
  const DomsBrokenPeriodType = _DomsBrokenPeriodType.initModel(sequelize)
  const DomsCalcDayConvention = _DomsCalcDayConvention.initModel(sequelize)
  const DomsCalcDayRule = _DomsCalcDayRule.initModel(sequelize)
  const DomsCalcFrequency = _DomsCalcFrequency.initModel(sequelize)
  const DomsCapType = _DomsCapType.initModel(sequelize)
  const DomsCashFlowApproach = _DomsCashFlowApproach.initModel(sequelize)
  const DomsCashFlowQuality = _DomsCashFlowQuality.initModel(sequelize)
  const DomsCashFlowType = _DomsCashFlowType.initModel(sequelize)
  const DomsCcpExposureType = _DomsCcpExposureType.initModel(sequelize)
  const DomsCcyConvType = _DomsCcyConvType.initModel(sequelize)
  const DomsCinstCalcRule = _DomsCinstCalcRule.initModel(sequelize)
  const DomsCinstRuleAnnuityAfterMat = _DomsCinstRuleAnnuityAfterMat.initModel(sequelize)
  const DomsClientProprietary = _DomsClientProprietary.initModel(sequelize)
  const DomsCollContractType = _DomsCollContractType.initModel(sequelize)
  const DomsCollateralMode = _DomsCollateralMode.initModel(sequelize)
  const DomsCommitted = _DomsCommitted.initModel(sequelize)
  const DomsCompoundType = _DomsCompoundType.initModel(sequelize)
  const DomsConsolidationType = _DomsConsolidationType.initModel(sequelize)
  const DomsDefermentContext = _DomsDefermentContext.initModel(sequelize)
  const DomsDefermentMethod = _DomsDefermentMethod.initModel(sequelize)
  const DomsDeliveryType = _DomsDeliveryType.initModel(sequelize)
  const DomsDerivativeMultiplierType = _DomsDerivativeMultiplierType.initModel(sequelize)
  const DomsDiscountMethod = _DomsDiscountMethod.initModel(sequelize)
  const DomsDistributionChannel = _DomsDistributionChannel.initModel(sequelize)
  const DomsFacilityLiqType = _DomsFacilityLiqType.initModel(sequelize)
  const DomsFacilityPurpose = _DomsFacilityPurpose.initModel(sequelize)
  const DomsFacilityType = _DomsFacilityType.initModel(sequelize)
  const DomsFairValueOption = _DomsFairValueOption.initModel(sequelize)
  const DomsFixingRule = _DomsFixingRule.initModel(sequelize)
  const DomsForbearanceMeasures = _DomsForbearanceMeasures.initModel(sequelize)
  const DomsGivenReceived = _DomsGivenReceived.initModel(sequelize)
  const DomsGlClass = _DomsGlClass.initModel(sequelize)
  const DomsGlNature = _DomsGlNature.initModel(sequelize)
  const DomsHedgeAccountingType = _DomsHedgeAccountingType.initModel(sequelize)
  const DomsIncomeType = _DomsIncomeType.initModel(sequelize)
  const DomsIndustrySectorType = _DomsIndustrySectorType.initModel(sequelize)
  const DomsInvptyStatus = _DomsInvptyStatus.initModel(sequelize)
  const DomsLongShort = _DomsLongShort.initModel(sequelize)
  const DomsMarginExcessType = _DomsMarginExcessType.initModel(sequelize)
  const DomsMarginType = _DomsMarginType.initModel(sequelize)
  const DomsNettingClass = _DomsNettingClass.initModel(sequelize)
  const DomsOverlappingPriority = _DomsOverlappingPriority.initModel(sequelize)
  const DomsParticipationFlag = _DomsParticipationFlag.initModel(sequelize)
  const DomsParticipationLink = _DomsParticipationLink.initModel(sequelize)
  const DomsPayReceive = _DomsPayReceive.initModel(sequelize)
  const DomsPenaltyCalcMethod = _DomsPenaltyCalcMethod.initModel(sequelize)
  const DomsPerformingStatus = _DomsPerformingStatus.initModel(sequelize)
  const DomsRateType = _DomsRateType.initModel(sequelize)
  const DomsRepartitionMethod = _DomsRepartitionMethod.initModel(sequelize)
  const DomsRmgtFacility = _DomsRmgtFacility.initModel(sequelize)
  const DomsRollingConvention = _DomsRollingConvention.initModel(sequelize)
  const DomsSecurityStatus = _DomsSecurityStatus.initModel(sequelize)
  const DomsSeniority = _DomsSeniority.initModel(sequelize)
  const DomsServicingType = _DomsServicingType.initModel(sequelize)
  const DomsSettlementMode = _DomsSettlementMode.initModel(sequelize)
  const DomsStatementType = _DomsStatementType.initModel(sequelize)
  const DomsSubType = _DomsSubType.initModel(sequelize)
  const DomsTargetType = _DomsTargetType.initModel(sequelize)
  const DomsTaxInvptyType = _DomsTaxInvptyType.initModel(sequelize)
  const DomsTaxStatus = _DomsTaxStatus.initModel(sequelize)
  const DomsTransferred = _DomsTransferred.initModel(sequelize)
  const DomsTrueFalse = _DomsTrueFalse.initModel(sequelize)
  const DomsUnderlyingClassification = _DomsUnderlyingClassification.initModel(sequelize)
  const DomsUnderlyingFamily = _DomsUnderlyingFamily.initModel(sequelize)
  const FcmgtBorrowingGroup = _FcmgtBorrowingGroup.initModel(sequelize)
  const FcmgtFacilityBg = _FcmgtFacilityBg.initModel(sequelize)
  const FcmgtFacilityCode = _FcmgtFacilityCode.initModel(sequelize)
  const FcmgtFacilityInvpty = _FcmgtFacilityInvpty.initModel(sequelize)
  const FcmgtGroupFacilityLink = _FcmgtGroupFacilityLink.initModel(sequelize)
  const FcmgtProduct = _FcmgtProduct.initModel(sequelize)
  const FcmgtProductFacilityLink = _FcmgtProductFacilityLink.initModel(sequelize)
  const FcmgtProductGroup = _FcmgtProductGroup.initModel(sequelize)
  const FcmgtProductLink = _FcmgtProductLink.initModel(sequelize)
  const FcmgtSubordFac = _FcmgtSubordFac.initModel(sequelize)
  const FcmgtUtilizationA = _FcmgtUtilizationA.initModel(sequelize)
  const FcmgtUtilizationB = _FcmgtUtilizationB.initModel(sequelize)
  const GenldgAccountGroup = _GenldgAccountGroup.initModel(sequelize)
  const GenldgAccountPlan = _GenldgAccountPlan.initModel(sequelize)
  const GenldgBsJournal = _GenldgBsJournal.initModel(sequelize)
  const GenldgGaapCode = _GenldgGaapCode.initModel(sequelize)
  const GenldgGaapPlan = _GenldgGaapPlan.initModel(sequelize)
  const GenldgGlbsPos = _GenldgGlbsPos.initModel(sequelize)
  const GenldgGrcaAverageMap = _GenldgGrcaAverageMap.initModel(sequelize)
  const GenldgGrcaPlan = _GenldgGrcaPlan.initModel(sequelize)
  const GenldgGrcaPrimaryMap = _GenldgGrcaPrimaryMap.initModel(sequelize)
  const GenldgInvptyLink = _GenldgInvptyLink.initModel(sequelize)
  const InvptyDet = _InvptyDet.initModel(sequelize)
  const InvptyExtCod = _InvptyExtCod.initModel(sequelize)
  const InvptyExtCodCodif = _InvptyExtCodCodif.initModel(sequelize)
  const InvptyFncls = _InvptyFncls.initModel(sequelize)
  const InvptyLink = _InvptyLink.initModel(sequelize)
  const InvptyLinkCodif = _InvptyLinkCodif.initModel(sequelize)
  const InvptyLinkType = _InvptyLinkType.initModel(sequelize)
  const InvptyRtngAgcy = _InvptyRtngAgcy.initModel(sequelize)
  const InvptyRtngAgcyRtsLnk = _InvptyRtngAgcyRtsLnk.initModel(sequelize)
  const InvptyRtngAgcyRtsStr = _InvptyRtngAgcyRtsStr.initModel(sequelize)
  const InvptyRtngCrd = _InvptyRtngCrd.initModel(sequelize)
  const InvptyType = _InvptyType.initModel(sequelize)
  const InvptyTypeCodif = _InvptyTypeCodif.initModel(sequelize)
  const InvptyTypeLnk = _InvptyTypeLnk.initModel(sequelize)
  const InvptyTypeLrgcopr = _InvptyTypeLrgcopr.initModel(sequelize)
  const MktdEodCurve = _MktdEodCurve.initModel(sequelize)
  const MktdEodPrice = _MktdEodPrice.initModel(sequelize)
  const MktdSecurity = _MktdSecurity.initModel(sequelize)
  const PnlFeeincDet = _PnlFeeincDet.initModel(sequelize)
  const PnlGmplexClc = _PnlGmplexClc.initModel(sequelize)
  const PnlGmplexDet = _PnlGmplexDet.initModel(sequelize)
  const PnlInterestincClc = _PnlInterestincClc.initModel(sequelize)
  const PnlOperincCsf = _PnlOperincCsf.initModel(sequelize)
  const PnlOperincCsfLink = _PnlOperincCsfLink.initModel(sequelize)
  const PnlOperincDet = _PnlOperincDet.initModel(sequelize)
  const PortContractList = _PortContractList.initModel(sequelize)
  const PortDsecCsf = _PortDsecCsf.initModel(sequelize)
  const PortDsecMov = _PortDsecMov.initModel(sequelize)
  const PortDsecPos = _PortDsecPos.initModel(sequelize)
  const PortFctyLnk = _PortFctyLnk.initModel(sequelize)
  const PortFctyMov = _PortFctyMov.initModel(sequelize)
  const PortFctyPos = _PortFctyPos.initModel(sequelize)
  const PortFincCsf = _PortFincCsf.initModel(sequelize)
  const PortFincMov = _PortFincMov.initModel(sequelize)
  const PortFincPos = _PortFincPos.initModel(sequelize)
  const PortFoexCsf = _PortFoexCsf.initModel(sequelize)
  const PortFoexMov = _PortFoexMov.initModel(sequelize)
  const PortFoexPos = _PortFoexPos.initModel(sequelize)
  const PortFutuCsf = _PortFutuCsf.initModel(sequelize)
  const PortFutuMov = _PortFutuMov.initModel(sequelize)
  const PortFutuPos = _PortFutuPos.initModel(sequelize)
  const PortGuarMov = _PortGuarMov.initModel(sequelize)
  const PortGuarPos = _PortGuarPos.initModel(sequelize)
  const PortHedgeLnk = _PortHedgeLnk.initModel(sequelize)
  const PortLoanCsf = _PortLoanCsf.initModel(sequelize)
  const PortLoanMov = _PortLoanMov.initModel(sequelize)
  const PortLoanPos = _PortLoanPos.initModel(sequelize)
  const PortNdfsCsf = _PortNdfsCsf.initModel(sequelize)
  const PortNdfsMov = _PortNdfsMov.initModel(sequelize)
  const PortNdfsPos = _PortNdfsPos.initModel(sequelize)
  const PortNostroCsf = _PortNostroCsf.initModel(sequelize)
  const PortNostroPos = _PortNostroPos.initModel(sequelize)
  const PortOtherCsf = _PortOtherCsf.initModel(sequelize)
  const PortOtherPos = _PortOtherPos.initModel(sequelize)
  const PortRecvCsf = _PortRecvCsf.initModel(sequelize)
  const PortRecvLnk = _PortRecvLnk.initModel(sequelize)
  const PortRecvMov = _PortRecvMov.initModel(sequelize)
  const PortRecvPos = _PortRecvPos.initModel(sequelize)
  const PortRepoCsf = _PortRepoCsf.initModel(sequelize)
  const PortRepoDet = _PortRepoDet.initModel(sequelize)
  const PortRepoMov = _PortRepoMov.initModel(sequelize)
  const PortRepoPos = _PortRepoPos.initModel(sequelize)
  const PortSwapCsf = _PortSwapCsf.initModel(sequelize)
  const PortSwapMov = _PortSwapMov.initModel(sequelize)
  const PortSwapPos = _PortSwapPos.initModel(sequelize)
  const PortThirdPartyLnk = _PortThirdPartyLnk.initModel(sequelize)
  const PortVostroCsf = _PortVostroCsf.initModel(sequelize)
  const PortVostroPos = _PortVostroPos.initModel(sequelize)
  const Product = _Product.initModel(sequelize)
  const ProductExtCod = _ProductExtCod.initModel(sequelize)
  const ProductHsbcGrp = _ProductHsbcGrp.initModel(sequelize)
  const ProductHsbcGrpLink = _ProductHsbcGrpLink.initModel(sequelize)
  const ReconBzdfAggregation = _ReconBzdfAggregation.initModel(sequelize)
  const ReconBzdfContractLoad = _ReconBzdfContractLoad.initModel(sequelize)
  const ReconBzdfMap = _ReconBzdfMap.initModel(sequelize)
  const ReconBzdfPoint = _ReconBzdfPoint.initModel(sequelize)
  const ReconDimension = _ReconDimension.initModel(sequelize)
  const ReconDimensionGroup = _ReconDimensionGroup.initModel(sequelize)
  const ReconGlAggregation = _ReconGlAggregation.initModel(sequelize)
  const ReconGlPoint = _ReconGlPoint.initModel(sequelize)
  const ReconMathOperator = _ReconMathOperator.initModel(sequelize)
  const ReconMetric = _ReconMetric.initModel(sequelize)
  const ReconResult = _ReconResult.initModel(sequelize)
  const SysAdhocHoliday = _SysAdhocHoliday.initModel(sequelize)
  const SysCalendar = _SysCalendar.initModel(sequelize)
  const SysCountry = _SysCountry.initModel(sequelize)
  const SysCountryCcyLnk = _SysCountryCcyLnk.initModel(sequelize)
  const SysCurrency = _SysCurrency.initModel(sequelize)
  const SysCurve = _SysCurve.initModel(sequelize)
  const SysCurveUnderlyingLink = _SysCurveUnderlyingLink.initModel(sequelize)
  const SysUnderlying = _SysUnderlying.initModel(sequelize)
  const SysUnderlyingType = _SysUnderlyingType.initModel(sequelize)
  const TaxBankAccountInfo = _TaxBankAccountInfo.initModel(sequelize)
  const TaxConsolType = _TaxConsolType.initModel(sequelize)
  const TaxEntityAdditionalInfo = _TaxEntityAdditionalInfo.initModel(sequelize)
  const TaxExcemptionType = _TaxExcemptionType.initModel(sequelize)
  const TaxExemptListService = _TaxExemptListService.initModel(sequelize)
  const TaxExemptMunicipality = _TaxExemptMunicipality.initModel(sequelize)
  const TaxExemption = _TaxExemption.initModel(sequelize)
  const TaxForeignPerson = _TaxForeignPerson.initModel(sequelize)
  const TaxFormOfPayment = _TaxFormOfPayment.initModel(sequelize)
  const TaxList = _TaxList.initModel(sequelize)
  const TaxType = _TaxType.initModel(sequelize)

  Company.belongsToMany(Company, { as: 'companyCodeParentCompanies', through: CompanyLink, foreignKey: 'companyCodeChild', otherKey: 'companyCodeParent' })
  Company.belongsToMany(Company, { as: 'companyCodeChildCompanies', through: CompanyLink, foreignKey: 'companyCodeParent', otherKey: 'companyCodeChild' })
  CompanyCostCentre.belongsToMany(CompanyCostCentre, { as: 'costCentreParentCompanyCostCentres', through: CompanyCostCentreLnk, foreignKey: 'costCentreChild', otherKey: 'costCentreParent' })
  CompanyCostCentre.belongsToMany(CompanyCostCentre, { as: 'costCentreChildCompanyCostCentres', through: CompanyCostCentreLnk, foreignKey: 'costCentreParent', otherKey: 'costCentreChild' })
  CompanyLob.belongsToMany(CompanyLob, { as: 'lobCodeParentCompanyLobs', through: CompanyLobLnk, foreignKey: 'lobCodeChild', otherKey: 'lobCodeParent' })
  CompanyLob.belongsToMany(CompanyLob, { as: 'lobCodeChildCompanyLobs', through: CompanyLobLnk, foreignKey: 'lobCodeParent', otherKey: 'lobCodeChild' })
  FcmgtBorrowingGroup.belongsToMany(FcmgtFacilityCode, { as: 'facilityCodeFcmgtFacilityCodes', through: FcmgtFacilityBg, foreignKey: 'borrowingGroupId', otherKey: 'facilityCode' })
  FcmgtBorrowingGroup.belongsToMany(FcmgtFacilityCode, { as: 'facilityCodeFcmgtFacilityCodeFcmgtGroupFacilityLinks', through: FcmgtGroupFacilityLink, foreignKey: 'borrowingGroupId', otherKey: 'facilityCode' })
  FcmgtFacilityCode.belongsToMany(FcmgtBorrowingGroup, { as: 'borrowingGroupIdFcmgtBorrowingGroups', through: FcmgtFacilityBg, foreignKey: 'facilityCode', otherKey: 'borrowingGroupId' })
  FcmgtFacilityCode.belongsToMany(FcmgtBorrowingGroup, { as: 'borrowingGroupIdFcmgtBorrowingGroupFcmgtGroupFacilityLinks', through: FcmgtGroupFacilityLink, foreignKey: 'facilityCode', otherKey: 'borrowingGroupId' })
  FcmgtFacilityCode.belongsToMany(FcmgtProduct, { as: 'carmProductCodeFcmgtProducts', through: FcmgtProductFacilityLink, foreignKey: 'facilityCode', otherKey: 'carmProductCode' })
  FcmgtProduct.belongsToMany(FcmgtFacilityCode, { as: 'facilityCodeFcmgtFacilityCodeFcmgtProductFacilityLinks', through: FcmgtProductFacilityLink, foreignKey: 'carmProductCode', otherKey: 'facilityCode' })
  FcmgtProduct.belongsToMany(InvptyDet, { as: 'invptyCodeInvptyDets', through: FcmgtUtilizationA, foreignKey: 'carmProductCode', otherKey: 'invptyCode' })
  FcmgtProduct.belongsToMany(Product, { as: 'productCodeProductFcmgtProductLinks', through: FcmgtProductLink, foreignKey: 'carmProductCode', otherKey: 'productCode' })
  GenldgAccountPlan.belongsToMany(GenldgGaapCode, { as: 'glGaapCodeGenldgGaapCodes', through: GenldgGaapPlan, foreignKey: 'glAccountCode', otherKey: 'glGaapCode' })
  GenldgAccountPlan.belongsToMany(GenldgGrcaPlan, { as: 'grcaCodeAverageGenldgGrcaPlans', through: GenldgGrcaAverageMap, foreignKey: 'glAccountCode', otherKey: 'grcaCodeAverage' })
  GenldgAccountPlan.belongsToMany(GenldgGrcaPlan, { as: 'grcaCodePrimaryGenldgGrcaPlans', through: GenldgGrcaPrimaryMap, foreignKey: 'glAccountCode', otherKey: 'grcaCodePrimary' })
  GenldgGaapCode.belongsToMany(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlans', through: GenldgGaapPlan, foreignKey: 'glGaapCode', otherKey: 'glAccountCode' })
  GenldgGrcaPlan.belongsToMany(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlanGenldgGrcaAverageMaps', through: GenldgGrcaAverageMap, foreignKey: 'grcaCodeAverage', otherKey: 'glAccountCode' })
  GenldgGrcaPlan.belongsToMany(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlanGenldgGrcaPrimaryMaps', through: GenldgGrcaPrimaryMap, foreignKey: 'grcaCodePrimary', otherKey: 'glAccountCode' })
  InvptyDet.belongsToMany(FcmgtProduct, { as: 'carmProductCodeFcmgtProductFcmgtUtilizationAs', through: FcmgtUtilizationA, foreignKey: 'invptyCode', otherKey: 'carmProductCode' })
  InvptyDet.belongsToMany(InvptyExtCodCodif, { as: 'extCodeCodifierInvptyExtCodCodifs', through: InvptyExtCod, foreignKey: 'invptyCode', otherKey: 'extCodeCodifier' })
  InvptyDet.belongsToMany(InvptyRtngAgcyRtsStr, { as: 'ratingIdInvptyRtngAgcyRtsStrs', through: InvptyRtngCrd, foreignKey: 'invptyCode', otherKey: 'ratingId' })
  InvptyDet.belongsToMany(InvptyTypeCodif, { as: 'invptyTypeCodifierInvptyTypeCodifs', through: InvptyTypeLnk, foreignKey: 'invptyCode', otherKey: 'invptyTypeCodifier' })
  InvptyExtCodCodif.belongsToMany(InvptyDet, { as: 'invptyCodeInvptyDetInvptyExtCods', through: InvptyExtCod, foreignKey: 'extCodeCodifier', otherKey: 'invptyCode' })
  InvptyRtngAgcyRtsStr.belongsToMany(InvptyDet, { as: 'invptyCodeInvptyDetInvptyRtngCrds', through: InvptyRtngCrd, foreignKey: 'ratingId', otherKey: 'invptyCode' })
  InvptyRtngAgcyRtsStr.belongsToMany(InvptyRtngAgcyRtsStr, { as: 'rating2InvptyRtngAgcyRtsStrs', through: InvptyRtngAgcyRtsLnk, foreignKey: 'rating1', otherKey: 'rating2' })
  InvptyRtngAgcyRtsStr.belongsToMany(InvptyRtngAgcyRtsStr, { as: 'rating1InvptyRtngAgcyRtsStrs', through: InvptyRtngAgcyRtsLnk, foreignKey: 'rating2', otherKey: 'rating1' })
  InvptyTypeCodif.belongsToMany(InvptyDet, { as: 'invptyCodeInvptyDetInvptyTypeLnks', through: InvptyTypeLnk, foreignKey: 'invptyTypeCodifier', otherKey: 'invptyCode' })
  Product.belongsToMany(FcmgtProduct, { as: 'carmProductCodeFcmgtProductFcmgtProductLinks', through: FcmgtProductLink, foreignKey: 'productCode', otherKey: 'carmProductCode' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystems', through: CrmGuarPos, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortDsecMovs', through: PortDsecMov, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortDsecPos', through: PortDsecPos, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortFctyMovs', through: PortFctyMov, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortFctyPos', through: PortFctyPos, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortFincMovs', through: PortFincMov, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortFincPos', through: PortFincPos, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortFoexMovs', through: PortFoexMov, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortFoexPos', through: PortFoexPos, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortGuarMovs', through: PortGuarMov, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortGuarPos', through: PortGuarPos, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortLoanMovs', through: PortLoanMov, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortLoanPos', through: PortLoanPos, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortNdfsMovs', through: PortNdfsMov, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortNdfsPos', through: PortNdfsPos, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortSwapMovs', through: PortSwapMov, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  Product.belongsToMany(SysExternalSystem, { as: 'sourceSystemSysExternalSystemPortSwapPos', through: PortSwapPos, foreignKey: 'productCode', otherKey: 'sourceSystem' })
  SysCountry.belongsToMany(SysCurrency, { as: 'currencyCodeSysCurrencies', through: SysCountryCcyLnk, foreignKey: 'countryCodeIso2', otherKey: 'currencyCode' })
  SysCurrency.belongsToMany(SysCountry, { as: 'countryCodeIso2SysCountries', through: SysCountryCcyLnk, foreignKey: 'currencyCode', otherKey: 'countryCodeIso2' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProducts', through: CrmGuarPos, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortDsecMovs', through: PortDsecMov, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortDsecPos', through: PortDsecPos, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortFctyMovs', through: PortFctyMov, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortFctyPos', through: PortFctyPos, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortFincMovs', through: PortFincMov, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortFincPos', through: PortFincPos, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortFoexMovs', through: PortFoexMov, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortFoexPos', through: PortFoexPos, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortGuarMovs', through: PortGuarMov, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortGuarPos', through: PortGuarPos, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortLoanMovs', through: PortLoanMov, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortLoanPos', through: PortLoanPos, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortNdfsMovs', through: PortNdfsMov, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortNdfsPos', through: PortNdfsPos, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortSwapMovs', through: PortSwapMov, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  SysExternalSystem.belongsToMany(Product, { as: 'productCodeProductPortSwapPos', through: PortSwapPos, foreignKey: 'sourceSystem', otherKey: 'productCode' })
  // SysExternalSystem.belongsTo(DomsSystemType, { as: 'domsSystemTypeDomainDomsSystemType', foreignKey: 'domsSystemTypeDomain' })
  // DomsSystemType.hasMany(SysExternalSystem, { as: 'sysExternalSystems', foreignKey: 'domsSystemTypeDomain' })
  SysExternalSystem.belongsTo(DomsSystemType, { as: 'systemTypeDomsSystemType', foreignKey: 'systemType' })
  DomsSystemType.hasMany(SysExternalSystem, { as: 'systemTypeSysExternalSystems', foreignKey: 'systemType' })
  AlcmCpadEadBase.belongsTo(AlcmCapitalRegulatoryType, { as: 'regulatoryTypeAlcmCapitalRegulatoryType', foreignKey: 'regulatoryType' })
  AlcmCapitalRegulatoryType.hasMany(AlcmCpadEadBase, { as: 'alcmCpadEadBases', foreignKey: 'regulatoryType' })
  AlcmDloTb03Cpad.belongsTo(AlcmDloAcctGroup, { as: 'dloAccountGroupAlcmDloAcctGroup', foreignKey: 'dloAccountGroup' })
  AlcmDloAcctGroup.hasMany(AlcmDloTb03Cpad, { as: 'alcmDloTb03Cpads', foreignKey: 'dloAccountGroup' })
  AlcmDloTb03Limimob.belongsTo(AlcmDloAcctGroup, { as: 'dloAccountGroupAlcmDloAcctGroup', foreignKey: 'dloAccountGroup' })
  AlcmDloAcctGroup.hasMany(AlcmDloTb03Limimob, { as: 'alcmDloTb03Limimobs', foreignKey: 'dloAccountGroup' })
  AlcmDloTb03Opad.belongsTo(AlcmDloAcctGroup, { as: 'dloAccountGroupAlcmDloAcctGroup', foreignKey: 'dloAccountGroup' })
  AlcmDloAcctGroup.hasMany(AlcmDloTb03Opad, { as: 'alcmDloTb03Opads', foreignKey: 'dloAccountGroup' })
  AlcmDloTb03Pr.belongsTo(AlcmDloAcctGroup, { as: 'dloAccountGroupAlcmDloAcctGroup', foreignKey: 'dloAccountGroup' })
  AlcmDloAcctGroup.hasMany(AlcmDloTb03Pr, { as: 'alcmDloTb03Prs', foreignKey: 'dloAccountGroup' })
  AlcmDloTb03Ra.belongsTo(AlcmDloAcctGroup, { as: 'dloAccountGroupAlcmDloAcctGroup', foreignKey: 'dloAccountGroup' })
  AlcmDloAcctGroup.hasMany(AlcmDloTb03Ra, { as: 'alcmDloTb03Ras', foreignKey: 'dloAccountGroup' })
  AlcmCapitalAccountParam.belongsTo(AlcmDloTb03Cpad, { as: 'dloAccountCpadAlcmDloTb03Cpad', foreignKey: 'dloAccountCpad' })
  AlcmDloTb03Cpad.hasMany(AlcmCapitalAccountParam, { as: 'alcmCapitalAccountParams', foreignKey: 'dloAccountCpad' })
  AlcmCapitalProductParam.belongsTo(AlcmDloTb03Cpad, { as: 'dloAccountMtmAlcmDloTb03Cpad', foreignKey: 'dloAccountMtm' })
  AlcmDloTb03Cpad.hasMany(AlcmCapitalProductParam, { as: 'alcmCapitalProductParams', foreignKey: 'dloAccountMtm' })
  AlcmCapitalProductParam.belongsTo(AlcmDloTb03Cpad, { as: 'dloAccountOffbalAlcmDloTb03Cpad', foreignKey: 'dloAccountOffbal' })
  AlcmDloTb03Cpad.hasMany(AlcmCapitalProductParam, { as: 'dloAccountOffbalAlcmCapitalProductParams', foreignKey: 'dloAccountOffbal' })
  AlcmCapitalProductParam.belongsTo(AlcmDloTb03Cpad, { as: 'dloAccountOutstandingAlcmDloTb03Cpad', foreignKey: 'dloAccountOutstanding' })
  AlcmDloTb03Cpad.hasMany(AlcmCapitalProductParam, { as: 'dloAccountOutstandingAlcmCapitalProductParams', foreignKey: 'dloAccountOutstanding' })
  AlcmCapitalProductParam.belongsTo(AlcmDloTb03Cpad, { as: 'dloAccountElimAlcmDloTb03Cpad', foreignKey: 'dloAccountElim' })
  AlcmDloTb03Cpad.hasMany(AlcmCapitalProductParam, { as: 'dloAccountElimAlcmCapitalProductParams', foreignKey: 'dloAccountElim' })
  AlcmCapitalAccountParam.belongsTo(AlcmDloTb03Limimob, { as: 'dloAccountLimimobAlcmDloTb03Limimob', foreignKey: 'dloAccountLimimob' })
  AlcmDloTb03Limimob.hasMany(AlcmCapitalAccountParam, { as: 'alcmCapitalAccountParams', foreignKey: 'dloAccountLimimob' })
  AlcmCapitalAccountParam.belongsTo(AlcmDloTb03Opad, { as: 'dloAccountOpadAlcmDloTb03Opad', foreignKey: 'dloAccountOpad' })
  AlcmDloTb03Opad.hasMany(AlcmCapitalAccountParam, { as: 'alcmCapitalAccountParams', foreignKey: 'dloAccountOpad' })
  AlcmCapitalAccountParam.belongsTo(AlcmDloTb03Pr, { as: 'dloAccountPrAlcmDloTb03Pr', foreignKey: 'dloAccountPr' })
  AlcmDloTb03Pr.hasMany(AlcmCapitalAccountParam, { as: 'alcmCapitalAccountParams', foreignKey: 'dloAccountPr' })
  AlcmCapitalAccountParam.belongsTo(AlcmDloTb03Ra, { as: 'dloAccountRaAlcmDloTb03Ra', foreignKey: 'dloAccountRa' })
  AlcmDloTb03Ra.hasMany(AlcmCapitalAccountParam, { as: 'alcmCapitalAccountParams', foreignKey: 'dloAccountRa' })
  AlcmDloTb11.belongsTo(AlcmDloTb11A, { as: 'dloMitigTypeAlcmDloTb11A', foreignKey: 'dloMitigType' })
  AlcmDloTb11A.hasMany(AlcmDloTb11, { as: 'alcmDloTb11S', foreignKey: 'dloMitigType' })
  AlcmCapitalProductParam.belongsTo(AlcmDloTb12, { as: 'dloCpadCft1AlcmDloTb12', foreignKey: 'dloCpadCft1' })
  AlcmDloTb12.hasMany(AlcmCapitalProductParam, { as: 'alcmCapitalProductParams', foreignKey: 'dloCpadCft1' })
  AlcmCapitalProductParam.belongsTo(AlcmDloTb12, { as: 'dloCpadCft2AlcmDloTb12', foreignKey: 'dloCpadCft2' })
  AlcmDloTb12.hasMany(AlcmCapitalProductParam, { as: 'dloCpadCft2AlcmCapitalProductParams', foreignKey: 'dloCpadCft2' })
  AlcmCapitalProductParam.belongsTo(AlcmDloTb12, { as: 'dloCpadCft3AlcmDloTb12', foreignKey: 'dloCpadCft3' })
  AlcmDloTb12.hasMany(AlcmCapitalProductParam, { as: 'dloCpadCft3AlcmCapitalProductParams', foreignKey: 'dloCpadCft3' })
  AlcmCapitalProductParam.belongsTo(AlcmDloTb24, { as: 'dloReconcElimAlcmDloTb24', foreignKey: 'dloReconcElim' })
  AlcmDloTb24.hasMany(AlcmCapitalProductParam, { as: 'alcmCapitalProductParams', foreignKey: 'dloReconcElim' })
  AlcmCapitalProductParam.belongsTo(AlcmDloTb24, { as: 'dloReconcMtmAlcmDloTb24', foreignKey: 'dloReconcMtm' })
  AlcmDloTb24.hasMany(AlcmCapitalProductParam, { as: 'dloReconcMtmAlcmCapitalProductParams', foreignKey: 'dloReconcMtm' })
  AlcmCapitalProductParam.belongsTo(AlcmDloTb24, { as: 'dloReconcOffbalAlcmDloTb24', foreignKey: 'dloReconcOffbal' })
  AlcmDloTb24.hasMany(AlcmCapitalProductParam, { as: 'dloReconcOffbalAlcmCapitalProductParams', foreignKey: 'dloReconcOffbal' })
  AlcmCapitalProductParam.belongsTo(AlcmDloTb24, { as: 'dloReconcOutstandingAlcmDloTb24', foreignKey: 'dloReconcOutstanding' })
  AlcmDloTb24.hasMany(AlcmCapitalProductParam, { as: 'dloReconcOutstandingAlcmCapitalProductParams', foreignKey: 'dloReconcOutstanding' })
  AlcmDloTb28D.belongsTo(AlcmDloTb28, { as: 'dloDomainCdLimitAlcmDloTb28', foreignKey: 'dloDomainCdLimit' })
  AlcmDloTb28.hasMany(AlcmDloTb28D, { as: 'alcmDloTb28Ds', foreignKey: 'dloDomainCdLimit' })
  AlcmDloTb31.belongsTo(AlcmDloTb31A, { as: 'dloHaircutTypeAlcmDloTb31A', foreignKey: 'dloHaircutType' })
  AlcmDloTb31A.hasMany(AlcmDloTb31, { as: 'alcmDloTb31S', foreignKey: 'dloHaircutType' })
  AlcmLiqDrlAccount.belongsTo(AlcmLiqDrlAcctGrp, { as: 'drlAccountGroupAlcmLiqDrlAcctGrp', foreignKey: 'drlAccountGroup' })
  AlcmLiqDrlAcctGrp.hasMany(AlcmLiqDrlAccount, { as: 'alcmLiqDrlAccounts', foreignKey: 'drlAccountGroup' })
  AlcmLiqDrlDoctParamValue.belongsTo(AlcmLiqDrlDoctParam, { as: 'drlDomainAlcmLiqDrlDoctParam', foreignKey: 'drlDomain' })
  AlcmLiqDrlDoctParam.hasMany(AlcmLiqDrlDoctParamValue, { as: 'alcmLiqDrlDoctParamValues', foreignKey: 'drlDomain' })
  AlcmLiqNsfrWeight.belongsTo(AlcmLiqNsfrAccount, { as: 'nsfrAccountAlcmLiqNsfrAccount', foreignKey: 'nsfrAccount' })
  AlcmLiqNsfrAccount.hasMany(AlcmLiqNsfrWeight, { as: 'alcmLiqNsfrWeights', foreignKey: 'nsfrAccount' })
  AlcmLiqNsfrAccount.belongsTo(AlcmLiqNsfrGroup, { as: 'nsfrGroupAlcmLiqNsfrGroup', foreignKey: 'nsfrGroup' })
  AlcmLiqNsfrGroup.hasMany(AlcmLiqNsfrAccount, { as: 'alcmLiqNsfrAccounts', foreignKey: 'nsfrGroup' })
  AlcmLiqNsfrProductParam.belongsTo(AlcmLiqNsfrGroup, { as: 'nsfrGroupAlcmLiqNsfrGroup', foreignKey: 'nsfrGroup' })
  AlcmLiqNsfrGroup.hasMany(AlcmLiqNsfrProductParam, { as: 'alcmLiqNsfrProductParams', foreignKey: 'nsfrGroup' })
  AlcmLiqNsfrProductParam.belongsTo(AlcmLiqNsfrQuality, { as: 'nsfrQualityAlcmLiqNsfrQuality', foreignKey: 'nsfrQuality' })
  AlcmLiqNsfrQuality.hasMany(AlcmLiqNsfrProductParam, { as: 'alcmLiqNsfrProductParams', foreignKey: 'nsfrQuality' })
  AlcmCapitalAccountParam.belongsTo(AlcmProductGroup, { as: 'alcmProductGroupAlcmProductGroup', foreignKey: 'alcmProductGroup' })
  AlcmProductGroup.hasMany(AlcmCapitalAccountParam, { as: 'alcmCapitalAccountParams', foreignKey: 'alcmProductGroup' })
  AlcmCapitalProductParam.belongsTo(AlcmProductGroup, { as: 'alcmProductGroupAlcmProductGroup', foreignKey: 'alcmProductGroup' })
  AlcmProductGroup.hasMany(AlcmCapitalProductParam, { as: 'alcmCapitalProductParams', foreignKey: 'alcmProductGroup' })
  AlcmCpadEadBase.belongsTo(AlcmProductGroup, { as: 'productGroupAlcmProductGroup', foreignKey: 'productGroup' })
  AlcmProductGroup.hasMany(AlcmCpadEadBase, { as: 'alcmCpadEadBases', foreignKey: 'productGroup' })
  AlcmDloLelExceptProducts.belongsTo(AlcmProductGroup, { as: 'alcmProductGroupAlcmProductGroup', foreignKey: 'alcmProductGroup' })
  AlcmProductGroup.hasMany(AlcmDloLelExceptProducts, { as: 'alcmDloLelExceptProducts', foreignKey: 'alcmProductGroup' })
  AlcmLiqNsfrProductParam.belongsTo(AlcmProductGroup, { as: 'alcmProductGroupAlcmProductGroup', foreignKey: 'alcmProductGroup' })
  AlcmProductGroup.hasMany(AlcmLiqNsfrProductParam, { as: 'alcmLiqNsfrProductParams', foreignKey: 'alcmProductGroup' })
  BuyinBalanceLink.belongsTo(BuyinSelloutGlbsGroup, { as: 'selloutGlbsGroupCodeBuyinSelloutGlbsGroup', foreignKey: 'selloutGlbsGroupCode' })
  BuyinSelloutGlbsGroup.hasMany(BuyinBalanceLink, { as: 'buyinBalanceLinks', foreignKey: 'selloutGlbsGroupCode' })
  BuyinSelloutGlLink.belongsTo(BuyinSelloutGlbsGroup, { as: 'buyinGroupCodeBuyinSelloutGlbsGroup', foreignKey: 'buyinGroupCode' })
  BuyinSelloutGlbsGroup.hasMany(BuyinSelloutGlLink, { as: 'buyinSelloutGlLinks', foreignKey: 'buyinGroupCode' })
  CompanyCostCentre.belongsTo(Company, { as: 'companyCodeCompany', foreignKey: 'companyCode' })
  Company.hasMany(CompanyCostCentre, { as: 'companyCostCentres', foreignKey: 'companyCode' })
  CompanyLink.belongsTo(Company, { as: 'companyCodeChildCompany', foreignKey: 'companyCodeChild' })
  Company.hasMany(CompanyLink, { as: 'companyLinks', foreignKey: 'companyCodeChild' })
  CompanyLink.belongsTo(Company, { as: 'companyCodeParentCompany', foreignKey: 'companyCodeParent' })
  Company.hasMany(CompanyLink, { as: 'companyCodeParentCompanyLinks', foreignKey: 'companyCodeParent' })
  CrmInstrumentList.belongsTo(Company, { as: 'crmCompanyCodeCompany', foreignKey: 'crmCompanyCode' })
  Company.hasMany(CrmInstrumentList, { as: 'crmInstrumentLists', foreignKey: 'crmCompanyCode' })
  PortContractList.belongsTo(Company, { as: 'companyCodeCompany', foreignKey: 'companyCode' })
  Company.hasMany(PortContractList, { as: 'portContractLists', foreignKey: 'companyCode' })
  PnlGmplexDet.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PnlGmplexDet, { as: 'pnlGmplexDets', foreignKey: 'bookCode' })
  PnlOperincDet.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PnlOperincDet, { as: 'pnlOperincDets', foreignKey: 'bookCode' })
  PortDsecMov.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'bookCode' })
  PortDsecPos.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'bookCode' })
  PortFincMov.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'bookCode' })
  PortFincPos.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'bookCode' })
  PortFoexMov.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'bookCode' })
  PortFoexPos.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'bookCode' })
  PortFutuMov.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'bookCode' })
  PortFutuPos.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'bookCode' })
  PortNdfsMov.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'bookCode' })
  PortNdfsPos.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'bookCode' })
  PortRepoMov.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'bookCode' })
  PortRepoPos.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'bookCode' })
  PortSwapMov.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'bookCode' })
  PortSwapPos.belongsTo(CompanyBook, { as: 'bookCodeCompanyBook', foreignKey: 'bookCode' })
  CompanyBook.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'bookCode' })
  CompanyBook.belongsTo(CompanyBookType, { as: 'bookTypeLnk', foreignKey: 'bookTypeLnkId' })
  CompanyBookType.hasMany(CompanyBook, { as: 'companyBooks', foreignKey: 'bookTypeLnkId' })
  AlcmCpadEadBase.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(AlcmCpadEadBase, { as: 'alcmCpadEadBases', foreignKey: 'companyCode' })
  AlcmCpadEadBase.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(AlcmCpadEadBase, { as: 'costCentreAlcmCpadEadBases', foreignKey: 'costCentre' })
  CompanyBook.belongsTo(CompanyCostCentre, { as: 'costCentreLnk', foreignKey: 'costCentreLnkId' })
  CompanyCostCentre.hasMany(CompanyBook, { as: 'companyBooks', foreignKey: 'costCentreLnkId' })
  CompanyCostCentreLnk.belongsTo(CompanyCostCentre, { as: 'costCentreChildCompanyCostCentre', foreignKey: 'costCentreChild' })
  CompanyCostCentre.hasMany(CompanyCostCentreLnk, { as: 'companyCostCentreLnks', foreignKey: 'costCentreChild' })
  CompanyCostCentreLnk.belongsTo(CompanyCostCentre, { as: 'costCentreParentCompanyCostCentre', foreignKey: 'costCentreParent' })
  CompanyCostCentre.hasMany(CompanyCostCentreLnk, { as: 'costCentreParentCompanyCostCentreLnks', foreignKey: 'costCentreParent' })
  CrmGuarPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'companyCode' })
  CrmGuarPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(CrmGuarPos, { as: 'costCentreCrmGuarPos', foreignKey: 'costCentre' })
  GenldgBsJournal.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(GenldgBsJournal, { as: 'genldgBsJournals', foreignKey: 'companyCode' })
  GenldgBsJournal.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(GenldgBsJournal, { as: 'costCentreGenldgBsJournals', foreignKey: 'costCentre' })
  GenldgGlbsPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(GenldgGlbsPos, { as: 'genldgGlbsPos', foreignKey: 'companyCode' })
  GenldgGlbsPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(GenldgGlbsPos, { as: 'costCentreGenldgGlbsPos', foreignKey: 'costCentre' })
  PnlGmplexDet.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PnlGmplexDet, { as: 'pnlGmplexDets', foreignKey: 'companyCode' })
  PnlGmplexDet.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PnlGmplexDet, { as: 'costCentrePnlGmplexDets', foreignKey: 'costCentre' })
  PnlOperincDet.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PnlOperincDet, { as: 'pnlOperincDets', foreignKey: 'companyCode' })
  PnlOperincDet.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PnlOperincDet, { as: 'costCentrePnlOperincDets', foreignKey: 'costCentre' })
  PortDsecMov.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'companyCode' })
  PortDsecMov.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortDsecMov, { as: 'costCentrePortDsecMovs', foreignKey: 'costCentre' })
  PortDsecPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'companyCode' })
  PortDsecPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortDsecPos, { as: 'costCentrePortDsecPos', foreignKey: 'costCentre' })
  PortFctyMov.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'companyCode' })
  PortFctyMov.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortFctyMov, { as: 'costCentrePortFctyMovs', foreignKey: 'costCentre' })
  PortFctyPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'companyCode' })
  PortFctyPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortFctyPos, { as: 'costCentrePortFctyPos', foreignKey: 'costCentre' })
  PortFincMov.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'companyCode' })
  PortFincMov.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortFincMov, { as: 'costCentrePortFincMovs', foreignKey: 'costCentre' })
  PortFincPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'companyCode' })
  PortFincPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortFincPos, { as: 'costCentrePortFincPos', foreignKey: 'costCentre' })
  PortFoexMov.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'companyCode' })
  PortFoexMov.belongsTo(CompanyCostCentre, { as: 'fundingProviderCompanyCostCentre', foreignKey: 'fundingProvider' })
  CompanyCostCentre.hasMany(PortFoexMov, { as: 'fundingProviderPortFoexMovs', foreignKey: 'fundingProvider' })
  PortFoexMov.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortFoexMov, { as: 'costCentrePortFoexMovs', foreignKey: 'costCentre' })
  PortFoexPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'companyCode' })
  PortFoexPos.belongsTo(CompanyCostCentre, { as: 'fundingProviderCompanyCostCentre', foreignKey: 'fundingProvider' })
  CompanyCostCentre.hasMany(PortFoexPos, { as: 'fundingProviderPortFoexPos', foreignKey: 'fundingProvider' })
  PortFoexPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortFoexPos, { as: 'costCentrePortFoexPos', foreignKey: 'costCentre' })
  PortFutuMov.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'companyCode' })
  PortFutuMov.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortFutuMov, { as: 'costCentrePortFutuMovs', foreignKey: 'costCentre' })
  PortFutuMov.belongsTo(CompanyCostCentre, { as: 'fundingProviderCompanyCostCentre', foreignKey: 'fundingProvider' })
  CompanyCostCentre.hasMany(PortFutuMov, { as: 'fundingProviderPortFutuMovs', foreignKey: 'fundingProvider' })
  PortFutuPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'companyCode' })
  PortFutuPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortFutuPos, { as: 'costCentrePortFutuPos', foreignKey: 'costCentre' })
  PortFutuPos.belongsTo(CompanyCostCentre, { as: 'fundingProviderCompanyCostCentre', foreignKey: 'fundingProvider' })
  CompanyCostCentre.hasMany(PortFutuPos, { as: 'fundingProviderPortFutuPos', foreignKey: 'fundingProvider' })
  PortGuarMov.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'companyCode' })
  PortGuarMov.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortGuarMov, { as: 'costCentrePortGuarMovs', foreignKey: 'costCentre' })
  PortGuarPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'companyCode' })
  PortGuarPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortGuarPos, { as: 'costCentrePortGuarPos', foreignKey: 'costCentre' })
  PortLoanMov.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'companyCode' })
  PortLoanMov.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortLoanMov, { as: 'costCentrePortLoanMovs', foreignKey: 'costCentre' })
  PortLoanPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'companyCode' })
  PortLoanPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortLoanPos, { as: 'costCentrePortLoanPos', foreignKey: 'costCentre' })
  PortNdfsMov.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'companyCode' })
  PortNdfsMov.belongsTo(CompanyCostCentre, { as: 'fundingProviderCompanyCostCentre', foreignKey: 'fundingProvider' })
  CompanyCostCentre.hasMany(PortNdfsMov, { as: 'fundingProviderPortNdfsMovs', foreignKey: 'fundingProvider' })
  PortNdfsMov.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortNdfsMov, { as: 'costCentrePortNdfsMovs', foreignKey: 'costCentre' })
  PortNdfsPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'companyCode' })
  PortNdfsPos.belongsTo(CompanyCostCentre, { as: 'fundingProviderCompanyCostCentre', foreignKey: 'fundingProvider' })
  CompanyCostCentre.hasMany(PortNdfsPos, { as: 'fundingProviderPortNdfsPos', foreignKey: 'fundingProvider' })
  PortNdfsPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortNdfsPos, { as: 'costCentrePortNdfsPos', foreignKey: 'costCentre' })
  PortNostroPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortNostroPos, { as: 'portNostroPos', foreignKey: 'companyCode' })
  PortNostroPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortNostroPos, { as: 'costCentrePortNostroPos', foreignKey: 'costCentre' })
  PortOtherPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortOtherPos, { as: 'portOtherPos', foreignKey: 'companyCode' })
  PortOtherPos.belongsTo(CompanyCostCentre, { as: 'fundingProviderCompanyCostCentre', foreignKey: 'fundingProvider' })
  CompanyCostCentre.hasMany(PortOtherPos, { as: 'fundingProviderPortOtherPos', foreignKey: 'fundingProvider' })
  PortOtherPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortOtherPos, { as: 'costCentrePortOtherPos', foreignKey: 'costCentre' })
  PortRecvLnk.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortRecvLnk, { as: 'portRecvLnks', foreignKey: 'companyCode' })
  PortRecvLnk.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortRecvLnk, { as: 'costCentrePortRecvLnks', foreignKey: 'costCentre' })
  PortRecvMov.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortRecvMov, { as: 'portRecvMovs', foreignKey: 'companyCode' })
  PortRecvMov.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortRecvMov, { as: 'costCentrePortRecvMovs', foreignKey: 'costCentre' })
  PortRepoMov.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'companyCode' })
  PortRepoMov.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortRepoMov, { as: 'costCentrePortRepoMovs', foreignKey: 'costCentre' })
  PortRepoPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'companyCode' })
  PortRepoPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortRepoPos, { as: 'costCentrePortRepoPos', foreignKey: 'costCentre' })
  PortSwapMov.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'companyCode' })
  PortSwapMov.belongsTo(CompanyCostCentre, { as: 'fundingProviderCompanyCostCentre', foreignKey: 'fundingProvider' })
  CompanyCostCentre.hasMany(PortSwapMov, { as: 'fundingProviderPortSwapMovs', foreignKey: 'fundingProvider' })
  PortSwapMov.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortSwapMov, { as: 'costCentrePortSwapMovs', foreignKey: 'costCentre' })
  PortSwapPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'companyCode' })
  PortSwapPos.belongsTo(CompanyCostCentre, { as: 'fundingProviderCompanyCostCentre', foreignKey: 'fundingProvider' })
  CompanyCostCentre.hasMany(PortSwapPos, { as: 'fundingProviderPortSwapPos', foreignKey: 'fundingProvider' })
  PortSwapPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortSwapPos, { as: 'costCentrePortSwapPos', foreignKey: 'costCentre' })
  PortVostroPos.belongsTo(CompanyCostCentre, { as: 'companyCodeCompanyCostCentre', foreignKey: 'companyCode' })
  CompanyCostCentre.hasMany(PortVostroPos, { as: 'portVostroPos', foreignKey: 'companyCode' })
  PortVostroPos.belongsTo(CompanyCostCentre, { as: 'costCentreCompanyCostCentre', foreignKey: 'costCentre' })
  CompanyCostCentre.hasMany(PortVostroPos, { as: 'costCentrePortVostroPos', foreignKey: 'costCentre' })
  PortVostroPos.belongsTo(CompanyCostCentre, { as: 'fundingProviderCompanyCostCentre', foreignKey: 'fundingProvider' })
  CompanyCostCentre.hasMany(PortVostroPos, { as: 'fundingProviderPortVostroPos', foreignKey: 'fundingProvider' })
  CompanyCostCentre.belongsTo(CompanyLob, { as: 'lobCodeCompanyLob', foreignKey: 'lobCode' })
  CompanyLob.hasMany(CompanyCostCentre, { as: 'companyCostCentres', foreignKey: 'lobCode' })
  CompanyLobLnk.belongsTo(CompanyLob, { as: 'lobCodeChildCompanyLob', foreignKey: 'lobCodeChild' })
  CompanyLob.hasMany(CompanyLobLnk, { as: 'companyLobLnks', foreignKey: 'lobCodeChild' })
  CompanyLobLnk.belongsTo(CompanyLob, { as: 'lobCodeParentCompanyLob', foreignKey: 'lobCodeParent' })
  CompanyLob.hasMany(CompanyLobLnk, { as: 'lobCodeParentCompanyLobLnks', foreignKey: 'lobCodeParent' })
  InvptyDet.belongsTo(CompanyLob, { as: 'lobCodeCompanyLob', foreignKey: 'lobCode' })
  CompanyLob.hasMany(InvptyDet, { as: 'invptyDets', foreignKey: 'lobCode' })
  CompanyLob.belongsTo(CompanyLobType, { as: 'lobTypeCompanyLobType', foreignKey: 'lobType' })
  CompanyLobType.hasMany(CompanyLob, { as: 'companyLobs', foreignKey: 'lobType' })
  CrmAgreementLink.belongsTo(CrmInstrumentList, { as: 'crmCompanyCodeCrmInstrumentList', foreignKey: 'crmCompanyCode' })
  CrmInstrumentList.hasMany(CrmAgreementLink, { as: 'crmAgreementLinks', foreignKey: 'crmCompanyCode' })
  CrmAgreementLink.belongsTo(CrmInstrumentList, { as: 'crmContractReferenceCrmInstrumentList', foreignKey: 'crmContractReference' })
  CrmInstrumentList.hasMany(CrmAgreementLink, { as: 'crmContractReferenceCrmAgreementLinks', foreignKey: 'crmContractReference' })
  CrmAgreementLink.belongsTo(CrmInstrumentList, { as: 'crmProductCodeCrmInstrumentList', foreignKey: 'crmProductCode' })
  CrmInstrumentList.hasMany(CrmAgreementLink, { as: 'crmProductCodeCrmAgreementLinks', foreignKey: 'crmProductCode' })
  CrmAgreementLink.belongsTo(CrmInstrumentList, { as: 'crmSourceSystemCrmInstrumentList', foreignKey: 'crmSourceSystem' })
  CrmInstrumentList.hasMany(CrmAgreementLink, { as: 'crmSourceSystemCrmAgreementLinks', foreignKey: 'crmSourceSystem' })
  CrmAgreementLink.belongsTo(CrmInstrumentList, { as: 'crmSourceTableCrmInstrumentList', foreignKey: 'crmSourceTable' })
  CrmInstrumentList.hasMany(CrmAgreementLink, { as: 'crmSourceTableCrmAgreementLinks', foreignKey: 'crmSourceTable' })
  CrmContractLink.belongsTo(CrmInstrumentList, { as: 'crmCompanyCodeCrmInstrumentList', foreignKey: 'crmCompanyCode' })
  CrmInstrumentList.hasMany(CrmContractLink, { as: 'crmContractLinks', foreignKey: 'crmCompanyCode' })
  CrmContractLink.belongsTo(CrmInstrumentList, { as: 'crmContractReferenceCrmInstrumentList', foreignKey: 'crmContractReference' })
  CrmInstrumentList.hasMany(CrmContractLink, { as: 'crmContractReferenceCrmContractLinks', foreignKey: 'crmContractReference' })
  CrmContractLink.belongsTo(CrmInstrumentList, { as: 'crmProductCodeCrmInstrumentList', foreignKey: 'crmProductCode' })
  CrmInstrumentList.hasMany(CrmContractLink, { as: 'crmProductCodeCrmContractLinks', foreignKey: 'crmProductCode' })
  CrmContractLink.belongsTo(CrmInstrumentList, { as: 'crmSourceSystemCrmInstrumentList', foreignKey: 'crmSourceSystem' })
  CrmInstrumentList.hasMany(CrmContractLink, { as: 'crmSourceSystemCrmContractLinks', foreignKey: 'crmSourceSystem' })
  CrmContractLink.belongsTo(CrmInstrumentList, { as: 'crmSourceTableCrmInstrumentList', foreignKey: 'crmSourceTable' })
  CrmInstrumentList.hasMany(CrmContractLink, { as: 'crmSourceTableCrmContractLinks', foreignKey: 'crmSourceTable' })
  CrmInvptyLink.belongsTo(CrmInstrumentList, { as: 'crmCompanyCodeCrmInstrumentList', foreignKey: 'crmCompanyCode' })
  CrmInstrumentList.hasMany(CrmInvptyLink, { as: 'crmInvptyLinks', foreignKey: 'crmCompanyCode' })
  CrmInvptyLink.belongsTo(CrmInstrumentList, { as: 'crmContractReferenceCrmInstrumentList', foreignKey: 'crmContractReference' })
  CrmInstrumentList.hasMany(CrmInvptyLink, { as: 'crmContractReferenceCrmInvptyLinks', foreignKey: 'crmContractReference' })
  CrmInvptyLink.belongsTo(CrmInstrumentList, { as: 'crmProductCodeCrmInstrumentList', foreignKey: 'crmProductCode' })
  CrmInstrumentList.hasMany(CrmInvptyLink, { as: 'crmProductCodeCrmInvptyLinks', foreignKey: 'crmProductCode' })
  CrmInvptyLink.belongsTo(CrmInstrumentList, { as: 'crmSourceSystemCrmInstrumentList', foreignKey: 'crmSourceSystem' })
  CrmInstrumentList.hasMany(CrmInvptyLink, { as: 'crmSourceSystemCrmInvptyLinks', foreignKey: 'crmSourceSystem' })
  CrmInvptyLink.belongsTo(CrmInstrumentList, { as: 'crmSourceTableCrmInstrumentList', foreignKey: 'crmSourceTable' })
  CrmInstrumentList.hasMany(CrmInvptyLink, { as: 'crmSourceTableCrmInvptyLinks', foreignKey: 'crmSourceTable' })
  CrmProductLink.belongsTo(CrmInstrumentList, { as: 'crmCompanyCodeCrmInstrumentList', foreignKey: 'crmCompanyCode' })
  CrmInstrumentList.hasMany(CrmProductLink, { as: 'crmProductLinks', foreignKey: 'crmCompanyCode' })
  CrmProductLink.belongsTo(CrmInstrumentList, { as: 'crmContractReferenceCrmInstrumentList', foreignKey: 'crmContractReference' })
  CrmInstrumentList.hasMany(CrmProductLink, { as: 'crmContractReferenceCrmProductLinks', foreignKey: 'crmContractReference' })
  CrmProductLink.belongsTo(CrmInstrumentList, { as: 'crmProductCodeCrmInstrumentList', foreignKey: 'crmProductCode' })
  CrmInstrumentList.hasMany(CrmProductLink, { as: 'crmProductCodeCrmProductLinks', foreignKey: 'crmProductCode' })
  CrmProductLink.belongsTo(CrmInstrumentList, { as: 'crmSourceSystemCrmInstrumentList', foreignKey: 'crmSourceSystem' })
  CrmInstrumentList.hasMany(CrmProductLink, { as: 'crmSourceSystemCrmProductLinks', foreignKey: 'crmSourceSystem' })
  CrmProductLink.belongsTo(CrmInstrumentList, { as: 'crmSourceTableCrmInstrumentList', foreignKey: 'crmSourceTable' })
  CrmInstrumentList.hasMany(CrmProductLink, { as: 'crmSourceTableCrmProductLinks', foreignKey: 'crmSourceTable' })
  CrmNetagrLink.belongsTo(CrmNetagrDet, { as: 'nettingAgreementRefCrmNetagrDet', foreignKey: 'nettingAgreementRef' })
  CrmNetagrDet.hasOne(CrmNetagrLink, { as: 'crmNetagrLink', foreignKey: 'nettingAgreementRef' })
  CrmAgreementLink.belongsTo(CrmNetagrLink, { as: 'nettingAgreementRefCrmNetagrLink', foreignKey: 'nettingAgreementRef' })
  CrmNetagrLink.hasMany(CrmAgreementLink, { as: 'crmAgreementLinks', foreignKey: 'nettingAgreementRef' })
  CrmGuarPos.belongsTo(DomsAccrualBasis, { as: 'notionalUpdateAccrualBasisDomsAccrualBasis', foreignKey: 'notionalUpdateAccrualBasis' })
  DomsAccrualBasis.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'notionalUpdateAccrualBasis' })
  PnlFeeincDet.belongsTo(DomsAccrualBasis, { as: 'feeCorrctAccrualBasisDomsAccrualBasis', foreignKey: 'feeCorrctAccrualBasis' })
  DomsAccrualBasis.hasMany(PnlFeeincDet, { as: 'pnlFeeincDets', foreignKey: 'feeCorrctAccrualBasis' })
  PnlOperincCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'accrualBasis' })
  PortDsecCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'accrualBasis' })
  PortDsecMov.belongsTo(DomsAccrualBasis, { as: 'floatIndexAccrualBasisDomsAccrualBasis', foreignKey: 'floatIndexAccrualBasis' })
  DomsAccrualBasis.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'floatIndexAccrualBasis' })
  PortDsecPos.belongsTo(DomsAccrualBasis, { as: 'floatIndexAccrualBasisDomsAccrualBasis', foreignKey: 'floatIndexAccrualBasis' })
  DomsAccrualBasis.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'floatIndexAccrualBasis' })
  PortFctyMov.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'accrualBasis' })
  PortFctyPos.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'accrualBasis' })
  PortFincCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'accrualBasis' })
  PortFincMov.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'accrualBasis' })
  PortFincPos.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'accrualBasis' })
  PortFoexCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'accrualBasis' })
  PortFoexMov.belongsTo(DomsAccrualBasis, { as: 'accrualBasisPayLegDomsAccrualBasis', foreignKey: 'accrualBasisPayLeg' })
  DomsAccrualBasis.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'accrualBasisPayLeg' })
  PortFoexMov.belongsTo(DomsAccrualBasis, { as: 'accrualBasisRecLegDomsAccrualBasis', foreignKey: 'accrualBasisRecLeg' })
  DomsAccrualBasis.hasMany(PortFoexMov, { as: 'accrualBasisRecLegPortFoexMovs', foreignKey: 'accrualBasisRecLeg' })
  PortFoexPos.belongsTo(DomsAccrualBasis, { as: 'accrualBasisPayLegDomsAccrualBasis', foreignKey: 'accrualBasisPayLeg' })
  DomsAccrualBasis.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'accrualBasisPayLeg' })
  PortFoexPos.belongsTo(DomsAccrualBasis, { as: 'accrualBasisRecLegDomsAccrualBasis', foreignKey: 'accrualBasisRecLeg' })
  DomsAccrualBasis.hasMany(PortFoexPos, { as: 'accrualBasisRecLegPortFoexPos', foreignKey: 'accrualBasisRecLeg' })
  PortFutuCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'accrualBasis' })
  PortFutuMov.belongsTo(DomsAccrualBasis, { as: 'accrualBasisNotionalDomsAccrualBasis', foreignKey: 'accrualBasisNotional' })
  DomsAccrualBasis.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'accrualBasisNotional' })
  PortFutuPos.belongsTo(DomsAccrualBasis, { as: 'accrualBasisNotionalDomsAccrualBasis', foreignKey: 'accrualBasisNotional' })
  DomsAccrualBasis.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'accrualBasisNotional' })
  PortGuarMov.belongsTo(DomsAccrualBasis, { as: 'notionalUpdateAccrualBasisDomsAccrualBasis', foreignKey: 'notionalUpdateAccrualBasis' })
  DomsAccrualBasis.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'notionalUpdateAccrualBasis' })
  PortGuarPos.belongsTo(DomsAccrualBasis, { as: 'notionalUpdateAccrualBasisDomsAccrualBasis', foreignKey: 'notionalUpdateAccrualBasis' })
  DomsAccrualBasis.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'notionalUpdateAccrualBasis' })
  PortLoanCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'accrualBasis' })
  PortLoanMov.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'accrualBasis' })
  PortLoanPos.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'accrualBasis' })
  PortNdfsCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'accrualBasis' })
  PortNdfsMov.belongsTo(DomsAccrualBasis, { as: 'accrualBasisRecLegDomsAccrualBasis', foreignKey: 'accrualBasisRecLeg' })
  DomsAccrualBasis.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'accrualBasisRecLeg' })
  PortNdfsMov.belongsTo(DomsAccrualBasis, { as: 'accrualBasisPayLegDomsAccrualBasis', foreignKey: 'accrualBasisPayLeg' })
  DomsAccrualBasis.hasMany(PortNdfsMov, { as: 'accrualBasisPayLegPortNdfsMovs', foreignKey: 'accrualBasisPayLeg' })
  PortNdfsPos.belongsTo(DomsAccrualBasis, { as: 'accrualBasisPayLegDomsAccrualBasis', foreignKey: 'accrualBasisPayLeg' })
  DomsAccrualBasis.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'accrualBasisPayLeg' })
  PortNdfsPos.belongsTo(DomsAccrualBasis, { as: 'accrualBasisRecLegDomsAccrualBasis', foreignKey: 'accrualBasisRecLeg' })
  DomsAccrualBasis.hasMany(PortNdfsPos, { as: 'accrualBasisRecLegPortNdfsPos', foreignKey: 'accrualBasisRecLeg' })
  PortNostroCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'accrualBasis' })
  PortOtherCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'accrualBasis' })
  PortRecvCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'accrualBasis' })
  PortRepoCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'accrualBasis' })
  PortRepoMov.belongsTo(DomsAccrualBasis, { as: 'accrualBasisCashLegDomsAccrualBasis', foreignKey: 'accrualBasisCashLeg' })
  DomsAccrualBasis.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'accrualBasisCashLeg' })
  PortRepoPos.belongsTo(DomsAccrualBasis, { as: 'accrualBasisCashLegDomsAccrualBasis', foreignKey: 'accrualBasisCashLeg' })
  DomsAccrualBasis.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'accrualBasisCashLeg' })
  PortSwapCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'accrualBasis' })
  PortSwapMov.belongsTo(DomsAccrualBasis, { as: 'accrualBasisRecLegDomsAccrualBasis', foreignKey: 'accrualBasisRecLeg' })
  DomsAccrualBasis.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'accrualBasisRecLeg' })
  PortSwapMov.belongsTo(DomsAccrualBasis, { as: 'accrualBasisPayLegDomsAccrualBasis', foreignKey: 'accrualBasisPayLeg' })
  DomsAccrualBasis.hasMany(PortSwapMov, { as: 'accrualBasisPayLegPortSwapMovs', foreignKey: 'accrualBasisPayLeg' })
  PortSwapPos.belongsTo(DomsAccrualBasis, { as: 'accrualBasisPayLegDomsAccrualBasis', foreignKey: 'accrualBasisPayLeg' })
  DomsAccrualBasis.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'accrualBasisPayLeg' })
  PortSwapPos.belongsTo(DomsAccrualBasis, { as: 'accrualBasisRecLegDomsAccrualBasis', foreignKey: 'accrualBasisRecLeg' })
  DomsAccrualBasis.hasMany(PortSwapPos, { as: 'accrualBasisRecLegPortSwapPos', foreignKey: 'accrualBasisRecLeg' })
  PortVostroCsf.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'accrualBasis' })
  SysCurve.belongsTo(DomsAccrualBasis, { as: 'accrualBasisDomsAccrualBasis', foreignKey: 'accrualBasis' })
  DomsAccrualBasis.hasMany(SysCurve, { as: 'sysCurves', foreignKey: 'accrualBasis' })
  PortDsecMov.belongsTo(DomsAmortizingType, { as: 'amortizingTypeDomsAmortizingType', foreignKey: 'amortizingType' })
  DomsAmortizingType.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'amortizingType' })
  PortDsecPos.belongsTo(DomsAmortizingType, { as: 'amortizingTypeDomsAmortizingType', foreignKey: 'amortizingType' })
  DomsAmortizingType.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'amortizingType' })
  PortLoanMov.belongsTo(DomsAmortizingType, { as: 'amortizingTypeDomsAmortizingType', foreignKey: 'amortizingType' })
  DomsAmortizingType.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'amortizingType' })
  PortLoanPos.belongsTo(DomsAmortizingType, { as: 'amortizingTypeDomsAmortizingType', foreignKey: 'amortizingType' })
  DomsAmortizingType.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'amortizingType' })
  AlcmCapitalAccountParam.belongsTo(DomsBalanceType, { as: 'balanceTypeDomsBalanceType', foreignKey: 'balanceType' })
  DomsBalanceType.hasMany(AlcmCapitalAccountParam, { as: 'alcmCapitalAccountParams', foreignKey: 'balanceType' })
  PortFctyMov.belongsTo(DomsBankingFacilityType, { as: 'mothFctyGeneralBankingDomsBankingFacilityType', foreignKey: 'mothFctyGeneralBanking' })
  DomsBankingFacilityType.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'mothFctyGeneralBanking' })
  PortFctyPos.belongsTo(DomsBankingFacilityType, { as: 'mothFctyGeneralBankingDomsBankingFacilityType', foreignKey: 'mothFctyGeneralBanking' })
  DomsBankingFacilityType.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'mothFctyGeneralBanking' })
  AlcmCpadEadBase.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(AlcmCpadEadBase, { as: 'alcmCpadEadBases', foreignKey: 'bankingTrading' })
  PortFctyMov.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'bankingTrading' })
  PortFctyPos.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'bankingTrading' })
  PortFincMov.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'bankingTrading' })
  PortFincPos.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'bankingTrading' })
  PortFoexMov.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'bankingTrading' })
  PortFoexPos.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'bankingTrading' })
  PortFutuMov.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'bankingTrading' })
  PortFutuPos.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'bankingTrading' })
  PortLoanMov.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'bankingTrading' })
  PortLoanPos.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'bankingTrading' })
  PortNdfsMov.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'bankingTrading' })
  PortNdfsPos.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'bankingTrading' })
  PortOtherPos.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortOtherPos, { as: 'portOtherPos', foreignKey: 'bankingTrading' })
  PortRepoMov.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'bankingTrading' })
  PortRepoPos.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'bankingTrading' })
  PortSwapMov.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'bankingTrading' })
  PortSwapPos.belongsTo(DomsBankingTrading, { as: 'bankingTradingDomsBankingTrading', foreignKey: 'bankingTrading' })
  DomsBankingTrading.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'bankingTrading' })
  PortDsecMov.belongsTo(DomsBrokenPeriodType, { as: 'brokenPeriodTypeDomsBrokenPeriodType', foreignKey: 'brokenPeriodType' })
  DomsBrokenPeriodType.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'brokenPeriodType' })
  PortDsecPos.belongsTo(DomsBrokenPeriodType, { as: 'brokenPeriodTypeDomsBrokenPeriodType', foreignKey: 'brokenPeriodType' })
  DomsBrokenPeriodType.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'brokenPeriodType' })
  PortDsecMov.belongsTo(DomsCalcDayConvention, { as: 'calcDayConventionDomsCalcDayConvention', foreignKey: 'calcDayConvention' })
  DomsCalcDayConvention.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'calcDayConvention' })
  PortDsecMov.belongsTo(DomsCalcDayConvention, { as: 'payDayConventionDomsCalcDayConvention', foreignKey: 'payDayConvention' })
  DomsCalcDayConvention.hasMany(PortDsecMov, { as: 'payDayConventionPortDsecMovs', foreignKey: 'payDayConvention' })
  PortDsecPos.belongsTo(DomsCalcDayConvention, { as: 'calcDayConventionDomsCalcDayConvention', foreignKey: 'calcDayConvention' })
  DomsCalcDayConvention.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'calcDayConvention' })
  PortDsecPos.belongsTo(DomsCalcDayConvention, { as: 'payDayConventionDomsCalcDayConvention', foreignKey: 'payDayConvention' })
  DomsCalcDayConvention.hasMany(PortDsecPos, { as: 'payDayConventionPortDsecPos', foreignKey: 'payDayConvention' })
  PortFctyMov.belongsTo(DomsCalcDayConvention, { as: 'payDayConventionDomsCalcDayConvention', foreignKey: 'payDayConvention' })
  DomsCalcDayConvention.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'payDayConvention' })
  PortFctyPos.belongsTo(DomsCalcDayConvention, { as: 'payDayConventionDomsCalcDayConvention', foreignKey: 'payDayConvention' })
  DomsCalcDayConvention.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'payDayConvention' })
  PortLoanMov.belongsTo(DomsCalcDayConvention, { as: 'fixingDayConventionDomsCalcDayConvention', foreignKey: 'fixingDayConvention' })
  DomsCalcDayConvention.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'fixingDayConvention' })
  PortLoanPos.belongsTo(DomsCalcDayConvention, { as: 'fixingDayConventionDomsCalcDayConvention', foreignKey: 'fixingDayConvention' })
  DomsCalcDayConvention.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'fixingDayConvention' })
  CrmGuarPos.belongsTo(DomsCalcFrequency, { as: 'notionalUpdateFrequencyDomsCalcFrequency', foreignKey: 'notionalUpdateFrequency' })
  DomsCalcFrequency.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'notionalUpdateFrequency' })
  CrmGuarPos.belongsTo(DomsCalcFrequency, { as: 'notionalUpdateTenorFrequencyDomsCalcFrequency', foreignKey: 'notionalUpdateTenorFrequency' })
  DomsCalcFrequency.hasMany(CrmGuarPos, { as: 'notionalUpdateTenorFrequencyCrmGuarPos', foreignKey: 'notionalUpdateTenorFrequency' })
  PnlFeeincDet.belongsTo(DomsCalcFrequency, { as: 'feeCorrctFrequencyDomsCalcFrequency', foreignKey: 'feeCorrctFrequency' })
  DomsCalcFrequency.hasMany(PnlFeeincDet, { as: 'pnlFeeincDets', foreignKey: 'feeCorrctFrequency' })
  PnlFeeincDet.belongsTo(DomsCalcFrequency, { as: 'feeCorrctIndexTenorFrequencyDomsCalcFrequency', foreignKey: 'feeCorrctIndexTenorFrequency' })
  DomsCalcFrequency.hasMany(PnlFeeincDet, { as: 'feeCorrctIndexTenorFrequencyPnlFeeincDets', foreignKey: 'feeCorrctIndexTenorFrequency' })
  PnlFeeincDet.belongsTo(DomsCalcFrequency, { as: 'feePaymentFrequencyDomsCalcFrequency', foreignKey: 'feePaymentFrequency' })
  DomsCalcFrequency.hasMany(PnlFeeincDet, { as: 'feePaymentFrequencyPnlFeeincDets', foreignKey: 'feePaymentFrequency' })
  PortDsecMov.belongsTo(DomsCalcFrequency, { as: 'compoundFrequencyDomsCalcFrequency', foreignKey: 'compoundFrequency' })
  DomsCalcFrequency.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'compoundFrequency' })
  PortDsecMov.belongsTo(DomsCalcFrequency, { as: 'tenorFrequencyDomsCalcFrequency', foreignKey: 'tenorFrequency' })
  DomsCalcFrequency.hasMany(PortDsecMov, { as: 'tenorFrequencyPortDsecMovs', foreignKey: 'tenorFrequency' })
  PortDsecMov.belongsTo(DomsCalcFrequency, { as: 'fixingFrequencyDomsCalcFrequency', foreignKey: 'fixingFrequency' })
  DomsCalcFrequency.hasMany(PortDsecMov, { as: 'fixingFrequencyPortDsecMovs', foreignKey: 'fixingFrequency' })
  PortDsecPos.belongsTo(DomsCalcFrequency, { as: 'compoundFrequencyDomsCalcFrequency', foreignKey: 'compoundFrequency' })
  DomsCalcFrequency.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'compoundFrequency' })
  PortDsecPos.belongsTo(DomsCalcFrequency, { as: 'tenorFrequencyDomsCalcFrequency', foreignKey: 'tenorFrequency' })
  DomsCalcFrequency.hasMany(PortDsecPos, { as: 'tenorFrequencyPortDsecPos', foreignKey: 'tenorFrequency' })
  PortDsecPos.belongsTo(DomsCalcFrequency, { as: 'fixingFrequencyDomsCalcFrequency', foreignKey: 'fixingFrequency' })
  DomsCalcFrequency.hasMany(PortDsecPos, { as: 'fixingFrequencyPortDsecPos', foreignKey: 'fixingFrequency' })
  PortFctyMov.belongsTo(DomsCalcFrequency, { as: 'compoundFrequencyDomsCalcFrequency', foreignKey: 'compoundFrequency' })
  DomsCalcFrequency.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'compoundFrequency' })
  PortFctyMov.belongsTo(DomsCalcFrequency, { as: 'fixingFrequencyDomsCalcFrequency', foreignKey: 'fixingFrequency' })
  DomsCalcFrequency.hasMany(PortFctyMov, { as: 'fixingFrequencyPortFctyMovs', foreignKey: 'fixingFrequency' })
  PortFctyMov.belongsTo(DomsCalcFrequency, { as: 'resetFrequencyDomsCalcFrequency', foreignKey: 'resetFrequency' })
  DomsCalcFrequency.hasMany(PortFctyMov, { as: 'resetFrequencyPortFctyMovs', foreignKey: 'resetFrequency' })
  PortFctyMov.belongsTo(DomsCalcFrequency, { as: 'tenorFrequencyDomsCalcFrequency', foreignKey: 'tenorFrequency' })
  DomsCalcFrequency.hasMany(PortFctyMov, { as: 'tenorFrequencyPortFctyMovs', foreignKey: 'tenorFrequency' })
  PortFctyPos.belongsTo(DomsCalcFrequency, { as: 'compoundFrequencyDomsCalcFrequency', foreignKey: 'compoundFrequency' })
  DomsCalcFrequency.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'compoundFrequency' })
  PortFctyPos.belongsTo(DomsCalcFrequency, { as: 'fixingFrequencyDomsCalcFrequency', foreignKey: 'fixingFrequency' })
  DomsCalcFrequency.hasMany(PortFctyPos, { as: 'fixingFrequencyPortFctyPos', foreignKey: 'fixingFrequency' })
  PortFctyPos.belongsTo(DomsCalcFrequency, { as: 'resetFrequencyDomsCalcFrequency', foreignKey: 'resetFrequency' })
  DomsCalcFrequency.hasMany(PortFctyPos, { as: 'resetFrequencyPortFctyPos', foreignKey: 'resetFrequency' })
  PortFctyPos.belongsTo(DomsCalcFrequency, { as: 'tenorFrequencyDomsCalcFrequency', foreignKey: 'tenorFrequency' })
  DomsCalcFrequency.hasMany(PortFctyPos, { as: 'tenorFrequencyPortFctyPos', foreignKey: 'tenorFrequency' })
  PortFincMov.belongsTo(DomsCalcFrequency, { as: 'tenorFrequencyDomsCalcFrequency', foreignKey: 'tenorFrequency' })
  DomsCalcFrequency.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'tenorFrequency' })
  PortFincMov.belongsTo(DomsCalcFrequency, { as: 'notionalUpdateFrequencyDomsCalcFrequency', foreignKey: 'notionalUpdateFrequency' })
  DomsCalcFrequency.hasMany(PortFincMov, { as: 'notionalUpdateFrequencyPortFincMovs', foreignKey: 'notionalUpdateFrequency' })
  PortFincPos.belongsTo(DomsCalcFrequency, { as: 'tenorFrequencyDomsCalcFrequency', foreignKey: 'tenorFrequency' })
  DomsCalcFrequency.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'tenorFrequency' })
  PortFincPos.belongsTo(DomsCalcFrequency, { as: 'notionalUpdateFrequencyDomsCalcFrequency', foreignKey: 'notionalUpdateFrequency' })
  DomsCalcFrequency.hasMany(PortFincPos, { as: 'notionalUpdateFrequencyPortFincPos', foreignKey: 'notionalUpdateFrequency' })
  PortFutuMov.belongsTo(DomsCalcFrequency, { as: 'notionalPeriodicityDomsCalcFrequency', foreignKey: 'notionalPeriodicity' })
  DomsCalcFrequency.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'notionalPeriodicity' })
  PortFutuPos.belongsTo(DomsCalcFrequency, { as: 'notionalPeriodicityDomsCalcFrequency', foreignKey: 'notionalPeriodicity' })
  DomsCalcFrequency.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'notionalPeriodicity' })
  PortGuarMov.belongsTo(DomsCalcFrequency, { as: 'notionalUpdateFrequencyDomsCalcFrequency', foreignKey: 'notionalUpdateFrequency' })
  DomsCalcFrequency.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'notionalUpdateFrequency' })
  PortGuarMov.belongsTo(DomsCalcFrequency, { as: 'notionalUpdateTenorFrequencyDomsCalcFrequency', foreignKey: 'notionalUpdateTenorFrequency' })
  DomsCalcFrequency.hasMany(PortGuarMov, { as: 'notionalUpdateTenorFrequencyPortGuarMovs', foreignKey: 'notionalUpdateTenorFrequency' })
  PortGuarPos.belongsTo(DomsCalcFrequency, { as: 'notionalUpdateFrequencyDomsCalcFrequency', foreignKey: 'notionalUpdateFrequency' })
  DomsCalcFrequency.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'notionalUpdateFrequency' })
  PortGuarPos.belongsTo(DomsCalcFrequency, { as: 'notionalUpdateTenorFrequencyDomsCalcFrequency', foreignKey: 'notionalUpdateTenorFrequency' })
  DomsCalcFrequency.hasMany(PortGuarPos, { as: 'notionalUpdateTenorFrequencyPortGuarPos', foreignKey: 'notionalUpdateTenorFrequency' })
  PortLoanMov.belongsTo(DomsCalcFrequency, { as: 'prepaymentFrequencyDomsCalcFrequency', foreignKey: 'prepaymentFrequency' })
  DomsCalcFrequency.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'prepaymentFrequency' })
  PortLoanMov.belongsTo(DomsCalcFrequency, { as: 'tenorFrequencyDomsCalcFrequency', foreignKey: 'tenorFrequency' })
  DomsCalcFrequency.hasMany(PortLoanMov, { as: 'tenorFrequencyPortLoanMovs', foreignKey: 'tenorFrequency' })
  PortLoanMov.belongsTo(DomsCalcFrequency, { as: 'compoundFrequencyDomsCalcFrequency', foreignKey: 'compoundFrequency' })
  DomsCalcFrequency.hasMany(PortLoanMov, { as: 'compoundFrequencyPortLoanMovs', foreignKey: 'compoundFrequency' })
  PortLoanMov.belongsTo(DomsCalcFrequency, { as: 'interestFrequencyDomsCalcFrequency', foreignKey: 'interestFrequency' })
  DomsCalcFrequency.hasMany(PortLoanMov, { as: 'interestFrequencyPortLoanMovs', foreignKey: 'interestFrequency' })
  PortLoanMov.belongsTo(DomsCalcFrequency, { as: 'fixingFrequencyDomsCalcFrequency', foreignKey: 'fixingFrequency' })
  DomsCalcFrequency.hasMany(PortLoanMov, { as: 'fixingFrequencyPortLoanMovs', foreignKey: 'fixingFrequency' })
  PortLoanMov.belongsTo(DomsCalcFrequency, { as: 'amortizingFrequencyDomsCalcFrequency', foreignKey: 'amortizingFrequency' })
  DomsCalcFrequency.hasMany(PortLoanMov, { as: 'amortizingFrequencyPortLoanMovs', foreignKey: 'amortizingFrequency' })
  PortLoanPos.belongsTo(DomsCalcFrequency, { as: 'tenorFrequencyDomsCalcFrequency', foreignKey: 'tenorFrequency' })
  DomsCalcFrequency.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'tenorFrequency' })
  PortLoanPos.belongsTo(DomsCalcFrequency, { as: 'compoundFrequencyDomsCalcFrequency', foreignKey: 'compoundFrequency' })
  DomsCalcFrequency.hasMany(PortLoanPos, { as: 'compoundFrequencyPortLoanPos', foreignKey: 'compoundFrequency' })
  PortLoanPos.belongsTo(DomsCalcFrequency, { as: 'interestFrequencyDomsCalcFrequency', foreignKey: 'interestFrequency' })
  DomsCalcFrequency.hasMany(PortLoanPos, { as: 'interestFrequencyPortLoanPos', foreignKey: 'interestFrequency' })
  PortLoanPos.belongsTo(DomsCalcFrequency, { as: 'fixingFrequencyDomsCalcFrequency', foreignKey: 'fixingFrequency' })
  DomsCalcFrequency.hasMany(PortLoanPos, { as: 'fixingFrequencyPortLoanPos', foreignKey: 'fixingFrequency' })
  PortLoanPos.belongsTo(DomsCalcFrequency, { as: 'amortizingFrequencyDomsCalcFrequency', foreignKey: 'amortizingFrequency' })
  DomsCalcFrequency.hasMany(PortLoanPos, { as: 'amortizingFrequencyPortLoanPos', foreignKey: 'amortizingFrequency' })
  PortLoanPos.belongsTo(DomsCalcFrequency, { as: 'prepaymentFrequencyDomsCalcFrequency', foreignKey: 'prepaymentFrequency' })
  DomsCalcFrequency.hasMany(PortLoanPos, { as: 'prepaymentFrequencyPortLoanPos', foreignKey: 'prepaymentFrequency' })
  PortRepoDet.belongsTo(DomsCalcFrequency, { as: 'revaluationFrequencyDomsCalcFrequency', foreignKey: 'revaluationFrequency' })
  DomsCalcFrequency.hasMany(PortRepoDet, { as: 'portRepoDets', foreignKey: 'revaluationFrequency' })
  PnlOperincCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'capType' })
  PnlOperincCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PnlOperincCsf, { as: 'floorTypePnlOperincCsfs', foreignKey: 'floorType' })
  PortDsecCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'floorType' })
  PortDsecCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortDsecCsf, { as: 'capTypePortDsecCsfs', foreignKey: 'capType' })
  PortFincCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'floorType' })
  PortFincCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortFincCsf, { as: 'capTypePortFincCsfs', foreignKey: 'capType' })
  PortFoexCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'floorType' })
  PortFoexCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortFoexCsf, { as: 'capTypePortFoexCsfs', foreignKey: 'capType' })
  PortFutuCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'capType' })
  PortFutuCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortFutuCsf, { as: 'floorTypePortFutuCsfs', foreignKey: 'floorType' })
  PortLoanCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'capType' })
  PortLoanCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortLoanCsf, { as: 'floorTypePortLoanCsfs', foreignKey: 'floorType' })
  PortNdfsCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'floorType' })
  PortNdfsCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortNdfsCsf, { as: 'capTypePortNdfsCsfs', foreignKey: 'capType' })
  PortNostroCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'floorType' })
  PortNostroCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortNostroCsf, { as: 'capTypePortNostroCsfs', foreignKey: 'capType' })
  PortOtherCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'floorType' })
  PortOtherCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortOtherCsf, { as: 'capTypePortOtherCsfs', foreignKey: 'capType' })
  PortRecvCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'capType' })
  PortRecvCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortRecvCsf, { as: 'floorTypePortRecvCsfs', foreignKey: 'floorType' })
  PortRepoCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'floorType' })
  PortRepoCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortRepoCsf, { as: 'capTypePortRepoCsfs', foreignKey: 'capType' })
  PortSwapCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'capType' })
  PortSwapCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortSwapCsf, { as: 'floorTypePortSwapCsfs', foreignKey: 'floorType' })
  PortVostroCsf.belongsTo(DomsCapType, { as: 'capTypeDomsCapType', foreignKey: 'capType' })
  DomsCapType.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'capType' })
  PortVostroCsf.belongsTo(DomsCapType, { as: 'floorTypeDomsCapType', foreignKey: 'floorType' })
  DomsCapType.hasMany(PortVostroCsf, { as: 'floorTypePortVostroCsfs', foreignKey: 'floorType' })
  PnlOperincCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'cashFlowApproach' })
  PortDsecCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'cashFlowApproach' })
  PortFincCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'cashFlowApproach' })
  PortFoexCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'cashFlowApproach' })
  PortFutuCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'cashFlowApproach' })
  PortLoanCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'cashFlowApproach' })
  PortNdfsCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'cashFlowApproach' })
  PortNostroCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'cashFlowApproach' })
  PortOtherCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'cashFlowApproach' })
  PortRecvCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'cashFlowApproach' })
  PortRepoCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'cashFlowApproach' })
  PortSwapCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'cashFlowApproach' })
  PortVostroCsf.belongsTo(DomsCashFlowApproach, { as: 'cashFlowApproachDomsCashFlowApproach', foreignKey: 'cashFlowApproach' })
  DomsCashFlowApproach.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'cashFlowApproach' })
  PnlOperincCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'cashFlowQuality' })
  PortDsecCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'cashFlowQuality' })
  PortFincCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'cashFlowQuality' })
  PortFoexCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'cashFlowQuality' })
  PortFutuCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'cashFlowQuality' })
  PortLoanCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'cashFlowQuality' })
  PortNdfsCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'cashFlowQuality' })
  PortNostroCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'cashFlowQuality' })
  PortOtherCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'cashFlowQuality' })
  PortRecvCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'cashFlowQuality' })
  PortRepoCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'cashFlowQuality' })
  PortSwapCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'cashFlowQuality' })
  PortVostroCsf.belongsTo(DomsCashFlowQuality, { as: 'cashFlowQualityDomsCashFlowQuality', foreignKey: 'cashFlowQuality' })
  DomsCashFlowQuality.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'cashFlowQuality' })
  PnlOperincCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'cashFlowType' })
  PortDsecCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'cashFlowType' })
  PortFincCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'cashFlowType' })
  PortFoexCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'cashFlowType' })
  PortFutuCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'cashFlowType' })
  PortLoanCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'cashFlowType' })
  PortNdfsCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'cashFlowType' })
  PortNostroCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'cashFlowType' })
  PortOtherCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'cashFlowType' })
  PortRecvCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'cashFlowType' })
  PortRepoCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'cashFlowType' })
  PortSwapCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'cashFlowType' })
  PortVostroCsf.belongsTo(DomsCashFlowType, { as: 'cashFlowTypeDomsCashFlowType', foreignKey: 'cashFlowType' })
  DomsCashFlowType.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'cashFlowType' })
  PortFutuMov.belongsTo(DomsCcpExposureType, { as: 'ccpExposureTypeDomsCcpExposureType', foreignKey: 'ccpExposureType' })
  DomsCcpExposureType.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'ccpExposureType' })
  PortFutuPos.belongsTo(DomsCcpExposureType, { as: 'ccpExposureTypeDomsCcpExposureType', foreignKey: 'ccpExposureType' })
  DomsCcpExposureType.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'ccpExposureType' })
  PortRepoMov.belongsTo(DomsCcpExposureType, { as: 'ccpExposureTypeDomsCcpExposureType', foreignKey: 'ccpExposureType' })
  DomsCcpExposureType.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'ccpExposureType' })
  PortRepoPos.belongsTo(DomsCcpExposureType, { as: 'ccpExposureTypeDomsCcpExposureType', foreignKey: 'ccpExposureType' })
  DomsCcpExposureType.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'ccpExposureType' })
  SysCurrency.belongsTo(DomsCcyConvType, { as: 'currencyConvTypeDomsCcyConvType', foreignKey: 'currencyConvType' })
  DomsCcyConvType.hasMany(SysCurrency, { as: 'sysCurrencies', foreignKey: 'currencyConvType' })
  PortDsecMov.belongsTo(DomsClientProprietary, { as: 'clientProprietaryDomsClientProprietary', foreignKey: 'clientProprietary' })
  DomsClientProprietary.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'clientProprietary' })
  PortDsecPos.belongsTo(DomsClientProprietary, { as: 'clientProprietaryDomsClientProprietary', foreignKey: 'clientProprietary' })
  DomsClientProprietary.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'clientProprietary' })
  PortNostroPos.belongsTo(DomsClientProprietary, { as: 'clientProprietaryDomsClientProprietary', foreignKey: 'clientProprietary' })
  DomsClientProprietary.hasMany(PortNostroPos, { as: 'portNostroPos', foreignKey: 'clientProprietary' })
  PortRepoMov.belongsTo(DomsClientProprietary, { as: 'clientProprietaryDomsClientProprietary', foreignKey: 'clientProprietary' })
  DomsClientProprietary.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'clientProprietary' })
  PortRepoPos.belongsTo(DomsClientProprietary, { as: 'clientProprietaryDomsClientProprietary', foreignKey: 'clientProprietary' })
  DomsClientProprietary.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'clientProprietary' })
  PortVostroPos.belongsTo(DomsClientProprietary, { as: 'clientProprietaryDomsClientProprietary', foreignKey: 'clientProprietary' })
  DomsClientProprietary.hasMany(PortVostroPos, { as: 'portVostroPos', foreignKey: 'clientProprietary' })
  CrmNetagrDet.belongsTo(DomsCollContractType, { as: 'collateralContractTypeDomsCollContractType', foreignKey: 'collateralContractType' })
  DomsCollContractType.hasMany(CrmNetagrDet, { as: 'crmNetagrDets', foreignKey: 'collateralContractType' })
  PortFctyMov.belongsTo(DomsCommitted, { as: 'committedDomsCommitted', foreignKey: 'committed' })
  DomsCommitted.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'committed' })
  PortFctyPos.belongsTo(DomsCommitted, { as: 'committedDomsCommitted', foreignKey: 'committed' })
  DomsCommitted.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'committed' })
  PnlFeeincDet.belongsTo(DomsCompoundType, { as: 'feeCoumpoundCalculationTypeDomsCompoundType', foreignKey: 'feeCoumpoundCalculationType' })
  DomsCompoundType.hasMany(PnlFeeincDet, { as: 'pnlFeeincDets', foreignKey: 'feeCoumpoundCalculationType' })
  PnlFeeincDet.belongsTo(DomsCompoundType, { as: 'rateCompoundCalculationTypeDomsCompoundType', foreignKey: 'rateCompoundCalculationType' })
  DomsCompoundType.hasMany(PnlFeeincDet, { as: 'rateCompoundCalculationTypePnlFeeincDets', foreignKey: 'rateCompoundCalculationType' })
  CompanyCostCentre.belongsTo(DomsConsolidationType, { as: 'costCentreTypeDomsConsolidationType', foreignKey: 'costCentreType' })
  DomsConsolidationType.hasMany(CompanyCostCentre, { as: 'companyCostCentres', foreignKey: 'costCentreType' })
  PnlOperincCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'defermentContext' })
  PortDsecCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'defermentContext' })
  PortFincCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'defermentContext' })
  PortFoexCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'defermentContext' })
  PortFutuCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'defermentContext' })
  PortLoanCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'defermentContext' })
  PortNdfsCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'defermentContext' })
  PortNostroCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'defermentContext' })
  PortOtherCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'defermentContext' })
  PortRecvCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'defermentContext' })
  PortRepoCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'defermentContext' })
  PortSwapCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'defermentContext' })
  PortVostroCsf.belongsTo(DomsDefermentContext, { as: 'defermentContextDomsDefermentContext', foreignKey: 'defermentContext' })
  DomsDefermentContext.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'defermentContext' })
  PnlOperincCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'defermentMethod' })
  PortDsecCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'defermentMethod' })
  PortFincCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'defermentMethod' })
  PortFoexCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'defermentMethod' })
  PortFutuCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'defermentMethod' })
  PortLoanCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'defermentMethod' })
  PortNdfsCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'defermentMethod' })
  PortNostroCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'defermentMethod' })
  PortOtherCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'defermentMethod' })
  PortRecvCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'defermentMethod' })
  PortRepoCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'defermentMethod' })
  PortSwapCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'defermentMethod' })
  PortVostroCsf.belongsTo(DomsDefermentMethod, { as: 'defermentMethodDomsDefermentMethod', foreignKey: 'defermentMethod' })
  DomsDefermentMethod.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'defermentMethod' })
  PortFutuMov.belongsTo(DomsDeliveryType, { as: 'deliveryTypeDomsDeliveryType', foreignKey: 'deliveryType' })
  DomsDeliveryType.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'deliveryType' })
  PortFutuPos.belongsTo(DomsDeliveryType, { as: 'deliveryTypeDomsDeliveryType', foreignKey: 'deliveryType' })
  DomsDeliveryType.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'deliveryType' })
  PortFoexMov.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypeRecLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypeRecLeg' })
  DomsDerivativeMultiplierType.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'multiplierTypeRecLeg' })
  PortFoexMov.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypePayLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypePayLeg' })
  DomsDerivativeMultiplierType.hasMany(PortFoexMov, { as: 'multiplierTypePayLegPortFoexMovs', foreignKey: 'multiplierTypePayLeg' })
  PortFoexPos.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypeRecLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypeRecLeg' })
  DomsDerivativeMultiplierType.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'multiplierTypeRecLeg' })
  PortFoexPos.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypePayLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypePayLeg' })
  DomsDerivativeMultiplierType.hasMany(PortFoexPos, { as: 'multiplierTypePayLegPortFoexPos', foreignKey: 'multiplierTypePayLeg' })
  PortNdfsMov.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypeRecLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypeRecLeg' })
  DomsDerivativeMultiplierType.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'multiplierTypeRecLeg' })
  PortNdfsMov.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypePayLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypePayLeg' })
  DomsDerivativeMultiplierType.hasMany(PortNdfsMov, { as: 'multiplierTypePayLegPortNdfsMovs', foreignKey: 'multiplierTypePayLeg' })
  PortNdfsPos.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypeRecLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypeRecLeg' })
  DomsDerivativeMultiplierType.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'multiplierTypeRecLeg' })
  PortNdfsPos.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypePayLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypePayLeg' })
  DomsDerivativeMultiplierType.hasMany(PortNdfsPos, { as: 'multiplierTypePayLegPortNdfsPos', foreignKey: 'multiplierTypePayLeg' })
  PortSwapMov.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypeRecLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypeRecLeg' })
  DomsDerivativeMultiplierType.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'multiplierTypeRecLeg' })
  PortSwapMov.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypePayLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypePayLeg' })
  DomsDerivativeMultiplierType.hasMany(PortSwapMov, { as: 'multiplierTypePayLegPortSwapMovs', foreignKey: 'multiplierTypePayLeg' })
  PortSwapPos.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypeRecLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypeRecLeg' })
  DomsDerivativeMultiplierType.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'multiplierTypeRecLeg' })
  PortSwapPos.belongsTo(DomsDerivativeMultiplierType, { as: 'multiplierTypePayLegDomsDerivativeMultiplierType', foreignKey: 'multiplierTypePayLeg' })
  DomsDerivativeMultiplierType.hasMany(PortSwapPos, { as: 'multiplierTypePayLegPortSwapPos', foreignKey: 'multiplierTypePayLeg' })
  PortLoanMov.belongsTo(DomsDiscountMethod, { as: 'spreadDiscountMethodDomsDiscountMethod', foreignKey: 'spreadDiscountMethod' })
  DomsDiscountMethod.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'spreadDiscountMethod' })
  PortLoanPos.belongsTo(DomsDiscountMethod, { as: 'spreadDiscountMethodDomsDiscountMethod', foreignKey: 'spreadDiscountMethod' })
  DomsDiscountMethod.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'spreadDiscountMethod' })
  PortDsecMov.belongsTo(DomsDistributionChannel, { as: 'distributionChannelDomsDistributionChannel', foreignKey: 'distributionChannel' })
  DomsDistributionChannel.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'distributionChannel' })
  PortDsecPos.belongsTo(DomsDistributionChannel, { as: 'distributionChannelDomsDistributionChannel', foreignKey: 'distributionChannel' })
  DomsDistributionChannel.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'distributionChannel' })
  PortFctyMov.belongsTo(DomsFacilityLiqType, { as: 'facilityLiqTypeDomsFacilityLiqType', foreignKey: 'facilityLiqType' })
  DomsFacilityLiqType.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'facilityLiqType' })
  PortFctyPos.belongsTo(DomsFacilityLiqType, { as: 'facilityLiqTypeDomsFacilityLiqType', foreignKey: 'facilityLiqType' })
  DomsFacilityLiqType.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'facilityLiqType' })
  PortFctyMov.belongsTo(DomsFacilityPurpose, { as: 'facilityPurposeDomsFacilityPurpose', foreignKey: 'facilityPurpose' })
  DomsFacilityPurpose.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'facilityPurpose' })
  PortFctyPos.belongsTo(DomsFacilityPurpose, { as: 'facilityPurposeDomsFacilityPurpose', foreignKey: 'facilityPurpose' })
  DomsFacilityPurpose.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'facilityPurpose' })
  PortFctyMov.belongsTo(DomsFacilityType, { as: 'facilityTypeDomsFacilityType', foreignKey: 'facilityType' })
  DomsFacilityType.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'facilityType' })
  PortFctyPos.belongsTo(DomsFacilityType, { as: 'facilityTypeDomsFacilityType', foreignKey: 'facilityType' })
  DomsFacilityType.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'facilityType' })
  CrmGuarPos.belongsTo(DomsFairValueOption, { as: 'fairValueOptionDomsFairValueOption', foreignKey: 'fairValueOption' })
  DomsFairValueOption.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'fairValueOption' })
  PortDsecMov.belongsTo(DomsFairValueOption, { as: 'fairValueOptionDomsFairValueOption', foreignKey: 'fairValueOption' })
  DomsFairValueOption.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'fairValueOption' })
  PortDsecPos.belongsTo(DomsFairValueOption, { as: 'fairValueOptionDomsFairValueOption', foreignKey: 'fairValueOption' })
  DomsFairValueOption.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'fairValueOption' })
  PortGuarMov.belongsTo(DomsFairValueOption, { as: 'fairValueOptionDomsFairValueOption', foreignKey: 'fairValueOption' })
  DomsFairValueOption.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'fairValueOption' })
  PortGuarPos.belongsTo(DomsFairValueOption, { as: 'fairValueOptionDomsFairValueOption', foreignKey: 'fairValueOption' })
  DomsFairValueOption.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'fairValueOption' })
  PortFctyMov.belongsTo(DomsFixingRule, { as: 'fixingRuleDomsFixingRule', foreignKey: 'fixingRule' })
  DomsFixingRule.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'fixingRule' })
  PortFctyPos.belongsTo(DomsFixingRule, { as: 'fixingRuleDomsFixingRule', foreignKey: 'fixingRule' })
  DomsFixingRule.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'fixingRule' })
  PortLoanMov.belongsTo(DomsFixingRule, { as: 'fixingRuleDomsFixingRule', foreignKey: 'fixingRule' })
  DomsFixingRule.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'fixingRule' })
  PortLoanPos.belongsTo(DomsFixingRule, { as: 'fixingRuleDomsFixingRule', foreignKey: 'fixingRule' })
  DomsFixingRule.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'fixingRule' })
  PortRepoMov.belongsTo(DomsFixingRule, { as: 'fixingRuleCashLegDomsFixingRule', foreignKey: 'fixingRuleCashLeg' })
  DomsFixingRule.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'fixingRuleCashLeg' })
  PortRepoPos.belongsTo(DomsFixingRule, { as: 'fixingRuleCashLegDomsFixingRule', foreignKey: 'fixingRuleCashLeg' })
  DomsFixingRule.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'fixingRuleCashLeg' })
  CrmGuarPos.belongsTo(DomsForbearanceMeasures, { as: 'forbearanceMeasuresDomsForbearanceMeasure', foreignKey: 'forbearanceMeasures' })
  DomsForbearanceMeasures.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'forbearanceMeasures' })
  PortFctyMov.belongsTo(DomsForbearanceMeasures, { as: 'forbearanceMeasuresDomsForbearanceMeasure', foreignKey: 'forbearanceMeasures' })
  DomsForbearanceMeasures.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'forbearanceMeasures' })
  PortFctyPos.belongsTo(DomsForbearanceMeasures, { as: 'forbearanceMeasuresDomsForbearanceMeasure', foreignKey: 'forbearanceMeasures' })
  DomsForbearanceMeasures.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'forbearanceMeasures' })
  PortGuarMov.belongsTo(DomsForbearanceMeasures, { as: 'forbearanceMeasuresDomsForbearanceMeasure', foreignKey: 'forbearanceMeasures' })
  DomsForbearanceMeasures.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'forbearanceMeasures' })
  PortGuarPos.belongsTo(DomsForbearanceMeasures, { as: 'forbearanceMeasuresDomsForbearanceMeasure', foreignKey: 'forbearanceMeasures' })
  DomsForbearanceMeasures.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'forbearanceMeasures' })
  PortRecvMov.belongsTo(DomsForbearanceMeasures, { as: 'forbearanceMeasuresDomsForbearanceMeasure', foreignKey: 'forbearanceMeasures' })
  DomsForbearanceMeasures.hasMany(PortRecvMov, { as: 'portRecvMovs', foreignKey: 'forbearanceMeasures' })
  PortRecvPos.belongsTo(DomsForbearanceMeasures, { as: 'forbearanceMeasuresDomsForbearanceMeasure', foreignKey: 'forbearanceMeasures' })
  DomsForbearanceMeasures.hasMany(PortRecvPos, { as: 'portRecvPos', foreignKey: 'forbearanceMeasures' })
  PortDsecMov.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'glClass' })
  PortDsecPos.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'glClass' })
  PortFctyMov.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'glClass' })
  PortFctyPos.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'glClass' })
  PortFincMov.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'glClass' })
  PortFincPos.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'glClass' })
  PortFoexMov.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'glClass' })
  PortFoexPos.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'glClass' })
  PortFutuMov.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'glClass' })
  PortFutuPos.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'glClass' })
  PortLoanMov.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'glClass' })
  PortLoanPos.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'glClass' })
  PortNdfsMov.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'glClass' })
  PortNdfsPos.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'glClass' })
  PortRecvMov.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortRecvMov, { as: 'portRecvMovs', foreignKey: 'glClass' })
  PortRecvPos.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortRecvPos, { as: 'portRecvPos', foreignKey: 'glClass' })
  PortRepoMov.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'glClass' })
  PortRepoPos.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'glClass' })
  PortSwapMov.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'glClass' })
  PortSwapPos.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'glClass' })
  ReconDimension.belongsTo(DomsGlClass, { as: 'glClassDomsGlClass', foreignKey: 'glClass' })
  DomsGlClass.hasMany(ReconDimension, { as: 'reconDimensions', foreignKey: 'glClass' })
  GenldgAccountGroup.belongsTo(DomsGlNature, { as: 'glGroupNatureDomsGlNature', foreignKey: 'glGroupNature' })
  DomsGlNature.hasMany(GenldgAccountGroup, { as: 'genldgAccountGroups', foreignKey: 'glGroupNature' })
  GenldgAccountPlan.belongsTo(DomsGlNature, { as: 'glNatureDomsGlNature', foreignKey: 'glNature' })
  DomsGlNature.hasMany(GenldgAccountPlan, { as: 'genldgAccountPlans', foreignKey: 'glNature' })
  GenldgBsJournal.belongsTo(DomsGlNature, { as: 'glNatureDomsGlNature', foreignKey: 'glNature' })
  DomsGlNature.hasMany(GenldgBsJournal, { as: 'genldgBsJournals', foreignKey: 'glNature' })
  GenldgGaapPlan.belongsTo(DomsGlNature, { as: 'glNatureDomsGlNature', foreignKey: 'glNature' })
  DomsGlNature.hasMany(GenldgGaapPlan, { as: 'genldgGaapPlans', foreignKey: 'glNature' })
  PortHedgeLnk.belongsTo(DomsHedgeAccountingType, { as: 'hedgeAccountingTypeDomsHedgeAccountingType', foreignKey: 'hedgeAccountingType' })
  DomsHedgeAccountingType.hasMany(PortHedgeLnk, { as: 'portHedgeLnks', foreignKey: 'hedgeAccountingType' })
  PnlOperincCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'incomeType' })
  PortDsecCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'incomeType' })
  PortFincCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'incomeType' })
  PortFoexCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'incomeType' })
  PortFutuCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'incomeType' })
  PortLoanCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'incomeType' })
  PortNdfsCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'incomeType' })
  PortNostroCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'incomeType' })
  PortOtherCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'incomeType' })
  PortRecvCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'incomeType' })
  PortRepoCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'incomeType' })
  PortSwapCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'incomeType' })
  PortVostroCsf.belongsTo(DomsIncomeType, { as: 'incomeTypeDomsIncomeType', foreignKey: 'incomeType' })
  DomsIncomeType.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'incomeType' })
  InvptyDet.belongsTo(DomsIndustrySectorType, { as: 'industrySectorTypeDomsIndustrySectorType', foreignKey: 'industrySectorType' })
  DomsIndustrySectorType.hasMany(InvptyDet, { as: 'invptyDets', foreignKey: 'industrySectorType' })
  InvptyDet.belongsTo(DomsInvptyStatus, { as: 'invptyStatusDomsInvptyStatus', foreignKey: 'invptyStatus' })
  DomsInvptyStatus.hasMany(InvptyDet, { as: 'invptyDets', foreignKey: 'invptyStatus' })
  PnlGmplexClc.belongsTo(DomsLongShort, { as: 'riskLegDomsLongShort', foreignKey: 'riskLeg' })
  DomsLongShort.hasMany(PnlGmplexClc, { as: 'pnlGmplexClcs', foreignKey: 'riskLeg' })
  PnlGmplexDet.belongsTo(DomsLongShort, { as: 'riskLegDomsLongShort', foreignKey: 'riskLeg' })
  DomsLongShort.hasMany(PnlGmplexDet, { as: 'pnlGmplexDets', foreignKey: 'riskLeg' })
  PortFincMov.belongsTo(DomsLongShort, { as: 'longShortDomsLongShort', foreignKey: 'longShort' })
  DomsLongShort.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'longShort' })
  PortFincPos.belongsTo(DomsLongShort, { as: 'longShortDomsLongShort', foreignKey: 'longShort' })
  DomsLongShort.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'longShort' })
  PortFutuMov.belongsTo(DomsLongShort, { as: 'longShortDomsLongShort', foreignKey: 'longShort' })
  DomsLongShort.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'longShort' })
  PortFutuPos.belongsTo(DomsLongShort, { as: 'longShortDomsLongShort', foreignKey: 'longShort' })
  DomsLongShort.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'longShort' })
  PortFincMov.belongsTo(DomsMarginExcessType, { as: 'marginExcessTypeDomsMarginExcessType', foreignKey: 'marginExcessType' })
  DomsMarginExcessType.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'marginExcessType' })
  PortFincPos.belongsTo(DomsMarginExcessType, { as: 'marginExcessTypeDomsMarginExcessType', foreignKey: 'marginExcessType' })
  DomsMarginExcessType.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'marginExcessType' })
  CrmAgreementLink.belongsTo(DomsMarginType, { as: 'marginTypeDomsMarginType', foreignKey: 'marginType' })
  DomsMarginType.hasMany(CrmAgreementLink, { as: 'crmAgreementLinks', foreignKey: 'marginType' })
  PortFutuMov.belongsTo(DomsMarginType, { as: 'marginTypeDomsMarginType', foreignKey: 'marginType' })
  DomsMarginType.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'marginType' })
  PortFutuPos.belongsTo(DomsMarginType, { as: 'marginTypeDomsMarginType', foreignKey: 'marginType' })
  DomsMarginType.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'marginType' })
  CrmNetagrDet.belongsTo(DomsNettingClass, { as: 'nettingClassDomsNettingClass', foreignKey: 'nettingClass' })
  DomsNettingClass.hasMany(CrmNetagrDet, { as: 'crmNetagrDets', foreignKey: 'nettingClass' })
  CrmGuarPos.belongsTo(DomsParticipationFlag, { as: 'participationFlagDomsParticipationFlag', foreignKey: 'participationFlag' })
  DomsParticipationFlag.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'participationFlag' })
  PortFctyMov.belongsTo(DomsParticipationFlag, { as: 'participationFlagDomsParticipationFlag', foreignKey: 'participationFlag' })
  DomsParticipationFlag.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'participationFlag' })
  PortFctyPos.belongsTo(DomsParticipationFlag, { as: 'participationFlagDomsParticipationFlag', foreignKey: 'participationFlag' })
  DomsParticipationFlag.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'participationFlag' })
  PortGuarMov.belongsTo(DomsParticipationFlag, { as: 'participationFlagDomsParticipationFlag', foreignKey: 'participationFlag' })
  DomsParticipationFlag.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'participationFlag' })
  PortGuarPos.belongsTo(DomsParticipationFlag, { as: 'participationFlagDomsParticipationFlag', foreignKey: 'participationFlag' })
  DomsParticipationFlag.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'participationFlag' })
  PortThirdPartyLnk.belongsTo(DomsParticipationLink, { as: 'participationLinkDomsParticipationLink', foreignKey: 'participationLink' })
  DomsParticipationLink.hasMany(PortThirdPartyLnk, { as: 'portThirdPartyLnks', foreignKey: 'participationLink' })
  PnlOperincCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'legType' })
  PortDsecCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'legType' })
  PortFincCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'legType' })
  PortFoexCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'legType' })
  PortFutuCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'legType' })
  PortLoanCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'legType' })
  PortNdfsCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'legType' })
  PortNostroCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'legType' })
  PortOtherCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'legType' })
  PortRecvCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'legType' })
  PortRepoCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'legType' })
  PortSwapCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'legType' })
  PortVostroCsf.belongsTo(DomsPayReceive, { as: 'legTypeDomsPayReceive', foreignKey: 'legType' })
  DomsPayReceive.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'legType' })
  PortDsecMov.belongsTo(DomsPenaltyCalcMethod, { as: 'penaltyCalcMethodDomsPenaltyCalcMethod', foreignKey: 'penaltyCalcMethod' })
  DomsPenaltyCalcMethod.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'penaltyCalcMethod' })
  PortDsecPos.belongsTo(DomsPenaltyCalcMethod, { as: 'penaltyCalcMethodDomsPenaltyCalcMethod', foreignKey: 'penaltyCalcMethod' })
  DomsPenaltyCalcMethod.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'penaltyCalcMethod' })
  PortLoanMov.belongsTo(DomsPenaltyCalcMethod, { as: 'penaltyCalcMethodDomsPenaltyCalcMethod', foreignKey: 'penaltyCalcMethod' })
  DomsPenaltyCalcMethod.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'penaltyCalcMethod' })
  PortLoanPos.belongsTo(DomsPenaltyCalcMethod, { as: 'penaltyCalcMethodDomsPenaltyCalcMethod', foreignKey: 'penaltyCalcMethod' })
  DomsPenaltyCalcMethod.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'penaltyCalcMethod' })
  CrmGuarPos.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'performingStatus' })
  PortFctyMov.belongsTo(DomsPerformingStatus, { as: 'peformingStatusDomsPerformingStatus', foreignKey: 'peformingStatus' })
  DomsPerformingStatus.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'peformingStatus' })
  PortFctyPos.belongsTo(DomsPerformingStatus, { as: 'peformingStatusDomsPerformingStatus', foreignKey: 'peformingStatus' })
  DomsPerformingStatus.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'peformingStatus' })
  PortFincMov.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'performingStatus' })
  PortFincPos.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'performingStatus' })
  PortFoexMov.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'performingStatus' })
  PortFoexPos.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'performingStatus' })
  PortGuarMov.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'performingStatus' })
  PortGuarPos.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'performingStatus' })
  PortLoanMov.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'performingStatus' })
  PortLoanPos.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'performingStatus' })
  PortNdfsMov.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'performingStatus' })
  PortNdfsPos.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'performingStatus' })
  PortRecvMov.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortRecvMov, { as: 'portRecvMovs', foreignKey: 'performingStatus' })
  PortRecvPos.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortRecvPos, { as: 'portRecvPos', foreignKey: 'performingStatus' })
  PortSwapMov.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'performingStatus' })
  PortSwapPos.belongsTo(DomsPerformingStatus, { as: 'performingStatusDomsPerformingStatus', foreignKey: 'performingStatus' })
  DomsPerformingStatus.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'performingStatus' })
  CrmGuarPos.belongsTo(DomsRateType, { as: 'notionalUpdateRateTypeDomsRateType', foreignKey: 'notionalUpdateRateType' })
  DomsRateType.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'notionalUpdateRateType' })
  PnlFeeincDet.belongsTo(DomsRateType, { as: 'feeCorrctRateTypeDomsRateType', foreignKey: 'feeCorrctRateType' })
  DomsRateType.hasMany(PnlFeeincDet, { as: 'pnlFeeincDets', foreignKey: 'feeCorrctRateType' })
  PnlOperincCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'rateType' })
  PortDsecCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'rateType' })
  PortDsecMov.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'rateType' })
  PortDsecPos.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'rateType' })
  PortFctyMov.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'rateType' })
  PortFctyPos.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'rateType' })
  PortFincCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'rateType' })
  PortFoexCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'rateType' })
  PortFoexMov.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'fundingRateType' })
  PortFoexPos.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'fundingRateType' })
  PortFutuCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'rateType' })
  PortFutuMov.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'fundingRateType' })
  PortFutuPos.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'fundingRateType' })
  PortGuarMov.belongsTo(DomsRateType, { as: 'notionalUpdateRateTypeDomsRateType', foreignKey: 'notionalUpdateRateType' })
  DomsRateType.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'notionalUpdateRateType' })
  PortGuarPos.belongsTo(DomsRateType, { as: 'notionalUpdateRateTypeDomsRateType', foreignKey: 'notionalUpdateRateType' })
  DomsRateType.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'notionalUpdateRateType' })
  PortLoanCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'rateType' })
  PortLoanMov.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'fundingRateType' })
  PortLoanMov.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortLoanMov, { as: 'rateTypePortLoanMovs', foreignKey: 'rateType' })
  PortLoanPos.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'fundingRateType' })
  PortLoanPos.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortLoanPos, { as: 'rateTypePortLoanPos', foreignKey: 'rateType' })
  PortNdfsCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'rateType' })
  PortNdfsMov.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'fundingRateType' })
  PortNdfsPos.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'fundingRateType' })
  PortNostroCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'rateType' })
  PortNostroPos.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortNostroPos, { as: 'portNostroPos', foreignKey: 'fundingRateType' })
  PortOtherCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'rateType' })
  PortOtherPos.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortOtherPos, { as: 'portOtherPos', foreignKey: 'fundingRateType' })
  PortRecvCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'rateType' })
  PortRecvMov.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortRecvMov, { as: 'portRecvMovs', foreignKey: 'fundingRateType' })
  PortRecvPos.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortRecvPos, { as: 'portRecvPos', foreignKey: 'fundingRateType' })
  PortRepoCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'rateType' })
  PortRepoMov.belongsTo(DomsRateType, { as: 'rateTypeCashLegDomsRateType', foreignKey: 'rateTypeCashLeg' })
  DomsRateType.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'rateTypeCashLeg' })
  PortRepoPos.belongsTo(DomsRateType, { as: 'rateTypeCashLegDomsRateType', foreignKey: 'rateTypeCashLeg' })
  DomsRateType.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'rateTypeCashLeg' })
  PortSwapCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'rateType' })
  PortSwapMov.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'fundingRateType' })
  PortSwapPos.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'fundingRateType' })
  PortVostroCsf.belongsTo(DomsRateType, { as: 'rateTypeDomsRateType', foreignKey: 'rateType' })
  DomsRateType.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'rateType' })
  PortVostroPos.belongsTo(DomsRateType, { as: 'fundingRateTypeDomsRateType', foreignKey: 'fundingRateType' })
  DomsRateType.hasMany(PortVostroPos, { as: 'portVostroPos', foreignKey: 'fundingRateType' })
  CrmContractLink.belongsTo(DomsRepartitionMethod, { as: 'repartitionMethodDomsRepartitionMethod', foreignKey: 'repartitionMethod' })
  DomsRepartitionMethod.hasMany(CrmContractLink, { as: 'crmContractLinks', foreignKey: 'repartitionMethod' })
  CrmInvptyLink.belongsTo(DomsRepartitionMethod, { as: 'repartitionMethodDomsRepartitionMethod', foreignKey: 'repartitionMethod' })
  DomsRepartitionMethod.hasMany(CrmInvptyLink, { as: 'crmInvptyLinks', foreignKey: 'repartitionMethod' })
  CrmNetagrDet.belongsTo(DomsRepartitionMethod, { as: 'repartitionMethodDomsRepartitionMethod', foreignKey: 'repartitionMethod' })
  DomsRepartitionMethod.hasMany(CrmNetagrDet, { as: 'crmNetagrDets', foreignKey: 'repartitionMethod' })
  CrmProductLink.belongsTo(DomsRepartitionMethod, { as: 'repartitionMethodDomsRepartitionMethod', foreignKey: 'repartitionMethod' })
  DomsRepartitionMethod.hasMany(CrmProductLink, { as: 'crmProductLinks', foreignKey: 'repartitionMethod' })
  FcmgtBorrowingGroup.belongsTo(DomsRmgtFacility, { as: 'limitTypeDomsRmgtFacility', foreignKey: 'limitType' })
  DomsRmgtFacility.hasMany(FcmgtBorrowingGroup, { as: 'fcmgtBorrowingGroups', foreignKey: 'limitType' })
  ProductHsbcGrp.belongsTo(DomsRmgtFacility, { as: 'catAbDomsRmgtFacility', foreignKey: 'catAB' })
  DomsRmgtFacility.hasMany(ProductHsbcGrp, { as: 'productHsbcGrps', foreignKey: 'catAB' })
  PortFincMov.belongsTo(DomsSecurityStatus, { as: 'currentStatusDomsSecurityStatus', foreignKey: 'currentStatus' })
  DomsSecurityStatus.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'currentStatus' })
  PortFincPos.belongsTo(DomsSecurityStatus, { as: 'currentStatusDomsSecurityStatus', foreignKey: 'currentStatus' })
  DomsSecurityStatus.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'currentStatus' })
  PortRecvMov.belongsTo(DomsSeniority, { as: 'seniorityDomsSeniority', foreignKey: 'seniority' })
  DomsSeniority.hasMany(PortRecvMov, { as: 'portRecvMovs', foreignKey: 'seniority' })
  PortRecvPos.belongsTo(DomsSeniority, { as: 'seniorityDomsSeniority', foreignKey: 'seniority' })
  DomsSeniority.hasMany(PortRecvPos, { as: 'portRecvPos', foreignKey: 'seniority' })
  PortDsecMov.belongsTo(DomsServicingType, { as: 'servicingTypeDomsServicingType', foreignKey: 'servicingType' })
  DomsServicingType.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'servicingType' })
  PortDsecPos.belongsTo(DomsServicingType, { as: 'servicingTypeDomsServicingType', foreignKey: 'servicingType' })
  DomsServicingType.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'servicingType' })
  PortNostroPos.belongsTo(DomsServicingType, { as: 'servicingTypeDomsServicingType', foreignKey: 'servicingType' })
  DomsServicingType.hasMany(PortNostroPos, { as: 'portNostroPos', foreignKey: 'servicingType' })
  PortVostroPos.belongsTo(DomsServicingType, { as: 'servicingTypeDomsServicingType', foreignKey: 'servicingType' })
  DomsServicingType.hasMany(PortVostroPos, { as: 'portVostroPos', foreignKey: 'servicingType' })
  PortFutuMov.belongsTo(DomsSettlementMode, { as: 'futureStlmDomsSettlementMode', foreignKey: 'futureStlm' })
  DomsSettlementMode.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'futureStlm' })
  PortFutuPos.belongsTo(DomsSettlementMode, { as: 'futureStlmDomsSettlementMode', foreignKey: 'futureStlm' })
  DomsSettlementMode.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'futureStlm' })
  CrmGuarPos.belongsTo(DomsSubType, { as: 'subTypeDomsSubType', foreignKey: 'subType' })
  DomsSubType.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'subType' })
  PortFctyMov.belongsTo(DomsSubType, { as: 'subTypeDomsSubType', foreignKey: 'subType' })
  DomsSubType.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'subType' })
  PortFctyPos.belongsTo(DomsSubType, { as: 'subTypeDomsSubType', foreignKey: 'subType' })
  DomsSubType.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'subType' })
  PortGuarMov.belongsTo(DomsSubType, { as: 'subTypeDomsSubType', foreignKey: 'subType' })
  DomsSubType.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'subType' })
  PortGuarPos.belongsTo(DomsSubType, { as: 'subTypeDomsSubType', foreignKey: 'subType' })
  DomsSubType.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'subType' })
  PortNostroPos.belongsTo(DomsSubType, { as: 'subTypeDomsSubType', foreignKey: 'subType' })
  DomsSubType.hasMany(PortNostroPos, { as: 'portNostroPos', foreignKey: 'subType' })
  PortVostroPos.belongsTo(DomsSubType, { as: 'subTypeDomsSubType', foreignKey: 'subType' })
  DomsSubType.hasMany(PortVostroPos, { as: 'portVostroPos', foreignKey: 'subType' })
  PortFctyMov.belongsTo(DomsTargetType, { as: 'targetTypeDomsTargetType', foreignKey: 'targetType' })
  DomsTargetType.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'targetType' })
  PortFctyPos.belongsTo(DomsTargetType, { as: 'targetTypeDomsTargetType', foreignKey: 'targetType' })
  DomsTargetType.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'targetType' })
  PortDsecMov.belongsTo(DomsTaxStatus, { as: 'interestIncomeTaxStatusDomsTaxStatus', foreignKey: 'interestIncomeTaxStatus' })
  DomsTaxStatus.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'interestIncomeTaxStatus' })
  PortDsecPos.belongsTo(DomsTaxStatus, { as: 'interestIncomeTaxStatusDomsTaxStatus', foreignKey: 'interestIncomeTaxStatus' })
  DomsTaxStatus.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'interestIncomeTaxStatus' })
  PortFctyMov.belongsTo(DomsTaxStatus, { as: 'interestIncomeTaxStatusDomsTaxStatus', foreignKey: 'interestIncomeTaxStatus' })
  DomsTaxStatus.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'interestIncomeTaxStatus' })
  PortFctyPos.belongsTo(DomsTaxStatus, { as: 'interestIncomeTaxStatusDomsTaxStatus', foreignKey: 'interestIncomeTaxStatus' })
  DomsTaxStatus.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'interestIncomeTaxStatus' })
  PortLoanMov.belongsTo(DomsTaxStatus, { as: 'interestIncomeTaxStatusDomsTaxStatus', foreignKey: 'interestIncomeTaxStatus' })
  DomsTaxStatus.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'interestIncomeTaxStatus' })
  PortLoanPos.belongsTo(DomsTaxStatus, { as: 'interestIncomeTaxStatusDomsTaxStatus', foreignKey: 'interestIncomeTaxStatus' })
  DomsTaxStatus.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'interestIncomeTaxStatus' })
  PortLoanMov.belongsTo(DomsTransferred, { as: 'transferredDomsTransferred', foreignKey: 'transferred' })
  DomsTransferred.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'transferred' })
  PortLoanPos.belongsTo(DomsTransferred, { as: 'transferredDomsTransferred', foreignKey: 'transferred' })
  DomsTransferred.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'transferred' })
  PortFutuMov.belongsTo(DomsUnderlyingFamily, { as: 'underlyingFamilyDomsUnderlyingFamily', foreignKey: 'underlyingFamily' })
  DomsUnderlyingFamily.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'underlyingFamily' })
  PortFutuPos.belongsTo(DomsUnderlyingFamily, { as: 'underlyingFamilyDomsUnderlyingFamily', foreignKey: 'underlyingFamily' })
  DomsUnderlyingFamily.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'underlyingFamily' })
  FcmgtFacilityBg.belongsTo(FcmgtBorrowingGroup, { as: 'borrowingGroup', foreignKey: 'borrowingGroupId' })
  FcmgtBorrowingGroup.hasMany(FcmgtFacilityBg, { as: 'fcmgtFacilityBgs', foreignKey: 'borrowingGroupId' })
  FcmgtGroupFacilityLink.belongsTo(FcmgtBorrowingGroup, { as: 'borrowingGroup', foreignKey: 'borrowingGroupId' })
  FcmgtBorrowingGroup.hasMany(FcmgtGroupFacilityLink, { as: 'fcmgtGroupFacilityLinks', foreignKey: 'borrowingGroupId' })
  FcmgtFacilityBg.belongsTo(FcmgtFacilityCode, { as: 'facilityCodeFcmgtFacilityCode', foreignKey: 'facilityCode' })
  FcmgtFacilityCode.hasMany(FcmgtFacilityBg, { as: 'fcmgtFacilityBgs', foreignKey: 'facilityCode' })
  FcmgtFacilityInvpty.belongsTo(FcmgtFacilityCode, { as: 'facilityCodeFcmgtFacilityCode', foreignKey: 'facilityCode' })
  FcmgtFacilityCode.hasMany(FcmgtFacilityInvpty, { as: 'fcmgtFacilityInvpties', foreignKey: 'facilityCode' })
  FcmgtGroupFacilityLink.belongsTo(FcmgtFacilityCode, { as: 'facilityCodeFcmgtFacilityCode', foreignKey: 'facilityCode' })
  FcmgtFacilityCode.hasMany(FcmgtGroupFacilityLink, { as: 'fcmgtGroupFacilityLinks', foreignKey: 'facilityCode' })
  FcmgtProductFacilityLink.belongsTo(FcmgtFacilityCode, { as: 'facilityCodeFcmgtFacilityCode', foreignKey: 'facilityCode' })
  FcmgtFacilityCode.hasMany(FcmgtProductFacilityLink, { as: 'fcmgtProductFacilityLinks', foreignKey: 'facilityCode' })
  FcmgtSubordFac.belongsTo(FcmgtFacilityCode, { as: 'facilityCodeFcmgtFacilityCode', foreignKey: 'facilityCode' })
  FcmgtFacilityCode.hasMany(FcmgtSubordFac, { as: 'fcmgtSubordFacs', foreignKey: 'facilityCode' })
  FcmgtSubordFac.belongsTo(FcmgtFacilityCode, { as: 'subFacilityCodeFcmgtFacilityCode', foreignKey: 'subFacilityCode' })
  FcmgtFacilityCode.hasMany(FcmgtSubordFac, { as: 'subFacilityCodeFcmgtSubordFacs', foreignKey: 'subFacilityCode' })
  FcmgtProductFacilityLink.belongsTo(FcmgtProduct, { as: 'carmProductCodeFcmgtProduct', foreignKey: 'carmProductCode' })
  FcmgtProduct.hasMany(FcmgtProductFacilityLink, { as: 'fcmgtProductFacilityLinks', foreignKey: 'carmProductCode' })
  FcmgtProductLink.belongsTo(FcmgtProduct, { as: 'carmProductCodeFcmgtProduct', foreignKey: 'carmProductCode' })
  FcmgtProduct.hasMany(FcmgtProductLink, { as: 'fcmgtProductLinks', foreignKey: 'carmProductCode' })
  FcmgtUtilizationA.belongsTo(FcmgtProduct, { as: 'carmProductCodeFcmgtProduct', foreignKey: 'carmProductCode' })
  FcmgtProduct.hasMany(FcmgtUtilizationA, { as: 'fcmgtUtilizationAs', foreignKey: 'carmProductCode' })
  FcmgtProduct.belongsTo(FcmgtProductGroup, { as: 'carmProductFamily', foreignKey: 'carmProductFamilyId' })
  FcmgtProductGroup.hasMany(FcmgtProduct, { as: 'fcmgtProducts', foreignKey: 'carmProductFamilyId' })
  GenldgAccountPlan.belongsTo(GenldgAccountGroup, { as: 'glGroupCodeGenldgAccountGroup', foreignKey: 'glGroupCode' })
  GenldgAccountGroup.hasMany(GenldgAccountPlan, { as: 'genldgAccountPlans', foreignKey: 'glGroupCode' })
  GenldgGrcaPlan.belongsTo(GenldgAccountGroup, { as: 'glGroupCodeGenldgAccountGroup', foreignKey: 'glGroupCode' })
  GenldgAccountGroup.hasMany(GenldgGrcaPlan, { as: 'genldgGrcaPlans', foreignKey: 'glGroupCode' })
  AlcmCapitalAccountParam.belongsTo(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlan', foreignKey: 'glAccountCode' })
  GenldgAccountPlan.hasOne(AlcmCapitalAccountParam, { as: 'alcmCapitalAccountParam', foreignKey: 'glAccountCode' })
  BuyinSelloutGlLink.belongsTo(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlan', foreignKey: 'glAccountCode' })
  GenldgAccountPlan.hasMany(BuyinSelloutGlLink, { as: 'buyinSelloutGlLinks', foreignKey: 'glAccountCode' })
  GenldgBsJournal.belongsTo(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlan', foreignKey: 'glAccountCode' })
  GenldgAccountPlan.hasMany(GenldgBsJournal, { as: 'genldgBsJournals', foreignKey: 'glAccountCode' })
  GenldgGaapPlan.belongsTo(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlan', foreignKey: 'glAccountCode' })
  GenldgAccountPlan.hasMany(GenldgGaapPlan, { as: 'genldgGaapPlans', foreignKey: 'glAccountCode' })
  GenldgGlbsPos.belongsTo(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlan', foreignKey: 'glAccountCode' })
  GenldgAccountPlan.hasMany(GenldgGlbsPos, { as: 'genldgGlbsPos', foreignKey: 'glAccountCode' })
  GenldgGrcaAverageMap.belongsTo(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlan', foreignKey: 'glAccountCode' })
  GenldgAccountPlan.hasMany(GenldgGrcaAverageMap, { as: 'genldgGrcaAverageMaps', foreignKey: 'glAccountCode' })
  GenldgGrcaPrimaryMap.belongsTo(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlan', foreignKey: 'glAccountCode' })
  GenldgAccountPlan.hasMany(GenldgGrcaPrimaryMap, { as: 'genldgGrcaPrimaryMaps', foreignKey: 'glAccountCode' })
  GenldgInvptyLink.belongsTo(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlan', foreignKey: 'glAccountCode' })
  GenldgAccountPlan.hasMany(GenldgInvptyLink, { as: 'genldgInvptyLinks', foreignKey: 'glAccountCode' })
  ReconGlPoint.belongsTo(GenldgAccountPlan, { as: 'glAccountCodeGenldgAccountPlan', foreignKey: 'glAccountCode' })
  GenldgAccountPlan.hasMany(ReconGlPoint, { as: 'reconGlPoints', foreignKey: 'glAccountCode' })
  GenldgGaapPlan.belongsTo(GenldgGaapCode, { as: 'glGaapCodeGenldgGaapCode', foreignKey: 'glGaapCode' })
  GenldgGaapCode.hasMany(GenldgGaapPlan, { as: 'genldgGaapPlans', foreignKey: 'glGaapCode' })
  GenldgGlbsPos.belongsTo(GenldgGaapCode, { as: 'glGaapCodeGenldgGaapCode', foreignKey: 'glGaapCode' })
  GenldgGaapCode.hasMany(GenldgGlbsPos, { as: 'genldgGlbsPos', foreignKey: 'glGaapCode' })
  GenldgGlbsPos.belongsTo(GenldgGrcaPlan, { as: 'grcaCodePrimaryGenldgGrcaPlan', foreignKey: 'grcaCodePrimary' })
  GenldgGrcaPlan.hasMany(GenldgGlbsPos, { as: 'genldgGlbsPos', foreignKey: 'grcaCodePrimary' })
  GenldgGlbsPos.belongsTo(GenldgGrcaPlan, { as: 'grcaCodeAverageGenldgGrcaPlan', foreignKey: 'grcaCodeAverage' })
  GenldgGrcaPlan.hasMany(GenldgGlbsPos, { as: 'grcaCodeAverageGenldgGlbsPos', foreignKey: 'grcaCodeAverage' })
  GenldgGrcaAverageMap.belongsTo(GenldgGrcaPlan, { as: 'grcaCodeAverageGenldgGrcaPlan', foreignKey: 'grcaCodeAverage' })
  GenldgGrcaPlan.hasMany(GenldgGrcaAverageMap, { as: 'genldgGrcaAverageMaps', foreignKey: 'grcaCodeAverage' })
  GenldgGrcaPrimaryMap.belongsTo(GenldgGrcaPlan, { as: 'grcaCodePrimaryGenldgGrcaPlan', foreignKey: 'grcaCodePrimary' })
  GenldgGrcaPlan.hasMany(GenldgGrcaPrimaryMap, { as: 'genldgGrcaPrimaryMaps', foreignKey: 'grcaCodePrimary' })
  AlcmCpadEadBase.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(AlcmCpadEadBase, { as: 'alcmCpadEadBases', foreignKey: 'invptyCode' })
  CrmGuarPos.belongsTo(InvptyDet, { as: 'guarantorCodeInvptyDet', foreignKey: 'guarantorCode' })
  InvptyDet.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'guarantorCode' })
  CrmInvptyLink.belongsTo(InvptyDet, { as: 'obligorCodeInvptyDet', foreignKey: 'obligorCode' })
  InvptyDet.hasMany(CrmInvptyLink, { as: 'crmInvptyLinks', foreignKey: 'obligorCode' })
  CrmNetagrLink.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(CrmNetagrLink, { as: 'crmNetagrLinks', foreignKey: 'invptyCode' })
  CrmProductLink.belongsTo(InvptyDet, { as: 'obligorCodeInvptyDet', foreignKey: 'obligorCode' })
  InvptyDet.hasMany(CrmProductLink, { as: 'crmProductLinks', foreignKey: 'obligorCode' })
  FcmgtFacilityInvpty.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(FcmgtFacilityInvpty, { as: 'fcmgtFacilityInvpties', foreignKey: 'invptyCode' })
  FcmgtUtilizationA.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(FcmgtUtilizationA, { as: 'fcmgtUtilizationAs', foreignKey: 'invptyCode' })
  GenldgInvptyLink.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(GenldgInvptyLink, { as: 'genldgInvptyLinks', foreignKey: 'invptyCode' })
  InvptyExtCod.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(InvptyExtCod, { as: 'invptyExtCods', foreignKey: 'invptyCode' })
  InvptyFncls.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(InvptyFncls, { as: 'invptyFncls', foreignKey: 'invptyCode' })
  InvptyLink.belongsTo(InvptyDet, { as: 'invptyChildCodeInvptyDet', foreignKey: 'invptyChildCode' })
  InvptyDet.hasMany(InvptyLink, { as: 'invptyLinks', foreignKey: 'invptyChildCode' })
  InvptyLink.belongsTo(InvptyDet, { as: 'invptyParentCodeInvptyDet', foreignKey: 'invptyParentCode' })
  InvptyDet.hasMany(InvptyLink, { as: 'invptyParentCodeInvptyLinks', foreignKey: 'invptyParentCode' })
  InvptyRtngCrd.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(InvptyRtngCrd, { as: 'invptyRtngCrds', foreignKey: 'invptyCode' })
  InvptyTypeLnk.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(InvptyTypeLnk, { as: 'invptyTypeLnks', foreignKey: 'invptyCode' })
  InvptyTypeLrgcopr.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(InvptyTypeLrgcopr, { as: 'invptyTypeLrgcoprs', foreignKey: 'invptyCode' })
  PnlOperincDet.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PnlOperincDet, { as: 'pnlOperincDets', foreignKey: 'invptyCode' })
  PortDsecMov.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'invptyCode' })
  PortDsecPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'invptyCode' })
  PortFctyMov.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'invptyCode' })
  PortFctyPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'invptyCode' })
  PortFincMov.belongsTo(InvptyDet, { as: 'issuerCodeInvptyDet', foreignKey: 'issuerCode' })
  InvptyDet.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'issuerCode' })
  PortFincPos.belongsTo(InvptyDet, { as: 'issuerCodeInvptyDet', foreignKey: 'issuerCode' })
  InvptyDet.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'issuerCode' })
  PortFoexMov.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'invptyCode' })
  PortFoexPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'invptyCode' })
  PortFutuMov.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'invptyCode' })
  PortFutuMov.belongsTo(InvptyDet, { as: 'exchangeCodeInvptyDet', foreignKey: 'exchangeCode' })
  InvptyDet.hasMany(PortFutuMov, { as: 'exchangeCodePortFutuMovs', foreignKey: 'exchangeCode' })
  PortFutuMov.belongsTo(InvptyDet, { as: 'ccpCmCodeInvptyDet', foreignKey: 'ccpCmCode' })
  InvptyDet.hasMany(PortFutuMov, { as: 'ccpCmCodePortFutuMovs', foreignKey: 'ccpCmCode' })
  PortFutuPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'invptyCode' })
  PortFutuPos.belongsTo(InvptyDet, { as: 'exchangeCodeInvptyDet', foreignKey: 'exchangeCode' })
  InvptyDet.hasMany(PortFutuPos, { as: 'exchangeCodePortFutuPos', foreignKey: 'exchangeCode' })
  PortFutuPos.belongsTo(InvptyDet, { as: 'ccpCmCodeInvptyDet', foreignKey: 'ccpCmCode' })
  InvptyDet.hasMany(PortFutuPos, { as: 'ccpCmCodePortFutuPos', foreignKey: 'ccpCmCode' })
  PortGuarPos.belongsTo(InvptyDet, { as: 'beneficiaryCodeInvptyDet', foreignKey: 'beneficiaryCode' })
  InvptyDet.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'beneficiaryCode' })
  PortGuarPos.belongsTo(InvptyDet, { as: 'finalBeneficiaryInvptyDet', foreignKey: 'finalBeneficiary' })
  InvptyDet.hasMany(PortGuarPos, { as: 'finalBeneficiaryPortGuarPos', foreignKey: 'finalBeneficiary' })
  PortGuarPos.belongsTo(InvptyDet, { as: 'obligorCodeInvptyDet', foreignKey: 'obligorCode' })
  InvptyDet.hasMany(PortGuarPos, { as: 'obligorCodePortGuarPos', foreignKey: 'obligorCode' })
  PortLoanMov.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'invptyCode' })
  PortLoanPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'invptyCode' })
  PortNdfsMov.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'invptyCode' })
  PortNdfsPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'invptyCode' })
  PortNostroPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortNostroPos, { as: 'portNostroPos', foreignKey: 'invptyCode' })
  PortOtherPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortOtherPos, { as: 'portOtherPos', foreignKey: 'invptyCode' })
  PortRecvLnk.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortRecvLnk, { as: 'portRecvLnks', foreignKey: 'invptyCode' })
  PortRecvMov.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortRecvMov, { as: 'portRecvMovs', foreignKey: 'invptyCode' })
  PortRecvPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortRecvPos, { as: 'portRecvPos', foreignKey: 'invptyCode' })
  PortRepoMov.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'invptyCode' })
  PortRepoPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'invptyCode' })
  PortSwapMov.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'invptyCode' })
  PortSwapPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'invptyCode' })
  PortThirdPartyLnk.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortThirdPartyLnk, { as: 'portThirdPartyLnks', foreignKey: 'invptyCode' })
  PortVostroPos.belongsTo(InvptyDet, { as: 'invptyCodeInvptyDet', foreignKey: 'invptyCode' })
  InvptyDet.hasMany(PortVostroPos, { as: 'portVostroPos', foreignKey: 'invptyCode' })
  InvptyExtCod.belongsTo(InvptyExtCodCodif, { as: 'extCodeCodifierInvptyExtCodCodif', foreignKey: 'extCodeCodifier' })
  InvptyExtCodCodif.hasMany(InvptyExtCod, { as: 'invptyExtCods', foreignKey: 'extCodeCodifier' })
  InvptyLink.belongsTo(InvptyLinkCodif, { as: 'linkTypeCodifierInvptyLinkCodif', foreignKey: 'linkTypeCodifier' })
  InvptyLinkCodif.hasMany(InvptyLink, { as: 'invptyLinks', foreignKey: 'linkTypeCodifier' })
  InvptyLink.belongsTo(InvptyLinkType, { as: 'linkTypeInvptyLinkType', foreignKey: 'linkType' })
  InvptyLinkType.hasMany(InvptyLink, { as: 'invptyLinks', foreignKey: 'linkType' })
  InvptyRtngAgcyRtsStr.belongsTo(InvptyRtngAgcy, { as: 'agencyCodeInvptyRtngAgcy', foreignKey: 'agencyCode' })
  InvptyRtngAgcy.hasMany(InvptyRtngAgcyRtsStr, { as: 'invptyRtngAgcyRtsStrs', foreignKey: 'agencyCode' })
  InvptyRtngAgcyRtsLnk.belongsTo(InvptyRtngAgcyRtsStr, { as: 'rating1InvptyRtngAgcyRtsStr', foreignKey: 'rating1' })
  InvptyRtngAgcyRtsStr.hasMany(InvptyRtngAgcyRtsLnk, { as: 'invptyRtngAgcyRtsLnks', foreignKey: 'rating1' })
  InvptyRtngAgcyRtsLnk.belongsTo(InvptyRtngAgcyRtsStr, { as: 'rating2InvptyRtngAgcyRtsStr', foreignKey: 'rating2' })
  InvptyRtngAgcyRtsStr.hasMany(InvptyRtngAgcyRtsLnk, { as: 'rating2InvptyRtngAgcyRtsLnks', foreignKey: 'rating2' })
  InvptyRtngCrd.belongsTo(InvptyRtngAgcyRtsStr, { as: 'rating', foreignKey: 'ratingId' })
  InvptyRtngAgcyRtsStr.hasMany(InvptyRtngCrd, { as: 'invptyRtngCrds', foreignKey: 'ratingId' })
  InvptyTypeLnk.belongsTo(InvptyType, { as: 'invptyTypeInvptyType', foreignKey: 'invptyType' })
  InvptyType.hasMany(InvptyTypeLnk, { as: 'invptyTypeLnks', foreignKey: 'invptyType' })
  InvptyTypeLnk.belongsTo(InvptyTypeCodif, { as: 'invptyTypeCodifierInvptyTypeCodif', foreignKey: 'invptyTypeCodifier' })
  InvptyTypeCodif.hasMany(InvptyTypeLnk, { as: 'invptyTypeLnks', foreignKey: 'invptyTypeCodifier' })
  MktdEodPrice.belongsTo(MktdSecurity, { as: 'securityReferenceMktdSecurity', foreignKey: 'securityReference' })
  MktdSecurity.hasMany(MktdEodPrice, { as: 'mktdEodPrices', foreignKey: 'securityReference' })
  PnlOperincCsf.belongsTo(PnlOperincCsfLink, { as: 'companyCodePnlOperincCsfLink', foreignKey: 'companyCode' })
  PnlOperincCsfLink.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'companyCode' })
  PnlOperincCsf.belongsTo(PnlOperincCsfLink, { as: 'contractReferencePnlOperincCsfLink', foreignKey: 'contractReference' })
  PnlOperincCsfLink.hasMany(PnlOperincCsf, { as: 'contractReferencePnlOperincCsfs', foreignKey: 'contractReference' })
  PnlOperincCsf.belongsTo(PnlOperincCsfLink, { as: 'productCodePnlOperincCsfLink', foreignKey: 'productCode' })
  PnlOperincCsfLink.hasMany(PnlOperincCsf, { as: 'productCodePnlOperincCsfs', foreignKey: 'productCode' })
  PnlOperincCsf.belongsTo(PnlOperincCsfLink, { as: 'referenceDatePnlOperincCsfLink', foreignKey: 'referenceDate' })
  PnlOperincCsfLink.hasMany(PnlOperincCsf, { as: 'referenceDatePnlOperincCsfs', foreignKey: 'referenceDate' })
  PnlOperincCsf.belongsTo(PnlOperincCsfLink, { as: 'sourceSystemPnlOperincCsfLink', foreignKey: 'sourceSystem' })
  PnlOperincCsfLink.hasMany(PnlOperincCsf, { as: 'sourceSystemPnlOperincCsfs', foreignKey: 'sourceSystem' })
  PnlOperincCsf.belongsTo(PnlOperincCsfLink, { as: 'sourceTablePnlOperincCsfLink', foreignKey: 'sourceTable' })
  PnlOperincCsfLink.hasMany(PnlOperincCsf, { as: 'sourceTablePnlOperincCsfs', foreignKey: 'sourceTable' })
  BuyinContractLink.belongsTo(PortContractList, { as: 'buyinContractReferencePortContractList', foreignKey: 'buyinContractReference' })
  PortContractList.hasMany(BuyinContractLink, { as: 'buyinContractLinks', foreignKey: 'buyinContractReference' })
  BuyinContractLink.belongsTo(PortContractList, { as: 'buyinProductCodePortContractList', foreignKey: 'buyinProductCode' })
  PortContractList.hasMany(BuyinContractLink, { as: 'buyinProductCodeBuyinContractLinks', foreignKey: 'buyinProductCode' })
  BuyinContractLink.belongsTo(PortContractList, { as: 'buyinSourceSystemPortContractList', foreignKey: 'buyinSourceSystem' })
  PortContractList.hasMany(BuyinContractLink, { as: 'buyinSourceSystemBuyinContractLinks', foreignKey: 'buyinSourceSystem' })
  BuyinContractLink.belongsTo(PortContractList, { as: 'buyinSourceTablePortContractList', foreignKey: 'buyinSourceTable' })
  PortContractList.hasMany(BuyinContractLink, { as: 'buyinSourceTableBuyinContractLinks', foreignKey: 'buyinSourceTable' })
  BuyinContractLink.belongsTo(PortContractList, { as: 'companyCodePortContractList', foreignKey: 'companyCode' })
  PortContractList.hasMany(BuyinContractLink, { as: 'companyCodeBuyinContractLinks', foreignKey: 'companyCode' })
  BuyinContractLink.belongsTo(PortContractList, { as: 'selloutContractReferencePortContractList', foreignKey: 'selloutContractReference' })
  PortContractList.hasMany(BuyinContractLink, { as: 'selloutContractReferenceBuyinContractLinks', foreignKey: 'selloutContractReference' })
  BuyinContractLink.belongsTo(PortContractList, { as: 'selloutProductCodePortContractList', foreignKey: 'selloutProductCode' })
  PortContractList.hasMany(BuyinContractLink, { as: 'selloutProductCodeBuyinContractLinks', foreignKey: 'selloutProductCode' })
  BuyinContractLink.belongsTo(PortContractList, { as: 'selloutSourceSystemPortContractList', foreignKey: 'selloutSourceSystem' })
  PortContractList.hasMany(BuyinContractLink, { as: 'selloutSourceSystemBuyinContractLinks', foreignKey: 'selloutSourceSystem' })
  BuyinContractLink.belongsTo(PortContractList, { as: 'selloutSourceTablePortContractList', foreignKey: 'selloutSourceTable' })
  PortContractList.hasMany(BuyinContractLink, { as: 'selloutSourceTableBuyinContractLinks', foreignKey: 'selloutSourceTable' })
  CrmContractLink.belongsTo(PortContractList, { as: 'obligContractReferencePortContractList', foreignKey: 'obligContractReference' })
  PortContractList.hasMany(CrmContractLink, { as: 'crmContractLinks', foreignKey: 'obligContractReference' })
  CrmContractLink.belongsTo(PortContractList, { as: 'obligCtrctCompanyCodePortContractList', foreignKey: 'obligCtrctCompanyCode' })
  PortContractList.hasMany(CrmContractLink, { as: 'obligCtrctCompanyCodeCrmContractLinks', foreignKey: 'obligCtrctCompanyCode' })
  CrmContractLink.belongsTo(PortContractList, { as: 'obligCtrctProductCodePortContractList', foreignKey: 'obligCtrctProductCode' })
  PortContractList.hasMany(CrmContractLink, { as: 'obligCtrctProductCodeCrmContractLinks', foreignKey: 'obligCtrctProductCode' })
  CrmContractLink.belongsTo(PortContractList, { as: 'obligCtrctSourceSystemPortContractList', foreignKey: 'obligCtrctSourceSystem' })
  PortContractList.hasMany(CrmContractLink, { as: 'obligCtrctSourceSystemCrmContractLinks', foreignKey: 'obligCtrctSourceSystem' })
  CrmContractLink.belongsTo(PortContractList, { as: 'obligCtrctSourceTablePortContractList', foreignKey: 'obligCtrctSourceTable' })
  PortContractList.hasMany(CrmContractLink, { as: 'obligCtrctSourceTableCrmContractLinks', foreignKey: 'obligCtrctSourceTable' })
  PnlFeeincDet.belongsTo(PortContractList, { as: 'companyCodePortContractList', foreignKey: 'companyCode' })
  PortContractList.hasMany(PnlFeeincDet, { as: 'pnlFeeincDets', foreignKey: 'companyCode' })
  PnlFeeincDet.belongsTo(PortContractList, { as: 'contractReferencePortContractList', foreignKey: 'contractReference' })
  PortContractList.hasMany(PnlFeeincDet, { as: 'contractReferencePnlFeeincDets', foreignKey: 'contractReference' })
  PnlFeeincDet.belongsTo(PortContractList, { as: 'productCodePortContractList', foreignKey: 'productCode' })
  PortContractList.hasMany(PnlFeeincDet, { as: 'productCodePnlFeeincDets', foreignKey: 'productCode' })
  PnlFeeincDet.belongsTo(PortContractList, { as: 'sourceSystemPortContractList', foreignKey: 'sourceSystem' })
  PortContractList.hasMany(PnlFeeincDet, { as: 'sourceSystemPnlFeeincDets', foreignKey: 'sourceSystem' })
  PnlFeeincDet.belongsTo(PortContractList, { as: 'sourceTablePortContractList', foreignKey: 'sourceTable' })
  PortContractList.hasMany(PnlFeeincDet, { as: 'sourceTablePnlFeeincDets', foreignKey: 'sourceTable' })
  PnlGmplexClc.belongsTo(PortContractList, { as: 'companyCodePortContractList', foreignKey: 'companyCode' })
  PortContractList.hasMany(PnlGmplexClc, { as: 'pnlGmplexClcs', foreignKey: 'companyCode' })
  PnlGmplexClc.belongsTo(PortContractList, { as: 'contractReferencePortContractList', foreignKey: 'contractReference' })
  PortContractList.hasMany(PnlGmplexClc, { as: 'contractReferencePnlGmplexClcs', foreignKey: 'contractReference' })
  PnlGmplexClc.belongsTo(PortContractList, { as: 'productCodePortContractList', foreignKey: 'productCode' })
  PortContractList.hasMany(PnlGmplexClc, { as: 'productCodePnlGmplexClcs', foreignKey: 'productCode' })
  PnlGmplexClc.belongsTo(PortContractList, { as: 'sourceSystemPortContractList', foreignKey: 'sourceSystem' })
  PortContractList.hasMany(PnlGmplexClc, { as: 'sourceSystemPnlGmplexClcs', foreignKey: 'sourceSystem' })
  PnlGmplexClc.belongsTo(PortContractList, { as: 'sourceTablePortContractList', foreignKey: 'sourceTable' })
  PortContractList.hasMany(PnlGmplexClc, { as: 'sourceTablePnlGmplexClcs', foreignKey: 'sourceTable' })
  PnlInterestincClc.belongsTo(PortContractList, { as: 'companyCodePortContractList', foreignKey: 'companyCode' })
  PortContractList.hasMany(PnlInterestincClc, { as: 'pnlInterestincClcs', foreignKey: 'companyCode' })
  PnlInterestincClc.belongsTo(PortContractList, { as: 'contractReferencePortContractList', foreignKey: 'contractReference' })
  PortContractList.hasMany(PnlInterestincClc, { as: 'contractReferencePnlInterestincClcs', foreignKey: 'contractReference' })
  PnlInterestincClc.belongsTo(PortContractList, { as: 'productCodePortContractList', foreignKey: 'productCode' })
  PortContractList.hasMany(PnlInterestincClc, { as: 'productCodePnlInterestincClcs', foreignKey: 'productCode' })
  PnlInterestincClc.belongsTo(PortContractList, { as: 'sourceSystemPortContractList', foreignKey: 'sourceSystem' })
  PortContractList.hasMany(PnlInterestincClc, { as: 'sourceSystemPnlInterestincClcs', foreignKey: 'sourceSystem' })
  PnlInterestincClc.belongsTo(PortContractList, { as: 'sourceTablePortContractList', foreignKey: 'sourceTable' })
  PortContractList.hasMany(PnlInterestincClc, { as: 'sourceTablePnlInterestincClcs', foreignKey: 'sourceTable' })
  PortFctyLnk.belongsTo(PortContractList, { as: 'companyCodePortContractList', foreignKey: 'companyCode' })
  PortContractList.hasMany(PortFctyLnk, { as: 'portFctyLnks', foreignKey: 'companyCode' })
  PortFctyLnk.belongsTo(PortContractList, { as: 'contractReferencePortContractList', foreignKey: 'contractReference' })
  PortContractList.hasMany(PortFctyLnk, { as: 'contractReferencePortFctyLnks', foreignKey: 'contractReference' })
  PortFctyLnk.belongsTo(PortContractList, { as: 'productCodePortContractList', foreignKey: 'productCode' })
  PortContractList.hasMany(PortFctyLnk, { as: 'productCodePortFctyLnks', foreignKey: 'productCode' })
  PortFctyLnk.belongsTo(PortContractList, { as: 'sourceSystemPortContractList', foreignKey: 'sourceSystem' })
  PortContractList.hasMany(PortFctyLnk, { as: 'sourceSystemPortFctyLnks', foreignKey: 'sourceSystem' })
  PortFctyLnk.belongsTo(PortContractList, { as: 'sourceTablePortContractList', foreignKey: 'sourceTable' })
  PortContractList.hasMany(PortFctyLnk, { as: 'sourceTablePortFctyLnks', foreignKey: 'sourceTable' })
  PortHedgeLnk.belongsTo(PortContractList, { as: 'hedgeInsCompanyCodePortContractList', foreignKey: 'hedgeInsCompanyCode' })
  PortContractList.hasMany(PortHedgeLnk, { as: 'portHedgeLnks', foreignKey: 'hedgeInsCompanyCode' })
  PortHedgeLnk.belongsTo(PortContractList, { as: 'hedgeInsContractReferencePortContractList', foreignKey: 'hedgeInsContractReference' })
  PortContractList.hasMany(PortHedgeLnk, { as: 'hedgeInsContractReferencePortHedgeLnks', foreignKey: 'hedgeInsContractReference' })
  PortHedgeLnk.belongsTo(PortContractList, { as: 'hedgeInsProductCodePortContractList', foreignKey: 'hedgeInsProductCode' })
  PortContractList.hasMany(PortHedgeLnk, { as: 'hedgeInsProductCodePortHedgeLnks', foreignKey: 'hedgeInsProductCode' })
  PortHedgeLnk.belongsTo(PortContractList, { as: 'hedgeInsSourceSystemPortContractList', foreignKey: 'hedgeInsSourceSystem' })
  PortContractList.hasMany(PortHedgeLnk, { as: 'hedgeInsSourceSystemPortHedgeLnks', foreignKey: 'hedgeInsSourceSystem' })
  PortHedgeLnk.belongsTo(PortContractList, { as: 'hedgeInsSourceTablePortContractList', foreignKey: 'hedgeInsSourceTable' })
  PortContractList.hasMany(PortHedgeLnk, { as: 'hedgeInsSourceTablePortHedgeLnks', foreignKey: 'hedgeInsSourceTable' })
  PortHedgeLnk.belongsTo(PortContractList, { as: 'hedgeObjCompanyCodePortContractList', foreignKey: 'hedgeObjCompanyCode' })
  PortContractList.hasMany(PortHedgeLnk, { as: 'hedgeObjCompanyCodePortHedgeLnks', foreignKey: 'hedgeObjCompanyCode' })
  PortHedgeLnk.belongsTo(PortContractList, { as: 'hedgeObjContractReferencePortContractList', foreignKey: 'hedgeObjContractReference' })
  PortContractList.hasMany(PortHedgeLnk, { as: 'hedgeObjContractReferencePortHedgeLnks', foreignKey: 'hedgeObjContractReference' })
  PortHedgeLnk.belongsTo(PortContractList, { as: 'hedgeObjProductCodePortContractList', foreignKey: 'hedgeObjProductCode' })
  PortContractList.hasMany(PortHedgeLnk, { as: 'hedgeObjProductCodePortHedgeLnks', foreignKey: 'hedgeObjProductCode' })
  PortHedgeLnk.belongsTo(PortContractList, { as: 'hedgeObjSourceSystemPortContractList', foreignKey: 'hedgeObjSourceSystem' })
  PortContractList.hasMany(PortHedgeLnk, { as: 'hedgeObjSourceSystemPortHedgeLnks', foreignKey: 'hedgeObjSourceSystem' })
  PortHedgeLnk.belongsTo(PortContractList, { as: 'hedgeObjSourceTablePortContractList', foreignKey: 'hedgeObjSourceTable' })
  PortContractList.hasMany(PortHedgeLnk, { as: 'hedgeObjSourceTablePortHedgeLnks', foreignKey: 'hedgeObjSourceTable' })
  PortThirdPartyLnk.belongsTo(PortContractList, { as: 'companyCodePortContractList', foreignKey: 'companyCode' })
  PortContractList.hasMany(PortThirdPartyLnk, { as: 'portThirdPartyLnks', foreignKey: 'companyCode' })
  PortThirdPartyLnk.belongsTo(PortContractList, { as: 'contractReferencePortContractList', foreignKey: 'contractReference' })
  PortContractList.hasMany(PortThirdPartyLnk, { as: 'contractReferencePortThirdPartyLnks', foreignKey: 'contractReference' })
  PortThirdPartyLnk.belongsTo(PortContractList, { as: 'productCodePortContractList', foreignKey: 'productCode' })
  PortContractList.hasMany(PortThirdPartyLnk, { as: 'productCodePortThirdPartyLnks', foreignKey: 'productCode' })
  PortThirdPartyLnk.belongsTo(PortContractList, { as: 'sourceSystemPortContractList', foreignKey: 'sourceSystem' })
  PortContractList.hasMany(PortThirdPartyLnk, { as: 'sourceSystemPortThirdPartyLnks', foreignKey: 'sourceSystem' })
  PortThirdPartyLnk.belongsTo(PortContractList, { as: 'sourceTablePortContractList', foreignKey: 'sourceTable' })
  PortContractList.hasMany(PortThirdPartyLnk, { as: 'sourceTablePortThirdPartyLnks', foreignKey: 'sourceTable' })
  PortDsecCsf.belongsTo(PortDsecPos, { as: 'contractReferencePortDsecPo', foreignKey: 'contractReference' })
  PortDsecPos.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'contractReference' })
  PortDsecCsf.belongsTo(PortDsecPos, { as: 'productCodePortDsecPo', foreignKey: 'productCode' })
  PortDsecPos.hasMany(PortDsecCsf, { as: 'productCodePortDsecCsfs', foreignKey: 'productCode' })
  PortDsecCsf.belongsTo(PortDsecPos, { as: 'referenceDatePortDsecPo', foreignKey: 'referenceDate' })
  PortDsecPos.hasMany(PortDsecCsf, { as: 'referenceDatePortDsecCsfs', foreignKey: 'referenceDate' })
  PortDsecCsf.belongsTo(PortDsecPos, { as: 'sourceSystemPortDsecPo', foreignKey: 'sourceSystem' })
  PortDsecPos.hasMany(PortDsecCsf, { as: 'sourceSystemPortDsecCsfs', foreignKey: 'sourceSystem' })
  PortFctyLnk.belongsTo(PortFctyPos, { as: 'fkPortFctyPosfirstContractReferencePortFctyPo', foreignKey: 'fkPortFctyPosfirstContractReference' })
  PortFctyPos.hasMany(PortFctyLnk, { as: 'portFctyLnks', foreignKey: 'fkPortFctyPosfirstContractReference' })
  PortFctyLnk.belongsTo(PortFctyPos, { as: 'facilityProductCodePortFctyPo', foreignKey: 'facilityProductCode' })
  PortFctyPos.hasMany(PortFctyLnk, { as: 'facilityProductCodePortFctyLnks', foreignKey: 'facilityProductCode' })
  PortFctyLnk.belongsTo(PortFctyPos, { as: 'facilityReferencePortFctyPo', foreignKey: 'facilityReference' })
  PortFctyPos.hasMany(PortFctyLnk, { as: 'facilityReferencePortFctyLnks', foreignKey: 'facilityReference' })
  PortFctyLnk.belongsTo(PortFctyPos, { as: 'facilitySourceSystemPortFctyPo', foreignKey: 'facilitySourceSystem' })
  PortFctyPos.hasMany(PortFctyLnk, { as: 'facilitySourceSystemPortFctyLnks', foreignKey: 'facilitySourceSystem' })
  PortFctyLnk.belongsTo(PortFctyPos, { as: 'referenceDatePortFctyPo', foreignKey: 'referenceDate' })
  PortFctyPos.hasMany(PortFctyLnk, { as: 'referenceDatePortFctyLnks', foreignKey: 'referenceDate' })
  PortFincCsf.belongsTo(PortFincPos, { as: 'contractReferencePortFincPo', foreignKey: 'contractReference' })
  PortFincPos.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'contractReference' })
  PortFincCsf.belongsTo(PortFincPos, { as: 'productCodePortFincPo', foreignKey: 'productCode' })
  PortFincPos.hasMany(PortFincCsf, { as: 'productCodePortFincCsfs', foreignKey: 'productCode' })
  PortFincCsf.belongsTo(PortFincPos, { as: 'referenceDatePortFincPo', foreignKey: 'referenceDate' })
  PortFincPos.hasMany(PortFincCsf, { as: 'referenceDatePortFincCsfs', foreignKey: 'referenceDate' })
  PortFincCsf.belongsTo(PortFincPos, { as: 'sourceSystemPortFincPo', foreignKey: 'sourceSystem' })
  PortFincPos.hasMany(PortFincCsf, { as: 'sourceSystemPortFincCsfs', foreignKey: 'sourceSystem' })
  PortFoexCsf.belongsTo(PortFoexPos, { as: 'contractReferencePortFoexPo', foreignKey: 'contractReference' })
  PortFoexPos.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'contractReference' })
  PortFoexCsf.belongsTo(PortFoexPos, { as: 'productCodePortFoexPo', foreignKey: 'productCode' })
  PortFoexPos.hasMany(PortFoexCsf, { as: 'productCodePortFoexCsfs', foreignKey: 'productCode' })
  PortFoexCsf.belongsTo(PortFoexPos, { as: 'referenceDatePortFoexPo', foreignKey: 'referenceDate' })
  PortFoexPos.hasMany(PortFoexCsf, { as: 'referenceDatePortFoexCsfs', foreignKey: 'referenceDate' })
  PortFoexCsf.belongsTo(PortFoexPos, { as: 'sourceSystemPortFoexPo', foreignKey: 'sourceSystem' })
  PortFoexPos.hasMany(PortFoexCsf, { as: 'sourceSystemPortFoexCsfs', foreignKey: 'sourceSystem' })
  PortFutuCsf.belongsTo(PortFutuPos, { as: 'companyCodePortFutuPo', foreignKey: 'companyCode' })
  PortFutuPos.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'companyCode' })
  PortFutuCsf.belongsTo(PortFutuPos, { as: 'contractReferencePortFutuPo', foreignKey: 'contractReference' })
  PortFutuPos.hasMany(PortFutuCsf, { as: 'contractReferencePortFutuCsfs', foreignKey: 'contractReference' })
  PortFutuCsf.belongsTo(PortFutuPos, { as: 'productCodePortFutuPo', foreignKey: 'productCode' })
  PortFutuPos.hasMany(PortFutuCsf, { as: 'productCodePortFutuCsfs', foreignKey: 'productCode' })
  PortFutuCsf.belongsTo(PortFutuPos, { as: 'referenceDatePortFutuPo', foreignKey: 'referenceDate' })
  PortFutuPos.hasMany(PortFutuCsf, { as: 'referenceDatePortFutuCsfs', foreignKey: 'referenceDate' })
  PortFutuCsf.belongsTo(PortFutuPos, { as: 'sourceSystemPortFutuPo', foreignKey: 'sourceSystem' })
  PortFutuPos.hasMany(PortFutuCsf, { as: 'sourceSystemPortFutuCsfs', foreignKey: 'sourceSystem' })
  PortLoanCsf.belongsTo(PortLoanPos, { as: 'contractReferencePortLoanPo', foreignKey: 'contractReference' })
  PortLoanPos.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'contractReference' })
  PortLoanCsf.belongsTo(PortLoanPos, { as: 'productCodePortLoanPo', foreignKey: 'productCode' })
  PortLoanPos.hasMany(PortLoanCsf, { as: 'productCodePortLoanCsfs', foreignKey: 'productCode' })
  PortLoanCsf.belongsTo(PortLoanPos, { as: 'referenceDatePortLoanPo', foreignKey: 'referenceDate' })
  PortLoanPos.hasMany(PortLoanCsf, { as: 'referenceDatePortLoanCsfs', foreignKey: 'referenceDate' })
  PortLoanCsf.belongsTo(PortLoanPos, { as: 'sourceSystemPortLoanPo', foreignKey: 'sourceSystem' })
  PortLoanPos.hasMany(PortLoanCsf, { as: 'sourceSystemPortLoanCsfs', foreignKey: 'sourceSystem' })
  PortNdfsCsf.belongsTo(PortNdfsPos, { as: 'contractReferencePortNdfsPo', foreignKey: 'contractReference' })
  PortNdfsPos.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'contractReference' })
  PortNdfsCsf.belongsTo(PortNdfsPos, { as: 'productCodePortNdfsPo', foreignKey: 'productCode' })
  PortNdfsPos.hasMany(PortNdfsCsf, { as: 'productCodePortNdfsCsfs', foreignKey: 'productCode' })
  PortNdfsCsf.belongsTo(PortNdfsPos, { as: 'referenceDatePortNdfsPo', foreignKey: 'referenceDate' })
  PortNdfsPos.hasMany(PortNdfsCsf, { as: 'referenceDatePortNdfsCsfs', foreignKey: 'referenceDate' })
  PortNdfsCsf.belongsTo(PortNdfsPos, { as: 'sourceSystemPortNdfsPo', foreignKey: 'sourceSystem' })
  PortNdfsPos.hasMany(PortNdfsCsf, { as: 'sourceSystemPortNdfsCsfs', foreignKey: 'sourceSystem' })
  PortNostroCsf.belongsTo(PortNostroPos, { as: 'companyCodePortNostroPo', foreignKey: 'companyCode' })
  PortNostroPos.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'companyCode' })
  PortNostroCsf.belongsTo(PortNostroPos, { as: 'contractReferencePortNostroPo', foreignKey: 'contractReference' })
  PortNostroPos.hasMany(PortNostroCsf, { as: 'contractReferencePortNostroCsfs', foreignKey: 'contractReference' })
  PortNostroCsf.belongsTo(PortNostroPos, { as: 'productCodePortNostroPo', foreignKey: 'productCode' })
  PortNostroPos.hasMany(PortNostroCsf, { as: 'productCodePortNostroCsfs', foreignKey: 'productCode' })
  PortNostroCsf.belongsTo(PortNostroPos, { as: 'referenceDatePortNostroPo', foreignKey: 'referenceDate' })
  PortNostroPos.hasMany(PortNostroCsf, { as: 'referenceDatePortNostroCsfs', foreignKey: 'referenceDate' })
  PortNostroCsf.belongsTo(PortNostroPos, { as: 'sourceSystemPortNostroPo', foreignKey: 'sourceSystem' })
  PortNostroPos.hasMany(PortNostroCsf, { as: 'sourceSystemPortNostroCsfs', foreignKey: 'sourceSystem' })
  PortOtherCsf.belongsTo(PortOtherPos, { as: 'companyCodePortOtherPo', foreignKey: 'companyCode' })
  PortOtherPos.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'companyCode' })
  PortOtherCsf.belongsTo(PortOtherPos, { as: 'contractReferencePortOtherPo', foreignKey: 'contractReference' })
  PortOtherPos.hasMany(PortOtherCsf, { as: 'contractReferencePortOtherCsfs', foreignKey: 'contractReference' })
  PortOtherCsf.belongsTo(PortOtherPos, { as: 'productCodePortOtherPo', foreignKey: 'productCode' })
  PortOtherPos.hasMany(PortOtherCsf, { as: 'productCodePortOtherCsfs', foreignKey: 'productCode' })
  PortOtherCsf.belongsTo(PortOtherPos, { as: 'referenceDatePortOtherPo', foreignKey: 'referenceDate' })
  PortOtherPos.hasMany(PortOtherCsf, { as: 'referenceDatePortOtherCsfs', foreignKey: 'referenceDate' })
  PortOtherCsf.belongsTo(PortOtherPos, { as: 'sourceSystemPortOtherPo', foreignKey: 'sourceSystem' })
  PortOtherPos.hasMany(PortOtherCsf, { as: 'sourceSystemPortOtherCsfs', foreignKey: 'sourceSystem' })
  PortRecvPos.belongsTo(PortRecvLnk, { as: 'productCodePortRecvLnk', foreignKey: 'productCode' })
  PortRecvLnk.hasMany(PortRecvPos, { as: 'portRecvPos', foreignKey: 'productCode' })
  PortRecvPos.belongsTo(PortRecvLnk, { as: 'receivablePoolRefPortRecvLnk', foreignKey: 'receivablePoolRef' })
  PortRecvLnk.hasMany(PortRecvPos, { as: 'receivablePoolRefPortRecvPos', foreignKey: 'receivablePoolRef' })
  PortRecvPos.belongsTo(PortRecvLnk, { as: 'referenceDatePortRecvLnk', foreignKey: 'referenceDate' })
  PortRecvLnk.hasMany(PortRecvPos, { as: 'referenceDatePortRecvPos', foreignKey: 'referenceDate' })
  PortRecvPos.belongsTo(PortRecvLnk, { as: 'sourceSystemPortRecvLnk', foreignKey: 'sourceSystem' })
  PortRecvLnk.hasMany(PortRecvPos, { as: 'sourceSystemPortRecvPos', foreignKey: 'sourceSystem' })
  PortRecvPos.belongsTo(PortRecvLnk, { as: 'companyCodePortRecvLnk', foreignKey: 'companyCode' })
  PortRecvLnk.hasMany(PortRecvPos, { as: 'companyCodePortRecvPos', foreignKey: 'companyCode' })
  PortRecvPos.belongsTo(PortRecvLnk, { as: 'costCentrePortRecvLnk', foreignKey: 'costCentre' })
  PortRecvLnk.hasMany(PortRecvPos, { as: 'costCentrePortRecvPos', foreignKey: 'costCentre' })
  PortRecvCsf.belongsTo(PortRecvPos, { as: 'cashFlowReferencePortRecvPo', foreignKey: 'cashFlowReference' })
  PortRecvPos.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'cashFlowReference' })
  PortRecvCsf.belongsTo(PortRecvPos, { as: 'contractReferencePortRecvPo', foreignKey: 'contractReference' })
  PortRecvPos.hasMany(PortRecvCsf, { as: 'contractReferencePortRecvCsfs', foreignKey: 'contractReference' })
  PortRecvCsf.belongsTo(PortRecvPos, { as: 'productCodePortRecvPo', foreignKey: 'productCode' })
  PortRecvPos.hasMany(PortRecvCsf, { as: 'productCodePortRecvCsfs', foreignKey: 'productCode' })
  PortRecvCsf.belongsTo(PortRecvPos, { as: 'referenceDatePortRecvPo', foreignKey: 'referenceDate' })
  PortRecvPos.hasMany(PortRecvCsf, { as: 'referenceDatePortRecvCsfs', foreignKey: 'referenceDate' })
  PortRecvCsf.belongsTo(PortRecvPos, { as: 'sourceSystemPortRecvPo', foreignKey: 'sourceSystem' })
  PortRecvPos.hasMany(PortRecvCsf, { as: 'sourceSystemPortRecvCsfs', foreignKey: 'sourceSystem' })
  PortRepoCsf.belongsTo(PortRepoPos, { as: 'contractReferencePortRepoPo', foreignKey: 'contractReference' })
  PortRepoPos.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'contractReference' })
  PortRepoCsf.belongsTo(PortRepoPos, { as: 'productCodePortRepoPo', foreignKey: 'productCode' })
  PortRepoPos.hasMany(PortRepoCsf, { as: 'productCodePortRepoCsfs', foreignKey: 'productCode' })
  PortRepoCsf.belongsTo(PortRepoPos, { as: 'referenceDatePortRepoPo', foreignKey: 'referenceDate' })
  PortRepoPos.hasMany(PortRepoCsf, { as: 'referenceDatePortRepoCsfs', foreignKey: 'referenceDate' })
  PortRepoCsf.belongsTo(PortRepoPos, { as: 'sourceSystemPortRepoPo', foreignKey: 'sourceSystem' })
  PortRepoPos.hasMany(PortRepoCsf, { as: 'sourceSystemPortRepoCsfs', foreignKey: 'sourceSystem' })
  PortRepoDet.belongsTo(PortRepoPos, { as: 'contractReferencePortRepoPo', foreignKey: 'contractReference' })
  PortRepoPos.hasMany(PortRepoDet, { as: 'portRepoDets', foreignKey: 'contractReference' })
  PortRepoDet.belongsTo(PortRepoPos, { as: 'productCodePortRepoPo', foreignKey: 'productCode' })
  PortRepoPos.hasMany(PortRepoDet, { as: 'productCodePortRepoDets', foreignKey: 'productCode' })
  PortRepoDet.belongsTo(PortRepoPos, { as: 'referenceDatePortRepoPo', foreignKey: 'referenceDate' })
  PortRepoPos.hasMany(PortRepoDet, { as: 'referenceDatePortRepoDets', foreignKey: 'referenceDate' })
  PortRepoDet.belongsTo(PortRepoPos, { as: 'sourceSystemPortRepoPo', foreignKey: 'sourceSystem' })
  PortRepoPos.hasMany(PortRepoDet, { as: 'sourceSystemPortRepoDets', foreignKey: 'sourceSystem' })
  PortSwapCsf.belongsTo(PortSwapPos, { as: 'contractReferencePortSwapPo', foreignKey: 'contractReference' })
  PortSwapPos.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'contractReference' })
  PortSwapCsf.belongsTo(PortSwapPos, { as: 'productCodePortSwapPo', foreignKey: 'productCode' })
  PortSwapPos.hasMany(PortSwapCsf, { as: 'productCodePortSwapCsfs', foreignKey: 'productCode' })
  PortSwapCsf.belongsTo(PortSwapPos, { as: 'referenceDatePortSwapPo', foreignKey: 'referenceDate' })
  PortSwapPos.hasMany(PortSwapCsf, { as: 'referenceDatePortSwapCsfs', foreignKey: 'referenceDate' })
  PortSwapCsf.belongsTo(PortSwapPos, { as: 'sourceSystemPortSwapPo', foreignKey: 'sourceSystem' })
  PortSwapPos.hasMany(PortSwapCsf, { as: 'sourceSystemPortSwapCsfs', foreignKey: 'sourceSystem' })
  PortVostroCsf.belongsTo(PortVostroPos, { as: 'companyCodePortVostroPo', foreignKey: 'companyCode' })
  PortVostroPos.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'companyCode' })
  PortVostroCsf.belongsTo(PortVostroPos, { as: 'contractReferencePortVostroPo', foreignKey: 'contractReference' })
  PortVostroPos.hasMany(PortVostroCsf, { as: 'contractReferencePortVostroCsfs', foreignKey: 'contractReference' })
  PortVostroCsf.belongsTo(PortVostroPos, { as: 'productCodePortVostroPo', foreignKey: 'productCode' })
  PortVostroPos.hasMany(PortVostroCsf, { as: 'productCodePortVostroCsfs', foreignKey: 'productCode' })
  PortVostroCsf.belongsTo(PortVostroPos, { as: 'referenceDatePortVostroPo', foreignKey: 'referenceDate' })
  PortVostroPos.hasMany(PortVostroCsf, { as: 'referenceDatePortVostroCsfs', foreignKey: 'referenceDate' })
  PortVostroCsf.belongsTo(PortVostroPos, { as: 'sourceSystemPortVostroPo', foreignKey: 'sourceSystem' })
  PortVostroPos.hasMany(PortVostroCsf, { as: 'sourceSystemPortVostroCsfs', foreignKey: 'sourceSystem' })
  AlcmCapitalProductParam.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(AlcmCapitalProductParam, { as: 'alcmCapitalProductParams', foreignKey: 'productCode' })
  AlcmLiqNsfrProductParam.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(AlcmLiqNsfrProductParam, { as: 'alcmLiqNsfrProductParams', foreignKey: 'productCode' })
  CrmGuarPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'productCode' })
  CrmInstrumentList.belongsTo(Product, { as: 'crmProductCodeProduct', foreignKey: 'crmProductCode' })
  Product.hasMany(CrmInstrumentList, { as: 'crmInstrumentLists', foreignKey: 'crmProductCode' })
  CrmProductLink.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(CrmProductLink, { as: 'crmProductLinks', foreignKey: 'productCode' })
  FcmgtProductLink.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(FcmgtProductLink, { as: 'fcmgtProductLinks', foreignKey: 'productCode' })
  PortContractList.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortContractList, { as: 'portContractLists', foreignKey: 'productCode' })
  PortDsecMov.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'productCode' })
  PortDsecPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'productCode' })
  PortFctyMov.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'productCode' })
  PortFctyPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'productCode' })
  PortFincMov.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'productCode' })
  PortFincPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'productCode' })
  PortFoexMov.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'productCode' })
  PortFoexPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'productCode' })
  PortFutuMov.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'productCode' })
  PortFutuPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'productCode' })
  PortGuarMov.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'productCode' })
  PortGuarPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'productCode' })
  PortLoanMov.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'productCode' })
  PortLoanPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'productCode' })
  PortNdfsMov.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'productCode' })
  PortNdfsPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'productCode' })
  PortNostroPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortNostroPos, { as: 'portNostroPos', foreignKey: 'productCode' })
  PortOtherPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortOtherPos, { as: 'portOtherPos', foreignKey: 'productCode' })
  PortRecvLnk.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortRecvLnk, { as: 'portRecvLnks', foreignKey: 'productCode' })
  PortSwapMov.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'productCode' })
  PortSwapPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'productCode' })
  PortVostroPos.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(PortVostroPos, { as: 'portVostroPos', foreignKey: 'productCode' })
  ProductExtCod.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(ProductExtCod, { as: 'productExtCods', foreignKey: 'productCode' })
  ProductHsbcGrpLink.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(ProductHsbcGrpLink, { as: 'productHsbcGrpLinks', foreignKey: 'productCode' })
  ReconDimension.belongsTo(Product, { as: 'productCodeProduct', foreignKey: 'productCode' })
  Product.hasMany(ReconDimension, { as: 'reconDimensions', foreignKey: 'productCode' })
  ProductHsbcGrpLink.belongsTo(ProductHsbcGrp, { as: 'grpProductCodeProductHsbcGrp', foreignKey: 'grpProductCode' })
  ProductHsbcGrp.hasMany(ProductHsbcGrpLink, { as: 'productHsbcGrpLinks', foreignKey: 'grpProductCode' })
  ReconBzdfContractLoad.belongsTo(ReconBzdfAggregation, { as: 'companyCodeReconBzdfAggregation', foreignKey: 'companyCode' })
  ReconBzdfAggregation.hasMany(ReconBzdfContractLoad, { as: 'reconBzdfContractLoads', foreignKey: 'companyCode' })
  ReconBzdfContractLoad.belongsTo(ReconBzdfAggregation, { as: 'costCentreReconBzdfAggregation', foreignKey: 'costCentre' })
  ReconBzdfAggregation.hasMany(ReconBzdfContractLoad, { as: 'costCentreReconBzdfContractLoads', foreignKey: 'costCentre' })
  ReconBzdfContractLoad.belongsTo(ReconBzdfAggregation, { as: 'referenceDateReconBzdfAggregation', foreignKey: 'referenceDate' })
  ReconBzdfAggregation.hasMany(ReconBzdfContractLoad, { as: 'referenceDateReconBzdfContractLoads', foreignKey: 'referenceDate' })
  ReconBzdfPoint.belongsTo(ReconBzdfMap, { as: 'reconBzdfMap', foreignKey: 'reconBzdfMapId' })
  ReconBzdfMap.hasMany(ReconBzdfPoint, { as: 'reconBzdfPoints', foreignKey: 'reconBzdfMapId' })
  ReconBzdfContractLoad.belongsTo(ReconDimension, { as: 'reconDimensionGroupReconDimension', foreignKey: 'reconDimensionGroup' })
  ReconDimension.hasMany(ReconBzdfContractLoad, { as: 'reconBzdfContractLoads', foreignKey: 'reconDimensionGroup' })
  ReconBzdfContractLoad.belongsTo(ReconDimension, { as: 'reconDimension', foreignKey: 'reconDimensionId' })
  ReconDimension.hasMany(ReconBzdfContractLoad, { as: 'reconDimensionReconBzdfContractLoads', foreignKey: 'reconDimensionId' })
  ReconBzdfPoint.belongsTo(ReconDimension, { as: 'reconDimension', foreignKey: 'reconDimensionId' })
  ReconDimension.hasMany(ReconBzdfPoint, { as: 'reconBzdfPoints', foreignKey: 'reconDimensionId' })
  ReconDimension.belongsTo(ReconDimensionGroup, { as: 'reconDimensionGroupReconDimensionGroup', foreignKey: 'reconDimensionGroup' })
  ReconDimensionGroup.hasMany(ReconDimension, { as: 'reconDimensions', foreignKey: 'reconDimensionGroup' })
  ReconGlAggregation.belongsTo(ReconDimensionGroup, { as: 'reconDimensionGroupReconDimensionGroup', foreignKey: 'reconDimensionGroup' })
  ReconDimensionGroup.hasMany(ReconGlAggregation, { as: 'reconGlAggregations', foreignKey: 'reconDimensionGroup' })
  ReconGlPoint.belongsTo(ReconDimensionGroup, { as: 'reconDimensionGroupReconDimensionGroup', foreignKey: 'reconDimensionGroup' })
  ReconDimensionGroup.hasMany(ReconGlPoint, { as: 'reconGlPoints', foreignKey: 'reconDimensionGroup' })
  ReconBzdfPoint.belongsTo(ReconMathOperator, { as: 'mathOperator', foreignKey: 'mathOperatorId' })
  ReconMathOperator.hasMany(ReconBzdfPoint, { as: 'reconBzdfPoints', foreignKey: 'mathOperatorId' })
  ReconDimension.belongsTo(ReconMetric, { as: 'reconMetric', foreignKey: 'reconMetricId' })
  ReconMetric.hasMany(ReconDimension, { as: 'reconDimensions', foreignKey: 'reconMetricId' })
  ReconBzdfAggregation.belongsTo(ReconResult, { as: 'companyCodeReconResult', foreignKey: 'companyCode' })
  ReconResult.hasMany(ReconBzdfAggregation, { as: 'reconBzdfAggregations', foreignKey: 'companyCode' })
  ReconBzdfAggregation.belongsTo(ReconResult, { as: 'costCentreReconResult', foreignKey: 'costCentre' })
  ReconResult.hasMany(ReconBzdfAggregation, { as: 'costCentreReconBzdfAggregations', foreignKey: 'costCentre' })
  ReconBzdfAggregation.belongsTo(ReconResult, { as: 'reconDimensionGroupReconResult', foreignKey: 'reconDimensionGroup' })
  ReconResult.hasMany(ReconBzdfAggregation, { as: 'reconDimensionGroupReconBzdfAggregations', foreignKey: 'reconDimensionGroup' })
  ReconBzdfAggregation.belongsTo(ReconResult, { as: 'referenceDateReconResult', foreignKey: 'referenceDate' })
  ReconResult.hasMany(ReconBzdfAggregation, { as: 'referenceDateReconBzdfAggregations', foreignKey: 'referenceDate' })
  ReconGlAggregation.belongsTo(ReconResult, { as: 'companyCodeReconResult', foreignKey: 'companyCode' })
  ReconResult.hasMany(ReconGlAggregation, { as: 'reconGlAggregations', foreignKey: 'companyCode' })
  ReconGlAggregation.belongsTo(ReconResult, { as: 'costCentreReconResult', foreignKey: 'costCentre' })
  ReconResult.hasMany(ReconGlAggregation, { as: 'costCentreReconGlAggregations', foreignKey: 'costCentre' })
  ReconGlAggregation.belongsTo(ReconResult, { as: 'referenceDateReconResult', foreignKey: 'referenceDate' })
  ReconResult.hasMany(ReconGlAggregation, { as: 'referenceDateReconGlAggregations', foreignKey: 'referenceDate' })
  SysAdhocHoliday.belongsTo(SysCalendar, { as: 'calendarCodeSysCalendar', foreignKey: 'calendarCode' })
  SysCalendar.hasMany(SysAdhocHoliday, { as: 'sysAdhocHolidays', foreignKey: 'calendarCode' })
  CrmGuarPos.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'originationCountry' })
  CrmNetagrDet.belongsTo(SysCountry, { as: 'conventionCountryCodeSysCountry', foreignKey: 'conventionCountryCode' })
  SysCountry.hasMany(CrmNetagrDet, { as: 'crmNetagrDets', foreignKey: 'conventionCountryCode' })
  InvptyDet.belongsTo(SysCountry, { as: 'countryOfResidenceSysCountry', foreignKey: 'countryOfResidence' })
  SysCountry.hasMany(InvptyDet, { as: 'invptyDets', foreignKey: 'countryOfResidence' })
  InvptyDet.belongsTo(SysCountry, { as: 'incorporationCountrySysCountry', foreignKey: 'incorporationCountry' })
  SysCountry.hasMany(InvptyDet, { as: 'incorporationCountryInvptyDets', foreignKey: 'incorporationCountry' })
  InvptyDet.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(InvptyDet, { as: 'originationCountryInvptyDets', foreignKey: 'originationCountry' })
  PortDsecMov.belongsTo(SysCountry, { as: 'centralBankSysCountry', foreignKey: 'centralBank' })
  SysCountry.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'centralBank' })
  PortDsecMov.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(PortDsecMov, { as: 'originationCountryPortDsecMovs', foreignKey: 'originationCountry' })
  PortDsecPos.belongsTo(SysCountry, { as: 'centralBankSysCountry', foreignKey: 'centralBank' })
  SysCountry.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'centralBank' })
  PortDsecPos.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(PortDsecPos, { as: 'originationCountryPortDsecPos', foreignKey: 'originationCountry' })
  PortFctyMov.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'originationCountry' })
  PortFctyPos.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'originationCountry' })
  PortGuarMov.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'originationCountry' })
  PortGuarPos.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'originationCountry' })
  PortLoanMov.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'originationCountry' })
  PortLoanPos.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'originationCountry' })
  PortRecvMov.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(PortRecvMov, { as: 'portRecvMovs', foreignKey: 'originationCountry' })
  PortRecvPos.belongsTo(SysCountry, { as: 'originationCountrySysCountry', foreignKey: 'originationCountry' })
  SysCountry.hasMany(PortRecvPos, { as: 'portRecvPos', foreignKey: 'originationCountry' })
  SysCalendar.belongsTo(SysCountry, { as: 'countryCodeIso2SysCountry', foreignKey: 'countryCodeIso2' })
  SysCountry.hasMany(SysCalendar, { as: 'sysCalendars', foreignKey: 'countryCodeIso2' })
  SysCountryCcyLnk.belongsTo(SysCountry, { as: 'countryCodeIso2SysCountry', foreignKey: 'countryCodeIso2' })
  SysCountry.hasMany(SysCountryCcyLnk, { as: 'sysCountryCcyLnks', foreignKey: 'countryCodeIso2' })
  TaxForeignPerson.belongsTo(SysCountry, { as: 'countrycountryIsoCode23SysCountry', foreignKey: 'countrycountryIsoCode23' })
  SysCountry.hasMany(TaxForeignPerson, { as: 'taxForeignPeople', foreignKey: 'countrycountryIsoCode23' })
  TaxForeignPerson.belongsTo(SysCountry, { as: 'countrycountryIsoCode24SysCountry', foreignKey: 'countrycountryIsoCode24' })
  SysCountry.hasMany(TaxForeignPerson, { as: 'countrycountryIsoCode24TaxForeignPeople', foreignKey: 'countrycountryIsoCode24' })
  AlcmCpadEadBase.belongsTo(SysCurrency, { as: 'notionalCcySysCurrency', foreignKey: 'notionalCcy' })
  SysCurrency.hasMany(AlcmCpadEadBase, { as: 'alcmCpadEadBases', foreignKey: 'notionalCcy' })
  AlcmCpadEadBase.belongsTo(SysCurrency, { as: 'underlyingCcyPayLegSysCurrency', foreignKey: 'underlyingCcyPayLeg' })
  SysCurrency.hasMany(AlcmCpadEadBase, { as: 'underlyingCcyPayLegAlcmCpadEadBases', foreignKey: 'underlyingCcyPayLeg' })
  AlcmCpadEadBase.belongsTo(SysCurrency, { as: 'underlyingCcyRecLegSysCurrency', foreignKey: 'underlyingCcyRecLeg' })
  SysCurrency.hasMany(AlcmCpadEadBase, { as: 'underlyingCcyRecLegAlcmCpadEadBases', foreignKey: 'underlyingCcyRecLeg' })
  AlcmLiqNsfrProductParam.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(AlcmLiqNsfrProductParam, { as: 'alcmLiqNsfrProductParams', foreignKey: 'currencyCode' })
  CrmGuarPos.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'currencyCode' })
  GenldgBsJournal.belongsTo(SysCurrency, { as: 'glReportCcySysCurrency', foreignKey: 'glReportCcy' })
  SysCurrency.hasMany(GenldgBsJournal, { as: 'genldgBsJournals', foreignKey: 'glReportCcy' })
  GenldgGlbsPos.belongsTo(SysCurrency, { as: 'glFunctionalCcySysCurrency', foreignKey: 'glFunctionalCcy' })
  SysCurrency.hasMany(GenldgGlbsPos, { as: 'genldgGlbsPos', foreignKey: 'glFunctionalCcy' })
  GenldgGlbsPos.belongsTo(SysCurrency, { as: 'glReportCcySysCurrency', foreignKey: 'glReportCcy' })
  SysCurrency.hasMany(GenldgGlbsPos, { as: 'glReportCcyGenldgGlbsPos', foreignKey: 'glReportCcy' })
  InvptyFncls.belongsTo(SysCurrency, { as: 'finReportCcySysCurrency', foreignKey: 'finReportCcy' })
  SysCurrency.hasMany(InvptyFncls, { as: 'invptyFncls', foreignKey: 'finReportCcy' })
  InvptyFncls.belongsTo(SysCurrency, { as: 'finFunctionalCcySysCurrency', foreignKey: 'finFunctionalCcy' })
  SysCurrency.hasMany(InvptyFncls, { as: 'finFunctionalCcyInvptyFncls', foreignKey: 'finFunctionalCcy' })
  PnlFeeincDet.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PnlFeeincDet, { as: 'pnlFeeincDets', foreignKey: 'currencyCode' })
  PnlGmplexDet.belongsTo(SysCurrency, { as: 'currencyPayLegSysCurrency', foreignKey: 'currencyPayLeg' })
  SysCurrency.hasMany(PnlGmplexDet, { as: 'pnlGmplexDets', foreignKey: 'currencyPayLeg' })
  PnlGmplexDet.belongsTo(SysCurrency, { as: 'currencyRecLegSysCurrency', foreignKey: 'currencyRecLeg' })
  SysCurrency.hasMany(PnlGmplexDet, { as: 'currencyRecLegPnlGmplexDets', foreignKey: 'currencyRecLeg' })
  PnlInterestincClc.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PnlInterestincClc, { as: 'pnlInterestincClcs', foreignKey: 'currencyCode' })
  PnlOperincCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'currencyCode' })
  PnlOperincCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PnlOperincCsf, { as: 'notionalCurrencyPnlOperincCsfs', foreignKey: 'notionalCurrency' })
  PnlOperincDet.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PnlOperincDet, { as: 'pnlOperincDets', foreignKey: 'currencyCode' })
  PortDsecCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'currencyCode' })
  PortDsecCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PortDsecCsf, { as: 'notionalCurrencyPortDsecCsfs', foreignKey: 'notionalCurrency' })
  PortDsecMov.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'currencyCode' })
  PortDsecPos.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'currencyCode' })
  PortFctyMov.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'currencyCode' })
  PortFctyPos.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'currencyCode' })
  PortFincCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'notionalCurrency' })
  PortFincCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortFincCsf, { as: 'currencyCodePortFincCsfs', foreignKey: 'currencyCode' })
  PortFincMov.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'fundingCcy' })
  PortFincMov.belongsTo(SysCurrency, { as: 'underlyingCcySysCurrency', foreignKey: 'underlyingCcy' })
  SysCurrency.hasMany(PortFincMov, { as: 'underlyingCcyPortFincMovs', foreignKey: 'underlyingCcy' })
  PortFincPos.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'fundingCcy' })
  PortFincPos.belongsTo(SysCurrency, { as: 'underlyingCcySysCurrency', foreignKey: 'underlyingCcy' })
  SysCurrency.hasMany(PortFincPos, { as: 'underlyingCcyPortFincPos', foreignKey: 'underlyingCcy' })
  PortFoexCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'currencyCode' })
  PortFoexCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PortFoexCsf, { as: 'notionalCurrencyPortFoexCsfs', foreignKey: 'notionalCurrency' })
  PortFoexMov.belongsTo(SysCurrency, { as: 'underlyingCcyPayLegSysCurrency', foreignKey: 'underlyingCcyPayLeg' })
  SysCurrency.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'underlyingCcyPayLeg' })
  PortFoexMov.belongsTo(SysCurrency, { as: 'underlyingCcyRecLegSysCurrency', foreignKey: 'underlyingCcyRecLeg' })
  SysCurrency.hasMany(PortFoexMov, { as: 'underlyingCcyRecLegPortFoexMovs', foreignKey: 'underlyingCcyRecLeg' })
  PortFoexMov.belongsTo(SysCurrency, { as: 'currencyRecLegSysCurrency', foreignKey: 'currencyRecLeg' })
  SysCurrency.hasMany(PortFoexMov, { as: 'currencyRecLegPortFoexMovs', foreignKey: 'currencyRecLeg' })
  PortFoexMov.belongsTo(SysCurrency, { as: 'currencyMarketValueSysCurrency', foreignKey: 'currencyMarketValue' })
  SysCurrency.hasMany(PortFoexMov, { as: 'currencyMarketValuePortFoexMovs', foreignKey: 'currencyMarketValue' })
  PortFoexMov.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortFoexMov, { as: 'fundingCcyPortFoexMovs', foreignKey: 'fundingCcy' })
  PortFoexMov.belongsTo(SysCurrency, { as: 'currencyPayLegSysCurrency', foreignKey: 'currencyPayLeg' })
  SysCurrency.hasMany(PortFoexMov, { as: 'currencyPayLegPortFoexMovs', foreignKey: 'currencyPayLeg' })
  PortFoexPos.belongsTo(SysCurrency, { as: 'underlyingCcyPayLegSysCurrency', foreignKey: 'underlyingCcyPayLeg' })
  SysCurrency.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'underlyingCcyPayLeg' })
  PortFoexPos.belongsTo(SysCurrency, { as: 'underlyingCcyRecLegSysCurrency', foreignKey: 'underlyingCcyRecLeg' })
  SysCurrency.hasMany(PortFoexPos, { as: 'underlyingCcyRecLegPortFoexPos', foreignKey: 'underlyingCcyRecLeg' })
  PortFoexPos.belongsTo(SysCurrency, { as: 'currencyRecLegSysCurrency', foreignKey: 'currencyRecLeg' })
  SysCurrency.hasMany(PortFoexPos, { as: 'currencyRecLegPortFoexPos', foreignKey: 'currencyRecLeg' })
  PortFoexPos.belongsTo(SysCurrency, { as: 'currencyMarketValueSysCurrency', foreignKey: 'currencyMarketValue' })
  SysCurrency.hasMany(PortFoexPos, { as: 'currencyMarketValuePortFoexPos', foreignKey: 'currencyMarketValue' })
  PortFoexPos.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortFoexPos, { as: 'fundingCcyPortFoexPos', foreignKey: 'fundingCcy' })
  PortFoexPos.belongsTo(SysCurrency, { as: 'currencyPayLegSysCurrency', foreignKey: 'currencyPayLeg' })
  SysCurrency.hasMany(PortFoexPos, { as: 'currencyPayLegPortFoexPos', foreignKey: 'currencyPayLeg' })
  PortFutuCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'notionalCurrency' })
  PortFutuCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortFutuCsf, { as: 'currencyCodePortFutuCsfs', foreignKey: 'currencyCode' })
  PortFutuMov.belongsTo(SysCurrency, { as: 'initialMarginDepositCcySysCurrency', foreignKey: 'initialMarginDepositCcy' })
  SysCurrency.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'initialMarginDepositCcy' })
  PortFutuMov.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortFutuMov, { as: 'fundingCcyPortFutuMovs', foreignKey: 'fundingCcy' })
  PortFutuMov.belongsTo(SysCurrency, { as: 'underlyingCcyRecLegSysCurrency', foreignKey: 'underlyingCcyRecLeg' })
  SysCurrency.hasMany(PortFutuMov, { as: 'underlyingCcyRecLegPortFutuMovs', foreignKey: 'underlyingCcyRecLeg' })
  PortFutuMov.belongsTo(SysCurrency, { as: 'additionalCostCcySysCurrency', foreignKey: 'additionalCostCcy' })
  SysCurrency.hasMany(PortFutuMov, { as: 'additionalCostCcyPortFutuMovs', foreignKey: 'additionalCostCcy' })
  PortFutuMov.belongsTo(SysCurrency, { as: 'notionalPositionCcySysCurrency', foreignKey: 'notionalPositionCcy' })
  SysCurrency.hasMany(PortFutuMov, { as: 'notionalPositionCcyPortFutuMovs', foreignKey: 'notionalPositionCcy' })
  PortFutuMov.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortFutuMov, { as: 'currencyCodePortFutuMovs', foreignKey: 'currencyCode' })
  PortFutuMov.belongsTo(SysCurrency, { as: 'marketValueCcySysCurrency', foreignKey: 'marketValueCcy' })
  SysCurrency.hasMany(PortFutuMov, { as: 'marketValueCcyPortFutuMovs', foreignKey: 'marketValueCcy' })
  PortFutuMov.belongsTo(SysCurrency, { as: 'underlyingCcyPayLegSysCurrency', foreignKey: 'underlyingCcyPayLeg' })
  SysCurrency.hasMany(PortFutuMov, { as: 'underlyingCcyPayLegPortFutuMovs', foreignKey: 'underlyingCcyPayLeg' })
  PortFutuPos.belongsTo(SysCurrency, { as: 'initialMarginDepositCcySysCurrency', foreignKey: 'initialMarginDepositCcy' })
  SysCurrency.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'initialMarginDepositCcy' })
  PortFutuPos.belongsTo(SysCurrency, { as: 'underlyingCcyRecLegSysCurrency', foreignKey: 'underlyingCcyRecLeg' })
  SysCurrency.hasMany(PortFutuPos, { as: 'underlyingCcyRecLegPortFutuPos', foreignKey: 'underlyingCcyRecLeg' })
  PortFutuPos.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortFutuPos, { as: 'fundingCcyPortFutuPos', foreignKey: 'fundingCcy' })
  PortFutuPos.belongsTo(SysCurrency, { as: 'additionalCostCcySysCurrency', foreignKey: 'additionalCostCcy' })
  SysCurrency.hasMany(PortFutuPos, { as: 'additionalCostCcyPortFutuPos', foreignKey: 'additionalCostCcy' })
  PortFutuPos.belongsTo(SysCurrency, { as: 'notionalPositionCcySysCurrency', foreignKey: 'notionalPositionCcy' })
  SysCurrency.hasMany(PortFutuPos, { as: 'notionalPositionCcyPortFutuPos', foreignKey: 'notionalPositionCcy' })
  PortFutuPos.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortFutuPos, { as: 'currencyCodePortFutuPos', foreignKey: 'currencyCode' })
  PortFutuPos.belongsTo(SysCurrency, { as: 'marketValueCcySysCurrency', foreignKey: 'marketValueCcy' })
  SysCurrency.hasMany(PortFutuPos, { as: 'marketValueCcyPortFutuPos', foreignKey: 'marketValueCcy' })
  PortFutuPos.belongsTo(SysCurrency, { as: 'underlyingCcyPayLegSysCurrency', foreignKey: 'underlyingCcyPayLeg' })
  SysCurrency.hasMany(PortFutuPos, { as: 'underlyingCcyPayLegPortFutuPos', foreignKey: 'underlyingCcyPayLeg' })
  PortGuarMov.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'currencyCode' })
  PortGuarPos.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'currencyCode' })
  PortLoanCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'currencyCode' })
  PortLoanCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PortLoanCsf, { as: 'notionalCurrencyPortLoanCsfs', foreignKey: 'notionalCurrency' })
  PortLoanMov.belongsTo(SysCurrency, { as: 'residualValueCcySysCurrency', foreignKey: 'residualValueCcy' })
  SysCurrency.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'residualValueCcy' })
  PortLoanMov.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortLoanMov, { as: 'fundingCcyPortLoanMovs', foreignKey: 'fundingCcy' })
  PortLoanMov.belongsTo(SysCurrency, { as: 'notionalCcySysCurrency', foreignKey: 'notionalCcy' })
  SysCurrency.hasMany(PortLoanMov, { as: 'notionalCcyPortLoanMovs', foreignKey: 'notionalCcy' })
  PortLoanPos.belongsTo(SysCurrency, { as: 'residualValueCcySysCurrency', foreignKey: 'residualValueCcy' })
  SysCurrency.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'residualValueCcy' })
  PortLoanPos.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortLoanPos, { as: 'fundingCcyPortLoanPos', foreignKey: 'fundingCcy' })
  PortLoanPos.belongsTo(SysCurrency, { as: 'notionalCcySysCurrency', foreignKey: 'notionalCcy' })
  SysCurrency.hasMany(PortLoanPos, { as: 'notionalCcyPortLoanPos', foreignKey: 'notionalCcy' })
  PortNdfsCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'currencyCode' })
  PortNdfsCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PortNdfsCsf, { as: 'notionalCurrencyPortNdfsCsfs', foreignKey: 'notionalCurrency' })
  PortNdfsMov.belongsTo(SysCurrency, { as: 'underlyingCcyPayLegSysCurrency', foreignKey: 'underlyingCcyPayLeg' })
  SysCurrency.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'underlyingCcyPayLeg' })
  PortNdfsMov.belongsTo(SysCurrency, { as: 'underlyingCcyRecLegSysCurrency', foreignKey: 'underlyingCcyRecLeg' })
  SysCurrency.hasMany(PortNdfsMov, { as: 'underlyingCcyRecLegPortNdfsMovs', foreignKey: 'underlyingCcyRecLeg' })
  PortNdfsMov.belongsTo(SysCurrency, { as: 'currencyRecLegSysCurrency', foreignKey: 'currencyRecLeg' })
  SysCurrency.hasMany(PortNdfsMov, { as: 'currencyRecLegPortNdfsMovs', foreignKey: 'currencyRecLeg' })
  PortNdfsMov.belongsTo(SysCurrency, { as: 'currencyMarketValueSysCurrency', foreignKey: 'currencyMarketValue' })
  SysCurrency.hasMany(PortNdfsMov, { as: 'currencyMarketValuePortNdfsMovs', foreignKey: 'currencyMarketValue' })
  PortNdfsMov.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortNdfsMov, { as: 'fundingCcyPortNdfsMovs', foreignKey: 'fundingCcy' })
  PortNdfsMov.belongsTo(SysCurrency, { as: 'currencyPayLegSysCurrency', foreignKey: 'currencyPayLeg' })
  SysCurrency.hasMany(PortNdfsMov, { as: 'currencyPayLegPortNdfsMovs', foreignKey: 'currencyPayLeg' })
  PortNdfsPos.belongsTo(SysCurrency, { as: 'underlyingCcyRecLegSysCurrency', foreignKey: 'underlyingCcyRecLeg' })
  SysCurrency.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'underlyingCcyRecLeg' })
  PortNdfsPos.belongsTo(SysCurrency, { as: 'currencyRecLegSysCurrency', foreignKey: 'currencyRecLeg' })
  SysCurrency.hasMany(PortNdfsPos, { as: 'currencyRecLegPortNdfsPos', foreignKey: 'currencyRecLeg' })
  PortNdfsPos.belongsTo(SysCurrency, { as: 'currencyMarketValueSysCurrency', foreignKey: 'currencyMarketValue' })
  SysCurrency.hasMany(PortNdfsPos, { as: 'currencyMarketValuePortNdfsPos', foreignKey: 'currencyMarketValue' })
  PortNdfsPos.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortNdfsPos, { as: 'fundingCcyPortNdfsPos', foreignKey: 'fundingCcy' })
  PortNdfsPos.belongsTo(SysCurrency, { as: 'currencyPayLegSysCurrency', foreignKey: 'currencyPayLeg' })
  SysCurrency.hasMany(PortNdfsPos, { as: 'currencyPayLegPortNdfsPos', foreignKey: 'currencyPayLeg' })
  PortNdfsPos.belongsTo(SysCurrency, { as: 'underlyingCcyPayLegSysCurrency', foreignKey: 'underlyingCcyPayLeg' })
  SysCurrency.hasMany(PortNdfsPos, { as: 'underlyingCcyPayLegPortNdfsPos', foreignKey: 'underlyingCcyPayLeg' })
  PortNostroCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'notionalCurrency' })
  PortNostroCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortNostroCsf, { as: 'currencyCodePortNostroCsfs', foreignKey: 'currencyCode' })
  PortNostroPos.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortNostroPos, { as: 'portNostroPos', foreignKey: 'fundingCcy' })
  PortNostroPos.belongsTo(SysCurrency, { as: 'glReportCcySysCurrency', foreignKey: 'glReportCcy' })
  SysCurrency.hasMany(PortNostroPos, { as: 'glReportCcyPortNostroPos', foreignKey: 'glReportCcy' })
  PortNostroPos.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortNostroPos, { as: 'currencyCodePortNostroPos', foreignKey: 'currencyCode' })
  PortOtherCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'notionalCurrency' })
  PortOtherCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortOtherCsf, { as: 'currencyCodePortOtherCsfs', foreignKey: 'currencyCode' })
  PortOtherPos.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortOtherPos, { as: 'portOtherPos', foreignKey: 'fundingCcy' })
  PortOtherPos.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortOtherPos, { as: 'currencyCodePortOtherPos', foreignKey: 'currencyCode' })
  PortRecvLnk.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortRecvLnk, { as: 'portRecvLnks', foreignKey: 'currencyCode' })
  PortRecvMov.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortRecvMov, { as: 'portRecvMovs', foreignKey: 'fundingCcy' })
  PortRecvMov.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortRecvMov, { as: 'currencyCodePortRecvMovs', foreignKey: 'currencyCode' })
  PortRecvPos.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortRecvPos, { as: 'portRecvPos', foreignKey: 'fundingCcy' })
  PortRecvPos.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortRecvPos, { as: 'currencyCodePortRecvPos', foreignKey: 'currencyCode' })
  PortRepoCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'notionalCurrency' })
  PortRepoCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortRepoCsf, { as: 'currencyCodePortRepoCsfs', foreignKey: 'currencyCode' })
  PortRepoDet.belongsTo(SysCurrency, { as: 'securityMarketValueCcySysCurrency', foreignKey: 'securityMarketValueCcy' })
  SysCurrency.hasMany(PortRepoDet, { as: 'portRepoDets', foreignKey: 'securityMarketValueCcy' })
  PortRepoDet.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortRepoDet, { as: 'currencyCodePortRepoDets', foreignKey: 'currencyCode' })
  PortRepoMov.belongsTo(SysCurrency, { as: 'cashLegCcySysCurrency', foreignKey: 'cashLegCcy' })
  SysCurrency.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'cashLegCcy' })
  PortRepoPos.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'fundingCcy' })
  PortRepoPos.belongsTo(SysCurrency, { as: 'cashLegCcySysCurrency', foreignKey: 'cashLegCcy' })
  SysCurrency.hasMany(PortRepoPos, { as: 'cashLegCcyPortRepoPos', foreignKey: 'cashLegCcy' })
  PortSwapCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'notionalCurrency' })
  PortSwapCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortSwapCsf, { as: 'currencyCodePortSwapCsfs', foreignKey: 'currencyCode' })
  PortSwapMov.belongsTo(SysCurrency, { as: 'currencyMarketValueSysCurrency', foreignKey: 'currencyMarketValue' })
  SysCurrency.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'currencyMarketValue' })
  PortSwapMov.belongsTo(SysCurrency, { as: 'currencyPayLegSysCurrency', foreignKey: 'currencyPayLeg' })
  SysCurrency.hasMany(PortSwapMov, { as: 'currencyPayLegPortSwapMovs', foreignKey: 'currencyPayLeg' })
  PortSwapMov.belongsTo(SysCurrency, { as: 'currencyRecLegSysCurrency', foreignKey: 'currencyRecLeg' })
  SysCurrency.hasMany(PortSwapMov, { as: 'currencyRecLegPortSwapMovs', foreignKey: 'currencyRecLeg' })
  PortSwapMov.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortSwapMov, { as: 'fundingCcyPortSwapMovs', foreignKey: 'fundingCcy' })
  PortSwapMov.belongsTo(SysCurrency, { as: 'underlyingCcyPayLegSysCurrency', foreignKey: 'underlyingCcyPayLeg' })
  SysCurrency.hasMany(PortSwapMov, { as: 'underlyingCcyPayLegPortSwapMovs', foreignKey: 'underlyingCcyPayLeg' })
  PortSwapMov.belongsTo(SysCurrency, { as: 'underlyingCcyRecLegSysCurrency', foreignKey: 'underlyingCcyRecLeg' })
  SysCurrency.hasMany(PortSwapMov, { as: 'underlyingCcyRecLegPortSwapMovs', foreignKey: 'underlyingCcyRecLeg' })
  PortSwapPos.belongsTo(SysCurrency, { as: 'currencyMarketValueSysCurrency', foreignKey: 'currencyMarketValue' })
  SysCurrency.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'currencyMarketValue' })
  PortSwapPos.belongsTo(SysCurrency, { as: 'currencyPayLegSysCurrency', foreignKey: 'currencyPayLeg' })
  SysCurrency.hasMany(PortSwapPos, { as: 'currencyPayLegPortSwapPos', foreignKey: 'currencyPayLeg' })
  PortSwapPos.belongsTo(SysCurrency, { as: 'currencyRecLegSysCurrency', foreignKey: 'currencyRecLeg' })
  SysCurrency.hasMany(PortSwapPos, { as: 'currencyRecLegPortSwapPos', foreignKey: 'currencyRecLeg' })
  PortSwapPos.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortSwapPos, { as: 'fundingCcyPortSwapPos', foreignKey: 'fundingCcy' })
  PortSwapPos.belongsTo(SysCurrency, { as: 'underlyingCcyPayLegSysCurrency', foreignKey: 'underlyingCcyPayLeg' })
  SysCurrency.hasMany(PortSwapPos, { as: 'underlyingCcyPayLegPortSwapPos', foreignKey: 'underlyingCcyPayLeg' })
  PortSwapPos.belongsTo(SysCurrency, { as: 'underlyingCcyRecLegSysCurrency', foreignKey: 'underlyingCcyRecLeg' })
  SysCurrency.hasMany(PortSwapPos, { as: 'underlyingCcyRecLegPortSwapPos', foreignKey: 'underlyingCcyRecLeg' })
  PortVostroCsf.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'currencyCode' })
  PortVostroCsf.belongsTo(SysCurrency, { as: 'notionalCurrencySysCurrency', foreignKey: 'notionalCurrency' })
  SysCurrency.hasMany(PortVostroCsf, { as: 'notionalCurrencyPortVostroCsfs', foreignKey: 'notionalCurrency' })
  PortVostroPos.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(PortVostroPos, { as: 'portVostroPos', foreignKey: 'currencyCode' })
  PortVostroPos.belongsTo(SysCurrency, { as: 'glReportCcySysCurrency', foreignKey: 'glReportCcy' })
  SysCurrency.hasMany(PortVostroPos, { as: 'glReportCcyPortVostroPos', foreignKey: 'glReportCcy' })
  PortVostroPos.belongsTo(SysCurrency, { as: 'fundingCcySysCurrency', foreignKey: 'fundingCcy' })
  SysCurrency.hasMany(PortVostroPos, { as: 'fundingCcyPortVostroPos', foreignKey: 'fundingCcy' })
  SysCountryCcyLnk.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(SysCountryCcyLnk, { as: 'sysCountryCcyLnks', foreignKey: 'currencyCode' })
  SysCurve.belongsTo(SysCurrency, { as: 'currencyCodeSysCurrency', foreignKey: 'currencyCode' })
  SysCurrency.hasMany(SysCurve, { as: 'sysCurves', foreignKey: 'currencyCode' })
  SysUnderlying.belongsTo(SysCurrency, { as: 'underlyingCcySysCurrency', foreignKey: 'underlyingCcy' })
  SysCurrency.hasMany(SysUnderlying, { as: 'sysUnderlyings', foreignKey: 'underlyingCcy' })
  MktdEodCurve.belongsTo(SysCurve, { as: 'discountCurveNameSysCurve', foreignKey: 'discountCurveName' })
  SysCurve.hasMany(MktdEodCurve, { as: 'mktdEodCurves', foreignKey: 'discountCurveName' })
  SysCurveUnderlyingLink.belongsTo(SysCurve, { as: 'curveNameSysCurve', foreignKey: 'curveName' })
  SysCurve.hasMany(SysCurveUnderlyingLink, { as: 'sysCurveUnderlyingLinks', foreignKey: 'curveName' })
  AlcmLiqNsfrProductParam.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(AlcmLiqNsfrProductParam, { as: 'alcmLiqNsfrProductParams', foreignKey: 'sourceSystem' })
  CrmGuarPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'sourceSystem' })
  CrmInstrumentList.belongsTo(SysExternalSystem, { as: 'crmSourceSystemSysExternalSystem', foreignKey: 'crmSourceSystem' })
  SysExternalSystem.hasMany(CrmInstrumentList, { as: 'crmInstrumentLists', foreignKey: 'crmSourceSystem' })
  GenldgBsJournal.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(GenldgBsJournal, { as: 'genldgBsJournals', foreignKey: 'sourceSystem' })
  GenldgGlbsPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(GenldgGlbsPos, { as: 'genldgGlbsPos', foreignKey: 'sourceSystem' })
  PnlFeeincDet.belongsTo(SysExternalSystem, { as: 'calcSourceSystemSysExternalSystem', foreignKey: 'calcSourceSystem' })
  SysExternalSystem.hasMany(PnlFeeincDet, { as: 'pnlFeeincDets', foreignKey: 'calcSourceSystem' })
  PnlGmplexDet.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PnlGmplexDet, { as: 'pnlGmplexDets', foreignKey: 'sourceSystem' })
  PnlOperincDet.belongsTo(SysExternalSystem, { as: 'calcSourceSystemSysExternalSystem', foreignKey: 'calcSourceSystem' })
  SysExternalSystem.hasMany(PnlOperincDet, { as: 'pnlOperincDets', foreignKey: 'calcSourceSystem' })
  PnlOperincDet.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PnlOperincDet, { as: 'sourceSystemPnlOperincDets', foreignKey: 'sourceSystem' })
  PortContractList.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortContractList, { as: 'portContractLists', foreignKey: 'sourceSystem' })
  PortDsecMov.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'sourceSystem' })
  PortDsecPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'sourceSystem' })
  PortFctyMov.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'sourceSystem' })
  PortFctyPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'sourceSystem' })
  PortFincMov.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'sourceSystem' })
  PortFincPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'sourceSystem' })
  PortFoexMov.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'sourceSystem' })
  PortFoexPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'sourceSystem' })
  PortFutuMov.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'sourceSystem' })
  PortFutuPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'sourceSystem' })
  PortGuarMov.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'sourceSystem' })
  PortGuarPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'sourceSystem' })
  PortLoanMov.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'sourceSystem' })
  PortLoanPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'sourceSystem' })
  PortNdfsMov.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'sourceSystem' })
  PortNdfsPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'sourceSystem' })
  PortNostroPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortNostroPos, { as: 'portNostroPos', foreignKey: 'sourceSystem' })
  PortOtherPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortOtherPos, { as: 'portOtherPos', foreignKey: 'sourceSystem' })
  PortRecvLnk.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortRecvLnk, { as: 'portRecvLnks', foreignKey: 'sourceSystem' })
  PortSwapMov.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'sourceSystem' })
  PortSwapPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'sourceSystem' })
  PortVostroPos.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(PortVostroPos, { as: 'portVostroPos', foreignKey: 'sourceSystem' })
  ProductExtCod.belongsTo(SysExternalSystem, { as: 'sourceSystemSysExternalSystem', foreignKey: 'sourceSystem' })
  SysExternalSystem.hasMany(ProductExtCod, { as: 'productExtCods', foreignKey: 'sourceSystem' })
  AlcmCapitalProductParam.belongsTo(SysUnderlying, { as: 'underlyingPayCodeSysUnderlying', foreignKey: 'underlyingPayCode' })
  SysUnderlying.hasMany(AlcmCapitalProductParam, { as: 'alcmCapitalProductParams', foreignKey: 'underlyingPayCode' })
  AlcmCapitalProductParam.belongsTo(SysUnderlying, { as: 'underlyingRecCodeSysUnderlying', foreignKey: 'underlyingRecCode' })
  SysUnderlying.hasMany(AlcmCapitalProductParam, { as: 'underlyingRecCodeAlcmCapitalProductParams', foreignKey: 'underlyingRecCode' })
  AlcmCpadEadBase.belongsTo(SysUnderlying, { as: 'underlyingPayLegSysUnderlying', foreignKey: 'underlyingPayLeg' })
  SysUnderlying.hasMany(AlcmCpadEadBase, { as: 'alcmCpadEadBases', foreignKey: 'underlyingPayLeg' })
  AlcmCpadEadBase.belongsTo(SysUnderlying, { as: 'underlyingRecLegSysUnderlying', foreignKey: 'underlyingRecLeg' })
  SysUnderlying.hasMany(AlcmCpadEadBase, { as: 'underlyingRecLegAlcmCpadEadBases', foreignKey: 'underlyingRecLeg' })
  CrmGuarPos.belongsTo(SysUnderlying, { as: 'notionalUpdateIndexSysUnderlying', foreignKey: 'notionalUpdateIndex' })
  SysUnderlying.hasMany(CrmGuarPos, { as: 'crmGuarPos', foreignKey: 'notionalUpdateIndex' })
  PnlOperincCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PnlOperincCsf, { as: 'pnlOperincCsfs', foreignKey: 'curveName' })
  PortDsecCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortDsecCsf, { as: 'portDsecCsfs', foreignKey: 'curveName' })
  PortDsecMov.belongsTo(SysUnderlying, { as: 'floatIndexBaseCurveSysUnderlying', foreignKey: 'floatIndexBaseCurve' })
  SysUnderlying.hasMany(PortDsecMov, { as: 'portDsecMovs', foreignKey: 'floatIndexBaseCurve' })
  PortDsecMov.belongsTo(SysUnderlying, { as: 'spreadCurveNameSysUnderlying', foreignKey: 'spreadCurveName' })
  SysUnderlying.hasMany(PortDsecMov, { as: 'spreadCurveNamePortDsecMovs', foreignKey: 'spreadCurveName' })
  PortDsecMov.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortDsecMov, { as: 'curveNamePortDsecMovs', foreignKey: 'curveName' })
  PortDsecMov.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortDsecMov, { as: 'fundingCurvePortDsecMovs', foreignKey: 'fundingCurve' })
  PortDsecMov.belongsTo(SysUnderlying, { as: 'underlyingCodeSysUnderlying', foreignKey: 'underlyingCode' })
  SysUnderlying.hasMany(PortDsecMov, { as: 'underlyingCodePortDsecMovs', foreignKey: 'underlyingCode' })
  PortDsecMov.belongsTo(SysUnderlying, { as: 'discountCurveNameSysUnderlying', foreignKey: 'discountCurveName' })
  SysUnderlying.hasMany(PortDsecMov, { as: 'discountCurveNamePortDsecMovs', foreignKey: 'discountCurveName' })
  PortDsecMov.belongsTo(SysUnderlying, { as: 'fixedRateBaseCurveSysUnderlying', foreignKey: 'fixedRateBaseCurve' })
  SysUnderlying.hasMany(PortDsecMov, { as: 'fixedRateBaseCurvePortDsecMovs', foreignKey: 'fixedRateBaseCurve' })
  PortDsecPos.belongsTo(SysUnderlying, { as: 'floatIndexBaseCurveSysUnderlying', foreignKey: 'floatIndexBaseCurve' })
  SysUnderlying.hasMany(PortDsecPos, { as: 'portDsecPos', foreignKey: 'floatIndexBaseCurve' })
  PortDsecPos.belongsTo(SysUnderlying, { as: 'spreadCurveNameSysUnderlying', foreignKey: 'spreadCurveName' })
  SysUnderlying.hasMany(PortDsecPos, { as: 'spreadCurveNamePortDsecPos', foreignKey: 'spreadCurveName' })
  PortDsecPos.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortDsecPos, { as: 'curveNamePortDsecPos', foreignKey: 'curveName' })
  PortDsecPos.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortDsecPos, { as: 'fundingCurvePortDsecPos', foreignKey: 'fundingCurve' })
  PortDsecPos.belongsTo(SysUnderlying, { as: 'underlyingCodeSysUnderlying', foreignKey: 'underlyingCode' })
  SysUnderlying.hasMany(PortDsecPos, { as: 'underlyingCodePortDsecPos', foreignKey: 'underlyingCode' })
  PortDsecPos.belongsTo(SysUnderlying, { as: 'discountCurveNameSysUnderlying', foreignKey: 'discountCurveName' })
  SysUnderlying.hasMany(PortDsecPos, { as: 'discountCurveNamePortDsecPos', foreignKey: 'discountCurveName' })
  PortDsecPos.belongsTo(SysUnderlying, { as: 'fixedRateBaseCurveSysUnderlying', foreignKey: 'fixedRateBaseCurve' })
  SysUnderlying.hasMany(PortDsecPos, { as: 'fixedRateBaseCurvePortDsecPos', foreignKey: 'fixedRateBaseCurve' })
  PortFctyMov.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortFctyMov, { as: 'portFctyMovs', foreignKey: 'curveName' })
  PortFctyMov.belongsTo(SysUnderlying, { as: 'discountCurveNameSysUnderlying', foreignKey: 'discountCurveName' })
  SysUnderlying.hasMany(PortFctyMov, { as: 'discountCurveNamePortFctyMovs', foreignKey: 'discountCurveName' })
  PortFctyPos.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortFctyPos, { as: 'portFctyPos', foreignKey: 'curveName' })
  PortFctyPos.belongsTo(SysUnderlying, { as: 'discountCurveNameSysUnderlying', foreignKey: 'discountCurveName' })
  SysUnderlying.hasMany(PortFctyPos, { as: 'discountCurveNamePortFctyPos', foreignKey: 'discountCurveName' })
  PortFincCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortFincCsf, { as: 'portFincCsfs', foreignKey: 'curveName' })
  PortFincMov.belongsTo(SysUnderlying, { as: 'fwdStartCorrectionUnderlyingSysUnderlying', foreignKey: 'fwdStartCorrectionUnderlying' })
  SysUnderlying.hasMany(PortFincMov, { as: 'portFincMovs', foreignKey: 'fwdStartCorrectionUnderlying' })
  PortFincMov.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortFincMov, { as: 'fundingCurvePortFincMovs', foreignKey: 'fundingCurve' })
  PortFincMov.belongsTo(SysUnderlying, { as: 'discountCurveNameSysUnderlying', foreignKey: 'discountCurveName' })
  SysUnderlying.hasMany(PortFincMov, { as: 'discountCurveNamePortFincMovs', foreignKey: 'discountCurveName' })
  PortFincMov.belongsTo(SysUnderlying, { as: 'underlyingSecuritySysUnderlying', foreignKey: 'underlyingSecurity' })
  SysUnderlying.hasMany(PortFincMov, { as: 'underlyingSecurityPortFincMovs', foreignKey: 'underlyingSecurity' })
  PortFincMov.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortFincMov, { as: 'curveNamePortFincMovs', foreignKey: 'curveName' })
  PortFincPos.belongsTo(SysUnderlying, { as: 'fwdStartCorrectionUnderlyingSysUnderlying', foreignKey: 'fwdStartCorrectionUnderlying' })
  SysUnderlying.hasMany(PortFincPos, { as: 'portFincPos', foreignKey: 'fwdStartCorrectionUnderlying' })
  PortFincPos.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortFincPos, { as: 'fundingCurvePortFincPos', foreignKey: 'fundingCurve' })
  PortFincPos.belongsTo(SysUnderlying, { as: 'discountCurveNameSysUnderlying', foreignKey: 'discountCurveName' })
  SysUnderlying.hasMany(PortFincPos, { as: 'discountCurveNamePortFincPos', foreignKey: 'discountCurveName' })
  PortFincPos.belongsTo(SysUnderlying, { as: 'underlyingSecuritySysUnderlying', foreignKey: 'underlyingSecurity' })
  SysUnderlying.hasMany(PortFincPos, { as: 'underlyingSecurityPortFincPos', foreignKey: 'underlyingSecurity' })
  PortFincPos.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortFincPos, { as: 'curveNamePortFincPos', foreignKey: 'curveName' })
  PortFoexCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortFoexCsf, { as: 'portFoexCsfs', foreignKey: 'curveName' })
  PortFoexMov.belongsTo(SysUnderlying, { as: 'fwdStartCorrectionUnderlyingSysUnderlying', foreignKey: 'fwdStartCorrectionUnderlying' })
  SysUnderlying.hasMany(PortFoexMov, { as: 'portFoexMovs', foreignKey: 'fwdStartCorrectionUnderlying' })
  PortFoexMov.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortFoexMov, { as: 'fundingCurvePortFoexMovs', foreignKey: 'fundingCurve' })
  PortFoexMov.belongsTo(SysUnderlying, { as: 'underlyingPayLegSysUnderlying', foreignKey: 'underlyingPayLeg' })
  SysUnderlying.hasMany(PortFoexMov, { as: 'underlyingPayLegPortFoexMovs', foreignKey: 'underlyingPayLeg' })
  PortFoexMov.belongsTo(SysUnderlying, { as: 'underlyingRecLegSysUnderlying', foreignKey: 'underlyingRecLeg' })
  SysUnderlying.hasMany(PortFoexMov, { as: 'underlyingRecLegPortFoexMovs', foreignKey: 'underlyingRecLeg' })
  PortFoexPos.belongsTo(SysUnderlying, { as: 'fwdStartCorrectionUnderlyingSysUnderlying', foreignKey: 'fwdStartCorrectionUnderlying' })
  SysUnderlying.hasMany(PortFoexPos, { as: 'portFoexPos', foreignKey: 'fwdStartCorrectionUnderlying' })
  PortFoexPos.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortFoexPos, { as: 'fundingCurvePortFoexPos', foreignKey: 'fundingCurve' })
  PortFoexPos.belongsTo(SysUnderlying, { as: 'underlyingPayLegSysUnderlying', foreignKey: 'underlyingPayLeg' })
  SysUnderlying.hasMany(PortFoexPos, { as: 'underlyingPayLegPortFoexPos', foreignKey: 'underlyingPayLeg' })
  PortFoexPos.belongsTo(SysUnderlying, { as: 'underlyingRecLegSysUnderlying', foreignKey: 'underlyingRecLeg' })
  SysUnderlying.hasMany(PortFoexPos, { as: 'underlyingRecLegPortFoexPos', foreignKey: 'underlyingRecLeg' })
  PortFutuCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortFutuCsf, { as: 'portFutuCsfs', foreignKey: 'curveName' })
  PortFutuMov.belongsTo(SysUnderlying, { as: 'underlyingSecuritySysUnderlying', foreignKey: 'underlyingSecurity' })
  SysUnderlying.hasMany(PortFutuMov, { as: 'portFutuMovs', foreignKey: 'underlyingSecurity' })
  PortFutuMov.belongsTo(SysUnderlying, { as: 'underlyingRecLegSysUnderlying', foreignKey: 'underlyingRecLeg' })
  SysUnderlying.hasMany(PortFutuMov, { as: 'underlyingRecLegPortFutuMovs', foreignKey: 'underlyingRecLeg' })
  PortFutuMov.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortFutuMov, { as: 'fundingCurvePortFutuMovs', foreignKey: 'fundingCurve' })
  PortFutuMov.belongsTo(SysUnderlying, { as: 'underlyingPayLegSysUnderlying', foreignKey: 'underlyingPayLeg' })
  SysUnderlying.hasMany(PortFutuMov, { as: 'underlyingPayLegPortFutuMovs', foreignKey: 'underlyingPayLeg' })
  PortFutuPos.belongsTo(SysUnderlying, { as: 'underlyingSecuritySysUnderlying', foreignKey: 'underlyingSecurity' })
  SysUnderlying.hasMany(PortFutuPos, { as: 'portFutuPos', foreignKey: 'underlyingSecurity' })
  PortFutuPos.belongsTo(SysUnderlying, { as: 'underlyingRecLegSysUnderlying', foreignKey: 'underlyingRecLeg' })
  SysUnderlying.hasMany(PortFutuPos, { as: 'underlyingRecLegPortFutuPos', foreignKey: 'underlyingRecLeg' })
  PortFutuPos.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortFutuPos, { as: 'fundingCurvePortFutuPos', foreignKey: 'fundingCurve' })
  PortFutuPos.belongsTo(SysUnderlying, { as: 'underlyingPayLegSysUnderlying', foreignKey: 'underlyingPayLeg' })
  SysUnderlying.hasMany(PortFutuPos, { as: 'underlyingPayLegPortFutuPos', foreignKey: 'underlyingPayLeg' })
  PortGuarMov.belongsTo(SysUnderlying, { as: 'notionalUpdateIndexSysUnderlying', foreignKey: 'notionalUpdateIndex' })
  SysUnderlying.hasMany(PortGuarMov, { as: 'portGuarMovs', foreignKey: 'notionalUpdateIndex' })
  PortGuarPos.belongsTo(SysUnderlying, { as: 'notionalUpdateIndexSysUnderlying', foreignKey: 'notionalUpdateIndex' })
  SysUnderlying.hasMany(PortGuarPos, { as: 'portGuarPos', foreignKey: 'notionalUpdateIndex' })
  PortLoanCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortLoanCsf, { as: 'portLoanCsfs', foreignKey: 'curveName' })
  PortLoanMov.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortLoanMov, { as: 'portLoanMovs', foreignKey: 'curveName' })
  PortLoanMov.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortLoanMov, { as: 'fundingCurvePortLoanMovs', foreignKey: 'fundingCurve' })
  PortLoanMov.belongsTo(SysUnderlying, { as: 'discountCurveNameSysUnderlying', foreignKey: 'discountCurveName' })
  SysUnderlying.hasMany(PortLoanMov, { as: 'discountCurveNamePortLoanMovs', foreignKey: 'discountCurveName' })
  PortLoanMov.belongsTo(SysUnderlying, { as: 'spreadCurveNameSysUnderlying', foreignKey: 'spreadCurveName' })
  SysUnderlying.hasMany(PortLoanMov, { as: 'spreadCurveNamePortLoanMovs', foreignKey: 'spreadCurveName' })
  PortLoanPos.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortLoanPos, { as: 'portLoanPos', foreignKey: 'curveName' })
  PortLoanPos.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortLoanPos, { as: 'fundingCurvePortLoanPos', foreignKey: 'fundingCurve' })
  PortLoanPos.belongsTo(SysUnderlying, { as: 'discountCurveNameSysUnderlying', foreignKey: 'discountCurveName' })
  SysUnderlying.hasMany(PortLoanPos, { as: 'discountCurveNamePortLoanPos', foreignKey: 'discountCurveName' })
  PortLoanPos.belongsTo(SysUnderlying, { as: 'spreadCurveNameSysUnderlying', foreignKey: 'spreadCurveName' })
  SysUnderlying.hasMany(PortLoanPos, { as: 'spreadCurveNamePortLoanPos', foreignKey: 'spreadCurveName' })
  PortNdfsCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortNdfsCsf, { as: 'portNdfsCsfs', foreignKey: 'curveName' })
  PortNdfsMov.belongsTo(SysUnderlying, { as: 'underlyingPayLegSysUnderlying', foreignKey: 'underlyingPayLeg' })
  SysUnderlying.hasMany(PortNdfsMov, { as: 'portNdfsMovs', foreignKey: 'underlyingPayLeg' })
  PortNdfsMov.belongsTo(SysUnderlying, { as: 'underlyingRecLegSysUnderlying', foreignKey: 'underlyingRecLeg' })
  SysUnderlying.hasMany(PortNdfsMov, { as: 'underlyingRecLegPortNdfsMovs', foreignKey: 'underlyingRecLeg' })
  PortNdfsPos.belongsTo(SysUnderlying, { as: 'underlyingPayLegSysUnderlying', foreignKey: 'underlyingPayLeg' })
  SysUnderlying.hasMany(PortNdfsPos, { as: 'portNdfsPos', foreignKey: 'underlyingPayLeg' })
  PortNdfsPos.belongsTo(SysUnderlying, { as: 'underlyingRecLegSysUnderlying', foreignKey: 'underlyingRecLeg' })
  SysUnderlying.hasMany(PortNdfsPos, { as: 'underlyingRecLegPortNdfsPos', foreignKey: 'underlyingRecLeg' })
  PortNostroCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortNostroCsf, { as: 'portNostroCsfs', foreignKey: 'curveName' })
  PortNostroPos.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortNostroPos, { as: 'portNostroPos', foreignKey: 'fundingCurve' })
  PortOtherCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortOtherCsf, { as: 'portOtherCsfs', foreignKey: 'curveName' })
  PortOtherPos.belongsTo(SysUnderlying, { as: 'underlyingCodeSysUnderlying', foreignKey: 'underlyingCode' })
  SysUnderlying.hasMany(PortOtherPos, { as: 'portOtherPos', foreignKey: 'underlyingCode' })
  PortOtherPos.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortOtherPos, { as: 'fundingCurvePortOtherPos', foreignKey: 'fundingCurve' })
  PortRecvCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortRecvCsf, { as: 'portRecvCsfs', foreignKey: 'curveName' })
  PortRecvMov.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortRecvMov, { as: 'portRecvMovs', foreignKey: 'fundingCurve' })
  PortRecvMov.belongsTo(SysUnderlying, { as: 'discountRateCurveSysUnderlying', foreignKey: 'discountRateCurve' })
  SysUnderlying.hasMany(PortRecvMov, { as: 'discountRateCurvePortRecvMovs', foreignKey: 'discountRateCurve' })
  PortRecvPos.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortRecvPos, { as: 'portRecvPos', foreignKey: 'fundingCurve' })
  PortRecvPos.belongsTo(SysUnderlying, { as: 'discountRateCurveSysUnderlying', foreignKey: 'discountRateCurve' })
  SysUnderlying.hasMany(PortRecvPos, { as: 'discountRateCurvePortRecvPos', foreignKey: 'discountRateCurve' })
  PortRepoCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortRepoCsf, { as: 'portRepoCsfs', foreignKey: 'curveName' })
  PortRepoMov.belongsTo(SysUnderlying, { as: 'fwdStartCorrectionUnderlyingSysUnderlying', foreignKey: 'fwdStartCorrectionUnderlying' })
  SysUnderlying.hasMany(PortRepoMov, { as: 'portRepoMovs', foreignKey: 'fwdStartCorrectionUnderlying' })
  PortRepoMov.belongsTo(SysUnderlying, { as: 'curveNameCashLegSysUnderlying', foreignKey: 'curveNameCashLeg' })
  SysUnderlying.hasMany(PortRepoMov, { as: 'curveNameCashLegPortRepoMovs', foreignKey: 'curveNameCashLeg' })
  PortRepoMov.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortRepoMov, { as: 'fundingCurvePortRepoMovs', foreignKey: 'fundingCurve' })
  PortRepoPos.belongsTo(SysUnderlying, { as: 'fwdStartCorrectionUnderlyingSysUnderlying', foreignKey: 'fwdStartCorrectionUnderlying' })
  SysUnderlying.hasMany(PortRepoPos, { as: 'portRepoPos', foreignKey: 'fwdStartCorrectionUnderlying' })
  PortRepoPos.belongsTo(SysUnderlying, { as: 'curveNameCashLegSysUnderlying', foreignKey: 'curveNameCashLeg' })
  SysUnderlying.hasMany(PortRepoPos, { as: 'curveNameCashLegPortRepoPos', foreignKey: 'curveNameCashLeg' })
  PortRepoPos.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortRepoPos, { as: 'fundingCurvePortRepoPos', foreignKey: 'fundingCurve' })
  PortSwapCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortSwapCsf, { as: 'portSwapCsfs', foreignKey: 'curveName' })
  PortSwapMov.belongsTo(SysUnderlying, { as: 'underlyingPayLegSysUnderlying', foreignKey: 'underlyingPayLeg' })
  SysUnderlying.hasMany(PortSwapMov, { as: 'portSwapMovs', foreignKey: 'underlyingPayLeg' })
  PortSwapMov.belongsTo(SysUnderlying, { as: 'fwdStartCorrectionUnderlyingSysUnderlying', foreignKey: 'fwdStartCorrectionUnderlying' })
  SysUnderlying.hasMany(PortSwapMov, { as: 'fwdStartCorrectionUnderlyingPortSwapMovs', foreignKey: 'fwdStartCorrectionUnderlying' })
  PortSwapMov.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortSwapMov, { as: 'fundingCurvePortSwapMovs', foreignKey: 'fundingCurve' })
  PortSwapMov.belongsTo(SysUnderlying, { as: 'underlyingRecLegSysUnderlying', foreignKey: 'underlyingRecLeg' })
  SysUnderlying.hasMany(PortSwapMov, { as: 'underlyingRecLegPortSwapMovs', foreignKey: 'underlyingRecLeg' })
  PortSwapPos.belongsTo(SysUnderlying, { as: 'underlyingPayLegSysUnderlying', foreignKey: 'underlyingPayLeg' })
  SysUnderlying.hasMany(PortSwapPos, { as: 'portSwapPos', foreignKey: 'underlyingPayLeg' })
  PortSwapPos.belongsTo(SysUnderlying, { as: 'fwdStartCorrectionUnderlyingSysUnderlying', foreignKey: 'fwdStartCorrectionUnderlying' })
  SysUnderlying.hasMany(PortSwapPos, { as: 'fwdStartCorrectionUnderlyingPortSwapPos', foreignKey: 'fwdStartCorrectionUnderlying' })
  PortSwapPos.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortSwapPos, { as: 'fundingCurvePortSwapPos', foreignKey: 'fundingCurve' })
  PortSwapPos.belongsTo(SysUnderlying, { as: 'underlyingRecLegSysUnderlying', foreignKey: 'underlyingRecLeg' })
  SysUnderlying.hasMany(PortSwapPos, { as: 'underlyingRecLegPortSwapPos', foreignKey: 'underlyingRecLeg' })
  PortVostroCsf.belongsTo(SysUnderlying, { as: 'curveNameSysUnderlying', foreignKey: 'curveName' })
  SysUnderlying.hasMany(PortVostroCsf, { as: 'portVostroCsfs', foreignKey: 'curveName' })
  PortVostroPos.belongsTo(SysUnderlying, { as: 'fundingCurveSysUnderlying', foreignKey: 'fundingCurve' })
  SysUnderlying.hasMany(PortVostroPos, { as: 'portVostroPos', foreignKey: 'fundingCurve' })
  SysCurveUnderlyingLink.belongsTo(SysUnderlying, { as: 'underlyingCodeSysUnderlying', foreignKey: 'underlyingCode' })
  SysUnderlying.hasMany(SysCurveUnderlyingLink, { as: 'sysCurveUnderlyingLinks', foreignKey: 'underlyingCode' })
  SysUnderlying.belongsTo(SysUnderlyingType, { as: 'underlyingTypeSysUnderlyingType', foreignKey: 'underlyingType' })
  SysUnderlyingType.hasMany(SysUnderlying, { as: 'sysUnderlyings', foreignKey: 'underlyingType' })
  TaxEntityAdditionalInfo.belongsTo(TaxConsolType, { as: 'taxReportConsolidationTypeTaxConsolType', foreignKey: 'taxReportConsolidationType' })
  TaxConsolType.hasMany(TaxEntityAdditionalInfo, { as: 'taxEntityAdditionalInfos', foreignKey: 'taxReportConsolidationType' })
  TaxExemption.belongsTo(TaxExcemptionType, { as: 'taxExemptionReasonTaxExcemptionType', foreignKey: 'taxExemptionReason' })
  TaxExcemptionType.hasMany(TaxExemption, { as: 'taxExemptions', foreignKey: 'taxExemptionReason' })
  TaxExemptListService.belongsTo(TaxExemption, { as: 'taxExemption', foreignKey: 'taxExemptionId' })
  TaxExemption.hasMany(TaxExemptListService, { as: 'taxExemptListServices', foreignKey: 'taxExemptionId' })
  TaxExemptMunicipality.belongsTo(TaxExemption, { as: 'taxExemption', foreignKey: 'taxExemptionId' })
  TaxExemption.hasMany(TaxExemptMunicipality, { as: 'taxExemptMunicipalities', foreignKey: 'taxExemptionId' })
  TaxExemption.belongsTo(TaxFormOfPayment, { as: 'taxExempFormOfPaymentTaxFormOfPayment', foreignKey: 'taxExempFormOfPayment' })
  TaxFormOfPayment.hasMany(TaxExemption, { as: 'taxExemptions', foreignKey: 'taxExempFormOfPayment' })
  TaxExemption.belongsTo(TaxList, { as: 'taxCodeTaxList', foreignKey: 'taxCode' })
  TaxList.hasMany(TaxExemption, { as: 'taxExemptions', foreignKey: 'taxCode' })
  TaxList.belongsTo(TaxType, { as: 'taxTypeTaxType', foreignKey: 'taxType' })
  TaxType.hasMany(TaxList, { as: 'taxLists', foreignKey: 'taxType' })

  return {
    DomsSystemType: DomsSystemType,
    SysExternalSystem: SysExternalSystem,
    AlcmCapitalAccountParam: AlcmCapitalAccountParam,
    AlcmCapitalProductParam: AlcmCapitalProductParam,
    AlcmCapitalRegulatoryType: AlcmCapitalRegulatoryType,
    AlcmCpadEadBase: AlcmCpadEadBase,
    AlcmDloAcctGroup: AlcmDloAcctGroup,
    AlcmDloLelExceptProducts: AlcmDloLelExceptProducts,
    AlcmDloTb01: AlcmDloTb01,
    AlcmDloTb02: AlcmDloTb02,
    AlcmDloTb03Cpad: AlcmDloTb03Cpad,
    AlcmDloTb03Limimob: AlcmDloTb03Limimob,
    AlcmDloTb03Opad: AlcmDloTb03Opad,
    AlcmDloTb03Pr: AlcmDloTb03Pr,
    AlcmDloTb03Ra: AlcmDloTb03Ra,
    AlcmDloTb04: AlcmDloTb04,
    AlcmDloTb05: AlcmDloTb05,
    AlcmDloTb06: AlcmDloTb06,
    AlcmDloTb07: AlcmDloTb07,
    AlcmDloTb09: AlcmDloTb09,
    AlcmDloTb10: AlcmDloTb10,
    AlcmDloTb11: AlcmDloTb11,
    AlcmDloTb11A: AlcmDloTb11A,
    AlcmDloTb12: AlcmDloTb12,
    AlcmDloTb13: AlcmDloTb13,
    AlcmDloTb14: AlcmDloTb14,
    AlcmDloTb19: AlcmDloTb19,
    AlcmDloTb23: AlcmDloTb23,
    AlcmDloTb24: AlcmDloTb24,
    AlcmDloTb25: AlcmDloTb25,
    AlcmDloTb26: AlcmDloTb26,
    AlcmDloTb28: AlcmDloTb28,
    AlcmDloTb28D: AlcmDloTb28D,
    AlcmDloTb29: AlcmDloTb29,
    AlcmDloTb30: AlcmDloTb30,
    AlcmDloTb31: AlcmDloTb31,
    AlcmDloTb31A: AlcmDloTb31A,
    AlcmDloTb32: AlcmDloTb32,
    AlcmDloTb33: AlcmDloTb33,
    AlcmDloTb34: AlcmDloTb34,
    AlcmDloTb35: AlcmDloTb35,
    AlcmDloTb36: AlcmDloTb36,
    AlcmDloTb37: AlcmDloTb37,
    AlcmDloTb38: AlcmDloTb38,
    AlcmDloTb39: AlcmDloTb39,
    AlcmDloTb42: AlcmDloTb42,
    AlcmDloTb43: AlcmDloTb43,
    AlcmDloTb44: AlcmDloTb44,
    AlcmDloTb46: AlcmDloTb46,
    AlcmDloTb47: AlcmDloTb47,
    AlcmLiqDrlAccount: AlcmLiqDrlAccount,
    AlcmLiqDrlAcctGrp: AlcmLiqDrlAcctGrp,
    AlcmLiqDrlDoctBalanceLadder: AlcmLiqDrlDoctBalanceLadder,
    AlcmLiqDrlDoctElement: AlcmLiqDrlDoctElement,
    AlcmLiqDrlDoctMaturityLadder: AlcmLiqDrlDoctMaturityLadder,
    AlcmLiqDrlDoctParam: AlcmLiqDrlDoctParam,
    AlcmLiqDrlDoctParamValue: AlcmLiqDrlDoctParamValue,
    AlcmLiqDrlDoctType: AlcmLiqDrlDoctType,
    AlcmLiqNsfrAccount: AlcmLiqNsfrAccount,
    AlcmLiqNsfrGroup: AlcmLiqNsfrGroup,
    AlcmLiqNsfrProductParam: AlcmLiqNsfrProductParam,
    AlcmLiqNsfrQuality: AlcmLiqNsfrQuality,
    AlcmLiqNsfrTimeBucketStruct: AlcmLiqNsfrTimeBucketStruct,
    AlcmLiqNsfrWeight: AlcmLiqNsfrWeight,
    AlcmProductGroup: AlcmProductGroup,
    BuyinBalanceLink: BuyinBalanceLink,
    BuyinContractLink: BuyinContractLink,
    BuyinSelloutGlLink: BuyinSelloutGlLink,
    BuyinSelloutGlbsGroup: BuyinSelloutGlbsGroup,
    Company: Company,
    CompanyBook: CompanyBook,
    CompanyBookType: CompanyBookType,
    CompanyCostCentre: CompanyCostCentre,
    CompanyCostCentreLnk: CompanyCostCentreLnk,
    CompanyLink: CompanyLink,
    CompanyLob: CompanyLob,
    CompanyLobLnk: CompanyLobLnk,
    CompanyLobType: CompanyLobType,
    CrmAgreementLink: CrmAgreementLink,
    CrmContractLink: CrmContractLink,
    CrmGuarPos: CrmGuarPos,
    CrmInstrumentList: CrmInstrumentList,
    CrmInvptyLink: CrmInvptyLink,
    CrmNetagrDet: CrmNetagrDet,
    CrmNetagrLink: CrmNetagrLink,
    CrmProductLink: CrmProductLink,
    DomsAccrualBasis: DomsAccrualBasis,
    DomsAmortizingType: DomsAmortizingType,
    DomsBalanceType: DomsBalanceType,
    DomsBankingFacilityType: DomsBankingFacilityType,
    DomsBankingTrading: DomsBankingTrading,
    DomsBankruptcyRemote: DomsBankruptcyRemote,
    DomsBranchSubsidiary: DomsBranchSubsidiary,
    DomsBrokenPeriodType: DomsBrokenPeriodType,
    DomsCalcDayConvention: DomsCalcDayConvention,
    DomsCalcDayRule: DomsCalcDayRule,
    DomsCalcFrequency: DomsCalcFrequency,
    DomsCapType: DomsCapType,
    DomsCashFlowApproach: DomsCashFlowApproach,
    DomsCashFlowQuality: DomsCashFlowQuality,
    DomsCashFlowType: DomsCashFlowType,
    DomsCcpExposureType: DomsCcpExposureType,
    DomsCcyConvType: DomsCcyConvType,
    DomsCinstCalcRule: DomsCinstCalcRule,
    DomsCinstRuleAnnuityAfterMat: DomsCinstRuleAnnuityAfterMat,
    DomsClientProprietary: DomsClientProprietary,
    DomsCollContractType: DomsCollContractType,
    DomsCollateralMode: DomsCollateralMode,
    DomsCommitted: DomsCommitted,
    DomsCompoundType: DomsCompoundType,
    DomsConsolidationType: DomsConsolidationType,
    DomsDefermentContext: DomsDefermentContext,
    DomsDefermentMethod: DomsDefermentMethod,
    DomsDeliveryType: DomsDeliveryType,
    DomsDerivativeMultiplierType: DomsDerivativeMultiplierType,
    DomsDiscountMethod: DomsDiscountMethod,
    DomsDistributionChannel: DomsDistributionChannel,
    DomsFacilityLiqType: DomsFacilityLiqType,
    DomsFacilityPurpose: DomsFacilityPurpose,
    DomsFacilityType: DomsFacilityType,
    DomsFairValueOption: DomsFairValueOption,
    DomsFixingRule: DomsFixingRule,
    DomsForbearanceMeasures: DomsForbearanceMeasures,
    DomsGivenReceived: DomsGivenReceived,
    DomsGlClass: DomsGlClass,
    DomsGlNature: DomsGlNature,
    DomsHedgeAccountingType: DomsHedgeAccountingType,
    DomsIncomeType: DomsIncomeType,
    DomsIndustrySectorType: DomsIndustrySectorType,
    DomsInvptyStatus: DomsInvptyStatus,
    DomsLongShort: DomsLongShort,
    DomsMarginExcessType: DomsMarginExcessType,
    DomsMarginType: DomsMarginType,
    DomsNettingClass: DomsNettingClass,
    DomsOverlappingPriority: DomsOverlappingPriority,
    DomsParticipationFlag: DomsParticipationFlag,
    DomsParticipationLink: DomsParticipationLink,
    DomsPayReceive: DomsPayReceive,
    DomsPenaltyCalcMethod: DomsPenaltyCalcMethod,
    DomsPerformingStatus: DomsPerformingStatus,
    DomsRateType: DomsRateType,
    DomsRepartitionMethod: DomsRepartitionMethod,
    DomsRmgtFacility: DomsRmgtFacility,
    DomsRollingConvention: DomsRollingConvention,
    DomsSecurityStatus: DomsSecurityStatus,
    DomsSeniority: DomsSeniority,
    DomsServicingType: DomsServicingType,
    DomsSettlementMode: DomsSettlementMode,
    DomsStatementType: DomsStatementType,
    DomsSubType: DomsSubType,
    DomsTargetType: DomsTargetType,
    DomsTaxInvptyType: DomsTaxInvptyType,
    DomsTaxStatus: DomsTaxStatus,
    DomsTransferred: DomsTransferred,
    DomsTrueFalse: DomsTrueFalse,
    DomsUnderlyingClassification: DomsUnderlyingClassification,
    DomsUnderlyingFamily: DomsUnderlyingFamily,
    FcmgtBorrowingGroup: FcmgtBorrowingGroup,
    FcmgtFacilityBg: FcmgtFacilityBg,
    FcmgtFacilityCode: FcmgtFacilityCode,
    FcmgtFacilityInvpty: FcmgtFacilityInvpty,
    FcmgtGroupFacilityLink: FcmgtGroupFacilityLink,
    FcmgtProduct: FcmgtProduct,
    FcmgtProductFacilityLink: FcmgtProductFacilityLink,
    FcmgtProductGroup: FcmgtProductGroup,
    FcmgtProductLink: FcmgtProductLink,
    FcmgtSubordFac: FcmgtSubordFac,
    FcmgtUtilizationA: FcmgtUtilizationA,
    FcmgtUtilizationB: FcmgtUtilizationB,
    GenldgAccountGroup: GenldgAccountGroup,
    GenldgAccountPlan: GenldgAccountPlan,
    GenldgBsJournal: GenldgBsJournal,
    GenldgGaapCode: GenldgGaapCode,
    GenldgGaapPlan: GenldgGaapPlan,
    GenldgGlbsPos: GenldgGlbsPos,
    GenldgGrcaAverageMap: GenldgGrcaAverageMap,
    GenldgGrcaPlan: GenldgGrcaPlan,
    GenldgGrcaPrimaryMap: GenldgGrcaPrimaryMap,
    GenldgInvptyLink: GenldgInvptyLink,
    InvptyDet: InvptyDet,
    InvptyExtCod: InvptyExtCod,
    InvptyExtCodCodif: InvptyExtCodCodif,
    InvptyFncls: InvptyFncls,
    InvptyLink: InvptyLink,
    InvptyLinkCodif: InvptyLinkCodif,
    InvptyLinkType: InvptyLinkType,
    InvptyRtngAgcy: InvptyRtngAgcy,
    InvptyRtngAgcyRtsLnk: InvptyRtngAgcyRtsLnk,
    InvptyRtngAgcyRtsStr: InvptyRtngAgcyRtsStr,
    InvptyRtngCrd: InvptyRtngCrd,
    InvptyType: InvptyType,
    InvptyTypeCodif: InvptyTypeCodif,
    InvptyTypeLnk: InvptyTypeLnk,
    InvptyTypeLrgcopr: InvptyTypeLrgcopr,
    MktdEodCurve: MktdEodCurve,
    MktdEodPrice: MktdEodPrice,
    MktdSecurity: MktdSecurity,
    PnlFeeincDet: PnlFeeincDet,
    PnlGmplexClc: PnlGmplexClc,
    PnlGmplexDet: PnlGmplexDet,
    PnlInterestincClc: PnlInterestincClc,
    PnlOperincCsf: PnlOperincCsf,
    PnlOperincCsfLink: PnlOperincCsfLink,
    PnlOperincDet: PnlOperincDet,
    PortContractList: PortContractList,
    PortDsecCsf: PortDsecCsf,
    PortDsecMov: PortDsecMov,
    PortDsecPos: PortDsecPos,
    PortFctyLnk: PortFctyLnk,
    PortFctyMov: PortFctyMov,
    PortFctyPos: PortFctyPos,
    PortFincCsf: PortFincCsf,
    PortFincMov: PortFincMov,
    PortFincPos: PortFincPos,
    PortFoexCsf: PortFoexCsf,
    PortFoexMov: PortFoexMov,
    PortFoexPos: PortFoexPos,
    PortFutuCsf: PortFutuCsf,
    PortFutuMov: PortFutuMov,
    PortFutuPos: PortFutuPos,
    PortGuarMov: PortGuarMov,
    PortGuarPos: PortGuarPos,
    PortHedgeLnk: PortHedgeLnk,
    PortLoanCsf: PortLoanCsf,
    PortLoanMov: PortLoanMov,
    PortLoanPos: PortLoanPos,
    PortNdfsCsf: PortNdfsCsf,
    PortNdfsMov: PortNdfsMov,
    PortNdfsPos: PortNdfsPos,
    PortNostroCsf: PortNostroCsf,
    PortNostroPos: PortNostroPos,
    PortOtherCsf: PortOtherCsf,
    PortOtherPos: PortOtherPos,
    PortRecvCsf: PortRecvCsf,
    PortRecvLnk: PortRecvLnk,
    PortRecvMov: PortRecvMov,
    PortRecvPos: PortRecvPos,
    PortRepoCsf: PortRepoCsf,
    PortRepoDet: PortRepoDet,
    PortRepoMov: PortRepoMov,
    PortRepoPos: PortRepoPos,
    PortSwapCsf: PortSwapCsf,
    PortSwapMov: PortSwapMov,
    PortSwapPos: PortSwapPos,
    PortThirdPartyLnk: PortThirdPartyLnk,
    PortVostroCsf: PortVostroCsf,
    PortVostroPos: PortVostroPos,
    Product: Product,
    ProductExtCod: ProductExtCod,
    ProductHsbcGrp: ProductHsbcGrp,
    ProductHsbcGrpLink: ProductHsbcGrpLink,
    ReconBzdfAggregation: ReconBzdfAggregation,
    ReconBzdfContractLoad: ReconBzdfContractLoad,
    ReconBzdfMap: ReconBzdfMap,
    ReconBzdfPoint: ReconBzdfPoint,
    ReconDimension: ReconDimension,
    ReconDimensionGroup: ReconDimensionGroup,
    ReconGlAggregation: ReconGlAggregation,
    ReconGlPoint: ReconGlPoint,
    ReconMathOperator: ReconMathOperator,
    ReconMetric: ReconMetric,
    ReconResult: ReconResult,
    SysAdhocHoliday: SysAdhocHoliday,
    SysCalendar: SysCalendar,
    SysCountry: SysCountry,
    SysCountryCcyLnk: SysCountryCcyLnk,
    SysCurrency: SysCurrency,
    SysCurve: SysCurve,
    SysCurveUnderlyingLink: SysCurveUnderlyingLink,
    SysUnderlying: SysUnderlying,
    SysUnderlyingType: SysUnderlyingType,
    TaxBankAccountInfo: TaxBankAccountInfo,
    TaxConsolType: TaxConsolType,
    TaxEntityAdditionalInfo: TaxEntityAdditionalInfo,
    TaxExcemptionType: TaxExcemptionType,
    TaxExemptListService: TaxExemptListService,
    TaxExemptMunicipality: TaxExemptMunicipality,
    TaxExemption: TaxExemption,
    TaxForeignPerson: TaxForeignPerson,
    TaxFormOfPayment: TaxFormOfPayment,
    TaxList: TaxList,
    TaxType: TaxType
  }
}
