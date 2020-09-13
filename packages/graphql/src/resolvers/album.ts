import handlebars from 'handlebars';
import * as helpers from 'helpers';
import nodemailer from 'nodemailer';
import { Models } from 'orm';
import * as services from 'services';
import {
  Arg,
  createUnionType,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { getManager } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@InputType()
class NewSupportingArtist {
  @Field()
  new: true;

  @Field()
  name: string;

  @Field()
  email: string;
}
@InputType()
class ExistingSupportingArtist {
  @Field()
  new: false;

  @Field()
  id: string;
}

const AddSupportingArtist = createUnionType({
  name: 'AddSupportingArtist',
  types: () => [NewSupportingArtist, ExistingSupportingArtist] as const,
  // our implementation of detecting returned object type
  resolveType: (value) => {
    if ('id' in value) {
      return ExistingSupportingArtist; // we can return object type class (the one with `@ObjectType()`)
    }
    if ('email' in value) {
      return NewSupportingArtist; // or the schema name of the type as a string
    }
    return undefined;
  },
});

@InputType()
class NewSongArgs implements Partial<Models.Song> {
  @Field()
  title: string;

  @Field()
  storagePath: string;

  @Field(() => [AddSupportingArtist], { nullable: true })
  supportingArtist?: (NewSupportingArtist | ExistingSupportingArtist)[];
}

@InputType()
class AddSongsToAlbumArgs implements Partial<Models.Song> {
  @Field()
  albumId: string;

  @Field()
  artistId: string;

  @Field(() => [NewSongArgs])
  songsToAdd: NewSongArgs[];

  @Field()
  userName: string;
}

@InputType({ description: 'Create a new album' })
class CreateAlbumArgs implements Partial<Models.Album & NewSongArgs> {
  @Field()
  albumId: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  artistId: string;

  @Field()
  profileImageStoragePath: string;

  @Field(() => Date)
  releaseDate: Date;
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
        albumId,
        profileImageStoragePath,
        releaseDate,
        ...albumPayload
      } = payload;

      const { title, description, artistId } = albumPayload;

      console.log('albumPayload', albumPayload);

      if (
        albumId &&
        title &&
        description &&
        artistId &&
        profileImageStoragePath
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

        const newAlbum = {
          id: albumId,
          releseDate: releaseDate ?? new Date(),
          ...processImageResult.data,
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
      const { songsToAdd, albumId, artistId, userName } = payload;

      if ((songsToAdd.length > 0, albumId, songsToAdd, artistId)) {
        const songRepository = getManager().getRepository(Models.Song);
        const albumRepository = getManager().getRepository(Models.Album);
        const supportingArtistRespository = getManager().getRepository(
          Models.SongArtistSupportingArtist
        );
        const artistRepository = getManager().getRepository(Models.Artist);

        // const testAccount = await nodemailer.createTestAccount();
        const transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
          },
        });

        const artistInviteEmail = await helpers.readHTMLFile(
          '../emailTemplates/artistInvite.html'
        );

        const template = handlebars.compile(artistInviteEmail);

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
          console.log('There was a failure in the audio processing', failures);
          return false;
        }

        const supportingArtistsToAdd: Partial<
          Models.SongArtistSupportingArtist
        >[] = [];
        const newArtistsToCreate: Partial<Models.Artist>[] = [];
        const newArtistEmailPromises: Promise<
          ReturnType<typeof transporter.sendMail>
        >[] = [];

        const resolvedSongsToAdd = songsToAdd.map((song, index) => {
          // Typescript cant seem to infer the specific type of the results
          // checked above for any fail responses, safe to cast to success
          const processedSongResponse = processSongsResults[
            index
          ] as services.ProcessAudioSuccessResponse;

          const songId = uuidv4();

          // create supporting artist entries/new artists
          if (
            song.supportingArtist !== undefined &&
            song.supportingArtist?.length > 0
          ) {
            for (const supportingArtist of song.supportingArtist) {
              if (supportingArtist.new === false) {
                supportingArtistsToAdd.push({
                  songId,
                  artistId: supportingArtist.id,
                });
              } else {
                const newArtistId = uuidv4();

                newArtistsToCreate.push({
                  name: supportingArtist.name,
                  id: newArtistId,
                });
                supportingArtistsToAdd.push({
                  songId,
                  artistId,
                });

                const templatedArtistInviteEmail = template({
                  userName,
                  artistName: supportingArtist.name,
                });

                newArtistEmailPromises.push(
                  transporter.sendMail({
                    // TODO: setup sending email address properly
                    from: '"Fred Foo 👻" <foo@example.com>', // sender address
                    to: supportingArtist.email, // list of receivers
                    subject: "You've been invited to OurSound!", // Subject line
                    html: templatedArtistInviteEmail, // html body
                  })
                );
              }
            }
          }

          return {
            id: songId,
            artistId,
            albumId,
            title: song.title,
            ...processedSongResponse.data,
          };
        });

        await songRepository.insert(resolvedSongsToAdd);
        await albumRepository.update(albumId, { processing: false });

        if (supportingArtistsToAdd.length > 0) {
          await supportingArtistRespository.insert(supportingArtistsToAdd);
        }
        if (newArtistsToCreate.length > 0) {
          await artistRepository.insert(newArtistsToCreate);
        }

        if (newArtistEmailPromises.length > 0) {
          await Promise.all(newArtistEmailPromises);
          console.log('emails sent to new artists');
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
