//import express 
const express = require("express");
// require dotenv 
require('dotenv').config()
//instance of express
const app=express();
// importer la fonction de connection 
const dbConnect=require("./config/connectDB");

//connection DB 
dbConnect()
//middelware routing body parce
app.use(express.json());
//connection des  root 
app.use("/api/contact", require("./routes/contacts"));
//reservation de port 
const PORT =process.env.PORT 
//connection  server 
app.listen (PORT, (err)=>
err? console.error(err)
:console.log (`server is running on  port ${PORT}`)
)

//








