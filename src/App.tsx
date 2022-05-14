import React from 'react'
import { AppRoutes } from './AppRoutes'
import { SpellContextProvider } from './context/SpellContext'

function App () {
  return (
    <SpellContextProvider>
    <AppRoutes />
    </SpellContextProvider>
  )
}

export default App
