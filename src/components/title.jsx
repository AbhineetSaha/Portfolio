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
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={memoji} className="d-block mx-lg-auto img-fluid meme" alt="Memoji" height="700px" loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 classNameName="display-3 fw-bold text-body-emphasis lh-1 mb-4">Hello!</h1>
                <p className="lead" id="title-name">This is Abhineet Saha</p>
                <p className="lead" id="title-name">An 18 year old programmer</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                </div>
              </div>
            </div>
          </div>
    </section>
    )
}

export default title;