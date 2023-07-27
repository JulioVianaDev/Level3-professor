import React,{useState} from 'react'
import "./Notes.css"
import AllNotes from '../components/Notes/AllNotes'
function Notes() {
  const [notes,setNotes] = useState([{id: "1",title: "one piece",description: "é mt bom",date:"2022-03-2"},{id: "2",title: "Naruto",description: "correndo atras do emo",date:"2022-03-2"},])
  return (
    <div id='notes'>
      <h1>Anotações</h1>
      <AllNotes
        notes={notes}
      />
    </div>
  )
}

export default Notes