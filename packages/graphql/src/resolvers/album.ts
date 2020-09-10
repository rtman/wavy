import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { getManager } from 'typeorm';

import { Models } from '../orm';
import * as services from '../services';

@InputType()
class NewSongArgs implements Partial<Models.Song> {
  @Field()
  title: string;

  @Field()
  storagePath: string;
}

@InputType({ description: 'Create a new album' })
class CreateAlbumArgs implements Partial<Models.Album & NewSongArgs> {
  @Field()
  albumId: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [NewSongArgs])
  songsToAdd: NewSongArgs[];

  @Field()
  artistId: string;

  @Field()
  profileImageStoragePath: string;
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
  async albumById(
    @Arg('albumId') albumId: string
  ): Promise<Models.Album | undefined> {
    try {
      const album = await getManager()
        .getRepository(Models.Album)
        .findOne({
          where: { id: albumId },
          relations: [
            'artist',
            'artist.albums',
            'label',
            'songs',
            'songs.label',
            'songs.artist',
            'songs.supportingArtists',
            'songs.supportingArtists.artist',
            // 'songs.usersRecentlyPlayed',
            // 'songs.usersRecentlyPlayed.user',
            'songs.usersFavourited',
            'songs.usersFavourited.user',
          ],
        });

      if (album === undefined) {
        console.log('Album not found', albumId);
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
      const {
        songsToAdd,
        albumId,
        profileImageStoragePath,
        ...albumPayload
      } = payload;

      const { title, description, artistId } = albumPayload;

      console.log('albumPayload', albumPayload);

      if (
        (songsToAdd.length > 0,
        albumId,
        title,
        description,
        songsToAdd,
        artistId,
        profileImageStoragePath)
      ) {
        const albumRepository = getManager().getRepository(Models.Album);
        const songRepository = getManager().getRepository(Models.Song);

        const processImageResult = await services.processImage({
          storagePath: profileImageStoragePath,
          imageType: services.ImageType.PROFILE,
        });

        if (!processImageResult.ok) {
          console.log('processing Image failed', processImageResult);
          return;
        }

        const newAlbum = {
          id: albumId,
          ...processImageResult.data,
          ...albumPayload,
        };

        const album = albumRepository.create(newAlbum);

        if (album) {
          await albumRepository.save(album);

          const processSongsPromises = [];

          for (const song of songsToAdd) {
            processSongsPromises.push(
              services.processAudio({
                storagePath: song.storagePath,
              })
            );
          }

          const processSongsResults = await Promise.all(processSongsPromises);
          // check for any failures
          const failures = processSongsResults.filter((result) => !result.ok);

          if (failures) {
            console.log(
              'There was a failure in the audio processing',
              failures
            );
            return;
          }

          const resolvedSongsToAdd = songsToAdd.map((song, index) => {
            // Typescript cant seem to infer the specific type of the results
            // checked above for any fail responses, safe to cast to success
            const processedSongResponse = processSongsResults[
              index
            ] as services.ProcessAudioSuccessResponse;

            return {
              artistId,
              albumId,
              title: song.title,
              ...processedSongResponse.data,
              profileImageStoragePath,
              ...processImageResult.data,
              // releaseDate: new Date(), //TODO: releaseDate, default to new Date() for now
            };
          });

          await songRepository.insert(resolvedSongsToAdd);

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

  @Mutation(() => Boolean)
  async testProcessAudio(
    @Arg('storagePath') storagePath: string
  ): Promise<boolean> {
    try {
      const result = await services.processAudio({ storagePath });

      console.log('*debug* testProcessAudio result', result);

      return true;
    } catch (error) {
      console.log('createAlbum error', error);
      return false;
    }
  }

  //TODO: If an album is deleted, the corresponding songs must also
  // be deleted, and anything linked to those songs (favourites etc)
  @Mutation(() => Boolean)
  async deleteAlbum(@Arg('albumId') albumId: string): Promise<boolean> {
    try {
      const repository = getManager().getRepository(Models.Album);
      const albumToDelete = await repository.findOne({
        where: { id: albumId },
      });
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
