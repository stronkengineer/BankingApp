

const express = require('express');
const passport = require('passport');
const UserService = require('../services/bankingService');

class UserController {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post('/create', this.createUser.bind(this));
    this.router.get('/:userId', this.getUserById.bind(this));
    this.router.put('/:userId', this.updateUser.bind(this));
    this.router.delete('/:userId', this.deleteUser.bind(this));
    this.router.post('/transaction', this.makeTransaction.bind(this));
  }

  async createUser(req, res) {
    try {
      const { username, password, fullName } = req.body;
      const newUser = await UserService.createUser(username, password, fullName);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }

  async getUserById(req, res) {
    try {
      const { userId } = req.params;
      const user = await UserService.getUserById(userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }

  async updateUser(req, res) {
    try {
      const { userId } = req.params;
      const updatedData = req.body;
      const updatedUser = await UserService.updateUser(userId, updatedData);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }

  async deleteUser(req, res) {
    try {
      const { userId } = req.params;
      const deletedUser = await UserService.deleteUser(userId);
      res.json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }

  async makeTransaction(req, res) {
    try {
      const { senderId, receiverId, amount } = req.body;
      const result = await UserService.makeTransaction(senderId, receiverId, amount);
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }
}

module.exports = new UserController().router;
