import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import BlogPage from './blog/BlogPage';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            
            <BlogPage />
            
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;