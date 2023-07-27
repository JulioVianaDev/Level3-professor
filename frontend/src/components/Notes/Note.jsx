import React, { useState } from 'react'
import NotesModal from './NotesModal'

function Note(props) {
  const [editModal,setEditModal] = useState(false)
  const [atualNote,setAtualNote] = useState({
    id:props.id,
    description: props.description,
    title: props.title,
    date: props.date
  })
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h2>{props.date}</h2>
        <button onClick={()=>props.deleteNote(props.id)}>Deletar</button>
        <button onClick={()=>setEditModal(true)}>editar</button>
        {
          editModal ? 
            <NotesModal 
              editNote={props.editNote} 
              atualNote={atualNote}
              setAtualNote={setAtualNote}
              cancelarEdit={()=>setEditModal(false)}/> 
            : null
        }
    </div>
  )
}

export default Note