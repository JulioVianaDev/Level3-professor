import React, { useState } from 'react'
import "./NotesModal.css"

function NotesModal(props) {
  const [editNote,setEditNode] = useState({})  
  return (
    <div className='modal'>
        <label htmlFor="title">Titulo</label>
        <input 
          type="text" 
          name='title'
          id='title'
          placeholder='Titulo' 
        />
        <label htmlFor="description">Descrição</label>
        <input 
          type="text" 
          name='description'
          id='description'
          placeholder='Descrição' 
        />
        <label htmlFor="date">Data</label>
        <input 
          type="date" 
          name='date'
          id='date'
          placeholder='Data' 
        />
        <button>Enviar</button>
        <button onClick={()=>props.cancelarEdit()}>Cancelar</button>
    </div>
  )
}

export default NotesModal