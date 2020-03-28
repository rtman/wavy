import {
  BelongsToMany,
  BelongsTo,
  CreatedAt,
  Column,
  DataType,
  IsUUID,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table,
  ForeignKey,
} from 'sequelize-typescript';

import { Artist } from './artist';
import { Album } from './album';
import { Playlist } from './playlist';
import { SongPlaylist } from './songPlaylist';
import { SongArtistSupportingArtist } from './songArtistSupportingArtist';
import { UserSongFavourites } from './userSongFavourites';
import { User } from './user';
import { UserSongRecentlyPlayed } from './userSongRecentlyPlayed';

@Table({ tableName: 'songs' })
export class Song extends Model<Song> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @ForeignKey(() => Artist)
  @Column
  artistId: string;

  @BelongsTo(() => Artist)
  artist: Artist;

  @ForeignKey(() => Album)
  @Column
  albumId: string;

  @BelongsTo(() => Album)
  album: Album;

  @BelongsToMany(
    () => Artist,
    () => SongArtistSupportingArtist
  )
  supportingArtists: Array<
    Artist & { SongArtistSupportingArtist: SongArtistSupportingArtist }
  >;

  // TODO: Figureout gengres, most likely a many to many assocation
  @Column({ type: DataType.ARRAY(DataType.STRING) })
  genres: string[];

  @Column
  title: string;

  @Column
  url: string;

  @Column
  image: string;

  @Column
  releaseDate: Date;

  @BelongsToMany(
    () => Playlist,
    () => SongPlaylist
  )
  playlists: Array<Playlist & { SongPlaylist: SongPlaylist }>;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @BelongsToMany(
    () => User,
    () => UserSongFavourites
  )
  usersFavourited: Array<User & { UserSongFavourites: UserSongFavourites }>;

  @BelongsToMany(
    () => User,
    () => UserSongRecentlyPlayed
  )
  usersRecentlyPlayed: Array<
    User & { UserSongRecentlyPlayed: UserSongRecentlyPlayed }
  >;
}
