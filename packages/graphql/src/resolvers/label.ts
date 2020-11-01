import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { getManager } from 'typeorm';

import { Models } from '../orm';
import * as services from '../services';

@InputType()
class CreateLabelArgs implements Partial<Models.Label> {
  @Field()
  labelId: string;

  @Field()
  userId: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  profileImageStoragePath: string;
}

@Resolver(Models.Label)
export class LabelResolvers {
  @Query(() => [Models.Label])
  async labels(): Promise<Models.Label[] | undefined> {
    try {
      // const labels = await getManager()
      //   .getRepository(Models.Label)
      //   .find();

      const labels = await getManager()
        .getRepository(Models.Label)
        .createQueryBuilder('label')
        .innerJoinAndSelect('label.albums', 'albums')
        .innerJoinAndSelect('albums.artist', 'artist')
        .getMany();

      if (labels) {
        return labels;
      } else {
        console.log('No labels found');

        return;
      }
    } catch (error) {
      console.log('Find labels error', error);

      return;
    }
  }

  @Query(() => [Models.Label])
  async newLabels(): Promise<Models.Label[] | undefined> {
    try {
      const labels = await getManager()
        .getRepository(Models.Label)
        .find({
          order: {
            createdAt: 'DESC',
          },
          take: 20,
        });

      if (labels) {
        return labels;
      } else {
        console.log('No labels found');

        return;
      }
    } catch (error) {
      console.log('Find labels error', error);

      return;
    }
  }

  @Query(() => Models.Label)
  async labelById(
    @Arg('labelId') labelId: string
  ): Promise<Models.Label | undefined> {
    try {
      const label = await getManager()
        .getRepository(Models.Label)
        .findOne({
          where: { id: labelId },
          relations: [
            'artists',
            'artists.artist',
            'albums',
            'albums.artist',
            'albums.songs',
            'albums.songs.supportingArtists',
            'albums.songs.supportingArtists.artist',
            'artistConnections',
            'artistConnections.artist',
          ],
        });

      if (label) {
        return label;
      }
      console.log('Label not found', labelId);

      return label;
    } catch (error) {
      console.log('labelById error', error);

      return;
    }
  }

  @Query(() => [Models.Label])
  async searchLabels(
    @Arg('query') query: string
  ): Promise<Models.Label[] | undefined> {
    try {
      const formattedQuery = query.trim().replace(/ /g, ' & ');
      const labels = await getManager()
        .createQueryBuilder()
        .select('label')
        .from(Models.Label, 'label')
        .where(
          // eslint-disable-next-line quotes
          `to_tsvector('simple',label.name) @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        )
        .getMany();

      if (labels) {
        return labels;
      }

      console.log('searchLabels query returned nothing - query', query);
      return;
    } catch (error) {
      console.log('searchLabels error', error);

      return;
    }
  }

  @Mutation(() => Models.Label)
  async createLabel(
    @Arg('input') payload: CreateLabelArgs
  ): Promise<Models.Label | undefined> {
    try {
      const { userId, labelId, profileImageStoragePath, ...rest } = payload;
      const labelRepository = getManager().getRepository(Models.Label);

      const processImageResult = await services.processImage({
        storagePath: profileImageStoragePath,
        imageType: services.ImageType.PROFILE,
      });

      if (!processImageResult.ok) {
        console.log('processing Image failed', processImageResult);
        return;
      }

      const label = labelRepository.create({
        id: labelId,
        ...rest,
        ...processImageResult.data,
      });

      const userLabelRepository = getManager().getRepository(Models.UserLabel);
      const userLabel = userLabelRepository.create({ userId, labelId });

      if (label && userLabel) {
        await labelRepository.save(label);
        await userLabelRepository.save(userLabel);

        return label;
      }

      console.log('CreateLabel failed', payload);
      return;
    } catch (error) {
      console.log('CreateLabel error', error);
      return;
    }
  }

  // TODO: need to consider where this label would be referenced
  @Mutation(() => Boolean)
  async deleteLabel(@Arg('labelId') labelId: string): Promise<boolean> {
    try {
      const repository = getManager().getRepository(Models.Label);
      const labelToDelete = await repository.findOne({
        where: { id: labelId },
      });
      if (labelToDelete) {
        await repository.remove(labelToDelete);
        return true;
      } else {
        console.log('deleteLabel - User not found');
        return false;
      }
    } catch (error) {
      console.log('deleteLabel error', error);
      return false;
    }
  }
}
