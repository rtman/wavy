import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Album } from './album';
import { ArtistLabel } from './artistLabel';
import { Song } from './song';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity('label')
@ObjectType()
export class Label {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  imageRef: string;

  @Field(() => String)
  @Column()
  imageUrl: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => [ArtistLabel], { nullable: true })
  @OneToMany(
    () => ArtistLabel,
    (artistLabel) => artistLabel.label
  )
  artists: ArtistLabel[];

  @Field(() => [Album], { nullable: true })
  @OneToMany(
    () => Album,
    (album) => album.label
  )
  albums: Album[];

  @Field(() => [Song], { nullable: true })
  @OneToMany(
    () => Song,
    (song) => song.label
  )
  songs: Song[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
