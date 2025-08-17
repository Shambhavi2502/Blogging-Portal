import React from 'react';
import ProfilePage from './ProfilePage';
import Dashboard from './Dashboard';
import WriteBlogPost from './WriteBlogPost';
import UserBlogPosts from './UserBlogPosts';

const RightSidebar = ({ activePage }) => {
  return (
    <div className="w-full md:w-4/5 h-screen p-10 overflow-y-auto bg-gray-100">
      {activePage === 'profile' && <ProfilePage />}
      {activePage === 'dashboard' && <Dashboard />}
      {activePage === 'write' && <WriteBlogPost />}
      {activePage === 'yourPosts' && <UserBlogPosts />}
      {activePage === 'logout' && <div>Logging out...</div>}
    </div>
  );
};

export default RightSidebar;
