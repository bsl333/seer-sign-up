require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRouter);

app.use((req, _, next) => {
  const status = 404;
  const message = `Not found. Request: ${req.method} ${req.url}`;
  next({ status, message });
});

// default error messaging
app.use((err, _, res, next) => {
  const { status = 500, message = 'Internal Server Error' } = err;
  res.status(status).send({ error: message });
});

module.exports = app;
