import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'
import { IsString, IsNumber, IsDate } from 'class-validator'

import { User } from '../models/User'
import { Product } from '../models/Product'

@Entity()
@ObjectType()
export class Order extends BaseEntity {
  @Field(() => ID)
  // @PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  @IsString()
  id: string

  @Field(() => User)
  @ManyToOne((type) => User, (user) => user.id, { eager: true })
  @JoinTable()
  user: User

  @Field(() => Product)
  @ManyToOne((type) => Product, (product) => product.id, { eager: true })
  @JoinTable()
  product: Product

  @Field(() => Number)
  @Column()
  @IsNumber()
  product_qt: number

  @Field(() => String)
  @Column()
  @IsString()
  status: string

  @Field(() => String)
  @Column()
  @IsString()
  payment_status: string

  @Field(() => Date)
  @CreateDateColumn()
  @IsDate()
  create_at: Date

  @Field(() => Date)
  @UpdateDateColumn()
  @IsDate()
  update_at: Date
}
