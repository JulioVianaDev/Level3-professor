import React,{useState} from 'react'
import "./Notes.css"
import AllNotes from '../components/Notes/AllNotes'
import FormNotes from '../components/Notes/FormNotes'
function Notes() {
  const [notes,setNotes] = useState([{id: "1",title: "one piece",description: "é mt bom",date:"2022-03-2"},{id: "2",title: "Naruto",description: "correndo atras do emo",date:"2022-03-2"},])
  const [modal,setModal] = useState(false)
  
  const addNote = (note)=>{
    notes.push(note)
  }
  const fecharModal=()=>{
    setModal(false)
  }
  const deleteNote=(id)=>{
    setNotes(notes.filter(n=>n.id !==id))
  }
  return (
    <div id='notes'>
      <button onClick={()=>setModal(true)}>Criar Anotação</button>
      <h1>Anotações</h1>
      { 
        modal ?<FormNotes addNote={addNote} fecharModal={fecharModal}/>
        :<AllNotes
        deleteNote={deleteNote}
        notes={notes}/>
      }
    </div>
  )
}

export default Notes