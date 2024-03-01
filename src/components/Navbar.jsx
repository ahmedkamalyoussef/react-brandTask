import { Button } from 'bootstrap'
import React, { useState } from 'react'
import Card from './Card';

function Navbar() {
  const [edit,setEdit]=useState("");

  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-secondary">
  <div className="container ">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <button className="btn btn-outline-info m-2" onClick={()=>{setEdit("All")}}>ALL </button>
        <button className="btn btn-outline-info m-2" onClick={()=>{setEdit("Nike")}}>Nike</button>
        <button className="btn btn-outline-info m-2" onClick={()=>{setEdit("Adidas")}}>Adidas</button>
        <button className="btn btn-outline-info m-2" onClick={()=>{setEdit("Saucony")}}>Saucony</button>
        <button className="btn btn-outline-info m-2" onClick={()=>{setEdit("Vans")}}>Vans</button>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div>
</div>
<div className="container ">
      <div className="row mt-5 text-center"> 
<Card name={edit}/>
</div>
</div>
    </>
  )
}

export default Navbar
