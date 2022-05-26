import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ReconBzdfPoint, ReconBzdfPointId } from './ReconBzdfPoint';

export interface ReconBzdfMapAttributes {
  reconBzdfMapId: number;
  sourceTable: string;
  sourceTableColumn: string;
}

export type ReconBzdfMapPk = "reconBzdfMapId";
export type ReconBzdfMapId = ReconBzdfMap[ReconBzdfMapPk];
export type ReconBzdfMapOptionalAttributes = "reconBzdfMapId";
export type ReconBzdfMapCreationAttributes = Optional<ReconBzdfMapAttributes, ReconBzdfMapOptionalAttributes>;

export class ReconBzdfMap extends Model<ReconBzdfMapAttributes, ReconBzdfMapCreationAttributes> implements ReconBzdfMapAttributes {
  reconBzdfMapId!: number;
  sourceTable!: string;
  sourceTableColumn!: string;

  // ReconBzdfMap hasMany ReconBzdfPoint via reconBzdfMapId
  reconBzdfPoints!: ReconBzdfPoint[];
  getReconBzdfPoints!: Sequelize.HasManyGetAssociationsMixin<ReconBzdfPoint>;
  setReconBzdfPoints!: Sequelize.HasManySetAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  addReconBzdfPoint!: Sequelize.HasManyAddAssociationMixin<ReconBzdfPoint, ReconBzdfPointId>;
  addReconBzdfPoints!: Sequelize.HasManyAddAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  createReconBzdfPoint!: Sequelize.HasManyCreateAssociationMixin<ReconBzdfPoint>;
  removeReconBzdfPoint!: Sequelize.HasManyRemoveAssociationMixin<ReconBzdfPoint, ReconBzdfPointId>;
  removeReconBzdfPoints!: Sequelize.HasManyRemoveAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  hasReconBzdfPoint!: Sequelize.HasManyHasAssociationMixin<ReconBzdfPoint, ReconBzdfPointId>;
  hasReconBzdfPoints!: Sequelize.HasManyHasAssociationsMixin<ReconBzdfPoint, ReconBzdfPointId>;
  countReconBzdfPoints!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ReconBzdfMap {
    return ReconBzdfMap.init({
    reconBzdfMapId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'recon_bzdf_map_id'
    },
    sourceTable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'source_table'
    },
    sourceTableColumn: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'source_table_column'
    }
  }, {
    sequelize,
    tableName: 'recon_bzdf_map',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "Indx-RECON_BZDF_MAP",
        unique: true,
        fields: [
          { name: "source_table" },
          { name: "source_table_column" },
        ]
      },
      {
        name: "PK-RECON_BZDF_MAP",
        unique: true,
        fields: [
          { name: "recon_bzdf_map_id" },
        ]
      },
    ]
  });
  }
}
