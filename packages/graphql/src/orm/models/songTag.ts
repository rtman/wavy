import { Field, ID, ObjectType } from 'type-graphql';
import {
  CreateDateColumn,
  Entity,
  // Column,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Song } from './song';
import { Tag } from './tag';

@Entity('songTag')
@ObjectType()
export class SongTag {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  songId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  tagId: string;

  @ManyToOne(
    () => Song,
    (song) => song.tags
  )
  @Field(() => Song)
  song!: Song;

  @ManyToOne(
    () => Tag,
    (tag) => tag.songs
  )
  @Field(() => Tag)
  tag!: Tag;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
