import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class ListeningStats {
  @Field(() => ID)
  songId: string;

  @Field(() => ID)
  albumId: string;

  @Field(() => ID)
  artistId: string;

  @Field(() => ID)
  labelId: string;

  @Field(() => String)
  userId: string;

  @Field(() => Number)
  plays: number;

  @Field(() => Number)
  skips: number;

  @Field(() => String)
  city: string;

  @Field(() => String)
  country: string;

  @Field(() => Number)
  lat: number;

  @Field(() => Number)
  lng: number;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}
