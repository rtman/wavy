import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './user';
import { Song } from './song';

@Entity('userSongRecentlyPlayed')
@ObjectType()
export class UserSongRecentlyPlayed {
  @Field(() => ID)
  @PrimaryColumn()
  userId: string;

  @Field(() => ID)
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
