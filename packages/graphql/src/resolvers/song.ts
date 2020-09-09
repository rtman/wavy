import * as admin from 'firebase-admin';
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { getManager, Like } from 'typeorm';

import { Models } from '../orm';

@InputType()
class CreateSongArgs implements Partial<Models.Song> {
  @Field()
  title: string;

  @Field()
  artistId: string;

  @Field()
  profileImageStoragePath: string;

  @Field()
  imageUrl: string;
}

@InputType()
class UpdateSongTitleArgs implements Partial<Models.Song> {
  @Field()
  title: string;

  @Field()
  songId: string;
}

@InputType()
class UpdatePlayCountArgs {
  @Field()
  songId: string;
}

@Resolver(Models.Song)
export class SongResolvers {
  @Query(() => [Models.Song])
  async songs(): Promise<Models.Song[] | undefined> {
    try {
      const songs = await getManager()
        .getRepository(Models.Song)
        .find();

      if (songs) {
        return songs;
      } else {
        console.log('No songs found');
        return;
      }
    } catch (error) {
      console.log('Find songs error', error);
    }
  }
  @Query(() => Models.Song)
  async songById(
    @Arg('songId') songId: string
  ): Promise<Models.Song | undefined> {
    try {
      const song = await getManager()
        .getRepository(Models.Song)
        .findOne({
          where: { id: songId },
          relations: [
            'album',
            'artist',
            'artist.albums',
            'label',
            'supportingArtists',
            'supportingArtists.artist',
            'playlists',
            'playlists.playlist',
            'usersFavourited',
            'usersFavourited.user',
            // 'usersRecentlyPlayed',
            // 'usersRecentlyPlayed.user',
          ],
        });

      if (song) {
        return song;
      }
      console.log('songById - Song not found', songId);

      return song;
    } catch (error) {
      console.log('songById error', error);

      return;
    }
  }

  @Query(() => [Models.Song])
  async songsById(
    @Arg('songIds', () => [String]) songIds: string[]
  ): Promise<Models.Song[] | undefined> {
    try {
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
            // 'usersRecentlyPlayed',
            // 'usersRecentlyPlayed.user',
          ],
        });
      if (songs) {
        return songs;
      } else {
        console.log(`songsById songIds ${songIds} not found`);
        return;
      }
    } catch (error) {
      console.log(`songsById songIds ${songIds} - error`, error);

      return;
    }
  }

  @Query(() => [Models.Song])
  async searchSongs(
    @Arg('query') query: string
  ): Promise<Models.Song[] | undefined> {
    try {
      // const wildCardQuery = `'*${query}*'`;

      const songs = await getManager()
        .createQueryBuilder()
        .select('song')
        .from(Models.Song, 'song')
        .leftJoinAndSelect('song.artist', 'artist')
        .leftJoinAndSelect('song.album', 'album')
        .leftJoinAndSelect('song.supportingArtists', 'supportingArtists')
        .leftJoinAndSelect('supportingArtists.artist', 'supportingArtist')
        .leftJoinAndSelect('song.usersFavourited', 'usersFavourited')
        .leftJoinAndSelect('usersFavourited.user', 'user')
        .leftJoinAndSelect('song.label', 'label')
        // Here is the zdb query and syntax
        .where('song ==> :query', { query })
        .getMany();

      if (songs) {
        return songs;
      }

      console.log('searchSongs query returned nothing - query', query);
      return;
    } catch (error) {
      console.log('searchSongs error', error);

      return;
    }
  }

  @Query(() => [Models.Song])
  async topSongs(): Promise<Models.Song[] | undefined> {
    try {
      const topSongsRef = admin
        .firestore()
        .collectionGroup('userStats')
        .orderBy('plays')
        .limit(50);

      const result = await topSongsRef.get();

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
        console.log('No listening stats were found');

        return;
      }
    } catch (error) {
      console.log('Error topSongs', error);

      return;
    }
  }

  @Query(() => [Models.Song])
  async topSongsByTagId(
    @Arg('tagId', () => String) tagId: string
  ): Promise<Models.Song[] | undefined> {
    try {
      const songs = await getManager()
        .getRepository(Models.Song)
        .find({
          where: {
            tagSearchString: {},
          },
          order: {
            playCount: 'DESC',
          },
          take: 50,
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
        console.log(`No songs for tagId - ${tagId}`);
        return;
      }
    } catch (error) {
      console.log(`topSongsByTagId - tagId ${tagId} - error`, error);

      return;
    }
  }

  @Query(() => [Models.Song])
  async topSongsByTagName(
    @Arg('tagName', () => String) tagName: string
  ): Promise<Models.Song[] | undefined> {
    try {
      const songs = await getManager()
        .getRepository(Models.Song)
        .find({
          where: {
            tagSearchString: Like(`%${tagName}%`),
          },
          order: {
            playCount: 'DESC',
          },
          take: 50,
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
        console.log(`No songs for tagId - ${tagName}`);
        return;
      }
    } catch (error) {
      console.log(`topSongsByTagId - tagId ${tagName} - error`, error);

      return;
    }
  }

  @Mutation(() => Models.Song)
  async createSong(
    @Arg('input') payload: CreateSongArgs
  ): Promise<Models.Song | undefined> {
    try {
      const repository = getManager().getRepository(Models.Song);
      const song = repository.create(payload);

      if (song) {
        await repository.save(song);
        return song;
      }

      console.log('createSong failed', payload);

      return;
    } catch (error) {
      console.log('createSong error', error);

      return;
    }
  }

  @Mutation(() => Boolean)
  async updateSongTitle(
    @Arg('input') payload: UpdateSongTitleArgs
  ): Promise<boolean> {
    try {
      const repository = getManager().getRepository(Models.Song);
      const song = await repository.update(payload.songId, {
        title: payload.title,
      });

      if (song) {
        return true;
      }
      console.log('updateSongTitle failed', payload);

      return false;
    } catch (error) {
      console.log('updateSongTitle error', error);

      return false;
    }
  }

  // TODO: need to consider where this song would be referenced
  // favourites, playlists etc
  @Mutation(() => Boolean)
  async deleteSong(@Arg('songId') songId: string): Promise<boolean> {
    try {
      const repository = getManager().getRepository(Models.Song);
      const songToDelete = await repository.findOne({ where: { id: songId } });
      if (songToDelete) {
        await repository.remove(songToDelete);

        return true;
      } else {
        console.log('deleteSong - User not found');

        return false;
      }
    } catch (error) {
      console.log('deleteSong error', error);

      return false;
    }
  }
  @Mutation(() => Boolean)
  async updateSongPlayCount(
    @Arg('input') payload: UpdatePlayCountArgs
  ): Promise<boolean> {
    try {
      const result = await getManager().transaction(
        async (transactionalEntityManager) => {
          const repository = transactionalEntityManager.getRepository(
            Models.Song
          );

          const songToUpdate = await repository.increment(
            { id: payload.songId },
            'playCount',
            1
          );

          if (songToUpdate) {
            return true;
          } else {
            console.log('updateSongPlayCount - Song not found');

            return false;
          }
        }
      );
      return result;
    } catch (error) {
      console.log('updateSongPlayCount error', error);

      return false;
    }
  }
}
