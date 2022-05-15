import React, { FormEvent, useContext, useState } from 'react'
import { SpellContext } from '../../context/SpellContext'
import { SwrHook } from '../../hook/SwrHook'
import { SpellType } from '../../model/SpellModel'
import { api } from '../../services/api'
import { Overlay, Container, Header, Footer, FormContainer, FormMain, InputGroup, CheckIcon, CloseIcon } from './styles'

export const FormModal = () => {
  const { setIsOpenModal, name, setName, type, setType, contextId, version } = useContext(SpellContext)
  const { data, mutate } = SwrHook('/spells')
  const [modalError, setModalError] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!name || !type) {
      setModalError('Name and type are required')
    } else {
      api.put('/spells', {
        id: contextId,
        name,
        type,
        version
      })

      const updatedSpell = {
        spells: data.spells?.map((spell:SpellType) => {
          if (spell.id === contextId) {
            return { ...spell, name, type }
          } else {
            return spell
          }
        }
        )
      }
      mutate(updatedSpell, false)

      setIsOpenModal(false)
    }
  }

  return (
    <Overlay >
      <Container>
        <Header>
          <strong>Editar a magia</strong>
          <button type="button" onClick={() => setIsOpenModal(false) } >
            <CloseIcon/>
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain >

            <InputGroup>
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value) } />
            </InputGroup>

            <InputGroup>
              <label htmlFor="type">Tipo</label>
              <input id="type" type="text" value={type} onChange={(event) => setType(event.target.value)}/>
            </InputGroup>
            <p>{modalError}</p>

          </FormMain>
          <Footer>
            <button type="submit">
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  )
}