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

import {Artist} from './artist';
import {Album} from './album';
import {Playlist} from './playlist';
import {SongPlaylist} from './songPlaylist';
import {SongArtistSupportingArtist} from './songArtistSupportingArtist';
import {UserSongFavourites} from './userSongFavourites';
import {User} from './user';
import {UserSongRecentlyPlayed} from './userSongRecentlyPlayed';

@Table({tableName: 'songs'})
export class Song extends Model<Song> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  song_id: string;

  @ForeignKey(() => Artist)
  @Column
  song_artist_id: string;

  @BelongsTo(() => Artist)
  song_artist: Artist;

  @ForeignKey(() => Album)
  @Column
  song_album_id: string;

  @BelongsTo(() => Album)
  song_album: Album;

  @BelongsToMany(
    () => Artist,
    () => SongArtistSupportingArtist,
  )
  song_supporting_artist_ids: Artist[];

  // TODO: Figureout gengres, most likely a many to many assocation
  @Column({type: DataType.ARRAY(DataType.STRING)})
  song_genres: string;

  @Column
  song_url: string;

  @Column
  song_image: string;

  @Column
  song_release_date: Date;

  @BelongsToMany(
    () => Playlist,
    () => SongPlaylist,
  )
  song_playlists: Playlist[];

  @CreatedAt
  @Column
  song_createdAt!: Date;

  @UpdatedAt
  @Column
  song_updatedAt!: Date;

  @BelongsToMany(
    () => User,
    () => UserSongFavourites,
  )
  song_users_favourited: User[];

  @BelongsToMany(
    () => User,
    () => UserSongRecentlyPlayed,
  )
  song_users_recently_played: User[];
}
