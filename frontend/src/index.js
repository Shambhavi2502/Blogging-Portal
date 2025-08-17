// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';
import { AuthProvider } from './context/AuthContext'; // Import the provider

ReactDOM.render(
    <AuthProvider>
        <AppRouter />
    </AuthProvider>,
    
    document.getElementById('root')
);

