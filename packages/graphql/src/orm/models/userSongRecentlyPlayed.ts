import { Field, ID, ObjectType } from 'type-graphql';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Song } from './song';
import { User } from './user';

@Entity('userSongRecentlyPlayed')
@ObjectType()
export class UserSongRecentlyPlayed {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  userId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  songId: string;

  @ManyToOne(
    () => User,
    (user) => user.recentlyPlayed
  )
  @Field(() => User)
  user!: User;

  @ManyToOne(
    () => Song,
    (song) => song.usersRecentlyPlayed
  )
  @Field(() => Song)
  song!: Song;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
