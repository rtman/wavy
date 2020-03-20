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

@Table({tableName: 'albums'})
export class Album extends Model<Album> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  album_id: string;
  @ForeignKey(() => Artist)
  @Column
  album_artist_id: string;
  @Column
  album_title: string;
  @Column({type: DataTypes.ARRAY(DataTypes.UUID)})
  album_supporting_artist_ids: string[];
  @Column({type: DataTypes.ARRAY(DataTypes.UUID)})
  album_song_ids: string[];
  @Column
  album_image: string;
  @Column
  album_description: string;
  @CreatedAt
  @Column
  album_createdAt!: Date;
  @UpdatedAt
  @Column
  album_updatedAt!: Date;
}
