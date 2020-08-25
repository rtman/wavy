import { Field, ID, ObjectType } from 'type-graphql';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Label } from './label';
import { User } from './user';

@Entity('userLabelFollowing')
@ObjectType()
export class UserLabelFollowing {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  userId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  labelId: string;

  @ManyToOne(
    () => User,
    (user) => user.followingLabels
  )
  @Field(() => User)
  user!: User;

  @ManyToOne(
    () => Label,
    (label) => label.usersFollowing
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
