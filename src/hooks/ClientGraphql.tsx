import React, { createContext, useContext } from 'react'
import { client } from '../api/ApolloCliente'
import { ApolloClient } from 'apollo-boost'

interface AuthProps {
  client: ApolloClient<unknown>
}

const ClientGraphqlContext = createContext({} as AuthProps)

const ClientGraphqlProvider: React.FC = ({ children }) => {
  return (
    <ClientGraphqlContext.Provider value={{ client: client }}>
      {children}
    </ClientGraphqlContext.Provider>
  )
}

function useClient(): AuthProps {
  const context = useContext(ClientGraphqlContext)

  if (!context) {
    throw Error('We need one context')
  }

  return context
}

export { ClientGraphqlProvider, useClient }
