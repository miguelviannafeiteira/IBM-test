import React, { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('username')) {
      navigate('/spells')
    }
  }, [])

  function saveOnLocalStorage (event: FormEvent) {
    event.preventDefault()
    if (!username || !password) {
      setLoginError('Username and password are required')
    } else if (password.length <= 6) {
      setLoginError('Password must be longer than 6 characters')
    } else {
      localStorage.setItem('username', username)
      navigate('/spells')
    }
  }

  return (
    <>
      <form onSubmit={saveOnLocalStorage}>
        <div>
          <label htmlFor="username">Usuário</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button type='submit'>Registrar-se</button>
      </form>
      <p>{loginError}</p>
    </>
  )
}
