import { Artist } from './artist';
import { Album } from './album';
import { Playlist } from './playlist';
// import { SongPlaylist } from './songPlaylist';
// import { SongArtistSupportingArtist } from './songArtistSupportingArtist';
// import { UserSongFavourites } from './userSongFavourites';
import { User } from './user';
// import { UserSongRecentlyPlayed } from './userSongRecentlyPlayed';

import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('songs')
export class Song {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  // @ForeignKey(() => Artist)
  // @Column
  // artistId: string;

  @ManyToOne(
    () => Artist,
    (artist) => artist.songs
  )
  artist: Artist;

  // @ForeignKey(() => Album)
  // @Column
  // albumId: string;

  @ManyToOne(
    () => Album,
    (album) => album.songs
  )
  album: Album;

  @ManyToMany(
    () => Artist,
    (artist) => artist.supportingArtists
  )
  @JoinTable({ name: 'songArtistSupportingArtist' })
  supportingArtists: Artist[];

  // TODO: Figureout genres, most likely a many to many assocation
  // @Column()
  // genres: string[];

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  image: string;

  @Column()
  releaseDate: Date;

  @ManyToMany(
    () => Playlist,
    (playlist) => playlist.songs
  )
  @JoinTable({ name: 'songPlaylist' })
  playlists: Playlist[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToMany(
    () => User,
    (user) => user.favourites
  )
  @JoinTable({ name: 'userSongFavourites' })
  usersFavourited: User[];

  @ManyToMany(
    () => User,
    (user) => user.recentlyPlayed
  )
  @JoinTable({ name: 'userSongRecentlyPlayed' })
  usersRecentlyPlayed: Song[];
}
