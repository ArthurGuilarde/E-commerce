import { Product } from '../../database/models/Product'
import {
  UpdateProductStock,
  UpdateProductName
} from '../../graphql/inputs/ProductInput'
export class UpdateProductService {
  /**
   * updateProductNameDescription
   */
  public static async updateProductNameDescription({
    id,
    name,
    description
  }: UpdateProductName) {
    const product = await Product.findOne({ where: { id } })
    if (!product) throw new Error('Product not found!')

    const data = {
      name,
      description
    }

    Object.assign(product, data)
    await product.save()

    return product
  }

  /**
   * updateProductStock
   */
  public static async updateProductStock({ id, stock }: UpdateProductStock) {
    const product = await Product.findOne({ where: { id } })
    if (!product) throw new Error('Product not found!')

    const data = {
      stock
    }

    Object.assign(product, data)
    await product.save()
    return product
  }
}
