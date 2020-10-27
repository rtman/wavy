import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Artist } from './artist';
import { Label } from './label';
import { Song } from './song';
import { SubscriptionEntity } from './userSubscription';

@Entity('album')
@ObjectType()
export class Album {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column()
  artistId: string;

  @Field(() => Artist)
  @ManyToOne(
    () => Artist,
    (artist) => artist.albums
  )
  artist: Artist;

  @Field()
  @Column()
  title: string;

  @Field(() => [Song])
  @OneToMany(
    () => Song,
    (song) => song.album
  )
  songs: Song[];

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  labelId?: string;

  @Field(() => Label, { nullable: true })
  @ManyToOne(
    () => Label,
    (label) => label.albums
  )
  label?: Label;

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

  @Field()
  @Column({ nullable: true })
  profileImageUrlThumb: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => Date)
  @Column()
  releaseDate: Date;

  // TODO: add supporting artists to album

  @Field(() => Date, { nullable: true })
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field(() => Boolean)
  @Column()
  processing: boolean;

  @Field(() => SubscriptionEntity)
  @Column({ default: SubscriptionEntity.ALBUM, update: false })
  type: SubscriptionEntity;
}
