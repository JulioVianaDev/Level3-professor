import React from 'react'
import { NavLink } from 'react-router-dom'
function Navlink({texto,path}) {
  return (
    <NavLink
        to={path}
        className={({isActive})=>
            isActive ? 'link-clicado' : ''
        }
    >
       {texto}
    </NavLink>
  )
}

export default Navlink