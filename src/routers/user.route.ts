import { Router } from 'express';
import { container } from 'tsyringe';
import '../container';

import { UserController } from '../controllers/user.controller';
import DataValidator from '../middlewares/isDatavalid.middleware';
import { UserSchemaRequest } from '../schema/user.schema';

const userController = container.resolve(UserController);
const dataValidate = new DataValidator(UserSchemaRequest);

const userRouter: Router = Router();

userRouter.post('', dataValidate.validate.bind(dataValidate), userController.create.bind(userController));
userRouter.get('', userController.list.bind(userController));

export default userRouter;
