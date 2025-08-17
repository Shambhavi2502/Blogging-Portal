import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import BlogPage from './blog/BlogPage';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const AppRouter = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path='/blogpage' element={<BlogPage />}/>
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    </Routes>
                    <Footer />
                    <ScrollToTopButton />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default AppRouter;
