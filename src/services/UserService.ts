import logger from '@config/logger'
import User from '@models/User'
import RequestModel from '@models/utils/RequestModel'
import ResponseModel from '@models/utils/ResponseModel'

export class UserService {
  async get (user: any) {
    if (!user || (!user.id && !user.username)) {
      return User.findAll({
        include: [
          'roles',
          'permissions'
        ],
        attributes: {
          exclude: ['password']
        }
      })
    }
    return User.findOne({
      where: user,
      include: [
        'roles',
        'permissions'
      ],
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

  async create (request: RequestModel) {
    return (User as any).create(request.data, { userId: request.userId, hooks: true })
  }

  async update (request: RequestModel) {
    return (User as any).update(request.data, {
      where: { username: request.data.username }
    }, {
      userId: request.userId,
      hooks: true
    })
  }

  async delete (request: RequestModel): Promise<ResponseModel> {
    let message = 'Delete was ended with error'
    try {
      await (User as any).destroy({ where: request.data }, { userId: request.userId, hooks: true })
        .then((rowDeleted: number) => { // rowDeleted will return number of rows deleted
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

  async deactivate (request: RequestModel): Promise<ResponseModel> {
    let message = 'Deactivation was ended with error.'
    try {
      let user = request.data
      user = await this.get(user)
      await user.update({ deactivatedAt: new Date() }, { userId: request.userId, hooks: true })
      message = 'Deactivation completed successfully.'
      logger.info(message)
      return new ResponseModel('user', message, null)
    } catch (e) {
      logger.error(e)
      return new ResponseModel('user', message, null)
    }
  }
}
