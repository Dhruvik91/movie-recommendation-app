import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // create user
  async create(createUserDto: CreateUserDto): Promise<any> {
    const oldUser: User = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (oldUser) {
      return {
        message: 'User Already Exists!!!'
      };
    }
    const user: User = new User();
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return await this.userRepository.save(user);
  }

  // get all users
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // find specific user
  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOneBy({ id: id });
  }

  async findOneUser(username: string): Promise<User> {
    return await this.userRepository.findOneBy({ username });
  }

  // update user
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.email = updateUserDto.email;
    user.id = id;
    return await this.userRepository.save(user);
  }

  // delete user
  async remove(id: string): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
