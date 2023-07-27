import React from 'react'
import Note from './Note'

function AllNotes(props) {
  return (
    <div>
        {props.notes.map(n=><Note deleteNote={props.deleteNote}  {...n}/>)}
    </div>
  )
}

export default AllNotes