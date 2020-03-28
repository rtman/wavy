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
import {Artist} from './artist';
import {Song} from './song';

@Table({tableName: 'albums'})
export class Album extends Model<Album> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @ForeignKey(() => Artist)
  @Column
  artistId: string;

  @BelongsTo(() => Artist)
  artist: Artist;

  @Column
  title: string;

  @HasMany(() => Song)
  songs: Song[];

  @Column
  image: string;

  @Column
  description: string;

  // TODO: add supporting artists to album

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
