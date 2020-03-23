import {
  BelongsTo,
  CreatedAt,
  Column,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import {DataTypes} from 'sequelize';
import {Artist} from './artist';
import {Song} from './song';

@Table({tableName: 'albums'})
export class Album extends Model<Album> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  album_id: string;

  @ForeignKey(() => Artist)
  @Column
  album_artist_id: string;

  @BelongsTo(() => Artist)
  album_artist: Artist;

  @Column
  album_title: string;

  @HasMany(() => Song)
  album_songs: Song[];

  @Column
  album_image: string;

  @Column
  album_description: string;

  // TODO: add supporting artists to album

  @CreatedAt
  @Column
  album_createdAt!: Date;

  @UpdatedAt
  @Column
  album_updatedAt!: Date;
}
