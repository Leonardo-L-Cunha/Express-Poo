import { Request, Response } from 'express';

class UserController {
  async create(req: Request, res: Response) {
    return res.status(201).json('tudo certo');
  }
}

export const userController = new UserController();
