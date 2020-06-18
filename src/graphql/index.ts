import { buildSchema } from 'type-graphql'
import { ProductResolver } from './resolvers/ProductResolver'
import { OrderResolver } from './resolvers/OrderResolver'
import { AuthResolver } from './resolvers/AuthResolver'
import { UserResolver } from './resolvers/UserResolver'

export default async function creteSchema() {
  return await buildSchema({
    resolvers: [ProductResolver, OrderResolver, AuthResolver, UserResolver]
  })
}
