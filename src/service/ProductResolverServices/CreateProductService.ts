import crypto from 'crypto'
import { Product } from '../../database/models/Product'
import { CreateProductInput } from '../../graphql/inputs/ProductInput'
import { Upload } from '../../config/ProductConfigs/UploadProductProps'
import { UploadPictureProductService } from '../../service/ProductResolverServices/UploadPictureProductService'

interface Request {
  data: CreateProductInput
  img: Upload
}

export class CreateProductService {
  /**
   * execute
   */
  public static async execute({ data, img }: Request) {
    const { name, description, price } = data

    const product = await Product.findOne({ where: { name } })

    if (product) {
      throw Error('Product already exists!')
    }

    const newProduct = Product.create({
      name,
      description,
      price
    })

    const fileHash = crypto.randomBytes(10).toString('hex')
    const newfileName = `${fileHash}-${img.filename}`

    img.filename = newfileName
    await UploadPictureProductService.execute(img)

    newProduct.img = img.filename

    await newProduct.save()

    return newProduct
  }
}
