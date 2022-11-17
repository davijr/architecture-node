import { database } from '@config/database'
import logger from '@config/logger'
import Role from '@models/Role'
import ResponseModel from '@models/utils/ResponseModel'
import * as Sequelize from 'sequelize'

export class RoleService {
  async get (role: any | null) {
    if (!role || (!role.id && !role.name)) {
      return Role.findAll({ include: ['permissions'] })
    }
    return Role.findOne({
      where: role,
      include: ['permissions']
    })
  }

  async getByIds (ids: string[]) {
    return Role.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: ids
        }
      },
      include: ['permissions']
    })
  }

  async create (role: Role) {
    const model = database.model('Role')

    // exists
    const exists = await this.get({ name: role.name })
    if (exists) {
      return new Error('Role already exists.')
    }

    return await model.create(role as any)
  }

  async update (role: Role) {
    const model = database.model('Role')
    return await model.update(role, {
      where: { name: role.name }
    })
  }

  async delete (name: string): Promise<ResponseModel> {
    let message = 'Delete was ended with error'
    try {
      const criteria = { name }
      await Role.destroy({ where: criteria }).then((rowDeleted: number) => { // rowDeleted will return number of rows deleted
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
