import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModal: Model<User>) {}
  async signup(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModal(createUserDto);
    return createUser.save();
  }

  login() {
    return `This is the Login Route`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
