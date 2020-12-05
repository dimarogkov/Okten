const { Router } = require('express');
const { usersController } = require('../controllers');
const { usersMiddlewares } = require('../middlewares');

const usersRouter = Router();

usersRouter.post('/', usersMiddlewares.isUserValid, usersController.createUser);

usersRouter.delete('/:userId', usersMiddlewares.isUserIdPresent, usersController.deleteUserById);

usersRouter.get('/:userId', usersMiddlewares.isUserIdPresent, usersController.findUserById);
usersRouter.get('/', usersMiddlewares.isUserIdPresent, usersController.getUsers);

module.exports = usersRouter;