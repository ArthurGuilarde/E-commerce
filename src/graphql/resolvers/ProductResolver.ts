import { Resolver, Query, Mutation, Arg, UseMiddleware } from 'type-graphql'
import { GraphQLUpload } from 'graphql-upload'

import {
  CreateProductInput,
  UpdateProductStock,
  UpdateProductName
} from '../inputs/ProductInput'

import { Upload } from '../../config/ProductConfigs/UploadProductProps'

import { CreateProductService } from '../../service/ProductResolverServices/CreateProductService'
import { UpdateProductService } from '../../service/ProductResolverServices/UpdateProductService'
import { RemoveProductService } from '../../service/ProductResolverServices/RemoveProductService'

import { IsAuthMiddleware } from '../../middlewares/IsAuthMiddleware'
import { Auth } from '../inputs/AuthInput'

import { Product } from '../../database/models/Product'
@Resolver(Product)
export class ProductResolver {
  @Query((returns) => [Product])
  async products() {
    return await Product.find()
  }

  @Mutation((returns) => Product)
  // @UseMiddleware(IsAuthMiddleware)
  async createProduct(
    // @Arg('auth') auth: Auth,
    @Arg('data') data: CreateProductInput,
    @Arg('img', () => GraphQLUpload) img: Upload
  ) {
    return await CreateProductService.execute({ data, img })
  }

  @Mutation((returns) => Product)
  @UseMiddleware(IsAuthMiddleware)
  async updateProductStock(
    @Arg('auth') auth: Auth,
    @Arg('data') data: UpdateProductStock
  ) {
    return await UpdateProductService.updateProductStock(data)
  }

  @Mutation((returns) => Product)
  @UseMiddleware(IsAuthMiddleware)
  async updateProductNameDescription(
    @Arg('auth') auth: Auth,
    @Arg('data') data: UpdateProductName
  ) {
    return await UpdateProductService.updateProductNameDescription(data)
  }

  @Mutation((returns) => Product)
  @UseMiddleware(IsAuthMiddleware)
  async removeProduct(@Arg('auth') auth: Auth, @Arg('id') id: string) {
    return await RemoveProductService.execute(id)
  }
}
