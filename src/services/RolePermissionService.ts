import { database } from '@config/database'
import { PermissionService } from './PermissionService'
import { RoleService } from './RoleService'

type RolePermissionRequest = {
  roleId: string
  permissions: string[]
}

export class RolePermissionService {
  async save (rolePermission: RolePermissionRequest) {
    const roleModel = database.model('Role')
    const roleService = new RoleService()
    const permissionService = new PermissionService()

    const role: any = await roleService.get({ id: rolePermission.roleId })

    if (!role) {
      return new Error('Role does not exists!')
    }

    if (!rolePermission.permissions || rolePermission.permissions.length === 0) {
      return new Error('Error! You need at least one permission.')
    }

    await role.setPermissions(await permissionService.getByIds(rolePermission.permissions))

    await roleModel.update(role, {
      where: {
        id: rolePermission.roleId
      }
    })
    await role.getPermissions()

    return role
  }
}
