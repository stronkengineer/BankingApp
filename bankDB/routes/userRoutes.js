const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

// POST - Create a new user (Signup)
router.post('/signup', async (req, res) => {
  try {
    const { username, password, fullName } = req.body;
    const newUser = new User({ username, fullName });
    await User.register(newUser, password);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

// POST - User login
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login successful', user: req.user });
});

// GET - Get current user
router.get('/current', (req, res) => {
  res.json(req.isAuthenticated() ? req.user : null);
});

// GET - Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Logout successful' });
});

module.exports = router;
