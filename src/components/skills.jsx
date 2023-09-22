import React from 'react';
import python from '../assets/images/python.png';
import java from '../assets/images/java.png';
import './CSS/skills.css';

function skills(){
    return( 
    <section id="skills" class="justify-content-center mt-3 border-bottom">
    <h2 class="my-skills display-4 lh-1 mt-4 text-center justify-content-center">My Skills</h2>
    <div class="container text-center mt-5">
        <div class="row">
          <div class="col-lg-6 mt-5">
            <a href = "https://www.python.org/">
            <img src={python} alt="python-logo" height="60" /></a>
            <p class="col-lg-8 mx-auto lead mt-5">I have knowledge of Python Programming Language and it's known libraries.</p>
          </div>
          <div class="col-lg-6 mt-5">
            <a href="https://www.java.com/">
            <img src={java} alt="java-logo" height="60" /></a>
            <p class="col-lg-8 mx-auto lead mt-5">Have knowledge in Object Oriented Programming and Framesworks in Java Programming Language.</p>
          </div>
        </div>
    </div>
</section>
    )
}

export default skills;
