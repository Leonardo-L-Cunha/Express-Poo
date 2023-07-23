import { Request, Response } from 'express';
import { injectable } from 'tsyringe';

import { UserDto } from '../interface/user.inteface';
import { UserService } from '../service/user.service';

@injectable()
export class UserController {
  constructor(private userService: UserService) {}

  async create(req: Request, res: Response) {
    const data: UserDto = req.body;

    const newUser = await this.userService.createUser(data);

    return res.status(201).json(newUser);
  }
}
