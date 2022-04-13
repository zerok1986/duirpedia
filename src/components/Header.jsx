import React from 'react'

function Header({ title }) {
  return (
    <header className="App-header">
      <h1 className="title">{title}</h1>
      <img className="sw-logo" src="/sw-logo.png" alt="star wars logo" />
    </header>
  )
}

export default Header
