import React, { useState } from 'react'

function FormNotes(props) {
  const [note,setNote] = useState({id:0,title: "",description: "",date: "" })
  
  function cadastrarNote(){
    props.addNote(note)
    props.fecharModal()
  }
  return (
    <div>
      <form onSubmit={cadastrarNote}>
        <label htmlFor="title">Titulo</label>
        <input 
          type="text" 
          name='title'
          id='title'
          placeholder='Titulo' 
          onChange={(e)=>setNote({...note,title: e.target.value})} 
          value={note.title} 
        />
        <label htmlFor="description">Descrição</label>
        <input 
          type="text" 
          name='description'
          id='description'
          placeholder='Descrição' 
          onChange={(e)=>setNote({...note,description: e.target.value})} 
          value={note.description} 
        />
        <label htmlFor="date">Data</label>
        <input 
          type="date" 
          name='date'
          id='date'
          placeholder='Data' 
          onChange={(e)=>setNote({...note,date: e.target.value})} 
          value={note.date} 
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default FormNotes