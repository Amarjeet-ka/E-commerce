// const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.REACT_APP_MONGO_URI;

const connectdatabase =() => {
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('\x1b[34m%s\x1b[0m','Connected to MongoDB Atlas'))
  .catch(err => console.log('Error connecting to MongoDB Atlas:', err));
}
module.exports= connectdatabase();