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
        throw new ResponseModel(requestModel.model, 'Model can not be undefined.', null)
      }
      if (!requestModel.data) {
        const searchOptions = {
          order: [[requestModel.searchOptions?.orderBy || requestModel.model.primaryKeyField, requestModel.searchOptions?.order || 'asc']],
          limit: requestModel.searchOptions?.limit,
          offset: requestModel.searchOptions?.page
        }
        return new ResponseModel(requestModel.model, 'Search completed successfully.',
          await (requestModel.model as any).findAll({}))
      }
      return new ResponseModel(requestModel.model, 'Search completed successfully.',
        await (requestModel.model as any).findOne({ where: requestModel.data }))
    } catch (error: any) {
      logger.error(error)
      throw new ResponseModel(requestModel.model, `Search was finished with error. (${error.message})`, null)
    }
  }

  async create (requestModel: RequestModel): Promise<ResponseModel> {
    try {
      requestModel.model = database.model(requestModel.model)
      return new ResponseModel(requestModel.model, 'Insert completed successfully.', await (requestModel.model as any).create(requestModel.data))
    } catch (error: any) {
      logger.error(error)
      throw new ResponseModel(requestModel.model, `Insert was finished with error. (${error.message})`, null)
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
