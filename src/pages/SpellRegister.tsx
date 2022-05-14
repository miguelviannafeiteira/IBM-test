import React, { FormEvent, useState } from 'react'

const SpellRegister = () => {
  const [spellName, setSpellName] = useState('')
  const [type, setType] = useState('')
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(spellName)
    console.log(type)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="spellName">Spell Name</label>
        <input type="text" id="spellName" value={spellName} onChange={(event) => setSpellName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="type">Type</label>
        <input type="text" id="type" value={type} onChange={(event) => setType(event.target.value)} />
      </div>
    <button type='submit'>Submit</button>
    </form>
  )
}

export default SpellRegister
