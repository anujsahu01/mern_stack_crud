import React from 'react';

import CardTab from './CardTab';
import '../css_files/Home.css';
// import  Navbar from '../Navbar.jsx';

const Home = () => {
  return (
    <>
    {/* <Navbar /> */}
      <div className="slider-container position-relative overflow-hidden">

        {/* === Static Text (LEFT SIDE) === */}
        <div className="text-overlay text-white position-absolute top-50 start-0 translate-middle-y ms-5">
          <h2 className="fw-bold display-6">Hello, Welcome To . . .</h2>
          <button className="btn btn-outline-light mt-3 btn-lg">E-Commerce!</button>
        </div>

        

        {/* === Scrolling Image Track === */}
        <div id="slider-track" className="slider-track d-flex" onMouseEnter={pauseAnimation} onMouseLeave={resumeAnimation}>
          <img src="./images/bg-img1.avif" className="slider-image" alt="img1" />
          <img src="./images/bg-img4.avif" className="slider-image" alt="img2" />
          <img src="./images/bg-img5.avif" className="slider-image" alt="img3" />
          <img src="./images/bg-img6.avif" className="slider-image" alt="img4" />
          {/* Duplicates for looping */}
          <img src="./images/bg-img1.avif" className="slider-image" alt="img1-copy" />
          <img src="./images/bg-img4.avif" className="slider-image" alt="img2-copy" />
          <img src="./images/bg-img5.avif" className="slider-image" alt="img3-copy" />
        </div>
      </div>

      <CardTab />
    </>
  );
};


// Pause on Hover
const pauseAnimation = () => {
  const track = document.getElementById('slider-track');
  track.style.animationPlayState = 'paused';
};

// Resume on Mouse Leave
const resumeAnimation = () => {
  const track = document.getElementById('slider-track');
  track.style.animationPlayState = 'running';
};

export default Home;
