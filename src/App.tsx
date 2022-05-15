import React from 'react'
import { AppRoutes } from './AppRoutes'
import { SpellContextProvider } from './context/SpellContext'
import GlobalStyles from './styles/GlobalStyles'

function App () {
  return (
    <SpellContextProvider>
      <GlobalStyles />
      <AppRoutes />
    </SpellContextProvider>
  )
}

export default App
