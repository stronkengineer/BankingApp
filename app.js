const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const account=require('./models/account')
const service=require('./services/bankingService')
const UserRoutes = require('./routes/userRoutes');
const AccountRoutes = require('./routes/accountRoutes');
const Database = require('./config/db');

const app = express();
const port = 3000;

// Connect to the database
Database.initiateDBConnection();

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Initialize Passport and use sessions to keep track of login status
app.use(session({ secret: 'sessionKey', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Use the LocalStrategy with Passport
passport.use(new LocalStrategy(User.authenticate()));

// Serialize and deserialize user information to support persistent login sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Use the user and account routes
app.use('/users', UserRoutes);
app.use('/accounts', AccountRoutes);

app.listen(port, () => {
    
  console.log(`Server is running at http://localhost:${port}`);
});

// Close the database connection on process exit
process.on('SIGINT', async () => {
  await Database.close();
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});
