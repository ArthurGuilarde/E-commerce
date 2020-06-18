import jwt from 'jsonwebtoken'
import JWTConfig from '../../config/AuthConfigs/AuthJWT'
import TokenProps from '../../config/AuthConfigs/TokenProps'

export class AuthReadTokenService {
  /**
   * execute
   */
  public static execute(token: string) {
    const { subject } = jwt.verify(token, JWTConfig.jwt.secret) as TokenProps

    return { subject }
  }
}
