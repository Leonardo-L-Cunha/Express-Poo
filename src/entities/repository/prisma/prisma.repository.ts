import { UserDto } from '../../../interface/user.inteface';
import { User } from '../../user.entities';
import { UserRepository } from '../user.repository';
import { prisma } from '../../../database/prismaClient';
import { hashSync } from 'bcryptjs';

export class PrismaRepository implements UserRepository {
  async create(data: UserDto): Promise<User> {
    const user = new User();

    Object.assign(user, {
      ...data,
      password: hashSync(data.password, 10)
    });

    const newUser = await prisma.user.create({
      data: {
        ...user
      }
    });
    return newUser;
  }
  listAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
