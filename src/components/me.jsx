import React from 'react';
import './CSS/me.css';
import profile from '../assets/images/288223737_1035273847378880_6238227235647528302_n.jpeg';


function skills(){
    return(
        <section id="me" className="">
        <div className="">
            <div className="justify-content-center text-center bg-body-tertiary ">
              <div className="container py-5">
                <img src={profile} className="profile-img py-2 m-5" title="Me!" />
                <p className="col-lg-8 mx-auto lead">I am a Student currently pursuing my B.Tech Degree in Computer Science Engineering</p>
                <p className="col-lg-8 mx-auto lead">I am interested in Software Development, Ethical Hacking.</p>
              </div>
            </div>
          </div>
    </section>
    )
}

export default skills;