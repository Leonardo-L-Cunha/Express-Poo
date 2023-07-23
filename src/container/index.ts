import { container } from 'tsyringe';

import { UserRepository } from '../entities/repository/user.repository';
import { PrismaRepository } from '../entities/repository/prisma/prisma.repository';

container.registerSingleton<UserRepository>('userRepository', PrismaRepository);
