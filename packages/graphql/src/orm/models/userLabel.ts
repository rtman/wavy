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

@Entity('userLabel')
@ObjectType()
export class UserLabel {
  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  userId: string;

  @Field(() => ID, { nullable: false })
  @PrimaryColumn()
  labelId: string;

  @ManyToOne(
    () => User,
    (user) => user.labels
  )
  @Field(() => User)
  user!: User;

  @ManyToOne(
    () => Label,
    (label) => label.users
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
