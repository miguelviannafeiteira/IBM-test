import React, { createContext, ReactNode, useState } from 'react'

type SpellContextProps ={
  children: ReactNode
}

type SpellContextType = {
  contextId: string,
  setContextId: (newState: string) => void,
}

const initialValue = {
  contextId: '',
  setContextId: () => {}
}

export const SpellContext = createContext<SpellContextType>(initialValue)

export const SpellContextProvider = ({ children }:SpellContextProps) => {
  const [contextId, setContextId] = useState(initialValue.contextId)

  return (
  <SpellContext.Provider value={{ contextId, setContextId }}>
    {children}
  </SpellContext.Provider>
  )
}
