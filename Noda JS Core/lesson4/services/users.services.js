const db = require('../db').getInstance();

module.exports = {
    getUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll();
    },

    createUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user);
    },

    findUserByNickname: (nickname) => {
        const UserModel = db.getModel('User');

        return UserModel.create(nickname);
    },

    deleteUserByNickname: (nickname) =>  users.filter((user) => user.nickname !== nickname)
};