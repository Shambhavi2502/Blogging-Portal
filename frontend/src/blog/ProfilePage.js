import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserCircle, FaEdit } from 'react-icons/fa';

const ProfilePage = ({ onProfileUpdate }) => { // Added onProfileUpdate prop
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    occupation: '',
    workplace: '',
    profilePicture: null,
    expertise: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const id = 'user_id_here'; // Replace with the user's ID
        const response = await axios.get(`http://localhost:4000/api/users/profile/${id}`);
        console.log(response); // Log the response to inspect it
        setUser(response.data);
        setFormData({
          ...response.data,
          dob: response.data.dob ? new Date(response.data.dob).toISOString().split('T')[0] : '', // Convert to YYYY-MM-DD
        });
      } catch (error) {
        console.error('Error fetching user profile:', error.response || error.message);
        setIsNewUser(true);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      if (formData[key] !== null && formData[key] !== undefined) {
        form.append(key, formData[key]);
      }
    }

    try {
      const url = isNewUser
        ? 'http://localhost:4000/api/users/profile'  // POST URL for new user
        : `http://localhost:4000/api/users/profile/${user._id}`;  // PUT URL for existing user
      const method = isNewUser ? 'post' : 'put'; // Determine HTTP method

      const response = await axios({
        method,
        url,
        data: form,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(response); // Log the response to inspect it
      setUser(response.data);
      setFormData({
        ...response.data,
        dob: response.data.dob ? new Date(response.data.dob).toISOString().split('T')[0] : '', // Convert to YYYY-MM-DD
      });
      setIsEditing(false);
      setIsNewUser(false); // Set to false after the first submission
      onProfileUpdate(response.data); // Call to update profile in parent component
    } catch (error) {
      console.error('Error updating user profile:', error.response || error.message);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsNewUser(!user._id); // Determine if the user is new based on user ID
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(user);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">User Profile</h1>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input
              type="file"
              name="profilePicture"
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              //disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob || ''}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation || ''}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Workplace</label>
            <input
              type="text"
              name="workplace"
              value={formData.workplace || ''}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Expertise</label>
            <input
              type="text"
              name="expertise"
              value={formData.expertise || ''}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              {user.profilePicture ? (
                <img
                  src={`http://localhost:4000/${user.profilePicture}`}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className="w-32 h-32 text-gray-400" />
              )}
              <button
                onClick={handleEdit}
                className="flex items-center justify-center mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <FaEdit className="mr-2" /> Edit Profile
              </button>
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <div className="text-center md:text-left">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-sm text-gray-900">{user.name}</p>
            </div>
            <div className="text-center md:text-left">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-sm text-gray-900">{user.email}</p>
            </div>
            <div className="text-center md:text-left">
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <p className="mt-1 text-sm text-gray-900">{user.dob}</p>
            </div>
            <div className="text-center md:text-left">
              <label className="block text-sm font-medium text-gray-700">Occupation</label>
              <p className="mt-1 text-sm text-gray-900">{user.occupation}</p>
            </div>
            <div className="text-center md:text-left">
              <label className="block text-sm font-medium text-gray-700">Workplace</label>
              <p className="mt-1 text-sm text-gray-900">{user.workplace}</p>
            </div>
            <div className="text-center md:text-left">
              <label className="block text-sm font-medium text-gray-700">Expertise</label>
              <p className="mt-1 text-sm text-gray-900">{user.expertise}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
