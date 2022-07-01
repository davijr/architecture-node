import logger from '@config/logger'
import User from '@models/User'
import RequestModel from '@models/utils/RequestModel'
import ResponseModel from '@models/utils/ResponseModel'

export class UserService {
  async get (username: string) {
    if (!username) {
      return User.findAll({
        attributes: {
          exclude: ['password']
        }
      })
    }
    return User.findAll({
      where: { username },
      attributes: {
        exclude: ['password']
      }
    })
  }

  async getUserAuth (username: string) {
    return User.findOne({
      where: { username }
    })
  }

  async create (requestModel: RequestModel) {
    const user = requestModel.data
    return User.create(user)
  }

  async delete (requestModel: RequestModel): Promise<ResponseModel> {
    let message = 'Delete was ended with error'
    try {
      const criteria: any = {}
      criteria.username = requestModel.data
      await User.destroy({ where: criteria }).then((rowDeleted: number) => { // rowDeleted will return number of rows deleted
        if (rowDeleted === 1) {
          message = 'Delete completed successfully'
          logger.info(message)
        }
      }, (err: any) => {
        logger.error(err)
      })
      return new ResponseModel('user', message, null)
    } catch (e) {
      logger.error(e)
      return new ResponseModel('user', message, null)
    }
  }
}
