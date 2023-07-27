import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
    <div>
        <NavLink
            to='/notes'
            className={({isActive})=>
                isActive ? 'link-clicado' : ''
            }
        >
            Anotações
        </NavLink>
        <NavLink
            to='/home'
            className={({isActive})=>
                isActive ? 'link-clicado' : ''
            }
        >
            Criar Conta
        </NavLink>
    </div>
    <div>

    </div>
</nav>
  )
}

export default Navbar