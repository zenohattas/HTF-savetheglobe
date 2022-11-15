import React from 'react'
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {

        const { loginWithRedirect } = useAuth0();
        const { logout } = useAuth0();
      
        //return <button onClick={() => loginWithRedirect()}>Log In</button>;

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    
    <Link className="navbar-brand" to="/">
        <img src="https://s31184.pcdn.co/wp-content/uploads/sites/292/2021/08/icon-climate.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
    SaveTheGlobe MuggHuffins</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDarkDropdown" 
        aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-sm-inline-flex justify-content-between" id="navbarNavDarkDropdown">
      <ul className="navbar-nav flex-grow-1">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><Link className="dropdown-item" to="/viewproject">Project</Link></li>
            <li><a className="dropdown-item" href="#">projectContribution</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/profile">Profile</Link>
      </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
                <button type="button" className="btn btn-primary nav-link" onClick={() => loginWithRedirect()}>Login</button>
            </li>
            <li className="nav-item">
                <button type="button" className="btn btn-danger nav-link" onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
            </li>
        </ul> 
    </div>
  </div>
</nav>
  )
}
