import { Router } from 'express';
import { container } from 'tsyringe';
import '../container';

import { UserController } from '../controllers/user.controller';

const userController = container.resolve(UserController);

const userRouter: Router = Router();

userRouter.post('', userController.create.bind(userController));

export default userRouter;
