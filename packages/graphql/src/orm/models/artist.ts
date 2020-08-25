import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Album } from './album';
import { ArtistLabel } from './artistLabel';
import { Song } from './song';
import { SongArtistSupportingArtist } from './songArtistSupportingArtist';
import { UserArtist } from './userArtist';
import { UserArtistFollowing } from './userArtistFollowing';

@Entity('artist')
@ObjectType()
export class Artist {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => [Album])
  @OneToMany(
    () => Album,
    (album) => album.artist
  )
  albums: Album[];

  @Field(() => [Song])
  @OneToMany(
    () => Song,
    (song) => song.artist
  )
  songs: Song[];

  @Field(() => String)
  @Column()
  imageRef: string;

  @Field(() => String)
  @Column()
  imageUrl: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => [ArtistLabel], { nullable: true })
  @OneToMany(
    () => ArtistLabel,
    (artistLabel) => artistLabel.artist
  )
  labels: ArtistLabel[];

  @Field(() => [UserArtistFollowing], { nullable: true })
  @OneToMany(
    () => UserArtistFollowing,
    (userArtistFollowing) => userArtistFollowing.artist
  )
  usersFollowing: UserArtistFollowing[];

  @Field(() => Number)
  @Column({ default: 0 })
  followers: number;

  @Field(() => [SongArtistSupportingArtist], { nullable: true })
  @OneToMany(
    () => SongArtistSupportingArtist,
    (songArtistSupportingArtist) => songArtistSupportingArtist.artist
  )
  supportingArtistOn: SongArtistSupportingArtist[];

  @Field(() => [UserArtist], { nullable: true })
  @OneToMany(
    () => UserArtist,
    (userArtist) => userArtist.artist
  )
  users: UserArtist[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
