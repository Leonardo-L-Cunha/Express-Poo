import { UserDto, UserReturn } from '../interface/user.inteface';
import { UserService } from '../service/user.service';
import { UserRepository } from '../entities/repository/user.repository';
import { randomUUID } from 'crypto';

const UserServiceMock = UserService as jest.Mock<UserService>;

describe('Create user', () => {
  let sut: UserService;
  let mockUserRepository: UserRepository;

  const data: UserDto = {
    firstName: 'Leonardo',
    secondName: 'Cunha',
    email: 'leonavidareal@gmail.com',
    password: '123456'
  };

  beforeEach(() => {
    mockUserRepository = {
      create: jest.fn().mockImplementation((userData) => {
        const createdUser: UserReturn = {
          id: randomUUID(),
          createdAt: new Date(),
          ...userData
        };
        return Promise.resolve(createdUser);
      }),
      listAll: jest.fn().mockResolvedValueOnce([
        {
          id: randomUUID(),
          firstName: 'John',
          secondName: 'Doe',
          email: 'john.doe@example.com',
          createdAt: new Date()
        },
        {
          id: randomUUID(),
          firstName: 'Jane',
          secondName: 'Smith',
          email: 'jane.smith@example.com',
          createdAt: new Date()
        }
      ])
    };

    sut = new UserServiceMock(mockUserRepository);
  });

  test('Should be able to create a new user', async () => {
    const response = await sut.createUser(data);
    expect(response).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(Date),
        firstName: data.firstName,
        secondName: data.secondName,
        email: data.email,
        password: data.password
      })
    );
  });

  test('Should be able to list all users', async () => {
    const response = await sut.listUsers();

    expect(mockUserRepository.listAll).toHaveBeenCalledTimes(1);

    expect(response).toEqual([
      {
        id: expect.any(String),
        firstName: 'John',
        secondName: 'Doe',
        email: 'john.doe@example.com',
        createdAt: expect.any(Date)
      },
      {
        id: expect.any(String),
        firstName: 'Jane',
        secondName: 'Smith',
        email: 'jane.smith@example.com',
        createdAt: expect.any(Date)
      }
    ]);
  });
});
