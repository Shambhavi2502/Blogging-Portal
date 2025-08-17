import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png'; 
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isLoggedIn, logout } = useAuth();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="w-full bg-black text-white py-2 z-50">
            <div className="w-[90%] mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="Logo" width="80" height="40" />
                </Link>
                
                <button 
                    className="text-white block md:hidden"
                    onClick={toggleMenu}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 6h16M4 12h16M4 18h16" 
                        />
                    </svg>
                </button>
                
                <nav className={`md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'fixed top-2 right-2 bg-black text-black border border-black rounded-lg shadow-lg w-60 z-50' : 'hidden'} md:block`}>
                    {isMenuOpen && (
                        <button 
                            className="absolute top-2 right-2 text-black text-3xl" 
                            onClick={toggleMenu}
                        >
                            &times;
                        </button>
                    )}
                    <ul className="flex flex-col md:flex-row list-none m-0 p-4">
                        <li className="mx-2 uppercase">
                            <Link to="/" onClick={handleLinkClick} className="text-white font-bold p-2 transition duration-300 hover:bg-gray-800 rounded">Home</Link>
                        </li>
                        <li className="mx-2 uppercase">
                            <Link to="/about" onClick={handleLinkClick} className="text-white font-bold p-2 transition duration-300 hover:bg-gray-800 rounded">About</Link>
                        </li>
                        <li className="mx-2 uppercase">
                            <Link to="/gallery" onClick={handleLinkClick} className="text-white font-bold p-2 transition duration-300 hover:bg-gray-800 rounded">Gallery</Link>
                        </li>
                        <li className="mx-2 uppercase">
                            <Link to={isLoggedIn ? '/blogpage' : '/blog'} onClick={handleLinkClick} className="text-white font-bold p-2 transition duration-300 hover:bg-gray-800 rounded">Blog</Link>
                        </li>
                        <li className="mx-2 uppercase">
                            <Link to="/services" onClick={handleLinkClick} className="text-white font-bold p-2 transition duration-300 hover:bg-gray-800 rounded">Services</Link>
                        </li>
                        <li className="mx-2 uppercase">
                            <Link to="/contact" onClick={handleLinkClick} className="text-white font-bold p-2 transition duration-300 hover:bg-gray-800 rounded">Contact</Link>
                        </li>
                        {isLoggedIn && (
                            <li className="mx-2 uppercase">
                                <button onClick={logout} className="text-white font-bold p-2 transition duration-300 hover:bg-gray-800 rounded">Logout</button>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
