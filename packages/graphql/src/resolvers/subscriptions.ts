import { Arg, Field, ObjectType, Query, Resolver } from 'type-graphql';
import { createUnionType } from 'type-graphql';
import { getManager } from 'typeorm';

import { Models } from '../orm';

const SubscriptionData = createUnionType({
  name: 'SubscriptionData',
  types: () => [
    Models.Album,
    Models.Artist,
    Models.Label,
    Models.Playlist,
    Models.Song,
    Models.User,
  ],
  resolveType: (value) => {
    switch (value.type) {
      case Models.EntityType.ALBUM:
        return Models.Album;
      case Models.EntityType.ARTIST:
        return Models.Artist;
      case Models.EntityType.LABEL:
        return Models.Label;
      case Models.EntityType.PLAYLIST:
        return Models.Playlist;
      case Models.EntityType.SONG:
        return Models.Song;
      case Models.EntityType.USER:
        return Models.User;
    }
  },
});

@ObjectType()
export class SubscriptionResult extends Models.UserSubscription {
  @Field(() => [SubscriptionData])
  data: typeof SubscriptionData[];
}

@Resolver()
export class HomeResolvers {
  @Query(() => [SubscriptionResult])
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
        (subscription) => subscription.active
      );

      if (activeSubscriptions.length === 0) {
        console.log(
          'No active subscriptions - activeSubscriptions.length === 0',
          activeSubscriptions.length === 0
        );
        return;
      }

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
        if (subscription.tag) {
          subscriptionPromises.push(runTagSubscriptionQueries(subscription));
        } else {
          subscriptionPromises.push(runSubscriptionQueries(subscription));
        }
      }

      if (subscriptionPromises.length === 0) {
        console.log('No subscription queries created');
        return;
      }

      const subscriptionQueryResults = await Promise.all(subscriptionPromises);
      const subscriptionResults: SubscriptionResult[] = [];

      for (const [index, subscription] of sortedSubscriptions.entries()) {
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

const runTagSubscriptionQueries = (subscription: Models.UserSubscription) => {
  const { entityType, subscriptionType, tag } = subscription;

  const numberOfResults = 20;
  const model = Models[entityType];
  const formattedQuery = tag.trim().replace(/ /g, ' & ');

  switch (subscriptionType) {
    case Models.SubscriptionType.NEW:
      return getManager()
        .createQueryBuilder()
        .select(entityType.toLowerCase())
        .from(model, entityType.toLowerCase())
        .where(
          `to_tsvector('simple',${entityType.toLowerCase()}."tagSearchString") @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        )
        .orderBy(`${entityType.toLowerCase()}.createdAt`, 'DESC')
        .take(numberOfResults)
        .getMany();

    case Models.SubscriptionType.TOP:
      return getManager()
        .createQueryBuilder()
        .select(entityType.toLowerCase())
        .from(model, entityType.toLowerCase())
        .where(
          `to_tsvector('simple',${entityType.toLowerCase()}."tagSearchString") @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        )
        .orderBy(
          `${entityType.toLowerCase()}.${getMetricForTopQuery(entityType)}`,
          'DESC'
        )
        .take(numberOfResults)
        .getMany();

    case Models.SubscriptionType.RANDOM:
      return getManager()
        .createQueryBuilder()
        .select(entityType.toLowerCase())
        .from(model, entityType.toLowerCase())
        .where(
          `to_tsvector('simple',${entityType.toLowerCase()}."tagSearchString") @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        )
        .orderBy('RANDOM()')
        .take(numberOfResults)
        .getMany();
  }
};

// const runFollowerSubscriptionQueries = (
//   user: Models.User,
//   subscription: Models.UserSubscription
// ) => {
//   const { entityType, subscriptionType } = subscription;

//   const numberOfResults = 20;
//   const model = Models[entityType];
//   const artistFollowIds = user.artistFollows.map(
//     (userArtistFollowing) => userArtistFollowing.artistId
//   );
//   const labelFollowIds = user.labelFollows.map(
//     (userLabelFollowing) => userLabelFollowing.labelId
//   );

//   switch (subscriptionType) {
//     case Models.SubscriptionType.NEW: {
//       const artist = await getManager()
//         .getRepository(Models.Artist)
//         .createQueryBuilder()
//         .select(entityType.toLowerCase())
//         .from(model, entityType.toLowerCase())
//         .where('artist.id', artistFollowIds)
//         .leftJoinAndSelect('artist.album', 'album')
//         .orderBy('album.createdAt', 'DESC')
//         .limit(numberOfResults)
//         .getMany();

//       const label = await getManager()
//         .getRepository(Models.Label)
//         .createQueryBuilder()
//         .select(entityType.toLowerCase())
//         .from(model, entityType.toLowerCase())
//         .leftJoinAndSelect('label.album', 'album')
//         .orderBy('album.createdAt', 'DESC')
//         .limit(numberOfResults)
//         .getMany();

//       // Uniquify
//       const result = [...artist, ...label].filter(
//         (v, i, a) => a.findIndex((t) => t.id === v.id) === i
//       );

//       return result;
//     }
//     case Models.SubscriptionType.TOP:
//       return getManager()
//         .getRepository(model)
//         .find({
//           order: {
//             [getMetricForTopQuery(entityType)]: 'DESC',
//           },
//           take: numberOfResults,
//         });

//     case Models.SubscriptionType.RANDOM:
//       return getManager()
//         .createQueryBuilder()
//         .select(entityType.toLowerCase())
//         .from(model, entityType.toLowerCase())
//         .orderBy('RANDOM()')
//         .limit(numberOfResults)
//         .getMany();
//   }
// };

const runSubscriptionQueries = (subscription: Models.UserSubscription) => {
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
        .take(numberOfResults)
        .getMany();
  }
};

const getMetricForTopQuery = (entityType: Models.EntityType) => {
  switch (entityType) {
    case Models.EntityType.ALBUM:
      // TODO: this is incorrect, need a real metric
      return 'createdAt';
    case Models.EntityType.ARTIST:
      return 'followers';
    case Models.EntityType.LABEL:
      return 'followers';
    case Models.EntityType.PLAYLIST:
      return 'followers';
    case Models.EntityType.SONG:
      return 'playCount';
    default:
      return 'followers';
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
