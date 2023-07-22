import { UserDto } from '../../interface/user.inteface';
import { User } from '../user.entities';

export abstract class UserRepository {
  abstract create(data: UserDto): Promise<User>;
  abstract listAll(): Promise<User[]>;
}
