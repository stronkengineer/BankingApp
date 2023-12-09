const mongoose = require('mongoose');

class Database {
  static initiateDBConnection() {
    const dbURI = 'mongodb+srv://bankDB:bankDB@bankdb.2o1shqp.mongodb.net/?retryWrites=true&w=majority'; // Replace with your actual MongoDB URI and database name

    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });
  }

  static async close() {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

module.exports = Database;
