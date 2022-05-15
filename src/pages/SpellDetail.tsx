import React, { useContext, useEffect, useState } from 'react'
import { SpellType } from '../model/SpellModel'
import { api } from '../services/api'
import { SpellContext } from '../context/SpellContext'
import { Link, useNavigate } from 'react-router-dom'

const SpellDetail = () => {
  const [spell, setSpell] = useState<SpellType>()
  const [error, setError] = useState('')
  const { contextId } = useContext(SpellContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('username')) {
      navigate('/')
    } else {
      api.post('/spells/findById', {
        id: contextId
      }).then(({ data }) => {
        setSpell(data)
      }).catch(() => setError('Houve algum problema, volte para a página anterior')
      )
    }
  }, [])

  if (error) {
    return (<>
      <Link to={'/spells'}>Voltar</Link>
       <p>{error}</p>
  </>
    )
  }
  if (!spell) return <p>Carregando a magia...</p>

  return (
    <div>
      <Link to={'/spells'}>Voltar</Link>
      <ul>
          <li>{spell?.name}, {spell?.type}, Criada em {spell?.createdAt.substring(0, 10)}
          </li>
      </ul>
    </div>
  )
}

export default SpellDetail
