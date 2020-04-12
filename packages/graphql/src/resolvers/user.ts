import { Models } from '../orm';
import { Arg, Resolver, Query } from 'type-graphql';
// import { User } from 'orm/models';
import { getManager } from 'typeorm';

@Resolver(Models.User)
export class UserResolvers {
  @Query(() => Models.User)
  async userById(@Arg('id') id: string): Promise<Models.User | undefined> {
    const user = await getManager()
      .createQueryBuilder(Models.User, 'user')
      .where('user.id = :id', { id: id })
      .getOne();

    if (user === undefined) {
      console.log('User not found', id);
      return;
    }
    return user;
  }
}
