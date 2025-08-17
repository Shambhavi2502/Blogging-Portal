import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Show button after scrolling 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button 
            className={`fixed bottom-8 right-8 bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform duration-300 ${isVisible ? 'block' : 'hidden'} hover:bg-blue-700 hover:translate-y-[-3px]`} 
            title="Go to top" 
            onClick={scrollToTop}
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default ScrollToTopButton;
