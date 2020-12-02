const { users } = require('../users/users');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const user = req.body;
           
            if (!user.email || !user.password) {
                throw new Error('User is not valid');
            }

            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    isUserNicknamePresent: (req, res, next) => {
        try {
            const { nickname } = req.body;
            const user = users.find((user) => (user.nickname === nickname));

            if (!user) {
                console.log('There is not user with this nickname');
            }

            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
};