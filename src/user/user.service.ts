import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // create user
  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.userRepository.save(user);
  }

  // get all users
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // find specific user
  findOne(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username });
  }

  // update user
  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.email = updateUserDto.email;
    user.id = id;
    return this.userRepository.save(user);
  }

  // delete user
  remove(id: number) {
    return this.userRepository.delete(id);
  }

  //maximum id 
  maximum(id : any) {
    return this.userRepository.maximum(id);
}
}
