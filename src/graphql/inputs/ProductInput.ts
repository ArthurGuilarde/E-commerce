import { InputType, Field } from 'type-graphql'
import { ProductProps } from '../../config/ProductConfigs/ProductProps'

@InputType()
export class CreateProductInput implements ProductProps {
  @Field()
  name: string
  @Field()
  description: string

  @Field()
  price: number
}

@InputType()
export class UpdateProductName extends CreateProductInput {
  @Field()
  id: string
}

@InputType()
export class UpdateProductStock {
  @Field()
  id: string

  @Field()
  stock: Number
}
