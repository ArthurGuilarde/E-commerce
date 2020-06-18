import { hash } from 'bcryptjs'
import { User } from '../../database/models/User'

interface Request {
  email: string
  password: string
}
export class CreateUserService {
  /**
   * execute
   */
  public static async execute({ email, password }: Request) {
    const isUserCreate = await User.findOne({ where: { email } })

    if (isUserCreate) throw Error('User already exists!')

    const newUser = User.create({
      email,
      password: await hash(password, 8)
    })

    await newUser.save()

    delete newUser.password
    return newUser
  }
}
