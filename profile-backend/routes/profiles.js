const express = require('express');
const router = express.Router();
const User = require('../models/Profiles');

const formatDate = (dateStr, toBackend = true) => {
  if (!dateStr) return null; 

  let [year, month, day] = dateStr.split('-');

  if (toBackend) {
    
    if (!year || !month || !day || isNaN(year) || isNaN(month) || isNaN(day)) {
      throw new Error('Invalid date format');
    }
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  } else {
    
    return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`;
  }
};


router.post('/profile', async (req, res) => {
  try {
    const { name, email, password, dob, occupation, workplace, expertise } = req.body;
    let profilePicture = '';

    const formattedDob = dob ? formatDate(dob) : null; 

    if (req.file) {
      profilePicture = req.file.path;
    }

    const user = await User.findOneAndUpdate({ email },
      { name, password, dob: formattedDob, occupation, workplace, profilePicture, expertise },
      { new: true, upsert: true }
    );

    res.status(200).json(user);
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ message: error.message });
  }
});


router.get('/profile/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.dob = user.dob ? formatDate(user.dob, false) : null; 

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: error.message });
  }
});


router.put('/profile/:id', async (req, res) => {
  try {
    const { name, password, dob, occupation, workplace, expertise } = req.body;
    let profilePicture = '';

    const formattedDob = dob ? formatDate(dob) : null; 

    if (req.file) {
      profilePicture = req.file.path;
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, password, dob: formattedDob, occupation, workplace, profilePicture, expertise },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: error.message });
  }
});


router.delete('/profile/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User profile deleted successfully' });
  } catch (error) {
    console.error('Error deleting user profile:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
