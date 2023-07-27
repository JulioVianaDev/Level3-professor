import React from 'react'
import Note from './Note'

function AllNotes(props) {
  return (
    <div>
        {props.notes.map(n=><Note {...n}/>)}
    </div>
  )
}

export default AllNotes