import { Injectable, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SimpleConsoleLogger } from 'typeorm';
import { User } from './user.entity';

import { ListtUserRequestDTO, UserDto, UserUpdateDTO } from './user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  ping(): string {
    return '';
  }

  getUser(id: string): Promise<User> {
    try {
      let user = this.userRepository.findOne(id);

      return user

    } catch (error) {
      return error
    }
  }

  async getUsers(req : ListtUserRequestDTO): Promise<any> {
    try {
      const totalCount = await this.userRepository.count()
      const users = await this.userRepository.createQueryBuilder()
      .offset((req.page -1) * req.limit)
      .limit(req.limit)
      .getMany()

      return {
        totalCount,
        page: req.page,
        limit: req.limit,
        data: users,
      }

    } catch (error) {
      return error
    }
  }

  async updateUser(id : string, req: UserUpdateDTO): Promise<any> {
    try {
      let user = await this.userRepository.findOne(id);
      
      if (user == undefined || user == null) {
        return "Error: id not found";
      }
      
      user.id = id
      user.description = req.description
      user.email = req.email
      user.firstName = req.firstName
      user.lastName = req.lastName

      return await this.userRepository.save(user);
      
    } catch (err) {
      return err
    }
  }

  async deleteUser(id: string): Promise<any> {
    try {
      let res = await this.userRepository.delete(id);

      return res

    } catch (err) {
      return err
    }
  }

  async createUser(req: UserDto): Promise<any> {
    try {
      let user = await this.userRepository.findOne(req.id);
      console.log(user);
      if (user == undefined) {
        user = new User
        user.id = req.id
        user.username = req.username
        user.email = req.email
        user.firstName = req.firstName
        user.lastName = req.lastName
        user.description = req.description
        
        return this.userRepository.save(this.userRepository.create(user))

      } else {
        return "Error: id already existed"
      }
      
    } catch (err) {
      return err
    }
  }
}
