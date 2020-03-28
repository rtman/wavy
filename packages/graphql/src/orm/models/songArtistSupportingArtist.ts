import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey
} from 'sequelize-typescript';
import { Song } from './song';
import { Artist } from './artist';

@Table({ tableName: 'songArtistSupportingArtist' })
export class SongArtistSupportingArtist extends Model<
  SongArtistSupportingArtist
> {
  @ForeignKey(() => Song)
  @PrimaryKey
  @Column
  songId: string;

  @ForeignKey(() => Artist)
  @PrimaryKey
  @Column
  artistId: string;
}
