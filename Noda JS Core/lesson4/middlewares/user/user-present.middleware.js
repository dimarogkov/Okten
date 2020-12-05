module.exports = (req, res, next) => {
    try {
        const { userId } = req.body;
        
        if (userId < 1) {
            throw new Error('There are not users with this ID');
        }

        next();
    } catch (error) {
        res.status(400).json(error.message);
    }
};