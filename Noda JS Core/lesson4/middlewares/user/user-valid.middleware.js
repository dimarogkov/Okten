module.exports = (req, res, next) => {
    try {
        const {email, password} = req.body;
        
        if (!email || !password) {
            throw new Error('User is not valid');
        }

        next();
    } catch (error) {
        res.status(400).json(error.message);
    }
};