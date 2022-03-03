import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className='' style={
      {
        color: "white",
        backgroundColor: "#303030",
        width: "100%",
        fontSize: "16px",
        textAlign: "center",
        height: "30px",
        verticalAlign: "center",
      }
    }>
      <a href="#" className='adec'>Copyright</a> &copy; Todos list 2022
    </footer>
  )
}
