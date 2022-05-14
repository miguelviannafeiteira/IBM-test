import React from 'react'
import { Link } from 'react-router-dom'
import { SpellType } from '../model/SpellModel'
import { api } from '../services/api'

const Spell = ({ name, id, type, createdAt }:SpellType) => {
  const deleteSpell = (_id:string) => {
    api.delete('/spells', {
      data: {
        id: _id
      }
    })
  }

  return (
      <li>
       <Link to={`/spells/${id}`}>
        {name}
        </Link>
        <button onClick={() => deleteSpell(id)}>X</button>
      </li>
  )
}

export default Spell
