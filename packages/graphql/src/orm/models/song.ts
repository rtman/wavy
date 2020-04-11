import { Artist } from './artist';
import { Album } from './album';
// import { Playlist } from './playlist';
// import { SongPlaylist } from './songPlaylist';
// import { SongArtistSupportingArtist } from './songArtistSupportingArtist';
// import { UserSongFavourites } from './userSongFavourites';
// import { User } from './user';
// import { UserSongRecentlyPlayed } from './userSongRecentlyPlayed';

import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
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

  // @ManyToMany(() => Artist)
  // @JoinTable({name: 'songArtistSupportingArtist'})
  // supportingArtists: Artist[]

  // TODO: Figureout gengres, most likely a many to many assocation
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

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  // @BelongsToMany(
  //   () => User,
  //   () => UserSongFavourites
  // )
  // usersFavourited: Array<User & { UserSongFavourites: UserSongFavourites }>;

  // @BelongsToMany(
  //   () => User,
  //   () => UserSongRecentlyPlayed
  // )
  // usersRecentlyPlayed: Array<
  //   User & { UserSongRecentlyPlayed: UserSongRecentlyPlayed }
  // >;
}
