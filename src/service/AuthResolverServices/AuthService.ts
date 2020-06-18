import { User } from '../../database/models/User'
import { compare } from 'bcryptjs'

import jwt from 'jsonwebtoken'
import JWTConfig from '../../config/AuthConfigs/AuthJWT'
import TokenProps from '../../config/AuthConfigs/TokenProps'

interface Request {
  email: string
  password: string
}

interface Response {
  user: User
  token: string
}

export class AuthService {
  /**
   * execute
   */
  public static async execute({ email, password }: Request): Promise<Response> {
    const errorMessage = 'Error on Email/Password'

    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw Error(errorMessage)
    }

    const isPasswordMatch = await compare(password, user.password)

    if (!isPasswordMatch) {
      throw Error(errorMessage)
    }
    const { secret, expiresIn } = JWTConfig.jwt

    const tokenProps: TokenProps = { subject: user.id, profile: user.profile }

    const token = jwt.sign(tokenProps, secret, {
      expiresIn
    })

    return {
      user,
      token
    }
  }
}
