import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../services/api'

const SpellRegister = () => {
  const [spellName, setSpellName] = useState('')
  const [spellType, setSpellType] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    api.post('spells', {
      name: spellName,
      type: spellType
    })
    setSpellName('')
    setSpellType('')
  }

  return (
    <>
    <Link to={'/spells'}>Voltar</Link>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="spellName">Spell Name</label>
        <input type="text" id="spellName" value={spellName} onChange={(event) => setSpellName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="type">Type</label>
        <input type="text" id="type" value={spellType} onChange={(event) => setSpellType(event.target.value)} />
      </div>
    <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default SpellRegister
