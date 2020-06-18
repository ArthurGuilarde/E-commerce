import React from 'react'

import Store from './pages/Store'

import Providers from './hooks'
import GlobalStyle from './GlobalStyle'
const App: React.FC = () => (
  <>
    <Providers>
      <Store />
    </Providers>
    <GlobalStyle />
  </>
)

export default App
