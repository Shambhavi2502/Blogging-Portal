import React from 'react';
import videoSrc from './img/v1.mp4';
import '../index.css';

const Home = () => {
  return (
    <section id="home" className="h-screen relative flex justify-center items-center text-white text-center p-5">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-1"></div>
      <div className="intro relative z-2">
        <h2 className="text-4xl font-bold m-0">Welcome to Our Blogging Website</h2>
        <br></br>
        <p className="intro-subtitle relative overflow-hidden mt-5">
          <span className="text-slider inline-block animate-typing overflow-hidden border-r-2 border-white">
            Let's Start Blog Together Today Only!
          </span>
        </p>
        <button className="btn mt-5 py-2.5 px-5 bg-blue-500 text-white border-none rounded text-lg cursor-pointer transition duration-300 hover:bg-blue-700" onClick={() => window.location.href = '/about'}>
          <strong>Learn More</strong>
        </button>
      </div>
    </section>
  );
};

export default Home;
