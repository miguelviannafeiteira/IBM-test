import React, { useContext, useEffect, useState } from 'react'
import { SpellType } from '../../model/SpellModel'
import { api } from '../../services/api'
import { SpellContext } from '../../context/SpellContext'
import { Link, useNavigate } from 'react-router-dom'
import { ContainerModal, Div, Main } from './styles'

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
      }).catch(() => setError('Houve algum problema, volte para a página anterior.')
      )
    }
  }, [])

  if (error) {
    return (
    <ContainerModal>
      <Main>
        <Link className='button' to={'/spells'}>Voltar</Link>
        <p>{error}</p>
      </Main>
    </ContainerModal>
    )
  }
  if (!spell) {
    return (
    <ContainerModal>
      <Main>
        <p>Carregando a magia...</p>
      </Main>
    </ContainerModal>
    )
  }

  return (
    <ContainerModal>
      <Main>
        <Link className='button' to={'/spells'}>Voltar</Link>
        <Div>
          <strong>Magia: {spell.name}</strong>
          <strong>Tipo: {spell.type}</strong>
          <strong>Criada em: {spell.createdAt.substring(0, 10)}</strong>
        </Div>
      </Main>
    </ContainerModal>
  )
}

export default SpellDetail
