import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spell from '../../components/Spell/Spell'
import { SwrHook } from '../../hook/SwrHook'
import { SpellType } from '../../model/SpellModel'
import { Main, ContainerModal } from '../SpellDetail/styles'
import { Container, Header, List } from './styles'

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

  if (!data) {
    return (
    <ContainerModal>
      <Main>
        <p>Carregando as magias...</p>
      </Main>
    </ContainerModal>)
  }

  return (
    <Container>
      <Header>
        <h2>Magias</h2>
        <Link className='button' to="/spells/spellRegister">
          Adicionar uma nova Magia
        </Link>
      </Header>
      <List>
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
      </List>

  </Container>
  )
}
