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
