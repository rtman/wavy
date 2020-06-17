import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { SongPlaylist } from './songPlaylist';
import { UserPlaylist } from './userPlaylist';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity('playlist')
@ObjectType()
export class Playlist {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  imageRef: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  imageUrl: string;

  @Field(() => [SongPlaylist], { nullable: true })
  @OneToMany(
    () => SongPlaylist,
    (songPlaylist) => songPlaylist.playlist
  )
  songs: SongPlaylist[];

  @Field(() => [UserPlaylist], { nullable: true })
  @OneToMany(
    () => UserPlaylist,
    (userPlaylist) => userPlaylist.playlist
  )
  users: UserPlaylist[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
