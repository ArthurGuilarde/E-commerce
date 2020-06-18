import { Order } from '../../database/models/Order'
import { User } from '../../database/models/User'
import { Product } from '../../database/models/Product'
import { orderInputType } from '../../graphql/inputs/OrderInput'

export class CreateOrderService {
  /**
   * execute
   */
  public static async execute({
    user_id,
    product_id,
    product_qt,
    payment_status,
    status
  }: orderInputType) {
    const user = await User.findOne({ where: { id: user_id } })
    const product = await Product.findOne({ where: { id: product_id } })

    if (!user || !product) throw new Error('User or Product Missing!')
    if (product.stock < product_qt) throw new Error('Missing stock!')

    product.stock -= product_qt
    await product.save()

    const order = Order.create({
      user,
      product,
      product_qt,
      payment_status,
      status
    })

    await order.save()
    return order
  }
}
