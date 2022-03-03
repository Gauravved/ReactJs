import React from 'react'
import './style.css'

export const Todo = (props) => {
  return (
    <>
      <div>
        <br />
        <h5>{props.todo.title}</h5>
        <p>{props.todo.desc}</p>
        <button className='btn btn-danger btn-sm buttons' onClick={() => { props.onDelete(props.todo) }}>Delete</button>
      </div>
      <hr />
    </>
  )
}
