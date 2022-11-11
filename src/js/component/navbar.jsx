import React from 'react'

export default function Navbar(){
 return <nav className="navbar navbar-expand-lg fixed-top" style={{"backgroundColor":"#343A40"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{"color":"white"}}>Menu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{"justifyContent":"flex-end"}}>
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#" style={{"color":"white"}}>Home</a>
        <a className="nav-link disabled" href="#">About</a>
        <a className="nav-link disabled" href="#">Services</a>
        <a className="nav-link disabled">Contact</a>
      </div>
    </div>
  </div>
</nav>
}