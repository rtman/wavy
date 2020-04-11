import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { Song } from './song';
// import { SongPlaylist } from './songPlaylist';
// import { User } from './user';
// import { UserPlaylist } from './userPlaylist';

@Entity('playlists')
export class Playlist {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  // @BelongsToMany(
  //   () => Song,
  //   () => SongPlaylist
  // )
  // songs: Array<Song & { SongPlaylist: SongPlaylist }>;

  // @BelongsToMany(
  //   () => User,
  //   () => UserPlaylist
  // )
  // users: Array<User & { UserPlaylist: UserPlaylist }>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
