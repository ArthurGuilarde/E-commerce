import { Resolver, Mutation, Arg } from 'type-graphql'
import { User } from '../../database/models/User'
import { CreateUserInput, UserFeedBackInput } from '../inputs/UserInput'
import { CreateUserService } from '../../service/UserResolverServices/CreateUserService'

@Resolver(User)
export class UserResolver {
  @Mutation(() => UserFeedBackInput)
  async createUser(@Arg('data') data: CreateUserInput) {
    const user = await CreateUserService.execute(data)
    return user
  }
}
