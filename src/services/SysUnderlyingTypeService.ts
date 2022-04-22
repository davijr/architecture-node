
import logger from '@config/logger'
import SysUnderlyingType from '@models/sys/SysUnderlyingType'
import RequestModel from '@models/utils/RequestModel'
import ResponseModel from '@models/utils/ResponseModel'

export class SysUnderlyingTypeService {
  async get (requestModel: RequestModel): Promise<ResponseModel> {
    try {
      if (!requestModel.data) {
        return {
          data: await SysUnderlyingType.findAll(),
          message: 'Search completed successfully'
        }
      }
      return {
        data: await SysUnderlyingType.findOne({ where: requestModel.data }),
        message: 'Search completed successfully'
      }
    } catch (e) {
      logger.error(e)
      return {
        message: 'Search was finished with error'
      }
    }
  }

  async create (requestModel: RequestModel): Promise<ResponseModel> {
    try {
      return {
        data: await SysUnderlyingType.create(requestModel.data),
        message: 'Insert completed successfully'
      }
    } catch (e) {
      logger.error(e)
      return {
        message: 'Insert was finished with error'
      }
    }
  }

  async update (requestModel: RequestModel): Promise<ResponseModel> {
    try {
      return {
        data: await SysUnderlyingType.update(requestModel.data, {
          where: { underlyingType: requestModel.data.underlyingType }
        }),
        message: 'Update completed successfully'
      }
    } catch (e) {
      logger.error(e)
      return {
        message: 'Update was finished with error'
      }
    }
  }

  async delete (param: string): Promise<ResponseModel> {
    try {
      await SysUnderlyingType.destroy({
        where: { underlyingType: param }
      })
      return {
        message: 'Delete completed successfully'
      }
    } catch (e) {
      logger.error(e)
      return {
        message: 'Delete was ended with error'
      }
    }
  }
}

export default SysUnderlyingTypeService
