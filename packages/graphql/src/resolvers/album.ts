import { Album, SongArtistSupportingArtist } from 'orm/models';
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { getManager } from 'typeorm';
import { uuid } from 'uuidv4';

import { Models } from '../orm';
import * as services from '../services';

// TODO: This should really be two types unioned, artistId should not be with the rest. Finding it difficult to figure out union types with type-graphql
@InputType()
class SupportingArtistInput {
  @Field()
  artistId: string;
}

// TODO: This should really be two types unioned, artistId should not be with the rest. Finding it difficult to figure out union types with type-graphql
@InputType()
class NewSongArgs {
  @Field({ nullable: true })
  artistId?: string;

  @Field()
  storagePath: string;

  @Field(() => [SupportingArtistInput])
  supportingArtist: SupportingArtistInput[];

  @Field()
  isrc: string;

  @Field()
  title: string;
}

@InputType()
class AddSongsToAlbumArgs {
  @Field()
  albumId: string;

  @Field({ nullable: true })
  labelId?: string;

  @Field(() => [NewSongArgs])
  songsToAdd: NewSongArgs[];

  @Field()
  userName: string;
}

// TODO: This should really be two types unioned, artistId should not be with the rest. Finding it difficult to figure out union types with type-graphql
@InputType({ description: 'Create a new album' })
class CreateAlbumArgs {
  @Field()
  albumId: string;

  @Field({ nullable: true })
  artistId?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  labelId?: string;

  @Field()
  profileImageStoragePath: string;

  @Field(() => Date)
  releaseDate: Date;

  @Field()
  title: string;

  @Field({ nullable: true })
  userName?: string;
}

type CreateAlbum = Omit<
  Album,
  'createdAt' | 'updatedAt' | 'type' | 'label' | 'artist' | 'songs'
>;

type CreateSupportingAritst = Pick<
  SongArtistSupportingArtist,
  'artistId' | 'songId'
>;

@Resolver(Models.Album)
export class AlbumResolvers {
  @Query(() => [Models.Album])
  async albums(): Promise<Models.Album[] | undefined> {
    try {
      const albums = await getManager()
        .getRepository(Models.Album)
        .find({ relations: ['artist'] });

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
      const formattedQuery = query.trim().replace(/ /g, ' & ');
      const albums = await getManager()
        .createQueryBuilder()
        .select('album')
        .from(Models.Album, 'album')
        .leftJoinAndSelect('album.artist', 'artist')
        .leftJoinAndSelect('album.label', 'label')
        .where(
          `to_tsvector('simple',album.title) @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        )
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
        albumId,
        artistId,
        profileImageStoragePath,
        releaseDate,
        ...albumPayload
      } = payload;

      const { title, description } = albumPayload;

      console.log('createAlbum payload', payload);
      console.log('albumPayload', albumPayload);

      if (
        albumId.length > 0 &&
        title.length > 0 &&
        (description?.length ?? 0) > 0 &&
        profileImageStoragePath.length > 0
      ) {
        const albumRepository = getManager().getRepository(Models.Album);

        const processImageResult = await services.processImage({
          storagePath: profileImageStoragePath,
          imageType: services.ImageType.PROFILE,
        });

        if (!processImageResult.ok) {
          console.log('processing Image failed', processImageResult);
          return;
        }

        if (artistId === undefined) {
          console.log('artistId is undefined');
          return;
        }

        const newAlbum: CreateAlbum = {
          id: albumId,
          artistId,
          releaseDate: releaseDate ?? new Date(),
          profileImageStoragePathLarge:
            processImageResult.data.storagePathLarge,
          profileImageStoragePathSmall:
            processImageResult.data.storagePathSmall,
          profileImageStoragePathThumb:
            processImageResult.data.storagePathThumb,
          profileImageUrlLarge: processImageResult.data.urlLarge,
          profileImageUrlSmall: processImageResult.data.urlSmall,
          profileImageUrlThumb: processImageResult.data.urlThumb,
          ...albumPayload,
          processing: true,
        };

        const album = albumRepository.create(newAlbum);

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

  @Mutation(() => Boolean)
  async addSongsToAlbum(
    @Arg('input') payload: AddSongsToAlbumArgs
  ): Promise<boolean> {
    try {
      const { songsToAdd, albumId, labelId } = payload;

      console.log('addSongsToAlbum payload', payload);

      if ((songsToAdd.length > 0, albumId, songsToAdd)) {
        const songRepository = getManager().getRepository(Models.Song);
        const albumRepository = getManager().getRepository(Models.Album);
        const artistRepository = getManager().getRepository(Models.Artist);

        const supportingArtistRespository = getManager().getRepository(
          Models.SongArtistSupportingArtist
        );

        const processSongsPromises = [];

        for (const song of songsToAdd) {
          processSongsPromises.push(
            services.processAudio({
              storagePath: song.storagePath,
            })
          );
        }

        const processSongsResults = await Promise.all(processSongsPromises);

        console.log(
          'processing songs complete - processSongsResults',
          processSongsResults
        );
        // check for any failures
        const failures = processSongsResults.find((result) => !result.ok);

        if (failures) {
          console.log('There was a failure in the audio processing', failures);
          return false;
        }

        const supportingArtistModels: CreateSupportingAritst[] = [];

        const resolvedSongsToAddPromises = songsToAdd.map(
          async (song, index) => {
            // Typescript cant seem to infer the specific type of the results
            // checked above for any fail responses, safe to cast to success
            const processedSongResponse = processSongsResults[
              index
            ] as services.ProcessAudioSuccessResponse;

            const songId = uuid();

            // TODO: This could be more efficient, if album isnt various artists, no need to run this on every song as its the same artist
            const artist = await artistRepository.findOne({
              id: song.artistId,
            });

            if (song.supportingArtist.length > 0) {
              const supportingArtistModelsForThisSong: CreateSupportingAritst[] = song.supportingArtist.map(
                (supportingArtist) => ({
                  songId,
                  artistId: supportingArtist.artistId,
                })
              );

              supportingArtistModels.push(...supportingArtistModelsForThisSong);
            }

            return {
              id: songId,
              artistId: song.artistId,
              albumId,
              labelId,
              title: song.title,
              isrc: song.isrc,
              ...processedSongResponse.data,
              active: artist?.claimed ?? false,
            };
          }
        );

        const resolvedSongsToAdd = await Promise.all(
          resolvedSongsToAddPromises
        );
        console.log('resolvedSongsToAdd', resolvedSongsToAdd);

        await songRepository.insert(resolvedSongsToAdd);
        console.log('songs inserted');

        await albumRepository.update(albumId, { processing: false });

        if (supportingArtistModels.length > 0) {
          await supportingArtistRespository.insert(supportingArtistModels);
        }

        return true;
      }

      console.log('addSongsToAlbum failed', payload);

      return false;
    } catch (error) {
      console.log('addSongsToAlbum error', error);
      return false;
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
