import {
  CreatedAt,
  Column,
  IsUUID,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import {DataTypes} from 'sequelize';
import {Artist} from './artist';
import {Album} from './album';

@Table({tableName: 'songs'})
export class Song extends Model<Song> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  song_id: string;
  @ForeignKey(() => Artist)
  @Column
  song_artist_id: string;
  @ForeignKey(() => Album)
  @Column
  song_album_id: string;
  @Column({type: DataTypes.ARRAY(DataTypes.UUID)})
  song_supporting_artist_ids: string[];
  @Column({type: DataTypes.ARRAY(DataTypes.UUID)})
  song_genres: string;
  @Column
  song_url: string;
  @Column
  song_image: string;
  @Column
  song_release_date: Date;
  @CreatedAt
  @Column
  song_createdAt!: Date;
  @UpdatedAt
  @Column
  song_updatedAt!: Date;
}
