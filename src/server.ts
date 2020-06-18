//Recursos
import 'reflect-metadata'
import './database'
import creteSchema from './graphql'

// Bilbiotecas
import { ApolloServer } from 'apollo-server'

creteSchema().then((schema) => {
  const server = new ApolloServer({
    schema
  })

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url} `)
  })
})
