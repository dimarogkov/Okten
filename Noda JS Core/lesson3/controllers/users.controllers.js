const usersService = require('../services/users.services');

module.exports = {
    createUser: (req, res) => {
        try {
            const users = usersService.createUser(req.body);

            res.json(users);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    getUsers: (req, res) => {
        try {
            const getUsers = usersService.getUsers();

            res.json(getUsers);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    findUserByNickname: (req, res) => {
        try {
            const { nickname } = req.params;
            const findUserByNickname = usersService.findUserByNickname(nickname);

            if (!findUserByNickname) {
                throw new Error('User not find');
            }

            res.json(findUserByNickname);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    deleteUserByNickname: (req, res) => {
        try {
            const { nickname } = req.params;
            const deleteUserByNickname = userService.deleteUserByNickname(nickname);

            res.json(deleteUserByNickname);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
};