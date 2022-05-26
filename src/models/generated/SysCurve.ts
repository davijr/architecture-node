import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DomsAccrualBasis, DomsAccrualBasisId } from './DomsAccrualBasis';
import type { MktdEodCurve, MktdEodCurveId } from './MktdEodCurve';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysCurveUnderlyingLink, SysCurveUnderlyingLinkId } from './SysCurveUnderlyingLink';

export interface SysCurveAttributes {
  curveName: string;
  curveDescription?: string;
  accrualBasis: string;
  currencyCode: string;
}

export type SysCurvePk = "curveName";
export type SysCurveId = SysCurve[SysCurvePk];
export type SysCurveOptionalAttributes = "curveDescription";
export type SysCurveCreationAttributes = Optional<SysCurveAttributes, SysCurveOptionalAttributes>;

export class SysCurve extends Model<SysCurveAttributes, SysCurveCreationAttributes> implements SysCurveAttributes {
  curveName!: string;
  curveDescription?: string;
  accrualBasis!: string;
  currencyCode!: string;

  // SysCurve belongsTo DomsAccrualBasis via accrualBasis
  accrualBasisDomsAccrualBasis!: DomsAccrualBasis;
  getAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // SysCurve belongsTo SysCurrency via currencyCode
  currencyCodeSysCurrency!: SysCurrency;
  getCurrencyCodeSysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setCurrencyCodeSysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createCurrencyCodeSysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // SysCurve hasMany MktdEodCurve via discountCurveName
  mktdEodCurves!: MktdEodCurve[];
  getMktdEodCurves!: Sequelize.HasManyGetAssociationsMixin<MktdEodCurve>;
  setMktdEodCurves!: Sequelize.HasManySetAssociationsMixin<MktdEodCurve, MktdEodCurveId>;
  addMktdEodCurve!: Sequelize.HasManyAddAssociationMixin<MktdEodCurve, MktdEodCurveId>;
  addMktdEodCurves!: Sequelize.HasManyAddAssociationsMixin<MktdEodCurve, MktdEodCurveId>;
  createMktdEodCurve!: Sequelize.HasManyCreateAssociationMixin<MktdEodCurve>;
  removeMktdEodCurve!: Sequelize.HasManyRemoveAssociationMixin<MktdEodCurve, MktdEodCurveId>;
  removeMktdEodCurves!: Sequelize.HasManyRemoveAssociationsMixin<MktdEodCurve, MktdEodCurveId>;
  hasMktdEodCurve!: Sequelize.HasManyHasAssociationMixin<MktdEodCurve, MktdEodCurveId>;
  hasMktdEodCurves!: Sequelize.HasManyHasAssociationsMixin<MktdEodCurve, MktdEodCurveId>;
  countMktdEodCurves!: Sequelize.HasManyCountAssociationsMixin;
  // SysCurve hasMany SysCurveUnderlyingLink via curveName
  sysCurveUnderlyingLinks!: SysCurveUnderlyingLink[];
  getSysCurveUnderlyingLinks!: Sequelize.HasManyGetAssociationsMixin<SysCurveUnderlyingLink>;
  setSysCurveUnderlyingLinks!: Sequelize.HasManySetAssociationsMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  addSysCurveUnderlyingLink!: Sequelize.HasManyAddAssociationMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  addSysCurveUnderlyingLinks!: Sequelize.HasManyAddAssociationsMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  createSysCurveUnderlyingLink!: Sequelize.HasManyCreateAssociationMixin<SysCurveUnderlyingLink>;
  removeSysCurveUnderlyingLink!: Sequelize.HasManyRemoveAssociationMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  removeSysCurveUnderlyingLinks!: Sequelize.HasManyRemoveAssociationsMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  hasSysCurveUnderlyingLink!: Sequelize.HasManyHasAssociationMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  hasSysCurveUnderlyingLinks!: Sequelize.HasManyHasAssociationsMixin<SysCurveUnderlyingLink, SysCurveUnderlyingLinkId>;
  countSysCurveUnderlyingLinks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof SysCurve {
    return SysCurve.init({
    curveName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'curve_name'
    },
    curveDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'curve_description'
    },
    accrualBasis: {
      type: DataTypes.STRING(7),
      allowNull: false,
      references: {
        model: 'doms_accrual_basis',
        key: 'domain'
      },
      field: 'accrual_basis'
    },
    currencyCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'currency_code'
    }
  }, {
    sequelize,
    tableName: 'sys_curve',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-SYS_CURVE",
        unique: true,
        fields: [
          { name: "curve_name" },
        ]
      },
    ]
  });
  }
}
