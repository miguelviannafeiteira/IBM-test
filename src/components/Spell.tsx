import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SpellContext } from '../context/SpellContext'
import { SwrHook } from '../hook/SwrHook'
import { SpellType } from '../model/SpellModel'
import { api } from '../services/api'

const Spell = ({ name, id, type, createdAt }:SpellType) => {
  const { setContextId } = useContext(SpellContext)
  const { data, mutate } = SwrHook('/spells')

  const deleteSpell = (id:string) => {
    api.delete('/spells', {
      data: {
        id
      }
    })
    const updateSpells = {
      spells: data?.spells?.filter((spell:SpellType) => spell.id !== id)
    }
    mutate(updateSpells, false)
  }

  const editSpell = (spellId:string) => {
    setContextId(spellId)
  }

  return (
      <li>
       <Link to={'/spells/findById'} onClick={() => setContextId(id)
       }>
        {name}
        </Link>
        <button onClick={() => deleteSpell(id)}>X</button>
        <button onClick={() => editSpell(id)}>Edital Spell</button>
      </li>
  )
}

export default Spell
