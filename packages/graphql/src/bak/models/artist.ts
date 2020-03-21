import {
  CreatedAt,
  Column,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table,
} from 'sequelize-typescript';
import {DataTypes} from 'sequelize';
import {Album} from './album';
import {Song} from './song';

@Table({tableName: 'artists'})
export class Artist extends Model<Artist> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  artist_id: string;
  @Column
  artist_name: string;
  @HasMany(() => Album)
  artist_albums: Album[];
  @HasMany(() => Song)
  artist_songs: Song[];
  @Column({type: DataTypes.ARRAY(DataTypes.UUID)})
  artist_song_ids: string;
  @Column
  artist_image: string;
  @Column
  artist_description: string;
  @CreatedAt
  @Column
  artist_createdAt!: Date;
  @UpdatedAt
  @Column
  artist_updatedAt!: Date;
}
