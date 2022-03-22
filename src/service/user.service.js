import User from './../model/User.js'

export class UserService {

    create(user) {
        return User.create(user);
    }
}