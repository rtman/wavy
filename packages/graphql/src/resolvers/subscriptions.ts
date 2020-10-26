import { UserSubscription } from 'orm/models';
import { Arg, Field, ObjectType, Query, Resolver } from 'type-graphql';
import { createUnionType } from 'type-graphql';
import { getManager } from 'typeorm';

import { Models } from '../orm';

const SubscriptionData = createUnionType({
  name: 'HomeData',
  types: () => [
    Models.Album,
    Models.Artist,
    Models.Playlist,
    Models.Label,
    Models.Song,
    Models.User,
  ],
  resolveType: (value) => {
    // TODO: resolve types
    if ('artistId' in value) {
      return Models.Album;
    }
    return undefined;
  },
});

@ObjectType()
export class SubscriptionResult extends UserSubscription {
  @Field(() => [SubscriptionData])
  data: typeof SubscriptionData[];
}

@Resolver()
export class HomeResolvers {
  @Query(() => SubscriptionResult)
  async getSubscriptions(
    @Arg('userId') userId: string
  ): Promise<SubscriptionResult[] | undefined> {
    try {
      const user = await getManager()
        .getRepository(Models.User)
        .findOne({
          where: { id: userId },
          relations: ['subscriptions'],
        });

      if (!user) {
        console.log('No user found for userId', userId);
        return;
      }

      const subscriptions = user?.subscriptions;

      if (subscriptions.length === 0) {
        console.log(
          'User has no subscriptions - subscriptions.length === 0',
          subscriptions.length === 0
        );
        return;
      }

      const activeSubscriptions = subscriptions.filter(
        (subscription) => !subscription.active
      );
      const favouritedSubscriptions = activeSubscriptions.filter(
        (subscription) => subscription.favourited
      );
      const nonFavouritedSubscriptions = activeSubscriptions.filter(
        (subscription) => !subscription.favourited
      );
      const randomizedNonFavouritedSubscriptions = shuffleArray(
        nonFavouritedSubscriptions
      );

      const sortedSubscriptions = [
        ...favouritedSubscriptions,
        ...randomizedNonFavouritedSubscriptions,
      ];

      const subscriptionPromises: Promise<typeof SubscriptionData[]>[] = [];

      for (const subscription of sortedSubscriptions) {
        subscriptionPromises.push(runSubscription(subscription));
      }

      if (subscriptionPromises.length === 0) {
        console.log('No subscription queries created');
        return;
      }

      const subscriptionQueryResults = await Promise.all(subscriptionPromises);
      const subscriptionResults: SubscriptionResult[] = [];

      for (const [index, subscription] of subscriptions.entries()) {
        subscriptionResults.push({
          ...subscription,
          data: subscriptionQueryResults[index],
        });
      }

      return subscriptionResults;
    } catch (error) {
      console.log('Get Subscriptions error', error);
    }
  }
}

const runSubscription = (subscription: UserSubscription) => {
  const { entityType, subscriptionType } = subscription;
  const numberOfResults = 20;

  const model = Models[entityType];

  switch (subscriptionType) {
    case Models.SubscriptionType.NEW:
      return getManager()
        .getRepository(model)
        .find({
          order: {
            createdAt: 'DESC',
          },
          take: numberOfResults,
        });

    case Models.SubscriptionType.TOP:
      return getManager()
        .getRepository(model)
        .find({
          order: {
            [getMetricForTopQuery(entityType)]: 'DESC',
          },
          take: numberOfResults,
        });

    case Models.SubscriptionType.RANDOM:
      return getManager()
        .createQueryBuilder()
        .select(entityType.toLowerCase())
        .from(model, entityType.toLowerCase())
        .orderBy('RANDOM()')
        .limit(numberOfResults)
        .getMany();
  }
};

const getMetricForTopQuery = (entityType: Models.EntityType) => {
  switch (entityType) {
    case Models.EntityType.ALBUM:
      // TODO: this is incorrect, need a real
      return 'createdAt';
    case Models.EntityType.ARTIST:
      return 'followers';
    case Models.EntityType.LABEL:
      return 'followers';
    case Models.EntityType.PLAYLIST:
      return 'followers';
    case Models.EntityType.SONG:
      return 'playCount';
  }
};

const shuffleArray = <T>(array: T[]): T[] => {
  const clonedArray = [...array];
  for (let i = clonedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clonedArray[i], clonedArray[j]] = [clonedArray[j], clonedArray[i]];
  }
  return clonedArray;
};
