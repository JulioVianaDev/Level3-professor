import React from 'react'

function Note(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h2>{props.date}</h2>
        <button onClick={()=>props.deleteNote(props.id)}>Deletar</button>
    </div>
  )
}

export default Note