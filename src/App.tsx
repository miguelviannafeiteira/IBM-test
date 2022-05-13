import React, { useEffect, useState } from 'react'
import { api } from './services/api'

type SpellsType = {
  createdAt: string,
  id: string,
  name: string,
  type:string,
  version:string

}

function App () {
  const [spells, setSpeels] = useState<SpellsType[]>([])
  useEffect(() => {
    api.get('/spells').then(({ data }) => {
      setSpeels(data.spells)
    })
  }, [])

  console.log(spells)

  return (
      <div>
        {spells?.map((item) => (
          <p key={item.id}>a{item.name}</p>
        ))}
      </div>
  )
}

export default App
