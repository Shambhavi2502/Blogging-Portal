import React from 'react';
import '../App.css'; // You may remove this if it's not needed
import img1 from './img/s1.png';
import img2 from './img/s2.png';
import img3 from './img/s3.png';
import img4 from './img/s4.png';

const Services = () => {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <section className="bg-custom-gradient p-12 text-center">
                <h2 className="text-black text-4xl mb-6">Our Services</h2>
                <p className="text-black text-xl mb-10">We provide various services to our bloggers.</p>
                <div className="flex flex-wrap justify-center gap-5">
                    <div className="bg-white border border-gray-300 rounded-lg w-52 p-5 shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
                        <img src={img1} alt="Blog Building" className="w-full h-44 object-cover mb-4" />
                        <h3 className="text-xl mb-3">Blog Building</h3>
                        <p className="text-gray-600 mb-3">Write your blog on this website.</p>
                        <a href="#" className="text-blue-500 font-bold hover:text-blue-700">Read More →</a>
                    </div>
                    <div className="bg-white border border-gray-300 rounded-lg w-52 p-5 shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
                        <img src={img2} alt="Commenting" className="w-full h-44 object-cover mb-4" />
                        <h3 className="text-xl mb-3">Comment</h3>
                        <p className="text-gray-600 mb-3">Comment on the blogs.</p>
                        <a href="#" className="text-blue-500 font-bold hover:text-blue-700">Read More →</a>
                    </div>
                    <div className="bg-white border border-gray-300 rounded-lg w-52 p-5 shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
                        <img src={img3} alt="Online Marketing" className="w-full h-44 object-cover mb-4" />
                        <h3 className="text-xl mb-3">Online Marketing</h3>
                        <p className="text-gray-600 mb-3">Social platform to share thoughts.</p>
                        <a href="#" className="text-blue-500 font-bold hover:text-blue-700">Read More →</a>
                    </div>
                    <div className="bg-white border border-gray-300 rounded-lg w-52 p-5 shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
                        <img src={img4} alt="Email Marketing" className="w-full h-44 object-cover mb-4" />
                        <h3 className="text-xl mb-3">Email Marketing</h3>
                        <p className="text-gray-600 mb-3">Sharing blogs through email.</p>
                        <a href="#" className="text-blue-500 font-bold hover:text-blue-700">Read More →</a>
                    </div>
                </div>
                <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">View More</button>
            </section>
            <button 
                id="scrollToTopBtn" 
                title="Go to top" 
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
};

export default Services;
