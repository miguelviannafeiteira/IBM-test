import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SpellContext } from '../context/SpellContext'
import { SpellType } from '../model/SpellModel'
import { api } from '../services/api'

const Spell = ({ name, id, type, createdAt, version }:SpellType) => {
  const { setContextId, setIsOpenModal, setName, setType, setVersion } = useContext(SpellContext)

  const deleteSpell = (id:string) => {
    api.delete('/spells', {
      data: {
        id
      }
    })
  }

  const editSpell = (spellId:string, spellName:string, spellType:string, spellVersion:string) => {
    setContextId(spellId)
    setName(spellName)
    setType(spellType)
    setVersion(spellVersion)

    setIsOpenModal(true)
  }

  return (
      <li>
       <Link to={'/spells/findById'} onClick={() => setContextId(id)
       }>
        {name} | {type}
        </Link>
        <button onClick={() => deleteSpell(id)}>X</button>
        <button onClick={() => editSpell(id, name, type, version)}>Edital Spell</button>
      </li>
  )
}

export default Spell
