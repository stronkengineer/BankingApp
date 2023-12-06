const mongoose=require('mongoose');

const initiateDBConnection=async()=>{
    try{
    await mongoose.connect(process.env.DB);
    console.log('Connected to DB');
    }
    catch(error)
    {
     console.log(error);
    }
};
const close=async()=> {
    try {
      await mongoose.connection.close();
      console.log('Disconnected from the database');
    } catch (error) {
      console.error('Error closing the database connection:', error.message);
      throw error;
    }
  };
module.exports=initiateDBConnection;