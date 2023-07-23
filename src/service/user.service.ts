import { PrismaRepository } from '../entities/repository/prisma/prisma.repository';
import { UserRepository } from '../entities/repository/user.repository';
import { User } from '../entities/user.entities';
import { UserDto } from '../interface/user.inteface';
import { injectable, inject } from 'tsyringe';

@injectable()
export class UserService {
  constructor(@inject('userRepository') private userRepository: UserRepository) {}

  async createUser(data: UserDto): Promise<User> {
    const user = await this.userRepository.create(data);

    return user;
  }
}
