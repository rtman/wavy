import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
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
