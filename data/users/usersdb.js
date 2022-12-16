const fs = require('fs');
const User = require('../../model/user');

class UsersDB {
    constructor(){
        this.users = [];
    }

    find(email) {
        return this.users.find(user => user.email === email);
    }

}

const readData = fs.readFileSync('./data/users/users.json', 'utf8');

const jsonData = JSON.parse(readData);

let usersDB = new UsersDB();

usersDB.users = jsonData.users.map(userData => {
    return new User(userData.email, userData.password);
});

module.exports = usersDB;