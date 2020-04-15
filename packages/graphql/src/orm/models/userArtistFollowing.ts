import {
  Entity,
  Column,
  ManyToOne,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Artist } from './artist';
import { User } from './user';

@Entity('userArtistFollowing')
@ObjectType()
export class UserArtistFollowing {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  userId!: string;

  @Field(() => ID)
  @Column()
  artistId!: string;

  // @Field(() => String)
  // @Field(() => User)
  @ManyToOne(
    () => User,
    (user) => user.following
  )
  user!: User;

  // @Field(() => ID)
  // @Field(() => Artist)
  @ManyToOne(
    () => Artist,
    (artist) => artist.usersFollowing
  )
  artist!: Artist;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
