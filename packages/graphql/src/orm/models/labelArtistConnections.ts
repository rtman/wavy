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

@Entity('labelArtistConnections')
@ObjectType()
export class LabelArtistConnections {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  labelId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  artistId: string;

  @ManyToOne(
    () => Label,
    (label) => label.artistConnections
  )
  @Field(() => Label)
  label!: Label;

  @ManyToOne(
    () => Artist,
    (artist) => artist.labelConnections
  )
  @Field(() => Artist)
  artist!: Artist;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
