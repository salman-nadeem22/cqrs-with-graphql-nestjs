import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CarSchema {
  @Field(() => Int)
  carNumber: number;

  @Field({ nullable: true })
  name?: string;
}
