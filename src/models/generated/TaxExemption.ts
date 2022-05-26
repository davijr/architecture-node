import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxExcemptionType, TaxExcemptionTypeId } from './TaxExcemptionType';
import type { TaxExemptListService, TaxExemptListServiceId } from './TaxExemptListService';
import type { TaxExemptMunicipality, TaxExemptMunicipalityId } from './TaxExemptMunicipality';
import type { TaxFormOfPayment, TaxFormOfPaymentId } from './TaxFormOfPayment';
import type { TaxList, TaxListId } from './TaxList';

export interface TaxExemptionAttributes {
  taxExemptionId: number;
  entityCode: number;
  taxCode: string;
  taxExemptionReason: string;
  taxExemptionStartDate: string;
  taxExemptionEndDate?: string;
  taxIncomeReportPrint: boolean;
  taxIncomeReportObs?: string;
  taxExempFormOfPayment: string;
  taxDateOfMajorIllness?: string;
  taxExempValidForAllServ: boolean;
  taxExempValidForAllMun: boolean;
  taxExempDateCriteria: string;
}

export type TaxExemptionPk = "taxExemptionId";
export type TaxExemptionId = TaxExemption[TaxExemptionPk];
export type TaxExemptionOptionalAttributes = "taxExemptionId" | "taxExemptionEndDate" | "taxIncomeReportObs" | "taxDateOfMajorIllness";
export type TaxExemptionCreationAttributes = Optional<TaxExemptionAttributes, TaxExemptionOptionalAttributes>;

export class TaxExemption extends Model<TaxExemptionAttributes, TaxExemptionCreationAttributes> implements TaxExemptionAttributes {
  taxExemptionId!: number;
  entityCode!: number;
  taxCode!: string;
  taxExemptionReason!: string;
  taxExemptionStartDate!: string;
  taxExemptionEndDate?: string;
  taxIncomeReportPrint!: boolean;
  taxIncomeReportObs?: string;
  taxExempFormOfPayment!: string;
  taxDateOfMajorIllness?: string;
  taxExempValidForAllServ!: boolean;
  taxExempValidForAllMun!: boolean;
  taxExempDateCriteria!: string;

  // TaxExemption belongsTo TaxExcemptionType via taxExemptionReason
  taxExemptionReasonTaxExcemptionType!: TaxExcemptionType;
  getTaxExemptionReasonTaxExcemptionType!: Sequelize.BelongsToGetAssociationMixin<TaxExcemptionType>;
  setTaxExemptionReasonTaxExcemptionType!: Sequelize.BelongsToSetAssociationMixin<TaxExcemptionType, TaxExcemptionTypeId>;
  createTaxExemptionReasonTaxExcemptionType!: Sequelize.BelongsToCreateAssociationMixin<TaxExcemptionType>;
  // TaxExemption hasMany TaxExemptListService via taxExemptionId
  taxExemptListServices!: TaxExemptListService[];
  getTaxExemptListServices!: Sequelize.HasManyGetAssociationsMixin<TaxExemptListService>;
  setTaxExemptListServices!: Sequelize.HasManySetAssociationsMixin<TaxExemptListService, TaxExemptListServiceId>;
  addTaxExemptListService!: Sequelize.HasManyAddAssociationMixin<TaxExemptListService, TaxExemptListServiceId>;
  addTaxExemptListServices!: Sequelize.HasManyAddAssociationsMixin<TaxExemptListService, TaxExemptListServiceId>;
  createTaxExemptListService!: Sequelize.HasManyCreateAssociationMixin<TaxExemptListService>;
  removeTaxExemptListService!: Sequelize.HasManyRemoveAssociationMixin<TaxExemptListService, TaxExemptListServiceId>;
  removeTaxExemptListServices!: Sequelize.HasManyRemoveAssociationsMixin<TaxExemptListService, TaxExemptListServiceId>;
  hasTaxExemptListService!: Sequelize.HasManyHasAssociationMixin<TaxExemptListService, TaxExemptListServiceId>;
  hasTaxExemptListServices!: Sequelize.HasManyHasAssociationsMixin<TaxExemptListService, TaxExemptListServiceId>;
  countTaxExemptListServices!: Sequelize.HasManyCountAssociationsMixin;
  // TaxExemption hasMany TaxExemptMunicipality via taxExemptionId
  taxExemptMunicipalities!: TaxExemptMunicipality[];
  getTaxExemptMunicipalities!: Sequelize.HasManyGetAssociationsMixin<TaxExemptMunicipality>;
  setTaxExemptMunicipalities!: Sequelize.HasManySetAssociationsMixin<TaxExemptMunicipality, TaxExemptMunicipalityId>;
  addTaxExemptMunicipality!: Sequelize.HasManyAddAssociationMixin<TaxExemptMunicipality, TaxExemptMunicipalityId>;
  addTaxExemptMunicipalities!: Sequelize.HasManyAddAssociationsMixin<TaxExemptMunicipality, TaxExemptMunicipalityId>;
  createTaxExemptMunicipality!: Sequelize.HasManyCreateAssociationMixin<TaxExemptMunicipality>;
  removeTaxExemptMunicipality!: Sequelize.HasManyRemoveAssociationMixin<TaxExemptMunicipality, TaxExemptMunicipalityId>;
  removeTaxExemptMunicipalities!: Sequelize.HasManyRemoveAssociationsMixin<TaxExemptMunicipality, TaxExemptMunicipalityId>;
  hasTaxExemptMunicipality!: Sequelize.HasManyHasAssociationMixin<TaxExemptMunicipality, TaxExemptMunicipalityId>;
  hasTaxExemptMunicipalities!: Sequelize.HasManyHasAssociationsMixin<TaxExemptMunicipality, TaxExemptMunicipalityId>;
  countTaxExemptMunicipalities!: Sequelize.HasManyCountAssociationsMixin;
  // TaxExemption belongsTo TaxFormOfPayment via taxExempFormOfPayment
  taxExempFormOfPaymentTaxFormOfPayment!: TaxFormOfPayment;
  getTaxExempFormOfPaymentTaxFormOfPayment!: Sequelize.BelongsToGetAssociationMixin<TaxFormOfPayment>;
  setTaxExempFormOfPaymentTaxFormOfPayment!: Sequelize.BelongsToSetAssociationMixin<TaxFormOfPayment, TaxFormOfPaymentId>;
  createTaxExempFormOfPaymentTaxFormOfPayment!: Sequelize.BelongsToCreateAssociationMixin<TaxFormOfPayment>;
  // TaxExemption belongsTo TaxList via taxCode
  taxCodeTaxList!: TaxList;
  getTaxCodeTaxList!: Sequelize.BelongsToGetAssociationMixin<TaxList>;
  setTaxCodeTaxList!: Sequelize.BelongsToSetAssociationMixin<TaxList, TaxListId>;
  createTaxCodeTaxList!: Sequelize.BelongsToCreateAssociationMixin<TaxList>;

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxExemption {
    return TaxExemption.init({
    taxExemptionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tax_exemption_id'
    },
    entityCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'entity_code'
    },
    taxCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'tax_list',
        key: 'tax_code'
      },
      field: 'tax_code'
    },
    taxExemptionReason: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'tax_excemption_type',
        key: 'tax_exemption_reason'
      },
      field: 'tax_exemption_reason'
    },
    taxExemptionStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'tax_exemption_start_date'
    },
    taxExemptionEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'tax_exemption_end_date'
    },
    taxIncomeReportPrint: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'tax_income_report_print'
    },
    taxIncomeReportObs: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'tax_income_report_obs'
    },
    taxExempFormOfPayment: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'tax_form_of_payment',
        key: 'tax_form_of_payment_id'
      },
      field: 'tax_exemp_form_of_payment'
    },
    taxDateOfMajorIllness: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'tax_date_of_major_illness'
    },
    taxExempValidForAllServ: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'tax_exemp_valid_for_all_serv'
    },
    taxExempValidForAllMun: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'tax_exemp_valid_for_all_mun'
    },
    taxExempDateCriteria: {
      type: DataTypes.STRING(2),
      allowNull: false,
      field: 'tax_exemp_date_criteria'
    }
  }, {
    sequelize,
    tableName: 'tax_exemption',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-TAX_EXEMPTION",
        unique: true,
        fields: [
          { name: "tax_exemption_id" },
        ]
      },
    ]
  });
  }
}
