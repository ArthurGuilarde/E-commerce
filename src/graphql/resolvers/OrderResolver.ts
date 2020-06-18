import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { Order } from '../../database/models/Order'
import { orderInputType } from '../inputs/OrderInput'
import { CreateOrderService } from '../../service/OrderResolverServices/CreateOrderService'
@Resolver(Order)
export class OrderResolver {
  @Query(() => [Order])
  async orders() {
    return await Order.find()
  }

  @Mutation((returns) => Order)
  async createOrder(@Arg('data') data: orderInputType) {
    const order = await CreateOrderService.execute(data)
    return order
  }
}
