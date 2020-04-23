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
import { ObjectType, Field, ID } from 'type-graphql';

@Entity('album')
@ObjectType()
export class Album {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Artist)
  @ManyToOne(
    () => Artist,
    (artist) => artist.albums
  )
  artist: Artist;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => [Song])
  @OneToMany(
    () => Song,
    (song) => song.album
  )
  songs: Song[];

  @Field(() => String)
  @Column()
  image: string;

  @Field(() => String)
  @Column()
  description: string;

  // TODO: add supporting artists to album

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
