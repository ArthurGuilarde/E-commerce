import { Product } from '../../database/models/Product'
export class RemoveProductService {
  /**
   * execute
   */
  public static async execute(id: string) {
    const product = await Product.findOne({ where: { id } })
    if (!product) throw new Error('Product not found!')

    Product.createQueryBuilder()
      .delete()
      .from(Product)
      .where('id = :id', { id })
      .execute()

    return product
  }
}
