import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <form >
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <Link type='submit' to={'/spells'}>Register</Link>
    </form>
  )
}
