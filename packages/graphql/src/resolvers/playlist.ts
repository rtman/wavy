import { Models } from '../orm';
import { Arg, Field, InputType, Resolver, Query, Mutation } from 'type-graphql';
import { getManager } from 'typeorm';
import { Playlist, UserPlaylist } from 'orm/models';

@InputType()
class CreatePlaylist implements Partial<Models.Playlist> {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  image: string;
}

@InputType()
class UpdatePlaylistInfo implements Partial<Models.Playlist> {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  image: string;
}

@InputType()
class AddPlaylistSongs implements Partial<Models.Playlist> {
  @Field()
  id: string;

  @Field(() => [String])
  songIds: string[];
}

@InputType()
class RemovePlaylistSongs implements Partial<Models.Playlist> {
  @Field()
  id: string;

  @Field(() => [String])
  songIds: string[];
}

@Resolver(Models.Playlist)
export class PlaylistResolvers {
  @Query(() => [Models.Playlist])
  async playlists(): Promise<Models.Playlist[] | undefined> {
    try {
      const playlists = await getManager()
        .getRepository(Models.Playlist)
        .find();

      if (playlists) {
        return playlists;
      } else {
        console.log('No playlists found');

        return;
      }
    } catch (error) {
      console.log('Find playlists error', error);
    }
  }

  @Query(() => Models.Playlist)
  async playlistById(
    @Arg('id') id: string
  ): Promise<Models.Playlist | undefined> {
    try {
      const playlist = await getManager()
        .getRepository(Models.Playlist)
        .findOne({
          where: { id },
          relations: [
            'songs',
            'songs.song',
            'songs.song.artist',
            'songs.song.album',
            'songs.song.supportingArtists',
            'songs.song.supportingArtists.artist',
            'users',
            'users.user',
          ],
        });

      if (playlist) {
        return playlist;
      }

      console.log('Playlist not found', id);

      return;
    } catch (error) {
      console.log('playlistById error', error);

      return;
    }
  }

  @Query(() => [Models.Playlist])
  async playlistsById(
    @Arg('ids', () => [String]) ids: string[]
  ): Promise<Models.Playlist[] | undefined> {
    try {
      const playlists = await getManager()
        .getRepository(Models.Playlist)
        .find({
          where: {
            id: ids,
          },
        });

      if (playlists) {
        return playlists;
      } else {
        return;
      }
    } catch (error) {
      console.log('playlistsById error', error);

      return;
    }
  }

  @Query(() => [Models.Playlist])
  async playlistsByUserId(
    @Arg('userId') userId: string
  ): Promise<Models.Playlist[] | undefined> {
    try {
      const userPlaylists = await getManager()
        .getRepository(Models.UserPlaylist)
        .find({
          where: {
            userId,
          },
        });

      if (!userPlaylists) {
        console.log('playlistsByUserId no playlists found - userId', userId);
        return;
      }

      console.log('playlistsByUserId userPlaylists', userPlaylists);

      const playlistIds = userPlaylists.map(
        (userPlaylist: UserPlaylist) => userPlaylist.playlistId
      );

      const playlists = await getManager()
        .getRepository(Models.Playlist)
        .findByIds(playlistIds, {
          relations: [
            'users',
            'users.user',
            'songs',
            'songs.song',
            'songs.song.artist',
            'songs.song.album',
          ],
        });

      if (playlists) {
        return playlists;
      } else {
        return;
      }
    } catch (error) {
      console.log('playlistsById error', error);

      return;
    }
  }

  @Query(() => [Models.Playlist])
  async searchPlaylists(
    @Arg('query') query: string
  ): Promise<Models.Playlist[] | undefined> {
    try {
      const playlists = await getManager()
        .createQueryBuilder()
        .select('playlist')
        .from(Models.Playlist, 'playlist')
        .leftJoinAndSelect('playlist.users', 'users')
        .leftJoinAndSelect('users.user', 'user')
        // Here is the zdb query and syntax
        .where('playlist ==> :query', { query })
        .getMany();

      if (playlists) {
        return playlists;
      }

      console.log('searchPlaylists query returned nothing - query', query);
      return;
    } catch (error) {
      console.log('searchPlaylists error', error);

      return;
    }
  }

  @Mutation(() => Models.Playlist)
  async createPlaylist(
    @Arg('data') payload: CreatePlaylist
  ): Promise<Models.Playlist | undefined> {
    try {
      const repository = getManager().getRepository(Models.Playlist);
      const playlist = repository.create(payload);

      if (playlist) {
        await repository.save(playlist);
        return playlist;
      }

      console.log('CreateUser failed', payload);

      return;
    } catch (error) {
      console.log('createPlaylist error', error);

      return;
    }
  }

  @Mutation(() => Models.Playlist)
  async updatePlaylistInfo(
    @Arg('data') payload: UpdatePlaylistInfo
  ): Promise<Playlist | undefined> {
    try {
      const repository = getManager().getRepository(Models.Playlist);
      const playlist = await repository.update(payload.id, payload);

      if (playlist) {
        return;
      }

      console.log('updatePlaylistInfo - playlist not found', payload);

      return;
    } catch (error) {
      console.log('updatePlaylistInfo error', error);

      return;
    }
  }

  @Mutation(() => Models.Playlist)
  async addPlaylistSongs(
    @Arg('data') payload: AddPlaylistSongs
  ): Promise<boolean> {
    try {
      const { id, songIds } = payload;
      const repository = getManager().getRepository(Models.SongPlaylist);

      const addedSongs = songIds.map((songId) =>
        repository.create({ playlistId: id, songId })
      );

      if (addedSongs) {
        await repository.save(addedSongs);

        return true;
      }
      console.log('addPlaylistSongs failed', payload);

      return false;
    } catch (error) {
      console.log('addPlaylistSongs error', error);

      return false;
    }
  }

  @Mutation(() => Models.Playlist)
  async removePlaylistSongs(
    @Arg('data') payload: RemovePlaylistSongs
  ): Promise<boolean> {
    try {
      const { id, songIds } = payload;
      const repository = getManager().getRepository(Models.SongPlaylist);

      const instances = songIds.map((songId) => {
        return { playlistId: id, songId };
      });
      const removedSongs = await repository.find({ where: instances });

      if (removedSongs) {
        await repository.remove(removedSongs);
        return true;
      }

      console.log('removePlaylistSongs - no songs found for playlist', payload);

      return false;
    } catch (error) {
      console.log('addPlaylistSongs error', error);

      return false;
    }
  }

  @Mutation(() => Models.Playlist)
  async deletePlaylist(@Arg('id') id: string): Promise<boolean> {
    try {
      const repository = getManager().getRepository(Models.Playlist);
      const playlistToDelete = await repository.findOne({ where: { id } });
      if (playlistToDelete) {
        await repository.remove(playlistToDelete);

        return true;
      } else {
        console.log('deletePlaylist - User not found');

        return false;
      }
    } catch (error) {
      console.log('deletePlaylist error', error);

      return false;
    }
  }
}
