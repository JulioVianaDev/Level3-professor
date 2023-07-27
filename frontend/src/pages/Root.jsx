import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
function Root() {
  return (
    <div>
        <Navbar/>
        <div className='conteudo'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Root