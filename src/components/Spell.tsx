import React from 'react'
import { Link } from 'react-router-dom'
import { SpellType } from '../model/SpellModel'

const Spell = ({ name, id, type, createdAt }:SpellType) => {
  return (
      <li>
       <Link to={`/spells/${id}`}>
        {name}
        </Link>
      </li>
  )
}

export default Spell
