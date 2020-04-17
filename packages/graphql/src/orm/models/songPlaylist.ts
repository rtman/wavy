import {
  Entity,
  PrimaryColumn,
  // Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Song } from './song';
import { Playlist } from './playlist';

@Entity('songPlaylist')
@ObjectType()
export class SongPlaylist {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  songId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  playlistId: string;

  // TODO: Add order or songs
  // @Field(() => Number)
  // @Column()
  // order: number;

  @ManyToOne(
    () => Song,
    (song) => song.playlists
  )
  @Field(() => Song)
  song!: Song;

  @ManyToOne(
    () => Playlist,
    (playlist) => playlist.songs
  )
  @Field(() => Playlist)
  playlist!: Playlist;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
