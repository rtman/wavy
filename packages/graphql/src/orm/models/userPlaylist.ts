import { Field, ID, ObjectType } from 'type-graphql';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Playlist } from './playlist';
import { User } from './user';

@Entity('userPlaylist')
@ObjectType()
export class UserPlaylist {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  userId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  playlistId: string;

  @ManyToOne(
    () => User,
    (user) => user.playlists
  )
  @Field(() => User)
  user!: User;

  @ManyToOne(
    () => Playlist,
    (playlist) => playlist.users
  )
  @Field(() => Playlist)
  playlist!: Playlist;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
