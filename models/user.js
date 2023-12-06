const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  accounts: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account',
    },
    overdraftLimit:{
        type:Number,
        required:true,
    }
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;