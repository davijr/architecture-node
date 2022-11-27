import schedule from 'node-schedule'
import logger from '@config/logger'
import { UserService } from '@services/UserService'
import { SystemParamService } from '@services/SystemParamService'
import User from '@models/User'
import { AppUtils } from '@utils/AppUtils'

const userService = new UserService()
const systemParamService = new SystemParamService()

async function userValidationJob () {
  logger.info(new Date().toLocaleString() + ' - User validation job has started.')
  const TIME_TO_DEACTIVATE_INACTIVE_USER: any = await systemParamService.get({ name: 'TIME_TO_DEACTIVATE_INACTIVE_USER' })
  const TIME_TO_REMOVE_DEACTIVATED_USER: any = await systemParamService.get({ name: 'TIME_TO_REMOVE_DEACTIVATED_USER' })
  let users: any = await userService.get({})
  users = users.filter((user: User) => user.username !== 'admin')
  users.forEach(async (user: User) => {
    const inactivationPeriod: number | null = user.lastLogin ? AppUtils.getDaysToNow(user.lastLogin) : null
    const deactivationPeriod: number | null = user.deactivatedAt ? AppUtils.getDaysToNow(user.deactivatedAt) : null
    try {
      // deactivate user
      if (inactivationPeriod && !user.deactivatedAt && inactivationPeriod >= Number(TIME_TO_DEACTIVATE_INACTIVE_USER.value)) {
        await userService.deactivate({
          data: { id: user.id },
          userId: 'system'
        })
        logger.info(new Date().toLocaleString() + ' - The user was deactivated due to the inactivation period, according to system parameters.')
      }
      // remove user
      if (deactivationPeriod && deactivationPeriod >= Number(TIME_TO_REMOVE_DEACTIVATED_USER.value)) {
        await userService.delete({
          data: { id: user.id },
          userId: 'system'
        })
        logger.info(new Date().toLocaleString() + ' - The user was removed due to the deactivation period, according to system parameters.')
      }
      logger.info(new Date().toLocaleString() + ' - User validation job has finished.')
    } catch (e) {
      logger.error(e)
    }
  })
}

export default schedule.scheduleJob('*/30 * * * * *', userValidationJob)
