import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ImageUrls } from './song';
import { SongPlaylist } from './songPlaylist';
import { UserPlaylist } from './userPlaylist';
import { UserPlaylistFollowing } from './userPlaylistFollowing';

@Entity('playlist')
@ObjectType()
export class Playlist {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  profileImageStoragePath: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  profileImageUrlLarge: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  profileImageUrlMedium: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  profileImageUrlSmall: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  profileImageUrlThumb: string;

  @Field(() => [SongPlaylist], { nullable: true })
  @OneToMany(
    () => SongPlaylist,
    (songPlaylist) => songPlaylist.playlist
  )
  songs: SongPlaylist[];

  @Field(() => [UserPlaylist], { nullable: true })
  @OneToMany(
    () => UserPlaylist,
    (userPlaylist) => userPlaylist.playlist
  )
  users: UserPlaylist[];

  @Field(() => [UserPlaylistFollowing], { nullable: true })
  @OneToMany(
    () => UserPlaylistFollowing,
    (userPlaylistFollowing) => userPlaylistFollowing.playlist
  )
  usersFollowing: UserPlaylistFollowing[];

  @Field(() => Number)
  @Column({ default: 0 })
  followers: number;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
