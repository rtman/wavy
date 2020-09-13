import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Artist } from './artist';
import { Label } from './label';
import { Song } from './song';

@Entity('album')
@ObjectType()
export class Album {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column()
  artistId: string;

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

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  labelId: string;

  @Field(() => Label, { nullable: true })
  @ManyToOne(
    () => Label,
    (label) => label.albums
  )
  label: Label;

  @Field(() => String)
  @Column()
  profileImageStoragePathLarge: string;

  @Field(() => String)
  @Column()
  profileImageStoragePathSmall: string;

  @Field(() => String)
  @Column()
  profileImageStoragePathThumb: string;

  @Field(() => String)
  @Column()
  profileImageUrlLarge: string;

  @Field(() => String)
  @Column()
  profileImageUrlSmall: string;

  @Field(() => String)
  @Column()
  profileImageUrlThumb: string;

  @Field(() => String)
  @Column({ default: '' })
  description: string;

  // TODO: add supporting artists to album

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field(() => Boolean)
  processing: boolean;
}
