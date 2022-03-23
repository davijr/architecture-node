import User from '@model/User'

export class UserService {
  create (user) {
    return User.create(user)
  }
}
