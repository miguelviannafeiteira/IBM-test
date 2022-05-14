import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import SpellDetail from './pages/SpellDetail'
import { SpellList } from './pages/SpellList'
import SpellRegister from './pages/SpellRegister'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/spells" element={<SpellList />} ></Route>
        <Route path="/spells/findById" element={<SpellDetail />} ></Route>
        <Route path="/spells/register" element={<SpellRegister />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}
