import { Field, ID, ObjectType } from 'type-graphql';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Artist } from './artist';

@Entity('artistArtistConnections')
@ObjectType()
export class ArtistArtistConnections {
  @ManyToOne(
    () => Artist,
    (artist) => artist.artistConnections
  )
  @Field(() => Artist)
  artist1!: Artist;

  @ManyToOne(
    () => Artist,
    (artist) => artist.artistConnections
  )
  @Field(() => Artist)
  artist2!: Artist;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
