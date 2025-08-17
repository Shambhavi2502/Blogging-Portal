import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDropzone } from 'react-dropzone';

const customToolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean'],
];

const WriteBlogPost = ({ userProfile }) => { // Accept userProfile as a prop
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);
  const [notification, setNotification] = useState('');

  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map(file => ({
      name: file.name,
      preview: URL.createObjectURL(file),
      file: file,
    }));
    setFiles([...files, ...newFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Revoke data uris to avoid memory leaks
  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      alert('Please provide both a title and content for your blog post.');
      return;
    }
  
    // Check if userProfile is defined and has name and profilePicture properties
    const userName = userProfile?.name || 'Anonymous'; // Fallback to 'Anonymous' if userProfile or name is not available
    const userProfilePicture = userProfile?.profilePicture || 'path/to/default/profile/picture.jpg'; // Default profile picture
  
    const newPost = {
      title,
      content,
      files: files.map(file => file.preview),
      user: {
        name: userName,
        profilePicture: userProfilePicture,
      },
      timestamp: new Date().toLocaleString(),
      _id: Date.now(),
    };
  
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    existingPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
  
    // Reset form and show notification
    setTitle('');
    setContent('');
    setFiles([]);
    setNotification('Blog post submitted successfully!');
    
    // Automatically hide notification after 3 seconds
    setTimeout(() => setNotification(''), 3000);
  };
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Write a Blog Post</h2>
      {notification && <div className="bg-green-500 text-white p-2 mb-4 rounded">{notification}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={{ toolbar: customToolbarOptions }}
            className="w-full p-2 border border-gray-300 rounded"
            rows="10"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Media</label>
          <div {...getRootProps()} className="p-4 border border-dashed border-gray-300 rounded cursor-pointer">
            <input {...getInputProps()} />
            <p>Drag & drop some files here, or click to select files</p>
          </div>
          <ul className="mt-2">
            {files.map((file, index) => (
              <li key={index}>
                {file.name} - <a href={file.preview} target="_blank" rel="noopener noreferrer">Preview</a>
              </li>
            ))}
          </ul>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WriteBlogPost;
