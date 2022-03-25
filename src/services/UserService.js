import User from '@model/User'

export class UserService {
  get (user) {
    if (!user) { return User.findAll() }
    return User.create(user)
  }

  create (user) {
    return User.create(user)
  }
}
