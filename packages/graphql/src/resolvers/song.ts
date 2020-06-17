import { Models } from '../orm';
import { Arg, Field, InputType, Resolver, Query, Mutation } from 'type-graphql';
import { getManager } from 'typeorm';

@InputType()
class CreateSongArgs implements Partial<Models.Song> {
  @Field()
  title: string;

  @Field()
  artistId: string;

  @Field()
  imageRef: string;

  @Field()
  imageUrl: string;
}

@InputType()
class UpdateSongTitleArgs implements Partial<Models.Song> {
  @Field()
  title: string;

  @Field()
  id: string;
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
  async songById(@Arg('id') id: string): Promise<Models.Song | undefined> {
    try {
      const song = await getManager()
        .getRepository(Models.Song)
        .findOne({
          where: { id },
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
            'usersRecentlyPlayed',
            'usersRecentlyPlayed.user',
          ],
        });

      if (song) {
        return song;
      }
      console.log('songById - Song not found', id);

      return song;
    } catch (error) {
      console.log('songById error', error);

      return;
    }
  }

  @Query(() => [Models.Song])
  async songsById(
    @Arg('ids', () => [String]) ids: string[]
  ): Promise<Models.Song[] | undefined> {
    try {
      const songs = await getManager()
        .getRepository(Models.Song)
        .findByIds(ids, {
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
            'usersRecentlyPlayed',
            'usersRecentlyPlayed.user',
          ],
        });
      if (songs) {
        return songs;
      } else {
        return;
      }
    } catch (error) {
      console.log('songsById error', error);

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
      const song = await repository.update(payload.id, {
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
  async deleteSong(@Arg('id') id: string): Promise<boolean> {
    try {
      const repository = getManager().getRepository(Models.Song);
      const songToDelete = await repository.findOne({ where: { id } });
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
}
