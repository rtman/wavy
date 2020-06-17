import { Artist } from './artist';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Label } from './label';
import { Song } from './song';

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

  @Field(() => Label, { nullable: true })
  @ManyToOne(
    () => Label,
    (label) => label.albums
  )
  label: Label;

  @Field(() => String)
  @Column()
  imageRef: string;

  @Field(() => String)
  @Column()
  imageUrl: string;

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
