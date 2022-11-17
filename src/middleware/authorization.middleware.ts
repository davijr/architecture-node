import { RoleService } from '@services/RoleService'
import { UserService } from '@services/UserService'
import { NextFunction, Request, Response } from 'express'

const userService = new UserService()
const roleService = new RoleService()

export function can (permissionsRoutes: string[]) {
  return async (req: Request | any, res: Response, next: NextFunction) => {
    const { userId } = req
    permissionsRoutes = verifyCatalogPermissions(req, permissionsRoutes)
    let isAdmin = false
    const user: any = await userService.get({ id: userId })
    if (!user) {
      return res.status(400).json('User does not exists.')
    }
    // get permissions for each role
    let rolePermissions: any = []
    if (user.roles.length > 0) {
      const roles = await roleService.getByIds(user.roles.map((role: any) => role.id))
      roles.forEach((role: any) => {
        rolePermissions = rolePermissions.concat(role.permissions)
      })
      isAdmin = roles.map((role: any) => role.name).some((roleName: any) => roleName === 'admin')
    }
    const permissionsExists = user.permissions.concat(rolePermissions)
      .map((permission: any) => permission.name)
      .some((permission: any) => permissionsRoutes.includes(permission))
    // set all permissions for admin
    isAdmin = isAdmin || user.username === 'admin'

    if (!permissionsExists && !isAdmin) {
      return res.status(401).end()
    }

    return next()
  }

  function verifyCatalogPermissions (req: any, permissionsRoutes: string[]): string[] {
    const modelName = req.params.model
    if (permissionsRoutes.length === 0 && modelName) {
      const aux = modelName.replace(/([a-z])([A-Z])/g, '$1 $2')
      const groupName = aux.split(' ')[0]
      permissionsRoutes.push(groupName)
    }
    return permissionsRoutes
  }
}

export function is (rolesRoutes: string[]) {
  return async (req: Request | any, res: Response, next: NextFunction) => {
    const { userId } = req
    let isAdmin = false

    const user: any = await userService.get({ id: userId })
    if (!user) {
      return res.status(400).json('User does not exists.')
    }

    const rolesExists = user.roles
      .map((role: any) => role.name)
      .some((role: any) => rolesRoutes.includes(role))

    isAdmin = user.roles.map((role: any) => role.name).some((roleName: any) => roleName === 'admin')
    isAdmin = isAdmin || user.username === 'admin'

    if (!rolesExists && !isAdmin) {
      return res.status(401).end()
    }

    return next()
  }
}
