import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.png';
import img4 from './img/4.webp';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';

const Gallery = () => {
  return (
    <div className="bg-custom-gradient p-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, index) => (
          <Link key={index} to="/Blog" className="group relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105" onClick={(e) => {
            e.preventDefault();
            const link = e.currentTarget;
            link.style.transition = 'transform 1s, opacity 1s';
            link.style.transform = 'rotateY(180deg) scale(0.5)';
            link.style.opacity = '0';
            setTimeout(() => {
              window.location.href = link.href;
            }, 1000);
          }}>
            <img
                src={img}
                alt={`Gallery ${index + 1}`} // Simplify the alt text
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <h3 className="absolute top-4 left-4 text-2xl font-bold text-white">{[ 'Robotics', 'Artificial Intelligence', 'Augmented Reality (AR) and Virtual Reality (VR)', 'Aerospace Engineering', 'Internet of Things (IoT)', 'Blockchain Technology', 'Cybersecurity', 'Nanotechnology', ][index]}</h3>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-75 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm leading-relaxed">
                {[ 'Robotics involves designing and building robots to perform tasks traditionally done by humans, ranging from industrial automation to space exploration.', 'AI focuses on creating intelligent machines that can mimic human cognitive functions like learning, problem-solving, and decision-making.', 'AR and VR technologies enhance real-world experiences or create immersive simulations, impacting industries from gaming to training and healthcare.', 'Aerospace engineers design aircraft, spacecraft, satellites, and missiles, focusing on aerodynamics, propulsion, and structural design.', 'IoT connects everyday objects to the internet, enabling them to collect and exchange data, leading to smart homes, cities, and industries.', 'Blockchain is a decentralized and secure digital ledger technology used for recording transactions across multiple computers, with applications beyond cryptocurrencies.', 'Cybersecurity technologies protect digital systems, networks, and data from unauthorized access, attacks, and breaches, ensuring privacy and integrity.', 'Nanotechnology involves manipulating matter at the nanoscale to create new materials and devices with applications in electronics, medicine, and environmental science.', ][index]}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
