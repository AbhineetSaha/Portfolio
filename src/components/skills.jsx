import React from 'react';
import python from '../assets/images/python.png';
import java from '../assets/images/java.png';
import js from '../assets/images/JavaScript-Logo.png';
import './CSS/skills.css';


function Container(props){
  console.log(props);
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
      <a href = {props.url}>
      <img src={props.img} alt={props.alt} height="60" className="img" /></a>
    </div>
  );
}

function skills(){
    return( 
    <section id="skills" className="justify-content-center mt-3 border-bottom">
    <h2 className="my-skills display-4 lh-1 mt-4 text-center justify-content-center">My Skills</h2>
    <div className="container text-center mt-5">
        <div className="row">
          <Container url="https://www.python.org/" img={python} alt='python-logo' />
          <Container url="https://www.java.com/" img={java} alt='java-logo'/>
          <Container url="https://www.javascript.com/" img={js} alt='JS-logo'/>
        </div>
    </div>
</section>
    )
}

export default skills;
