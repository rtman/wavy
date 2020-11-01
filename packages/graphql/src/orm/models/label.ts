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
import { LabelArtistConnections } from './labelArtistConnections';
import { Song } from './song';
import { UserLabel } from './userLabel';
import { UserLabelFollowing } from './userLabelFollowing';
import { SubscriptionEntity } from './userSubscription';

@Entity('label')
@ObjectType()
export class Label {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

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
  @Column({ nullable: true })
  connectionCode: string;

  // TODO: Doesn't work likely because I'm using sequelize to seed the data and not typeorm, also need to use insert(). If I move to typeorm migration this may work
  @BeforeInsert()
  generateConnectionCode() {
    this.connectionCode = uuid();
  }

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field(() => SubscriptionEntity)
  @Column({ default: SubscriptionEntity.LABEL, update: false })
  type: SubscriptionEntity;
}
