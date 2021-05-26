/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
 import {Link} from 'react-router-dom' 

const NavBar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Eccomerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-auto" id="navbarNav">
      <ul className="navbar-nav ms-auto px-3">
        <li className="nav-item px-3">
         <Link to="/">Home</Link>
        </li>
        <li className="nav-item px-3">
          <Link to="/ingreso">Ingreso</Link>
        </li>
        <li className="nav-item px-3">
          <Link to="/registro">registro</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    )
}

export default NavBar
