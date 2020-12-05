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

    findUserByNickname: async (req, res) => {
        try {
            const { nickname } = req.params;
            const findUserByNickname = await usersService.findUserByNickname(nickname);

            if (!findUserByNickname) {
                throw new Error('User not find');
            }

            res.json(findUserByNickname);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    deleteUserByNickname: async (req, res) => {
        try {
            const { nickname } = req.params;
            const deleteUserByNickname = await userService.deleteUserByNickname(nickname);

            res.json(deleteUserByNickname);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
};