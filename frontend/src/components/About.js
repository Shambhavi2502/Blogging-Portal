import React, { useState } from 'react';
import img1 from './img/logo.png';
import img2 from './img/hero.png';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('overview'); // State to manage the current section

  const openModal = (section) => {
    setCurrentSection(section);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <section id="about" className="bg-gradient-to-br from-red-600 to-pink-300 py-12">
        <div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0 h-auto rounded shadow-lg p-5 bg-transparent">
            <h1 className="text-3xl font-bold mb-4 text-black">About Us</h1>
            <p className="text-lg mb-4 text-black">Welcome to myBlog! We're thrilled you've found your way here. This blog is your one-stop shop for INDUSTRIAL UPDATES.</p>
            <p className="text-lg mb-4 text-black"><strong>Why We Do? What We Do?</strong></p>
            <p className="text-lg mb-4 text-black">We started myBlog! because we're passionate about TECHNOLOGIES. We believe that the value our blog provides to readers, e.g., learning new things, being entertained, solving problems.</p>
            <button 
              onClick={() => openModal('overview')} 
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Read More
            </button>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img src={img1} alt="About Us" className='p-10'/>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-between items-center mt-12">
          <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img src={img2} alt="About Us" className='p-10'/>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0 h-auto rounded shadow-lg p-10 bg-transparent">
            <p className="text-lg mb-4 text-black"><strong>What You Can Expect?</strong></p>
            <p className="text-lg mb-4 text-black">Here, you'll find a variety of engaging content, including:</p>
            <ul className="list-disc list-inside mb-4 text-black">
              <li>Informative articles offering the type of content we provide, e.g., in-depth guides, how-to lists, reviews</li>
              <li>Thought-provoking discussions on Technologies</li>
              <li>Other content formats We use, e.g., interviews with experts, personal stories</li>
            </ul>
            <p className="text-lg mb-4 text-black">We aim to make myBlog Name a place where we can the benefits readers get from your blog, e.g., gain valuable knowledge, feel inspired, be part of a community.</p>
            <button 
              onClick={() => openModal('details')} 
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 opacity-100">
          <div className="relative bg-opacity-90 bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 transform transition-transform duration-300 scale-100 md:max-w-4xl">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl transition-colors duration-300"
            >
              &times;
            </button>
            {currentSection === 'overview' && (
              <>
                <h2 className="text-2xl font-bold mb-4">Detailed Overview of Our Portal</h2>
                <p className="text-lg mb-4">Our blogging portal offers a comprehensive suite of tools and features designed to make blogging easy and effective:</p>
                <ul className="list-disc list-inside mb-4">
                  <li><strong>Intuitive Interface:</strong> A clean, user-friendly interface that simplifies navigation and content management.</li>
                  <li><strong>Customizable Themes:</strong> Choose from various themes and customization options to tailor your blog’s appearance.</li>
                  <li><strong>Rich Content Editor:</strong> A powerful editor that supports text formatting, multimedia integration, and SEO optimization.</li>
                  <li><strong>Engagement Tools:</strong> Features such as comment sections, social media integration, and sharing options to foster community interaction.</li>
                  <li><strong>Analytics Dashboard:</strong> Track your blog’s performance with comprehensive analytics and reporting tools.</li>
                </ul>
                <button 
                  onClick={() => openModal('details')} 
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
                >
                  Read More Details
                </button>
              </>
            )}

            {currentSection === 'details' && (
              <>
                <h2 className="text-2xl font-bold mb-4">In-Depth Details of Our Blogging Features</h2>
                <p className="text-lg mb-4">Our platform offers a range of advanced features to enhance your blogging experience:</p>
                <ul className="list-disc list-inside mb-4">
                  <li><strong>Advanced SEO Tools:</strong> Optimize your content for search engines with built-in SEO recommendations and analysis.</li>
                  <li><strong>Content Scheduling:</strong> Plan and schedule your posts in advance to maintain a consistent publishing schedule.</li>
                  <li><strong>Monetization Options:</strong> Integrate various monetization strategies, such as affiliate marketing, ads, and sponsored posts.</li>
                  <li><strong>Custom Analytics:</strong> Utilize advanced analytics to gain insights into your audience and content performance.</li>
                  <li><strong>Community Management:</strong> Manage and engage with your readers through moderation tools, notifications, and user profiles.</li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}

      <button 
        id="scrollToTopBtn" 
        title="Go to top" 
        className="fixed bottom-8 right-8 bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform duration-300 hover:bg-blue-700 hover:translate-y-[-3px]"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default About;
