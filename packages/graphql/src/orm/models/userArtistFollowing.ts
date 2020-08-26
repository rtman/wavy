import { Field, ID, ObjectType } from 'type-graphql';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Artist } from './artist';
import { User } from './user';

@Entity('userArtistFollowing')
@ObjectType()
export class UserArtistFollowing {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  userId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  artistId: string;

  @ManyToOne(
    () => User,
    (user) => user.artistFollows
  )
  @Field(() => User)
  user!: User;

  @ManyToOne(
    () => Artist,
    (artist) => artist.usersFollowing
  )
  @Field(() => Artist)
  artist!: Artist;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
