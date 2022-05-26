import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AlcmDloTb03Cpad, AlcmDloTb03CpadId } from './AlcmDloTb03Cpad';
import type { AlcmDloTb03Limimob, AlcmDloTb03LimimobId } from './AlcmDloTb03Limimob';
import type { AlcmDloTb03Opad, AlcmDloTb03OpadId } from './AlcmDloTb03Opad';
import type { AlcmDloTb03Pr, AlcmDloTb03PrId } from './AlcmDloTb03Pr';
import type { AlcmDloTb03Ra, AlcmDloTb03RaId } from './AlcmDloTb03Ra';

export interface AlcmDloAcctGroupAttributes {
  dloGroupCode: string;
  dloGroupName: string;
  dloDomainInitialDate: string;
  dloDomainEndDate?: string;
}

export type AlcmDloAcctGroupPk = "dloGroupCode";
export type AlcmDloAcctGroupId = AlcmDloAcctGroup[AlcmDloAcctGroupPk];
export type AlcmDloAcctGroupOptionalAttributes = "dloDomainEndDate";
export type AlcmDloAcctGroupCreationAttributes = Optional<AlcmDloAcctGroupAttributes, AlcmDloAcctGroupOptionalAttributes>;

export class AlcmDloAcctGroup extends Model<AlcmDloAcctGroupAttributes, AlcmDloAcctGroupCreationAttributes> implements AlcmDloAcctGroupAttributes {
  dloGroupCode!: string;
  dloGroupName!: string;
  dloDomainInitialDate!: string;
  dloDomainEndDate?: string;

  // AlcmDloAcctGroup hasMany AlcmDloTb03Cpad via dloAccountGroup
  alcmDloTb03Cpads!: AlcmDloTb03Cpad[];
  getAlcmDloTb03Cpads!: Sequelize.HasManyGetAssociationsMixin<AlcmDloTb03Cpad>;
  setAlcmDloTb03Cpads!: Sequelize.HasManySetAssociationsMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  addAlcmDloTb03Cpad!: Sequelize.HasManyAddAssociationMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  addAlcmDloTb03Cpads!: Sequelize.HasManyAddAssociationsMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  createAlcmDloTb03Cpad!: Sequelize.HasManyCreateAssociationMixin<AlcmDloTb03Cpad>;
  removeAlcmDloTb03Cpad!: Sequelize.HasManyRemoveAssociationMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  removeAlcmDloTb03Cpads!: Sequelize.HasManyRemoveAssociationsMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  hasAlcmDloTb03Cpad!: Sequelize.HasManyHasAssociationMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  hasAlcmDloTb03Cpads!: Sequelize.HasManyHasAssociationsMixin<AlcmDloTb03Cpad, AlcmDloTb03CpadId>;
  countAlcmDloTb03Cpads!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmDloAcctGroup hasMany AlcmDloTb03Limimob via dloAccountGroup
  alcmDloTb03Limimobs!: AlcmDloTb03Limimob[];
  getAlcmDloTb03Limimobs!: Sequelize.HasManyGetAssociationsMixin<AlcmDloTb03Limimob>;
  setAlcmDloTb03Limimobs!: Sequelize.HasManySetAssociationsMixin<AlcmDloTb03Limimob, AlcmDloTb03LimimobId>;
  addAlcmDloTb03Limimob!: Sequelize.HasManyAddAssociationMixin<AlcmDloTb03Limimob, AlcmDloTb03LimimobId>;
  addAlcmDloTb03Limimobs!: Sequelize.HasManyAddAssociationsMixin<AlcmDloTb03Limimob, AlcmDloTb03LimimobId>;
  createAlcmDloTb03Limimob!: Sequelize.HasManyCreateAssociationMixin<AlcmDloTb03Limimob>;
  removeAlcmDloTb03Limimob!: Sequelize.HasManyRemoveAssociationMixin<AlcmDloTb03Limimob, AlcmDloTb03LimimobId>;
  removeAlcmDloTb03Limimobs!: Sequelize.HasManyRemoveAssociationsMixin<AlcmDloTb03Limimob, AlcmDloTb03LimimobId>;
  hasAlcmDloTb03Limimob!: Sequelize.HasManyHasAssociationMixin<AlcmDloTb03Limimob, AlcmDloTb03LimimobId>;
  hasAlcmDloTb03Limimobs!: Sequelize.HasManyHasAssociationsMixin<AlcmDloTb03Limimob, AlcmDloTb03LimimobId>;
  countAlcmDloTb03Limimobs!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmDloAcctGroup hasMany AlcmDloTb03Opad via dloAccountGroup
  alcmDloTb03Opads!: AlcmDloTb03Opad[];
  getAlcmDloTb03Opads!: Sequelize.HasManyGetAssociationsMixin<AlcmDloTb03Opad>;
  setAlcmDloTb03Opads!: Sequelize.HasManySetAssociationsMixin<AlcmDloTb03Opad, AlcmDloTb03OpadId>;
  addAlcmDloTb03Opad!: Sequelize.HasManyAddAssociationMixin<AlcmDloTb03Opad, AlcmDloTb03OpadId>;
  addAlcmDloTb03Opads!: Sequelize.HasManyAddAssociationsMixin<AlcmDloTb03Opad, AlcmDloTb03OpadId>;
  createAlcmDloTb03Opad!: Sequelize.HasManyCreateAssociationMixin<AlcmDloTb03Opad>;
  removeAlcmDloTb03Opad!: Sequelize.HasManyRemoveAssociationMixin<AlcmDloTb03Opad, AlcmDloTb03OpadId>;
  removeAlcmDloTb03Opads!: Sequelize.HasManyRemoveAssociationsMixin<AlcmDloTb03Opad, AlcmDloTb03OpadId>;
  hasAlcmDloTb03Opad!: Sequelize.HasManyHasAssociationMixin<AlcmDloTb03Opad, AlcmDloTb03OpadId>;
  hasAlcmDloTb03Opads!: Sequelize.HasManyHasAssociationsMixin<AlcmDloTb03Opad, AlcmDloTb03OpadId>;
  countAlcmDloTb03Opads!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmDloAcctGroup hasMany AlcmDloTb03Pr via dloAccountGroup
  alcmDloTb03Prs!: AlcmDloTb03Pr[];
  getAlcmDloTb03Prs!: Sequelize.HasManyGetAssociationsMixin<AlcmDloTb03Pr>;
  setAlcmDloTb03Prs!: Sequelize.HasManySetAssociationsMixin<AlcmDloTb03Pr, AlcmDloTb03PrId>;
  addAlcmDloTb03Pr!: Sequelize.HasManyAddAssociationMixin<AlcmDloTb03Pr, AlcmDloTb03PrId>;
  addAlcmDloTb03Prs!: Sequelize.HasManyAddAssociationsMixin<AlcmDloTb03Pr, AlcmDloTb03PrId>;
  createAlcmDloTb03Pr!: Sequelize.HasManyCreateAssociationMixin<AlcmDloTb03Pr>;
  removeAlcmDloTb03Pr!: Sequelize.HasManyRemoveAssociationMixin<AlcmDloTb03Pr, AlcmDloTb03PrId>;
  removeAlcmDloTb03Prs!: Sequelize.HasManyRemoveAssociationsMixin<AlcmDloTb03Pr, AlcmDloTb03PrId>;
  hasAlcmDloTb03Pr!: Sequelize.HasManyHasAssociationMixin<AlcmDloTb03Pr, AlcmDloTb03PrId>;
  hasAlcmDloTb03Prs!: Sequelize.HasManyHasAssociationsMixin<AlcmDloTb03Pr, AlcmDloTb03PrId>;
  countAlcmDloTb03Prs!: Sequelize.HasManyCountAssociationsMixin;
  // AlcmDloAcctGroup hasMany AlcmDloTb03Ra via dloAccountGroup
  alcmDloTb03Ras!: AlcmDloTb03Ra[];
  getAlcmDloTb03Ras!: Sequelize.HasManyGetAssociationsMixin<AlcmDloTb03Ra>;
  setAlcmDloTb03Ras!: Sequelize.HasManySetAssociationsMixin<AlcmDloTb03Ra, AlcmDloTb03RaId>;
  addAlcmDloTb03Ra!: Sequelize.HasManyAddAssociationMixin<AlcmDloTb03Ra, AlcmDloTb03RaId>;
  addAlcmDloTb03Ras!: Sequelize.HasManyAddAssociationsMixin<AlcmDloTb03Ra, AlcmDloTb03RaId>;
  createAlcmDloTb03Ra!: Sequelize.HasManyCreateAssociationMixin<AlcmDloTb03Ra>;
  removeAlcmDloTb03Ra!: Sequelize.HasManyRemoveAssociationMixin<AlcmDloTb03Ra, AlcmDloTb03RaId>;
  removeAlcmDloTb03Ras!: Sequelize.HasManyRemoveAssociationsMixin<AlcmDloTb03Ra, AlcmDloTb03RaId>;
  hasAlcmDloTb03Ra!: Sequelize.HasManyHasAssociationMixin<AlcmDloTb03Ra, AlcmDloTb03RaId>;
  hasAlcmDloTb03Ras!: Sequelize.HasManyHasAssociationsMixin<AlcmDloTb03Ra, AlcmDloTb03RaId>;
  countAlcmDloTb03Ras!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AlcmDloAcctGroup {
    return AlcmDloAcctGroup.init({
    dloGroupCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      field: 'dlo_group_code'
    },
    dloGroupName: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'dlo_group_name'
    },
    dloDomainInitialDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'dlo_domain_initial_date'
    },
    dloDomainEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'dlo_domain_end_date'
    }
  }, {
    sequelize,
    tableName: 'alcm_dlo_acct_group',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-ALCM_DLO_ACCT_GROUP",
        unique: true,
        fields: [
          { name: "dlo_group_code" },
        ]
      },
    ]
  });
  }
}
