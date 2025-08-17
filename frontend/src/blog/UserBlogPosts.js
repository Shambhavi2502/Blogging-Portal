import React, { useState, useEffect } from 'react';

const renderFileContent = (file) => {
  if (!file) return null;

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

const UserBlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (postId) => {
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const updatedPosts = existingPosts.filter(post => post._id !== postId);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Blog Posts</h2>
      {posts.map(post => (
        <div key={post._id} className="relative mb-4 p-4 border border-gray-200 rounded">
          <button 
            onClick={() => handleDelete(post._id)} 
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <div className="flex items-center mb-2">
            {post.user.profilePicture ? (
              <img
                src={post.user.profilePicture}
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
          <div className="mt-2 text-sm text-gray-600">
            Hits: {post.hits || 0} | Flops: {post.flops || 0}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserBlogPosts;
