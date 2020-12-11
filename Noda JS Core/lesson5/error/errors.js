const {CREATED, BAD_REQUEST} = require('../configs/error-codes');

module.exports = {
    USER_IS_NO_FOUND: {
        message: 'User is no found',
        code: BAD_REQUEST
    },
    USER_IS_NOT_VALID: {
        message: 'User is not valid',
        code: CREATED
    }
};