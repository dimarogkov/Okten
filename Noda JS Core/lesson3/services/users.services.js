let { users } = require('../users/users');

module.exports = {
    getUsers: () => users,

    createUser: (user) => {
        users.push(user);
        return users;
    },

    findUserByNickname: (nickname) => {
        const user = users.find((user) => user.nickname === nickname);
        return user;
    },

    deleteUserByNickname: (nickname) => {
        const user = users.filter((user) => user.nickname !== nickname);
        return user;
    },
};