import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FcmgtBorrowingGroup, FcmgtBorrowingGroupId } from './FcmgtBorrowingGroup';
import type { FcmgtFacilityCode, FcmgtFacilityCodeId } from './FcmgtFacilityCode';

export interface FcmgtFacilityBgAttributes {
  referenceDate: number;
  facilityCode: string;
  borrowingGroupId: string;
  fclCategory?: string;
  fclTypCod?: string;
  fclRelnId?: number;
  treatsId?: string;
  fclCcod?: string;
  fclApprLimitAmt?: number;
  fclWgtApprLmt?: number;
  maxTenorB?: string;
  maxTerm?: number;
  fclApplApprDt?: number;
  fclNextRvwDt?: number;
  borwGrpMbrList: string;
  borwGrpMbrNames?: string;
  prdExprMax?: number;
  prdList?: string;
  prdListNames?: string;
  fclAdvdInd: boolean;
  fclAvlExprDt?: number;
  fclCancInd: boolean;
  fclCommInd: boolean;
  fclCrPpslSerNo?: number;
  fclCrdAppCcyCde?: string;
  fclCreditAppType?: string;
  fclCtryOfSndOrdRskCde?: number;
  fclCtryOfSndOrdRskPct?: string;
  fclCtryOfUltRisk?: string;
  fclCustBorwGrpInd?: string;
  fclDntrnLgdPct?: string;
  fclDtTenorInd?: string;
  fclExprDt?: number;
  fclFclCreatDt?: number;
  fclFclRisk?: number;
  fclFclScrcd?: string;
  fclFclSustRtng?: string;
  fclGr?: number;
  fclGrpBasEnty?: string;
  fclHighLvgeTranInd: boolean;
  fclIntmApplInd?: string;
  fclIpAltIdTyp?: string;
  fclLfa1Cde?: string;
  fclLfa1CdeDesc?: string;
  fclLfa1Lbl?: string;
  fclLfa2Cde?: string;
  fclLfa2CdeDesc?: string;
  fclLfa2Lbl?: string;
  fclLossGvnDfltPct?: number;
  fclLstApprDt?: number;
  fclMatTenor?: string;
  fclNoneAccrInd?: string;
  fclOrgUnit?: string;
  fclOrslpDt?: number;
  fclOrslpExec?: string;
  fclOrslpOvrdCatCde?: string;
  fclOrslpOvrdCatDesc?: string;
  fclOrslpPct?: number;
  fclOsc?: string;
  fclOscDt?: string;
  fclOscExec?: string;
  fclOscOvrdCatCde?: string;
  fclOscOvrdCatDesc?: string;
  fclOvrdCreditConvFct?: number;
  fclOvrdDntrnLgdPct?: number;
  fclOvrdDrwdnFct?: number;
  fclOvrdLgdDt?: number;
  fclOvrdLgdExec?: string;
  fclOvrdLgdOvrdCatCde?: string;
  fclOvrdLgdPct?: number;
  fclPlcyCreditConvFct?: number;
  fclPlcyDrwdnFct?: number;
  fclPpsdLgdPctDt?: string;
  fclPpsdRiskWgt?: number;
  fclPpsdSupvrCat?: string;
  fclPpsdSupvrCatDt?: string;
  fclPpsdSupvrCatExec?: string;
  fclPrntFcl1?: string;
  fclPrntFcl2?: string;
  fclPrslpDt?: string;
  fclPrslpExec?: string;
  fclPrslpPct?: number;
  fclPurpCod?: string;
  fclRducRiskWgtQualInd?: string;
  fclRgltSpclLendScrcd?: string;
  fclRgltSpclLendType?: string;
  fclRtypCod?: string;
  fclSenCde?: string;
  fclSndCtryOfRskCde?: string;
  fclSynFclTycd?: string;
  fclUncndCancInd: boolean;
}

export type FcmgtFacilityBgPk = "referenceDate" | "facilityCode" | "borrowingGroupId";
export type FcmgtFacilityBgId = FcmgtFacilityBg[FcmgtFacilityBgPk];
export type FcmgtFacilityBgOptionalAttributes = "fclCategory" | "fclTypCod" | "fclRelnId" | "treatsId" | "fclCcod" | "fclApprLimitAmt" | "fclWgtApprLmt" | "maxTenorB" | "maxTerm" | "fclApplApprDt" | "fclNextRvwDt" | "borwGrpMbrNames" | "prdExprMax" | "prdList" | "prdListNames" | "fclAvlExprDt" | "fclCrPpslSerNo" | "fclCrdAppCcyCde" | "fclCreditAppType" | "fclCtryOfSndOrdRskCde" | "fclCtryOfSndOrdRskPct" | "fclCtryOfUltRisk" | "fclCustBorwGrpInd" | "fclDntrnLgdPct" | "fclDtTenorInd" | "fclExprDt" | "fclFclCreatDt" | "fclFclRisk" | "fclFclScrcd" | "fclFclSustRtng" | "fclGr" | "fclGrpBasEnty" | "fclIntmApplInd" | "fclIpAltIdTyp" | "fclLfa1Cde" | "fclLfa1CdeDesc" | "fclLfa1Lbl" | "fclLfa2Cde" | "fclLfa2CdeDesc" | "fclLfa2Lbl" | "fclLossGvnDfltPct" | "fclLstApprDt" | "fclMatTenor" | "fclNoneAccrInd" | "fclOrgUnit" | "fclOrslpDt" | "fclOrslpExec" | "fclOrslpOvrdCatCde" | "fclOrslpOvrdCatDesc" | "fclOrslpPct" | "fclOsc" | "fclOscDt" | "fclOscExec" | "fclOscOvrdCatCde" | "fclOscOvrdCatDesc" | "fclOvrdCreditConvFct" | "fclOvrdDntrnLgdPct" | "fclOvrdDrwdnFct" | "fclOvrdLgdDt" | "fclOvrdLgdExec" | "fclOvrdLgdOvrdCatCde" | "fclOvrdLgdPct" | "fclPlcyCreditConvFct" | "fclPlcyDrwdnFct" | "fclPpsdLgdPctDt" | "fclPpsdRiskWgt" | "fclPpsdSupvrCat" | "fclPpsdSupvrCatDt" | "fclPpsdSupvrCatExec" | "fclPrntFcl1" | "fclPrntFcl2" | "fclPrslpDt" | "fclPrslpExec" | "fclPrslpPct" | "fclPurpCod" | "fclRducRiskWgtQualInd" | "fclRgltSpclLendScrcd" | "fclRgltSpclLendType" | "fclRtypCod" | "fclSenCde" | "fclSndCtryOfRskCde" | "fclSynFclTycd";
export type FcmgtFacilityBgCreationAttributes = Optional<FcmgtFacilityBgAttributes, FcmgtFacilityBgOptionalAttributes>;

export class FcmgtFacilityBg extends Model<FcmgtFacilityBgAttributes, FcmgtFacilityBgCreationAttributes> implements FcmgtFacilityBgAttributes {
  referenceDate!: number;
  facilityCode!: string;
  borrowingGroupId!: string;
  fclCategory?: string;
  fclTypCod?: string;
  fclRelnId?: number;
  treatsId?: string;
  fclCcod?: string;
  fclApprLimitAmt?: number;
  fclWgtApprLmt?: number;
  maxTenorB?: string;
  maxTerm?: number;
  fclApplApprDt?: number;
  fclNextRvwDt?: number;
  borwGrpMbrList!: string;
  borwGrpMbrNames?: string;
  prdExprMax?: number;
  prdList?: string;
  prdListNames?: string;
  fclAdvdInd!: boolean;
  fclAvlExprDt?: number;
  fclCancInd!: boolean;
  fclCommInd!: boolean;
  fclCrPpslSerNo?: number;
  fclCrdAppCcyCde?: string;
  fclCreditAppType?: string;
  fclCtryOfSndOrdRskCde?: number;
  fclCtryOfSndOrdRskPct?: string;
  fclCtryOfUltRisk?: string;
  fclCustBorwGrpInd?: string;
  fclDntrnLgdPct?: string;
  fclDtTenorInd?: string;
  fclExprDt?: number;
  fclFclCreatDt?: number;
  fclFclRisk?: number;
  fclFclScrcd?: string;
  fclFclSustRtng?: string;
  fclGr?: number;
  fclGrpBasEnty?: string;
  fclHighLvgeTranInd!: boolean;
  fclIntmApplInd?: string;
  fclIpAltIdTyp?: string;
  fclLfa1Cde?: string;
  fclLfa1CdeDesc?: string;
  fclLfa1Lbl?: string;
  fclLfa2Cde?: string;
  fclLfa2CdeDesc?: string;
  fclLfa2Lbl?: string;
  fclLossGvnDfltPct?: number;
  fclLstApprDt?: number;
  fclMatTenor?: string;
  fclNoneAccrInd?: string;
  fclOrgUnit?: string;
  fclOrslpDt?: number;
  fclOrslpExec?: string;
  fclOrslpOvrdCatCde?: string;
  fclOrslpOvrdCatDesc?: string;
  fclOrslpPct?: number;
  fclOsc?: string;
  fclOscDt?: string;
  fclOscExec?: string;
  fclOscOvrdCatCde?: string;
  fclOscOvrdCatDesc?: string;
  fclOvrdCreditConvFct?: number;
  fclOvrdDntrnLgdPct?: number;
  fclOvrdDrwdnFct?: number;
  fclOvrdLgdDt?: number;
  fclOvrdLgdExec?: string;
  fclOvrdLgdOvrdCatCde?: string;
  fclOvrdLgdPct?: number;
  fclPlcyCreditConvFct?: number;
  fclPlcyDrwdnFct?: number;
  fclPpsdLgdPctDt?: string;
  fclPpsdRiskWgt?: number;
  fclPpsdSupvrCat?: string;
  fclPpsdSupvrCatDt?: string;
  fclPpsdSupvrCatExec?: string;
  fclPrntFcl1?: string;
  fclPrntFcl2?: string;
  fclPrslpDt?: string;
  fclPrslpExec?: string;
  fclPrslpPct?: number;
  fclPurpCod?: string;
  fclRducRiskWgtQualInd?: string;
  fclRgltSpclLendScrcd?: string;
  fclRgltSpclLendType?: string;
  fclRtypCod?: string;
  fclSenCde?: string;
  fclSndCtryOfRskCde?: string;
  fclSynFclTycd?: string;
  fclUncndCancInd!: boolean;

  // FcmgtFacilityBg belongsTo FcmgtBorrowingGroup via borrowingGroupId
  borrowingGroup!: FcmgtBorrowingGroup;
  getBorrowingGroup!: Sequelize.BelongsToGetAssociationMixin<FcmgtBorrowingGroup>;
  setBorrowingGroup!: Sequelize.BelongsToSetAssociationMixin<FcmgtBorrowingGroup, FcmgtBorrowingGroupId>;
  createBorrowingGroup!: Sequelize.BelongsToCreateAssociationMixin<FcmgtBorrowingGroup>;
  // FcmgtFacilityBg belongsTo FcmgtFacilityCode via facilityCode
  facilityCodeFcmgtFacilityCode!: FcmgtFacilityCode;
  getFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToGetAssociationMixin<FcmgtFacilityCode>;
  setFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToSetAssociationMixin<FcmgtFacilityCode, FcmgtFacilityCodeId>;
  createFacilityCodeFcmgtFacilityCode!: Sequelize.BelongsToCreateAssociationMixin<FcmgtFacilityCode>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FcmgtFacilityBg {
    return FcmgtFacilityBg.init({
    referenceDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    facilityCode: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fcmgt_facility_code',
        key: 'facility_code'
      },
      field: 'facility_code'
    },
    borrowingGroupId: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fcmgt_borrowing_group',
        key: 'borrowing_group_id'
      },
      field: 'borrowing_group_id'
    },
    fclCategory: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'fcl_category'
    },
    fclTypCod: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'fcl_typ_cod'
    },
    fclRelnId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_reln_id'
    },
    treatsId: {
      type: DataTypes.STRING(7),
      allowNull: true,
      field: 'treats_id'
    },
    fclCcod: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_ccod'
    },
    fclApprLimitAmt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_appr_limit_amt'
    },
    fclWgtApprLmt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_wgt_appr_lmt'
    },
    maxTenorB: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'max_tenor_b'
    },
    maxTerm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'max_term'
    },
    fclApplApprDt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_appl_appr_dt'
    },
    fclNextRvwDt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_next_rvw_dt'
    },
    borwGrpMbrList: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'borw_grp_mbr_list'
    },
    borwGrpMbrNames: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'borw_grp_mbr_names'
    },
    prdExprMax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'prd_expr_max'
    },
    prdList: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'prd_list'
    },
    prdListNames: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'prd_list_names'
    },
    fclAdvdInd: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'fcl_advd_ind'
    },
    fclAvlExprDt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_avl_expr_dt'
    },
    fclCancInd: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'fcl_canc_ind'
    },
    fclCommInd: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'fcl_comm_ind'
    },
    fclCrPpslSerNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_cr_ppsl_ser_no'
    },
    fclCrdAppCcyCde: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_crd_app_ccy_cde'
    },
    fclCreditAppType: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'fcl_credit_app_type'
    },
    fclCtryOfSndOrdRskCde: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_ctry_of_snd_ord_rsk_cde'
    },
    fclCtryOfSndOrdRskPct: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_ctry_of_snd_ord_rsk_pct'
    },
    fclCtryOfUltRisk: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_ctry_of_ult_risk'
    },
    fclCustBorwGrpInd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'fcl_cust_borw_grp_ind'
    },
    fclDntrnLgdPct: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'fcl_dntrn_lgd_pct'
    },
    fclDtTenorInd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'fcl_dt_tenor_ind'
    },
    fclExprDt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_expr_dt'
    },
    fclFclCreatDt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_fcl_creat_dt'
    },
    fclFclRisk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_fcl_risk'
    },
    fclFclScrcd: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_fcl_scrcd'
    },
    fclFclSustRtng: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'fcl_fcl_sust_rtng'
    },
    fclGr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_gr'
    },
    fclGrpBasEnty: {
      type: DataTypes.STRING(6),
      allowNull: true,
      field: 'fcl_grp_bas_enty'
    },
    fclHighLvgeTranInd: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'fcl_high_lvge_tran_ind'
    },
    fclIntmApplInd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'fcl_intm_appl_ind'
    },
    fclIpAltIdTyp: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_ip_alt_id_typ'
    },
    fclLfa1Cde: {
      type: DataTypes.STRING(6),
      allowNull: true,
      field: 'fcl_lfa_1_cde'
    },
    fclLfa1CdeDesc: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'fcl_lfa_1_cde_desc'
    },
    fclLfa1Lbl: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'fcl_lfa_1_lbl'
    },
    fclLfa2Cde: {
      type: DataTypes.STRING(6),
      allowNull: true,
      field: 'fcl_lfa_2_cde'
    },
    fclLfa2CdeDesc: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'fcl_lfa_2_cde_desc'
    },
    fclLfa2Lbl: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'fcl_lfa_2_lbl'
    },
    fclLossGvnDfltPct: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_loss_gvn_dflt_pct'
    },
    fclLstApprDt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_lst_appr_dt'
    },
    fclMatTenor: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_mat_tenor'
    },
    fclNoneAccrInd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'fcl_none_accr_ind'
    },
    fclOrgUnit: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'fcl_org_unit'
    },
    fclOrslpDt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_orslp_dt'
    },
    fclOrslpExec: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'fcl_orslp_exec'
    },
    fclOrslpOvrdCatCde: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_orslp_ovrd_cat_cde'
    },
    fclOrslpOvrdCatDesc: {
      type: DataTypes.STRING(35),
      allowNull: true,
      field: 'fcl_orslp_ovrd_cat_desc'
    },
    fclOrslpPct: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_orslp_pct'
    },
    fclOsc: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'fcl_osc'
    },
    fclOscDt: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'fcl_osc_dt'
    },
    fclOscExec: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'fcl_osc_exec'
    },
    fclOscOvrdCatCde: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_osc_ovrd_cat_cde'
    },
    fclOscOvrdCatDesc: {
      type: DataTypes.STRING(35),
      allowNull: true,
      field: 'fcl_osc_ovrd_cat_desc'
    },
    fclOvrdCreditConvFct: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_ovrd_credit_conv_fct'
    },
    fclOvrdDntrnLgdPct: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_ovrd_dntrn_lgd_pct'
    },
    fclOvrdDrwdnFct: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_ovrd_drwdn_fct'
    },
    fclOvrdLgdDt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fcl_ovrd_lgd_dt'
    },
    fclOvrdLgdExec: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'fcl_ovrd_lgd_exec'
    },
    fclOvrdLgdOvrdCatCde: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_ovrd_lgd_ovrd_cat_cde'
    },
    fclOvrdLgdPct: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_ovrd_lgd_pct'
    },
    fclPlcyCreditConvFct: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_plcy_credit_conv_fct'
    },
    fclPlcyDrwdnFct: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_plcy_drwdn_fct'
    },
    fclPpsdLgdPctDt: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'fcl_ppsd_lgd_pct_dt'
    },
    fclPpsdRiskWgt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_ppsd_risk_wgt'
    },
    fclPpsdSupvrCat: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'fcl_ppsd_supvr_cat'
    },
    fclPpsdSupvrCatDt: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'fcl_ppsd_supvr_cat_dt'
    },
    fclPpsdSupvrCatExec: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'fcl_ppsd_supvr_cat_exec'
    },
    fclPrntFcl1: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'fcl_prnt_fcl_1'
    },
    fclPrntFcl2: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'fcl_prnt_fcl_2'
    },
    fclPrslpDt: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'fcl_prslp_dt'
    },
    fclPrslpExec: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'fcl_prslp_exec'
    },
    fclPrslpPct: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fcl_prslp_pct'
    },
    fclPurpCod: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'fcl_purp_cod'
    },
    fclRducRiskWgtQualInd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'fcl_rduc_risk_wgt_qual_ind'
    },
    fclRgltSpclLendScrcd: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_rglt_spcl_lend_scrcd'
    },
    fclRgltSpclLendType: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'fcl_rglt_spcl_lend_type'
    },
    fclRtypCod: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'fcl_rtyp_cod'
    },
    fclSenCde: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_sen_cde'
    },
    fclSndCtryOfRskCde: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'fcl_snd_ctry_of_rsk_cde'
    },
    fclSynFclTycd: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'fcl_syn_fcl_tycd'
    },
    fclUncndCancInd: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'fcl_uncnd_canc_ind'
    }
  }, {
    sequelize,
    tableName: 'fcmgt_facility_bg',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-FCMGT_FACILITY_BG",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "facility_code" },
          { name: "borrowing_group_id" },
        ]
      },
    ]
  });
  }
}
