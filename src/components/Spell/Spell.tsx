import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SpellContext } from '../../context/SpellContext'
import { SwrHook } from '../../hook/SwrHook'
import { SpellType } from '../../model/SpellModel'
import { api } from '../../services/api'
import { IoCloseOutline, IoPencil } from 'react-icons/io5'
import { Button, List } from './styles'

const Spell = ({ name, id, type, createdAt, version }:SpellType) => {
  const { setContextId, setIsOpenModal, setName, setType, setVersion } = useContext(SpellContext)
  const { data, mutate } = SwrHook('/spells')

  const deleteSpell = (id:string) => {
    api.delete('/spells', {
      data: {
        id
      }
    })
    const updatedSpells = {
      spells: data.spells?.filter((spell:SpellType) => spell.id !== id)
    }
    mutate(updatedSpells, false)
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
      <List>
        <Button onClick={() => deleteSpell(id)}>
          <IoCloseOutline/>
        </Button>
        <Button onClick={() => editSpell(id, name, type, version)}>
          <IoPencil/>
        </Button>
        <Link className='link' to={'/spells/findById'} onClick={() => setContextId(id)}>
        {name}
        </Link>
      </List>
    </li>
  )
}

export default Spell
