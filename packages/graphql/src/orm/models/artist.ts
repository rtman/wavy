import { Field, ID, ObjectType } from 'type-graphql';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

import { Album } from './album';
import { ArtistLabel } from './artistLabel';
import { LabelArtistConnections } from './labelArtistConnections';
import { Song } from './song';
import { SongArtistSupportingArtist } from './songArtistSupportingArtist';
import { UserArtist } from './userArtist';
import { UserArtistFollowing } from './userArtistFollowing';
import { SubscriptionEntity } from './userSubscription';

@Entity('artist')
@ObjectType()
export class Artist {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
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

  @Field()
  @Column({ nullable: true })
  profileImageStoragePathLarge: string;

  @Field()
  @Column({ nullable: true })
  profileImageStoragePathSmall: string;

  @Field()
  @Column({ nullable: true })
  profileImageStoragePathThumb: string;

  @Field()
  @Column({ nullable: true })
  profileImageUrlLarge: string;

  @Field()
  @Column({ nullable: true })
  profileImageUrlSmall: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageUrlThumb: string;

  @Field()
  @Column({ nullable: true })
  description?: string;

  @Field(() => [ArtistLabel])
  @OneToMany(
    () => ArtistLabel,
    (artistLabel) => artistLabel.artist
  )
  labels: ArtistLabel[];

  @Field(() => [UserArtistFollowing])
  @OneToMany(
    () => UserArtistFollowing,
    (userArtistFollowing) => userArtistFollowing.artist
  )
  usersFollowing: UserArtistFollowing[];

  @Field({ nullable: true })
  @Column({ default: 0 })
  followers?: number;

  @Field(() => [SongArtistSupportingArtist])
  @OneToMany(
    () => SongArtistSupportingArtist,
    (songArtistSupportingArtist) => songArtistSupportingArtist.artist
  )
  supportingArtistOn: SongArtistSupportingArtist[];

  @Field(() => [UserArtist])
  @OneToMany(
    () => UserArtist,
    (userArtist) => userArtist.artist
  )
  users: UserArtist[];

  // this is a special case, self referencing relation. It requires each entry to be inserted twice, artistId1 => 1, artistId2 => 2 and artistId1 => 2, artistId2 =>2. This is to ensure a bi directional relation.
  @Field(() => [Artist])
  @ManyToMany(
    () => Artist,
    (artist) => artist.artistConnections
  )
  @JoinTable({
    name: 'artistArtistConnections',
    joinColumn: { name: 'primaryArtistId' },
    inverseJoinColumn: { name: 'connectionArtistId' },
  })
  artistConnections: Artist[];

  @Field(() => [LabelArtistConnections])
  @OneToMany(
    () => LabelArtistConnections,
    (labelArtistConnections) => labelArtistConnections.artist
  )
  labelConnections: LabelArtistConnections[];

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  connectionCode: string;

  // TODO: Doesn't work likely because I'm using sequelize to seed the data and not typeorm, also need to use insert(). If I move to typeorm migration this may work
  @BeforeInsert()
  generateConnectionCode() {
    this.connectionCode = uuid();
  }

  @Field({ nullable: true })
  @Column({ nullable: true })
  inviteEmail: string;

  @Field(() => Date, { nullable: true })
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field(() => SubscriptionEntity)
  @Column({ default: SubscriptionEntity.ARTIST, update: false })
  type: SubscriptionEntity;
}
