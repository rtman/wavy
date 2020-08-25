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

@Entity('userPlaylistFollowing')
@ObjectType()
export class UserPlaylistFollowing {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  userId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  labelId: string;

  @ManyToOne(
    () => User,
    (user) => user.followingLabels
  )
  @Field(() => User)
  user!: User;

  @ManyToOne(
    () => Playlist,
    (playlist) => playlist.usersFollowing
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
