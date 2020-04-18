import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { SongArtistSupportingArtist } from './songArtistSupportingArtist';
import { UserSongFavourites } from './userSongFavourites';
import { UserSongRecentlyPlayed } from './userSongRecentlyPlayed';
import { SongPlaylist } from './songPlaylist';
import { Artist } from './artist';
import { Album } from './album';

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

  // TODO: Figureout genres, most likely a many to many assocation
  // @Column()
  // genres: string[];

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  url: string;

  @Field(() => String)
  @Column()
  image: string;

  @Field(() => Date)
  @Column()
  releaseDate: Date;

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
    (userSongRecentlyPlayed) => userSongRecentlyPlayed.user
  )
  usersRecentlyPlayed: UserSongRecentlyPlayed[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
