import { MiddlewareFn } from 'type-graphql'

import jwt from 'jsonwebtoken'
import JWTConfig from '../config/AuthConfigs/AuthJWT'

import TokenProps from '../config/AuthConfigs/TokenProps'

export const IsAuthMiddleware: MiddlewareFn = async ({ args }, next) => {
  const token = jwt.verify(args.auth.token, JWTConfig.jwt.secret) as TokenProps

  if (token.profile === 'User') throw new Error('Not Authorized!')

  return await next()
}
