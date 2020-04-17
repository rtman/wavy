import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './user';
import { Playlist } from './playlist';

@Entity('userPlaylist')
@ObjectType()
export class UserPlaylist {
  @Field(() => String, { nullable: false })
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
  @Field(() => User)
  playlist!: User;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
