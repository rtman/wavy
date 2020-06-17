import {
  Arg,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  // Args,
} from 'type-graphql';
import { Models } from '../orm';
import { getManager } from 'typeorm';

@InputType({ description: 'Create a new user' })
class CreateUserArgs implements Partial<Models.User> {
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
export class UpdateFollowingArgs
  implements Partial<Models.UserArtistFollowing> {
  @Field()
  userId: string;

  @Field()
  artistId: string;
}

@InputType()
class UpdateFavouritesArgs implements Partial<Models.UserSongFavourites> {
  @Field()
  userId: string;

  @Field()
  songId: string;
}

@InputType()
class UpdatePlaylistsArgs implements Partial<Models.UserPlaylist> {
  @Field()
  userId: string;

  @Field()
  playlistId: string;
}

@InputType()
class UpdateRecentlyPlayedArgs
  implements Partial<Models.UserSongRecentlyPlayed> {
  @Field()
  userId: string;

  @Field()
  songId: string;
}

@Resolver(Models.User)
export class UserResolvers {
  @Query(() => Models.User)
  async userById(@Arg('id') id: string): Promise<Models.User | undefined> {
    try {
      const user = await getManager()
        .getRepository(Models.User)
        .findOne({
          where: { id },
          relations: [
            'favourites',
            'favourites.song',
            'favourites.song.label',
            'favourites.song.album',
            'favourites.song.album.label',
            'favourites.song.artist',
            'favourites.song.artist.labels',
            'favourites.song.supportingArtists',
            'favourites.song.supportingArtists.artist',
            'following',
            'following.artist',
            'following.artist.labels',
            'playlists',
            'playlists.playlist',
          ],
        });

      if (user === undefined) {
        console.log('User not found', id);
        return;
      }
      return user;
    } catch (error) {
      console.log('userById error', error);
      return;
    }
  }

  @Mutation(() => Models.User)
  async createUser(
    @Arg('input') payload: CreateUserArgs
    // @Ctx() ctx: Context
  ): Promise<Models.User | undefined> {
    try {
      const repository = getManager().getRepository(Models.User);
      const user = repository.create(payload);

      if (user) {
        await repository.save(user);
        return user;
      }

      console.log('CreateUser failed', payload);
      return;
    } catch (error) {
      console.log('createUser error', error);
      return;
    }
  }

  @Mutation(() => Boolean)
  async updateFollowing(
    @Arg('input') payload: UpdateFollowingArgs
  ): Promise<boolean> {
    try {
      const { userId, artistId } = payload;
      const repository = getManager().getRepository(Models.UserArtistFollowing);

      const following = await repository.findOne({
        where: {
          userId,
          artistId,
        },
      });

      if (following) {
        await repository.remove(following);
      } else {
        const created = repository.create({ userId, artistId });
        await repository.save(created);
      }
      // TODO: Improve return type to show succesful creation or removal
      return true;
    } catch (error) {
      console.log('UpdateFollowing error', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updateFavourites(
    @Arg('input') payload: UpdateFavouritesArgs
    // @Ctx() ctx: Context
  ): Promise<boolean> {
    try {
      const { userId, songId } = payload;
      const repository = getManager().getRepository(Models.UserSongFavourites);

      const favourited = await repository.findOne({
        where: {
          userId,
          songId,
        },
      });

      if (favourited) {
        await repository.remove(favourited);
      } else {
        const created = repository.create({ userId, songId });
        await repository.save(created);
      }
      // TODO: Improve return type to show succesful creation or removal
      return true;
    } catch (error) {
      console.log('updateFavourites error', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updatePlaylists(
    @Arg('input') payload: UpdatePlaylistsArgs
    // @Ctx() ctx: Context
  ): Promise<boolean> {
    try {
      const { userId, playlistId } = payload;
      const repository = getManager().getRepository(Models.UserPlaylist);

      const playlist = await repository.findOne({
        where: {
          userId,
          playlistId,
        },
      });

      if (playlist) {
        await repository.remove(playlist);
      } else {
        const created = repository.create({ userId, playlistId });
        await repository.save(created);
      }
      // TODO: Improve return type to show succesful creation or removal
      return true;
    } catch (error) {
      console.log('updatePlaylists error', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updateRecentlyPlayed(
    @Arg('input') payload: UpdateRecentlyPlayedArgs
    // @Ctx() ctx: Context
  ): Promise<boolean> {
    try {
      const { userId, songId } = payload;
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
        repository.remove(recentlyPlayed);
      } else {
        const created = repository.create({ userId, songId });
        await repository.save(created);
      }
      // TODO: Improve return type to show succesful creation or removal
      return true;
    } catch (error) {
      console.log('updateRecentlyPlayed error', error);
      return false;
    }
  }

  // TODO: need to consider where this user would be referenced
  // favourites, following, playlists, recentlyplayed etc
  @Mutation(() => Boolean)
  async deleteUser(@Arg('id') id: string): Promise<boolean> {
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
