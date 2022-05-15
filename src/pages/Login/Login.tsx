import React, { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Div, Footer, FormContainer, FormMain, Header, InputGroup } from './styles'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('username')) {
      navigate('/spells')
    }
  }, [navigate])

  function saveOnLocalStorage (event: FormEvent) {
    event.preventDefault()
    if (!username || !password) {
      setLoginError('Usuário e senha devem ser preenchidos')
    } else if (password.length <= 6) {
      setLoginError('Senha deve ter pelo menos 6 caracteres')
    } else {
      localStorage.setItem('username', username)
      navigate('/spells')
    }
  }

  return (
    <Container>
      <Div>
        <Header>
          <strong>Crie um conta.</strong>
        </Header>
        <FormContainer onSubmit={saveOnLocalStorage}>
          <FormMain>

            <InputGroup>
              <label htmlFor="username">Usuário</label>
              <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <p className='error'>{loginError}</p>

            </InputGroup>

          </FormMain>

          <Footer>
            <button className='button' type='submit'>Registrar-se</button>
          </Footer>

        </FormContainer>
      </Div>
    </Container>
  )
}
