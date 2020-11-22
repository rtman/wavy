import { Field, ID, ObjectType } from 'type-graphql';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

import { Album } from './album';
import { ArtistLabel } from './artistLabel';
import { Song } from './song';
import { SongArtistSupportingArtist } from './songArtistSupportingArtist';
import { UserArtist } from './userArtist';
import { UserArtistFollowing } from './userArtistFollowing';
import { UserSubscriptionEntity } from './userSubscription';

@Entity('artist')
@ObjectType()
export class Artist {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => [Album], { nullable: true })
  @OneToMany(
    () => Album,
    (album) => album.artist
  )
  albums: Album[];

  @Field(() => [Song], { nullable: true })
  @OneToMany(
    () => Song,
    (song) => song.artist
  )
  songs: Song[];

  @Field()
  @Column()
  profileImageStoragePathLarge: string;

  @Field()
  @Column()
  profileImageStoragePathSmall: string;

  @Field()
  @Column()
  profileImageStoragePathThumb: string;

  @Field()
  @Column()
  profileImageUrlLarge: string;

  @Field()
  @Column()
  profileImageUrlSmall: string;

  @Field()
  @Column()
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

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  permissionCode: string;

  // TODO: Doesn't work likely because I'm using sequelize to seed the data and not typeorm, also need to use insert(). If I move to typeorm migration this may work
  @BeforeInsert()
  generatePermissionCode() {
    this.permissionCode = uuid();
  }

  @Field({ nullable: true })
  @Column({ nullable: true })
  claimantEmail: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field(() => UserSubscriptionEntity)
  @Column({ default: UserSubscriptionEntity.ARTIST, update: false })
  type: UserSubscriptionEntity;

  @Field()
  @Column({ default: true })
  claimed: boolean;

  @Field()
  @Column()
  creatorUserId: string;
}
