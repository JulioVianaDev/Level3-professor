import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import Navlink from './UI/Navlink'

function Navbar() {
  return (
    <nav>
    <div>
        <Navlink texto="Anotações"  path="/notes"/>
        <Navlink texto="Home"  path="/"/>
        
    </div>
    <div>

    </div>
</nav>
  )
}

export default Navbar