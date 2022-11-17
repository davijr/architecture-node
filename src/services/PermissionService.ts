import { database } from '@config/database'
import logger from '@config/logger'
import Permission from '@models/Permission'
import ResponseModel from '@models/utils/ResponseModel'
import * as Sequelize from 'sequelize'

export class PermissionService {
  async get (permission: any | null) {
    if (!permission || (!permission.id && !permission.name)) {
      return Permission.findAll({})
    }
    return Permission.findAll({
      where: permission
    })
  }

  async getByIds (ids: string[]) {
    return Permission.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: ids
        }
      }
    })
  }

  async create (permission: Permission) {
    const model = database.model('Permission')

    // exists
    const exists = await this.get({ name: permission.name })
    if (exists.length > 0) {
      return new Error('Permission already exists.')
    }

    return await model.create(permission as any)
  }

  async update (permission: Permission) {
    const model = database.model('Permission')
    return await model.update(permission, {
      where: { name: permission.name }
    })
  }

  async delete (name: string): Promise<ResponseModel> {
    let message = 'Delete was ended with error'
    try {
      const criteria = { name }
      await Permission.destroy({ where: criteria }).then((rowDeleted: number) => { // rowDeleted will return number of rows deleted
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
