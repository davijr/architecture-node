// export class User {
//     constructor(
//         id, name, birthday, cpf, genre, active, email, salary
//     ) {
//         this.id = id;
//         this.name = name;
//         this.birthday = birthday;
//         this.cpf = cpf;
//         this.genre = genre;
//         this.active = active;
//         this.email = email;
//         this.salary = salary;
//     }
// }

import * as Sequelize from 'sequelize'
import database from './../config/database.js'
 
const User = database.define('user', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING
    },
    email: Sequelize.STRING
})
 
export default User