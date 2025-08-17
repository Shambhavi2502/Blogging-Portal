import React, { useState, useEffect } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const renderFileContent = (file) => {
  if (!file) return null;

  // Assuming `file` is a URL or path
  const fileURL = file;
  const fileExtension = fileURL.split('.').pop().toLowerCase();

  if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif') {
      return <img src={fileURL} alt="Post Content" className="w-full h-auto object-cover mb-3" />;
  }

  if (fileExtension === 'mp4' || fileExtension === 'mp3') {
      return (
          <video controls className="w-full h-auto mb-3">
              <source src={fileURL} type={`video/${fileExtension}`} />
              Your browser does not support the video tag.
          </video>
      );
  }

  if (fileExtension === 'pdf') {
      return (
          <a href={fileURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View PDF Document
          </a>
      );
  }

  if (['txt', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'].includes(fileExtension)) {
      return (
          <a href={fileURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View Document
          </a>
      );
  }

  return <div className="text-gray-500">File type not supported for preview</div>;
};


const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleVote = (postId, voteType) => {
    const updatedPosts = posts.map(post => {
      if (post._id === postId) {
        return {
          ...post,
          [voteType]: (post[voteType] || 0) + 1
        };
      }
      return post;
    });
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <input
        type="text"
        placeholder="Search..."
        className="w-full mb-5 p-2 border border-gray-300 rounded"
      />
      {posts.map(post => (
        <div key={post._id} className="mb-4 p-4 border border-gray-200 rounded">
          <div className="flex items-center mb-2">
            {post.user.profilePicture ? (
              <img
                src={`http://localhost:4000/${post.user.profilePicture}`}
                alt="Profile"
                className="w-10 h-10 rounded-full mr-2"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                <i className="fas fa-user text-gray-400"></i>
              </div>
            )}
            <div>
              <span className="font-bold">{post.user.name}</span>
              <p className="text-sm text-gray-600">{post.user.occupation} at {post.user.workplace}</p>
              <p className="text-sm text-gray-600">Expertise: {post.user.expertise}</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          {post.files && post.files.map((file, index) => (
            <div key={index} className="mt-2">
              {renderFileContent(file)}
            </div>
          ))}
          <div className="mt-2 text-sm text-gray-600">{post.timestamp}</div>
          <div className="flex mt-2">
            <button
              onClick={() => handleVote(post._id, 'hits')}
              className="mr-4 text-green-500 hover:text-green-700"
            >
              <FaThumbsUp /> Hit ({post.hits || 0})
            </button>
            <button
              onClick={() => handleVote(post._id, 'flops')}
              className="text-red-500 hover:text-red-700"
            >
              <FaThumbsDown /> Flop ({post.flops || 0})
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
