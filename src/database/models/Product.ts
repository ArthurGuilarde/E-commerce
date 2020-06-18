import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'
import { IsString, IsNumber, IsDate } from 'class-validator'

@Entity()
@ObjectType()
export class Product extends BaseEntity {
  @Field(() => ID)
  // @PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  @IsString()
  id: string

  @Field(() => String)
  @Column()
  @IsString()
  name: string

  @Field(() => String)
  @Column('text', { default: '' })
  @IsString()
  description: string

  @Field(() => Number)
  @Column({ default: 0 })
  @IsNumber()
  stock: number

  @Field(() => Number)
  @Column({ default: 0.0, type: 'decimal' })
  @IsNumber()
  price: number

  @Field(() => String, { nullable: true })
  @Column('text', { nullable: true })
  @IsString()
  img: string

  @Field(() => Date)
  @CreateDateColumn()
  @IsDate()
  create_at: Date

  @Field(() => Date)
  @UpdateDateColumn()
  @IsDate()
  update_at: Date
}
