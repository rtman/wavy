// import {
//   BelongsToMany,
//   CreatedAt,
//   Column,
//   HasMany,
//   IsUUID,
//   Model,
//   PrimaryKey,
//   UpdatedAt,
//   Table,
// } from 'sequelize-typescript';
import { Album } from './album';
import { Song } from './song';
import { User } from './user';
// import { UserArtistFollowing } from './userArtistFollowing';
import { ObjectType, Field, ID } from 'type-graphql';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('artist')
@ObjectType()
export class Artist {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => [Album])
  @OneToMany(
    () => Album,
    (album) => album.artist
  )
  albums: Album[];

  @Field(() => [Song])
  @OneToMany(
    () => Song,
    (song) => song.artist
  )
  songs: Song[];

  @Field(() => String)
  @Column()
  image: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => [User])
  @ManyToMany(
    () => User,
    (user) => user.following
  )
  @JoinTable({ name: 'userArtistFollowing' })
  usersFollowing: User[];

  @Field(() => [Song])
  @ManyToMany(
    () => Song,
    (song) => song.supportingArtists
  )
  supportingArtistOn: Song[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
