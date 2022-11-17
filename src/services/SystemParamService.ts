import { database } from '@config/database'
import logger from '@config/logger'
import SystemParam from '@models/SystemParam'
import ResponseModel from '@models/utils/ResponseModel'
import * as Sequelize from 'sequelize'

export class SystemParamService {
  async get (systemParam: any | null) {
    if (!systemParam || (!systemParam.id && !systemParam.name)) {
      return SystemParam.findAll({})
    }
    return SystemParam.findOne({
      where: systemParam
    })
  }

  async getByIds (ids: string[]) {
    return SystemParam.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: ids
        }
      }
    })
  }

  async create (systemParam: SystemParam) {
    const model = database.model('SystemParam')

    // exists
    const exists = await this.get({ name: systemParam.name })
    if (exists) {
      return new Error('System param already exists.')
    }

    return await model.create(systemParam as any)
  }

  async update (systemParam: SystemParam) {
    const model = database.model('SystemParam')
    return await model.update(systemParam, {
      where: { name: systemParam.name }
    })
  }

  async delete (name: string): Promise<ResponseModel> {
    let message = 'Delete was ended with error'
    try {
      const criteria = { name }
      await SystemParam.destroy({ where: criteria }).then((rowDeleted: number) => { // rowDeleted will return number of rows deleted
        if (rowDeleted === 1) {
          message = 'Delete completed successfully'
          logger.info(message)
        }
      }, (err: any) => {
        logger.error(err)
      })
      return new ResponseModel('systemParam', message, null)
    } catch (e) {
      logger.error(e)
      return new ResponseModel('systemParam', message, null)
    }
  }
}
