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
class UpdateUserSongListeningStatsArgs {
  @Field()
  userId: string;

  @Field()
  songId: string;

  @Field()
  city: string;

  @Field()
  geoPoint: admin.firestore.GeoPoint;
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

interface UserListeningStats {
  songId: string;
  albumId: string;
  artistId: string;
  labelId: string;
  userId: string;
  plays: number;
  skips: number;
  location: admin.firestore.GeoPoint;
  createdAt: Date;
  updatedAt: Date;
}

@Resolver()
export class ListeningStatsResolvers {
  @Query(() => [])
  async queryStatsByField(
    @Arg('input') payload: QueryStatsByField
  ): Promise<UserListeningStats[] | undefined> {
    const { field, value } = payload;

    try {
      const userListeningStatsRef = admin
        .firestore()
        .collectionGroup('userStats')
        .where(field, '==', value);

      const result = await userListeningStatsRef.get();
      if (!result.empty) {
        // not safe, but so long as I match it exactly to the schema in the doc it should work
        const data = (result.docs as unknown) as UserListeningStats[];
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

  @Query(() => [])
  async queryStatsByFieldForNumberOfMonths(
    @Arg('input') payload: QueryStatsByFieldAndNumberOfMonths
  ): Promise<UserListeningStats[] | undefined> {
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
        const data = (result.docs as unknown) as UserListeningStats[];
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

  @Query(() => [])
  async queryStatsForCompoundQuery(
    @Arg('input') payload: QueryStatsForCompoundQuery
  ): Promise<UserListeningStats[] | undefined> {
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
        const data = (result.docs as unknown) as UserListeningStats[];
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
    @Arg('input') payload: UpdateUserSongListeningStatsArgs
  ): Promise<boolean> {
    try {
      const { city, userId, songId, geoPoint } = payload;

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
            plays: admin.firestore.FieldValue.increment(1),
            location: geoPoint,
            city,
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
            location: geoPoint,
            city,
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
    @Arg('input') payload: UpdateUserSongListeningStatsArgs
  ): Promise<boolean> {
    try {
      const { userId, songId, geoPoint } = payload;

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
            // geoPoint,
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
            location: geoPoint,
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
