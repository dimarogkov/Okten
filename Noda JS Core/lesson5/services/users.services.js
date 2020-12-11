const db = require('../db').getInstance();

module.exports = {
    getUsers: () => {
        const UserModel = db.getModel('User');
        console.log(UserModel);

        return UserModel.findAll();
    },

    createUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user);
    },

    findUserById: (userId) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return CarModel.findAll({
            where: {
                id: userId
            },
            include: [{ model: UserModel, as: 'user' }]
        });
    },

    deleteUserById: (userId) => {
        const UserModel = db.getModel('User');

        return UserModel.destroy({
            where: {
                id: userId
            }
        });
    },
};