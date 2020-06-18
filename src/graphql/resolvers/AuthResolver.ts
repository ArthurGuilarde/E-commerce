import { Resolver, Mutation, Arg } from 'type-graphql'

import { CreateAuthInput, AuthTokenInput } from '../inputs/AuthInput'
import { AuthService } from '../../service/AuthResolverServices/AuthService'

@Resolver()
export class AuthResolver {
  @Mutation(() => AuthTokenInput)
  async userAuth(@Arg('data') data: CreateAuthInput) {
    const { token, user } = await AuthService.execute(data)
    return { user, token }
  }
}
