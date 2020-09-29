import { Field, ID, ObjectType } from 'type-graphql';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

import { Album } from './album';
// import { ArtistArtistConnections } from './artistArtistConnections';
import { ArtistLabel } from './artistLabel';
import { LabelArtistConnections } from './labelArtistConnections';
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

  @Field(() => String, { nullable: true })
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

  // this is a special case, self referencing relation. It requires each entry to be inserted twice, artistId1 => 1, artistId2 => 2 and artistId1 => 2, artistId2 =>2. This is to ensure a bi directional relation.
  @Field(() => [Artist], { nullable: true })
  @ManyToMany(
    () => Artist,
    (artist) => artist.artistConnections
  )
  @JoinTable({
    name: 'artistArtistConnections',
    joinColumn: { name: 'primaryId' },
    inverseJoinColumn: { name: 'connectionId' },
  })
  artistConnections: Artist[];

  @Field(() => [LabelArtistConnections], { nullable: true })
  @OneToMany(
    () => LabelArtistConnections,
    (labelArtistConnections) => labelArtistConnections.artist
  )
  labelConnections: LabelArtistConnections[];

  @Field(() => ID)
  @Column({ nullable: true })
  connectionCode: string;

  // TODO: Doesn't work likely because I'm using sequelize to seed the data and not typeorm. If I move to typeorm migration this may work
  // @BeforeInsert()
  // generateConnectionCode() {
  //   this.connectionCode = uuid();
  // }

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
