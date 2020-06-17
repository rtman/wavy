import { Artist } from './artist';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Song } from './song';

@Entity('songArtistSupportingArtist')
@ObjectType()
export class SongArtistSupportingArtist {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  songId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  artistId: string;

  @ManyToOne(
    () => Song,
    (song) => song.supportingArtists
  )
  @Field(() => Song)
  song!: Song;

  @ManyToOne(
    () => Artist,
    (artist) => artist.supportingArtistOn
  )
  @Field(() => Artist)
  artist!: Artist;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
