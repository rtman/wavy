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
import { SongTag } from './songTag';
import { UserSongFavourites } from './userSongFavourites';
// import { UserSongRecentlyPlayed } from './userSongRecentlyPlayed';

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

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  storagePathHigh: string;

  @Field(() => String)
  @Column()
  storagePathMedium: string;

  @Field(() => String)
  @Column()
  storagePathLow: string;

  @Field(() => String)
  @Column()
  urlHigh: string;

  @Field(() => String)
  @Column()
  urlMedium: string;

  @Field(() => String)
  @Column()
  urlLow: string;

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

  @Field(() => [SongTag], { nullable: true })
  @OneToMany(
    () => SongTag,
    (songTag) => songTag.song
  )
  tags: SongTag[];

  @Field(() => String)
  @Column({ default: '' })
  tagSearchString: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
