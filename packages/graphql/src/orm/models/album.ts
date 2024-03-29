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
import { UserSubscriptionEntity } from './userSubscription';

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
  @ManyToOne(() => Artist, (artist) => artist.albums)
  artist: Artist;

  @Field()
  @Column()
  title: string;

  @Field(() => [Song], { nullable: true })
  @OneToMany(() => Song, (song) => song.album)
  songs: Song[];

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  labelId?: string;

  @Field(() => Label, { nullable: true })
  @ManyToOne(() => Label, (label) => label.albums)
  label?: Label;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageStoragePathLarge?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageStoragePathSmall?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageStoragePathThumb?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageUrlLarge?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageUrlSmall?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageUrlThumb?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => Date)
  @Column()
  releaseDate: Date;

  // TODO: add supporting artists to album

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field()
  @Column({ default: true })
  processing: boolean;

  @Field(() => UserSubscriptionEntity)
  @Column({ default: UserSubscriptionEntity.ALBUM, update: false })
  type: UserSubscriptionEntity;

  @Field()
  @Column({ default: true })
  active: boolean;
}
