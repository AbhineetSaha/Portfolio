import React from 'react';
import './CSS/navbar.css';
import logo from '../assets/images/603d09f78dda4d62a32dd10a8ce9ad0e.png'

function navbar(){
    return(
      <header id="header">
      <div className="navbar">
        <a href="#" className="logo">
          <img id="logo" src={logo} alt="logo" />
        </a>
        <nav className="main-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#me">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
)
}


window.onscroll = () => {
  const navbar = document.querySelector('.navbar');
  if (window.width>1280){
    if (window.scrollY > 600) {
      navbar.classList.add('navbar-active','gradient-background');
  } else {
      navbar.classList.remove('navbar-active','gradient-background');
  }
  }else{
    if (window.scrollY > 120) {
      navbar.classList.add('navbar-active','gradient-background');
  } else {
      navbar.classList.remove('navbar-active','gradient-background');
  }
  }
};

export default navbar;