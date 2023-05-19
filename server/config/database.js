const express = require('express');
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://registration:registration@cluster0.sd2bhdx.mongodb.net/?retryWrites=true&w=majority";
 

const connectdatabase =() => {
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('\x1b[34m%s\x1b[0m','Connected to MongoDB Atlas'))
  .catch(err => console.log('Error connecting to MongoDB Atlas:', err));
}
module.exports= connectdatabase();