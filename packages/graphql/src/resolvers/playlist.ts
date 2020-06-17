import {
  Arg,
  Field,
  ID,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { getManager } from 'typeorm';
//TODO: figure out why importing the dir without ../ doesnt work, tsconfig issue
import { Models } from '../orm';

@InputType()
class CreatePlaylistArgs implements Partial<Models.Playlist> {
  @Field()
  userId: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  imageRef?: string;

  @Field({ nullable: true })
  imageUrl: string;
}

@InputType()
class UpdatePlaylistInfoArgs implements Partial<Models.Playlist> {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  imageRef?: string;

  @Field({ nullable: true })
  imageUrl: string;
}

@InputType()
class AddPlaylistSongsArgs implements Partial<Models.Playlist> {
  @Field(() => ID)
  id: string;

  @Field(() => [ID])
  songIds: string[];
}

@InputType()
class RemovePlaylistSongsArgs implements Partial<Models.Playlist> {
  @Field(() => ID)
  id: string;

  @Field(() => [ID])
  songIds: string[];
}

@InputType()
class DeletePlaylistArgs implements Partial<Models.UserPlaylist> {
  @Field()
  userId: string;

  @Field(() => ID)
  playlistId: string;
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
            'songs.song.album.label',
            'songs.song.label',
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
        (userPlaylist: Models.UserPlaylist) => userPlaylist.playlistId
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
            'songs.song.album.label',
            'songs.song.label',
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
    @Arg('input') payload: CreatePlaylistArgs
  ): Promise<Models.Playlist | undefined> {
    try {
      const playlistRepo = getManager().getRepository(Models.Playlist);
      const playlist = playlistRepo.create(payload);

      if (!playlist) {
        console.log('CreatePlaylist playlist failed', payload);
      }

      await playlistRepo.save(playlist);

      const userPlaylistRepo = getManager().getRepository(Models.UserPlaylist);
      const userPlaylistPayload = {
        userId: payload.userId,
        playlistId: playlist.id,
      };
      const userPlaylist = userPlaylistRepo.create(userPlaylistPayload);

      if (!userPlaylist) {
        console.log(
          'CreatePlaylist - userPlaylist failed',
          userPlaylistPayload
        );
      }

      await userPlaylistRepo.save(userPlaylist);

      return playlist;
    } catch (error) {
      console.log('createPlaylist error', error);

      return;
    }
  }

  @Mutation(() => Models.Playlist)
  async updatePlaylistInfo(
    @Arg('input') payload: UpdatePlaylistInfoArgs
  ): Promise<Models.Playlist | undefined> {
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

  @Mutation(() => Boolean)
  async addPlaylistSongs(
    @Arg('input') payload: AddPlaylistSongsArgs
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

  @Mutation(() => Boolean)
  async removePlaylistSongs(
    @Arg('input') payload: RemovePlaylistSongsArgs
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

  //TODO: If a playlist has multiple users and its deleted by one user, playlist + userPlaylist entries are removed but it still has userPlaylist entries for the other users. Fix.
  @Mutation(() => Boolean)
  async deletePlaylist(
    @Arg('input') payload: DeletePlaylistArgs
  ): Promise<boolean> {
    try {
      const playlistRepo = getManager().getRepository(Models.Playlist);
      const playlistToDelete = await playlistRepo.findOne({
        where: { id: payload.playlistId },
      });

      if (playlistToDelete) {
        await playlistRepo.remove(playlistToDelete);
      } else {
        console.log('deletePlaylist - playlist not found', payload);

        return false;
      }

      const userPlaylistRepo = getManager().getRepository(Models.UserPlaylist);
      const userPlaylistToDelete = await userPlaylistRepo.findOne({
        where: payload,
      });

      if (userPlaylistToDelete) {
        await userPlaylistRepo.remove(userPlaylistToDelete);

        return true;
      } else {
        console.log('deletePlaylist - userPlaylist not found', payload);

        return false;
      }
    } catch (error) {
      console.log('deletePlaylist error', error);

      return false;
    }
  }
}
