import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';
import {Song} from './song';
import {Artist} from './artist';

@Table({tableName: 'song_artist_supporting_artist'})
export class SongArtistSupportingArtist extends Model<
  SongArtistSupportingArtist
> {
  @ForeignKey(() => Song)
  @PrimaryKey
  @Column
  song_id: string;

  @ForeignKey(() => Artist)
  @PrimaryKey
  @Column
  artist_id: string;
}
