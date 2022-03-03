import React, { useState } from 'react';
import './style.css';



export const AddComponents = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be empty")
    }
    else {
      props.addComponents(title, desc);
      setTitle("");
      setDesc("");
    }
  }
  return (
    <div className='container'>
      <button type='button' className='addbtn' onClick={() => {
        document.getElementById("display").style.display = "block";
      }}>+</button>
      <div id='display' className='formDisp'>
        <div className='inner-modal'>
          <div className="container">
            <span className='close' onClick={() => {
              document.getElementById("display").style.display = "none";
            }}>&times;</span>
            <form action="none" onSubmit={submit}>
              <div className="form-group">
                <input type="text" name="title" id="title" value={title} onChange={(e) => {
                  setTitle(e.target.value)
                }} className='inputAnime' placeholder=' ' />
                <label htmlFor="title">Title</label>
              </div><br />
              <div className="form-group">
                <textarea name="desc" id="desc" value={desc} onChange={(e) => {
                  setDesc(e.target.value);
                }} cols="30" rows="10" placeholder=' '></textarea>
                <label htmlFor="des">Description</label>
              </div>
              <div className='for-group'>
                <button className='addbtn2' type='submit'> Add </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
