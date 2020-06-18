import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'
import { IsString, IsDate } from 'class-validator'

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  // @PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  @IsString()
  id: string

  @Field(() => String)
  @Column()
  @IsString()
  email: string

  @Field(() => String)
  @Column()
  @IsString()
  password: string

  @Field(() => String)
  @Column({ default: 'User' })
  @IsString()
  profile: string

  @Field(() => Date)
  @CreateDateColumn()
  @IsDate()
  create_at: Date

  @Field(() => Date)
  @UpdateDateColumn()
  @IsDate()
  update_at: Date
}
