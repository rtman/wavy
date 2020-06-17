import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Album } from './album';
import { ArtistLabel } from './artistLabel';
import { Song } from './song';
import { UserArtistFollowing } from './userArtistFollowing';
import { SongArtistSupportingArtist } from './songArtistSupportingArtist';

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

  @Field(() => [SongArtistSupportingArtist], { nullable: true })
  @OneToMany(
    () => SongArtistSupportingArtist,
    (songArtistSupportingArtist) => songArtistSupportingArtist.artist
  )
  supportingArtistOn: SongArtistSupportingArtist[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
