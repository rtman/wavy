import Mail from 'nodemailer/lib/mailer';
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { getManager } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import * as helpers from '../helpers';
import { Models } from '../orm';
import * as services from '../services';

@InputType()
class SupportingArtistInput {
  @Field()
  new: boolean;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  id?: string;
}

@InputType()
class NewSongArgs implements Partial<Models.Song> {
  @Field()
  title: string;

  @Field()
  storagePath: string;

  @Field(() => [SupportingArtistInput], { nullable: true })
  supportingArtist?: SupportingArtistInput[];
}

@InputType()
class AddSongsToAlbumArgs implements Partial<Models.Song> {
  @Field()
  albumId: string;

  @Field()
  artistId: string;

  @Field({ nullable: true })
  labelId?: string;

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

  @Field({ nullable: true })
  artistId?: string;

  @Field({ nullable: true })
  artistName?: string;

  @Field({ nullable: true })
  artistEmail?: string;

  @Field({ nullable: true })
  newArtist?: boolean;

  @Field({ nullable: true })
  userName?: string;

  @Field({ nullable: true })
  variousArtists?: boolean;

  @Field({ nullable: true })
  labelId?: string;

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
        artistName,
        newArtist,
        artistId,
        userName,
        artistEmail,
        variousArtists,
        ...albumPayload
      } = payload;

      const { title, description } = albumPayload;

      console.log('albumPayload', albumPayload);

      if (
        albumId.length > 0 &&
        title.length > 0 &&
        description.length > 0 &&
        profileImageStoragePath.length > 0
      ) {
        const albumRepository = getManager().getRepository(Models.Album);
        const artistRepository = getManager().getRepository(Models.Artist);

        let resolvedArtistId = artistId;

        if (
          newArtist &&
          artistName !== undefined &&
          artistName.length > 0 &&
          userName !== undefined &&
          userName.length > 0 &&
          artistEmail !== undefined &&
          artistEmail.length > 0
        ) {
          resolvedArtistId = uuidv4();

          const artistToCreate = artistRepository.create({
            id: resolvedArtistId,
            name: artistName,
          });

          if (newArtist) {
            await artistRepository.save(artistToCreate);

            const transporter = await helpers.makeEmailTransporter();
            const templateEmail = await helpers.makeHtmlTemplate(
              '../emailTemplates/artistInvite.html'
            );
            const templatedArtistInviteEmail = templateEmail({
              userName,
              artistName,
              artistId: resolvedArtistId,
            });

            await transporter.sendMail({
              // TODO: setup sending email address properly
              from: '"Team" <team@oursound.io>', // sender address
              to: artistEmail, // list of receivers
              subject: "You've been invited to OurSound!", // Subject line
              html: templatedArtistInviteEmail, // html body
            });
          } else {
            console.log(
              'CreateAlbum failed while creating new artist',
              payload
            );
          }
        } else {
          console.log(
            'Error, new Arist submitted with incorrect payload',
            payload
          );

          return;
        }

        if (variousArtists) {
          const variousArtistsEntity = await artistRepository.findOne({
            where: { name: 'Various Artists' },
          });
          resolvedArtistId = variousArtistsEntity?.id;
        }

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
          artistId: resolvedArtistId,
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
      const { songsToAdd, albumId, artistId, labelId, userName } = payload;

      if ((songsToAdd.length > 0, albumId, songsToAdd, artistId)) {
        const songRepository = getManager().getRepository(Models.Song);
        const albumRepository = getManager().getRepository(Models.Album);
        const supportingArtistRespository = getManager().getRepository(
          Models.SongArtistSupportingArtist
        );
        const artistRepository = getManager().getRepository(Models.Artist);

        const transporter = await helpers.makeEmailTransporter();
        const templateEmail = await helpers.makeHtmlTemplate(
          '../emailTemplates/artistInvite.html'
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
        // check for any failures
        const failures = processSongsResults.filter((result) => !result.ok);

        if (failures) {
          console.log('There was a failure in the audio processing', failures);
          return false;
        }

        const supportingArtistModels: Partial<
          Models.SongArtistSupportingArtist
        >[] = [];
        const newArtistModels: Partial<Models.Artist>[] = [];
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
          const addSupportingArtistResult = addSupportingArtists({
            supportingArtists: song.supportingArtist,
            songId,
            globalNewArtistModels: newArtistModels,
            userName,
            templateEmail,
            transporter,
          });

          supportingArtistModels.push(
            ...addSupportingArtistResult.supportingArtistModels
          );
          newArtistModels.push(...addSupportingArtistResult.newArtistModels);
          newArtistEmailPromises.push(
            ...addSupportingArtistResult.newArtistEmailPromises
          );

          return {
            id: songId,
            artistId,
            albumId,
            labelId,
            title: song.title,
            ...processedSongResponse.data,
          };
        });

        await songRepository.insert(resolvedSongsToAdd);
        await albumRepository.update(albumId, { processing: false });

        // need to add any new artists first before adding them as supporting artists
        if (newArtistModels.length > 0) {
          await artistRepository.insert(newArtistModels);
        }

        if (supportingArtistModels.length > 0) {
          await supportingArtistRespository.insert(supportingArtistModels);
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

// Private types

interface AddSupportingArtists {
  supportingArtists: NewSongArgs['supportingArtist'];
  songId: string;
  globalNewArtistModels: Partial<Models.Artist>[];
  userName: string;
  templateEmail: HandlebarsTemplateDelegate;
  transporter: Mail;
}

// Private Functions

const addSupportingArtists = (props: AddSupportingArtists) => {
  const {
    supportingArtists,
    songId,
    globalNewArtistModels,
    userName,
    templateEmail,
    transporter,
  } = props;

  const supportingArtistModels: Partial<
    Models.SongArtistSupportingArtist
  >[] = [];
  const localNewArtistModels: Partial<Models.Artist>[] = [];
  const newArtistEmailPromises: Promise<
    ReturnType<typeof transporter.sendMail>
  >[] = [];

  if (supportingArtists !== undefined && supportingArtists.length > 0) {
    for (const supportingArtist of supportingArtists) {
      if (supportingArtist.new === false) {
        supportingArtistModels.push({
          songId,
          artistId: supportingArtist.id,
        });
      } else {
        // check to see if the artist was created in another instance
        const previouslyAddedNewArtist = globalNewArtistModels.find(
          (artist) => artist.name === supportingArtist.name
        );
        const newArtistId = previouslyAddedNewArtist?.id ?? uuidv4();

        if (previouslyAddedNewArtist === undefined) {
          localNewArtistModels.push({
            name: supportingArtist.name,
            id: newArtistId,
          });
        }

        supportingArtistModels.push({
          songId,
          artistId: newArtistId,
        });

        const templatedArtistInviteEmail = templateEmail({
          userName,
          artistName: supportingArtist.name,
          artistId: newArtistId,
        });

        newArtistEmailPromises.push(
          transporter.sendMail({
            // TODO: setup sending email address properly
            from: '"Team" <team@oursound.io>', // sender address
            to: supportingArtist.email, // list of receivers
            subject: "You've been invited to OurSound!", // Subject line
            html: templatedArtistInviteEmail, // html body
          })
        );
      }
    }
  }
  return {
    supportingArtistModels,
    newArtistModels: localNewArtistModels,
    newArtistEmailPromises,
  };
};
