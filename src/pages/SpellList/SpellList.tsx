import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spell from '../../components/Spell/Spell'
import { SwrHook } from '../../hook/SwrHook'
import { SpellType } from '../../model/SpellModel'

export const SpellList = () => {
  const { data } = SwrHook('/spells')
  const [spells, setSpells] = useState<SpellType[]>()
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('username')) {
      navigate('/')
    } else {
      const spellsInAlphabeticalOrder:SpellType[] = data?.spells.sort((a:SpellType, b:SpellType) => a.name.localeCompare(b.name))
      setSpells(spellsInAlphabeticalOrder)
    }
  }, [data, navigate])

  if (!data) return <p>Carregando as magias...</p>

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
      <Link to="/spells/spellRegister">Adicionar uma nova Magia</Link>
  </div>
  )
}
