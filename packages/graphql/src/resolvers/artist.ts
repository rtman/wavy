import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { getManager } from 'typeorm';
import { uuid } from 'uuidv4';

import * as helpers from '../helpers';
import { Models } from '../orm';
import * as services from '../services';

@InputType()
class ClaimArtistArgs implements Partial<Models.UserArtist> {
  @Field()
  artistId: string;

  @Field()
  userId: string;
}
@InputType()
class LabelCreateUnclaimedArtistArgs implements Partial<Models.Artist> {
  @Field({ nullable: true })
  claimantEmail: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  creatorUserId: string;

  @Field()
  creatorName: string;

  @Field()
  labelId: string;
}
@InputType()
class CreateArtistArgs implements Partial<Models.Artist> {
  @Field()
  artistId: string;

  @Field()
  userId: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  profileImageStoragePath: string;
}

@Resolver(Models.Artist)
export class ArtistResolvers {
  @Query(() => [Models.Artist])
  async artists(): Promise<Models.Artist[] | undefined> {
    try {
      const artists = await getManager()
        .getRepository(Models.Artist)
        .find();

      if (artists) {
        return artists;
      } else {
        console.log('No artists found');

        return;
      }
    } catch (error) {
      console.log('Find artists error', error);

      return;
    }
  }

  @Query(() => [Models.Artist])
  async newArtists(): Promise<Models.Artist[] | undefined> {
    try {
      const artists = await getManager()
        .getRepository(Models.Artist)
        .find({
          order: {
            createdAt: 'DESC',
          },
          take: 20,
        });

      if (artists) {
        return artists;
      } else {
        console.log('No artists found');

        return;
      }
    } catch (error) {
      console.log('Find artists error', error);

      return;
    }
  }

  @Query(() => Models.Artist)
  async artistById(
    @Arg('artistId') artistId: string
  ): Promise<Models.Artist | undefined> {
    try {
      const artist = await getManager()
        .getRepository(Models.Artist)
        .findOne({
          where: { id: artistId },
          relations: [
            'songs',
            'songs.album',
            'songs.artist',
            'songs.label',
            'songs.supportingArtists',
            'songs.supportingArtists.artist',
            'songs.usersFavourited',
            'songs.usersFavourited.user',
            // 'songs.usersRecentlyPlayed',
            // 'songs.usersRecentlyPlayed.user',
            'labels',
            'labels.label',
            'albums',
            'albums.label',
            'albums.songs',
            'albums.songs.label',
            'albums.songs.supportingArtists',
            'albums.songs.supportingArtists.artist',
            'supportingArtistOn',
            'supportingArtistOn.song',
            'supportingArtistOn.song.album',
            'usersFollowing',
            'usersFollowing.user',
            'users',
            'users.user',
          ],
        });

      if (artist) {
        return artist;
      }
      console.log('Artist not found', artistId);

      return artist;
    } catch (error) {
      console.log('artistById error', error);

      return;
    }
  }

  @Query(() => [Models.Artist])
  async artistsById(
    @Arg('artistIds', () => [String]) artistIds: string[]
  ): Promise<Models.Artist[] | undefined> {
    try {
      const artists = await getManager()
        .getRepository(Models.Artist)
        .findByIds(artistIds);
      if (artists) {
        return artists;
      } else {
        console.log('artistsById - no artists found', artistIds);

        return;
      }
    } catch (error) {
      console.log('artistsById error', error);
      return;
    }
  }

  @Query(() => [Models.Artist])
  async searchArtists(
    @Arg('query') query: string
  ): Promise<Models.Artist[] | undefined> {
    try {
      const formattedQuery = query.trim().replace(/ /g, ' & ');
      const artists = await getManager()
        .createQueryBuilder()
        .select('artist')
        .from(Models.Artist, 'artist')
        .leftJoinAndSelect('artist.usersFollowing', 'usersFollowing')
        .leftJoinAndSelect('usersFollowing.user', 'user')
        .leftJoinAndSelect('artist.labels', 'labels')
        .leftJoinAndSelect('labels.label', 'label')
        .where(
          "to_tsvector('simple',artist.name) @@ to_tsquery('simple', :query)",
          { query: `${formattedQuery}:*` }
        )
        .getMany();

      if (artists) {
        return artists;
      }

      console.log('searchArtists query returned nothing - query', query);
      return;
    } catch (error) {
      console.log('searchArtists error', error);

      return;
    }
  }

  @Mutation(() => Models.Artist)
  async createArtist(
    @Arg('input') payload: CreateArtistArgs
  ): Promise<Models.Artist | undefined> {
    try {
      const { userId, artistId, profileImageStoragePath, ...rest } = payload;
      const artistRepository = getManager().getRepository(Models.Artist);

      const processImageResult = await services.processImage({
        storagePath: profileImageStoragePath,
        imageType: services.ImageType.PROFILE,
      });

      if (!processImageResult.ok) {
        console.log('processing Image failed', processImageResult);
        return;
      }

      const artist = artistRepository.create({
        id: artistId,
        creatorUserId: userId,
        ...rest,
        ...processImageResult.data,
      });

      const userArtistRepository = getManager().getRepository(
        Models.UserArtist
      );

      const userArtist = userArtistRepository.create({
        userId,
        artistId,
      });

      if (artist && userArtist) {
        await artistRepository.save(artist);
        await userArtistRepository.save(userArtist);

        return artist;
      }

      console.log('CreateArtist failed', payload);
      return;
    } catch (error) {
      console.log('createArtist error', error);
      return;
    }
  }

  @Mutation(() => Boolean)
  async labelCreateUnclaimedArtist(
    @Arg('input') payload: LabelCreateUnclaimedArtistArgs
  ): Promise<boolean> {
    try {
      const { creatorName, labelId, ...rest } = payload;

      const artistRepository = getManager().getRepository(Models.Artist);
      const permissionRepository = getManager().getRepository(
        Models.Permission
      );

      const artistId = uuid();

      const artist = artistRepository.create({
        id: artistId,
        claimed: false,
        ...rest,
      });

      const newPermission = permissionRepository.create({
        requesteeId: artistId,
        requestorId: labelId,
        createMusic: true,
        createSupportingArtist: true,
      });

      if (artist && newPermission) {
        const transporter = await helpers.makeEmailTransporter();
        const templateEmail = await helpers.makeHtmlTemplate(
          'src/emailTemplates/artistInvite.html'
        );

        const templatedArtistInviteEmail = templateEmail({
          artistName: rest.name,
          artistEmail: rest.claimantEmail,
          artistId: artistId,
          userName: creatorName,
        });

        const sendArtistInviteEmailPromise = transporter.sendMail({
          // TODO: setup sending email address properly
          from: '"Team" <team@oursound.io>', // sender address
          to: rest.claimantEmail, // list of receivers
          subject: "You've been invited to OurSound!", // Subject line
          html: templatedArtistInviteEmail, // html body
        });

        const saveArtistPromise = artistRepository.save(artist);
        const saveNewPermissionPromise = permissionRepository.save(
          newPermission
        );

        const result = await Promise.all([
          sendArtistInviteEmailPromise,
          saveArtistPromise,
          saveNewPermissionPromise,
        ]);

        if (result) {
          return true;
        }
      }

      console.log('labelCreateUnclaimedArtist failed', payload);
      return false;
    } catch (error) {
      console.log('labelCreateUnclaimedArtist error', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async claimArtist(@Arg('input') payload: ClaimArtistArgs): Promise<boolean> {
    try {
      const { artistId, userId } = payload;

      const artistRepository = getManager().getRepository(Models.Artist);
      const userArtistRepository = getManager().getRepository(
        Models.UserArtist
      );

      const artistUpdate = await artistRepository.update(artistId, {
        claimed: true,
        creatorUserId: userId,
      });

      const userArtist = userArtistRepository.create({
        userId,
        artistId,
      });

      if (artistUpdate && userArtist) {
        await userArtistRepository.save(userArtist);

        return true;
      }

      console.log('ClaimArtist failed', payload);
      return false;
    } catch (error) {
      console.log('ClaimArtist error', error);
      return false;
    }
  }

  // TODO: need to consider where this artist would be referenced
  // songs, albums, in order to delete all references
  @Mutation(() => Boolean)
  async deleteArtist(@Arg('artistId') artistId: string): Promise<boolean> {
    try {
      const repository = getManager().getRepository(Models.Artist);
      const artistToDelete = await repository.findOne({
        where: { id: artistId },
      });
      if (artistToDelete) {
        await repository.remove(artistToDelete);
        return true;
      } else {
        console.log('deleteArtist - User not found');
        return false;
      }
    } catch (error) {
      console.log('deleteArtist error', error);
      return false;
    }
  }
}
