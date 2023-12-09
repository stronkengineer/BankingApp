const express = require('express');
const AccountService = require('../services/bankingService');

const router = express.Router();

// Create a new account
router.post('/create', async (req, res) => {
  try {
    const { accountNumber, balance, userId } = req.body;
    const newAccount = await AccountService.createAccount(accountNumber, balance, userId);
    res.json(newAccount);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

// Get account balance for a specific user
router.get('/balance/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const balance = await AccountService.getAccountBalance(userId);
    res.json({ balance });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

// Update account balance (for example, in the case of a transaction)
router.post('/update-balance', async (req, res) => {
  try {
    const { userId, amount } = req.body;
    await AccountService.updateAccountBalance(userId, amount);
    res.json({ message: 'Account balance updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

module.exports = router;
