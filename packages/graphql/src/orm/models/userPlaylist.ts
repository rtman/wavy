import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './user';
import { Playlist } from './playlist';

@Entity('userPlaylist')
@ObjectType()
export class UserPlaylist {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  userId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
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
