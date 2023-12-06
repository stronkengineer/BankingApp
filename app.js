const express=require('express');
const dotenv=require('dotenv');
const initiateDBConnection=require('./config/db');
dotenv.config({
    path:'./config/.env'
});

const PORT=process.env.PORT;

const app=express();

app.listen(PORT,async()=>{
console.log("Server is up on port 3000");
await initiateDBConnection();
});