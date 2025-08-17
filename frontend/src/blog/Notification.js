//Notification.js
import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded shadow-lg">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white">X</button>
    </div>
  );
};

export default Notification;
