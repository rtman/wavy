import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Artist } from './artist';
import { Song } from './song';

@Entity('album')
export class Album {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(
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
