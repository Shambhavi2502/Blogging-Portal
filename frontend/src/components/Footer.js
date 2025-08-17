import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-5">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Navigation Links */}
                <div className="mb-5 md:mb-0 flex flex-col md:flex-row md:items-center">
                    <ul className="flex flex-wrap justify-center md:justify-start space-x-4 list-none p-0">
                        <li><Link to="/" className="text-white font-bold transition duration-300 hover:text-blue-500">Home</Link></li>
                        <li><Link to="/about" className="text-white font-bold transition duration-300 hover:text-blue-500">About</Link></li>
                        <li><Link to="/gallery" className="text-white font-bold transition duration-300 hover:text-blue-500">Gallery</Link></li>
                        <li><Link to="/blog" className="text-white font-bold transition duration-300 hover:text-blue-500">Blog</Link></li>
                        <li><Link to="/services" className="text-white font-bold transition duration-300 hover:text-blue-500">Services</Link></li>
                        <li><Link to="/contact" className="text-white font-bold transition duration-300 hover:text-blue-500">Contact</Link></li>
                        <li><Link to="/privacy-policy" className="text-white font-bold transition duration-300 hover:text-blue-500">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 mb-5 md:mb-0">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl transition duration-300 hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl transition duration-300 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl transition duration-300 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl transition duration-300 hover:text-blue-500"><i className="fab fa-linkedin-in"></i></a>
                </div>

                {/* Footer Text */}
                <div className="text-center md:text-left mt-5 md:mt-0">
                    <p className="text-sm">&copy; 2024 Blog Website. All rights reserved.</p>
                    <p className="text-sm">About Company: Team Tech Mavericks</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
