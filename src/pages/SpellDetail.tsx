import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SpellType } from '../model/SpellModel'
import { api } from '../services/api'
import { IoTrashBin } from 'react-icons/io5'

const SpellDetail = () => {
  const { id } = useParams()
  const [spell, setSpell] = useState<SpellType[]>()

  useEffect(() => {
    api.get(`/spells/${id}`).then(({ data }) => {
      setSpell(data.spells)
    })
  }, [])

  const deleteSpell = () => {
    api.delete(`/spells/${id}`)
  }

  return (
    <div>
      <ul>
        {spell?.map((item) => (
          <li key={item.id}>{item.name}, {item.type}, Create at {item.createdAt.substring(0, 10)}, {item.id}
          <IoTrashBin onClick={deleteSpell}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpellDetail
