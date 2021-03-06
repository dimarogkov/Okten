module.exports = (req, res, next) => {
    try {
        const user = req.body;
        
        if (!user.email || !user.password) {
            throw new Error('User is not valid');
        }

        next();
    } catch (error) {
        res.status(400).json(error.message);
    }
};