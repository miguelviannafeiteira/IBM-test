import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spell from '../components/Spell'
import { SpellType } from '../model/SpellModel'
import { api } from '../services/api'

export const SpellList = () => {
  const [spells, setSpells] = useState<SpellType[]>([])

  useEffect(() => {
    api.get('/spells').then(({ data }) => {
      const spellsInAlphabeticalOrder:SpellType[] = data.spells.sort((a:SpellType, b:SpellType) => a.name.localeCompare(b.name))
      setSpells(spellsInAlphabeticalOrder)
    })
  }, [])

  return (
    <div>
      <ul>
        {spells?.map((spell) => (
          <Spell
          key={spell.id}
          id={spell.id}
          name={spell.name}
          createdAt={spell.createdAt}
          type={spell.type}
          version={spell.version}
          />
        ))}
       </ul>
      <Link to="/spells/spellRegister">Adicionar nova Magia</Link>
  </div>
  )
}
