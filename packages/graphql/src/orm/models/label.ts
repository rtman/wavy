import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Album } from './album';
import { ArtistLabel } from './artistLabel';
import { LabelArtistConnections } from './labelArtistConnections';
import { Song } from './song';
import { UserLabel } from './userLabel';
import { UserLabelFollowing } from './userLabelFollowing';

@Entity('label')
@ObjectType()
export class Label {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  profileImageStoragePathLarge: string;

  @Field(() => String)
  @Column()
  profileImageStoragePathSmall: string;

  @Field(() => String)
  @Column()
  profileImageStoragePathThumb: string;

  @Field(() => String)
  @Column()
  profileImageUrlLarge: string;

  @Field(() => String)
  @Column()
  profileImageUrlSmall: string;

  @Field(() => String)
  @Column()
  profileImageUrlThumb: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => [ArtistLabel], { nullable: true })
  @OneToMany(
    () => ArtistLabel,
    (artistLabel) => artistLabel.label
  )
  artists: ArtistLabel[];

  @Field(() => [Album], { nullable: true })
  @OneToMany(
    () => Album,
    (album) => album.label
  )
  albums: Album[];

  @Field(() => [Song], { nullable: true })
  @OneToMany(
    () => Song,
    (song) => song.label
  )
  songs: Song[];

  @Field(() => [UserLabel], { nullable: true })
  @OneToMany(
    () => UserLabel,
    (userLabel) => userLabel.label
  )
  users: UserLabel[];

  @Field(() => [UserLabelFollowing], { nullable: true })
  @OneToMany(
    () => UserLabelFollowing,
    (userLabelFollowing) => userLabelFollowing.label
  )
  usersFollowing: UserLabelFollowing[];

  @Field(() => [LabelArtistConnections], { nullable: true })
  @OneToMany(
    () => LabelArtistConnections,
    (labelArtistConnections) => labelArtistConnections.label
  )
  artistConnections: LabelArtistConnections[];

  @Field(() => Number)
  @Column({ default: 0 })
  followers: number;

  @Field(() => ID)
  @Generated('uuid')
  connectionCode: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
