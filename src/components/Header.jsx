import React from 'react'
import { Link } from 'react-router-dom'

function Header({ title }) {
  return (
    <header className="App-header">
      <Link to="/" style={{ textDecoration: 'none', color: '#ffe818' }}>
        <h1 className="title">{title}</h1>
        <img className="sw-logo" src="/sw-logo.png" alt="star wars logo" />
      </Link>
    </header>
  )
}

export default Header
