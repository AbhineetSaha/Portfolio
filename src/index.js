import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render(
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>,document.getElementById('root')
)



window.onscroll = () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 600) {
      navbar.classList.add('navbar-active','gradient-background');
  } else {
      navbar.classList.remove('navbar-active','gradient-background');
  }
};