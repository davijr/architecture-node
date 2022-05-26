import { database } from '@config/database'
import logger from '@config/logger'
import { ModelUtils } from '@models/utils/ModelUtils'
import RequestModel from '@models/utils/RequestModel'
import ResponseModel from '@models/utils/ResponseModel'

export class EditionService {
  async find (requestModel: RequestModel): Promise<ResponseModel> {
    try {
      requestModel.model = database.model(requestModel.model)
      if (!requestModel.model) {
        throw new Error('Model can not be undefined')
      }
      if (!requestModel.data) {
        const searchOptions = {
          order: [[requestModel.searchOptions?.orderBy || requestModel.model.primaryKeyField, requestModel.searchOptions?.order || 'asc']],
          limit: requestModel.searchOptions?.limit,
          offset: requestModel.searchOptions?.page
        }
        return {
          data: await (requestModel.model as any).findAll({}),
          message: 'Search completed successfully'
        }
      }
      return {
        data: await (requestModel.model as any).findOne({ where: requestModel.data }),
        message: 'Search completed successfully'
      }
    } catch (e) {
      logger.error(e)
      throw new Error('Search was finished with error')
    }
  }

  async create (requestModel: RequestModel): Promise<ResponseModel> {
    try {
      return {
        data: await (requestModel.model as any).create(requestModel.data),
        message: 'Insert completed successfully'
      }
    } catch (e) {
      logger.error(e)
      throw new Error('Insert was finished with error')
    }
  }

  async update (requestModel: RequestModel): Promise<ResponseModel> {
    let message = 'Update was finished with error'
    try {
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
          throw new Error(message)
        }
        return { message }
      }, (error: any) => {
        logger.error(error)
        throw new Error(error)
      })
      return { message }
    } catch (e) {
      logger.error(e)
      throw new Error(message)
    }
  }

  async delete (requestModel: RequestModel): Promise<ResponseModel> {
    let message = 'Delete was ended with error'
    try {
      const criteria: any = {}
      criteria[requestModel.model.primaryKeyField] = requestModel.data
      await (requestModel.model as any).destroy({ where: criteria }).then((rowDeleted: number) => { // rowDeleted will return number of rows deleted
        if (rowDeleted === 1) {
          message = 'Delete completed successfully'
          logger.info(message)
        }
      }, (error: any) => {
        throw new Error(error)
      })
      return { message }
    } catch (e) {
      logger.error(e)
      throw new Error(message)
    }
  }

  async getMenuOptions () {
    const modelKeys = Object.keys(database.models)
    const groups: string[] = []
    const items: any[] = []
    modelKeys.forEach(item => {
      const aux = item.replace(/([a-z])([A-Z])/g, '$1 $2')
      const groupName = aux.split(' ')[0]
      if (!groups.includes(groupName)) {
        groups.push(groupName)
      }
    })
    groups.forEach(group => {
      const newItem: any = {
        name: group,
        active: true
      }
      newItem.items = []
      modelKeys.forEach(item => {
        if (item.startsWith(group)) {
          newItem.items.push({
            name: ModelUtils.getMenuItemName(item),
            route: 'edition',
            param: item,
            active: true
          })
        }
      })
      ModelUtils.sort(newItem.items, 'name')
      items.push(newItem)
    })
    ModelUtils.sort(items, 'name')
    return items
  }

  async getAttributes (modelName: string) {
    const modelObject = database.model(modelName)
    return ModelUtils.transformModel(modelName, modelObject)
  }
}
