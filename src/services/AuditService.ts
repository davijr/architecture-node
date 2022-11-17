import logger from '@config/logger'

export class AuditService {
  async log (action: 'create' | 'update' | 'delete', model: any, options: any) {
    const entity = model.constructor.name
    logger.info(`${new Date().toLocaleString()} - AUDIT LOG - ${entity} - ${action}`)
    let currentUser = options.userId
    if (!currentUser) {
      return
    }
    if (currentUser !== 'system') {
      currentUser = await model.sequelize.models.User.findOne({ id: currentUser })
      currentUser = currentUser.username
    }
    try {
      if (!this.getFilteredModels().includes(entity)) {
        const previousValues = this.getChanged(model, model._previousDataValues)
        const currentValues = this.getChanged(model, model.dataValues)
        await model.sequelize.models.Audit.create({
          username: currentUser,
          entity,
          previousValues,
          currentValues,
          action
        })
      }
    } catch (e) {
      throw new Error('Error on trying persist the audit log.')
    }
  }

  private getChanged (model: any, values: any) {
    const changed: any = {}
    const fields = model.changed()
    const filteredFields = this.filterAttributes(fields)
    filteredFields.forEach((f: any) => {
      changed[f] = values[f]
    })
    return changed
  }

  private filterAttributes (fields: any[]) {
    return fields.filter(f => !['createdAt', 'updatedAt', 'deletedAt'].includes(f))
  }

  private getFilteredModels () {
    return ['Audit']
  }
}
