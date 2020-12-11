const {
    ErrorHandler, errors: {USER_IS_NOT_VALID}
} = require('../../error');

module.exports = (req, res, next) => {
    try {
        const {email, password} = req.body;
        
        if (!email || !password) {
            throw new ErrorHandler(USER_IS_NOT_VALID.message, USER_IS_NOT_VALID.code);
        }

        next();
    } catch (error) {
        next(error);
    }
};