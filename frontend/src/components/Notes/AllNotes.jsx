import React from 'react'
import Note from './Note'

function AllNotes(props) {
  return (
    <div>
        {props.notes.map(n=><Note deleteNote={props.deleteNote} editNote={props.editNote} {...n}/>)}
    </div>
  )
}

export default AllNotes