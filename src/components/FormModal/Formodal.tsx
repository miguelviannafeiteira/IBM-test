import React, { FormEvent, useContext } from 'react'
import { SpellContext } from '../../context/SpellContext'
import { api } from '../../services/api'
import { Overlay, Container, Header, Footer, FormContainer, FormMain, InputGroup, CheckIcon, CloseIcon } from './styles'

export const FormModal = () => {
  const { setIsOpenModal, name, setName, type, setType, contextId, version } = useContext(SpellContext)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    api.put('/spells', {
      id: contextId,
      name,
      type,
      version
    })

    setIsOpenModal(false)
  }

  return (
    <Overlay >
      <Container>
        <Header>
          <strong>Edit the spell</strong>
          <button type="button" onClick={() => setIsOpenModal(false) } >
            <CloseIcon/>
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain >

            <InputGroup>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value) } />
            </InputGroup>

            <InputGroup>
              <label htmlFor="type">Type</label>
              <input id="type" type="text" value={type} onChange={(event) => setType(event.target.value)}/>
            </InputGroup>

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
