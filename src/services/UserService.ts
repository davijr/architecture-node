import logger from '@config/logger'
import User from '@models/User'
import RequestModel from '@models/utils/RequestModel'
import ResponseModel from '@models/utils/ResponseModel'
import { hash } from 'bcryptjs'

export class UserService {
  get (user: User) {
    if (!user) {
      return User.findAll()
    }
    return User.findAll({
      where: { username: user.username }
    })
  }

  async create (requestModel: RequestModel) {
    const user = requestModel.data
    user.password = await hash(user.password, 8)
    return User.create({
      user
    })
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
      return { message }
    } catch (e) {
      logger.error(e)
      return { message }
    }
  }
}
