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

@Entity('playlist')
export class Playlist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @ManyToMany(
    () => Song,
    (song) => song.playlists
  )
  @JoinTable({ name: 'songPlaylist' })
  songs: Song[];

  @ManyToMany(
    () => User,
    (user) => user.playlists
  )
  @JoinTable({ name: 'userPlaylist' })
  users: User[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
