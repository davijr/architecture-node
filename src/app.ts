import '@config/environment'
import { database } from '@config/database'
import logger from '@config/logger'
import { initModels } from '@models/generated/initModels'
import { AppUtils } from '@utils/AppUtils'
import bodyParser from 'body-parser'
import express from 'express'
import mountRoutes from './routes'
import User from '@models/User'
import Permission from '@models/Permission'
import Role from '@models/Role'
import UserRole from '@models/UserRole'
import UserPermission from '@models/UserPemission'
import RolePermission from '@models/RolePermission'
import SystemParam from '@models/SystemParam'
import JobQueue from 'src/jobs/JobQueue'
import Audit from '@models/Audit'
import { EditionService } from '@services/EditionService'

(async () => {
  try {
    initModels(database)
    if (AppUtils.isDBSync()) {
      await database.sync()
    } else {
      await SystemParam.sync()
      await Audit.sync()
      await User.sync()
      await Permission.sync()
      await Role.sync()
      await UserRole.sync()
      await UserPermission.sync()
      await RolePermission.sync()
    }
    await initialLoading()
    JobQueue.run()
  } catch (error) {
    logger.error(error)
  }
})()

async function initialLoading () {
  const roleModel = database.model('Role')
  const editionService = new EditionService()
  const count = await roleModel.count()
  if (count === 0) {
    const role: any = { name: 'Catalog', permissions: [] }
    // list of admin pages to disregard
    const adminPages = ['Settings', 'Authorization']
    // get menu options
    const menu = await editionService.getMenuOptions()
    menu.forEach((item: any) => {
      // other users
      if (!adminPages.includes(item.name)) {
        role.permissions.push({ name: item.name })
      }
    })
    await roleModel.create(role, { include: [{ association: 'permissions' }] })
  }
}

const app = express()
app.use(bodyParser.json())
mountRoutes(app)

export default app
