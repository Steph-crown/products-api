import express from 'express'
import dotenv from 'dotenv'
import { app } from './app.js';
import mongoose from 'mongoose';

// configure dotenv
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//! Connect the database
mongoose.connect(process.env.DB_STR, { useNewUrlParser: true })
  .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('DB Connected' )
});


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} `)
})