const { Router } = require('express');
const { usersController } = require('../controllers');
const { usersMiddlewares } = require('../middlewares');

const usersRouter = Router();

usersRouter.post('/', usersMiddlewares.isUserValid, usersController.createUser);
usersRouter.delete('/:nickname', usersMiddlewares.isUserNicknamePresent, usersController.deleteUserByNickname);
usersRouter.get('/:nickname', usersMiddlewares.isUserNicknamePresent, usersController.findUserByNickname);
usersRouter.get('/', usersController.getUsers);

module.exports = usersRouter;