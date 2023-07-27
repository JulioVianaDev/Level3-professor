import React from 'react'
import "./NotesModal.css"
function NotesModal(props) {
  
  return (
    <div className='modal'>
        <label htmlFor="title">Titulo</label>
        <input 
          type="text" 
          name='title'
          id='title'
          placeholder='Titulo' 
          onChange={(e)=>props.setAtualNote({...props.atualNote,title: e.target.value})} 
          value={props.atualNote.title} 
        />
        <label htmlFor="description">Descrição</label>
        <input 
          type="text" 
          name='description'
          id='description'
          placeholder='Descrição' 
          onChange={(e)=>props.setAtualNote({...props.atualNote,description: e.target.value})} 
          value={props.atualNote.description} 
        />
        <label htmlFor="date">Data</label>
        <input 
          type="date" 
          name='date'
          id='date'
          placeholder='Data' 
          onChange={(e)=>props.setAtualNote({...props.atualNote,date: e.target.value})} 
          value={props.atualNote.date} 
        />
        <button onClick={()=>props.editNote(props.id,props.atualNote)}>Enviar</button>
        <button onClick={()=>props.cancelarEdit()}>Cancelar</button>
    </div>
  )
}

export default NotesModal