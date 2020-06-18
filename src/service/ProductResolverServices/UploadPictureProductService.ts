import crypto from 'crypto'
import path from 'path'
import { createWriteStream } from 'fs'
import { Upload } from '../../config/ProductConfigs/UploadProductProps'

export class UploadPictureProductService {
  /**
   * execute
   */
  public static async execute({
    createReadStream,
    filename
  }: Upload): Promise<Boolean> {
    return new Promise(async (resolve, reject) => {
      createReadStream()
        .pipe(
          createWriteStream(
            path.resolve(__dirname, '..', '..', '..', 'tmp') + `/${filename}`
          )
        )
        .on('finish', () => resolve(true))
        .on('error', () => reject(false))
    })
  }
}
