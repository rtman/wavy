import { Field, ID, ObjectType, registerEnumType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum PermissionEntityEnum {
  ARTIST = 'Artist',
  LABEL = 'Label',
}

registerEnumType(PermissionEntityEnum, {
  name: 'PermissionEntityEnum',
});

@Entity('permission')
@ObjectType()
export class Permission {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column()
  requestorId: string;

  @Field(() => PermissionEntityEnum)
  @Column()
  requestorEntity: PermissionEntityEnum;

  @Field(() => ID)
  @Column()
  requesteeId: string;

  @Field(() => PermissionEntityEnum)
  @Column()
  requesteeEntity: PermissionEntityEnum;

  @Field()
  @Column({ default: false })
  createMusic: boolean;

  @Field()
  @Column({ default: false })
  createSupportingArtist: boolean;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
