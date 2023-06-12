import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    
        <nav className='nav_bar'>
        <Link  className="navbar_item" to="/">Inicio</Link>
        <Link className="navbar_item"  to="/categorias">Categorias</Link>
        <Link  className="navbar_item" to="/balance">Balance</Link>
            </nav>
            
    
  )
}
