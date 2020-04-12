import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Song } from './song';
// import { SongPlaylist } from './songPlaylist';
import { User } from './user';
// import { UserPlaylist } from './userPlaylist';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity('playlist')
@ObjectType()
export class Playlist {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column()
  image: string;

  @Field(() => [Song])
  @ManyToMany(
    () => Song,
    (song) => song.playlists
  )
  @JoinTable({ name: 'songPlaylist' })
  songs: Song[];

  @Field(() => [User])
  @ManyToMany(
    () => User,
    (user) => user.playlists
  )
  @JoinTable({ name: 'userPlaylist' })
  users: User[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
