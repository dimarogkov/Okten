const usersService = require('../services/users.services');

module.exports = {
    createUser: async (req, res) => {
        try {
            const users = await usersService.createUser(req.body);

            res.json(users);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    getUsers: async (req, res) => {
        try {
            const getUsers = await usersService.getUsers();

            res.json(getUsers);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    findUserById: async (req, res) => {
        try {
            const [{ user }] = req.user;
            const findUserById = await usersService.findUserById(user.id);

            if (!findUserById) {
                throw new Error('User not find');
            }

            res.json(findUserById);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    deleteUserById: async (req, res) => {
        try {
            const [{ user }] = req.user;
            const deleteUserById = await usersService.deleteUserById(user.id);

            res.json(deleteUserById);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
};