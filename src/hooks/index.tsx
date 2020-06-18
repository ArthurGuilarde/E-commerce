import React from 'react'

import { ClientGraphqlProvider } from './ClientGraphql'

const Providers: React.FC = ({ children }) => (
  <>
    <ClientGraphqlProvider>{children}</ClientGraphqlProvider>
  </>
)

export default Providers
