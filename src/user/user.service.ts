import { Injectable } from '@nestjs/common';
import { UserSchema } from './user.schema';

@Injectable()
export class UserService {
  private users: UserSchema[] = [];

  getAllUsers(): UserSchema[] {
    return this.users;
  }

  createNewUser(data: UserSchema): UserSchema {
    this.users.push(data);
    return this.users[this.users.length - 1];
  }
}
