import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=>{
return(
    <nav class="navbar" style={{backgroundColor:'#efefef'}}role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="error"></img>
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <span class="navbar-item">
          <Link to="/"> Home</Link>
         
        </span>
  
        <span class="navbar-item">
         <Link to="/student">Student</Link>
        </span>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider"></hr>
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <span class="button is-primary">
              <strong>Sign up</strong>
            </span>
            <span class="button is-light">
              <Link to="/login">Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>

 )
}
export default Navbar