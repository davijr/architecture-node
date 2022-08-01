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
          include: [
            {
              association: 'reconDimensions',
              include: [
                {
                  association: 'productCodeProduct'
                }, {
                  association: 'reconMetric'
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

  async create (reconDimensionGroup: any) {
    // try {
    //   requestModel.model = database.model(requestModel.model)
    //   return new ResponseModel(requestModel.model, 'Insert completed successfully.', await (requestModel.model as any).create(requestModel.data))
    // } catch (error: any) {
    //   logger.error(error)
    //   throw new ResponseModel(requestModel.model, `Insert was finished with error. (${error.message})`, null)
    // }
    try {
      return await database.transaction(async (transaction) => {
        const result: any = {}
        result.reconDimensionGroup = await this.createNested('ReconDimensionGroup', 'reconDimensionGroup', transaction)
        // attribute new ID for each reconGlPoint
        reconDimensionGroup.reconGlPoints.forEach((i: any) => {
          i.reconDimensionGroup = result.reconDimensionGroup.reconDimensionGroup
        })
        result.reconGlPoints = await this.editionService.bulkCreateTransaction({
          model: 'ReconGlPoint',
          data: {
            reconGlPointId: null,
            ...reconDimensionGroup.reconGlPoints
          }
        }, transaction)
        reconDimensionGroup.reconDimension.reconDimensionId = result.reconGlPoints.reconDimensionId
        // for each recon dimension
        result.reconDimensions = await this.editionService.bulkCreateTransaction({ model: 'ReconDimension', data: reconDimensionGroup.reconDimensions }, transaction)
        return result
        // const newReconDimension: any = editionService.bulkCreateTransaction({ model: 'ReconDimension', data: reconDimensionGroup.reconDimension }, transaction)
        // reconDimensionGroup.reconBzdfPoint.reconDimensionId = newReconDimension.reconDimensionId
        // editionService.bulkCreateTransaction({ model: 'ReconBzdfPoint', data: reconDimensionGroup.reconBzdfPoint }, transaction)
      })
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async createNested (modelName: string, idField: string, transaction: any) {
    try {
      const model = database.model(modelName)
      const lastId: any = await model.max(idField)
      return await model.create({ reconDimensionGroup: lastId + 1 }, transaction)
    } catch (error: any) {
      logger.error(error)
      throw new Error(`Insert was finished with error. (${error.message})`)
    }
  }

  async update (requestModel: RequestModel): Promise<ResponseModel> {
    let message = 'Update was finished with error'
    try {
      requestModel.model = database.model(requestModel.model)
      const criteria: any = {}
      criteria[requestModel.model.primaryKeyAttribute] = requestModel.data[requestModel.model.primaryKeyAttribute]
      await (requestModel.model as any).update(requestModel.data, {
        where: criteria
      }).then((data: any) => {
        console.log('aqui', data)
        if (data) {
          message = 'Update completed successfully'
          logger.info(message)
        } else {
          logger.error(message)
          throw new ResponseModel(requestModel.model, `${message}`, null)
        }
        return { message }
      }, (error: any) => {
        logger.error(error)
        throw new ResponseModel(requestModel.model, `${message} (${error.message})`, null)
      })
      return new ResponseModel(requestModel.model, message, null)
    } catch (error: any) {
      logger.error(error)
      throw new ResponseModel(requestModel.model, `${message} (${error.message})`, null)
    }
  }

  async delete (requestModel: RequestModel): Promise<ResponseModel> {
    let message = 'Delete was ended with error'
    requestModel.model = database.model(requestModel.model)
    try {
      const criteria: any = {}
      criteria[requestModel.model.primaryKeyField] = requestModel.data
      await (requestModel.model as any).destroy({ where: criteria }).then((rowDeleted: number) => { // rowDeleted will return number of rows deleted
        if (rowDeleted === 1) {
          message = 'Delete completed successfully'
          logger.info(message)
        }
      }, (error: any) => {
        throw new ResponseModel(requestModel.model, `${message} (${error.message})`, null)
      })
      return new ResponseModel(requestModel.model, message, null)
    } catch (error: any) {
      logger.error(error)
      throw new ResponseModel(requestModel.model, `${message} (${error.message})`, null)
    }
  }
}
