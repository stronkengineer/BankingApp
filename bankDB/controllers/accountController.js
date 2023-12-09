
const express = require('express');
const AccountService = require('../services/bankingService');

class AccountController {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post('/create', this.createAccount.bind(this));
    this.router.get('/balance/:userId', this.getAccountBalance.bind(this));
   
  }

  async createAccount(req, res) {
    try {
      const { accountNumber, accountType, balance, userId } = req.body;
      const newAccount = await AccountService.createAccount(userId);
      res.json(newAccount);
    } catch (error) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }

  async getAccountBalance(req, res) {
    try {
      const { userId } = req.params;
      const balance = await AccountService.getAccountBalance(userId);
      res.json({ balance });
    } catch (error) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }

  

}

module.exports = new AccountController().router;