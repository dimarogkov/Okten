const usersService = require('../../services/users.services');

module.exports = async (req, res, next) => {
    try {   
        const { userId } = req.params;
        const user = await usersService.findUserById(userId);

        if(!user.length) {
            throw new Error('User is no found');
        }
        
        req.user = user;
        
        next();
    } catch (error) {
        res.status(400).json(error.message);
    }
};