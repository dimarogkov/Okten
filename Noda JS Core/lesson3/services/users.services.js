const { users } = require('../users/users');

module.exports = {
    getUsers: () => users,

    createUser: (user) =>users.push(user),

    findUserByNickname: (nickname) => users.find((user) => user.nickname === nickname),

    deleteUserByNickname: (nickname) =>  users.filter((user) => user.nickname !== nickname)
};