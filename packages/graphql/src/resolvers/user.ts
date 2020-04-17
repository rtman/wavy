import { Models } from '../orm';
import { Arg, Field, InputType, Resolver, Query, Mutation } from 'type-graphql';
import { getManager } from 'typeorm';

@InputType({ description: 'Create a new user' })
class CreateUser implements Partial<Models.User> {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
class UpdateFollowing implements Partial<Models.UserArtistFollowing> {
  @Field()
  userId: string;

  @Field()
  artistId: string;
}

@InputType()
class UpdateFavourites implements Partial<Models.UserSongFavourites> {
  @Field()
  userId: string;

  @Field()
  songId: string;
}

@InputType()
class UpdatePlaylists implements Partial<Models.UserPlaylist> {
  @Field()
  userId: string;

  @Field()
  playlistId: string;
}

@InputType()
class UpdateRecentlyPlayed implements Partial<Models.UserSongRecentlyPlayed> {
  @Field()
  userId: string;

  @Field()
  songId: string;
}

@Resolver(Models.User)
export class UserResolvers {
  @Query(() => Models.User)
  async userById(@Arg('id') id: string): Promise<Models.User | undefined> {
    const user = await getManager()
      .getRepository(Models.User)
      .findOne({
        where: { id },
        join: {
          alias: 'user',
          leftJoinAndSelect: {
            following: 'user.following',
            artists: 'following.artist',
          },
        },
      });

    if (user === undefined) {
      console.log('User not found', id);
      return;
    }
    return user;
  }

  @Mutation(() => Models.User)
  async createUser(
    @Arg('data') params: CreateUser
    // @Ctx() ctx: Context
  ): Promise<Models.User | undefined> {
    const repository = getManager().getRepository(Models.User);
    const user = repository.create(params);

    if (user) {
      await repository.save(user);
      return user;
    }

    console.log('CreateUser failed', params);
    return;
  }

  @Mutation(() => Models.User)
  async updateFollowing(
    @Arg('data') params: UpdateFollowing
    // @Ctx() ctx: Context
  ): Promise<Boolean> {
    try {
      const { userId, artistId } = params;
      const repository = getManager().getRepository(Models.UserArtistFollowing);

      const following = await repository.findOne({
        where: {
          userId,
          artistId,
        },
      });

      if (following) {
        const removed = await repository.remove(following);
        await repository.save(removed);
      } else {
        const created = await repository.create({ userId, artistId });
        await repository.save(created);
      }
      // TODO: Improve return type to show succesful creation or removal
      return true;
    } catch (error) {
      console.log('UpdateFollowing error', error);
      return false;
    }
  }
  @Mutation(() => Models.User)
  async updateFavourites(
    @Arg('data') params: UpdateFavourites
    // @Ctx() ctx: Context
  ): Promise<Boolean> {
    try {
      const { userId, songId } = params;
      const repository = getManager().getRepository(Models.UserSongFavourites);

      const favourited = await repository.findOne({
        where: {
          userId,
          songId,
        },
      });

      if (favourited) {
        const removed = await repository.remove(favourited);
        await repository.save(removed);
      } else {
        const created = await repository.create({ userId, songId });
        await repository.save(created);
      }
      // TODO: Improve return type to show succesful creation or removal
      return true;
    } catch (error) {
      console.log('updateFavourites error', error);
      return false;
    }
  }

  @Mutation(() => Models.User)
  async updatePlaylists(
    @Arg('data') params: UpdatePlaylists
    // @Ctx() ctx: Context
  ): Promise<Boolean> {
    try {
      const { userId, playlistId } = params;
      const repository = getManager().getRepository(Models.UserPlaylist);

      const playlist = await repository.findOne({
        where: {
          userId,
          playlistId,
        },
      });

      if (playlist) {
        const removed = await repository.remove(playlist);
        await repository.save(removed);
      } else {
        const created = await repository.create({ userId, playlistId });
        await repository.save(created);
      }
      // TODO: Improve return type to show succesful creation or removal
      return true;
    } catch (error) {
      console.log('updatePlaylists error', error);
      return false;
    }
  }

  @Mutation(() => Models.User)
  async updateRecentlyPlayed(
    @Arg('data') params: UpdateRecentlyPlayed
    // @Ctx() ctx: Context
  ): Promise<Boolean> {
    try {
      const { userId, songId } = params;
      const repository = getManager().getRepository(
        Models.UserSongRecentlyPlayed
      );

      const recentlyPlayed = await repository.findOne({
        where: {
          userId,
          songId,
        },
      });

      if (recentlyPlayed) {
        const removed = await repository.remove(recentlyPlayed);
        await repository.save(removed);
      } else {
        const created = await repository.create({ userId, songId });
        await repository.save(created);
      }
      // TODO: Improve return type to show succesful creation or removal
      return true;
    } catch (error) {
      console.log('updateRecentlyPlayed error', error);
      return false;
    }
  }

  @Mutation(() => Models.User)
  async deleteUser(@Arg('id') id: string): Promise<Boolean> {
    try {
      const repository = getManager().getRepository(Models.User);
      const userToDelete = await repository.findOne({ where: { id } });
      if (userToDelete) {
        await repository.remove(userToDelete);
        return true;
      } else {
        console.log('deleteUser - User not found');
        return false;
      }
    } catch (error) {
      console.log('deleteUser error', error);
      return false;
    }
  }
}
