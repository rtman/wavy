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

@Entity('userSongFavourites')
@ObjectType()
export class UserSongFavourites {
  @Field(() => String)
  @PrimaryColumn()
  userId: string;

  @Field(() => ID)
  @PrimaryColumn()
  songId: string;

  @ManyToOne(
    () => User,
    (user) => user.favourites
  )
  @Field(() => User)
  user!: User;

  @ManyToOne(
    () => Song,
    (song) => song.usersFavourited
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
