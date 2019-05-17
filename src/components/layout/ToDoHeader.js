import React from 'react'
import {Link} from 'react-router-dom'
export default function ToDoHeader() {
  return (
    <div>
      <header style={headerStyle}>
          <h1> ToDoList </h1>
          <Link style={linkStyle} to="/" >Home  </Link>  |
          <Link style={linkStyle} to="/about" >  About </Link>
      </header>
    </div>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}
const headerStyle = {
    color: '#fff',
    background: '#333',
    textAlign: 'center',
    padding: '10px'
}