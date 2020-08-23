import * as admin from 'firebase-admin';
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { getManager } from 'typeorm';

import { Context } from '../main';
import { Models } from '../orm';
import { PlayHistoryUserDoc } from './listeningStats';

@InputType({ description: 'Create a new user' })
class CreateUserArgs implements Partial<Models.User> {
  @Field()
  userId: string;

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

@Resolver(Models.User)
export class UserResolvers {
  @Query(() => Boolean)
  async userIdExists(@Arg('userId') userId: string): Promise<boolean> {
    try {
      const user = await getManager()
        .getRepository(Models.User)
        .findOne({
          where: { id: userId },
        });

      if (user === undefined) {
        console.log('userId does not exist', userId);
        return false;
      }
      return true;
    } catch (error) {
      console.log('userIdExists error', error);
      return false;
    }
  }

  @Query(() => Boolean)
  async users(): Promise<Models.User[] | undefined> {
    try {
      const users = await getManager()
        .getRepository(Models.User)
        .find();

      if (users === undefined) {
        console.log('users does not exist');
        return;
      }
      return users;
    } catch (error) {
      console.log('users error', error);
      return;
    }
  }

  @Query(() => Models.User)
  async userById(
    @Arg('userId') userId: string,
    @Ctx() ctx: Context
  ): Promise<Models.User | undefined> {
    try {
      console.log('*debug* ctx.req.ip', ctx.req.ip);

      const user = await getManager()
        .getRepository(Models.User)
        .findOne({
          where: { id: userId },
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
            'following.artist.songs',
            'following.artist.labels',
            'playlists',
            'playlists.playlist',
            'playlists.playlist.songs',
            'playlists.playlist.songs.song',
            'artists',
            'artists.artist',
            'labels',
            'labels.label',
          ],
        });

      if (user === undefined) {
        console.log('User not found', userId);
        return;
      }
      return user;
    } catch (error) {
      console.log('userById error', error);
      return;
    }
  }

  @Query(() => [Models.Song])
  async playHistory(
    @Arg('userId') userId: string
  ): Promise<Models.Song[] | undefined> {
    try {
      const userListeningStatsRef = admin
        .firestore()
        .collection('playHistory')
        .doc(userId);

      const result = await userListeningStatsRef.get();

      if (result.exists) {
        const playHistoryUserDoc: PlayHistoryUserDoc = result.data() ?? {};
        const { songs } = playHistoryUserDoc;

        if (songs) {
          const songIds = songs.map((entry) => entry.songId);

          const songsData = await getManager()
            .getRepository(Models.Song)
            .findByIds(songIds, {
              relations: [
                'album',
                'album.label',
                'artist',
                'artist.albums',
                'label',
                'supportingArtists',
                'supportingArtists.artist',
                'playlists',
                'playlists.playlist',
                'usersFavourited',
                'usersFavourited.user',
              ],
            });

          if (songsData) {
            return songsData;
          } else {
            return;
          }
        } else {
          console.log(`playHistory is falsy for this user ${userId}`);

          return;
        }
      } else {
        console.log(`No playHistory document exists for this user ${userId}`);

        return;
      }
    } catch (error) {
      console.log(`Error playHistory ${userId}`, error);

      return;
    }
  }

  @Query(() => [Models.Song])
  async topSongs(
    @Arg('userId') userId: string
  ): Promise<Models.Song[] | undefined> {
    try {
      const topSongsref = admin
        .firestore()
        .collectionGroup('userStats')
        .where('userId', '==', userId)
        .orderBy('plays', 'desc')
        .limit(50);

      const result = await topSongsref.get();

      if (!result.empty) {
        const songIds = result.docs.map((snapshot) => {
          // We know what the firestore data shape is so this is ok
          const data = (snapshot.data() as unknown) as Models.ListeningStats;
          return data.songId;
        });

        const songs = await getManager()
          .getRepository(Models.Song)
          .findByIds(songIds, {
            relations: [
              'album',
              'album.label',
              'artist',
              'artist.albums',
              'label',
              'supportingArtists',
              'supportingArtists.artist',
              'playlists',
              'playlists.playlist',
              'usersFavourited',
              'usersFavourited.user',
            ],
          });

        if (songs) {
          return songs;
        } else {
          return;
        }
      } else {
        console.log(`No listening stats exist for this user ${userId}`);

        return;
      }
    } catch (error) {
      console.log(`Error topSongs ${userId}`, error);

      return;
    }
  }

  @Mutation(() => Models.User)
  async createUser(
    @Arg('input') payload: CreateUserArgs
  ): Promise<Models.User | undefined> {
    try {
      const { userId, ...rest } = payload;

      const repository = getManager().getRepository(Models.User);
      const user = repository.create({ id: userId, ...rest });

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
      const userArtistFollowingRepository = getManager().getRepository(
        Models.UserArtistFollowing
      );

      const following = await userArtistFollowingRepository.findOne({
        where: {
          userId,
          artistId,
        },
      });

      if (following) {
        await userArtistFollowingRepository.remove(following);
      } else {
        const created = userArtistFollowingRepository.create({
          userId,
          artistId,
        });
        await userArtistFollowingRepository.save(created);
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
      const userSongFavouritesRepository = getManager().getRepository(
        Models.UserSongFavourites
      );

      const favourited = await userSongFavouritesRepository.findOne({
        where: {
          userId,
          songId,
        },
      });

      if (favourited) {
        await userSongFavouritesRepository.remove(favourited);
      } else {
        const created = userSongFavouritesRepository.create({ userId, songId });
        await userSongFavouritesRepository.save(created);
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
      const userPlaylistRepository = getManager().getRepository(
        Models.UserPlaylist
      );

      const playlist = await userPlaylistRepository.findOne({
        where: {
          userId,
          playlistId,
        },
      });

      if (playlist) {
        await userPlaylistRepository.remove(playlist);
      } else {
        const created = userPlaylistRepository.create({ userId, playlistId });
        await userPlaylistRepository.save(created);
      }
      // TODO: Improve return type to show succesful creation or removal
      return true;
    } catch (error) {
      console.log('updatePlaylists error', error);
      return false;
    }
  }

  // TODO: need to consider where this user would be referenced
  // favourites, following, playlists, playHistory etc
  @Mutation(() => Boolean)
  async deleteUser(@Arg('userId') userId: string): Promise<boolean> {
    try {
      const repository = getManager().getRepository(Models.User);
      const userToDelete = await repository.findOne({ where: { id: userId } });
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
