import * as admin from 'firebase-admin';
import moment from 'moment';
import {
  Arg,
  Field,
  InputType,
  Mutation,
  Query,
  registerEnumType,
  Resolver,
} from 'type-graphql';
import { getManager } from 'typeorm';

import { Models } from '../orm';

interface RecentlyPlayed {
  songId: string;
  createdAt: Date;
}

enum ListeningStatsQueryField {
  songId = 'songId',
  albumId = 'albumId',
  artistId = 'artistId',
  labelId = 'labelId',
  userId = 'userId',
}

// type listeningStatsQueryFields =
//   | 'songId'
//   | 'albumId'
//   | 'artistId'
//   | 'labelId'
//   | 'userId';

registerEnumType(ListeningStatsQueryField, {
  name: 'ListeningStatsQueryField', // this one is mandatory
});

@InputType()
class UserSkippedSongArgs {
  @Field()
  userId: string;

  @Field()
  songId: string;
}

@InputType()
class UserPlayedSongArgs {
  @Field()
  userId: string;

  @Field()
  songId: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  country: string;

  @Field(() => Number, { nullable: true })
  lat: number;

  @Field(() => Number, { nullable: true })
  lng: number;
}

@InputType()
class QueryStatsByField {
  @Field(() => ListeningStatsQueryField)
  field: ListeningStatsQueryField;

  @Field()
  value: string;
}

@InputType()
class QueryStatsByFieldAndNumberOfMonths {
  @Field(() => ListeningStatsQueryField)
  field: ListeningStatsQueryField;

  @Field()
  value: string;

  @Field()
  numberOfMonths: number;
}

@InputType()
class QueryStatsForCompoundQuery {
  @Field(() => ListeningStatsQueryField)
  field1: ListeningStatsQueryField;

  @Field()
  value1: string;

  @Field(() => ListeningStatsQueryField)
  field2: ListeningStatsQueryField;

  @Field()
  value2: string;
}

@Resolver()
export class ListeningStatsResolvers {
  @Query(() => [Models.ListeningStats])
  async queryStatsByField(
    @Arg('input') payload: QueryStatsByField
  ): Promise<Models.ListeningStats[] | undefined> {
    const { field, value } = payload;

    try {
      const userListeningStatsRef = admin
        .firestore()
        .collectionGroup('userStats')
        .where(field, '==', value);

      const result = await userListeningStatsRef.get();

      if (!result.empty) {
        // not safe, but so long as I match it exactly to the schema in the doc it should work
        const data = result.docs.map(
          (snapshot) => (snapshot.data() as unknown) as Models.ListeningStats
        );
        return data;
      } else {
        console.log(`No queryStatsByField found for ${field} == ${value}`);

        return;
      }
    } catch (error) {
      console.log(`Error queryStatsByField for ${field} == ${value}`, error);

      return;
    }
  }

  @Query(() => [Models.ListeningStats])
  async queryStatsByFieldForNumberOfMonths(
    @Arg('input') payload: QueryStatsByFieldAndNumberOfMonths
  ): Promise<Models.ListeningStats[] | undefined> {
    const { field, value, numberOfMonths } = payload;

    try {
      const userListeningStatsRef = admin
        .firestore()
        .collectionGroup('userStats')
        .where(field, '==', value)
        .where('updatedAt', '>=', moment().subtract(numberOfMonths, 'months'));

      const result = await userListeningStatsRef.get();
      if (!result.empty) {
        // not safe, but so long as I match it exactly to the schema in the doc it should work
        const data = result.docs.map(
          (snapshot) => (snapshot.data() as unknown) as Models.ListeningStats
        );
        return data;
      } else {
        console.log(
          `No queryStatsByFieldForNumberOfMonths found for ${field} == ${value} AND updatedAt >= ${numberOfMonths} months`
        );

        return;
      }
    } catch (error) {
      console.log(
        `Error queryStatsByFieldForNumberOfMonths for ${field} == ${value} AND updatedAt >= ${numberOfMonths} months`,
        error
      );

      return;
    }
  }

  @Query(() => [Models.ListeningStats])
  async queryStatsForCompoundQuery(
    @Arg('input') payload: QueryStatsForCompoundQuery
  ): Promise<Models.ListeningStats[] | undefined> {
    const { field1, value1, field2, value2 } = payload;

    try {
      const userListeningStatsRef = admin
        .firestore()
        .collectionGroup('userStats')
        .where(field1, '==', value1)
        .where(field2, '==', value2);

      const result = await userListeningStatsRef.get();
      if (!result.empty) {
        // not safe, but so long as I match it exactly to the schema in the doc it should work
        const data = (result.docs as unknown) as Models.ListeningStats[];
        return data;
      } else {
        console.log(
          `No queryStatsForCompoundQuery found for ${field1} == ${value1} AND ${field2} == ${value2}`
        );

        return;
      }
    } catch (error) {
      console.log(
        `Error queryStatsForCompoundQuery for ${field1} == ${value1} AND ${field2} == ${value2}`,
        error
      );

      return;
    }
  }

  @Mutation(() => Boolean)
  async userPlayedSong(
    @Arg('input') payload: UserPlayedSongArgs
  ): Promise<boolean> {
    try {
      const { city, country, userId, songId, lat, lng } = payload;

      const userStatsRef = admin
        .firestore()
        .collection('listeningStats')
        .doc(songId)
        .collection('userStats')
        .doc(userId);

      const userRecentlyPlayedRef = admin
        .firestore()
        .collection('recentlyPlayed')
        .doc(userId);

      const song = await getManager()
        .getRepository(Models.Song)
        .findOne();

      const userStatsPromise = userStatsRef.get();
      const userRecentlyPlayedPromise = userRecentlyPlayedRef.get();

      const firestorePromises = [userStatsPromise, userRecentlyPlayedPromise];

      const results = await Promise.all(firestorePromises);
      const [userStats, userRecentlyPlayed] = results;

      if (song) {
        const recentlyPlayed: RecentlyPlayed[] = userRecentlyPlayed.data()
          ?.songs;

        if (recentlyPlayed !== undefined) {
          recentlyPlayed.unshift({
            songId,
            createdAt: new Date(),
          });
          if (recentlyPlayed.length > 99) {
            recentlyPlayed.pop();
          }
          await userRecentlyPlayedRef.set({ songs: recentlyPlayed });
        } else {
          await userRecentlyPlayedRef.set({
            songs: [{ songId, createdAt: new Date() }],
          });
        }

        if (userStats.exists) {
          await userStatsRef.update({
            plays: admin.firestore.FieldValue.increment(1),
            geoLocation: new admin.firestore.GeoPoint(lat, lng),
            city,
            country,
            updatedAt: new Date(),
          });

          return true;
        } else {
          await userStatsRef.set({
            songId,
            albumId: song?.albumId,
            artistId: song?.artistId,
            labelId: song?.labelId,
            userId,
            plays: 1,
            skips: 0,
            geoLocation: new admin.firestore.GeoPoint(lat, lng),
            city,
            country,
            createdAt: new Date(),
            updatedAt: new Date(),
          });

          return true;
        }
      }

      console.log(`userPlayedSong failed ${songId} doesnt exist`, payload);
      return false;
    } catch (error) {
      console.log('userPlayedSong error', error);

      return false;
    }
  }

  @Mutation(() => Boolean)
  async userSkippedSong(
    @Arg('input') payload: UserSkippedSongArgs
  ): Promise<boolean> {
    try {
      const { userId, songId } = payload;

      const userStatsRef = admin
        .firestore()
        .collection('listeningStats')
        .doc(songId)
        .collection('userStats')
        .doc(userId);

      const song = await getManager()
        .getRepository(Models.Song)
        .findOne();

      const userStats = await userStatsRef.get();

      if (song) {
        if (userStats.exists) {
          await userStatsRef.update({
            skips: admin.firestore.FieldValue.increment(1),
            updatedAt: new Date(),
          });

          return true;
        } else {
          await userStatsRef.set({
            songId: songId,
            albumId: song?.albumId,
            artistId: song?.artistId,
            labelId: song?.labelId,
            userId: userId,
            plays: 0,
            skips: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          });

          return true;
        }
      }

      console.log(`userSkippedSong failed ${songId} doesnt exist`, payload);
      return false;
    } catch (error) {
      console.log('userSkippedSong error', error);

      return false;
    }
  }
}
