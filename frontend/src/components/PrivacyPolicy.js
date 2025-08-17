import React, { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
    const [bgColor, setBgColor] = useState('bg-blue-100');
    const colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-pink-100', 'bg-orange-100', 'bg-red-100', 'bg-purple-100' ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBgColor(prevColor => {
                const currentIndex = colors.indexOf(prevColor);
                const nextIndex = (currentIndex + 1) % colors.length;
                return colors[nextIndex];
            });
        }, 5000); // Change color every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${bgColor} min-h-screen flex items-center justify-center py-8 px-4 transition-colors duration-1000`}>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full transition-transform transform hover:scale-105">
                <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
                <p className="text-lg mb-4 text-gray-600">Date: 1 JULY, 2024</p>
                <p className="text-lg mb-4 text-gray-700">
                    Welcome to Blog Website! We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share your personal information when you visit or use our website.
                </p>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">1. Information We Collect</h2>
                <p className="text-lg mb-4 text-gray-700">
                    We may collect and process the following types of information:
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li>Personal identification information (e.g., name, email address)</li>
                    <li>Usage data (e.g., IP address, browser type, and pages visited)</li>
                </ul>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">2. How We Use Your Information</h2>
                <p className="text-lg mb-4 text-gray-700">
                    We use your information to:
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li>Provide and maintain our website</li>
                    <li>Improve your experience on our website</li>
                    <li>Communicate with you about updates and changes</li>
                </ul>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">3. Sharing Your Information</h2>
                <p className="text-lg mb-4 text-gray-700">
                    We do not share your personal information with third parties except as required by law or for business purposes.
                </p>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">4. Security</h2>
                <p className="text-lg mb-4 text-gray-700">
                    We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
                </p>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">5. Your Rights</h2>
                <p className="text-lg mb-4 text-gray-700">
                    You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.
                </p>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">6. Changes to This Privacy Policy</h2>
                <p className="text-lg mb-4 text-gray-700">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                </p>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">7. Contact Us</h2>
                <p className="text-lg mb-4 text-gray-700">
                    If you have any questions about this Privacy Policy, please contact us at [contact information].
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
