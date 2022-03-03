import React, { useState } from 'react';
import './style.css';

export const SearchBox = (props) => {
  return (
    <div className='container' style={{
      margin: "50px auto",
      minHeight: "84vh"
    }}>
      <h1 className="text-center">Searching Todo</h1>
      {
        props.searchTitle !== "" ?
          <>
            <div>
              <br />
              <h5>{props.searchTitle}</h5>
              <p>{props.searchDesc}</p>
            </div>
            <hr />
          </> :
          <>
          <br /><br />
            <h5 className='text-center'>No such todo available</h5>
          </>

      }
      <button className='btn btn-outline-success btn-sm-0' onClick={() => { window.history.back() }}>Back</button>
    </div>
  )
}
