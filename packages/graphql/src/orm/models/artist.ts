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
export class Artist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    () => Album,
    (album) => album.artist
  )
  albums: Album[];

  @OneToMany(
    () => Song,
    (song) => song.artist
  )
  songs: Song[];

  @Column()
  image: string;

  @Column()
  description: string;

  @ManyToMany(
    () => User,
    (user) => user.following
  )
  @JoinTable({ name: 'userArtistFollowing' })
  usersFollowing: User[];

  @ManyToMany(
    () => Song,
    (song) => song.supportingArtists
  )
  supportingArtistOn: Song[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
