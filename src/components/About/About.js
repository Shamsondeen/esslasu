import React from 'react';
import logo from "../../assets/logo.jpg";
import Footer from '../Footer/Footer';

import './About.css';

const About = () => {
    return (
        <React.Fragment>
      <div className="about">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h1 className="mt-5">ABOUT US</h1>
        <p>Engineering students' society, Lagos State University (ESS-LASU) 
          is an association of engineering students in LASU. We have about 
          850-1000 students from the available four (4) engineering departments in LASU, 
          namely; Mechanical Engineering,Electronics and Computer Engineering, Chemical and Polymer Engineering 
          and Aerospace Engineering. Hence, we are one indivisible and united body, 
          focused on improving technology and common sense. </p>
      </div>
      <div className="col-md-4 mt-5">
        <div className="ess mt-3">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    </div>
  </div>
  </div>
  <div className="vismis">
  <div className="col-md-12 mt-4">
    <h1 className="text-center">
      VISION
    </h1>
    <p className="text-center">Bring inspiration and innovation to every engineers student and to be widely known for dominance and excellence</p>
  </div>
  <div className="col-md-12 mt-4">
    <h1 className="text-center">
      MISSION
    </h1>
    <p className="text-center">To aid engineering minds fulfil their potentials by spreading the power of focus and hope.</p>
  </div>
</div>
     <Footer/> 
        </React.Fragment>
    )
}
export default About;
