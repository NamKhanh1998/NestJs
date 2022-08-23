import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { retry } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) readonly userRepo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { password } = createUserDto;

    if (await this.userRepo.findOneBy({ email: createUserDto.email })) {
      throw new HttpException(
        'This email already exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPsw = await bcrypt.hash(password, salt);

    const user = this.userRepo.create({
      ...createUserDto,
      password: hashedPsw,
    });
    return await this.userRepo.save(user);
  }

  async findAll() {
    const users = await this.userRepo.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOneBy({ id });

    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepo.findOneBy({ email });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (await this.userRepo.findOneBy({ email: updateUserDto.email })) {
      throw new HttpException(
        'This email already exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.userRepo.update(id, updateUserDto);
  }

  async remove(id: number) {
    const user = await this.userRepo.findOneBy({ id });
    return await this.userRepo.remove(user);
  }
}
