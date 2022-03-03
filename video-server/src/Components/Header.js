import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link , useHistory } from 'react-router-dom';

export default function Header(props) {
  const history = useHistory();
  const [titles, setTitles] = useState("");
  const submit = (e)=>{
    e.preventDefault();
    if(!titles){
      alert("Serach box cannot be empty");
    }
    else{
      history.push('/search')
      props.search(titles);
    }
  }
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className='nav-item '>
                <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
          {props.searchBar ? 
          <form className="form-inline my-2 my-lg-0" onSubmit={submit}>
            <input className="form-control mr-sm-2" value={titles} onChange={(e)=>{
              setTitles(e.target.value)
            }} type="search" placeholder="Search Title" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>: ""}
        </div>
      </nav>
  )
}

Header.DeafaultProps={
    title : "Insert Your Title",
    searchBar : false
}

Header.prototype = {
    title : PropTypes.string,
    searchBar : PropTypes.bool
}