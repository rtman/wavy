import { Field, ID, ObjectType } from 'type-graphql';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Artist } from './artist';
import { Label } from './label';

@Entity('artistLabel')
@ObjectType()
export class ArtistLabel {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  artistId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  labelId: string;

  @ManyToOne(
    () => Artist,
    (artist) => artist.labels
  )
  @Field(() => Artist)
  artist!: Artist;

  @ManyToOne(
    () => Label,
    (label) => label.artists
  )
  @Field(() => Label)
  label!: Label;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
