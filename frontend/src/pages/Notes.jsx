import React,{useState} from 'react'
import "./Notes.css"
import AllNotes from '../components/Notes/AllNotes'
import FormNotes from '../components/Notes/FormNotes'
function Notes() {
  const [notes,setNotes] = useState([{id: "1",title: "one piece",description: "é mt bom",date:"2022-03-2"},{id: "2",title: "Naruto",description: "correndo atras do emo",date:"2022-03-2"},])
  const [modal,setModal] = useState(false)
  
  const fecharModal=()=>{
    setModal(false)
  }
  function generateRandomId() {
    return Math.floor(Math.random() * 1000000); // Adjust the range as per your requirement
  }
  const addNote = (note)=>{
    note.id = generateRandomId().toString();
    notes.push(note)
  }
  
  const deleteNote=(id)=>{
    setNotes(notes.filter(n=>n.id !==id))
  }

  const editNote = (id,note)=>{
    setNotes(notes.map(n => (n.id === id ? note : n)));
  }

  return (
    <div id='notes'>
      <button onClick={()=>setModal(true)}>Criar Anotação</button>
      <h1>Anotações</h1>
      { 
        modal ?<FormNotes addNote={addNote} fecharModal={fecharModal}/>
        :<AllNotes
          deleteNote={deleteNote}
          notes={notes}
          editNote={editNote}
        />
      }
    </div>
  )
}

export default Notes