import React from 'react'

function Note(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h2>{props.date}</h2>
    </div>
  )
}

export default Note