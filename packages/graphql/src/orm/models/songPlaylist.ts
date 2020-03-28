import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey
} from 'sequelize-typescript';
import { Song } from './song';
import { Playlist } from './playlist';

@Table({ tableName: 'songPlaylist' })
export class SongPlaylist extends Model<SongPlaylist> {
  @ForeignKey(() => Song)
  @PrimaryKey
  @Column
  songId: string;

  @ForeignKey(() => Playlist)
  @PrimaryKey
  @Column
  playlistId: string;
}
