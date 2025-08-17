// BlogPage.js
import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import '../App.css';

const BlogPage = () => {
  const [activePage, setActivePage] = useState(() => {
    // Check localStorage for the last active page
    return localStorage.getItem('activePage') || 'dashboard';
  });

  useEffect(() => {
    // Persist the active page in localStorage whenever it changes
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  return (
    <div className="flex">
      <LeftSidebar setActivePage={setActivePage} />
      <RightSidebar activePage={activePage} />
    </div>
  );
};

export default BlogPage;
