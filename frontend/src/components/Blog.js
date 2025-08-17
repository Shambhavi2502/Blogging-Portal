import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthenticationComponent = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if token is present in localStorage on component mount
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/blogpage'); // Redirect to BlogPage if token exists
        }
    }, [navigate]);

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };

    const handleSocialLogin = (provider) => {
        console.log(`Logging in with ${provider}`);
        navigate('/blogpage'); // Redirect to BlogPage
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        const passwordRequirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
        setPasswordValid(passwordRequirements.test(newPassword));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value.toLowerCase(); // Convert email to lowercase
        const name = e.target.name?.value;

        try {
            if (isLogin) {
                const response = await axios.post('http://localhost:5000/api/auth/login', {
                    email,
                    password
                });
                const token = response.data.token;
                console.log('Login response:', response.data);
                localStorage.setItem('token', token);
                window.addEventListener('beforeunload', handleLogout);
                navigate('/blogpage'); // Redirect to BlogPage
            } else {
                const response = await axios.post('http://localhost:5000/api/auth/signup', {
                    email,
                    password,
                    name
                });
                setMessage(response.data.message);
                setTimeout(() => {
                    setIsLogin(true);
                    setMessage('');
                }, 2000);
            }
        } catch (error) {
            console.error('Login/Signup error:', error.response || error.message);
            if (isLogin) {
                setMessage('No login id found or wrong email or wrong password');
            } else {
                if (error.response && error.response.status === 409) {
                    setMessage('Already registered');
                } else {
                    setMessage('An error occurred. Please try again.');
                }
            }
        }
    };

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        const email = e.target['reset-email'].value.toLowerCase(); // Convert email to lowercase
        console.log('Password reset email sent to', email);
        setShowForgotPassword(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setMessage('You have been logged out.');
        navigate('/login'); // Redirect to Login Page
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-8">
                    {isLogin ? 'Login to Your Account' : 'Create an Account'}
                </h2>
                {message && (
                    <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-3 border border-gray-300 rounded"
                                required
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-3 border border-gray-300 rounded"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        {!isLogin && (
                            <div className="mt-2 text-sm">
                                <p className={passwordValid ? 'text-green-600' : 'text-red-600'}>
                                    Password must be at least 7 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.
                                </p>
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        disabled={!passwordValid && !isLogin}
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <div className="text-center mt-6">
                    <button
                        onClick={toggleAuthMode}
                        className="text-blue-600 hover:underline"
                    >
                        {isLogin ? 'Create an Account' : 'Already have an account? Login'}
                    </button>
                </div>
                {isLogin && (
                    <div className="text-center mt-4">
                        <button
                            onClick={() => setShowForgotPassword(true)}
                            className="text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>
                )}
                <div className="text-center mt-6">
                    <p className="text-gray-600 mb-4">Or {isLogin ? 'login' : 'sign up'} with:</p>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => handleSocialLogin('Google')}
                            className="text-white bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                        >
                            <FontAwesomeIcon icon={faGoogle} size="lg" />
                        </button>
                        <button
                            onClick={() => handleSocialLogin('Facebook')}
                            className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </button>
                        <button
                            onClick={() => handleSocialLogin('GitHub')}
                            className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-900 transition-colors"
                        >
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </button>
                        <button
                            onClick={() => handleSocialLogin('Microsoft')}
                            className="text-white bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition-colors"
                        >
                            <FontAwesomeIcon icon={faMicrosoft} size="lg" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Forgot Password Modal */}
            {showForgotPassword && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4">Forgot Password</h3>
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <div className="mb-4">
                                <label htmlFor="reset-email" className="block text-sm font-medium mb-1">
                                    Enter your email
                                </label>
                                <input
                                    type="email"
                                    id="reset-email"
                                    name="reset-email"
                                    className="w-full p-3 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                            >
                                Send Reset Link
                            </button>
                        </form>
                        <div className="text-center mt-4">
                            <button
                                onClick={() => setShowForgotPassword(false)}
                                className="text-blue-600 hover:underline"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthenticationComponent;
