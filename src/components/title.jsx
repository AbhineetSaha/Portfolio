import React from 'react';
import './CSS/title.css';
import cam from '../assets/images/camera.png';
import plane from '../assets/images/aeroplane.png';
import memoji from '../assets/images/Memoji.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function title(){
    return(
        <section id="title" className="gradient-background">
        <div className="container py-10 ">
            <div className="row flex-lg align-items-center g-5 pt-5">
              <div className="col-lg-5 col-md-6 col-sm-5">
                <h1 className="display-1 fw-bold text-body-emphasis mb-4 typewriter">Hello!</h1>
                <p className="lead mb-1" id="title-name">This is Abhineet Saha</p>
                <p className="lead" id="title-name">An 18 year old programmer</p>
              </div>
              <div className="col-lg-7 col-md-5 col-sm-7 overflow-hidden justify-content-center memoji">
                <img className="d-block mx-lg-auto img-fluid top-camera" src={cam} alt="camera" />
                <img className="d-block mx-lg-auto img-fluid top-plane" src={plane} alt="aeroplane"  />
                <img src={memoji} className="d-block mx-lg-auto img-fluid meme" alt="Memoji" loading="lazy" />
              </div>
                </div>
              </div>
    </section>
    )
}

export default title;