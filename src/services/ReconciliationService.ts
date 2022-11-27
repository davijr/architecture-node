import { database } from '@config/database'
import logger from '@config/logger'
import RequestModel from '@models/utils/RequestModel'
import ResponseModel from '@models/utils/ResponseModel'
import { EditionService } from './EditionService'

export class ReconciliationService {
  private editionService = new EditionService();

  async find (requestModel: RequestModel): Promise<ResponseModel> {
    try {
      requestModel.model = database.model(requestModel.model)
      if (!requestModel.model) {
        throw new ResponseModel(requestModel.model, 'Model can not be undefined.', null)
      }
      if (!requestModel.data) {
        const searchOptions = {
          order: [[requestModel.searchOptions?.orderBy || requestModel.model.primaryKeyField, requestModel.searchOptions?.order || 'asc']],
          limit: requestModel.searchOptions?.limit,
          offset: requestModel.searchOptions?.page
        }
        const data = await (requestModel.model as any).findAll({
          order: [
            ['reconDimensionGroup', 'desc']
          ],
          include: [
            {
              association: 'reconDimensions',
              include: [
                {
                  association: 'productCodeProduct'
                }, {
                  association: 'glClassDomsGlClass'
                }, {
                  association: 'reconMetric'
                }, {
                  association: 'reconBzdfPoints',
                  include: [
                    {
                      association: 'reconBzdfMap'
                    }, {
                      association: 'mathOperator'
                    }
                  ]
                }
              ]
            },
            {
              association: 'reconGlPoints',
              include: 'glAccountCodeGenldgAccountPlan'
            }
          ]
        })
        return new ResponseModel(requestModel.model, 'Search completed successfully.', data)
      }
      return new ResponseModel(requestModel.model, 'Search completed successfully.',
        await (requestModel.model as any).findOne({ where: requestModel.data }))
    } catch (error: any) {
      logger.error(error)
      throw new ResponseModel(requestModel.model, `Search was finished with error. (${error.message})`, null)
    }
  }

  async save (reconDimensionGroupParam: any) {
    // variables
    const transaction = await database.transaction()
    const reconDimensionGroupModel = database.model('ReconDimensionGroup')
    const reconGlPointModel = database.model('ReconGlPoint')
    const reconDimensionModel = database.model('ReconDimension')
    const isUpdate = !!reconDimensionGroupParam.reconDimensionGroup
    let result: any = {}
    try {
      // 1º ReconDimensionGroup
      if (!isUpdate) {
        result = await reconDimensionGroupModel.create({}, { transaction })
        reconDimensionGroupParam.reconDimensionGroup = result.reconDimensionGroup
      }
      // 2º ReconGlPoints
      if (isUpdate) {
        // remove all children
        await reconGlPointModel.destroy({
          where: {
            reconDimensionGroup: reconDimensionGroupParam.reconDimensionGroup
          },
          transaction
        })
      }
      result.reconGlPoints = await reconGlPointModel.bulkCreate(this.transformReconGlPoints(reconDimensionGroupParam), { transaction })
      // 3º ReconDimensions and children ReconBzdfPoints
      if (isUpdate) {
        // remove all children
        // await this.deleteReconBzdfPoints(reconDimensionGroupParam.reconDimensions, transaction)
        await reconDimensionModel.destroy({
          where: {
            reconDimensionGroup: reconDimensionGroupParam.reconDimensionGroup
          },
          transaction
        })
      }
      result.reconDimensions = await reconDimensionModel.bulkCreate(this.transformReconDimensions(reconDimensionGroupParam), {
        include: [{ association: 'reconBzdfPoints' }],
        transaction
      })
      await transaction.commit()
      return result
    } catch (error) {
      logger.error(error)
      await transaction.rollback()
    }
  }

  private transformReconGlPoints (reconDimensionGroupParam: any) {
    return reconDimensionGroupParam.reconGlPoints.map((i: any) => {
      return {
        reconDimensionGroup: reconDimensionGroupParam.reconDimensionGroup,
        glAccountCode: i.glAccountCode
      }
    })
  }

  private transformReconDimensions (reconDimensionGroupParam: any) {
    return reconDimensionGroupParam.reconDimensions.map((reconDimensionParam: any) => {
      return {
        reconDimensionGroup: reconDimensionGroupParam.reconDimensionGroup,
        reconMetricId: reconDimensionParam.reconMetricId,
        productCode: reconDimensionParam.productCode,
        glClass: reconDimensionParam.glClass,
        reconBzdfPoints: reconDimensionParam.reconBzdfPoints.map((reconBzdfPoint: any) => {
          return {
            reconBzdfMapId: reconBzdfPoint.reconBzdfMapId,
            mathOperatorId: reconBzdfPoint.mathOperatorId
          }
        })
      }
    })
  }

  private async deleteReconBzdfPoints (reconDimensions: any, transaction: any) {
    const reconBzdfPointModel = database.model('ReconBzdfPoint')
    reconDimensions.forEach(async (reconDimension: any) => {
      if (reconDimension.reconDimensionId) {
        await reconBzdfPointModel.destroy({ where: { reconDimensionId: reconDimension.reconDimensionId }, transaction })
      }
    })
  }

  async delete (requestModel: RequestModel): Promise<ResponseModel> {
    let message = 'Delete was ended with error'
    const transaction = await database.transaction()
    requestModel.model = database.model(requestModel.model)
    try {
      // 1º get children
      const reconDimensionGroup = await requestModel.model.findOne({
        where: { reconDimensionGroup: requestModel.data },
        include: ['reconGlPoints', 'reconDimensions'],
        transaction
      })
      // 2º destroy reconGlPoints
      const reconGlPointModel = database.model('ReconGlPoint')
      await reconGlPointModel.destroy({ where: { reconDimensionGroup: requestModel.data }, transaction })
      // 3º destroy reconBzdfPoints
      await this.deleteReconBzdfPoints(reconDimensionGroup.reconDimensions, transaction)
      // 4º destroy reconDimensions
      const reconDimensionModel = database.model('ReconDimension')
      await reconDimensionModel.destroy({ where: { reconDimensionGroup: requestModel.data }, transaction })
      // 5º destroy root
      await reconDimensionGroup.destroy({ transaction }).then((rowDeleted: number) => {
        if (rowDeleted === 1) {
          message = 'Delete completed successfully'
          logger.info(message)
        }
      }, (error: any) => {
        throw new ResponseModel(requestModel.model, `${message} (${error.message})`, null)
      })
      await transaction.commit()
      return new ResponseModel(requestModel.model, message, null)
    } catch (error: any) {
      logger.error(error)
      await transaction.rollback()
      throw new ResponseModel(requestModel.model, `${message} (${error.message})`, null)
    }
  }
}
