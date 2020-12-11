const usersService = require('../services/users.services');
const { CREATED, OK, NO_CONTENT } = require('../configs/error-codes');

module.exports = {
    createUser: async (req, res) => {
        try {
            const users = await usersService.createUser(req.body);

            res.status(CREATED).json(users);
        } catch (error) {
            next(error);
        }
    },

    getUsers: async (req, res) => {
        try {
            const getUsers = await usersService.getUsers();

            res.status(OK).json(getUsers);
        } catch (error) {
            next(error);
        }
    },

    findUserById: async (req, res) => {
        try {
            const [{ user }] = req.user;
            const findUserById = await usersService.findUserById(user.id);

            if (!findUserById) {
                throw new Error('User not find');
            }

            res.status(OK).json(findUserById);
        } catch (error) {
            next(error);
        }
    },

    deleteUserById: async (req, res) => {
        try {
            const [{ user }] = req.user;
            await usersService.deleteUserById(user.id);

            res.status(NO_CONTENT).json('User deleted successfully');
        } catch (error) {
            next(error);
        }
    },
};