import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the database when the component mounts
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await fetch('/api/user', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          const userData = await response.json();
          setUser(userData);  
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const logout = () => {
    // Clear token
    localStorage.removeItem('token');

    // Navigate to blog page
    navigate('/blog');
  };

  return (
    <PostContext.Provider value={{ user, logout }}>
      {children}
    </PostContext.Provider>
  );
};
