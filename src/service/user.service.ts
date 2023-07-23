import { PrismaRepository } from '../entities/repository/prisma/prisma.repository';
import { UserRepository } from '../entities/repository/user.repository';
import { UserDto, UserReturn } from '../interface/user.inteface';
import { injectable, inject } from 'tsyringe';
import { UserSchemaReturn } from '../schema/user.schema';

@injectable()
export class UserService {
  constructor(@inject('userRepository') private userRepository: UserRepository) {}

  async createUser(data: UserDto): Promise<UserReturn> {
    const user = await this.userRepository.create(data);

    const userParse = UserSchemaReturn.parse(user);

    return userParse;
  }

  async listUsers(): Promise<UserReturn[]> {
    const users = await this.userRepository.listAll();

    const usersParse = UserSchemaReturn.array().parse(users);

    return usersParse;
  }
}
