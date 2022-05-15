import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import SpellDetail from './pages/SpellDetail/SpellDetail'
import { SpellList } from './pages/SpellList/SpellList'
import SpellRegister from './pages/SpellRegister/SpellRegister'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/spells" element={<SpellList />} ></Route>
        <Route path="/spells/findById" element={<SpellDetail />} ></Route>
        <Route path="/spells/spellRegister" element={<SpellRegister />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}
