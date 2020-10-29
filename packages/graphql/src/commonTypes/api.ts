import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Base {
  @Field()
  ok: boolean;
}

@ObjectType()
export class Error {
  @Field()
  message: string;
}

@ObjectType()
export class Fail extends Base {
  @Field()
  error: Error;
}
