import { ObjectType, InputType, Field } from 'type-graphql'
import { User } from '../../database/models/User'

@InputType()
export class CreateAuthInput {
  @Field()
  email: string

  @Field()
  password: string
}

@ObjectType()
export class AuthTokenInput {
  @Field()
  user: User

  @Field()
  token: String
}

@InputType()
export class Auth {
  @Field()
  token: string
}
