import { UserDto } from '../../../interface/user.inteface';
import { User } from '../../user.entities';
import { UserRepository } from '../user.repository';

export class PrismaRepository implements UserRepository {
  create(data: UserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
  listAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
