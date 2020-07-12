import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { getManager } from 'typeorm';

import { Models } from '../orm';

@InputType()
class NewSongArgs implements Partial<Models.Song> {
  @Field()
  title: string;
}

@InputType()
class CreateAlbumSongArgs {
  @Field(() => [NewSongArgs])
  songsToAdd: NewSongArgs[];
}

@InputType({ description: 'Create a new album' })
class CreateAlbumArgs implements Partial<Models.Album & CreateAlbumSongArgs> {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [NewSongArgs])
  songsToAdd: NewSongArgs[];

  @Field()
  artistId: string;

  @Field()
  imageRef: string;

  @Field()
  imageUrl: string;
}

@Resolver(Models.Album)
export class AlbumResolvers {
  @Query(() => [Models.Album])
  async albums(): Promise<Models.Album[] | undefined> {
    try {
      const albums = await getManager()
        .getRepository(Models.Album)
        .find();

      if (albums !== undefined) {
        return albums;
      } else {
        console.log('No albums found');
        return;
      }
    } catch (error) {
      console.log('Find albums error', error);
      return;
    }
  }
  @Query(() => Models.Album)
  async albumById(@Arg('id') id: string): Promise<Models.Album | undefined> {
    try {
      const album = await getManager()
        .getRepository(Models.Album)
        .findOne({
          where: { id },
          relations: [
            'artist',
            'artist.albums',
            'label',
            'songs',
            'songs.label',
            'songs.artist',
            'songs.supportingArtists',
            'songs.supportingArtists.artist',
            'songs.usersRecentlyPlayed',
            'songs.usersRecentlyPlayed.user',
            'songs.usersFavourited',
            'songs.usersFavourited.user',
          ],
        });

      if (album === undefined) {
        console.log('Album not found', id);
        return;
      }
      return album;
    } catch (error) {
      console.log('albumById error', error);
      return;
    }
  }

  @Query(() => [Models.Album])
  async searchAlbums(
    @Arg('query') query: string
  ): Promise<Models.Album[] | undefined> {
    try {
      const albums = await getManager()
        .createQueryBuilder()
        .select('album')
        .from(Models.Album, 'album')
        .leftJoinAndSelect('album.artist', 'artist')
        .leftJoinAndSelect('album.label', 'label')
        // Here is the zdb query and syntax
        .where('album ==> :query', { query })
        .getMany();

      if (albums) {
        return albums;
      }

      console.log('searchAlbums query returned nothing - query', query);
      return;
    } catch (error) {
      console.log('searchAlbums error', error);

      return;
    }
  }

  @Mutation(() => Models.Album)
  async createAlbum(
    @Arg('input') payload: CreateAlbumArgs
  ): Promise<Models.Album | undefined> {
    try {
      const { songsToAdd, ...albumPayload } = payload;
      const {
        id,
        title,
        description,
        artistId,
        imageRef,
        imageUrl,
      } = albumPayload;

      if (
        (songsToAdd.length > 0,
        id,
        title,
        description,
        songsToAdd,
        artistId,
        imageRef,
        imageUrl)
      ) {
        const albumRepository = getManager().getRepository(Models.Album);
        const songRepository = getManager().getRepository(Models.Song);

        const album = albumRepository.create(albumPayload);
        await songRepository.insert(songsToAdd);

        if (album) {
          await albumRepository.save(album);

          return album;
        }
        console.log('CreateAlbum failed', payload);

        return;
      } else {
        console.log('CreateAlbum failed: not all input params valid');

        return;
      }
    } catch (error) {
      console.log('createAlbum error', error);
      return;
    }
  }

  //TODO: If an album is deleted, the corresponding songs must also
  // be deleted, and anything linked to those songs (favourites etc)
  @Mutation(() => Boolean)
  async deleteAlbum(@Arg('id') id: string): Promise<boolean> {
    try {
      const repository = getManager().getRepository(Models.Album);
      const albumToDelete = await repository.findOne({ where: { id } });
      if (albumToDelete) {
        await repository.remove(albumToDelete);
        return true;
      } else {
        console.log('deleteAlbum - User not found');
        return false;
      }
    } catch (error) {
      console.log('deleteAlbum error', error);
      return false;
    }
  }
}
