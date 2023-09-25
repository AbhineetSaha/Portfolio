import React from 'react';
import python from '../assets/images/python.png';
import java from '../assets/images/java.png';
import './CSS/skills.css';


function Container(props){
  console.log(props);
  return (
    <div className="col-lg-6 mt-5">
      <a href = {props.url}>
      <img src={props.img} alt={props.alt} height="60" /></a>
      <p className="col-lg-8 mx-auto lead mt-5">{props.p}</p>
    </div>
  );
}

function skills(){
    return( 
    <section id="skills" className="justify-content-center mt-3 border-bottom">
    <h2 className="my-skills display-4 lh-1 mt-4 text-center justify-content-center">My Skills</h2>
    <div className="container text-center mt-5">
        <div className="row">
          <Container url="https://www.python.org/" img={python} alt='python-logo' p="I have knowledge of Python ogramming Language and it's known libraries."/>
          <Container url="https://www.java.com/" img={java} alt='java-logo' p="Have knowledge in Object Oriented Programming and Framesworks in Java Programming Language."/>
        </div>
    </div>
</section>
    )
}

export default skills;
