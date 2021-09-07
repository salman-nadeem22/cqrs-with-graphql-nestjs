import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSchema {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;
}
