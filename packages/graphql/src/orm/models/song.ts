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

import { Album } from './album';
import { Artist } from './artist';
import { Label } from './label';
import { SongArtistSupportingArtist } from './songArtistSupportingArtist';
import { SongPlaylist } from './songPlaylist';
import { UserSongFavourites } from './userSongFavourites';
import { UserSongRecentlyPlayed } from './userSongRecentlyPlayed';

@Entity('song')
@ObjectType()
export class Song {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column()
  artistId: string;

  @Field(() => Artist)
  @ManyToOne(
    () => Artist,
    (artist) => artist.songs
  )
  artist: Artist;

  @Field(() => ID)
  @Column()
  albumId: string;

  @Field(() => Album)
  @ManyToOne(
    () => Album,
    (album) => album.songs
  )
  album: Album;

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  labelId: string;

  @Field(() => Label, { nullable: true })
  @ManyToOne(
    () => Label,
    (label) => label.songs
  )
  label: Label;

  // TODO: Figureout genres, most likely a many to many assocation
  // @Column()
  // genres: string[];

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  ref: string;

  @Field(() => String)
  @Column()
  url: string;

  @Field(() => String)
  @Column()
  imageRef: string;

  @Field(() => String)
  @Column()
  imageUrl: string;

  @Field(() => Date)
  @Column({ default: new Date() })
  releaseDate: Date;

  @Field(() => Number)
  @Column({ default: 0 })
  playCount: number;

  @Field(() => [SongArtistSupportingArtist], { nullable: true })
  @OneToMany(
    () => SongArtistSupportingArtist,
    (songArtistSupportingArtist) => songArtistSupportingArtist.song
  )
  supportingArtists: SongArtistSupportingArtist[];

  @Field(() => [SongPlaylist], { nullable: true })
  @OneToMany(
    () => SongPlaylist,
    (songPlaylist) => songPlaylist.song
  )
  playlists: SongPlaylist[];

  @Field(() => [UserSongFavourites], { nullable: true })
  @OneToMany(
    () => UserSongFavourites,
    (userSongFavourites) => userSongFavourites.song
  )
  usersFavourited: UserSongFavourites[];

  @Field(() => [UserSongRecentlyPlayed], { nullable: true })
  @OneToMany(
    () => UserSongRecentlyPlayed,
    (userSongRecentlyPlayed) => userSongRecentlyPlayed.song
  )
  usersRecentlyPlayed: UserSongRecentlyPlayed[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
