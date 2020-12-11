const usersService = require('../../services/users.services');
const {
    ErrorHandler, errors: {USER_IS_NO_FOUND}
} = require('../../error');

module.exports = async (req, res, next) => {
    try {   
        const { userId } = req.params;
        const user = await usersService.findUserById(userId);

        if(!user.length) {
            throw new ErrorHandler(USER_IS_NO_FOUND.message, USER_IS_NO_FOUND.code);
        }
        
        req.user = user;
        
        next();
    } catch (error) {
        next(error);
    }
};