import React from 'react'
import { Todo } from './Todo.js'
let myStyle = {
  minHeight : "84vh",
  margin : "50px auto"
}
export const Todos = (props) => {
  return (
    <div className='container my-3' style={myStyle}>
      <br />
      <h3 className='text-center'>Todo List</h3>
      <br /><br />
      {
        props.todos.length === 0 ?
          <>
            <h5 className='text-center'>No Todos to display</h5>
          </> :
          props.todos.map((todo) => {
            return <Todo todo={todo} key={todo.srn} onDelete={props.onDelete} />
          })
      }
    </div>
  )
}
