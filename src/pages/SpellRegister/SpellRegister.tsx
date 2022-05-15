import React, { FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Container, Div, Footer, FormContainer, FormMain, Header, InputGroup } from './styles'

const SpellRegister = () => {
  const [spellName, setSpellName] = useState('')
  const [spellType, setSpellType] = useState('')
  const [missInput, setMissInput] = useState('')
  const [sucess, setSucess] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('username')) {
      navigate('/')
    }
  }, [navigate])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!spellName || !spellType) {
      return setMissInput('O nome da magia e o seu tipo devem estar preenchidos!')
    } else {
      api.post('spells', {
        name: spellName,
        type: spellType
      })
      setSucess('Magia adicionada com sucesso')
      setSpellName('')
      setSpellType('')
      setMissInput('')
    }
  }

  return (

<Container>
  <Div>
    <Link className='button' to={'/spells'}>Voltar</Link>
    <Header>
      <strong>Adicione uma magia</strong>
    </Header>
    <FormContainer onSubmit={handleSubmit}>
      <FormMain>

        <InputGroup>
          <label htmlFor="spellName">Nome da magia</label>
          <input type="text" id="spellName" value={spellName} onChange={(event) => setSpellName(event.target.value)} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="type">Tipo da magia</label>
          <input type="text" id="type" value={spellType} onChange={(event) => setSpellType(event.target.value)} />
          <p className='error'>{missInput}</p>
          <p className='sucess'>{sucess}</p>
        </InputGroup>

      </FormMain>

      <Footer>
      <button className='button' type='submit'>Adicionar</button>
      </Footer>

    </FormContainer>

  </Div>
</Container>

  )
}

export default SpellRegister
