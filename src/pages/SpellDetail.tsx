import React, { useContext, useEffect, useState } from 'react'
import { SpellType } from '../model/SpellModel'
import { api } from '../services/api'
import { SpellContext } from '../context/SpellContext'
import { Link } from 'react-router-dom'

const SpellDetail = () => {
  const [spell, setSpell] = useState<SpellType>()
  const { contextId } = useContext(SpellContext)

  useEffect(() => {
    api.post('/spells/findById', {
      id: contextId
    }).then(({ data }) => {
      setSpell(data)
    })
  }, [])

  return (
    <div>
      <Link to={'/spells'}>Voltar</Link>
      <ul>
          <li>{spell?.name}, {spell?.type}, Create at {spell?.createdAt.substring(0, 10)}
          </li>
      </ul>
    </div>
  )
}

export default SpellDetail
