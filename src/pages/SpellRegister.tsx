import React, { FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../services/api'

const SpellRegister = () => {
  const [spellName, setSpellName] = useState('')
  const [spellType, setSpellType] = useState('')
  const [missInput, setMissInput] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('username')) {
      navigate('/')
    }
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!spellName || !spellType) {
      return setMissInput('Name and the type of the spell are required')
    } else {
      api.post('spells', {
        name: spellName,
        type: spellType
      })
      setSpellName('')
      setSpellType('')
      setMissInput('')
    }
  }

  return (
    <>
    <Link to={'/spells'}>Voltar</Link>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="spellName">Nome da magia</label>
        <input type="text" id="spellName" value={spellName} onChange={(event) => setSpellName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="type">Tipo da magia</label>
        <input type="text" id="type" value={spellType} onChange={(event) => setSpellType(event.target.value)} />
      </div>
    <button type='submit'>Adicionar</button>
    </form>
    <p>{missInput}</p>
    </>
  )
}

export default SpellRegister
