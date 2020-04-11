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
// import { User } from './user';
// import { UserArtistFollowing } from './userArtistFollowing';

import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('artists')
export class Artist {
  @PrimaryColumn({ type: 'uuid' })
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

  // @BelongsToMany(
  //   () => User,
  //   () => UserArtistFollowing
  // )
  // usersFollowing: Array<User & { UserArtistFollowing: UserArtistFollowing }>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
