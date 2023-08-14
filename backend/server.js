const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const exercisesRouter = require('./routes/exercises.js');
const signUpRouter = require('./routes/sign-up.js');

const app = express();
// const DB_URL = process.env.DB_URL || "localhost:27017";
//const MONGODB_URI = `mongodb://${DB_URL}/StefanMERN`;
const MONGODB_URI = 'mongodb://localhost:27017/StefanMERN';
const SERVER_PORT = process.env.SERVER_PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB Database!');
});
connection.on('error', () => {
  console.log('Mongoose Connection Error : ' + error);
});

app.use('/api/exercise-logs', exercisesRouter);
app.use('/api/sign-up', signUpRouter);

app.listen(SERVER_PORT, () => {
  console.log('Server listening on port ' + SERVER_PORT);
});
