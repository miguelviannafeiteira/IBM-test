import React, { createContext, ReactNode, useState } from 'react'
import { FormModal } from '../components/FormModal/Formodal'

type SpellContextProps ={
  children: ReactNode
}

type SpellContextType = {
  contextId: string,
  setContextId: (newState: string) => void,
  isOpenModal: boolean,
  setIsOpenModal: (newState: boolean) =>void,
  name: string,
  setName: (newState: string) => void,
  type: string,
  setType: (newState: string) => void,
  version: string,
  setVersion: (newState: string) => void,
}

const initialValue = {
  contextId: '',
  setContextId: () => {},
  isOpenModal: false,
  setIsOpenModal: () => {},
  name: '',
  setName: () => {},
  type: '',
  setType: () => {},
  version: '',
  setVersion: () => {}
}

export const SpellContext = createContext<SpellContextType>(initialValue)

export const SpellContextProvider = ({ children }:SpellContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
  const [contextId, setContextId] = useState(initialValue.contextId)
  const [name, setName] = useState(initialValue.name)
  const [type, setType] = useState(initialValue.type)
  const [version, setVersion] = useState(initialValue.version)

  return (
  <SpellContext.Provider value={{ contextId, setContextId, isOpenModal, setIsOpenModal, name, setName, type, setType, version, setVersion }}>
    {children}
    {isOpenModal && <FormModal />}
  </SpellContext.Provider>
  )
}
