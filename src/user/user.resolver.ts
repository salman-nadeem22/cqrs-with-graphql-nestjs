import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserSchema])
  getUsers(): UserSchema[] {
    return this.userService.getAllUsers();
  }

  @Mutation(() => UserSchema)
  createNewUser(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): UserSchema {
    return this.userService.createNewUser({ name, email, password });
  }
}
