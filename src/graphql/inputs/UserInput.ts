import { ObjectType, InputType, Field } from 'type-graphql'
import { UserProps } from '../../config/UserConfigs/UserProps'

@InputType()
export class CreateUserInput implements UserProps {
  @Field()
  email: string

  @Field()
  password: string
}

@ObjectType()
export class UserFeedBackInput {
  @Field()
  id: string

  @Field()
  email: string
}
