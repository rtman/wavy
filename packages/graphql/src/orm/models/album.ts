import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Artist } from './artist';
import { Song } from './song';

@Entity('albums')
export class Album {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @OneToMany(
    () => Artist,
    (artist) => artist.albums
  )
  artist: Artist;

  @Column()
  title: string;

  @OneToMany(
    () => Song,
    (song) => song.album
  )
  songs: Song[];

  @Column()
  image: string;

  @Column()
  description: string;

  // TODO: add supporting artists to album

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
