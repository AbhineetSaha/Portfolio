import React from 'react';
import './CSS/navbar.css';
import logo from '../assets/images/603d09f78dda4d62a32dd10a8ce9ad0e.png'

function navbar(){
    return(
      <header id="header">
      <div class="navbar">
        <a href="#" class="logo">
          <img id="logo" src={logo} alt="logo" />
        </a>
        <nav class="main-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#me">About</a></li>
            <li><a href="#experience">Skills</a></li>
            <li><a href="#contact">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
)
}

export default navbar;