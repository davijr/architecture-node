import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CrmNetagrLink, CrmNetagrLinkCreationAttributes, CrmNetagrLinkId } from './CrmNetagrLink';
import type { DomsCollContractType, DomsCollContractTypeId } from './DomsCollContractType';
import type { DomsNettingClass, DomsNettingClassId } from './DomsNettingClass';
import type { DomsRepartitionMethod, DomsRepartitionMethodId } from './DomsRepartitionMethod';
import type { SysCountry, SysCountryId } from './SysCountry';

export interface CrmNetagrDetAttributes {
  nettingAgreementRef: string;
  agreementDescription?: string;
  nettingClass: string;
  setOff: boolean;
  minimumHoldPeriod?: number;
  remargingFrequency?: number;
  threshold?: number;
  collateralContractType: string;
  tradeDate: string;
  maturityDate: string;
  conventionCountryCode: string;
  mrgAgreementRef?: string;
  repartitionMethod: string;
  nettingAgreementSecRef?: string;
}

export type CrmNetagrDetPk = "nettingAgreementRef";
export type CrmNetagrDetId = CrmNetagrDet[CrmNetagrDetPk];
export type CrmNetagrDetOptionalAttributes = "agreementDescription" | "minimumHoldPeriod" | "remargingFrequency" | "threshold" | "mrgAgreementRef" | "repartitionMethod" | "nettingAgreementSecRef";
export type CrmNetagrDetCreationAttributes = Optional<CrmNetagrDetAttributes, CrmNetagrDetOptionalAttributes>;

export class CrmNetagrDet extends Model<CrmNetagrDetAttributes, CrmNetagrDetCreationAttributes> implements CrmNetagrDetAttributes {
  nettingAgreementRef!: string;
  agreementDescription?: string;
  nettingClass!: string;
  setOff!: boolean;
  minimumHoldPeriod?: number;
  remargingFrequency?: number;
  threshold?: number;
  collateralContractType!: string;
  tradeDate!: string;
  maturityDate!: string;
  conventionCountryCode!: string;
  mrgAgreementRef?: string;
  repartitionMethod!: string;
  nettingAgreementSecRef?: string;

  // CrmNetagrDet hasOne CrmNetagrLink via nettingAgreementRef
  crmNetagrLink!: CrmNetagrLink;
  getCrmNetagrLink!: Sequelize.HasOneGetAssociationMixin<CrmNetagrLink>;
  setCrmNetagrLink!: Sequelize.HasOneSetAssociationMixin<CrmNetagrLink, CrmNetagrLinkId>;
  createCrmNetagrLink!: Sequelize.HasOneCreateAssociationMixin<CrmNetagrLink>;
  // CrmNetagrDet belongsTo DomsCollContractType via collateralContractType
  collateralContractTypeDomsCollContractType!: DomsCollContractType;
  getCollateralContractTypeDomsCollContractType!: Sequelize.BelongsToGetAssociationMixin<DomsCollContractType>;
  setCollateralContractTypeDomsCollContractType!: Sequelize.BelongsToSetAssociationMixin<DomsCollContractType, DomsCollContractTypeId>;
  createCollateralContractTypeDomsCollContractType!: Sequelize.BelongsToCreateAssociationMixin<DomsCollContractType>;
  // CrmNetagrDet belongsTo DomsNettingClass via nettingClass
  nettingClassDomsNettingClass!: DomsNettingClass;
  getNettingClassDomsNettingClass!: Sequelize.BelongsToGetAssociationMixin<DomsNettingClass>;
  setNettingClassDomsNettingClass!: Sequelize.BelongsToSetAssociationMixin<DomsNettingClass, DomsNettingClassId>;
  createNettingClassDomsNettingClass!: Sequelize.BelongsToCreateAssociationMixin<DomsNettingClass>;
  // CrmNetagrDet belongsTo DomsRepartitionMethod via repartitionMethod
  repartitionMethodDomsRepartitionMethod!: DomsRepartitionMethod;
  getRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToGetAssociationMixin<DomsRepartitionMethod>;
  setRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToSetAssociationMixin<DomsRepartitionMethod, DomsRepartitionMethodId>;
  createRepartitionMethodDomsRepartitionMethod!: Sequelize.BelongsToCreateAssociationMixin<DomsRepartitionMethod>;
  // CrmNetagrDet belongsTo SysCountry via conventionCountryCode
  conventionCountryCodeSysCountry!: SysCountry;
  getConventionCountryCodeSysCountry!: Sequelize.BelongsToGetAssociationMixin<SysCountry>;
  setConventionCountryCodeSysCountry!: Sequelize.BelongsToSetAssociationMixin<SysCountry, SysCountryId>;
  createConventionCountryCodeSysCountry!: Sequelize.BelongsToCreateAssociationMixin<SysCountry>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CrmNetagrDet {
    return CrmNetagrDet.init({
    nettingAgreementRef: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'netting_agreement_ref'
    },
    agreementDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'agreement_description'
    },
    nettingClass: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_netting_class',
        key: 'domain'
      },
      field: 'netting_class'
    },
    setOff: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'set_off'
    },
    minimumHoldPeriod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'minimum_hold_period'
    },
    remargingFrequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'remarging_frequency'
    },
    threshold: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    collateralContractType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'doms_coll_contract_type',
        key: 'domain'
      },
      field: 'collateral_contract_type'
    },
    tradeDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'trade_date'
    },
    maturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'maturity_date'
    },
    conventionCountryCode: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'sys_country',
        key: 'country_code_iso2'
      },
      field: 'convention_country_code'
    },
    mrgAgreementRef: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'mrg_agreement_ref'
    },
    repartitionMethod: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "PRP",
      references: {
        model: 'doms_repartition_method',
        key: 'domain'
      },
      field: 'repartition_method'
    },
    nettingAgreementSecRef: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'netting_agreement_sec_ref'
    }
  }, {
    sequelize,
    tableName: 'crm_netagr_det',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-CRM_NETAGR_DET",
        unique: true,
        fields: [
          { name: "netting_agreement_ref" },
        ]
      },
    ]
  });
  }
}
