import { database } from '@config/database'
import { PermissionService } from './PermissionService'
import { RoleService } from './RoleService'
import { UserService } from './UserService'

type UserAccessControlRequest = {
  userId: string
  roles: string[]
  permissions: string[]
}

export class UserAccessControlService {
  async save (uac: UserAccessControlRequest) {
    const userModel = database.model('User')
    const userService = new UserService()
    const roleService = new RoleService()
    const permissionService = new PermissionService()

    const user: any = await userService.get({ id: uac.userId })

    if (!user) {
      return new Error('User does not exists!')
    }

    if ((!uac.roles || uac.roles.length === 0) &&
        (!uac.permissions || uac.permissions.length === 0)) {
      return new Error('Error! You need at least one role/permission.')
    }

    await user.setPermissions(await permissionService.getByIds(uac.permissions))
    await user.setRoles(await roleService.getByIds(uac.roles))

    await userModel.update(user, {
      where: {
        id: uac.userId
      }
    })
    await user.getPermissions()
    await user.getRoles()

    return user
  }
}
