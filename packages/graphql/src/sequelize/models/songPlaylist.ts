import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';
import {Song} from './song';
import {Playlist} from './playlist';

@Table({tableName: 'song_playlist'})
export class SongPlaylist extends Model<SongPlaylist> {
  @ForeignKey(() => Song)
  @PrimaryKey
  @Column
  song_id: string;

  @ForeignKey(() => Playlist)
  @PrimaryKey
  @Column
  playlist_id: string;
}
