import React from 'react';
import './CSS/title.css';
import cam from '../assets/images/camera.png';
import plane from '../assets/images/aeroplane.png';
import memoji from '../assets/images/Memoji.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function title(){
    return(
        <section id="title" className="gradient-background">
        <div className="container col-xxl- py-10 ">
            <img className="top-camera" src={cam} alt="camera" height="150px" width="150px" />
            <img className="top-plane" src={plane} alt="aeroplane" height="150px" width="200px" />
            <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
              <div className="col-lg-8 overflow-hidden memoji">
                <img src={memoji} className="d-block mx-lg-auto img-fluid position-relative meme" alt="Memoji" height="700px" loading="lazy" />
              </div>
              <div className="col-lg-4">
                <h1 className="display-1 fw-bold text-body-emphasis mb-4 typewriter">Hello!</h1>
                <p className="lead" id="title-name">This is Abhineet Saha</p>
                <p className="lead" id="title-name">An 18 year old programmer</p>
                </div>
              </div>
            </div>
    </section>
    )
}

export default title;