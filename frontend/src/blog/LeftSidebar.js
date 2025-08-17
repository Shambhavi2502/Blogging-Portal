// LeftSidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeftSidebar = ({ setActivePage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('activePage');  // Clear the active page on logout
    setActivePage('logout'); 
    navigate('/blog'); 
  };

  return (
    <div className="w-full md:w-1/5 h-screen bg-gray-800 text-white flex flex-col items-center py-10 space-y-4">
      <button onClick={() => setActivePage('profile')} className="flex items-center w-full px-6 py-3 hover:bg-gray-600 rounded-md">
        <i className="fas fa-user mr-3"></i> Profile
      </button>
      <button onClick={() => setActivePage('dashboard')} className="flex items-center w-full px-6 py-3 hover:bg-gray-600 rounded-md">
        <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
      </button>
      <button onClick={() => setActivePage('write')} className="flex items-center w-full px-6 py-3 hover:bg-gray-600 rounded-md">
        <i className="fas fa-pen mr-3"></i> Write Blog
      </button>
      <button onClick={() => setActivePage('yourPosts')} className="flex items-center w-full px-6 py-3 hover:bg-gray-600 rounded-md">
        <i className="fas fa-blog mr-3"></i> Your Blog Posts
      </button>
      <button onClick={handleLogout} className="flex items-center w-full px-6 py-3 hover:bg-gray-600 rounded-md">
        <i className="fas fa-sign-out-alt mr-3"></i> Logout
      </button>
    </div>
  );
};

export default LeftSidebar;
